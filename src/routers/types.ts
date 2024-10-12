import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/products"?: {};
  "/products/:natProductId/:natProduct": {};
  "/products/:categoryId/:category": {};
  // "/home2"?: {};
  // "/home3"?: {};
  "/product-detail/:name"?: {};
  "/product-detail-2"?: {};
  // "/page-collection"?: {};
  // "/page-collection-2"?: {};
  "/page-search"?: {};
  "/home-header-2"?: {};
  "/account"?: {};
  "/account-savelists"?: {};
  "/account-change-password"?: {};
  "/account-billing"?: {};
  "/account-my-order"?: {};
  "/cart"?: {};
  "/checkout"?: {};
  "/thanks"?: {};
  "/blog"?: {};
  "/blog/:id"?: {};
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
  "/forgot-password"?: {};
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
