import { ArrowRight, CheckCircle2 } from "lucide-react";
import { insightAiRekrutmen } from "@/lib/rekrutmen-data";
import { CoachRobot } from "../kinerja/CoachRobot";

export function InsightAiRekrutmen() {
  return (
    <div
      className="card anim-rise relative flex h-full flex-col overflow-hidden px-4 pb-2.5 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <div className="flex items-center gap-2">
        <h3 className="card-title-navy">Insight AI Recruitment</h3>
        <span className="tone-blue rounded px-1.5 py-[1px] text-[9px] font-bold">
          Beta
        </span>
      </div>

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-center gap-2.5 pr-[104px]">
        {insightAiRekrutmen.map((t) => (
          <div key={t} className="flex gap-1.5">
            <CheckCircle2 size={12} className="mt-[1px] shrink-0 text-ptpn-green" />
            <p className="text-[9.5px] leading-[1.4] text-ink-700">{t}</p>
          </div>
        ))}
      </div>

      <span className="pointer-events-none absolute bottom-1 right-1 h-[116px] w-[104px] animate-floaty">
        <CoachRobot waving className="h-full w-full" />
      </span>

      <button className="mt-2 flex w-[176px] items-center justify-center gap-1.5 rounded-lg bg-[#eaf6ee] px-3 py-[7px] text-[10px] font-semibold text-ptpn-green transition-colors hover:bg-[#e0f2e7]">
        Lihat Rekomendasi AI
        <ArrowRight size={11} />
      </button>
    </div>
  );
}
