import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Truck, ShieldCheck, RefreshCcw } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { L as Layout } from "./Layout-ByVJ9qYZ.js";
import { P as ProductCard } from "./ProductCard-yeljkkv_.js";
import { S as SectionHeader } from "./SectionHeader-CvilnY7D.js";
import { u as useApp, p as products, c as categories, t as testimonials } from "./router-BdMxXKxa.js";
import "./format-DPw4G9Gn.js";
import "@tanstack/react-query";
import "sonner";
function CardSkeleton() {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsx("div", { className: "skeleton aspect-square w-full" }),
    /* @__PURE__ */ jsx("div", { className: "skeleton h-4 w-3/4" }),
    /* @__PURE__ */ jsx("div", { className: "skeleton h-4 w-1/2" })
  ] });
}
function GridSkeleton({ n = 8 }) {
  return /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: Array.from({ length: n }).map((_, i) => /* @__PURE__ */ jsx(CardSkeleton, {}, i)) });
}
function useCountdown(hours = 8) {
  const target = useMemo(() => Date.now() + hours * 3600 * 1e3, [hours]);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1e3);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target - now);
  const h = String(Math.floor(diff / 36e5)).padStart(2, "0");
  const m = String(Math.floor(diff % 36e5 / 6e4)).padStart(2, "0");
  const s = String(Math.floor(diff % 6e4 / 1e3)).padStart(2, "0");
  return {
    h,
    m,
    s
  };
}
function HomePage() {
  const {
    recentlyViewed
  } = useApp();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, []);
  const featured = products.filter((p) => p.featured).slice(0, 8);
  const trending = products.filter((p) => p.trending).slice(0, 4);
  const flash = products.filter((p) => p.discount >= 20).slice(0, 4);
  const recent = recentlyViewed.map((id) => products.find((p) => p.id === id)).filter(Boolean);
  const recs = products.slice().sort(() => 0.5 - Math.random()).slice(0, 4);
  const {
    h,
    m,
    s
  } = useCountdown(8);
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden bg-beige", children: /* @__PURE__ */ jsxs("div", { className: "container-x grid items-center gap-10 py-16 md:grid-cols-2 md:py-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "animate-float-up", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-brand" }),
          " New season collection"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-5 font-display text-5xl leading-[1.05] md:text-7xl", children: [
          "Modern essentials, ",
          /* @__PURE__ */ jsx("span", { className: "text-brand", children: "crafted" }),
          " for everyday."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-md text-muted-foreground", children: "Discover thoughtfully designed products from independent brands. Quality you can feel, prices that respect you." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/shop", className: "btn-brand", children: [
            "Shop now ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/about", className: "btn-outline-dark", children: "Our story" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 grid max-w-md grid-cols-3 gap-4 text-xs", children: [[Truck, "Free shipping"], [ShieldCheck, "2-yr warranty"], [RefreshCcw, "30-day returns"]].map(([Icon, label], i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center gap-1", children: [
          /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-brand" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: label })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative animate-float-up", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 -z-10 rounded-[3rem] bg-brand/10 blur-3xl" }),
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=80", alt: "Featured ShopVerse fashion editorial", className: "aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)]" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -left-6 hidden rounded-2xl bg-background p-4 shadow-card md:block", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Trusted by" }),
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-display", children: "25k+ shoppers" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container-x py-20", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Browse", title: "Shop by category", subtitle: "Seven worlds to explore." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7", children: categories.map((c, i) => /* @__PURE__ */ jsxs(Link, { to: "/shop", search: {
        category: c.slug
      }, className: "group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center hover-lift animate-fade-in", style: {
        animationDelay: `${i * 60}ms`
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-14 w-14 place-items-center rounded-full bg-beige text-foreground transition group-hover:bg-foreground group-hover:text-background", children: /* @__PURE__ */ jsx("span", { className: "font-display text-xl", children: c.name[0] }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: c.name })
      ] }, c.slug)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "container-x py-10", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Editors' picks", title: "Featured products", action: /* @__PURE__ */ jsx(Link, { to: "/shop", className: "text-sm font-medium text-brand", children: "View all →" }) }),
      loading ? /* @__PURE__ */ jsx(GridSkeleton, {}) : /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: featured.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container-x py-20", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-foreground p-8 text-background md:p-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-brand", children: "Limited time" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-4xl", children: "Flash sale — ends soon" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-background/70", children: "Up to 30% off curated picks." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: [h, m, s].map((v, i) => /* @__PURE__ */ jsx("div", { className: "grid h-16 w-16 place-items-center rounded-2xl bg-background/10 font-display text-2xl", children: v }, i)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: flash.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container-x py-10", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "What's hot", title: "Trending now" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: trending.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "container-x py-20", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Just for you", title: "AI recommendations", subtitle: "Curated using your browsing patterns." }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: recs.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id)) })
    ] }),
    recent.length > 0 && /* @__PURE__ */ jsxs("section", { className: "container-x py-10", children: [
      /* @__PURE__ */ jsx(SectionHeader, { title: "Recently viewed" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: recent.slice(0, 4).map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-beige py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Loved by", title: "Real people, real reviews" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: testimonials.map((t, i) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-background p-6 shadow-sm hover-lift", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm leading-relaxed", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: t.avatar, alt: t.name, className: "h-10 w-10 rounded-full object-cover" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: t.name }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
          ] })
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container-x py-20", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16 text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl md:text-5xl", children: "Join the ShopVerse list" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "New arrivals, exclusive drops, and 10% off your first order." }),
      /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mx-auto mt-8 flex w-full max-w-md flex-col gap-2 sm:flex-row", children: [
        /* @__PURE__ */ jsx("input", { type: "email", required: true, placeholder: "you@example.com", className: "h-12 flex-1 rounded-full border border-input bg-secondary/60 px-5 text-sm outline-none focus:border-brand" }),
        /* @__PURE__ */ jsx("button", { className: "btn-brand h-12", children: "Subscribe" })
      ] })
    ] }) })
  ] });
}
export {
  HomePage as component
};
