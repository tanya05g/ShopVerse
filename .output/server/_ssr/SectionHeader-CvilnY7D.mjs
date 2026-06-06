import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function SectionHeader({ eyebrow, title, subtitle, action }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex flex-wrap items-end justify-between gap-4 animate-fade-in", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs uppercase tracking-[0.2em] text-brand", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-xl text-muted-foreground", children: subtitle })
    ] }),
    action
  ] });
}
export {
  SectionHeader as S
};
