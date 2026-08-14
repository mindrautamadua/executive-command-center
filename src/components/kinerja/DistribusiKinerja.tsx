"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { distribusiKinerja } from "@/lib/kinerja-data";
import { DonutChart } from "../ui/DonutChart";

/* nilai tengah donat diturunkan dari data (total karyawan dinilai) */
const donutData = distribusiKinerja.map((d) => ({
  name: d.name,
  value: d.jumlahNum,
  color: d.color,
}));

export function DistribusiKinerja() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3">
      <h3 className="card-title-navy">DISTRIBUSI KINERJA</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Berdasarkan Kategori</p>

      <div className="flex min-h-0 flex-1 items-center">
        <DonutChart
          data={donutData}
          size={158}
          thickness={27}
          centerCaption="Karyawan"
          onHover={setActive}
        />

        <div className="ml-2 flex flex-1 flex-col gap-[9px]">
          {distribusiKinerja.map((d, i) => (
            <div
              key={d.name}
              className="flex items-start gap-2 transition-opacity duration-150"
              style={{ opacity: active === null || active === i ? 1 : 0.4 }}
            >
              <span
                className="mt-[3px] h-[8px] w-[8px] shrink-0 rounded-[2px]"
                style={{ background: d.color }}
              />
              <div className="min-w-0 leading-[1.35]">
                <div className="whitespace-nowrap text-[9.5px] text-ink-700">
                  {d.name} <span className="text-ink-400">{d.range}</span>
                </div>
                <div className="flex gap-3 text-[9.5px]">
                  <span className="font-semibold text-ink-900">{d.pct}</span>
                  <span className="tabular-nums text-ink-500">{d.jumlah}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat detail distribusi <ChevronRight size={11} />
      </button>
    </div>
  );
}
