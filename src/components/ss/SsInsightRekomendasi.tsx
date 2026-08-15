import { AlertOctagon, BadgeCheck, ListChecks } from "lucide-react";
import { ssInsightBlocks } from "@/lib/ss-data";
import { SectionHead } from "../hc/SectionHead";

const ICONS = {
  why: BadgeCheck,
  break: AlertOctagon,
  action: ListChecks,
};

const TONES: Record<string, string> = {
  green: "bg-ptpn-greenLight text-ptpn-green",
  red: "bg-[#fdecec] text-[#ef4444]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
};

/**
 * AI Insight naik level dari deskriptif ke kausal:
 * Why → What Could Break It → What To Do.
 */
export function SsInsightRekomendasi() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <SectionHead title="Insight & Rekomendasi" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Mengapa menang, apa yang bisa gagal, apa yang harus dilakukan
      </p>

      <ul className="scroll-thin mt-2 flex min-h-0 flex-1 flex-col justify-between gap-1.5 overflow-y-auto">
        {ssInsightBlocks.map((ins) => {
          const Icon = ICONS[ins.kind];
          return (
            <li
              key={ins.kind}
              className="flex shrink-0 items-start gap-2.5 rounded-lg border border-[#eef2f6] bg-[#fbfcfd] px-2.5 py-1.5"
            >
              <span
                className={`mt-[1px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full ${TONES[ins.tone]}`}
              >
                <Icon size={12} strokeWidth={1.9} />
              </span>
              <div className="min-w-0">
                <p className="text-[8.5px] font-extrabold text-ink-900">{ins.title}</p>
                <p className="mt-[1px] text-[8.5px] font-semibold leading-snug text-ink-700">
                  {ins.text}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
