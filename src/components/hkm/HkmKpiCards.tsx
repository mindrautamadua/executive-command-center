import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { HkmPageKpi } from "@/lib/hkm-data";
import { Delta } from "../ui/Delta";

/** Item KPI halaman detail Hukum: data dari hkm-data + ikon lucide dari halaman. */
export type HkmKpiCardItem = HkmPageKpi & { icon: LucideIcon };

const TONES: Record<HkmPageKpi["tone"], string> = {
  green: "bg-ptpn-greenLight text-ptpn-green",
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
  red: "bg-[#fdecec] text-[#ef4444]",
  purple: "bg-[#f1ecfd] text-[#8b5cf6]",
  slate: "bg-[#eef2f6] text-ink-500",
};

/** Renderer KPI strip halaman detail Hukum (mirror EsgKpiCards). */
export function HkmKpiCards({ items, cols }: { items: HkmKpiCardItem[]; cols: string }) {
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
              {k.valueSuffix && (
                <span className="text-[9.5px] font-bold text-ink-400">{k.valueSuffix}</span>
              )}
            </div>
            <div
              className={`mt-[4px] truncate text-[8.5px] ${k.subDanger ? "text-[#ef4444]" : "text-ink-500"}`}
              title={k.sub}
            >
              {k.sub}
            </div>
            <div className="mt-2 flex h-[13px] items-center gap-1.5">
              {k.delta && k.trend && (
                <Delta value={k.delta} trend={k.trend} tone={k.deltaTone} size={10} />
              )}
              {k.href && k.hrefLabel && (
                <Link
                  href={k.href}
                  className="truncate text-[8.5px] font-semibold text-ptpn-green hover:underline"
                  title={k.hrefLabel}
                >
                  {k.hrefLabel}
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
