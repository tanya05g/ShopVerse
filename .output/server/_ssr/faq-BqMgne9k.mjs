import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Layout } from "./Layout-ByVJ9qYZ.mjs";
import "../_libs/sonner.mjs";
import { b as ChevronDown } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "./router-BdMxXKxa.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const faqs = [["How long does shipping take?", "Domestic orders ship in 2–4 business days. International in 7–14 days."], ["What is your return policy?", "30-day, no-questions-asked returns on unused items in original packaging."], ["Do you ship internationally?", "Yes — we ship to 60+ countries. Duties may apply at checkout."], ["Is my payment information secure?", "Absolutely. We use industry-standard PCI-compliant payment processors."], ["Can I change or cancel my order?", "Yes, within 1 hour of placing it. After that, our warehouse takes over."], ["Do you offer gift wrapping?", "We do — select the option at checkout for a small fee."]];
function FaqPage() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-20 max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl", children: "FAQ" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Answers to questions we hear often." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-3", children: faqs.map(([q, a], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(open === i ? null : i), className: "flex w-full items-center justify-between gap-4 p-5 text-left font-medium", children: [
        q,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-4 w-4 transition ${open === i ? "rotate-180" : ""}` })
      ] }),
      open === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-sm text-muted-foreground animate-fade-in", children: a })
    ] }, i)) })
  ] }) });
}
export {
  FaqPage as component
};
