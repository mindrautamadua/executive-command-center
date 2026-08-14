import {
  CalendarCheck,
  FileWarning,
  Gavel,
  HeartHandshake,
  Megaphone,
  ShieldCheck,
} from "lucide-react";
import { irKpi } from "@/lib/ir-data";
import { Delta } from "../ui/Delta";
import { Sparkline } from "../ui/Sparkline";

const ICONS = {
  index: HeartHandshake,
  case: Gavel,
  newcase: FileWarning,
  strike: Megaphone,
  resolution: ShieldCheck,
  peace: CalendarCheck,
};

const TONES: Record<string, string> = {
  green: "bg-ptpn-greenLight text-ptpn-green",
  purple: "bg-[#f1ecfd] text-[#8b5cf6]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
  red: "bg-[#fdecec] text-[#ef4444]",
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  violet: "bg-[#eef2fd] text-[#4a8ef0]",
};

export function IrKpiStrip() {
  return (
    <div className="grid grid-cols-6 gap-3">
      {irKpi.map((k, i) => {
        const Icon = ICONS[k.icon];
        return (
          <div
            key={k.label}
            className="card anim-rise flex flex-col px-3 pb-2 pt-3"
            style={{ "--d": `${40 * i}ms` } as React.CSSProperties}
          >
            <div className="flex items-center gap-2">
              <span
                className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg ${TONES[k.tone]}`}
              >
                <Icon size={14} strokeWidth={1.9} />
              </span>
              <span className="min-w-0 text-[9px] font-semibold leading-[1.25] text-ink-500">
                {k.label}
              </span>
            </div>
            <div className="mt-2.5 whitespace-nowrap text-[19px] font-extrabold leading-none tracking-[-0.01em] text-ink-900">
              {k.value}
              {k.valueSuffix && (
                <span className="ml-[2px] text-[11px] font-bold text-ink-400">{k.valueSuffix}</span>
              )}
            </div>
            {k.sub && <div className="mt-[4px] truncate text-[8.5px] text-ink-500">{k.sub}</div>}
            <div className="mt-1.5 flex items-center gap-1.5">
              <Delta value={k.delta} trend={k.trend} tone={k.deltaTone} size={10} />
              <span className="truncate text-[8.5px] text-ink-400">{k.compare}</span>
            </div>
            <div className="-mx-1 mt-auto pt-1.5">
              <Sparkline data={k.series} color={k.color} height={26} smooth={false} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
