import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Truck, ShieldCheck, RefreshCcw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import { GridSkeleton } from "@/components/Skeleton";
import { categories, products, testimonials } from "@/data/products";
import { useApp } from "@/context/AppContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShopVerse — Premium Everyday Essentials" },
      { name: "description", content: "Shop curated electronics, fashion, home & more. Free shipping over $75." },
    ],
  }),
  component: HomePage,
});

// ----- Flash sale countdown -----
function useCountdown(hours = 8) {
  const target = useMemo(() => Date.now() + hours * 3600 * 1000, [hours]);
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const diff = Math.max(0, target - now);
  const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
  const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
  const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
  return { h, m, s };
}

function HomePage() {
  const { recentlyViewed } = useApp();
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 400); return () => clearTimeout(t); }, []);

  const featured = products.filter((p) => p.featured).slice(0, 8);
  const trending = products.filter((p) => p.trending).slice(0, 4);
  const flash    = products.filter((p) => p.discount >= 20).slice(0, 4);
  const recent   = recentlyViewed.map((id: number) => products.find((p) => p.id === id)).filter(Boolean);
  const recs     = products.slice().sort(() => 0.5 - Math.random()).slice(0, 4);

  const { h, m, s } = useCountdown(8);

  return (
    <Layout>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-beige">
        <div className="container-x grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-float-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-brand" /> New season collection
            </span>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-7xl">
              Modern essentials, <span className="text-brand">crafted</span> for everyday.
            </h1>
            <p className="mt-5 max-w-md text-muted-foreground">
              Discover thoughtfully designed products from independent brands.
              Quality you can feel, prices that respect you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-brand">Shop now <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/about" className="btn-outline-dark">Our story</Link>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-xs">
              {[
                [Truck, "Free shipping"],
                [ShieldCheck, "2-yr warranty"],
                [RefreshCcw, "30-day returns"],
              ].map(([Icon, label]: any, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-1">
                  <Icon className="h-5 w-5 text-brand" />
                  <span className="text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-float-up">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-brand/10 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=80"
              alt="Featured ShopVerse fashion editorial"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)]"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-background p-4 shadow-card md:block">
              <div className="text-xs text-muted-foreground">Trusted by</div>
              <div className="text-2xl font-display">25k+ shoppers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CATEGORIES ---------- */}
      <section className="container-x py-20">
        <SectionHeader eyebrow="Browse" title="Shop by category" subtitle="Seven worlds to explore." />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {categories.map((c, i) => (
            <Link key={c.slug} to="/shop" search={{ category: c.slug } as any}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${i * 60}ms` }}>
              <div className="grid h-14 w-14 place-items-center rounded-full bg-beige text-foreground transition group-hover:bg-foreground group-hover:text-background">
                <span className="font-display text-xl">{c.name[0]}</span>
              </div>
              <span className="text-sm font-medium">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- FEATURED ---------- */}
      <section className="container-x py-10">
        <SectionHeader
          eyebrow="Editors' picks"
          title="Featured products"
          action={<Link to="/shop" className="text-sm font-medium text-brand">View all →</Link>}
        />
        {loading ? <GridSkeleton /> : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>

      {/* ---------- FLASH SALE ---------- */}
      <section className="container-x py-20">
        <div className="rounded-3xl bg-foreground p-8 text-background md:p-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-brand">Limited time</div>
              <h2 className="mt-2 font-display text-4xl">Flash sale — ends soon</h2>
              <p className="mt-2 text-background/70">Up to 30% off curated picks.</p>
            </div>
            <div className="flex gap-2">
              {[h, m, s].map((v, i) => (
                <div key={i} className="grid h-16 w-16 place-items-center rounded-2xl bg-background/10 font-display text-2xl">{v}</div>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {flash.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ---------- TRENDING ---------- */}
      <section className="container-x py-10">
        <SectionHeader eyebrow="What's hot" title="Trending now" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trending.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ---------- AI RECOMMENDATIONS ---------- */}
      <section className="container-x py-20">
        <SectionHeader
          eyebrow="Just for you"
          title="AI recommendations"
          subtitle="Curated using your browsing patterns."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recs.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ---------- RECENTLY VIEWED ---------- */}
      {recent.length > 0 && (
        <section className="container-x py-10">
          <SectionHeader title="Recently viewed" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recent.slice(0, 4).map((p: any) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="bg-beige py-20">
        <div className="container-x">
          <SectionHeader eyebrow="Loved by" title="Real people, real reviews" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-background p-6 shadow-sm hover-lift">
                <p className="text-sm leading-relaxed">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- NEWSLETTER ---------- */}
      <section className="container-x py-20">
        <div className="overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16 text-center">
          <h3 className="font-display text-3xl md:text-5xl">Join the ShopVerse list</h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            New arrivals, exclusive drops, and 10% off your first order.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); }}
            className="mx-auto mt-8 flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <input type="email" required placeholder="you@example.com"
              className="h-12 flex-1 rounded-full border border-input bg-secondary/60 px-5 text-sm outline-none focus:border-brand" />
            <button className="btn-brand h-12">Subscribe</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
