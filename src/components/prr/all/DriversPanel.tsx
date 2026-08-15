import { SectionHead } from "@/components/hc/SectionHead";
import { topRiskDrivers } from "@/lib/prr-registry";

const MAX = Math.max(...topRiskDrivers.map((d) => d.count));

/** Driver dominan lintas registri — dasar prioritas mitigasi tingkat grup. */
export function DriversPanel() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "160ms" } as React.CSSProperties}
    >
      <SectionHead title="Top Risk Drivers" />

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-center gap-2.5">
        {topRiskDrivers.map((d) => (
          <div key={d.label}>
            <div className="flex items-center justify-between gap-2">
              <span className="min-w-0 truncate text-[9.5px] font-medium text-ink-700">
                {d.label}
              </span>
              <span className="shrink-0 text-[9.5px] font-bold text-ink-900">{d.count}</span>
            </div>
            <div className="mt-1 h-[4px] w-full overflow-hidden rounded-full bg-[#eef2f6]">
              <div
                className="h-full rounded-full bg-[#8b5cf6]"
                style={{ width: `${(d.count / MAX) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
