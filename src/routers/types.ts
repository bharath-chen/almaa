import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/products"?: {};
  "/products/:filter": {};
  "/home2"?: {};
  "/home3"?: {};
  "/product-detail/:id"?: {};
  "/product-detail-2"?: {};
  "/page-collection"?: {};
  "/page-collection-2"?: {};
  "/page-search"?: {};
  "/home-header-2"?: {};
  "/account"?: {};
  "/account-savelists"?: {};
  "/account-change-password"?: {};
  "/account-billing"?: {};
  "/account-my-order"?: {};
  "/cart"?: {};
  "/checkout"?: {};
  "/blog"?: {};
  "/blog-single"?: {};
  "/case-studies"?: {};
  "/case-study"?: {};
  "/news-&-events"?: {};
  "/news-detail"?: {};
  "/media-&-gallery"?: {};
  "/videos"?: {};
  "/almaa-groups"?: {};
  "/founder"?: {};
  "/doctors-team"?: {};
  "/doctor-detail"?: {};
  "/our-branches"?: {};
  "/siddha-science"?: {};
  "/our-concepts"?: {};
  "/library"?: {};
  "/production-unit"?: {};
  "/wellness-center"?: {};
  "/about"?: {};
  "/support"?: {};
  "/login"?: {};
  "/signup"?: {};
  "/faq"?: {};
  "/forgot-pass"?: {};
  "/page404"?: {};
  "/subscription"?: {};
  "/terms-of-service"?: {};
  "/terms-of-use"?: {};
  "/privacy-policy"?: {};
  "/page-not-found"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  component: ComponentType<Object>;
  protectedRoute?: boolean;
}
