import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useMemo, createContext, useContext } from "react";
import { toast, Toaster as Toaster$1 } from "sonner";
const appCss = "/assets/styles-CB5CIN-k.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const AppContext = createContext(null);
const read = (k, fallback) => {
  if (typeof window === "undefined") return fallback;
  try {
    const v = localStorage.getItem(k);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
};
function AppProvider({ children }) {
  const [cart, setCart] = useState(() => read("sv_cart", []));
  const [wishlist, setWishlist] = useState(() => read("sv_wishlist", []));
  const [recentlyViewed, setRecentlyViewed] = useState(() => read("sv_recent", []));
  const [theme, setTheme] = useState(() => read("sv_theme", "light"));
  const [user, setUser] = useState(() => read("sv_user", null));
  const [addresses, setAddresses] = useState(() => read("sv_addresses", []));
  const [orders, setOrders] = useState(() => read("sv_orders", []));
  useEffect(() => {
    localStorage.setItem("sv_cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("sv_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  useEffect(() => {
    localStorage.setItem("sv_recent", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);
  useEffect(() => {
    localStorage.setItem("sv_theme", JSON.stringify(theme));
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("sv_user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    localStorage.setItem("sv_addresses", JSON.stringify(addresses));
  }, [addresses]);
  useEffect(() => {
    localStorage.setItem("sv_orders", JSON.stringify(orders));
  }, [orders]);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);
  const api = useMemo(() => ({
    cart,
    wishlist,
    recentlyViewed,
    theme,
    user,
    addresses,
    orders,
    addToCart: (product, qty = 1) => {
      setCart((c) => {
        const i = c.findIndex((x) => x.id === product.id);
        if (i >= 0) {
          const next = [...c];
          next[i] = { ...next[i], qty: next[i].qty + qty };
          return next;
        }
        return [...c, { id: product.id, qty, name: product.name, price: product.price, discount: product.discount, image: product.image }];
      });
      toast.success(`${product.name} added to cart`);
    },
    updateQty: (id, qty) => setCart((c) => c.map((x) => x.id === id ? { ...x, qty: Math.max(1, qty) } : x)),
    removeFromCart: (id) => {
      setCart((c) => c.filter((x) => x.id !== id));
      toast("Removed from cart");
    },
    clearCart: () => setCart([]),
    toggleWishlist: (id) => setWishlist((w) => {
      const has = w.includes(id);
      toast(has ? "Removed from wishlist" : "Added to wishlist");
      return has ? w.filter((x) => x !== id) : [id, ...w];
    }),
    addRecentlyViewed: (id) => setRecentlyViewed((r) => [id, ...r.filter((x) => x !== id)].slice(0, 8)),
    toggleTheme: () => setTheme((t) => t === "light" ? "dark" : "light"),
    login: (email) => {
      setUser({ email, name: email.split("@")[0] });
      toast.success("Welcome back!");
    },
    register: (name, email) => {
      setUser({ email, name });
      toast.success("Account created");
    },
    logout: () => {
      setUser(null);
      toast("Signed out");
    },
    addAddress: (addr) => setAddresses((a) => [...a, { id: Date.now(), ...addr }]),
    placeOrder: (order) => {
      setOrders((o) => [{ id: Date.now(), date: (/* @__PURE__ */ new Date()).toISOString(), ...order }, ...o]);
      setCart([]);
    }
  }), [cart, wishlist, recentlyViewed, theme, user, addresses, orders]);
  return /* @__PURE__ */ jsx(AppContext.Provider, { value: api, children });
}
const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <AppProvider>");
  return ctx;
};
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-7xl", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "btn-brand", children: "Go home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-2xl", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We hit a snag loading this page. Try again or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "btn-brand", children: "Try again" }),
      /* @__PURE__ */ jsx("a", { href: "/", className: "btn-outline-dark", children: "Go home" })
    ] })
  ] }) });
}
const Route$g = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ShopVerse — Premium Everyday Essentials" },
      { name: "description", content: "ShopVerse — a modern e-commerce store for curated electronics, fashion, home and more." },
      { property: "og:title", content: "ShopVerse" },
      { property: "og:description", content: "Premium everyday essentials, curated for the modern home." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$g.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs(AppProvider, { children: [
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] }) });
}
const $$splitComponentImporter$f = () => import("./wishlist-DshH4G9e.js");
const Route$f = createFileRoute("/wishlist")({
  head: () => ({
    meta: [{
      title: "Wishlist — ShopVerse"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./terms-BMCUWbbP.js");
const Route$e = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms & Conditions — ShopVerse"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./shop-BDU8DICh.js");
const Route$d = createFileRoute("/shop")({
  validateSearch: (s) => ({
    q: s.q || "",
    category: s.category || "all"
  }),
  head: () => ({
    meta: [{
      title: "Shop — ShopVerse"
    }, {
      name: "description",
      content: "Browse every product on ShopVerse."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./register-CkiJDhrJ.js");
const Route$c = createFileRoute("/register")({
  head: () => ({
    meta: [{
      title: "Create account — ShopVerse"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./privacy-DxFzLOyY.js");
const Route$b = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — ShopVerse"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./order-confirmation-DemmAaBO.js");
const Route$a = createFileRoute("/order-confirmation")({
  head: () => ({
    meta: [{
      title: "Thank you — ShopVerse"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./login-n4Xk_p5X.js");
const Route$9 = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Log in — ShopVerse"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
function Input({
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("input", { required: true, ...props, className: "mt-1 h-11 w-full rounded-xl border border-input bg-secondary/60 px-4 text-sm outline-none focus:border-brand" })
  ] });
}
const $$splitComponentImporter$8 = () => import("./forgot-password-BF5IPoJ5.js");
const Route$8 = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [{
      title: "Reset password — ShopVerse"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./faq-BqMgne9k.js");
const Route$7 = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ — ShopVerse"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./dashboard-DLcmVxX-.js");
const Route$6 = createFileRoute("/dashboard")({
  head: () => ({
    meta: [{
      title: "Dashboard — ShopVerse"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-B-Zww_m9.js");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — ShopVerse"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./checkout-BY22CeVR.js");
const Route$4 = createFileRoute("/checkout")({
  head: () => ({
    meta: [{
      title: "Checkout — ShopVerse"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./cart-DG2emCjn.js");
const Route$3 = createFileRoute("/cart")({
  head: () => ({
    meta: [{
      title: "Cart — ShopVerse"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-AuLgJ1Y3.js");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — ShopVerse"
    }, {
      name: "description",
      content: "Our story, our mission, our craft."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-D9r53_9D.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "ShopVerse — Premium Everyday Essentials"
    }, {
      name: "description",
      content: "Shop curated electronics, fashion, home & more. Free shipping over $75."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const categories = [
  { slug: "electronics", name: "Electronics", icon: "Laptop" },
  { slug: "fashion", name: "Fashion", icon: "Shirt" },
  { slug: "shoes", name: "Shoes", icon: "Footprints" },
  { slug: "home", name: "Home", icon: "Home" },
  { slug: "beauty", name: "Beauty", icon: "Sparkles" },
  { slug: "sports", name: "Sports", icon: "Dumbbell" },
  { slug: "books", name: "Books", icon: "BookOpen" }
];
const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;
const products = [
  // Electronics
  { id: 1, name: "Aurora Wireless Headphones", category: "electronics", price: 189, discount: 25, rating: 4.8, stock: 24, image: img("photo-1505740420928-5e560c06d30e"), description: "Studio-grade sound with active noise cancellation and 40h battery life.", trending: true, featured: true },
  { id: 2, name: "Nimbus Smartwatch Pro", category: "electronics", price: 249, discount: 15, rating: 4.6, stock: 12, image: img("photo-1546868871-7041f2a55e12"), description: "Health, fitness and notifications on a vivid AMOLED display.", trending: true },
  { id: 3, name: "PixelCam 4K Mirrorless", category: "electronics", price: 899, discount: 10, rating: 4.9, stock: 6, image: img("photo-1502920917128-1aa500764cbd"), description: "Compact mirrorless camera with cinematic 4K60 video.", featured: true },
  { id: 4, name: "Echo Bluetooth Speaker", category: "electronics", price: 79, discount: 30, rating: 4.4, stock: 0, image: img("photo-1608043152269-423dbba4e7e1"), description: "Pocket-sized speaker, room-filling sound." },
  { id: 5, name: "Orbit Wireless Charger", category: "electronics", price: 39, discount: 20, rating: 4.3, stock: 40, image: img("photo-1591290619762-c44b8e9c91e5"), description: "Fast 15W charging with a minimal Scandinavian design." },
  // Fashion
  { id: 6, name: "Linen Oversized Shirt", category: "fashion", price: 69, discount: 10, rating: 4.5, stock: 30, image: img("photo-1520975916090-3105956dac38"), description: "Breathable European linen, relaxed silhouette.", featured: true },
  { id: 7, name: "Heritage Denim Jacket", category: "fashion", price: 129, discount: 0, rating: 4.7, stock: 14, image: img("photo-1495105787522-5334e3ffa0ef"), description: "Selvedge denim with vintage wash and brass hardware." },
  { id: 8, name: "Cashmere Crew Sweater", category: "fashion", price: 159, discount: 20, rating: 4.8, stock: 9, image: img("photo-1434389677669-e08b4cac3105"), description: "Grade-A cashmere — soft, light, warm.", trending: true },
  { id: 9, name: "Pleated Midi Skirt", category: "fashion", price: 89, discount: 15, rating: 4.4, stock: 22, image: img("photo-1583496661160-fb5886a13d44"), description: "Flowy pleats with elasticated waist." },
  { id: 10, name: "Wool Overcoat", category: "fashion", price: 299, discount: 25, rating: 4.9, stock: 7, image: img("photo-1539109136881-3be0616acf4b"), description: "Italian wool, double-breasted, tailored fit." },
  // Shoes
  { id: 11, name: "Cloud Runner Sneakers", category: "shoes", price: 139, discount: 20, rating: 4.7, stock: 18, image: img("photo-1542291026-7eec264c27ff"), description: "Featherweight cushioning for everyday running.", trending: true, featured: true },
  { id: 12, name: "Leather Chelsea Boots", category: "shoes", price: 219, discount: 10, rating: 4.6, stock: 11, image: img("photo-1543163521-1bf539c55dd2"), description: "Full-grain leather, Goodyear-welted sole." },
  { id: 13, name: "Court Classic Whites", category: "shoes", price: 99, discount: 0, rating: 4.5, stock: 26, image: img("photo-1600185365926-3a2ce3cdb9eb"), description: "Minimalist court silhouette in premium leather." },
  { id: 14, name: "Trail Hiker GTX", category: "shoes", price: 179, discount: 15, rating: 4.7, stock: 9, image: img("photo-1606107557195-0e29a4b5b4aa"), description: "Waterproof Gore-Tex with aggressive grip." },
  // Home
  { id: 15, name: "Ceramic Pour-Over Set", category: "home", price: 59, discount: 10, rating: 4.6, stock: 33, image: img("photo-1495474472287-4d71bcdd2085"), description: "Hand-thrown ceramic dripper with carafe." },
  { id: 16, name: "Linen Bedding Bundle", category: "home", price: 189, discount: 25, rating: 4.8, stock: 15, image: img("photo-1505693416388-ac5ce068fe85"), description: "Stone-washed linen — softer every wash.", featured: true },
  { id: 17, name: "Olive Wood Cutting Board", category: "home", price: 49, discount: 5, rating: 4.7, stock: 41, image: img("photo-1556909114-f6e7ad7d3136"), description: "Hand-finished olive wood, each piece unique." },
  { id: 18, name: "Architect Desk Lamp", category: "home", price: 119, discount: 0, rating: 4.5, stock: 19, image: img("photo-1507473885765-e6ed057f782c"), description: "Articulated brass arm with warm LED." },
  // Beauty
  { id: 19, name: "Glow Serum — Vitamin C", category: "beauty", price: 39, discount: 15, rating: 4.6, stock: 50, image: img("photo-1556228720-195a672e8a03"), description: "Brightening serum with 15% L-ascorbic acid." },
  { id: 20, name: "Velvet Matte Lipstick Set", category: "beauty", price: 49, discount: 20, rating: 4.7, stock: 28, image: img("photo-1586495777744-4413f21062fa"), description: "Six nudes — long-wear, never drying.", trending: true },
  { id: 21, name: "Spa Candle — Cedar & Sage", category: "beauty", price: 34, discount: 0, rating: 4.5, stock: 60, image: img("photo-1602874801007-bd458bb1b8b6"), description: "Soy wax, 60h burn time." },
  { id: 22, name: "Botanical Face Oil", category: "beauty", price: 58, discount: 10, rating: 4.8, stock: 22, image: img("photo-1570194065650-d99fb4bedf0a"), description: "Cold-pressed rosehip, jojoba and squalane." },
  // Sports
  { id: 23, name: "Studio Yoga Mat", category: "sports", price: 69, discount: 10, rating: 4.6, stock: 35, image: img("photo-1518611012118-696072aa579a"), description: "Eco TPE, 6mm cushioning, alignment lines." },
  { id: 24, name: "Pro Dumbbell Pair — 10kg", category: "sports", price: 129, discount: 0, rating: 4.5, stock: 0, image: img("photo-1517836357463-d25dfeac3438"), description: "Hex rubber-coated, knurled chrome handle." },
  { id: 25, name: "Trailblazer Backpack 30L", category: "sports", price: 149, discount: 20, rating: 4.7, stock: 17, image: img("photo-1553062407-98eeb64c6a62"), description: "Weatherproof, padded straps, hydration ready.", featured: true },
  { id: 26, name: "Carbon Road Bike Helmet", category: "sports", price: 189, discount: 15, rating: 4.6, stock: 13, image: img("photo-1518830340604-44765aa5e7a3"), description: "MIPS protection at 220g." },
  // Books
  { id: 27, name: "Atomic Mindset (Hardcover)", category: "books", price: 24, discount: 10, rating: 4.9, stock: 80, image: img("photo-1544947950-fa07a98d237f"), description: "Build identity-based habits that compound." },
  { id: 28, name: "The Quiet Garden — Novel", category: "books", price: 19, discount: 0, rating: 4.6, stock: 45, image: img("photo-1512820790803-83ca734da794"), description: "A lyrical literary debut." },
  { id: 29, name: "Design Foundations", category: "books", price: 39, discount: 15, rating: 4.7, stock: 22, image: img("photo-1589998059171-988d887df646"), description: "Visual hierarchy, color & type, for builders." },
  { id: 30, name: "Cooking from the Pantry", category: "books", price: 29, discount: 5, rating: 4.5, stock: 38, image: img("photo-1532012197267-da84d127e765"), description: "120 weeknight recipes from staples." }
];
const getById = (id) => products.find((p) => String(p.id) === String(id));
const getRelated = (product, n = 4) => products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, n);
const testimonials = [
  { name: "Amelia R.", role: "Product Designer", text: "ShopVerse feels like browsing a beautiful magazine. The checkout was seamless.", avatar: img("photo-1494790108377-be9c29b29330") },
  { name: "Jordan K.", role: "Photographer", text: "Premium quality and fast shipping. The packaging itself felt like a gift.", avatar: img("photo-1500648767791-00dcc994a43e") },
  { name: "Priya S.", role: "Founder", text: "My go-to for everyday essentials. The recommendations are scarily good.", avatar: img("photo-1438761681033-6461ffad8d80") },
  { name: "Marcus T.", role: "Engineer", text: "Clean UI, real reviews, and prices that don't insult you.", avatar: img("photo-1599566150163-29194dcaad36") }
];
const $$splitComponentImporter = () => import("./product._id-CIbpG0R6.js");
const $$splitNotFoundComponentImporter = () => import("./product._id-DH2WzVTP.js");
const Route = createFileRoute("/product/$id")({
  loader: ({
    params
  }) => {
    const product = getById(params.id);
    if (!product) throw notFound();
    return {
      product
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WishlistRoute = Route$f.update({
  id: "/wishlist",
  path: "/wishlist",
  getParentRoute: () => Route$g
});
const TermsRoute = Route$e.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$g
});
const ShopRoute = Route$d.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$g
});
const RegisterRoute = Route$c.update({
  id: "/register",
  path: "/register",
  getParentRoute: () => Route$g
});
const PrivacyRoute = Route$b.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$g
});
const OrderConfirmationRoute = Route$a.update({
  id: "/order-confirmation",
  path: "/order-confirmation",
  getParentRoute: () => Route$g
});
const LoginRoute = Route$9.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$g
});
const ForgotPasswordRoute = Route$8.update({
  id: "/forgot-password",
  path: "/forgot-password",
  getParentRoute: () => Route$g
});
const FaqRoute = Route$7.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$g
});
const DashboardRoute = Route$6.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$g
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$g
});
const CheckoutRoute = Route$4.update({
  id: "/checkout",
  path: "/checkout",
  getParentRoute: () => Route$g
});
const CartRoute = Route$3.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$g
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$g
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$g
});
const ProductIdRoute = Route.update({
  id: "/product/$id",
  path: "/product/$id",
  getParentRoute: () => Route$g
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CartRoute,
  CheckoutRoute,
  ContactRoute,
  DashboardRoute,
  FaqRoute,
  ForgotPasswordRoute,
  LoginRoute,
  OrderConfirmationRoute,
  PrivacyRoute,
  RegisterRoute,
  ShopRoute,
  TermsRoute,
  WishlistRoute,
  ProductIdRoute
};
const routeTree = Route$g._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Input as I,
  Route as R,
  categories as c,
  getRelated as g,
  products as p,
  router as r,
  testimonials as t,
  useApp as u
};
