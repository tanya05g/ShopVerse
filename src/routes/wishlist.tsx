import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import EmptyState from "@/components/EmptyState";
import { useApp } from "@/context/AppContext";
import { products } from "@/data/products";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — ShopVerse" }] }),
  component: WishlistPage,
});

function WishlistPage() {
  const { wishlist } = useApp();
  const items = wishlist.map((id: number) => products.find((p) => p.id === id)).filter(Boolean);

  return (
    <Layout>
      <section className="container-x py-12">
        <h1 className="mb-8 font-display text-4xl">Your wishlist</h1>
        {items.length === 0
          ? <EmptyState icon={Heart} title="Nothing saved yet" subtitle="Tap the heart on any product to save it." />
          : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((p: any) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
      </section>
    </Layout>
  );
}
