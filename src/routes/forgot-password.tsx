import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { Input } from "./login";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Reset password — ShopVerse" }] }),
  component: ForgotPwd,
});

function ForgotPwd() {
  const [email, setEmail] = useState("");
  const onSubmit = (e: any) => { e.preventDefault(); toast.success("If that email exists, a reset link is on the way."); };
  return (
    <Layout>
      <section className="container-x grid min-h-[70vh] place-items-center py-12">
        <form onSubmit={onSubmit} className="w-full max-w-md space-y-5 rounded-3xl border border-border bg-card p-8 shadow-card">
          <h1 className="font-display text-3xl">Reset your password</h1>
          <p className="text-sm text-muted-foreground">We'll email you a link to set a new one.</p>
          <Input label="Email" type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
          <button className="btn-brand w-full">Send reset link</button>
          <p className="text-center text-sm"><Link to="/login" className="text-brand hover:underline">Back to login</Link></p>
        </form>
      </section>
    </Layout>
  );
}
