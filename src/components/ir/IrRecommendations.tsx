import { Banknote, FileText, HeartHandshake, MessagesSquare } from "lucide-react";
import { irRecommendations, PRIORITY_STYLE } from "@/lib/ir-data";
import { SectionHead } from "../hc/SectionHead";
import { PanelFooterLink } from "./PanelFooterLink";

const ICONS = {
  bipartit: MessagesSquare,
  wage: Banknote,
  pkb: FileText,
  welfare: HeartHandshake,
};

const TONES: Record<string, string> = {
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  green: "bg-ptpn-greenLight text-ptpn-green",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
};

export function IrRecommendations() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "180ms" } as React.CSSProperties}
    >
      <SectionHead title="Rekomendasi & Tindak Lanjut" />

      <ul className="flex min-h-0 flex-1 flex-col justify-around py-1">
        {irRecommendations.map((r) => {
          const Icon = ICONS[r.icon];
          return (
            <li
              key={r.text}
              className="flex items-center gap-2.5 rounded-lg border border-[#eef2f6] bg-[#fbfcfe] px-2.5 py-2"
            >
              <span
                className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg ${TONES[r.tone]}`}
              >
                <Icon size={14} strokeWidth={1.9} />
              </span>
              <span className="min-w-0 flex-1 text-[9px] font-medium leading-[1.35] text-ink-800">
                {r.text}
              </span>
              <span
                className={`shrink-0 rounded-md px-2 py-[3px] text-[8px] font-bold ${PRIORITY_STYLE[r.priority]}`}
              >
                {r.priority}
              </span>
            </li>
          );
        })}
      </ul>

      <PanelFooterLink label="Lihat Semua Rekomendasi" />
    </div>
  );
}
