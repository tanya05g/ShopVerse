import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — ShopVerse" }, { name: "description", content: "Our story, our mission, our craft." }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="bg-beige">
        <div className="container-x py-20 grid gap-10 md:grid-cols-2 items-center">
          <div className="animate-float-up">
            <span className="text-xs uppercase tracking-[0.2em] text-brand">Our story</span>
            <h1 className="mt-3 font-display text-5xl">Beautiful objects, fewer of them.</h1>
            <p className="mt-5 text-muted-foreground">
              ShopVerse started as a small studio with a simple belief: the things we live with shape how we feel.
              We partner with independent makers across the world to bring you essentials that last.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80" alt="" className="aspect-[4/3] rounded-3xl object-cover" />
        </div>
      </section>
      <section className="container-x py-20 grid gap-10 md:grid-cols-3">
        {[
          ["Crafted", "Each product is built to last beyond seasons."],
          ["Curated", "We say no to 90% of submissions."],
          ["Carbon-aware", "Every shipment offsets its footprint."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-2xl">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
