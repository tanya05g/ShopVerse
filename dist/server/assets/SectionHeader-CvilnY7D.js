import { jsxs, jsx } from "react/jsx-runtime";
function SectionHeader({ eyebrow, title, subtitle, action }) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-8 flex flex-wrap items-end justify-between gap-4 animate-fade-in", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      eyebrow && /* @__PURE__ */ jsx("div", { className: "mb-2 text-xs uppercase tracking-[0.2em] text-brand", children: eyebrow }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-xl text-muted-foreground", children: subtitle })
    ] }),
    action
  ] });
}
export {
  SectionHeader as S
};
