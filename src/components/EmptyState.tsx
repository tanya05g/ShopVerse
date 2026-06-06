import { Link } from "@tanstack/react-router";

export default function EmptyState({
  icon: Icon, title, subtitle, ctaLabel = "Browse shop", ctaTo = "/shop",
}: any) {
  return (
    <div className="mx-auto max-w-md py-20 text-center animate-fade-in">
      {Icon && (
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-beige">
          <Icon className="h-7 w-7 text-foreground" />
        </div>
      )}
      <h3 className="font-display text-2xl">{title}</h3>
      {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
      <Link to={ctaTo} className="btn-brand mt-6">{ctaLabel}</Link>
    </div>
  );
}
