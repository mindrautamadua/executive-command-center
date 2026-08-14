"use client";

import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { kpiStrip } from "@/lib/data";
import { Sparkline } from "./ui/Sparkline";
import { Delta } from "./ui/Delta";

export function KpiStrip() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative mx-5 mb-3">
      <div className="card overflow-hidden">
        <div
          ref={ref}
          className="scroll-thin flex overflow-x-auto scroll-smooth"
        >
          {kpiStrip.map((k, i) => (
            <div
              key={k.label}
              className={`min-w-[214px] flex-1 shrink-0 px-4 pb-2 pt-3 ${
                i !== 0 ? "border-l border-[#f0f3f6]" : ""
              }`}
            >
              <div className="text-[9px] font-bold tracking-[0.06em] text-ink-500">
                {k.label}
              </div>
              <div className="mt-1.5 flex items-baseline gap-1.5">
                <span className="text-[20px] font-extrabold leading-none tracking-[-0.01em] text-ink-900">
                  {k.value}
                </span>
                {k.unit && (
                  <span className="text-[10.5px] font-medium text-ink-500">
                    {k.unit}
                  </span>
                )}
                <Delta value={k.delta} trend={k.trend} size={10} className="ml-auto" />
              </div>
              <div className="mt-1.5 text-[9px] text-ink-400">{k.compare}</div>
              <div className="-mx-1 mt-1">
                <Sparkline data={k.series} color={k.color} height={30} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => ref.current?.scrollBy({ left: 320, behavior: "smooth" })}
        className="absolute -right-[11px] top-1/2 z-10 flex h-[26px] w-[26px] -translate-y-1/2 items-center justify-center rounded-full border border-[#e6ecf2] bg-white text-ink-500 shadow-cardHover transition-colors hover:text-ptpn-green"
        aria-label="Geser KPI"
      >
        <ChevronRight size={15} />
      </button>
    </div>
  );
}
