import { createFileRoute, Link, useNavigate, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, Minus, Plus, ShoppingBag, Star, Truck, ShieldCheck, RefreshCcw } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import { useApp } from "@/context/AppContext";
import { getById, getRelated } from "@/data/products";
import { discounted, money } from "@/utils/format";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getById(params.id);
    if (!product) throw notFound();
    return { product };
  },
  notFoundComponent: () => (
    <Layout><div className="container-x py-24 text-center"><h1 className="font-display text-3xl">Product not found</h1></div></Layout>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { addToCart, toggleWishlist, wishlist, addRecentlyViewed } = useApp();
  const [qty, setQty]         = useState(1);
  const [activeImg, setImg]   = useState(product.image);
  const navigate              = useNavigate();
  const saved                 = wishlist.includes(product.id);
  const final                 = discounted(product.price, product.discount);
  const related               = getRelated(product, 4);

  // gallery uses the same hero image at varying crops — enough for a portfolio demo
  const gallery = [product.image,
    product.image + "&sat=-30",
    product.image + "&bri=10",
    product.image + "&blur=5"];

  useEffect(() => { addRecentlyViewed(product.id); /* eslint-disable-next-line */ }, [product.id]);

  return (
    <Layout>
      <section className="container-x py-12">
        <nav className="mb-6 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/shop" className="hover:text-foreground">Shop</Link> / <span className="capitalize">{product.category}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="overflow-hidden rounded-3xl bg-beige aspect-square">
              <img src={activeImg} alt={product.name} className="h-full w-full object-cover animate-fade-in" key={activeImg} />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {gallery.map((g) => (
                <button key={g} onClick={() => setImg(g)}
                  className={`overflow-hidden rounded-xl border-2 transition ${activeImg === g ? "border-brand" : "border-transparent"}`}>
                  <img src={g} alt="" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-brand">{product.category}</span>
            <h1 className="mt-2 font-display text-4xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <div className="flex">{Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted"}`} />
              ))}</div>
              <span className="text-muted-foreground">{product.rating} • 124 reviews</span>
            </div>

            <div className="mt-6 flex items-end gap-3">
              <div className="font-display text-4xl">{money(final)}</div>
              {product.discount > 0 && (
                <>
                  <div className="text-lg text-muted-foreground line-through">{money(product.price)}</div>
                  <span className="rounded-full bg-foreground px-2.5 py-1 text-xs font-semibold text-background">-{product.discount}%</span>
                </>
              )}
            </div>

            <p className="mt-6 leading-relaxed text-muted-foreground">{product.description}</p>

            <div className="mt-4 text-sm">
              {product.stock > 0
                ? <span className="text-emerald-600">● In stock — {product.stock} available</span>
                : <span className="text-destructive">● Out of stock</span>}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="flex items-center rounded-full border border-input">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-11 w-11 place-items-center"><Minus className="h-4 w-4" /></button>
                <div className="w-10 text-center text-sm font-medium">{qty}</div>
                <button onClick={() => setQty((q) => q + 1)} className="grid h-11 w-11 place-items-center"><Plus className="h-4 w-4" /></button>
              </div>
              <button disabled={product.stock === 0} onClick={() => addToCart(product, qty)}
                className="btn-brand disabled:opacity-50">
                <ShoppingBag className="h-4 w-4" /> Add to cart
              </button>
              <button disabled={product.stock === 0}
                onClick={() => { addToCart(product, qty); navigate({ to: "/checkout" }); }}
                className="btn-outline-dark disabled:opacity-50">Buy now</button>
              <button onClick={() => toggleWishlist(product.id)}
                className="grid h-11 w-11 place-items-center rounded-full border border-input">
                <Heart className={`h-4 w-4 ${saved ? "fill-brand text-brand" : ""}`} />
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 text-xs">
              {[[Truck, "Free shipping over $75"], [ShieldCheck, "2-year warranty"], [RefreshCcw, "30-day returns"]].map(([Icon, label]: any, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <Icon className="h-5 w-5 text-brand" />
                  <span className="text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <SectionHeader title="You may also like" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
