import { Wrench } from "lucide-react";
import { feasibilityDims, feasibilityOverall } from "@/lib/ss-data";
import { SectionHead } from "../hc/SectionHead";

function barColor(v: number) {
  if (v >= 80) return "#1a9c5b";
  if (v >= 72) return "#3b7ded";
  return "#f5a524";
}

/**
 * Execution Feasibility: bukan "apa hasilnya jika dijalankan" tetapi
 * "apakah organisasi mampu menjalankannya".
 */
export function ExecutionFeasibility() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "420ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <SectionHead title="Execution Feasibility" />
        <span className="shrink-0 rounded-full bg-[#e8f1fd] px-2 py-[3px] text-[9px] font-extrabold text-[#2f6fe4]">
          Overall {feasibilityOverall.value}%
        </span>
      </div>
      <p className="mt-[3px] text-[9px] text-ink-500">{feasibilityOverall.verdict}</p>

      <ul className="mt-2 flex min-h-0 flex-1 flex-col justify-between gap-1">
        {feasibilityDims.map((d) => (
          <li key={d.label} className="flex shrink-0 items-center gap-2">
            <span className="w-[118px] shrink-0 truncate text-[8.5px] font-semibold text-ink-700">
              {d.label}
            </span>
            <div className="h-[9px] min-w-0 flex-1 overflow-hidden rounded-full bg-[var(--chart-grid)]">
              <div
                className="h-full rounded-full"
                style={{ width: `${d.value}%`, background: barColor(d.value) }}
              />
            </div>
            <span className="w-[30px] shrink-0 text-right text-[9px] font-extrabold text-ink-900">
              {d.value}%
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex shrink-0 items-start gap-1.5 rounded-lg bg-[#fdf3e0] px-2.5 py-1.5">
        <Wrench size={11} className="mt-[1px] shrink-0 text-[#d98b06]" />
        <p className="text-[8.5px] font-bold leading-snug text-[#b45309]">
          {feasibilityOverall.note}
        </p>
      </div>
    </div>
  );
}
