import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CreditCard, Wallet, Lock } from "lucide-react";
import Layout from "@/components/Layout";
import EmptyState from "@/components/EmptyState";
import { useApp } from "@/context/AppContext";
import { discounted, money } from "@/utils/format";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — ShopVerse" }] }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { cart, placeOrder } = useApp();
  const navigate             = useNavigate();
  const [method, setMethod]  = useState("card");

  const subtotal = cart.reduce((s: number, x: any) => s + discounted(x.price, x.discount) * x.qty, 0);
  const shipping = subtotal > 75 || subtotal === 0 ? 0 : 8;
  const total    = subtotal + shipping;

  if (cart.length === 0) return <Layout><EmptyState title="Nothing to check out" subtitle="Your cart is empty." /></Layout>;

  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    placeOrder({ total, items: cart, shipping: data });
    navigate({ to: "/order-confirmation" });
  };

  return (
    <Layout>
      <section className="container-x py-12">
        <h1 className="mb-8 font-display text-4xl">Checkout</h1>
        <form onSubmit={onSubmit} className="grid gap-10 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="mb-4 font-display text-xl">Shipping address</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="firstName" label="First name" />
                <Field name="lastName" label="Last name" />
                <Field name="email" label="Email" type="email" className="sm:col-span-2" />
                <Field name="address" label="Address" className="sm:col-span-2" />
                <Field name="city" label="City" />
                <Field name="zip" label="ZIP / Postal" />
                <Field name="country" label="Country" defaultValue="United States" className="sm:col-span-2" />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="mb-4 font-display text-xl">Payment method</h2>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { v: "card",   label: "Credit card", Icon: CreditCard },
                  { v: "paypal", label: "PayPal",      Icon: Wallet },
                  { v: "cod",    label: "Cash on delivery", Icon: Lock },
                ].map(({ v, label, Icon }) => (
                  <button key={v} type="button" onClick={() => setMethod(v)}
                    className={`flex items-center gap-2 rounded-xl border p-3 text-sm transition ${method === v ? "border-brand bg-brand/5" : "border-border"}`}>
                    <Icon className="h-4 w-4" /> {label}
                  </button>
                ))}
              </div>
              {method === "card" && (
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Field name="card" label="Card number" placeholder="4242 4242 4242 4242" className="sm:col-span-2" />
                  <Field name="exp" label="Expiry" placeholder="MM / YY" />
                  <Field name="cvc" label="CVC" placeholder="123" />
                </div>
              )}
            </div>
          </div>

          <aside className="h-fit space-y-4 rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl">Order summary</h2>
            <ul className="space-y-3">
              {cart.map((x: any) => (
                <li key={x.id} className="flex gap-3 text-sm">
                  <img src={x.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="line-clamp-1">{x.name}</div>
                    <div className="text-muted-foreground">× {x.qty}</div>
                  </div>
                  <div>{money(discounted(x.price, x.discount) * x.qty)}</div>
                </li>
              ))}
            </ul>
            <div className="space-y-1 border-t border-border pt-3 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{money(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : money(shipping)}</span></div>
              <div className="mt-2 flex justify-between text-base font-semibold"><span>Total</span><span>{money(total)}</span></div>
            </div>
            <button className="btn-brand w-full">Place order</button>
            <Link to="/cart" className="block text-center text-xs text-muted-foreground hover:text-foreground">Back to cart</Link>
          </aside>
        </form>
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
