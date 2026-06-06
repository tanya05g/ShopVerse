import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { L as Layout } from "./Layout-ByVJ9qYZ.js";
import "react";
import "./router-BdMxXKxa.js";
import "@tanstack/react-query";
import "sonner";
function OrderConfirmation() {
  const orderId = Math.random().toString(36).slice(2, 8).toUpperCase();
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("section", { className: "container-x py-24 text-center animate-fade-in", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand/10 animate-pulse-ring", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-10 w-10 text-brand" }) }),
    /* @__PURE__ */ jsx("h1", { className: "mt-6 font-display text-4xl", children: "Thank you for your order!" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "A confirmation has been sent to your email." }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-6 inline-block rounded-full bg-secondary px-5 py-2 text-sm", children: [
      "Order ID: ",
      /* @__PURE__ */ jsxs("span", { className: "font-mono font-semibold", children: [
        "#",
        orderId
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsx(Link, { to: "/shop", className: "btn-brand", children: "Continue shopping" }),
      /* @__PURE__ */ jsx(Link, { to: "/dashboard", className: "btn-outline-dark", children: "View orders" })
    ] })
  ] }) });
}
export {
  OrderConfirmation as component
};
