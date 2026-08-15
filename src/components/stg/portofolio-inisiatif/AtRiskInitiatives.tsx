import { Sparkles, TriangleAlert } from "lucide-react";
import { atRiskList } from "@/lib/spi-data";
import { SectionHead } from "@/components/hc/SectionHead";
import { ToneBadge } from "@/components/shared/ToneBadge";

/** 8 inisiatif At Risk beserta akar masalah dan rencana pemulihan. */
export function AtRiskInitiatives() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "240ms" } as React.CSSProperties}
    >
      <SectionHead title="Inisiatif At Risk" action="Lihat Semua" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        8 Inisiatif Berstatus At Risk — Akar Masalah &amp; Rencana Pemulihan
      </p>

      <div className="mt-2 grid min-h-0 flex-1 grid-cols-4 grid-rows-2 gap-2">
        {atRiskList.map((r) => (
          <div
            key={r.id}
            className="flex min-w-0 flex-col rounded-lg border border-[#f3e3c3] bg-[#fdf9f0] px-2.5 py-2"
          >
            <div className="flex items-center justify-between gap-1.5">
              <span className="flex min-w-0 items-center gap-1">
                <TriangleAlert size={11} className="shrink-0 text-[#d98b06]" />
                <span className="truncate text-[9.5px] font-extrabold text-ink-900" title={r.name}>
                  {r.name}
                </span>
              </span>
              <ToneBadge label={`${r.progress}%`} tone="warn" />
            </div>
            <div className="mt-[3px] text-[8px] font-semibold text-ink-400">
              {r.id} · {r.owner}
            </div>
            <p className="mt-1.5 text-[8.5px] leading-snug text-ink-500">
              <span className="font-bold text-ink-700">Akar masalah: </span>
              {r.rootCause}
            </p>
            <p className="mt-auto flex items-start gap-1 pt-1.5 text-[8.5px] leading-snug text-ink-700">
              <Sparkles size={9} className="mt-[1px] shrink-0 text-ptpn-green" />
              <span>
                <span className="font-bold text-ptpn-green">Pemulihan:</span> {r.recovery}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
