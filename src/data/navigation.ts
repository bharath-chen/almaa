import { NavItemType } from "../shared/Navigation/NavigationItem";
import ncNanoId from "../utils/ncNanoId";

export const MEGAMENU_TEMPLATES: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home Page",
    children: [
      { id: ncNanoId(), href: "/", name: "Home  1" },
      { id: ncNanoId(), href: "/home2", name: "Home  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Header  1" },
      { id: ncNanoId(), href: "/home2", name: "Header  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Coming Soon" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Shop Pages",
    children: [
      { id: ncNanoId(), href: "/page-collection", name: "Category Page 1" },
      { id: ncNanoId(), href: "/page-collection-2", name: "Category Page 2" },
      { id: ncNanoId(), href: "/product-detail", name: "Product Page 1" },
      { id: ncNanoId(), href: "/product-detail-2", name: "Product Page 2" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Other Pages",
    children: [
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
      { id: ncNanoId(), href: "/page-search", name: "Search Page" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/account", name: "Accout Page" },
      { id: ncNanoId(), href: "/account-my-order", name: "Order Page" },
      { id: ncNanoId(), href: "/subscription", name: "Subscription" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Blog Page",
    children: [
      { id: ncNanoId(), href: "/blog", name: "Blog Page" },
      { id: ncNanoId(), href: "/blog-single", name: "Blog Single" },
      { id: ncNanoId(), href: "/about", name: "About Page" },
      { id: ncNanoId(), href: "/contact", name: "Contact Page" },
      { id: ncNanoId(), href: "/login", name: "Login" },
      { id: ncNanoId(), href: "/signup", name: "Signup" },
    ],
  },
];

const OTHER_PAGE_CHILD: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home Demo 1",
  },
  {
    id: ncNanoId(),
    href: "/home2",
    name: "Home Demo 2",
  },
  {
    id: ncNanoId(),
    href: "/page-collection",
    name: "Category Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/page-collection",
        name: "Category page 1",
      },
      {
        id: ncNanoId(),
        href: "/page-collection-2",
        name: "Category page 2",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/product-detail",
    name: "Product Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/product-detail",
        name: "Product detail 1",
      },
      {
        id: ncNanoId(),
        href: "/product-detail-2",
        name: "Product detail 2",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/cart",
    name: "Cart Page",
  },
  {
    id: ncNanoId(),
    href: "/checkout",
    name: "Checkout Page",
  },
  {
    id: ncNanoId(),
    href: "/page-search",
    name: "Search Page",
  },
  {
    id: ncNanoId(),
    href: "/account",
    name: "Account Page",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "Other Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/about",
        name: "About",
      },
      {
        id: ncNanoId(),
        href: "/contact",
        name: "Contact us",
      },
      {
        id: ncNanoId(),
        href: "/login",
        name: "Login",
      },
      {
        id: ncNanoId(),
        href: "/signup",
        name: "Signup",
      },
      {
        id: ncNanoId(),
        href: "/subscription",
        name: "Subscription",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Blog Page",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/blog",
        name: "Blog Page",
      },
      {
        id: ncNanoId(),
        href: "/blog-single",
        name: "Blog Single",
      },
    ],
  },
];

const DOCTORS_TEAM_CHILD: NavItemType[] = [
  { id: ncNanoId(), href: "/", name: "Health Conditions" },
  { id: ncNanoId(), href: "/", name: "Nature of Product" },
  { id: ncNanoId(), href: "/", name: "Combos" },
  { id: ncNanoId(), href: "/", name: "Nutraceuitcals" },
  { id: ncNanoId(), href: "/", name: "Cosmetics" },
  { id: ncNanoId(), href: "/", name: "Single Herbs" },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/page-collection",
    name: "About",
  },
  {
    id: ncNanoId(),
    href: "/page-collection",
    name: "Doctors Team",
    type: "subMenu",
    children: DOCTORS_TEAM_CHILD,
  },
  {
    id: ncNanoId(),
    href: "/page-collection-2",
    name: "Wellness Center",
  },

  {
    id: ncNanoId(),
    href: "/page-collection-2",
    name: "Production Unit",
  },
  {
    id: ncNanoId(),
    href: "/page-search",
    name: "Resources",
    type: "subMenu",
    children: DOCTORS_TEAM_CHILD,
  },
  {
    id: ncNanoId(),
    href: "/page-search",
    name: "Library",
    type: "subMenu",
    children: OTHER_PAGE_CHILD,
  },
  {
    id: ncNanoId(),
    href: "/page-search",
    name: "Support",
    type: "subMenu",
    children: DOCTORS_TEAM_CHILD,
  },
];
