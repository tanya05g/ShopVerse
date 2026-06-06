import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate, useRouterState, Link } from "@tanstack/react-router";
import { Search, Sun, Moon, Heart, ShoppingBag, User, X, Menu, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { useState } from "react";
import { u as useApp } from "./router-BdMxXKxa.js";
const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" }
];
function Navbar() {
  const { cart, wishlist, theme, toggleTheme, user } = useApp();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onSearch = (e) => {
    e.preventDefault();
    navigate({ to: "/shop", search: { q: query } });
    setOpen(false);
  };
  const cartCount = cart.reduce((n, x) => n + x.qty, 0);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-x flex h-16 items-center gap-4", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-foreground text-background font-bold", children: "S" }),
        /* @__PURE__ */ jsx("span", { className: "text-lg font-display font-semibold tracking-tight", children: "ShopVerse" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "ml-6 hidden items-center gap-6 md:flex", children: links.map((l) => /* @__PURE__ */ jsx(
        Link,
        {
          to: l.to,
          className: `text-sm transition-colors hover:text-foreground ${pathname === l.to ? "text-foreground" : "text-muted-foreground"}`,
          children: l.label
        },
        l.to
      )) }),
      /* @__PURE__ */ jsx("form", { onSubmit: onSearch, className: "ml-auto hidden flex-1 max-w-md md:flex", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
        /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            value: query,
            onChange: (e) => setQuery(e.target.value),
            placeholder: "Search products...",
            className: "h-10 w-full rounded-full border border-input bg-secondary/60 pl-10 pr-4 text-sm outline-none transition focus:border-brand"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-1 md:ml-2", children: [
        /* @__PURE__ */ jsx("button", { onClick: toggleTheme, className: "grid h-10 w-10 place-items-center rounded-full hover:bg-secondary", "aria-label": "Toggle theme", children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Moon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs(Link, { to: "/wishlist", className: "relative grid h-10 w-10 place-items-center rounded-full hover:bg-secondary", children: [
          /* @__PURE__ */ jsx(Heart, { className: "h-5 w-5" }),
          wishlist.length > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] font-semibold text-brand-foreground", children: wishlist.length })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/cart", className: "relative grid h-10 w-10 place-items-center rounded-full hover:bg-secondary", children: [
          /* @__PURE__ */ jsx(ShoppingBag, { className: "h-5 w-5" }),
          cartCount > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] font-semibold text-brand-foreground", children: cartCount })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: user ? "/dashboard" : "/login", className: "grid h-10 w-10 place-items-center rounded-full hover:bg-secondary", children: /* @__PURE__ */ jsx(User, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("button", { onClick: () => setOpen((o) => !o), className: "grid h-10 w-10 place-items-center rounded-full hover:bg-secondary md:hidden", "aria-label": "Menu", children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" }) })
      ] })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "border-t border-border bg-background md:hidden", children: /* @__PURE__ */ jsxs("div", { className: "container-x py-4 space-y-3", children: [
      /* @__PURE__ */ jsxs("form", { onSubmit: onSearch, className: "relative", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            value: query,
            onChange: (e) => setQuery(e.target.value),
            placeholder: "Search products...",
            className: "h-10 w-full rounded-full border border-input bg-secondary/60 pl-10 pr-4 text-sm outline-none"
          }
        )
      ] }),
      links.map((l) => /* @__PURE__ */ jsx(Link, { to: l.to, onClick: () => setOpen(false), className: "block py-2 text-base", children: l.label }, l.to))
    ] }) })
  ] });
}
const cols = [
  { title: "Shop", links: [["All Products", "/shop"], ["Electronics", "/shop"], ["Fashion", "/shop"], ["Home", "/shop"]] },
  { title: "Company", links: [["About", "/about"], ["Contact", "/contact"], ["FAQ", "/faq"]] },
  { title: "Legal", links: [["Privacy Policy", "/privacy"], ["Terms & Conditions", "/terms"]] }
];
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "mt-24 border-t border-border bg-beige text-beige-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-x py-14 grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-foreground text-background font-bold", children: "S" }),
          /* @__PURE__ */ jsx("span", { className: "text-lg font-display font-semibold", children: "ShopVerse" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm opacity-80 max-w-xs", children: "Premium everyday essentials, curated for the modern home." }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex gap-3", children: [Instagram, Twitter, Facebook, Youtube].map((Icon, i) => /* @__PURE__ */ jsx("a", { href: "#", className: "grid h-9 w-9 place-items-center rounded-full bg-background/60 hover:bg-background transition", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }, i)) })
      ] }),
      cols.map((c) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider", children: c.title }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-sm opacity-80", children: c.links.map(([label, to]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to, className: "hover:opacity-100 hover:text-brand", children: label }) }, label)) })
      ] }, c.title))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-foreground/10 py-5 text-center text-xs opacity-70", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ShopVerse. Crafted with care."
    ] })
  ] });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Layout as L
};
