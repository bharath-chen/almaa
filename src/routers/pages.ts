import { Page } from "./types";
// import { lazy } from "react";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetailPage2 from "../containers/ProductDetailPage/ProductDetailPage2";
import PageSearch from "../containers/PageSearch";
import AccountPage from "../containers/AccountPage/AccountPage";
import AccountSavelists from "../containers/AccountPage/AccountSavelists";
import AccountPass from "../containers/AccountPage/AccountPass";
import AccountSupport from "../containers/AccountPage/AccountSupport";
import AccountOrder from "../containers/AccountPage/AccountOrder";
import AccountAddress from "../containers/AccountPage/AccountAddress";
import CartPage from "../containers/ProductDetailPage/CartPage";
import CheckoutPage from "../containers/PageCheckout/CheckoutPage";
import ThanksPage from "../pages/ThanksPage/ThanksPage";
import Blog from "../pages/Resources/Blog/Blog";
import BlogSingle from "../containers/BlogPage/BlogSingle";
import AlmaaGroups from "../pages/About/AlmaaGroups/AlmaaGroups";
import Founder from "../pages/About/Founder/Founder";
import DoctorsTeam from "../pages/About/DoctorsTeam/DoctorsTeam";
import DoctorDetail from "../pages/About/DoctorsTeam/DoctorDetail";
import OurBranches from "../pages/About/OurBranches/OurBranches";
import OurConcepts from "../pages/About/OurConcepts/OurConcepts";
import SiddhaScience from "../pages/About/SiddhaScience/SiddhaScience";
import WellnessCenter from "../pages/WellnessCenter/WellnessCenter";
import ProductionUnit from "../pages/ProductionUnit/ProductionUnit";
import Library from "../pages/Library/Library";
import CaseStudies from "../pages/Resources/CaseStudies/CaseStudies";
import CaseStudyDetail from "../pages/Resources/CaseStudies/CaseStudyDetail";
import NewsAndEvents from "../pages/Resources/NewsAndEvents/NewsAndEvents";
import NewsAndEventsDetail from "../pages/Resources/NewsAndEvents/NewsAndEventsDetail";
import Media from "../pages/Resources/Media/Media";
import Videos from "../pages/Resources/Videos/Videos";
import PageAbout from "../containers/PageAbout/PageAbout";
import PageSignUp from "../containers/PageSignUp/PageSignUp";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Faq from "../pages/Faq";
import Returns from "../pages/Returns/Returns";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import ShippingPolicy from "../pages/ShippingPolicy/ShippingPolicy";
import Invoice from "../components/Invoice/Invoice";
import Support from "../pages/Support/Support";
import Page404 from "../containers/Page404/Page404";

// const lazyComponent = (path: string) => lazy(() => import(path));

// const Home = lazyComponent("../pages/Home/Home");
// const Products = lazyComponent("../pages/Products/Products");
// const ProductDetail = lazyComponent(
//   "../containers/ProductDetailPage/ProductDetailPage2"
// );
// const PageSearch = lazyComponent("../containers/PageSearch");
// const AccountPage = lazyComponent("../containers/AccountPage/AccountPage");
// const AccountSavelists = lazyComponent(
//   "../containers/AccountPage/AccountSavelists"
// );
// const AccountPass = lazyComponent("../containers/AccountPage/AccountPass");
// const AccountSupport = lazyComponent(
//   "../containers/AccountPage/AccountSupport"
// );
// const AccountOrder = lazyComponent("../containers/AccountPage/AccountOrder");
// const AccountAddress = lazyComponent(
//   "../containers/AccountPage/AccountAddress"
// );
// const CartPage = lazyComponent("../containers/ProductDetailPage/CartPage");
// const CheckoutPage = lazyComponent("../containers/PageCheckout/CheckoutPage");
// const ThanksPage = lazyComponent("../pages/ThanksPage/ThanksPage");
// const Blog = lazyComponent("../pages/Resources/Blog/Blog");
// const BlogDetail = lazyComponent("../containers/BlogPage/BlogSingle");
// const AlmaaGroups = lazyComponent("../pages/About/AlmaaGroups/AlmaaGroups");
// const Founder = lazyComponent("../pages/About/Founder/Founder");
// const DoctorsTeam = lazyComponent("../pages/About/DoctorsTeam/DoctorsTeam");
// const DoctorDetail = lazyComponent("../pages/About/DoctorsTeam/DoctorDetail");
// const OurBranches = lazyComponent("../pages/About/OurBranches/OurBranches");
// const OurConcepts = lazyComponent("../pages/About/OurConcepts/OurConcepts");
// const SiddhaScience = lazyComponent(
//   "../pages/About/SiddhaScience/SiddhaScience"
// );
// const WellnessCenter = lazyComponent("../pages/WellnessCenter/WellnessCenter");
// const ProductionUnit = lazyComponent("../pages/ProductionUnit/ProductionUnit");
// const Library = lazyComponent("../pages/Library/Library");
// const CaseStudies = lazyComponent("../pages/Resources/CaseStudies/CaseStudies");
// const CaseStudyDetail = lazyComponent(
//   "../pages/Resources/CaseStudies/CaseStudyDetail"
// );
// const NewsAndEvents = lazyComponent(
//   "../pages/Resources/NewsAndEvents/NewsAndEvents"
// );
// const NewsAndEventsDetail = lazyComponent(
//   "../pages/Resources/NewsAndEvents/NewsAndEventsDetail"
// );
// const Media = lazyComponent("../pages/Resources/Media/Media");
// const Videos = lazyComponent("../pages/Resources/Videos/Videos");
// const PageAbout = lazyComponent("../containers/PageAbout/PageAbout");
// const PageSignUp = lazyComponent("../containers/PageSignUp/PageSignUp");
// const Login = lazyComponent("../pages/Login/Login");
// const ForgotPassword = lazyComponent("../pages/ForgotPassword/ForgotPassword");
// const Faq = lazyComponent("../pages/Faq");
// const Returns = lazyComponent("../pages/Returns/Returns");
// const TermsAndConditions = lazyComponent(
//   "../pages/TermsAndConditions/TermsAndConditions"
// );
// const PrivacyPolicy = lazyComponent("../pages/PrivacyPolicy/PrivacyPolicy");
// const ShippingPolicy = lazyComponent("../pages/ShippingPolicy/ShippingPolicy");
// const Invoice = lazyComponent("../components/Invoice/Invoice");
// const Support = lazyComponent("../pages/Support/Support");
// const Page404 = lazyComponent("../containers/Page404/Page404");

export const pages: Page[] = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/products/:natProductId/:natProduct", component: Products },
  { path: "/products/:categoryId/:category", component: Products },
  {
    path: "/product-detail/:name",
    component: ProductDetailPage2,
  },
  { path: "/page-search", component: PageSearch },
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
  { path: "/account-support", component: AccountSupport, protectedRoute: true },
  { path: "/account-my-order", component: AccountOrder, protectedRoute: true },
  {
    path: "/account-my-address",
    component: AccountAddress,
    protectedRoute: true,
  },
  { path: "/cart", component: CartPage, protectedRoute: true },
  { path: "/checkout", component: CheckoutPage, protectedRoute: true },
  { path: "/thanks", component: ThanksPage, protectedRoute: true },
  { path: "/blog", component: Blog },
  { path: "/blog/:id", component: BlogSingle },
  { path: "/almaa-groups", component: AlmaaGroups },
  { path: "/founder", component: Founder },
  { path: "/doctors-team", component: DoctorsTeam },
  { path: "/doctor-detail", component: DoctorDetail },
  { path: "/our-branches", component: OurBranches },
  { path: "/our-concepts", component: OurConcepts },
  { path: "/siddha-science", component: SiddhaScience },
  { path: "/wellness-center", component: WellnessCenter },
  { path: "/production-unit", component: ProductionUnit },
  { path: "/library", component: Library },
  { path: "/case-studies", component: CaseStudies },
  { path: "/case-study", component: CaseStudyDetail },
  { path: "/news-&-events", component: NewsAndEvents },
  { path: "/news-&-events-detail", component: NewsAndEventsDetail },
  { path: "/media-&-gallery", component: Media },
  { path: "/videos", component: Videos },
  { path: "/support", component: Support },
  { path: "/about", component: PageAbout },
  { path: "/signup", component: PageSignUp },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/faq", component: Faq },
  { path: "/returns-&-refund-policy", component: Returns },
  { path: "/terms-&-conditions", component: TermsAndConditions },
  { path: "/privacy-policy", component: PrivacyPolicy },
  { path: "/shipping-policy", component: ShippingPolicy },
  { path: "/invoice", component: Invoice, protectedRoute: true },
  { path: "/page-not-found", component: Page404 },
];
