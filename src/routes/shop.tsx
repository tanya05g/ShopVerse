import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import EmptyState from "@/components/EmptyState";
import { categories, products } from "@/data/products";
import { discounted } from "@/utils/format";

export const Route = createFileRoute("/shop")({
  validateSearch: (s: Record<string, unknown>) => ({
    q: (s.q as string) || "",
    category: (s.category as string) || "all",
  }),
  head: () => ({ meta: [{ title: "Shop — ShopVerse" }, { name: "description", content: "Browse every product on ShopVerse." }] }),
  component: ShopPage,
});

function ShopPage() {
  const { q: q0, category: c0 } = useSearch({ from: "/shop" });
  const [query, setQuery]       = useState(q0);
  const [category, setCategory] = useState(c0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort]         = useState("featured");
  const [openFilters, setOpen]  = useState(false);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchesQ   = !query || p.name.toLowerCase().includes(query.toLowerCase());
      const matchesC   = category === "all" || p.category === category;
      const matchesP   = discounted(p.price, p.discount) <= maxPrice;
      return matchesQ && matchesC && matchesP;
    });
    const k = sort;
    if (k === "price-asc")  list = list.slice().sort((a, b) => discounted(a.price, a.discount) - discounted(b.price, b.discount));
    if (k === "price-desc") list = list.slice().sort((a, b) => discounted(b.price, b.discount) - discounted(a.price, a.discount));
    if (k === "rating")     list = list.slice().sort((a, b) => b.rating - a.rating);
    if (k === "newest")     list = list.slice().reverse();
    return list;
  }, [query, category, maxPrice, sort]);

  const Sidebar = (
    <aside className="space-y-8">
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">Categories</h3>
        <div className="space-y-1">
          {[{ slug: "all", name: "All products" }, ...categories].map((c) => (
            <button key={c.slug} onClick={() => setCategory(c.slug)}
              className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                category === c.slug ? "bg-foreground text-background" : "hover:bg-secondary"
              }`}>
              {c.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">Max price</h3>
        <input type="range" min={20} max={1000} step={10} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-[oklch(0.55_0.18_250)]" />
        <div className="mt-1 text-sm text-muted-foreground">Up to ${maxPrice}</div>
      </div>
    </aside>
  );

  return (
    <Layout>
      <section className="container-x py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl">Shop</h1>
            <p className="text-muted-foreground">{filtered.length} products</p>
          </div>
          <div className="flex w-full flex-wrap items-center gap-3 md:w-auto">
            <div className="relative flex-1 md:w-72 md:flex-none">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..."
                className="h-11 w-full rounded-full border border-input bg-secondary/60 pl-10 pr-4 text-sm outline-none focus:border-brand" />
            </div>
            <select value={sort} onChange={(e) => setSort(e.target.value)}
              className="h-11 rounded-full border border-input bg-secondary/60 px-4 text-sm outline-none">
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <button onClick={() => setOpen((o) => !o)} className="grid h-11 w-11 place-items-center rounded-full border border-input lg:hidden">
              <SlidersHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <div className={`${openFilters ? "block" : "hidden"} lg:block`}>{Sidebar}</div>
          {filtered.length === 0 ? (
            <EmptyState icon={Search} title="No products match" subtitle="Try clearing some filters." />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
