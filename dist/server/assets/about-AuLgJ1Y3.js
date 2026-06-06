import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout } from "./Layout-ByVJ9qYZ.js";
import "@tanstack/react-router";
import "lucide-react";
import "react";
import "./router-BdMxXKxa.js";
import "@tanstack/react-query";
import "sonner";
function AboutPage() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-beige", children: /* @__PURE__ */ jsxs("div", { className: "container-x py-20 grid gap-10 md:grid-cols-2 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "animate-float-up", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-brand", children: "Our story" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-5xl", children: "Beautiful objects, fewer of them." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground", children: "ShopVerse started as a small studio with a simple belief: the things we live with shape how we feel. We partner with independent makers across the world to bring you essentials that last." })
      ] }),
      /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80", alt: "", className: "aspect-[4/3] rounded-3xl object-cover" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container-x py-20 grid gap-10 md:grid-cols-3", children: [["Crafted", "Each product is built to last beyond seasons."], ["Curated", "We say no to 90% of submissions."], ["Carbon-aware", "Every shipment offsets its footprint."]].map(([t, d]) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-8", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl", children: t }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: d })
    ] }, t)) })
  ] });
}
export {
  AboutPage as component
};
