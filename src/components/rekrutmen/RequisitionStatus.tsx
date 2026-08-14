"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { requisitionStatus } from "@/lib/rekrutmen-data";
import { DonutChart } from "../ui/DonutChart";

export function RequisitionStatus() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3">
      <h3 className="card-title-navy">Requisition by Status</h3>

      <div className="mt-1 flex min-h-0 flex-1 items-center justify-center gap-3">
        <DonutChart
          data={requisitionStatus}
          size={150}
          thickness={25}
          centerCaption="Total"
          onHover={setActive}
        />

        <div className="flex w-[132px] shrink-0 flex-col gap-3">
          {requisitionStatus.map((s, i) => (
            <div
              key={s.name}
              className="flex items-center gap-1.5 transition-opacity duration-150"
              style={{ opacity: active === null || active === i ? 1 : 0.4 }}
            >
              <span
                className="h-[8px] w-[8px] shrink-0 rounded-[2px]"
                style={{ background: s.color }}
              />
              <span className="text-[9.5px] font-medium text-ink-700">{s.name}</span>
              <span className="ml-auto whitespace-nowrap text-[9.5px] text-ink-500">
                <span className="font-semibold text-ink-900">{s.value}</span> ({s.pct})
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="link-more mt-1 flex items-center gap-1 self-start">
        Lihat semua requisition <ChevronRight size={11} />
      </button>
    </div>
  );
}
