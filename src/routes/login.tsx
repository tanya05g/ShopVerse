import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Layout from "@/components/Layout";
import { useApp } from "@/context/AppContext";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Log in — ShopVerse" }] }),
  component: LoginPage,
});

function LoginPage() {
  const { login } = useApp();
  const navigate  = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd]     = useState("");
  const onSubmit = (e: any) => { e.preventDefault(); login(email); navigate({ to: "/dashboard" }); };

  return (
    <Layout>
      <section className="container-x grid min-h-[70vh] place-items-center py-12">
        <form onSubmit={onSubmit} className="w-full max-w-md space-y-5 rounded-3xl border border-border bg-card p-8 shadow-card">
          <h1 className="font-display text-3xl">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Log in to your ShopVerse account.</p>
          <Input label="Email" type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
          <Input label="Password" type="password" value={pwd} onChange={(e: any) => setPwd(e.target.value)} />
          <button className="btn-brand w-full">Log in</button>
          <div className="flex justify-between text-sm">
            <Link to="/forgot-password" className="text-brand hover:underline">Forgot password?</Link>
            <Link to="/register" className="text-muted-foreground hover:text-foreground">Create account</Link>
          </div>
        </form>
      </section>
    </Layout>
  );
}

export function Input({ label, ...props }: any) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      <input required {...props}
        className="mt-1 h-11 w-full rounded-xl border border-input bg-secondary/60 px-4 text-sm outline-none focus:border-brand" />
    </label>
  );
}
