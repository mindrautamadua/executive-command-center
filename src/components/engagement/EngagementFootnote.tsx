import { ShieldCheck } from "lucide-react";
import { engagementMetodologi } from "@/lib/engagement-data";

export function EngagementFootnote() {
  return (
    <div
      className="anim-rise flex items-center justify-between gap-3 rounded-xl border border-[#d7ecdf] bg-[#f2faf5] px-4 py-2.5"
      style={{ "--d": "640ms" } as React.CSSProperties}
    >
      <div className="flex min-w-0 items-center gap-2">
        <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-ptpn-green text-white">
          <ShieldCheck size={11} />
        </span>
        <p className="truncate text-[9px] text-ink-700">{engagementMetodologi.index}</p>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <div className="flex items-center gap-2">
          {engagementMetodologi.distribusi.map((d) => (
            <span key={d.label} className="flex items-center gap-1 text-[8.5px] text-ink-600">
              <span
                className="h-[7px] w-[7px] rounded-full"
                style={{ background: d.color }}
              />
              {d.label}: <span className="font-bold text-ink-800">{d.pct.toString().replace(".", ",")}%</span>
            </span>
          ))}
        </div>
        <p className="text-[8.5px] text-ink-500">
          <span className="font-bold text-ink-700">{engagementMetodologi.survey}</span>
          <span className="mx-1.5 text-ink-300">•</span>
          {engagementMetodologi.responden}
          <span className="mx-1.5 text-ink-300">•</span>
          {engagementMetodologi.catatan}
        </p>
      </div>
    </div>
  );
}
