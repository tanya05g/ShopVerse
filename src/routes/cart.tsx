import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import EmptyState from "@/components/EmptyState";
import { useApp } from "@/context/AppContext";
import { discounted, money } from "@/utils/format";
import { toast } from "sonner";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — ShopVerse" }] }),
  component: CartPage,
});

function CartPage() {
  const { cart, updateQty, removeFromCart } = useApp();
  const [coupon, setCoupon]         = useState("");
  const [appliedPct, setAppliedPct] = useState(0);

  const subtotal = cart.reduce((s: number, x: any) => s + discounted(x.price, x.discount) * x.qty, 0);
  const shipping = subtotal > 75 || subtotal === 0 ? 0 : 8;
  const discount = (subtotal * appliedPct) / 100;
  const total    = subtotal + shipping - discount;

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SHOPVERSE10") { setAppliedPct(10); toast.success("Coupon applied — 10% off"); }
    else toast.error("Invalid coupon. Try SHOPVERSE10");
  };

  if (cart.length === 0) {
    return <Layout><EmptyState icon={ShoppingBag} title="Your cart is empty" subtitle="Let's find something beautiful." /></Layout>;
  }

  return (
    <Layout>
      <section className="container-x py-12">
        <h1 className="mb-8 font-display text-4xl">Your cart</h1>
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            {cart.map((item: any) => (
              <div key={item.id} className="flex gap-4 rounded-2xl border border-border bg-card p-4">
                <Link to="/product/$id" params={{ id: String(item.id) }} className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-beige">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <Link to="/product/$id" params={{ id: String(item.id) }} className="font-medium hover:text-brand">{item.name}</Link>
                    <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="text-sm text-muted-foreground">{money(discounted(item.price, item.discount))} each</div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-input">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} className="grid h-9 w-9 place-items-center"><Minus className="h-3.5 w-3.5" /></button>
                      <div className="w-8 text-center text-sm">{item.qty}</div>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="grid h-9 w-9 place-items-center"><Plus className="h-3.5 w-3.5" /></button>
                    </div>
                    <div className="font-semibold">{money(discounted(item.price, item.discount) * item.qty)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit space-y-5 rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-2xl">Order summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{money(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : money(shipping)}</span></div>
              {appliedPct > 0 && <div className="flex justify-between text-emerald-600"><span>Coupon ({appliedPct}%)</span><span>-{money(discount)}</span></div>}
            </div>
            <div className="border-t border-border pt-3 flex justify-between text-lg font-semibold">
              <span>Total</span><span>{money(total)}</span>
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Coupon code</label>
              <div className="mt-1 flex gap-2">
                <input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="SHOPVERSE10"
                  className="h-10 flex-1 rounded-full border border-input bg-secondary/60 px-4 text-sm outline-none focus:border-brand" />
                <button onClick={applyCoupon} className="rounded-full bg-foreground px-4 text-sm font-medium text-background">Apply</button>
              </div>
            </div>
            <Link to="/checkout" className="btn-brand w-full">Checkout</Link>
            <Link to="/shop" className="block text-center text-sm text-muted-foreground hover:text-foreground">Continue shopping</Link>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
