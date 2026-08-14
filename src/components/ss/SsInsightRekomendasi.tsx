import { AlertTriangle, BadgeCheck, Building2, UserCog } from "lucide-react";
import { ssInsights } from "@/lib/ss-data";
import { SectionHead } from "../hc/SectionHead";

const ICONS = {
  roi: BadgeCheck,
  efficiency: Building2,
  skill: UserCog,
  monitoring: AlertTriangle,
};

const TONES: Record<string, string> = {
  green: "bg-ptpn-greenLight text-ptpn-green",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  red: "bg-[#fdecec] text-[#ef4444]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
};

export function SsInsightRekomendasi() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <SectionHead title="Insight & Rekomendasi" />
      <p className="mt-[3px] text-[9px] text-ink-500">Insight utama dari hasil simulasi</p>

      <ul className="scroll-thin mt-2 flex min-h-0 flex-1 flex-col justify-between gap-1.5 overflow-y-auto">
        {ssInsights.map((ins) => {
          const Icon = ICONS[ins.icon];
          return (
            <li
              key={ins.text}
              className="flex shrink-0 items-center gap-2.5 rounded-lg border border-[#eef2f6] bg-[#fbfcfd] px-2.5 py-2"
            >
              <span
                className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full ${TONES[ins.tone]}`}
              >
                <Icon size={12.5} strokeWidth={1.9} />
              </span>
              <p className="text-[9px] font-semibold leading-snug text-ink-700">{ins.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
