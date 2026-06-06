import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout } from "./Layout-ByVJ9qYZ.mjs";
import { E as EmptyState } from "./EmptyState-DsKkAcIo.mjs";
import { u as useApp } from "./router-BdMxXKxa.mjs";
import { d as discounted, m as money } from "./format-DPw4G9Gn.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { f as ShoppingBag, T as Trash2, g as Minus, h as Plus } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function CartPage() {
  const {
    cart,
    updateQty,
    removeFromCart
  } = useApp();
  const [coupon, setCoupon] = reactExports.useState("");
  const [appliedPct, setAppliedPct] = reactExports.useState(0);
  const subtotal = cart.reduce((s, x) => s + discounted(x.price, x.discount) * x.qty, 0);
  const shipping = subtotal > 75 || subtotal === 0 ? 0 : 8;
  const discount = subtotal * appliedPct / 100;
  const total = subtotal + shipping - discount;
  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SHOPVERSE10") {
      setAppliedPct(10);
      toast.success("Coupon applied — 10% off");
    } else toast.error("Invalid coupon. Try SHOPVERSE10");
  };
  if (cart.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: ShoppingBag, title: "Your cart is empty", subtitle: "Let's find something beautiful." }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-8 font-display text-4xl", children: "Your cart" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-[1fr_360px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: cart.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 rounded-2xl border border-border bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: {
          id: String(item.id)
        }, className: "h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-beige", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.name, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: {
              id: String(item.id)
            }, className: "font-medium hover:text-brand", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeFromCart(item.id), className: "text-muted-foreground hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
            money(discounted(item.price, item.discount)),
            " each"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center rounded-full border border-input", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateQty(item.id, item.qty - 1), className: "grid h-9 w-9 place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 text-center text-sm", children: item.qty }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateQty(item.id, item.qty + 1), className: "grid h-9 w-9 place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: money(discounted(item.price, item.discount) * item.qty) })
          ] })
        ] })
      ] }, item.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "h-fit space-y-5 rounded-2xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl", children: "Order summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: money(subtotal) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Shipping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: shipping === 0 ? "Free" : money(shipping) })
          ] }),
          appliedPct > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-emerald-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Coupon (",
              appliedPct,
              "%)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "-",
              money(discount)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 flex justify-between text-lg font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: money(total) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Coupon code" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: coupon, onChange: (e) => setCoupon(e.target.value), placeholder: "SHOPVERSE10", className: "h-10 flex-1 rounded-full border border-input bg-secondary/60 px-4 text-sm outline-none focus:border-brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: applyCoupon, className: "rounded-full bg-foreground px-4 text-sm font-medium text-background", children: "Apply" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/checkout", className: "btn-brand w-full", children: "Checkout" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "block text-center text-sm text-muted-foreground hover:text-foreground", children: "Continue shopping" })
      ] })
    ] })
  ] }) });
}
export {
  CartPage as component
};
