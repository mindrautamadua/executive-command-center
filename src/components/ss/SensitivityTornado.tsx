import { AlertTriangle } from "lucide-react";
import { roiSensitivity, sensitivityBreak } from "@/lib/ss-data";
import { SectionHead } from "../hc/SectionHead";

const MAX_IMPACT = 8.4;

/**
 * Tornado chart sensitivitas ROI: asumsi mana yang paling menentukan
 * keberhasilan Skenario C, plus break condition eksplisit.
 */
export function SensitivityTornado() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "300ms" } as React.CSSProperties}
    >
      <SectionHead title="ROI Sensitivity (Tornado)" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Dampak pergeseran asumsi terhadap ROI Skenario C
      </p>

      <ul className="mt-2 flex min-h-0 flex-1 flex-col justify-between gap-1">
        {roiSensitivity.map((s) => (
          <li key={s.factor} className="flex shrink-0 items-center gap-2">
            <span className="w-[112px] shrink-0 truncate text-[8.5px] font-semibold text-ink-700">
              {s.factor}
            </span>
            <div className="h-[10px] min-w-0 flex-1 overflow-hidden rounded-full bg-[var(--chart-grid)]">
              <div
                className={`h-full rounded-full ${
                  s.dir === "up" ? "bg-[#3b7ded]" : "bg-[#f5a524]"
                }`}
                style={{ width: `${(s.impact / MAX_IMPACT) * 100}%` }}
              />
            </div>
            <span
              className={`w-[52px] shrink-0 text-right text-[9px] font-extrabold ${
                s.dir === "up" ? "text-[#2f6fe4]" : "text-[#d98b06]"
              }`}
            >
              {s.display}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex shrink-0 items-start gap-1.5 rounded-lg bg-[#fdecec] px-2.5 py-1.5">
        <AlertTriangle size={11} className="mt-[1px] shrink-0 text-[#ef4444]" />
        <p className="text-[8.5px] font-bold leading-snug text-[#b91c1c]">{sensitivityBreak}</p>
      </div>
    </div>
  );
}
