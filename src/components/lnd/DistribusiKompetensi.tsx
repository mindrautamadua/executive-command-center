"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { alignmentNote, distribusiKompetensi, distribusiTotal } from "@/lib/lnd-data";
import { DonutChart } from "../ui/DonutChart";

const ALIGN_BADGE: Record<string, { label: string; cls: string } | null> = {
  under: { label: "▼ Under", cls: "bg-[#fdecec] text-[#ef4444]" },
  over: { label: "▲ Over", cls: "bg-[#fdf3e0] text-[#d98b06]" },
  match: null,
  none: null,
};

export function DistribusiKompetensi() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "100ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Distribusi Jam Pelatihan vs Demand Kompetensi</h3>

      <div className="flex min-h-0 flex-1 items-center">
        <DonutChart
          data={distribusiKompetensi.map((d) => ({
            name: d.name,
            value: d.share,
            color: d.color,
          }))}
          size={148}
          thickness={26}
          centerValue={distribusiTotal.value}
          centerCaption={distribusiTotal.caption}
          valueFormatter={(v) => `${v.toLocaleString("id-ID", { minimumFractionDigits: 1 })}%`}
          onHover={setActive}
        />

        <div className="ml-2 flex flex-1 flex-col gap-[6px]">
          {distribusiKompetensi.map((d, i) => {
            const badge = ALIGN_BADGE[d.align];
            return (
              <div
                key={d.name}
                className="flex items-center gap-1.5 whitespace-nowrap transition-opacity"
                style={{ opacity: active === null || active === i ? 1 : 0.4 }}
              >
                <span
                  className="h-[8px] w-[8px] shrink-0 rounded-[2px]"
                  style={{ background: d.color }}
                />
                <span className="w-[58px] text-[9.5px] text-ink-700">{d.name}</span>
                {badge && (
                  <span
                    className={`rounded px-1 py-[1px] text-[7.5px] font-extrabold ${badge.cls}`}
                    title={`Investasi ${d.align === "under" ? "di bawah" : "di atas"} demand (${d.demand})`}
                  >
                    {badge.label}
                  </span>
                )}
                <span className="ml-auto text-[9.5px] tabular-nums text-ink-900">{d.jam}</span>
                <span className="w-[38px] text-right text-[9.5px] tabular-nums text-ink-400">
                  {d.pct}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-1 text-[8.5px] leading-[1.35] text-ink-400">{alignmentNote}</p>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat analisis kompetensi <ArrowRight size={11} />
      </button>
    </div>
  );
}
