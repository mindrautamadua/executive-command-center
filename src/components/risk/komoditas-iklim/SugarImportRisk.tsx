"use client";

import { Ship } from "lucide-react";
import { sugarImportRisk } from "@/lib/risk-data";
import { SectionHead } from "@/components/hc/SectionHead";
import { useSubholding } from "@/components/SubholdingProvider";

const METRICS = [
  {
    label: "Kuota Impor Nasional",
    value: `${String(sugarImportRisk.kuotaImporNasionalJtTon).replace(".", ",")} jt ton`,
    cls: "text-ink-900",
  },
  {
    label: "Usulan Tambahan H2",
    value: `${String(sugarImportRisk.tambahanDiusulkanJtTon).replace(".", ",")} jt ton`,
    cls: "text-[#d98b06]",
  },
  {
    label: "Potensi Tekanan Harga",
    value: `${String(sugarImportRisk.potensiTekananHargaPct).replace(".", ",")}%`,
    cls: "text-[#ef4444]",
  },
];

/** Kartu compact risiko kebijakan impor gula terhadap harga lelang. */
export function SugarImportRisk() {
  const { active, def } = useSubholding();
  // Kuota impor gula menekan harga lelang gula PG — komoditas tebu, SugarCo.
  const outOfScope = active !== "all" && active !== "sugarco";

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "300ms" } as React.CSSProperties}
    >
      <SectionHead title="Risiko Impor Gula" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        {outOfScope
          ? `Eksposur harga gula melekat pada SugarCo — di luar cakupan ${def.label}`
          : "Kebijakan Kuota Impor vs Harga Lelang SGN"}
      </p>

      <ul
        className="mt-2 flex flex-col gap-1.5 transition-opacity"
        style={{ opacity: outOfScope ? 0.25 : 1 }}
      >
        {METRICS.map((m) => (
          <li
            key={m.label}
            className="flex items-center justify-between gap-2 rounded-lg border border-[#eef2f6] bg-[#fbfcfd] px-2.5 py-1.5"
          >
            <span className="min-w-0 truncate text-[9px] font-semibold text-ink-500">
              {m.label}
            </span>
            <span className={`shrink-0 text-[11px] font-extrabold ${m.cls}`}>{m.value}</span>
          </li>
        ))}
      </ul>

      <div
        className="mt-2 flex items-start gap-2 rounded-xl border border-[#f3e3c3] bg-[#fdf9f0] px-2.5 py-2 transition-opacity"
        style={{ opacity: outOfScope ? 0.25 : 1 }}
      >
        <Ship size={12} className="mt-[1px] shrink-0 text-[#d98b06]" />
        <p className="text-[8.5px] leading-snug text-ink-700">{sugarImportRisk.note}</p>
      </div>
    </div>
  );
}
