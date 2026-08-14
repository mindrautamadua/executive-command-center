"use client";

import { Sprout, Factory, Users, Layers, MoreVertical } from "lucide-react";
import { operasional } from "@/lib/data";

const ICONS = { sprout: Sprout, factory: Factory, users: Users, layers: Layers };

export function OperasionalCard() {
  return (
    <div className="card flex h-[184px] shrink-0 flex-col px-4 pb-1 pt-2.5">
      <h3 className="card-title whitespace-nowrap">OPERASIONAL REAL-TIME</h3>
      <div className="mt-1.5 flex min-h-0 flex-1 flex-col justify-between">
        {operasional.map((o, i) => {
          const Icon = ICONS[o.icon];
          return (
            <div
              key={o.label}
              className={`flex items-center gap-2.5 py-[5px] ${
                i !== 0 ? "border-t border-[#f2f5f8]" : ""
              }`}
            >
              <span
                className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-md"
                style={{ background: o.bg }}
              >
                <Icon size={14} strokeWidth={1.9} style={{ color: o.color }} />
              </span>
              <span className="whitespace-nowrap text-[11px] font-medium text-ink-700">
                {o.label}
              </span>
              <span
                className="ml-auto text-[15px] font-extrabold tabular-nums"
                style={{ color: o.color }}
              >
                {o.value}
              </span>
              <MoreVertical size={12} className="text-ink-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
