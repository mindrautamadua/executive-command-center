import { Banknote, Clock, FileText, HeartPulse, Scale } from "lucide-react";
import { complianceRows } from "@/lib/ir-data";
import { SectionHead } from "../hc/SectionHead";
import { PanelFooterLink } from "./PanelFooterLink";
import { PALETTE } from "@/lib/chart-palette";

const ICONS = {
  regulation: Scale,
  wage: Banknote,
  pkb: FileText,
  worktime: Clock,
  safety: HeartPulse,
};

export function IrCompliance() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <SectionHead no="5" title="Kepatuhan Hubungan Industrial" />

      <ul className="flex min-h-0 flex-1 flex-col justify-around py-1">
        {complianceRows.map((c) => {
          const Icon = ICONS[c.icon];
          return (
            <li key={c.name} className="flex items-center gap-2">
              <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md bg-ptpn-greenLight text-ptpn-green">
                <Icon size={12} strokeWidth={1.9} />
              </span>
              <span className="w-[190px] shrink-0 truncate text-[8.5px] font-semibold text-ink-700" title={c.name}>
                {c.name}
              </span>
              <span className="h-[7px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
                <span
                  className="anim-grow-x block h-full rounded-full"
                  style={{ width: `${c.pct}%`, background: PALETTE.green }}
                />
              </span>
              <span className="w-[30px] shrink-0 text-right text-[9px] font-extrabold text-ink-900">
                {c.pct}%
              </span>
            </li>
          );
        })}
      </ul>

      <PanelFooterLink label="Lihat Detail Kepatuhan" />
    </div>
  );
}
