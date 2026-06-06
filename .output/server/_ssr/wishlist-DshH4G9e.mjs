import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Layout } from "./Layout-ByVJ9qYZ.mjs";
import { P as ProductCard } from "./ProductCard-yeljkkv_.mjs";
import { E as EmptyState } from "./EmptyState-DsKkAcIo.mjs";
import { u as useApp, p as products } from "./router-BdMxXKxa.mjs";
import "../_libs/sonner.mjs";
import { H as Heart } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "./format-DPw4G9Gn.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function WishlistPage() {
  const {
    wishlist
  } = useApp();
  const items = wishlist.map((id) => products.find((p) => p.id === id)).filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-8 font-display text-4xl", children: "Your wishlist" }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: Heart, title: "Nothing saved yet", subtitle: "Tap the heart on any product to save it." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: items.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
  ] }) });
}
export {
  WishlistPage as component
};
