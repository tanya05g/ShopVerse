import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — ShopVerse" }] }),
  component: FaqPage,
});

const faqs = [
  ["How long does shipping take?", "Domestic orders ship in 2–4 business days. International in 7–14 days."],
  ["What is your return policy?", "30-day, no-questions-asked returns on unused items in original packaging."],
  ["Do you ship internationally?", "Yes — we ship to 60+ countries. Duties may apply at checkout."],
  ["Is my payment information secure?", "Absolutely. We use industry-standard PCI-compliant payment processors."],
  ["Can I change or cancel my order?", "Yes, within 1 hour of placing it. After that, our warehouse takes over."],
  ["Do you offer gift wrapping?", "We do — select the option at checkout for a small fee."],
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <section className="container-x py-20 max-w-3xl">
        <h1 className="font-display text-5xl">FAQ</h1>
        <p className="mt-3 text-muted-foreground">Answers to questions we hear often.</p>
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a], i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left font-medium">
                {q}
                <ChevronDown className={`h-4 w-4 transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground animate-fade-in">{a}</div>}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
