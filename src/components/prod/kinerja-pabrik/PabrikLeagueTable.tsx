"use client";

import { pabrikLeagueBottom, pabrikLeagueTop, type PabrikUnit } from "@/lib/pabrik-data";
import { useSubholding } from "@/components/SubholdingProvider";
import { inScope, ScopeEmpty } from "@/components/ui/CommodityScope";
import { SectionHead } from "../../hc/SectionHead";

const num = (v: number) =>
  v.toLocaleString("id-ID", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function LeagueList({ title, items, tone }: { title: string; items: PabrikUnit[]; tone: "good" | "bad" }) {
  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col">
      <div className="flex items-center justify-between gap-2">
        <span
          className={`text-[8.5px] font-extrabold uppercase tracking-[0.04em] ${
            tone === "good" ? "text-ptpn-green" : "text-[#ef4444]"
          }`}
        >
          {title}
        </span>
        <span className="text-[7.5px] font-semibold uppercase tracking-[0.04em] text-ink-400">
          OER · Util
        </span>
      </div>
      <ul className="mt-1 flex min-h-0 flex-1 flex-col justify-between gap-1">
        {items.map((p) => (
          <li
            key={p.pabrik}
            className="flex items-center gap-2 rounded-lg border border-[#eef2f6] bg-[#fbfcfd] px-2 py-1"
          >
            <span className="min-w-0 flex-1 leading-[1.25]">
              <span className="block truncate text-[9px] font-extrabold text-ink-900">{p.pabrik}</span>
              <span className="block text-[7.5px] text-ink-400">{p.regional}</span>
            </span>
            <span
              className={`shrink-0 text-[9px] font-extrabold ${
                tone === "good" ? "text-ptpn-green" : "text-[#ef4444]"
              }`}
            >
              {num(p.oerPct)}%
            </span>
            <span className="w-[34px] shrink-0 text-right text-[8.5px] font-semibold text-ink-500">
              {num(p.utilisasiPct)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PabrikLeagueTable() {
  const { active, def } = useSubholding();
  // Seluruh kartu ini milik PalmCo: peringkat PKS berbasis OER sawit.
  const dalamCakupan = inScope(active, "PKS (sawit)");

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <SectionHead title="PKS League Table" action="Lihat Detail" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Top &amp; Bottom 5 PKS berdasarkan OER &amp; Utilisasi · spread OER 3,4 ppt
      </p>

      {!dalamCakupan ? (
        <ScopeEmpty label={def.fullLabel} />
      ) : (
        <div className="mt-2 flex min-h-0 flex-1 gap-3">
          <LeagueList title="Top 5 PKS" items={pabrikLeagueTop} tone="good" />
          <LeagueList title="Bottom 5 PKS" items={pabrikLeagueBottom} tone="bad" />
        </div>
      )}
    </div>
  );
}
