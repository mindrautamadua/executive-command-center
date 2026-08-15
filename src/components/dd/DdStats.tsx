import { BadgeCheck, BookMarked, CalendarClock, Gauge } from "lucide-react";
import { ddStats, type DdStat } from "@/lib/dd-data";

const ICONS: Record<DdStat["icon"], typeof BookMarked> = {
  terms: BookMarked,
  certified: BadgeCheck,
  trust: Gauge,
  updated: CalendarClock,
};

const TONES: Record<DdStat["tone"], string> = {
  green: "bg-ptpn-greenLight text-ptpn-green",
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
};

export function DdStats() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {ddStats.map((s, i) => {
        const Icon = ICONS[s.icon];
        return (
          <div
            key={s.label}
            className="card anim-rise px-3.5 pb-3 pt-3"
            style={{ "--d": `${40 * i}ms` } as React.CSSProperties}
          >
            <div className="flex items-center gap-2">
              <span
                className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg ${TONES[s.tone]}`}
              >
                <Icon size={14} strokeWidth={1.9} />
              </span>
              <span className="min-w-0 text-[9px] font-semibold leading-[1.25] text-ink-500">
                {s.label}
              </span>
            </div>
            <div className="mt-2.5 whitespace-nowrap text-[19px] font-extrabold leading-none tracking-[-0.01em] text-ink-900">
              {s.value}
            </div>
            <div className="mt-[4px] truncate text-[8.5px] text-ink-500" title={s.sub}>
              {s.sub}
            </div>
          </div>
        );
      })}
    </div>
  );
}
