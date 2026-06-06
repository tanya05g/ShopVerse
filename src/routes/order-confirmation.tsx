import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";

export const Route = createFileRoute("/order-confirmation")({
  head: () => ({ meta: [{ title: "Thank you — ShopVerse" }] }),
  component: OrderConfirmation,
});

function OrderConfirmation() {
  const orderId = Math.random().toString(36).slice(2, 8).toUpperCase();
  return (
    <Layout>
      <section className="container-x py-24 text-center animate-fade-in">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand/10 animate-pulse-ring">
          <CheckCircle2 className="h-10 w-10 text-brand" />
        </div>
        <h1 className="mt-6 font-display text-4xl">Thank you for your order!</h1>
        <p className="mt-3 text-muted-foreground">A confirmation has been sent to your email.</p>
        <div className="mx-auto mt-6 inline-block rounded-full bg-secondary px-5 py-2 text-sm">
          Order ID: <span className="font-mono font-semibold">#{orderId}</span>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/shop" className="btn-brand">Continue shopping</Link>
          <Link to="/dashboard" className="btn-outline-dark">View orders</Link>
        </div>
      </section>
    </Layout>
  );
}
