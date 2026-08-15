import {
  ArrowRight,
  FileSearch,
  GraduationCap,
  HardHat,
  Lock,
  ScrollText,
} from "lucide-react";
import { complianceActions, type ComplianceAction } from "@/lib/rc-data";
import { SectionHead } from "../hc/SectionHead";
import { StatusBadge } from "./StatusBadge";

const ICONS: Record<ComplianceAction["icon"], typeof Lock> = {
  privacy: Lock,
  safety: HardHat,
  investigation: FileSearch,
  training: GraduationCap,
  policy: ScrollText,
};

const TONES: Record<ComplianceAction["tone"], string> = {
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  purple: "bg-[#fdeef7] text-[#ec4899]",
  violet: "bg-[#f1ecfd] text-[#8b5cf6]",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  green: "bg-ptpn-greenLight text-ptpn-green",
};

export function RekomendasiKepatuhan() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "240ms" } as React.CSSProperties}
    >
      <SectionHead title="Rekomendasi Tindakan Kepatuhan" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Tindakan + Ekspektasi Penurunan Risiko (Risk Before → After)
      </p>

      <ul className="scroll-thin mt-2 flex min-h-0 flex-1 flex-col justify-between gap-1.5 overflow-y-auto">
        {complianceActions.map((a) => {
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
                <span className="mt-[2px] flex items-center gap-1.5">
                  <span className="h-[4px] w-[52px] overflow-hidden rounded-full bg-[#eef2f6]">
                    <span
                      className="block h-full rounded-full bg-ptpn-green"
                      style={{ width: `${a.progress}%` }}
                    />
                  </span>
                  <span className="text-[7.5px] font-bold text-ink-500">
                    {a.progress}% · {a.quarter}
                  </span>
                </span>
              </span>
              <span className="flex shrink-0 flex-col items-end gap-1">
                <StatusBadge status={a.status} />
                <span
                  className="whitespace-nowrap text-[8.5px] font-extrabold"
                  title={`Skor risiko ${a.riskBefore} diekspektasikan turun ke ${a.riskAfter} setelah tindakan selesai`}
                >
                  <span className="text-[#ef4444]">{a.riskBefore}</span>
                  <span className="mx-[3px] text-ink-400">→</span>
                  <span className="text-ptpn-green">{a.riskAfter}</span>
                </span>
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
