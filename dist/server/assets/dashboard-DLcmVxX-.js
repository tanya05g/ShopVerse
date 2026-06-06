import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { User, Package, Heart, MapPin } from "lucide-react";
import { L as Layout } from "./Layout-ByVJ9qYZ.js";
import { P as ProductCard } from "./ProductCard-yeljkkv_.js";
import { E as EmptyState } from "./EmptyState-DsKkAcIo.js";
import { u as useApp, p as products } from "./router-BdMxXKxa.js";
import { m as money } from "./format-DPw4G9Gn.js";
import "@tanstack/react-query";
import "sonner";
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
  const [tab, setTab] = useState("profile");
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate({
      to: "/login"
    });
  }, [user, navigate]);
  if (!user) return null;
  const wished = wishlist.map((id) => products.find((p) => p.id === id)).filter(Boolean);
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("section", { className: "container-x py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8 flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl", children: [
          "Hi, ",
          user.name
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Manage your account and orders." })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: () => {
        logout();
        navigate({
          to: "/"
        });
      }, className: "btn-outline-dark", children: "Sign out" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-8 lg:grid-cols-[220px_1fr]", children: [
      /* @__PURE__ */ jsx("nav", { className: "flex flex-row gap-2 overflow-x-auto lg:flex-col", children: tabs.map(({
        k,
        label,
        icon: Icon
      }) => /* @__PURE__ */ jsxs("button", { onClick: () => setTab(k), className: `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${tab === k ? "bg-foreground text-background" : "hover:bg-secondary"}`, children: [
        /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }),
        " ",
        label
      ] }, k)) }),
      /* @__PURE__ */ jsxs("div", { children: [
        tab === "profile" && /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 space-y-2", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl", children: "Profile" }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Name:" }),
            " ",
            user.name
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Email:" }),
            " ",
            user.email
          ] })
        ] }),
        tab === "orders" && (orders.length === 0 ? /* @__PURE__ */ jsx(EmptyState, { icon: Package, title: "No orders yet", subtitle: "Your future orders will appear here." }) : /* @__PURE__ */ jsx("div", { className: "space-y-3", children: orders.map((o) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded-2xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "font-medium", children: [
              "Order #",
              String(o.id).slice(-6)
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
              new Date(o.date).toLocaleDateString(),
              " • ",
              o.items.length,
              " items"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "font-semibold", children: money(o.total) })
        ] }, o.id)) })),
        tab === "wishlist" && (wished.length === 0 ? /* @__PURE__ */ jsx(EmptyState, { icon: Heart, title: "No saved items", subtitle: "Tap the heart on any product to save it." }) : /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 xl:grid-cols-3", children: wished.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id)) })),
        tab === "addresses" && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            addresses.length === 0 && /* @__PURE__ */ jsx(EmptyState, { icon: MapPin, title: "No saved addresses", subtitle: "Add one below.", ctaLabel: "", ctaTo: "/dashboard" }),
            addresses.map((a) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-5", children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: a.label }),
              /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
                a.line,
                ", ",
                a.city,
                " ",
                a.zip
              ] })
            ] }, a.id))
          ] }),
          /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
            e.preventDefault();
            const f = new FormData(e.target);
            addAddress(Object.fromEntries(f));
            e.target.reset();
          }, className: "rounded-2xl border border-border bg-card p-6 grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsx(Field, { name: "label", label: "Label (e.g. Home)" }),
            /* @__PURE__ */ jsx(Field, { name: "city", label: "City" }),
            /* @__PURE__ */ jsx(Field, { name: "line", label: "Street address", className: "sm:col-span-2" }),
            /* @__PURE__ */ jsx(Field, { name: "zip", label: "ZIP / Postal" }),
            /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx("button", { className: "btn-brand", children: "Save address" }) })
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
  return /* @__PURE__ */ jsxs("label", { className: `block ${className}`, children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("input", { required: true, ...props, className: "mt-1 h-11 w-full rounded-xl border border-input bg-secondary/60 px-4 text-sm outline-none focus:border-brand" })
  ] });
}
export {
  Dashboard as component
};
