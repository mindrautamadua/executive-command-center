import { Banknote, Droplets, Gauge, Percent, Tag, type LucideIcon } from "lucide-react";
import { Delta } from "@/components/ui/Delta";

interface JualKpi {
  label: string;
  value: string;
  sub: string;
  icon: LucideIcon;
  tone: "blue" | "green" | "teal" | "amber" | "pink";
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
}

const TONES: Record<JualKpi["tone"], string> = {
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  green: "bg-ptpn-greenLight text-ptpn-green",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
  pink: "bg-[#fdeef2] text-[#ec4899]",
};

/** Angka kanonik: pemasaran-data.ts (nilai 19,9 T; volume CPO 968 rb ton; ASP 12.482). */
const items: JualKpi[] = [
  {
    label: "Nilai Penjualan",
    value: "Rp 19,9 T",
    sub: "Seluruh komoditas YTD",
    icon: Banknote,
    tone: "green",
    delta: "13,1%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
  },
  {
    label: "Capaian RKAP YTD",
    value: "102,3%",
    sub: "RKAP YTD Rp 19,45 T",
    icon: Gauge,
    tone: "blue",
    delta: "2,3 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Target 100%",
  },
  {
    label: "Volume CPO Terjual",
    value: "968",
    sub: "Ribu ton YTD",
    icon: Droplets,
    tone: "teal",
    delta: "4,0%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
  },
  {
    label: "ASP CPO YTD",
    value: "Rp 12.482",
    sub: "/kg · premium +Rp 45 vs KPBN",
    icon: Tag,
    tone: "amber",
    delta: "9,1%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
  },
  {
    label: "Margin Bruto Blended",
    value: "24,1%",
    sub: "Seluruh komoditas",
    icon: Percent,
    tone: "pink",
    delta: "1,2 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
  },
];

/** KPI strip penjualan (mirror WaKpiStrip). */
export function JualKpiStrip() {
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
