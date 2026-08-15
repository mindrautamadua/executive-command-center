import { ArrowLeftRight } from "lucide-react";
import { rebalancing } from "@/lib/wp-data";
import { SectionHead } from "../hc/SectionHead";
import { NotePill } from "./NotePill";

const ribuan = (v: number) => v.toLocaleString("id-ID");

const TOTAL = rebalancing.items.reduce((a, b) => a + b.value, 0);

/**
 * Breakdown penurunan fungsi "Lainnya" (-1.024): redeployment, attrisi,
 * otomasi, outsourcing — mencegah salah baca sebagai PHK massal.
 */
export function WorkforceRebalancing() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "240ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <SectionHead title="Workforce Rebalancing" />
        <span className="shrink-0 rounded-md bg-[#e6f6f5] px-2 py-[3px] text-[8.5px] font-bold text-[#0d9488]">
          Lainnya {rebalancing.total}
        </span>
      </div>
      <p className="mt-[3px] text-[9px] text-ink-500">
        Ke mana penurunan fungsi &quot;Lainnya&quot; dialokasikan (2026-2028)
      </p>

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-center gap-[7px]">
        {rebalancing.items.map((it) => (
          <div key={it.name} className="flex items-center gap-2.5">
            <div className="min-w-0 flex-1 leading-tight">
              <div className="flex items-baseline justify-between gap-2">
                <span className="truncate text-[9px] font-semibold text-ink-700">{it.name}</span>
                <span className="shrink-0 text-[9.5px] font-extrabold text-ink-900">
                  {ribuan(it.value)}
                </span>
              </div>
              <div className="mt-[3px] h-[5px] w-full overflow-hidden rounded-full bg-[#eef2f6]">
                <span
                  className="block h-full rounded-full bg-[#0d9488]"
                  style={{ width: `${(it.value / TOTAL) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 shrink-0">
        <NotePill icon={ArrowLeftRight} text={rebalancing.note} />
      </div>
    </div>
  );
}
