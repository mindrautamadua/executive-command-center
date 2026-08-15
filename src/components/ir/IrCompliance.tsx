import { AlertTriangle, Banknote, Clock, FileText, HeartPulse, Scale } from "lucide-react";
import { PALETTE } from "@/lib/chart-palette";
import {
  COMPLIANCE_STATUS_STYLE,
  complianceIntel,
  complianceRiskNote,
} from "@/lib/ir-intel-data";
import { SectionHead } from "../hc/SectionHead";
import { PanelFooterLink } from "./PanelFooterLink";

const ICONS = {
  regulation: Scale,
  wage: Banknote,
  pkb: FileText,
  worktime: Clock,
  safety: HeartPulse,
};

const BAR_COLOR = (pct: number, target: number) =>
  pct >= target ? PALETTE.green : pct >= 90 ? "#eab308" : PALETTE.amber;

export function IrCompliance() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <div className="flex items-baseline gap-1.5">
        <SectionHead title="Kepatuhan Hubungan Industrial" />
        <span className="shrink-0 text-[8.5px] text-ink-400">(Target ≥95%)</span>
      </div>

      <ul className="flex min-h-0 flex-1 flex-col justify-around py-1">
        {complianceIntel.map((c) => {
          const Icon = ICONS[c.icon];
          const gap = c.pct - c.target;
          return (
            <li key={c.name} className="flex items-center gap-2">
              <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md bg-ptpn-greenLight text-ptpn-green">
                <Icon size={12} strokeWidth={1.9} />
              </span>
              <span className="w-[128px] shrink-0 truncate text-[8.5px] font-semibold text-ink-700" title={c.name}>
                {c.name}
              </span>
              <span className="h-[7px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
                <span
                  className="anim-grow-x block h-full rounded-full"
                  style={{ width: `${c.pct}%`, background: BAR_COLOR(c.pct, c.target) }}
                />
              </span>
              <span className="w-[54px] shrink-0 text-right text-[9px] font-extrabold text-ink-900">
                {c.pct}%
                <span
                  className={`ml-[3px] text-[7.5px] font-bold ${
                    gap >= 0 ? "text-[#16a34a]" : "text-[#d98b06]"
                  }`}
                >
                  {gap >= 0 ? `+${gap}` : gap}
                </span>
              </span>
              <span className="w-[88px] shrink-0 text-right">
                <span
                  className={`inline-block rounded-md px-1.5 py-[2px] text-[7.5px] font-bold ${COMPLIANCE_STATUS_STYLE[c.status]}`}
                >
                  {c.status}
                </span>
              </span>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-1.5 rounded-lg border border-[#f3e3c3] bg-[#fdf9f0] px-2.5 py-1.5">
        <AlertTriangle size={11} className="shrink-0 text-[#d98b06]" />
        <span className="text-[7.5px] leading-[1.35] text-ink-700">{complianceRiskNote}</span>
      </div>

      <PanelFooterLink label="Lihat Detail Kepatuhan" />
    </div>
  );
}
