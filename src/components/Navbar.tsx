import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Heart, Menu, Moon, Search, ShoppingBag, Sun, User, X } from "lucide-react";
import { useState } from "react";
import { useApp } from "@/context/AppContext";

const links = [
  { to: "/",        label: "Home" },
  { to: "/shop",    label: "Shop" },
  { to: "/about",   label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/faq",     label: "FAQ" },
];

export default function Navbar() {
  const { cart, wishlist, theme, toggleTheme, user } = useApp();
  const [open, setOpen]     = useState(false);
  const [query, setQuery]   = useState("");
  const navigate            = useNavigate();
  const pathname            = useRouterState({ select: (s) => s.location.pathname });

  const onSearch = (e) => {
    e.preventDefault();
    navigate({ to: "/shop", search: { q: query } as any });
    setOpen(false);
  };

  const cartCount = cart.reduce((n, x) => n + x.qty, 0);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background font-bold">S</span>
          <span className="text-lg font-display font-semibold tracking-tight">ShopVerse</span>
        </Link>

        <nav className="ml-6 hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to}
              className={`text-sm transition-colors hover:text-foreground ${pathname === l.to ? "text-foreground" : "text-muted-foreground"}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <form onSubmit={onSearch} className="ml-auto hidden flex-1 max-w-md md:flex">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="h-10 w-full rounded-full border border-input bg-secondary/60 pl-10 pr-4 text-sm outline-none transition focus:border-brand"
            />
          </div>
        </form>

        <div className="ml-auto flex items-center gap-1 md:ml-2">
          <button onClick={toggleTheme} className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary" aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link to="/wishlist" className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-secondary">
            <Heart className="h-5 w-5" />
            {wishlist.length > 0 && <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] font-semibold text-brand-foreground">{wishlist.length}</span>}
          </Link>
          <Link to="/cart" className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-secondary">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] font-semibold text-brand-foreground">{cartCount}</span>}
          </Link>
          <Link to={user ? "/dashboard" : "/login"} className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary">
            <User className="h-5 w-5" />
          </Link>
          <button onClick={() => setOpen((o) => !o)} className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary md:hidden" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-x py-4 space-y-3">
            <form onSubmit={onSearch} className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..."
                className="h-10 w-full rounded-full border border-input bg-secondary/60 pl-10 pr-4 text-sm outline-none" />
            </form>
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-2 text-base">{l.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
