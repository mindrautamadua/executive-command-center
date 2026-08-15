import { Award } from "lucide-react";
import { properFootnote } from "@/lib/esg-data-detail";

const BANDS = [
  { label: "Hijau", jumlah: 12, cls: "bg-ptpn-greenLight text-ptpn-green" },
  { label: "Biru", jumlah: 61, cls: "bg-[#e8f1fd] text-[#2f6fe4]" },
  { label: "Merah", jumlah: 3, cls: "bg-[#fdecec] text-[#ef4444]" },
];

/** Kartu abu ringkas peringkat PROPER KLHK siklus 2025/2026 (76 unit). */
export function ProperFootnote() {
  return (
    <div
      className="card anim-rise flex items-center gap-4 bg-[#f8fafc] px-4 py-2.5"
      style={{ "--d": "180ms" } as React.CSSProperties}
    >
      <span className="flex shrink-0 items-center gap-1.5 text-[8.5px] font-extrabold uppercase tracking-[0.05em] text-ink-400">
        <Award size={12} strokeWidth={1.9} />
        PROPER KLHK
      </span>

      <div className="flex shrink-0 items-center gap-2">
        {BANDS.map((b) => (
          <span
            key={b.label}
            className={`flex items-center gap-1.5 rounded-md px-2 py-[3px] ${b.cls}`}
          >
            <span className="text-[11px] font-extrabold tabular-nums">{b.jumlah}</span>
            <span className="text-[8.5px] font-bold">{b.label}</span>
          </span>
        ))}
      </div>

      <p className="min-w-0 flex-1 text-[8.5px] leading-snug text-ink-500">{properFootnote}</p>
    </div>
  );
}
