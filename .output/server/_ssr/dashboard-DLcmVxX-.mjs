import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { L as Layout } from "./Layout-ByVJ9qYZ.mjs";
import { P as ProductCard } from "./ProductCard-yeljkkv_.mjs";
import { E as EmptyState } from "./EmptyState-DsKkAcIo.mjs";
import { u as useApp, p as products } from "./router-BdMxXKxa.mjs";
import { m as money } from "./format-DPw4G9Gn.mjs";
import "../_libs/sonner.mjs";
import { U as User, P as Package, H as Heart, M as MapPin } from "../_libs/lucide-react.mjs";

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
const tabs = [{
  k: "profile",
  label: "Profile",
  icon: User
}, {
  k: "orders",
  label: "Orders",
  icon: Package
}, {
  k: "wishlist",
  label: "Wishlist",
  icon: Heart
}, {
  k: "addresses",
  label: "Addresses",
  icon: MapPin
}];
function Dashboard() {
  const {
    user,
    logout,
    orders,
    wishlist,
    addresses,
    addAddress
  } = useApp();
  const [tab, setTab] = reactExports.useState("profile");
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (!user) navigate({
      to: "/login"
    });
  }, [user, navigate]);
  if (!user) return null;
  const wished = wishlist.map((id) => products.find((p) => p.id === id)).filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl", children: [
          "Hi, ",
          user.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Manage your account and orders." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        logout();
        navigate({
          to: "/"
        });
      }, className: "btn-outline-dark", children: "Sign out" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-[220px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-row gap-2 overflow-x-auto lg:flex-col", children: tabs.map(({
        k,
        label,
        icon: Icon
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(k), className: `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${tab === k ? "bg-foreground text-background" : "hover:bg-secondary"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
        " ",
        label
      ] }, k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        tab === "profile" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl", children: "Profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Name:" }),
            " ",
            user.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Email:" }),
            " ",
            user.email
          ] })
        ] }),
        tab === "orders" && (orders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: Package, title: "No orders yet", subtitle: "Your future orders will appear here." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: orders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-2xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium", children: [
              "Order #",
              String(o.id).slice(-6)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              new Date(o.date).toLocaleDateString(),
              " • ",
              o.items.length,
              " items"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: money(o.total) })
        ] }, o.id)) })),
        tab === "wishlist" && (wished.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: Heart, title: "No saved items", subtitle: "Tap the heart on any product to save it." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 xl:grid-cols-3", children: wished.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })),
        tab === "addresses" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            addresses.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: MapPin, title: "No saved addresses", subtitle: "Add one below.", ctaLabel: "", ctaTo: "/dashboard" }),
            addresses.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: a.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
                a.line,
                ", ",
                a.city,
                " ",
                a.zip
              ] })
            ] }, a.id))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
            e.preventDefault();
            const f = new FormData(e.target);
            addAddress(Object.fromEntries(f));
            e.target.reset();
          }, className: "rounded-2xl border border-border bg-card p-6 grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "label", label: "Label (e.g. Home)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "city", label: "City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "line", label: "Street address", className: "sm:col-span-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "zip", label: "ZIP / Postal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-brand", children: "Save address" }) })
          ] })
        ] })
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
  Dashboard as component
};
