import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
function EmptyState({
  icon: Icon,
  title,
  subtitle,
  ctaLabel = "Browse shop",
  ctaTo = "/shop"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md py-20 text-center animate-fade-in", children: [
    Icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-beige", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-foreground" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: subtitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: ctaTo, className: "btn-brand mt-6", children: ctaLabel })
  ] });
}
export {
  EmptyState as E
};
