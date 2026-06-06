import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { e as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout } from "./Layout-ByVJ9qYZ.mjs";
import { u as useApp } from "./router-BdMxXKxa.mjs";
import "../_libs/sonner.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function LoginPage() {
  const {
    login
  } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [pwd, setPwd] = reactExports.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate({
      to: "/dashboard"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x grid min-h-[70vh] place-items-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "w-full max-w-md space-y-5 rounded-3xl border border-border bg-card p-8 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Welcome back" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Log in to your ShopVerse account." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Email", type: "email", value: email, onChange: (e) => setEmail(e.target.value) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Password", type: "password", value: pwd, onChange: (e) => setPwd(e.target.value) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-brand w-full", children: "Log in" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/forgot-password", className: "text-brand hover:underline", children: "Forgot password?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "text-muted-foreground hover:text-foreground", children: "Create account" })
    ] })
  ] }) }) });
}
function Input({
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, ...props, className: "mt-1 h-11 w-full rounded-xl border border-input bg-secondary/60 px-4 text-sm outline-none focus:border-brand" })
  ] });
}
export {
  Input,
  LoginPage as component
};
