import { AlarmClock } from "lucide-react";
import { overdueDetail } from "@/lib/sbd-data";
import { SectionHead } from "@/components/hc/SectionHead";
import { ToneBadge } from "@/components/shared/ToneBadge";

/** 3 keputusan overdue: hambatan, PIC, dan eksposur nilai tertahan. */
export function OverdueDecisions() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <SectionHead title="Keputusan Overdue" action="Eskalasi ke Radirsus" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        3 Keputusan Melewati Batas Waktu — Menahan Rp 2,8 T Inisiatif
      </p>

      <div className="scroll-thin mt-1.5 min-h-0 flex-1 overflow-y-auto pr-1">
        <div className="grid grid-cols-3 gap-2">
          {overdueDetail.map((d) => (
            <div key={d.title} className="rounded-lg border border-[#f5d9d9] bg-[#fdecec] p-2">
              <div className="flex items-start gap-1.5">
                <AlarmClock size={11} strokeWidth={2} className="mt-[1px] shrink-0 text-[#ef4444]" />
                <div className="min-w-0">
                  <div className="text-[9px] font-extrabold leading-snug text-ink-900">
                    {d.title}
                  </div>
                  <div className="mt-[2px] text-[8px] font-semibold text-ink-500">{d.forum}</div>
                </div>
              </div>

              <div className="mt-1.5 flex items-center gap-1.5">
                <ToneBadge label={`Telat ${d.overdueHari} hari`} tone="bad" />
                <span className="text-[8px] font-semibold text-ink-500">
                  Jatuh tempo {d.due}
                </span>
              </div>

              <p className="mt-1.5 text-[8px] leading-snug text-ink-500">
                <span className="font-bold text-ink-700">Hambatan:</span> {d.hambatan}
              </p>

              <div className="mt-1.5 flex items-center justify-between gap-2 border-t border-[#f5d9d9] pt-1">
                <span className="truncate text-[8px] font-semibold text-ink-500">
                  PIC: {d.pic}
                </span>
                <span className="shrink-0 text-[8.5px] font-extrabold text-[#ef4444]">
                  {d.eksposur}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
