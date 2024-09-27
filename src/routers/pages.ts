import PageHome from "../containers/PageHome/PageHome";
import { Page } from "./types";
import AccountPage from "../containers/AccountPage/AccountPage";
import PageAbout from "../containers/PageAbout/PageAbout";
import PageSignUp from "../containers/PageSignUp/PageSignUp";
import Login from "../pages/Login/Login";
import PageSubcription from "../containers/PageSubcription/PageSubcription";
import BlogSingle from "../containers/BlogPage/BlogSingle";
import PageCollection from "../containers/PageCollection";
import PageSearch from "../containers/PageSearch";
import PageHome2 from "../containers/PageHome/PageHome2";
import PageHome3 from "../containers/PageHome/PageHome3";
import ProductDetailPage from "../containers/ProductDetailPage/ProductDetailPage";
import ProductDetailPage2 from "../containers/ProductDetailPage/ProductDetailPage2";
import AccountSavelists from "../containers/AccountPage/AccountSavelists";
import AccountPass from "../containers/AccountPage/AccountPass";
import AccountBilling from "../containers/AccountPage/AccountBilling";
import AccountOrder from "../containers/AccountPage/AccountOrder";
import CartPage from "../containers/ProductDetailPage/CartPage";
import CheckoutPage from "../containers/PageCheckout/CheckoutPage";
import PageCollection2 from "../containers/PageCollection2";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Page404 from "../containers/Page404/Page404";
import Blog from "../pages/Resources/Blog/Blog";
import CaseStudies from "../pages/Resources/CaseStudies/CaseStudies";
import Support from "../pages/Support/Support";
import Library from "../pages/Library/Library";
import WellnessCenter from "../pages/WellnessCenter/WellnessCenter";
import ProductionUnit from "../pages/ProductionUnit/ProductionUnit";
import AlmaaGroups from "../pages/About/AlmaaGroups/AlmaaGroups";
import Founder from "../pages/About/Founder/Founder";
import DoctorsTeam from "../pages/About/DoctorsTeam/DoctorsTeam";
import OurBranches from "../pages/About/OurBranches/OurBranches";
import SiddhaScience from "../pages/About/SiddhaScience/SiddhaScience";
import OurConcepts from "../pages/About/OurConcepts/OurConcepts";
import DoctorDetail from "../pages/About/DoctorsTeam/DoctorDetail";
import NewsAndEvents from "../pages/Resources/NewsAndEvents/NewsAndEvents";
import Media from "../pages/Resources/Media/Media";
import Videos from "../pages/Resources/Videos/Videos";
import CaseStudyDetail from "../pages/Resources/CaseStudies/CaseStudyDetail";
import Faq from "../pages/Faq";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";

export const pages: Page[] = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/products/:natProductId/:natProduct", component: Products },
  { path: "/products/:categoryId/:category", component: Products },
  {
    path: "/product-detail/:id",
    component: ProductDetailPage2,
  },
  { path: "/home2", component: PageHome2 },
  { path: "/home3", component: PageHome3 },
  //
  { path: "/home-header-2", component: PageHome },
  { path: "/product-detail-2", component: ProductDetailPage },
  //
  { path: "/page-collection-2", component: PageCollection2 },
  { path: "/page-collection", component: PageCollection },
  { path: "/page-search", component: PageSearch },
  //
  { path: "/account", component: AccountPage, protectedRoute: true },
  {
    path: "/account-savelists",
    component: AccountSavelists,
    protectedRoute: true,
  },
  {
    path: "/account-change-password",
    component: AccountPass,
    protectedRoute: true,
  },
  { path: "/account-billing", component: AccountBilling, protectedRoute: true },
  { path: "/account-my-order", component: AccountOrder, protectedRoute: true },
  //
  { path: "/cart", component: CartPage, protectedRoute: true },
  { path: "/checkout", component: CheckoutPage, protectedRoute: true },
  //
  { path: "/blog", component: Blog },
  { path: "/blog/:id", component: BlogSingle },
  //
  { path: "/almaa-groups", component: AlmaaGroups },
  { path: "/founder", component: Founder },
  { path: "/doctors-team", component: DoctorsTeam },
  { path: "/doctor-detail", component: DoctorDetail },
  { path: "/our-branches", component: OurBranches },
  { path: "/our-concepts", component: OurConcepts },
  { path: "/siddha-science", component: SiddhaScience },
  //
  { path: "/wellness-center", component: WellnessCenter },
  { path: "/production-unit", component: ProductionUnit },
  { path: "/library", component: Library },
  { path: "/case-studies", component: CaseStudies },
  { path: "/case-study", component: CaseStudyDetail },
  { path: "/news-&-events", component: NewsAndEvents },
  { path: "/news-detail", component: BlogSingle },
  { path: "/media-&-gallery", component: Media },
  { path: "/videos", component: Videos },
  { path: "/support", component: Support },
  { path: "/about", component: PageAbout },
  { path: "/signup", component: PageSignUp },
  { path: "/login", component: Login },
  { path: "/faq", component: Faq },
  { path: "/subscription", component: PageSubcription },
  { path: "/terms-of-service", component: TermsAndConditions },
  { path: "/terms-of-use", component: TermsAndConditions },
  { path: "/privacy-policy", component: PrivacyPolicy },
  { path: "/page-not-found", component: Page404 },
];
