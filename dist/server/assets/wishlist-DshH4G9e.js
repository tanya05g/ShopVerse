import { jsx, jsxs } from "react/jsx-runtime";
import { Heart } from "lucide-react";
import { L as Layout } from "./Layout-ByVJ9qYZ.js";
import { P as ProductCard } from "./ProductCard-yeljkkv_.js";
import { E as EmptyState } from "./EmptyState-DsKkAcIo.js";
import { u as useApp, p as products } from "./router-BdMxXKxa.js";
import "@tanstack/react-router";
import "react";
import "./format-DPw4G9Gn.js";
import "@tanstack/react-query";
import "sonner";
function WishlistPage() {
  const {
    wishlist
  } = useApp();
  const items = wishlist.map((id) => products.find((p) => p.id === id)).filter(Boolean);
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("section", { className: "container-x py-12", children: [
    /* @__PURE__ */ jsx("h1", { className: "mb-8 font-display text-4xl", children: "Your wishlist" }),
    items.length === 0 ? /* @__PURE__ */ jsx(EmptyState, { icon: Heart, title: "Nothing saved yet", subtitle: "Tap the heart on any product to save it." }) : /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: items.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id)) })
  ] }) });
}
export {
  WishlistPage as component
};
