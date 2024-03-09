import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Footer from "../shared/Footer/Footer";
import Page404 from "../containers/Page404/Page404";
import AppHeader from "../components/AppHeader";
import { pages } from "./pages";
import { Toaster } from "react-hot-toast";
import MiniOfferBanner from "../components/MiniOfferBanner";
import { ShoppingCartProvider } from "../store/shopping-cart-context";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Toaster />
        <ScrollToTop />
        <MiniOfferBanner />
        {/* <SiteHeader /> */}
        <AppHeader />
        <Routes>
          {pages.map(({ component: Component, path }, index) => {
            return <Route key={index} element={<Component />} path={path} />;
          })}
          <Route element={<Page404 />} />
          <Route path="*" Component={Page404} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </BrowserRouter>
  );
};

export default MyRoutes;
