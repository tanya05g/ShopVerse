import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { L as Layout } from "./Layout-ByVJ9qYZ.js";
import { u as useApp } from "./router-BdMxXKxa.js";
import "lucide-react";
import "@tanstack/react-query";
import "sonner";
function LoginPage() {
  const {
    login
  } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate({
      to: "/dashboard"
    });
  };
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("section", { className: "container-x grid min-h-[70vh] place-items-center py-12", children: /* @__PURE__ */ jsxs("form", { onSubmit, className: "w-full max-w-md space-y-5 rounded-3xl border border-border bg-card p-8 shadow-card", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl", children: "Welcome back" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Log in to your ShopVerse account." }),
    /* @__PURE__ */ jsx(Input, { label: "Email", type: "email", value: email, onChange: (e) => setEmail(e.target.value) }),
    /* @__PURE__ */ jsx(Input, { label: "Password", type: "password", value: pwd, onChange: (e) => setPwd(e.target.value) }),
    /* @__PURE__ */ jsx("button", { className: "btn-brand w-full", children: "Log in" }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
      /* @__PURE__ */ jsx(Link, { to: "/forgot-password", className: "text-brand hover:underline", children: "Forgot password?" }),
      /* @__PURE__ */ jsx(Link, { to: "/register", className: "text-muted-foreground hover:text-foreground", children: "Create account" })
    ] })
  ] }) }) });
}
function Input({
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("input", { required: true, ...props, className: "mt-1 h-11 w-full rounded-xl border border-input bg-secondary/60 px-4 text-sm outline-none focus:border-brand" })
  ] });
}
export {
  Input,
  LoginPage as component
};
