import type { LucideIcon } from "lucide-react";

export interface MktKpiCardItem {
  label: string;
  value: string;
  sub: string;
  tone: "blue" | "green" | "teal" | "amber" | "red" | "pink";
  icon: LucideIcon;
}

const TONES: Record<MktKpiCardItem["tone"], string> = {
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  green: "bg-ptpn-greenLight text-ptpn-green",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
  red: "bg-[#fdecec] text-[#ef4444]",
  pink: "bg-[#fdeef2] text-[#ec4899]",
};

/** Renderer KPI strip halaman detail Pemasaran & Penjualan (mirror WaKpiStrip). */
export function MktKpiCards({ items, cols }: { items: MktKpiCardItem[]; cols: string }) {
  return (
    <div className={`grid gap-3 ${cols}`}>
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
          </div>
        );
      })}
    </div>
  );
}
