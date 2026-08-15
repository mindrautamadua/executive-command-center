import { CheckCircle2, TriangleAlert } from "lucide-react";
import { insidenList } from "@/lib/esg-data-detail";
import { SectionHead } from "@/components/hc/SectionHead";

/** Dua insiden lingkungan signifikan YTD — keduanya telah selesai ditangani. */
export function InsidenLingkungan() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <SectionHead title="Insiden Lingkungan Signifikan" action="Lihat Semua" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        {insidenList.length} insiden YTD · seluruhnya selesai ditangani
      </p>

      <div className="mt-2 flex min-h-0 flex-1 flex-col gap-2">
        {insidenList.map((i) => (
          <div
            key={i.tanggal}
            className="rounded-xl border border-[#f3e3c3] bg-[#fdf9f0] px-3 pb-2.5 pt-2.5"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex min-w-0 items-center gap-1.5">
                <TriangleAlert size={13} className="shrink-0 text-[#f5a524]" />
                <span className="truncate text-[10px] font-bold text-ink-900">{i.jenis}</span>
              </div>
              <span className="shrink-0 text-[8.5px] font-semibold text-ink-400">{i.tanggal}</span>
            </div>
            <p className="mt-1.5 text-[9px] leading-[1.45] text-ink-500">
              <span className="font-semibold text-ink-700">{i.lokasi}</span> — {i.dampak}
            </p>
            <p className="mt-1.5 flex items-start gap-1 text-[8.5px] leading-snug text-ptpn-green">
              <CheckCircle2 size={10} className="mt-[1px] shrink-0" />
              <span className="font-semibold">{i.status}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
