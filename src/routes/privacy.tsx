import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — ShopVerse" }] }),
  component: () => (
    <Layout>
      <section className="container-x py-16 max-w-3xl prose-policy">
        <h1 className="font-display text-5xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: January 1, 2026</p>
        {[
          ["1. Information we collect", "We collect the information you provide when creating an account, placing an order, or contacting support."],
          ["2. How we use it", "We use information to process orders, improve our products, and (with your consent) to send marketing."],
          ["3. Sharing", "We never sell your data. We share only with the providers needed to ship and process your order."],
          ["4. Your rights", "You may request export or deletion of your data at any time by emailing privacy@shopverse.com."],
          ["5. Cookies", "We use minimal cookies for cart functionality and analytics. You may disable non-essential ones."],
        ].map(([h, p]) => (
          <div key={h} className="mt-8">
            <h2 className="font-display text-2xl">{h}</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">{p}</p>
          </div>
        ))}
      </section>
    </Layout>
  ),
});
