import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/products"?: {};
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
  "/almaa-groups"?: {};
  "/library"?: {};
  "/production-unit"?: {};
  "/wellness-center"?: {};
  "/about"?: {};
  "/support"?: {};
  "/login"?: {};
  "/signup"?: {};
  "/forgot-pass"?: {};
  "/page404"?: {};
  "/subscription"?: {};
  "/page-not-found"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  component: ComponentType<Object>;
}
