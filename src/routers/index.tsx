import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Footer from "../shared/Footer/Footer";
import Page404 from "../containers/Page404/Page404";
import AppHeader from "../components/AppHeader";
import { pages } from "./pages";
import { Toaster } from "react-hot-toast";
import MiniOfferBanner from "../components/MiniOfferBanner";

const MyRoutes = () => {
  return (
    <BrowserRouter>
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
