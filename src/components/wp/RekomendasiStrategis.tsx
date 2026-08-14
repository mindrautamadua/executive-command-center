import { ChevronRight, GraduationCap, Route, TrendingUp, UserCheck } from "lucide-react";
import { wpRekomendasi } from "@/lib/wp-data";
import { SectionHead } from "../hc/SectionHead";

const ICONS = {
  pipeline: UserCheck,
  reskilling: GraduationCap,
  produktivitas: TrendingUp,
  scenario: Route,
};

const TONES: Record<string, string> = {
  green: "bg-ptpn-greenLight text-ptpn-green",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  purple: "bg-[#f1ecfd] text-[#8b5cf6]",
};

export function RekomendasiStrategis() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <SectionHead no="8" title="Rekomendasi Strategis" />

      <div className="scroll-thin mt-2 flex min-h-0 flex-1 flex-col justify-between gap-1.5 overflow-y-auto">
        {wpRekomendasi.map((r) => {
          const Icon = ICONS[r.icon];
          return (
            <div
              key={r.title}
              className="flex shrink-0 items-center gap-2.5 rounded-lg border border-[#eef2f6] bg-[#fbfcfd] px-2.5 py-2 transition-colors hover:border-ptpn-green/40"
            >
              <span
                className={`flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg ${TONES[r.tone]}`}
              >
                <Icon size={14} strokeWidth={1.9} />
              </span>
              <span className="min-w-0 flex-1 leading-[1.3]">
                <span className="block truncate text-[9.5px] font-extrabold text-ink-900">
                  {r.title}
                </span>
                <span className="mt-[1px] block text-[8.5px] leading-snug text-ink-500">
                  {r.text}
                </span>
              </span>
              <ChevronRight size={13} className="shrink-0 text-ink-400" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
