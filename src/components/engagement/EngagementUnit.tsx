import { ArrowRight, ChevronDown } from "lucide-react";
import { engagementUnit, engagementUnitTarget } from "@/lib/engagement-data";
import { PALETTE } from "@/lib/chart-palette";

export function EngagementUnit() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "280ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="card-title-navy">Engagement Score per Unit Organisasi</h3>
          <p className="mt-[3px] text-[9.5px] text-ink-500">
            Perbandingan Skor Engagement ·{" "}
            <span className="font-semibold" style={{ color: PALETTE.amber }}>
              Target {engagementUnitTarget}
            </span>
          </p>
        </div>
        <button className="select-chip whitespace-nowrap px-2.5 py-[5px] text-[9.5px]">
          Top 10 Unit <ChevronDown size={11} />
        </button>
      </div>

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-between">
        {engagementUnit.map((u, i) => (
          <div key={u.unit} className="flex items-center gap-2">
            <span className="w-[112px] shrink-0 truncate text-[9px] text-ink-700">{u.unit}</span>
            <span className="relative h-[7px] min-w-0 flex-1 rounded-full bg-[#eef2f6]">
              <span
                className="anim-grow-x block h-full overflow-hidden rounded-full"
                style={
                  {
                    width: `${u.bar}%`,
                    background: u.color,
                    "--d": `${50 * i}ms`,
                  } as React.CSSProperties
                }
              />
              {/* penanda target */}
              <span
                className="absolute -bottom-[2px] -top-[2px] w-[1.5px] rounded-full"
                style={{ left: `${engagementUnitTarget}%`, background: PALETTE.amber }}
              />
            </span>
            <span className="w-[26px] shrink-0 text-right text-[9px] font-semibold tabular-nums text-ink-900">
              {u.skor}
            </span>
          </div>
        ))}
      </div>

      <button className="link-more mt-2 flex items-center gap-1 self-start">
        Lihat semua unit organisasi <ArrowRight size={11} />
      </button>
    </div>
  );
}
