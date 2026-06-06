import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { L as Layout } from "./Layout-ByVJ9qYZ.js";
import { u as useApp, I as Input } from "./router-BdMxXKxa.js";
import "lucide-react";
import "@tanstack/react-query";
import "sonner";
function RegisterPage() {
  const {
    register
  } = useApp();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    register(name, email);
    navigate({
      to: "/dashboard"
    });
  };
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("section", { className: "container-x grid min-h-[70vh] place-items-center py-12", children: /* @__PURE__ */ jsxs("form", { onSubmit, className: "w-full max-w-md space-y-5 rounded-3xl border border-border bg-card p-8 shadow-card", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl", children: "Create your account" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "It takes less than a minute." }),
    /* @__PURE__ */ jsx(Input, { label: "Full name", value: name, onChange: (e) => setName(e.target.value) }),
    /* @__PURE__ */ jsx(Input, { label: "Email", type: "email", value: email, onChange: (e) => setEmail(e.target.value) }),
    /* @__PURE__ */ jsx(Input, { label: "Password", type: "password", value: pwd, onChange: (e) => setPwd(e.target.value) }),
    /* @__PURE__ */ jsx("button", { className: "btn-brand w-full", children: "Create account" }),
    /* @__PURE__ */ jsxs("p", { className: "text-center text-sm text-muted-foreground", children: [
      "Already have an account? ",
      /* @__PURE__ */ jsx(Link, { to: "/login", className: "text-brand hover:underline", children: "Log in" })
    ] })
  ] }) }) });
}
export {
  RegisterPage as component
};
