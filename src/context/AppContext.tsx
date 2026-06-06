/**
 * AppContext
 * ----------
 * One small store for the whole app:
 *   - cart            (add / remove / update qty)
 *   - wishlist        (toggle saved items)
 *   - recentlyViewed  (last N products visited)
 *   - theme           (light / dark, persisted)
 *   - user            (simple mock auth — no backend needed)
 *
 * Everything is persisted to localStorage so the demo "feels" real
 * across page reloads, with zero backend.
 */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

const AppContext = createContext(null as any);

const read = (k, fallback) => {
  if (typeof window === "undefined") return fallback;
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart]                     = useState<any[]>(() => read("sv_cart", []));
  const [wishlist, setWishlist]             = useState<number[]>(() => read("sv_wishlist", []));
  const [recentlyViewed, setRecentlyViewed] = useState<number[]>(() => read("sv_recent", []));
  const [theme, setTheme]                   = useState<"light" | "dark">(() => read("sv_theme", "light"));
  const [user, setUser]                     = useState<any>(() => read("sv_user", null));
  const [addresses, setAddresses]           = useState<any[]>(() => read("sv_addresses", []));
  const [orders, setOrders]                 = useState<any[]>(() => read("sv_orders", []));

  // persist
  useEffect(() => { localStorage.setItem("sv_cart",      JSON.stringify(cart)); },           [cart]);
  useEffect(() => { localStorage.setItem("sv_wishlist",  JSON.stringify(wishlist)); },       [wishlist]);
  useEffect(() => { localStorage.setItem("sv_recent",    JSON.stringify(recentlyViewed)); }, [recentlyViewed]);
  useEffect(() => { localStorage.setItem("sv_theme",     JSON.stringify(theme)); },          [theme]);
  useEffect(() => { localStorage.setItem("sv_user",      JSON.stringify(user)); },           [user]);
  useEffect(() => { localStorage.setItem("sv_addresses", JSON.stringify(addresses)); },      [addresses]);
  useEffect(() => { localStorage.setItem("sv_orders",    JSON.stringify(orders)); },         [orders]);

  // theme class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark"); else root.classList.remove("dark");
  }, [theme]);

  const api = useMemo(() => ({
    cart, wishlist, recentlyViewed, theme, user, addresses, orders,

    addToCart: (product, qty = 1) => {
      setCart((c) => {
        const i = c.findIndex((x) => x.id === product.id);
        if (i >= 0) { const next = [...c]; next[i] = { ...next[i], qty: next[i].qty + qty }; return next; }
        return [...c, { id: product.id, qty, name: product.name, price: product.price, discount: product.discount, image: product.image }];
      });
      toast.success(`${product.name} added to cart`);
    },
    updateQty: (id, qty) => setCart((c) => c.map((x) => x.id === id ? { ...x, qty: Math.max(1, qty) } : x)),
    removeFromCart: (id) => { setCart((c) => c.filter((x) => x.id !== id)); toast("Removed from cart"); },
    clearCart: () => setCart([]),

    toggleWishlist: (id) => setWishlist((w) => {
      const has = w.includes(id);
      toast(has ? "Removed from wishlist" : "Added to wishlist");
      return has ? w.filter((x) => x !== id) : [id, ...w];
    }),

    addRecentlyViewed: (id) => setRecentlyViewed((r) => [id, ...r.filter((x) => x !== id)].slice(0, 8)),

    toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")),

    login:    (email) => { setUser({ email, name: email.split("@")[0] }); toast.success("Welcome back!"); },
    register: (name, email) => { setUser({ email, name }); toast.success("Account created"); },
    logout:   () => { setUser(null); toast("Signed out"); },

    addAddress: (addr) => setAddresses((a) => [...a, { id: Date.now(), ...addr }]),
    placeOrder: (order) => { setOrders((o) => [{ id: Date.now(), date: new Date().toISOString(), ...order }, ...o]); setCart([]); },
  }), [cart, wishlist, recentlyViewed, theme, user, addresses, orders]);

  return <AppContext.Provider value={api}>{children}</AppContext.Provider>;
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <AppProvider>");
  return ctx as any;
};
