import { ChevronDown, ChevronRight } from "lucide-react";
import { ratingKinerja } from "@/lib/sdm-data";

export function KinerjaKaryawan() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "240ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="card-title-navy whitespace-nowrap">KINERJA KARYAWAN</h3>
          <p className="mt-[3px] text-[9.5px] text-ink-500">Distribusi Rating Kinerja</p>
        </div>
        <button className="select-chip-sm">
          YTD 2025 <ChevronDown size={10} />
        </button>
      </div>

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-around">
        {ratingKinerja.map((r, i) => (
          <div key={r.label} className="flex items-center gap-2">
            <span className="w-[124px] shrink-0 whitespace-nowrap text-[9px] text-ink-700">
              {r.label} <span className="text-ink-400">{r.range}</span>
            </span>
            <div className="h-[9px] flex-1 overflow-hidden rounded-full bg-[#f1f5f8]">
              <div
                className="anim-grow-x h-full rounded-full"
                style={
                  {
                    width: `${r.pct}%`,
                    background: r.color,
                    "--d": `${240 + i * 70}ms`,
                  } as React.CSSProperties
                }
              />
            </div>
            <span className="w-[26px] shrink-0 text-right text-[9.5px] font-bold tabular-nums text-ink-900">
              {r.pct}%
            </span>
          </div>
        ))}
      </div>

      <button className="link-more mt-1.5 flex cursor-pointer items-center gap-0.5">
        Lihat detail kinerja <ChevronRight size={12} />
      </button>
    </div>
  );
}
