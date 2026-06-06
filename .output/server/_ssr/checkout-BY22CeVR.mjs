import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout } from "./Layout-ByVJ9qYZ.mjs";
import { E as EmptyState } from "./EmptyState-DsKkAcIo.mjs";
import { u as useApp } from "./router-BdMxXKxa.mjs";
import { d as discounted, m as money } from "./format-DPw4G9Gn.mjs";
import "../_libs/sonner.mjs";
import { e as CreditCard, W as Wallet, L as Lock } from "../_libs/lucide-react.mjs";

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
function CheckoutPage() {
  const {
    cart,
    placeOrder
  } = useApp();
  const navigate = useNavigate();
  const [method, setMethod] = reactExports.useState("card");
  const subtotal = cart.reduce((s, x) => s + discounted(x.price, x.discount) * x.qty, 0);
  const shipping = subtotal > 75 || subtotal === 0 ? 0 : 8;
  const total = subtotal + shipping;
  if (cart.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Nothing to check out", subtitle: "Your cart is empty." }) });
  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    placeOrder({
      total,
      items: cart,
      shipping: data
    });
    navigate({
      to: "/order-confirmation"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-8 font-display text-4xl", children: "Checkout" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "grid gap-10 lg:grid-cols-[1fr_380px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-display text-xl", children: "Shipping address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "firstName", label: "First name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "lastName", label: "Last name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "email", label: "Email", type: "email", className: "sm:col-span-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "address", label: "Address", className: "sm:col-span-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "city", label: "City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "zip", label: "ZIP / Postal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "country", label: "Country", defaultValue: "United States", className: "sm:col-span-2" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-display text-xl", children: "Payment method" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-3", children: [{
            v: "card",
            label: "Credit card",
            Icon: CreditCard
          }, {
            v: "paypal",
            label: "PayPal",
            Icon: Wallet
          }, {
            v: "cod",
            label: "Cash on delivery",
            Icon: Lock
          }].map(({
            v,
            label,
            Icon
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setMethod(v), className: `flex items-center gap-2 rounded-xl border p-3 text-sm transition ${method === v ? "border-brand bg-brand/5" : "border-border"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
            " ",
            label
          ] }, v)) }),
          method === "card" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "card", label: "Card number", placeholder: "4242 4242 4242 4242", className: "sm:col-span-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "exp", label: "Expiry", placeholder: "MM / YY" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "cvc", label: "CVC", placeholder: "123" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "h-fit space-y-4 rounded-2xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl", children: "Order summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: cart.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: x.image, alt: "", className: "h-12 w-12 rounded-lg object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "line-clamp-1", children: x.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground", children: [
              "× ",
              x.qty
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: money(discounted(x.price, x.discount) * x.qty) })
        ] }, x.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 border-t border-border pt-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: money(subtotal) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Shipping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: shipping === 0 ? "Free" : money(shipping) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex justify-between text-base font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: money(total) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-brand w-full", children: "Place order" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cart", className: "block text-center text-xs text-muted-foreground hover:text-foreground", children: "Back to cart" })
      ] })
    ] })
  ] }) });
}
function Field({
  label,
  className = "",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `block ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, ...props, className: "mt-1 h-11 w-full rounded-xl border border-input bg-secondary/60 px-4 text-sm outline-none focus:border-brand" })
  ] });
}
export {
  CheckoutPage as component
};
