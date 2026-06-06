import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, MapPin, Package, User } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import EmptyState from "@/components/EmptyState";
import { useApp } from "@/context/AppContext";
import { products } from "@/data/products";
import { money } from "@/utils/format";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — ShopVerse" }] }),
  component: Dashboard,
});

const tabs = [
  { k: "profile",   label: "Profile",   icon: User },
  { k: "orders",    label: "Orders",    icon: Package },
  { k: "wishlist",  label: "Wishlist",  icon: Heart },
  { k: "addresses", label: "Addresses", icon: MapPin },
];

function Dashboard() {
  const { user, logout, orders, wishlist, addresses, addAddress } = useApp();
  const [tab, setTab] = useState("profile");
  const navigate      = useNavigate();

  useEffect(() => { if (!user) navigate({ to: "/login" }); }, [user, navigate]);
  if (!user) return null;

  const wished = wishlist.map((id: number) => products.find((p) => p.id === id)).filter(Boolean);

  return (
    <Layout>
      <section className="container-x py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl">Hi, {user.name}</h1>
            <p className="text-muted-foreground">Manage your account and orders.</p>
          </div>
          <button onClick={() => { logout(); navigate({ to: "/" }); }} className="btn-outline-dark">Sign out</button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <nav className="flex flex-row gap-2 overflow-x-auto lg:flex-col">
            {tabs.map(({ k, label, icon: Icon }) => (
              <button key={k} onClick={() => setTab(k)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${tab === k ? "bg-foreground text-background" : "hover:bg-secondary"}`}>
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </nav>

          <div>
            {tab === "profile" && (
              <div className="rounded-2xl border border-border bg-card p-6 space-y-2">
                <h2 className="font-display text-2xl">Profile</h2>
                <p><span className="text-muted-foreground">Name:</span> {user.name}</p>
                <p><span className="text-muted-foreground">Email:</span> {user.email}</p>
              </div>
            )}

            {tab === "orders" && (
              orders.length === 0
                ? <EmptyState icon={Package} title="No orders yet" subtitle="Your future orders will appear here." />
                : (
                  <div className="space-y-3">
                    {orders.map((o: any) => (
                      <div key={o.id} className="flex items-center justify-between rounded-2xl border border-border bg-card p-5">
                        <div>
                          <div className="font-medium">Order #{String(o.id).slice(-6)}</div>
                          <div className="text-xs text-muted-foreground">{new Date(o.date).toLocaleDateString()} • {o.items.length} items</div>
                        </div>
                        <div className="font-semibold">{money(o.total)}</div>
                      </div>
                    ))}
                  </div>
                )
            )}

            {tab === "wishlist" && (
              wished.length === 0
                ? <EmptyState icon={Heart} title="No saved items" subtitle="Tap the heart on any product to save it." />
                : (
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {wished.map((p: any) => <ProductCard key={p.id} product={p} />)}
                  </div>
                )
            )}

            {tab === "addresses" && (
              <div className="space-y-6">
                <div className="space-y-3">
                  {addresses.length === 0 && <EmptyState icon={MapPin} title="No saved addresses" subtitle="Add one below." ctaLabel="" ctaTo="/dashboard" />}
                  {addresses.map((a: any) => (
                    <div key={a.id} className="rounded-2xl border border-border bg-card p-5">
                      <div className="font-medium">{a.label}</div>
                      <div className="text-sm text-muted-foreground">{a.line}, {a.city} {a.zip}</div>
                    </div>
                  ))}
                </div>
                <form onSubmit={(e: any) => { e.preventDefault(); const f = new FormData(e.target); addAddress(Object.fromEntries(f)); e.target.reset(); }}
                  className="rounded-2xl border border-border bg-card p-6 grid gap-4 sm:grid-cols-2">
                  <Field name="label" label="Label (e.g. Home)" />
                  <Field name="city" label="City" />
                  <Field name="line" label="Street address" className="sm:col-span-2" />
                  <Field name="zip" label="ZIP / Postal" />
                  <div className="sm:col-span-2"><button className="btn-brand">Save address</button></div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, className = "", ...props }: any) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      <input required {...props}
        className="mt-1 h-11 w-full rounded-xl border border-input bg-secondary/60 px-4 text-sm outline-none focus:border-brand" />
    </label>
  );
}
