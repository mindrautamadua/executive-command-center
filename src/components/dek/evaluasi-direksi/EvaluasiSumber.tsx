import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { evaluasiSumberCatatan, evaluasiSumberHref } from "@/lib/dek-data-detail";

/** Catatan sumber: halaman ini menilai, bukan menduplikasi scorecard korporat. */
export function EvaluasiSumber() {
  return (
    <div
      className="card anim-rise flex items-start gap-2.5 px-4 pb-3 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#e8f1fd] text-[#2f6fe4]">
        <BookOpen size={14} strokeWidth={1.9} />
      </span>
      <div className="min-w-0">
        <h3 className="text-[10px] font-extrabold uppercase tracking-[0.05em] text-ink-900">
          Sumber Angka Penilaian
        </h3>
        <p className="mt-[4px] text-[8.5px] leading-snug text-ink-500">{evaluasiSumberCatatan}</p>
        <Link
          href={evaluasiSumberHref}
          className="mt-[5px] inline-flex items-center gap-1 text-[9px] font-bold text-ptpn-green hover:underline"
        >
          Buka KPI Korporat &amp; Scorecard
          <ArrowUpRight size={11} />
        </Link>
      </div>
    </div>
  );
}
