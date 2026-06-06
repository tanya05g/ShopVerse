// Tiny loading skeletons used while content "loads".
export function CardSkeleton() {
  return (
    <div className="space-y-3">
      <div className="skeleton aspect-square w-full" />
      <div className="skeleton h-4 w-3/4" />
      <div className="skeleton h-4 w-1/2" />
    </div>
  );
}
export function GridSkeleton({ n = 8 }: { n?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: n }).map((_, i) => <CardSkeleton key={i} />)}
    </div>
  );
}
