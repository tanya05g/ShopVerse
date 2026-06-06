import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "./login";
import { useApp } from "@/context/AppContext";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Create account — ShopVerse" }] }),
  component: RegisterPage,
});

function RegisterPage() {
  const { register } = useApp();
  const navigate     = useNavigate();
  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd]     = useState("");

  const onSubmit = (e: any) => { e.preventDefault(); register(name, email); navigate({ to: "/dashboard" }); };

  return (
    <Layout>
      <section className="container-x grid min-h-[70vh] place-items-center py-12">
        <form onSubmit={onSubmit} className="w-full max-w-md space-y-5 rounded-3xl border border-border bg-card p-8 shadow-card">
          <h1 className="font-display text-3xl">Create your account</h1>
          <p className="text-sm text-muted-foreground">It takes less than a minute.</p>
          <Input label="Full name" value={name} onChange={(e: any) => setName(e.target.value)} />
          <Input label="Email" type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
          <Input label="Password" type="password" value={pwd} onChange={(e: any) => setPwd(e.target.value)} />
          <button className="btn-brand w-full">Create account</button>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="text-brand hover:underline">Log in</Link>
          </p>
        </form>
      </section>
    </Layout>
  );
}
