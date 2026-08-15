import { Sigma } from "lucide-react";
import { bridgeRoi, valueBridge } from "@/lib/ss-data";
import { SectionHead } from "../hc/SectionHead";

const KIND_STYLE: Record<string, { bar: string; text: string }> = {
  invest: { bar: "bg-[#ef4444]", text: "text-[#dc2626]" },
  benefit: { bar: "bg-ptpn-green", text: "text-ptpn-green" },
  net: { bar: "bg-[#1b3a6b]", text: "text-[#1b3a6b]" },
};

const MAX_ABS = 1850;

/**
 * Value Creation Bridge: dekomposisi eksplisit ROI 22,4% — investasi,
 * komponen benefit, dan net economic value. BOD tidak perlu menebak
 * bagaimana ROI terbentuk.
 */
export function ValueCreationBridge() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "240ms" } as React.CSSProperties}
    >
      <SectionHead title="Value Creation Bridge (Skenario C)" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Kumulatif 2026-2028 — bagaimana ROI 22,4% terbentuk
      </p>

      <ul className="mt-2 flex min-h-0 flex-1 flex-col justify-between gap-1">
        {valueBridge.map((s) => {
          const style = KIND_STYLE[s.kind];
          const width = Math.max(6, (Math.abs(s.value) / MAX_ABS) * 100);
          return (
            <li key={s.label} className="flex shrink-0 items-center gap-2" title={s.detail}>
              <span
                className={`w-[132px] shrink-0 truncate text-[8.5px] leading-tight ${
                  s.kind === "net" ? "font-extrabold text-ink-900" : "font-semibold text-ink-700"
                }`}
              >
                {s.label}
              </span>
              <div className="h-[9px] min-w-0 flex-1 overflow-hidden rounded-full bg-[var(--chart-grid)]">
                <div
                  className={`h-full rounded-full ${style.bar}`}
                  style={{ width: `${width}%` }}
                />
              </div>
              <span
                className={`w-[74px] shrink-0 text-right text-[9px] font-extrabold ${style.text}`}
              >
                {s.display}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-2 flex shrink-0 items-center gap-1.5 rounded-lg bg-[#eaf7f0] px-2.5 py-1.5">
        <Sigma size={11} className="shrink-0 text-ptpn-green" />
        <p className="truncate text-[8.5px] font-bold text-ptpn-greenDark" title={bridgeRoi.formula}>
          {bridgeRoi.formula}
        </p>
      </div>
    </div>
  );
}
