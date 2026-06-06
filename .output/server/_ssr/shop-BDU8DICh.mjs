import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useSearch } from "../_libs/tanstack__react-router.mjs";
import { L as Layout } from "./Layout-ByVJ9qYZ.mjs";
import { P as ProductCard } from "./ProductCard-yeljkkv_.mjs";
import { E as EmptyState } from "./EmptyState-DsKkAcIo.mjs";
import { p as products, c as categories } from "./router-BdMxXKxa.mjs";
import { d as discounted } from "./format-DPw4G9Gn.mjs";
import "../_libs/sonner.mjs";
import { S as Search, a as SlidersHorizontal } from "../_libs/lucide-react.mjs";

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
function ShopPage() {
  const {
    q: q0,
    category: c0
  } = useSearch({
    from: "/shop"
  });
  const [query, setQuery] = reactExports.useState(q0);
  const [category, setCategory] = reactExports.useState(c0);
  const [maxPrice, setMaxPrice] = reactExports.useState(1e3);
  const [sort, setSort] = reactExports.useState("featured");
  const [openFilters, setOpen] = reactExports.useState(false);
  const filtered = reactExports.useMemo(() => {
    let list = products.filter((p) => {
      const matchesQ = !query || p.name.toLowerCase().includes(query.toLowerCase());
      const matchesC = category === "all" || p.category === category;
      const matchesP = discounted(p.price, p.discount) <= maxPrice;
      return matchesQ && matchesC && matchesP;
    });
    const k = sort;
    if (k === "price-asc") list = list.slice().sort((a, b) => discounted(a.price, a.discount) - discounted(b.price, b.discount));
    if (k === "price-desc") list = list.slice().sort((a, b) => discounted(b.price, b.discount) - discounted(a.price, a.discount));
    if (k === "rating") list = list.slice().sort((a, b) => b.rating - a.rating);
    if (k === "newest") list = list.slice().reverse();
    return list;
  }, [query, category, maxPrice, sort]);
  const Sidebar = /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase tracking-wider", children: "Categories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: [{
        slug: "all",
        name: "All products"
      }, ...categories].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCategory(c.slug), className: `block w-full rounded-lg px-3 py-2 text-left text-sm transition ${category === c.slug ? "bg-foreground text-background" : "hover:bg-secondary"}`, children: c.name }, c.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase tracking-wider", children: "Max price" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 20, max: 1e3, step: 10, value: maxPrice, onChange: (e) => setMaxPrice(Number(e.target.value)), className: "w-full accent-[oklch(0.55_0.18_250)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-sm text-muted-foreground", children: [
        "Up to $",
        maxPrice
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl", children: "Shop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
          filtered.length,
          " products"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-wrap items-center gap-3 md:w-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 md:w-72 md:flex-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search products...", className: "h-11 w-full rounded-full border border-input bg-secondary/60 pl-10 pr-4 text-sm outline-none focus:border-brand" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: sort, onChange: (e) => setSort(e.target.value), className: "h-11 rounded-full border border-input bg-secondary/60 px-4 text-sm outline-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "featured", children: "Featured" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "newest", children: "Newest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price-asc", children: "Price: Low to High" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price-desc", children: "Price: High to Low" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rating", children: "Top Rated" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen((o) => !o), className: "grid h-11 w-11 place-items-center rounded-full border border-input lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-4 w-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-[240px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${openFilters ? "block" : "hidden"} lg:block`, children: Sidebar }),
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: Search, title: "No products match", subtitle: "Try clearing some filters." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
    ] })
  ] }) });
}
export {
  ShopPage as component
};
