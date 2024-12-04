import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { pages } from "./pages";
import { Toaster } from "react-hot-toast";
import { useAppSelector } from "../hooks/hooks";
import { selectIsLoggedIn } from "../features/auth/authSlice";
import Products from "../pages/Products/Products";
import MiniOfferBanner from "../components/MiniOfferBanner";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import AppHeader from "../components/AppHeader";
import ScrollToTop from "./ScrollToTop";
import Footer from "../shared/Footer/Footer";
import WhatsAppFloatIcon from "../components/WhatsAppFloatIcon/WhatsAppFloatIcon";

const MyRoutes = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <BrowserRouter>
      <Toaster />
      <ScrollToTop />
      <MiniOfferBanner />
      {/* <SiteHeader /> */}
      <AppHeader />
      <Routes>
        {pages.map(({ component: Component, path, protectedRoute }, index) => {
          if (path === "/login" || path === "/signup") {
            return (
              <Route
                key={index}
                path={path}
                element={isLoggedIn ? <Navigate to="/" /> : <Component />}
              />
            );
          }

          if (protectedRoute) {
            return (
              <Route
                key={index}
                element={
                  <AuthGuard>
                    <Component />
                  </AuthGuard>
                }
                path={path}
              />
            );
          }
          return <Route key={index} element={<Component />} path={path} />;
        })}
        <Route element={<Products />} />
        <Route path="*" Component={Products} />
      </Routes>
      <WhatsAppFloatIcon />
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
