"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { distribusiUnit } from "@/lib/sdm-data";
import { DonutChart } from "../ui/DonutChart";

const fmt = (n: number) => n.toLocaleString("id-ID");

export function DistribusiKaryawan() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3">
      <h3 className="card-title-navy">DISTRIBUSI KARYAWAN</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Berdasarkan Unit Kerja</p>

      <div className="flex min-h-0 flex-1 items-center">
        <DonutChart
          data={distribusiUnit}
          size={150}
          thickness={26}
          centerCaption="Total"
          onHover={setActive}
        />

        <div className="ml-1 flex flex-1 flex-col gap-[11px]">
          {distribusiUnit.map((d, i) => (
            <div
              key={d.name}
              className={`flex items-start gap-2 transition-opacity duration-150 ${
                active !== null && active !== i ? "opacity-40" : ""
              }`}
            >
              <span
                className="mt-[3px] h-[8px] w-[8px] shrink-0 rounded-full"
                style={{ background: d.color }}
              />
              <span className="text-[9px] leading-[1.25] text-ink-700">{d.name}</span>
              <span className="ml-auto shrink-0 text-[9px] font-semibold tabular-nums text-ink-900">
                {fmt(d.value)}{" "}
                <span className="font-normal text-ink-500">({d.pct})</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="link-more mt-1 flex cursor-pointer items-center gap-0.5">
        Lihat detail distribusi <ChevronRight size={12} />
      </button>
    </div>
  );
}
