import { ArrowRight, ChevronDown } from "lucide-react";
import { diversityIndexUnit } from "@/lib/di-data";

export function DiversityIndexUnit() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="card-title-navy">Diversity Index per Unit Organisasi</h3>
          <p className="mt-[3px] text-[9px] text-ink-400">(Skala 0-100)</p>
        </div>
        <button className="select-chip whitespace-nowrap px-2.5 py-[5px] text-[9.5px]">
          Top 5 Unit <ChevronDown size={11} />
        </button>
      </div>

      <div className="mt-1.5 flex min-h-0 flex-1 flex-col justify-around">
        {diversityIndexUnit.map((u, i) => (
          <div
            key={u.unit}
            className={`flex items-center gap-2.5 ${
              u.rata ? "-mx-1.5 rounded-lg bg-[#eef9f2] px-1.5 py-[5px]" : ""
            }`}
          >
            <span
              className={`w-[118px] shrink-0 text-[9.5px] leading-[1.2] ${
                u.rata ? "font-bold text-ink-900" : "text-ink-700"
              }`}
            >
              {u.unit}
            </span>
            <span className="block h-[9px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#f2f5f8]">
              <span
                className="anim-grow-x block h-full rounded-full"
                style={
                  {
                    width: `${u.nilai}%`,
                    background: u.color,
                    "--d": `${i * 50}ms`,
                  } as React.CSSProperties
                }
              />
            </span>
            <span
              className={`w-[28px] shrink-0 text-right text-[10px] tabular-nums ${
                u.rata ? "font-bold text-ink-900" : "font-semibold text-ink-700"
              }`}
            >
              {u.label}
            </span>
          </div>
        ))}
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat semua unit <ArrowRight size={11} />
      </button>
    </div>
  );
}
