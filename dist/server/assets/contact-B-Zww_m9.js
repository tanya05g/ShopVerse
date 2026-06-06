import { jsx, jsxs } from "react/jsx-runtime";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { L as Layout } from "./Layout-ByVJ9qYZ.js";
import "@tanstack/react-router";
import "react";
import "./router-BdMxXKxa.js";
import "@tanstack/react-query";
function ContactPage() {
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch.");
    e.target.reset();
  };
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("section", { className: "container-x py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-brand", children: "Contact" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-5xl", children: "Let's talk" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Questions, partnerships, press — we read every message." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-5", children: [[Mail, "hello@shopverse.com"], [Phone, "+1 (555) 010-2025"], [MapPin, "Brooklyn, NY"]].map(([Icon, t], i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 rounded-2xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-11 w-11 place-items-center rounded-full bg-beige", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm", children: t })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("form", { onSubmit, className: "rounded-3xl border border-border bg-card p-8 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx(Field, { label: "Name", name: "name" }),
          /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email" })
        ] }),
        /* @__PURE__ */ jsx(Field, { label: "Subject", name: "subject" }),
        /* @__PURE__ */ jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { required: true, rows: 5, name: "message", className: "mt-1 w-full rounded-xl border border-input bg-secondary/60 px-4 py-3 text-sm outline-none focus:border-brand" })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "btn-brand", children: "Send message" })
      ] })
    ] })
  ] }) });
}
function Field({
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("input", { required: true, ...props, className: "mt-1 h-11 w-full rounded-xl border border-input bg-secondary/60 px-4 text-sm outline-none focus:border-brand" })
  ] });
}
export {
  ContactPage as component
};
