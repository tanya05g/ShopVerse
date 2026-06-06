import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { L as Layout } from "./Layout-ByVJ9qYZ.js";
import "@tanstack/react-router";
import "./router-BdMxXKxa.js";
import "@tanstack/react-query";
import "sonner";
const faqs = [["How long does shipping take?", "Domestic orders ship in 2–4 business days. International in 7–14 days."], ["What is your return policy?", "30-day, no-questions-asked returns on unused items in original packaging."], ["Do you ship internationally?", "Yes — we ship to 60+ countries. Duties may apply at checkout."], ["Is my payment information secure?", "Absolutely. We use industry-standard PCI-compliant payment processors."], ["Can I change or cancel my order?", "Yes, within 1 hour of placing it. After that, our warehouse takes over."], ["Do you offer gift wrapping?", "We do — select the option at checkout for a small fee."]];
function FaqPage() {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("section", { className: "container-x py-20 max-w-3xl", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl", children: "FAQ" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Answers to questions we hear often." }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-3", children: faqs.map(([q, a], i) => /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-2xl border border-border bg-card", children: [
      /* @__PURE__ */ jsxs("button", { onClick: () => setOpen(open === i ? null : i), className: "flex w-full items-center justify-between gap-4 p-5 text-left font-medium", children: [
        q,
        /* @__PURE__ */ jsx(ChevronDown, { className: `h-4 w-4 transition ${open === i ? "rotate-180" : ""}` })
      ] }),
      open === i && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 text-sm text-muted-foreground animate-fade-in", children: a })
    ] }, i)) })
  ] }) });
}
export {
  FaqPage as component
};
