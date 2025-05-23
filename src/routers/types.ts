import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/category"?: {};
  "/category/:category"?: {};
  "/products/:name"?: {};
  "/product-detail-2"?: {};
  "/page-search"?: {};
  "/account"?: {};
  "/account-savelists"?: {};
  "/account-change-password"?: {};
  "/account-support"?: {};
  "/account-my-order"?: {};
  "/account-my-address"?: {};
  "/cart"?: {};
  "/checkout"?: {};
  "/thanks"?: {};
  "/blog"?: {};
  "/blog/:title"?: {};
  "/case-studies"?: {};
  "/case-studies/:title"?: {};
  "/news-&-events"?: {};
  "/news-&-events/:title"?: {};
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
  "/returns-&-refund-policy": {};
  "/terms-&-conditions": {};
  "/privacy-policy"?: {};
  "/shipping-policy"?: {};
  "/invoice"?: {};
  "/page-not-found"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  component: ComponentType<Object>;
  protectedRoute?: boolean;
}
