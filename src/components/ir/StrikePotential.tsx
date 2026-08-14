import { ArrowDown, ArrowUp, MoveRight } from "lucide-react";
import { RISK_STYLE, strikeRisks } from "@/lib/ir-data";
import { SectionHead } from "../hc/SectionHead";
import { PanelFooterLink } from "./PanelFooterLink";

function TrendArrow({ trend }: { trend: "up" | "down" | "flat" }) {
  if (trend === "flat") return <MoveRight size={12} className="text-[#d98b06]" />;
  if (trend === "up") return <ArrowUp size={12} strokeWidth={2.4} className="text-[#ef4444]" />;
  return <ArrowDown size={12} strokeWidth={2.4} className="text-[#16a34a]" />;
}

export function StrikePotential() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "180ms" } as React.CSSProperties}
    >
      <SectionHead title="Potensi Aksi Mogok (Top 5 Lokasi)" />

      <div className="mt-2.5 grid grid-cols-[minmax(0,1fr)_74px_92px_36px] items-center gap-x-2 border-b border-[#eef2f6] pb-1.5 text-[8px] font-semibold uppercase tracking-[0.04em] text-ink-400">
        <span>Lokasi</span>
        <span>Tingkat Risiko</span>
        <span>Isu Utama</span>
        <span className="text-center">Trend</span>
      </div>

      <ul className="flex min-h-0 flex-1 flex-col justify-around">
        {strikeRisks.map((r) => (
          <li
            key={r.lokasi}
            className="grid grid-cols-[minmax(0,1fr)_74px_92px_36px] items-center gap-x-2 border-b border-[#f4f7fa] py-1 last:border-0"
          >
            <span className="truncate text-[9px] font-semibold text-ink-800" title={r.lokasi}>
              {r.lokasi}
            </span>
            <span>
              <span
                className={`inline-block rounded-md px-2 py-[3px] text-[8px] font-bold ${RISK_STYLE[r.risk]}`}
              >
                {r.risk}
              </span>
            </span>
            <span className="truncate text-[8.5px] text-ink-600">{r.isu}</span>
            <span className="flex justify-center">
              <TrendArrow trend={r.trend} />
            </span>
          </li>
        ))}
      </ul>

      <PanelFooterLink label="Lihat Semua Potensi" />
    </div>
  );
}
