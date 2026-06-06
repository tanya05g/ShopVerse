import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function EmptyState({
  icon: Icon,
  title,
  subtitle,
  ctaLabel = "Browse shop",
  ctaTo = "/shop"
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-md py-20 text-center animate-fade-in", children: [
    Icon && /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-beige", children: /* @__PURE__ */ jsx(Icon, { className: "h-7 w-7 text-foreground" }) }),
    /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl", children: title }),
    subtitle && /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: subtitle }),
    /* @__PURE__ */ jsx(Link, { to: ctaTo, className: "btn-brand mt-6", children: ctaLabel })
  ] });
}
export {
  EmptyState as E
};
