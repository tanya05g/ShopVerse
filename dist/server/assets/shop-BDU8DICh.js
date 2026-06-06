import { jsxs, jsx } from "react/jsx-runtime";
import { useSearch } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { L as Layout } from "./Layout-ByVJ9qYZ.js";
import { P as ProductCard } from "./ProductCard-yeljkkv_.js";
import { E as EmptyState } from "./EmptyState-DsKkAcIo.js";
import { p as products, c as categories } from "./router-BdMxXKxa.js";
import { d as discounted } from "./format-DPw4G9Gn.js";
import "@tanstack/react-query";
import "sonner";
function ShopPage() {
  const {
    q: q0,
    category: c0
  } = useSearch({
    from: "/shop"
  });
  const [query, setQuery] = useState(q0);
  const [category, setCategory] = useState(c0);
  const [maxPrice, setMaxPrice] = useState(1e3);
  const [sort, setSort] = useState("featured");
  const [openFilters, setOpen] = useState(false);
  const filtered = useMemo(() => {
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
  const Sidebar = /* @__PURE__ */ jsxs("aside", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-3 text-sm font-semibold uppercase tracking-wider", children: "Categories" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-1", children: [{
        slug: "all",
        name: "All products"
      }, ...categories].map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setCategory(c.slug), className: `block w-full rounded-lg px-3 py-2 text-left text-sm transition ${category === c.slug ? "bg-foreground text-background" : "hover:bg-secondary"}`, children: c.name }, c.slug)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-3 text-sm font-semibold uppercase tracking-wider", children: "Max price" }),
      /* @__PURE__ */ jsx("input", { type: "range", min: 20, max: 1e3, step: 10, value: maxPrice, onChange: (e) => setMaxPrice(Number(e.target.value)), className: "w-full accent-[oklch(0.55_0.18_250)]" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-1 text-sm text-muted-foreground", children: [
        "Up to $",
        maxPrice
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("section", { className: "container-x py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8 flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl", children: "Shop" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
          filtered.length,
          " products"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-wrap items-center gap-3 md:w-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex-1 md:w-72 md:flex-none", children: [
          /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search products...", className: "h-11 w-full rounded-full border border-input bg-secondary/60 pl-10 pr-4 text-sm outline-none focus:border-brand" })
        ] }),
        /* @__PURE__ */ jsxs("select", { value: sort, onChange: (e) => setSort(e.target.value), className: "h-11 rounded-full border border-input bg-secondary/60 px-4 text-sm outline-none", children: [
          /* @__PURE__ */ jsx("option", { value: "featured", children: "Featured" }),
          /* @__PURE__ */ jsx("option", { value: "newest", children: "Newest" }),
          /* @__PURE__ */ jsx("option", { value: "price-asc", children: "Price: Low to High" }),
          /* @__PURE__ */ jsx("option", { value: "price-desc", children: "Price: High to Low" }),
          /* @__PURE__ */ jsx("option", { value: "rating", children: "Top Rated" })
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setOpen((o) => !o), className: "grid h-11 w-11 place-items-center rounded-full border border-input lg:hidden", children: /* @__PURE__ */ jsx(SlidersHorizontal, { className: "h-4 w-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-[240px_1fr]", children: [
      /* @__PURE__ */ jsx("div", { className: `${openFilters ? "block" : "hidden"} lg:block`, children: Sidebar }),
      filtered.length === 0 ? /* @__PURE__ */ jsx(EmptyState, { icon: Search, title: "No products match", subtitle: "Try clearing some filters." }) : /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: filtered.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id)) })
    ] })
  ] }) });
}
export {
  ShopPage as component
};
