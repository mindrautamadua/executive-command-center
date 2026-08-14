"use client";

import { useState } from "react";
import { Users } from "lucide-react";
import { unionComposition, unionTotals } from "@/lib/ir-data";
import { DonutChart } from "../ui/DonutChart";
import { SectionHead } from "../hc/SectionHead";
import { PanelFooterLink } from "./PanelFooterLink";

export function UnionComposition() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "180ms" } as React.CSSProperties}
    >
      <SectionHead no="6" title="Komposisi Serikat Pekerja" />

      <div className="flex min-h-0 flex-1 items-center gap-3">
        <div className="flex w-[124px] shrink-0 flex-col gap-3">
          <div>
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-[#e8f1fd] text-[#2f6fe4]">
              <Users size={16} strokeWidth={1.9} />
            </span>
            <div className="mt-1.5 text-[19px] font-extrabold leading-none tracking-[-0.01em] text-ink-900">
              {unionTotals.members}
            </div>
            <div className="mt-[3px] text-[8.5px] leading-tight text-ink-500">
              {unionTotals.membersCaption}
            </div>
          </div>
          <div>
            <div className="text-[15px] font-extrabold leading-none text-ink-900">
              {unionTotals.unions}
            </div>
            <div className="mt-[3px] text-[8.5px] leading-tight text-ink-500">
              {unionTotals.unionsCaption}
            </div>
          </div>
        </div>

        <DonutChart
          data={unionComposition}
          size={132}
          thickness={24}
          centerValue=""
          onHover={setActive}
          valueFormatter={(v) => `${v}%`}
        />

        <div className="min-w-0 flex-1">
          {unionComposition.map((u, i) => (
            <div
              key={u.name}
              className="flex items-center gap-1.5 py-[4px] transition-opacity"
              style={{ opacity: active === null || active === i ? 1 : 0.4 }}
            >
              <span
                className="h-[8px] w-[8px] shrink-0 rounded-[2px]"
                style={{ backgroundColor: u.color }}
              />
              <span className="min-w-0 flex-1 truncate text-[9.5px] font-medium text-ink-700">
                {u.name}
              </span>
              <span className="shrink-0 text-[9.5px] font-bold text-ink-900">{u.pct}</span>
            </div>
          ))}
        </div>
      </div>

      <PanelFooterLink label="Lihat Detail Serikat" />
    </div>
  );
}
