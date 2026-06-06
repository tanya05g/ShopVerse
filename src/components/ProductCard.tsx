import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { discounted, money } from "@/utils/format";

export default function ProductCard({ product }: { product: any }) {
  const { addToCart, toggleWishlist, wishlist } = useApp();
  const saved   = wishlist.includes(product.id);
  const final   = discounted(product.price, product.discount);
  const inStock = product.stock > 0;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover-lift">
      <Link to="/product/$id" params={{ id: String(product.id) }} className="relative block aspect-square overflow-hidden bg-beige/50">
        <img src={product.image} alt={product.name} loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        {product.discount > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-foreground px-2.5 py-1 text-[10px] font-semibold text-background">
            -{product.discount}%
          </span>
        )}
        {!inStock && (
          <span className="absolute right-3 top-3 rounded-full bg-destructive px-2.5 py-1 text-[10px] font-semibold text-destructive-foreground">
            Out of stock
          </span>
        )}
      </Link>

      <button
        onClick={() => toggleWishlist(product.id)}
        aria-label="Toggle wishlist"
        className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 opacity-0 transition-all duration-300 group-hover:opacity-100"
      >
        <Heart className={`h-4 w-4 ${saved ? "fill-brand text-brand" : ""}`} />
      </button>

      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">{product.category}</span>
        <Link to="/product/$id" params={{ id: String(product.id) }}
          className="mt-1 line-clamp-1 font-medium hover:text-brand transition-colors">
          {product.name}
        </Link>
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          {product.rating}
        </div>

        <div className="mt-3 flex items-end justify-between">
          <div>
            <div className="text-lg font-semibold">{money(final)}</div>
            {product.discount > 0 && (
              <div className="text-xs text-muted-foreground line-through">{money(product.price)}</div>
            )}
          </div>
          <button
            disabled={!inStock}
            onClick={() => addToCart(product)}
            className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background transition hover:bg-brand disabled:opacity-40"
            aria-label="Add to cart"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
