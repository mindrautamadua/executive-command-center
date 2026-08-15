import { ShieldCheck } from "lucide-react";
import { DataStamp } from "@/components/shared/DataStamp";

export function DiFootnote() {
  return (
    <div
      className="anim-rise flex items-center justify-between gap-3 rounded-xl border border-[#d7ecdf] bg-[#f2faf5] px-4 py-2.5"
      style={{ "--d": "220ms" } as React.CSSProperties}
    >
      <div className="flex min-w-0 items-center gap-2">
        <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-ptpn-green text-white">
          <ShieldCheck size={11} />
        </span>
        <p className="truncate text-[9px] text-ink-700">
          <span className="font-extrabold text-ink-900">Privasi &amp; Etika Data:</span> subgrup
          dengan kurang dari 10 karyawan disembunyikan (minimum cell size) agar individu tidak dapat
          diidentifikasi. Pay gap adjusted mengikuti metodologi Compensation &amp; Benefits.
        </p>
      </div>
      <p className="shrink-0 text-[8.5px] text-ink-500">
        <DataStamp />
        <span className="mx-1.5 text-ink-300">•</span>
        Survei Inklusi: <span className="font-bold text-ink-700">41.238 responden (Mei 2026)</span>
        <span className="mx-1.5 text-ink-300">•</span>
        Data Quality: <span className="font-bold text-ink-700">96,1%</span>
      </p>
    </div>
  );
}
