import { ChevronRight, CircleCheck, TriangleAlert } from "lucide-react";
import { SEMANTIC } from "@/lib/chart-palette";
import { costEfficiency, costGrowthStatus } from "@/lib/org-data";

export function EfisiensiBiaya() {
  return (
    <div className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3">
      <h3 className="card-title-navy">Efisiensi Biaya Organisasi</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">
        People Cost terhadap Skala &amp; Output Bisnis
      </p>

      <div className="mt-2 grid grid-cols-2 gap-2">
        {costEfficiency.map((s, i) => (
          <div
            key={s.label}
            className="anim-rise rounded-lg bg-[#f7f9fb] px-2.5 py-2 leading-tight"
            style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
          >
            <span className="block truncate text-[9px] text-ink-500">{s.label}</span>
            <span className="mt-[3px] block text-[13px] font-bold text-ink-900">{s.value}</span>
            <span className="text-[8.5px] text-ink-400">{s.caption}</span>
          </div>
        ))}
      </div>

      <p className="mt-2 flex items-start gap-1.5 text-[9px] font-medium leading-snug text-ink-700">
        {costGrowthStatus.good ? (
          <CircleCheck size={12} className="mt-[1px] shrink-0" style={{ color: SEMANTIC.good }} />
        ) : (
          <TriangleAlert size={12} className="mt-[1px] shrink-0" style={{ color: SEMANTIC.bad }} />
        )}
        {costGrowthStatus.text}
      </p>

      <button className="link-more mt-auto flex items-center gap-1 self-start pt-1">
        Lihat detail biaya SDM <ChevronRight size={11} />
      </button>
    </div>
  );
}
