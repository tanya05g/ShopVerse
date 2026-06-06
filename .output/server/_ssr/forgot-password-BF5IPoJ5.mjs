import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { L as Layout } from "./Layout-ByVJ9qYZ.mjs";
import { I as Input } from "./router-BdMxXKxa.mjs";

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
function ForgotPwd() {
  const [email, setEmail] = reactExports.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("If that email exists, a reset link is on the way.");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x grid min-h-[70vh] place-items-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "w-full max-w-md space-y-5 rounded-3xl border border-border bg-card p-8 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Reset your password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "We'll email you a link to set a new one." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Email", type: "email", value: email, onChange: (e) => setEmail(e.target.value) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-brand w-full", children: "Send reset link" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-brand hover:underline", children: "Back to login" }) })
  ] }) }) });
}
export {
  ForgotPwd as component
};
