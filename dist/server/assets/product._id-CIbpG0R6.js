import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Star, Minus, Plus, ShoppingBag, Heart, Truck, ShieldCheck, RefreshCcw } from "lucide-react";
import { L as Layout } from "./Layout-ByVJ9qYZ.js";
import { P as ProductCard } from "./ProductCard-yeljkkv_.js";
import { S as SectionHeader } from "./SectionHeader-CvilnY7D.js";
import { R as Route, u as useApp, g as getRelated } from "./router-BdMxXKxa.js";
import { d as discounted, m as money } from "./format-DPw4G9Gn.js";
import "@tanstack/react-query";
import "sonner";
function ProductPage() {
  const {
    product
  } = Route.useLoaderData();
  const {
    addToCart,
    toggleWishlist,
    wishlist,
    addRecentlyViewed
  } = useApp();
  const [qty, setQty] = useState(1);
  const [activeImg, setImg] = useState(product.image);
  const navigate = useNavigate();
  const saved = wishlist.includes(product.id);
  const final = discounted(product.price, product.discount);
  const related = getRelated(product, 4);
  const gallery = [product.image, product.image + "&sat=-30", product.image + "&bri=10", product.image + "&blur=5"];
  useEffect(() => {
    addRecentlyViewed(product.id);
  }, [product.id]);
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("section", { className: "container-x py-12", children: [
    /* @__PURE__ */ jsxs("nav", { className: "mb-6 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-foreground", children: "Home" }),
      " / ",
      /* @__PURE__ */ jsx(Link, { to: "/shop", className: "hover:text-foreground", children: "Shop" }),
      " / ",
      /* @__PURE__ */ jsx("span", { className: "capitalize", children: product.category })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl bg-beige aspect-square", children: /* @__PURE__ */ jsx("img", { src: activeImg, alt: product.name, className: "h-full w-full object-cover animate-fade-in" }, activeImg) }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-4 gap-3", children: gallery.map((g) => /* @__PURE__ */ jsx("button", { onClick: () => setImg(g), className: `overflow-hidden rounded-xl border-2 transition ${activeImg === g ? "border-brand" : "border-transparent"}`, children: /* @__PURE__ */ jsx("img", { src: g, alt: "", className: "aspect-square w-full object-cover" }) }, g)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-brand", children: product.category }),
        /* @__PURE__ */ jsx("h1", { className: "mt-2 font-display text-4xl", children: product.name }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "flex", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: `h-4 w-4 ${i < Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted"}` }, i)) }),
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
            product.rating,
            " • 124 reviews"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-end gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-4xl", children: money(final) }),
          product.discount > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "text-lg text-muted-foreground line-through", children: money(product.price) }),
            /* @__PURE__ */ jsxs("span", { className: "rounded-full bg-foreground px-2.5 py-1 text-xs font-semibold text-background", children: [
              "-",
              product.discount,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 leading-relaxed text-muted-foreground", children: product.description }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 text-sm", children: product.stock > 0 ? /* @__PURE__ */ jsxs("span", { className: "text-emerald-600", children: [
          "● In stock — ",
          product.stock,
          " available"
        ] }) : /* @__PURE__ */ jsx("span", { className: "text-destructive", children: "● Out of stock" }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center rounded-full border border-input", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => setQty((q) => Math.max(1, q - 1)), className: "grid h-11 w-11 place-items-center", children: /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx("div", { className: "w-10 text-center text-sm font-medium", children: qty }),
            /* @__PURE__ */ jsx("button", { onClick: () => setQty((q) => q + 1), className: "grid h-11 w-11 place-items-center", children: /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxs("button", { disabled: product.stock === 0, onClick: () => addToCart(product, qty), className: "btn-brand disabled:opacity-50", children: [
            /* @__PURE__ */ jsx(ShoppingBag, { className: "h-4 w-4" }),
            " Add to cart"
          ] }),
          /* @__PURE__ */ jsx("button", { disabled: product.stock === 0, onClick: () => {
            addToCart(product, qty);
            navigate({
              to: "/checkout"
            });
          }, className: "btn-outline-dark disabled:opacity-50", children: "Buy now" }),
          /* @__PURE__ */ jsx("button", { onClick: () => toggleWishlist(product.id), className: "grid h-11 w-11 place-items-center rounded-full border border-input", children: /* @__PURE__ */ jsx(Heart, { className: `h-4 w-4 ${saved ? "fill-brand text-brand" : ""}` }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 text-xs", children: [[Truck, "Free shipping over $75"], [ShieldCheck, "2-year warranty"], [RefreshCcw, "30-day returns"]].map(([Icon, label], i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center gap-2", children: [
          /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-brand" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: label })
        ] }, i)) })
      ] })
    ] }),
    related.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-24", children: [
      /* @__PURE__ */ jsx(SectionHeader, { title: "You may also like" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: related.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id)) })
    ] })
  ] }) });
}
export {
  ProductPage as component
};
