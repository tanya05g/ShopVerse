import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const cols = [
  { title: "Shop",    links: [["All Products","/shop"], ["Electronics","/shop"], ["Fashion","/shop"], ["Home","/shop"]] },
  { title: "Company", links: [["About","/about"], ["Contact","/contact"], ["FAQ","/faq"]] },
  { title: "Legal",   links: [["Privacy Policy","/privacy"], ["Terms & Conditions","/terms"]] },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-beige text-beige-foreground">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background font-bold">S</span>
            <span className="text-lg font-display font-semibold">ShopVerse</span>
          </div>
          <p className="mt-4 text-sm opacity-80 max-w-xs">
            Premium everyday essentials, curated for the modern home.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-background/60 hover:bg-background transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold uppercase tracking-wider">{c.title}</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              {c.links.map(([label, to]) => (
                <li key={label}><Link to={to as string} className="hover:opacity-100 hover:text-brand">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-foreground/10 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} ShopVerse. Crafted with care.
      </div>
    </footer>
  );
}
