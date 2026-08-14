import {
  HeartPulse,
  RefreshCw,
  ReceiptText,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { hcKpi } from "@/lib/hc-data";
import { Delta } from "../ui/Delta";

const ICONS = {
  users: Users,
  trend: TrendingUp,
  heart: HeartPulse,
  cycle: RefreshCw,
  target: Target,
  wallet: ReceiptText,
};

const TONES: Record<string, string> = {
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  green: "bg-ptpn-greenLight text-ptpn-green",
  pink: "bg-[#fdeef2] text-[#ec4899]",
  red: "bg-[#fdecec] text-[#ef4444]",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
};

export function HcKpiStrip() {
  return (
    <div className="grid grid-cols-6 gap-3">
      {hcKpi.map((k, i) => {
        const Icon = ICONS[k.icon];
        return (
          <div
            key={k.label}
            className="card anim-rise px-3.5 pb-3 pt-3"
            style={{ "--d": `${50 * i}ms` } as React.CSSProperties}
          >
            <div className="flex items-center gap-2">
              <span
                className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg ${TONES[k.tone]}`}
              >
                <Icon size={14} strokeWidth={1.9} />
              </span>
              <span className="text-[9.5px] font-semibold leading-[1.25] text-ink-500">
                {k.label}
              </span>
            </div>
            <div className="mt-2.5 text-[22px] font-extrabold leading-none tracking-[-0.01em] text-ink-900">
              {k.value}
            </div>
            <div className="mt-[4px] truncate text-[8.5px] text-ink-500" title={k.sub}>
              {k.sub}
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <Delta value={k.delta} trend={k.trend} tone={k.deltaTone} size={10} />
              <span className="text-[8.5px] text-ink-400">{k.compare}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
