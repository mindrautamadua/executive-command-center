import { ArrowRight, ChevronDown } from "lucide-react";
import { topProgram } from "@/lib/lnd-data";

const MAX = Math.max(...topProgram.map((p) => p.value));

export function TopProgram() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "220ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="card-title-navy">Top 5 Program Berdasarkan Partisipasi</h3>
        <button className="select-chip whitespace-nowrap px-2.5 py-[5px] text-[9.5px]">
          Semua Program <ChevronDown size={11} />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-around py-1">
        {topProgram.map((p, i) => (
          <div key={p.nama} className="flex items-center gap-2.5">
            <span className="w-[148px] shrink-0 text-[9.5px] leading-[1.25] text-ink-700">
              {p.nama}
            </span>
            <span className="h-[9px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#f2f5f8]">
              <span
                className="anim-grow-x block h-full rounded-full"
                style={
                  {
                    width: `${(p.value / MAX) * 100}%`,
                    background: p.color,
                    "--d": `${90 * i}ms`,
                  } as React.CSSProperties
                }
              />
            </span>
            <span className="w-[34px] shrink-0 text-right text-[10px] font-bold tabular-nums text-ink-900">
              {p.peserta}
            </span>
          </div>
        ))}
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat semua program <ArrowRight size={11} />
      </button>
    </div>
  );
}
