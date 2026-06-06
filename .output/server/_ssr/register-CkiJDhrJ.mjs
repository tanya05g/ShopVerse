import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout } from "./Layout-ByVJ9qYZ.mjs";
import { u as useApp, I as Input } from "./router-BdMxXKxa.mjs";
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
function RegisterPage() {
  const {
    register
  } = useApp();
  const navigate = useNavigate();
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [pwd, setPwd] = reactExports.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    register(name, email);
    navigate({
      to: "/dashboard"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x grid min-h-[70vh] place-items-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "w-full max-w-md space-y-5 rounded-3xl border border-border bg-card p-8 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Create your account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "It takes less than a minute." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Full name", value: name, onChange: (e) => setName(e.target.value) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Email", type: "email", value: email, onChange: (e) => setEmail(e.target.value) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Password", type: "password", value: pwd, onChange: (e) => setPwd(e.target.value) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-brand w-full", children: "Create account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground", children: [
      "Already have an account? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-brand hover:underline", children: "Log in" })
    ] })
  ] }) }) });
}
export {
  RegisterPage as component
};
