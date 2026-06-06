export default function SectionHeader({ eyebrow, title, subtitle, action }: any) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4 animate-fade-in">
      <div>
        {eyebrow && <div className="mb-2 text-xs uppercase tracking-[0.2em] text-brand">{eyebrow}</div>}
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-2 max-w-xl text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
