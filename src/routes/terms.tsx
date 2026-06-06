import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions — ShopVerse" }] }),
  component: () => (
    <Layout>
      <section className="container-x py-16 max-w-3xl">
        <h1 className="font-display text-5xl">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: January 1, 2026</p>
        {[
          ["1. Acceptance", "By using ShopVerse, you agree to these terms. If you disagree, please don't use the site."],
          ["2. Orders", "All orders are subject to availability and confirmation. Prices may change without notice."],
          ["3. Shipping & returns", "See our Shipping page for delivery times. Returns accepted within 30 days."],
          ["4. Intellectual property", "All content on ShopVerse is owned or licensed by us. Don't reproduce without permission."],
          ["5. Limitation of liability", "ShopVerse is not liable for indirect damages arising from use of the site."],
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
