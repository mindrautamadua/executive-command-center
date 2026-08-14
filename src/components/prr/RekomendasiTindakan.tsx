import {
  ArrowRight,
  ClipboardList,
  Crown,
  GitFork,
  GraduationCap,
  UserRoundCheck,
} from "lucide-react";
import { riskActions, type RiskAction } from "@/lib/prr-data";
import { SectionHead } from "../hc/SectionHead";
import { LevelBadge } from "./LevelBadge";

const ICONS: Record<RiskAction["icon"], typeof Crown> = {
  succession: GitFork,
  retention: UserRoundCheck,
  upskilling: GraduationCap,
  leadership: Crown,
  workload: ClipboardList,
};

const TONES: Record<RiskAction["tone"], string> = {
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  purple: "bg-[#fdeef7] text-[#ec4899]",
  violet: "bg-[#f1ecfd] text-[#8b5cf6]",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  green: "bg-ptpn-greenLight text-ptpn-green",
};

export function RekomendasiTindakan() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "240ms" } as React.CSSProperties}
    >
      <SectionHead no="7" title="Rekomendasi Tindakan Prioritas" />
      <p className="mt-[3px] text-[9px] text-ink-500">Tindakan yang Direkomendasikan</p>

      <ul className="scroll-thin mt-2 flex min-h-0 flex-1 flex-col justify-between gap-1.5 overflow-y-auto">
        {riskActions.map((a) => {
          const Icon = ICONS[a.icon];
          return (
            <li
              key={a.title}
              className="flex shrink-0 items-center gap-2.5 rounded-lg border border-[#eef2f6] bg-[#fbfcfd] px-2.5 py-1.5"
            >
              <span
                className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-lg ${TONES[a.tone]}`}
              >
                <Icon size={13} strokeWidth={1.9} />
              </span>
              <span className="min-w-0 flex-1 leading-[1.3]">
                <span className="block truncate text-[9.5px] font-extrabold text-ink-900">
                  {a.title}
                </span>
                <span className="block truncate text-[8.5px] text-ink-500">{a.desc}</span>
              </span>
              <span className="flex shrink-0 items-center gap-2">
                <LevelBadge level={a.level} />
                <span className="text-[8.5px] font-semibold text-ink-500">{a.quarter}</span>
              </span>
            </li>
          );
        })}
      </ul>

      <button className="mt-2 flex w-full items-center justify-center gap-1 rounded-lg border border-[#e3e9ef] bg-[#f8fafc] py-[7px] text-[9.5px] font-semibold text-ptpn-greenDark transition-colors hover:bg-[#eef4f0]">
        Lihat Semua Tindakan <ArrowRight size={11} />
      </button>
    </div>
  );
}
