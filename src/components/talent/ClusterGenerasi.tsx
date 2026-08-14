"use client";

import { useState } from "react";
import { clusterGenerasi } from "@/lib/talent-data";
import { DonutChart } from "../ui/DonutChart";

export function ClusterGenerasi() {
  const [active, setActive] = useState<number | null>(null);
  const data = clusterGenerasi.map((d) => ({
    name: d.name,
    value: d.share,
    color: d.color,
  }));

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "540ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Talenta berdasarkan Cluster Generasi</h3>

      <div className="flex min-h-0 flex-1 items-center">
        <DonutChart
          data={data}
          size={128}
          thickness={22}
          centerValue="3.142"
          centerCaption="Talenta"
          valueFormatter={(v) => `${v.toString().replace(".", ",")}%`}
          onHover={setActive}
        />

        <div className="ml-2 flex flex-1 flex-col gap-[13px]">
          {clusterGenerasi.map((d, i) => (
            <div
              key={d.name}
              className={`flex items-center gap-2 transition-opacity duration-150 ${
                active !== null && active !== i ? "opacity-40" : ""
              }`}
            >
              <span
                className="h-[8px] w-[8px] shrink-0 rounded-full"
                style={{ background: d.color }}
              />
              <span className="whitespace-nowrap text-[9px] text-ink-700">
                {d.name} <span className="text-ink-400">{d.periode}</span>
              </span>
              <span className="ml-auto shrink-0 whitespace-nowrap text-[9px] font-semibold tabular-nums text-ink-900">
                {d.pct} <span className="font-normal text-ink-500">({d.jumlah})</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
