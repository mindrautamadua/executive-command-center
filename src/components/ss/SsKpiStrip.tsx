import {
  FlaskConical,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { ssKpi } from "@/lib/ss-data";

const ICONS = {
  scenario: FlaskConical,
  best: Sparkles,
  saving: Wallet,
  productivity: TrendingUp,
  headcount: Users,
  confidence: ShieldCheck,
};

const TONES: Record<string, string> = {
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  green: "bg-ptpn-greenLight text-ptpn-green",
  purple: "bg-[#f1ecfd] text-[#8b5cf6]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
  sky: "bg-[#e8f1fd] text-[#2f6fe4]",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
};

export function SsKpiStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
      {ssKpi.map((k, i) => {
        const Icon = ICONS[k.icon];
        return (
          <div
            key={k.label}
            className="card anim-rise px-3.5 pb-3 pt-3"
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
            </div>
            <div className="mt-[5px] truncate text-[8.5px] text-ink-500" title={k.sub}>
              {k.sub}
            </div>
          </div>
        );
      })}
    </div>
  );
}
