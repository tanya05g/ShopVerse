import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — ShopVerse" }] }),
  component: ContactPage,
});

function ContactPage() {
  const onSubmit = (e: any) => { e.preventDefault(); toast.success("Thanks! We'll be in touch."); e.target.reset(); };
  return (
    <Layout>
      <section className="container-x py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-brand">Contact</span>
          <h1 className="mt-3 font-display text-5xl">Let's talk</h1>
          <p className="mt-3 text-muted-foreground">Questions, partnerships, press — we read every message.</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5">
            {[[Mail, "hello@shopverse.com"], [Phone, "+1 (555) 010-2025"], [MapPin, "Brooklyn, NY"]].map(([Icon, t]: any, i) => (
              <div key={i} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-beige"><Icon className="h-5 w-5" /></div>
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>
          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Subject" name="subject" />
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</span>
              <textarea required rows={5} name="message"
                className="mt-1 w-full rounded-xl border border-input bg-secondary/60 px-4 py-3 text-sm outline-none focus:border-brand" />
            </label>
            <button className="btn-brand">Send message</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, ...props }: any) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      <input required {...props}
        className="mt-1 h-11 w-full rounded-xl border border-input bg-secondary/60 px-4 text-sm outline-none focus:border-brand" />
    </label>
  );
}
