import { ArrowRight } from "lucide-react";
import { dailyInsights } from "@/lib/aihr-data";

const TONE: Record<string, string> = {
  green: "bg-ptpn-greenLight text-ptpn-green",
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  amber: "bg-[#fdf3e0] text-[#d97706]",
};

export function InsightSummary() {
  return (
    <div className="card anim-rise px-3.5 pb-3 pt-3" style={{ "--d": "120ms" } as React.CSSProperties}>
      <div className="flex items-center justify-between">
        <span className="text-[10.5px] font-extrabold text-ink-900">
          Ringkasan Insight Hari Ini
        </span>
        <button className="flex items-center gap-1 text-[8.5px] font-bold text-[#2f6fe4] transition-opacity hover:opacity-80">
          Lihat Semua <ArrowRight size={10} />
        </button>
      </div>

      <div className="mt-2.5 flex flex-col gap-2">
        {dailyInsights.map(({ title, desc, icon: Icon, tone }) => (
          <div
            key={title}
            className="flex items-start gap-2.5 rounded-lg border border-[#eef2f6] bg-[#fbfcfd] px-2.5 py-2"
          >
            <span
              className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg ${TONE[tone]}`}
            >
              <Icon size={13} strokeWidth={1.9} />
            </span>
            <div className="min-w-0">
              <div className="text-[9px] font-extrabold text-ink-900">{title}</div>
              <p className="mt-[2px] text-[8.5px] leading-[1.45] text-ink-500">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
