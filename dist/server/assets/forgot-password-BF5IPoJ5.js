import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { L as Layout } from "./Layout-ByVJ9qYZ.js";
import { I as Input } from "./router-BdMxXKxa.js";
import "lucide-react";
import "@tanstack/react-query";
function ForgotPwd() {
  const [email, setEmail] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("If that email exists, a reset link is on the way.");
  };
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("section", { className: "container-x grid min-h-[70vh] place-items-center py-12", children: /* @__PURE__ */ jsxs("form", { onSubmit, className: "w-full max-w-md space-y-5 rounded-3xl border border-border bg-card p-8 shadow-card", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl", children: "Reset your password" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "We'll email you a link to set a new one." }),
    /* @__PURE__ */ jsx(Input, { label: "Email", type: "email", value: email, onChange: (e) => setEmail(e.target.value) }),
    /* @__PURE__ */ jsx("button", { className: "btn-brand w-full", children: "Send reset link" }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-sm", children: /* @__PURE__ */ jsx(Link, { to: "/login", className: "text-brand hover:underline", children: "Back to login" }) })
  ] }) }) });
}
export {
  ForgotPwd as component
};
