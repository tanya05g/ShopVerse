import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { u as useApp } from "./router-BdMxXKxa.js";
import { d as discounted, m as money } from "./format-DPw4G9Gn.js";
function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useApp();
  const saved = wishlist.includes(product.id);
  const final = discounted(product.price, product.discount);
  const inStock = product.stock > 0;
  return /* @__PURE__ */ jsxs("div", { className: "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover-lift", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/product/$id", params: { id: String(product.id) }, className: "relative block aspect-square overflow-hidden bg-beige/50", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: product.image,
          alt: product.name,
          loading: "lazy",
          className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        }
      ),
      product.discount > 0 && /* @__PURE__ */ jsxs("span", { className: "absolute left-3 top-3 rounded-full bg-foreground px-2.5 py-1 text-[10px] font-semibold text-background", children: [
        "-",
        product.discount,
        "%"
      ] }),
      !inStock && /* @__PURE__ */ jsx("span", { className: "absolute right-3 top-3 rounded-full bg-destructive px-2.5 py-1 text-[10px] font-semibold text-destructive-foreground", children: "Out of stock" })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => toggleWishlist(product.id),
        "aria-label": "Toggle wishlist",
        className: "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 opacity-0 transition-all duration-300 group-hover:opacity-100",
        children: /* @__PURE__ */ jsx(Heart, { className: `h-4 w-4 ${saved ? "fill-brand text-brand" : ""}` })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col p-4", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: product.category }),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/product/$id",
          params: { id: String(product.id) },
          className: "mt-1 line-clamp-1 font-medium hover:text-brand transition-colors",
          children: product.name
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center gap-1 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 fill-amber-400 text-amber-400" }),
        product.rating
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-end justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold", children: money(final) }),
          product.discount > 0 && /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground line-through", children: money(product.price) })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            disabled: !inStock,
            onClick: () => addToCart(product),
            className: "grid h-10 w-10 place-items-center rounded-full bg-foreground text-background transition hover:bg-brand disabled:opacity-40",
            "aria-label": "Add to cart",
            children: /* @__PURE__ */ jsx(ShoppingBag, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] });
}
export {
  ProductCard as P
};
