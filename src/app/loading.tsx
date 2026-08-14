// Skeleton shimmer meniru kerangka AppShell selama navigasi/render.
export default function Loading() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      {/* sidebar */}
      <div className="w-[196px] shrink-0 space-y-3 border-r border-[var(--border-soft)] bg-[var(--surface)] p-4">
        <div className="skeleton h-8 w-24" />
        <div className="mt-4 space-y-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="skeleton h-7 w-full" />
          ))}
        </div>
      </div>

      {/* konten */}
      <div className="flex-1 space-y-4 p-5">
        <div className="flex items-center justify-between">
          <div className="skeleton h-9 w-64" />
          <div className="skeleton h-9 w-40" />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="skeleton h-24" />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="skeleton h-64" />
          <div className="skeleton h-64" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="skeleton h-48" />
          <div className="skeleton h-48" />
          <div className="skeleton h-48" />
        </div>
      </div>
    </div>
  );
}
