import { opexMilestones } from "@/lib/biaya-opex-data";
import type { OpexMilestone } from "@/lib/biaya-opex-data";
import { SectionHead } from "@/components/hc/SectionHead";
import { ToneBadge, type BadgeTone } from "@/components/shared/ToneBadge";

const STATUS_TONE: Record<OpexMilestone["status"], BadgeTone> = {
  Selesai: "good",
  Berjalan: "info",
  Rencana: "neutral",
};

const DOT: Record<OpexMilestone["status"], string> = {
  Selesai: "bg-ptpn-green",
  Berjalan: "bg-[#3b7ded]",
  Rencana: "bg-[#cbd5e1]",
};

export function MilestoneTimeline() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <SectionHead title="Milestone Kuartalan 2026" action="Lihat Roadmap" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Tonggak Utama Program OPEX — 2 Selesai · 1 Berjalan · 1 Rencana
      </p>

      <div className="mt-2.5 flex min-h-0 flex-1 flex-col justify-between">
        {opexMilestones.map((m, i) => (
          <div key={m.kuartal} className="relative flex items-start gap-3 pb-1">
            {/* Garis penghubung timeline */}
            {i < opexMilestones.length - 1 && (
              <span className="absolute left-[5px] top-[14px] h-full w-[2px] bg-[#eef2f6]" />
            )}
            <span
              className={`relative mt-[3px] h-[12px] w-[12px] shrink-0 rounded-full border-2 border-white shadow-card ${DOT[m.status]}`}
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-extrabold text-ink-900">{m.kuartal}</span>
                <ToneBadge label={m.status} tone={STATUS_TONE[m.status]} />
              </div>
              <p className="mt-[3px] text-[8.5px] leading-snug text-ink-500">{m.milestone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
