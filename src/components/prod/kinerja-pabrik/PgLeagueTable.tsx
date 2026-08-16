"use client";

import { pgReadiness, type PgUnit } from "@/lib/pabrik-data";
import { useSubholding } from "@/components/SubholdingProvider";
import { inScope, ScopeEmpty } from "@/components/ui/CommodityScope";
import { SectionHead } from "../../hc/SectionHead";

const num = (v: number) =>
  v.toLocaleString("id-ID", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function LeagueList({ title, items, tone }: { title: string; items: PgUnit[]; tone: "good" | "bad" }) {
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
          Recovery · Berhenti
        </span>
      </div>
      <ul className="mt-1 flex min-h-0 flex-1 flex-col justify-between gap-1">
        {items.map((p) => (
          <li
            key={p.pg}
            className="flex items-center gap-2 rounded-lg border border-[#eef2f6] bg-[#fbfcfd] px-2 py-1"
          >
            <span className="min-w-0 flex-1 leading-[1.25]">
              <span className="block truncate text-[9px] font-extrabold text-ink-900">{p.pg}</span>
              <span className="block text-[7.5px] text-ink-400">{p.wilayah}</span>
            </span>
            <span
              className={`shrink-0 text-[9px] font-extrabold ${
                tone === "good" ? "text-ptpn-green" : "text-[#ef4444]"
              }`}
            >
              {num(p.overallRecoveryPct)}%
            </span>
            <span className="w-[34px] shrink-0 text-right text-[8.5px] font-semibold text-ink-500">
              {num(p.jamBerhentiPct)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PgLeagueTable() {
  const { active, def } = useSubholding();
  // Seluruh kartu ini milik SugarCo: peringkat PG berbasis overall recovery gula.
  const dalamCakupan = inScope(active, "PG gula giling");

  const top = [...pgReadiness].sort((a, b) => b.overallRecoveryPct - a.overallRecoveryPct).slice(0, 5);
  const bottom = [...pgReadiness].sort((a, b) => a.overallRecoveryPct - b.overallRecoveryPct).slice(0, 5);

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <SectionHead title="PG League Table" action="Lihat Detail" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Top &amp; Bottom 5 PG berdasarkan Overall Recovery &amp; Jam Berhenti · spread 9,8 ppt
      </p>

      {!dalamCakupan ? (
        <ScopeEmpty label={def.fullLabel} />
      ) : (
        <div className="mt-2 flex min-h-0 flex-1 gap-3">
          <LeagueList title="Top 5 PG" items={top} tone="good" />
          <LeagueList title="Bottom 5 PG" items={bottom} tone="bad" />
        </div>
      )}
    </div>
  );
}
