import { Banknote, Candy, Globe, LineChart, Trees, type LucideIcon } from "lucide-react";
import { Delta } from "@/components/ui/Delta";

interface HargaKpi {
  label: string;
  value: string;
  sub: string;
  icon: LucideIcon;
  tone: "blue" | "green" | "amber" | "teal" | "purple";
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
}

const TONES: Record<HargaKpi["tone"], string> = {
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  green: "bg-ptpn-greenLight text-ptpn-green",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  purple: "bg-[#f1ecfd] text-[#8b5cf6]",
};

/** Angka kanonik: spot 31 Mei 2026 (group-baseline); delta vs akhir Des 2025. */
const items: HargaKpi[] = [
  {
    label: "CPO CIF Rotterdam",
    value: "USD 1.085",
    sub: "/ton · Avg YTD USD 1.056",
    icon: Globe,
    tone: "blue",
    delta: "8,0%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
  },
  {
    label: "CPO KPBN (Spot)",
    value: "Rp 13.680",
    sub: "/kg · Avg YTD Rp 12.437",
    icon: LineChart,
    tone: "green",
    delta: "10,8%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
  },
  {
    label: "Gula (Lelang)",
    value: "Rp 14.850",
    sub: "/kg · Avg YTD Rp 14.550",
    icon: Candy,
    tone: "amber",
    delta: "4,2%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
  },
  {
    label: "Karet SIR-20",
    value: "Rp 18.650",
    sub: "/kg · Avg YTD Rp 18.240",
    icon: Trees,
    tone: "teal",
    delta: "2,9%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
  },
  {
    label: "Kurs USD/IDR",
    value: "Rp 16.250",
    sub: "JISDOR · relatif stabil YTD",
    icon: Banknote,
    tone: "purple",
    delta: "0,6%",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Des 2025",
  },
];

/** KPI strip harga spot 5 komoditas/kurs (mirror WaKpiStrip). */
export function HargaKpiStrip() {
  return (
    <div className="grid grid-cols-5 gap-3">
      {items.map((k, i) => {
        const Icon = k.icon;
        return (
          <div
            key={k.label}
            className="card anim-rise px-3 pb-3 pt-3"
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
            <div className="mt-[4px] truncate text-[8.5px] text-ink-500" title={k.sub}>
              {k.sub}
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <Delta value={k.delta} trend={k.trend} tone={k.deltaTone} size={10} />
              <span className="truncate text-[8.5px] text-ink-400">{k.compare}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
