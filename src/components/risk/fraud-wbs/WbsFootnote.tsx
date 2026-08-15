import Link from "next/link";
import { Info } from "lucide-react";
import { LABOR_WBS_REPORTS } from "@/lib/risk-data-detail";

/** Catatan kaki konsistensi lintas modul (enterprise ⊇ scope ketenagakerjaan). */
export function WbsFootnote() {
  return (
    <div
      className="card anim-rise flex items-start gap-2 px-4 py-2.5"
      style={{ "--d": "150ms" } as React.CSSProperties}
    >
      <Info size={12} strokeWidth={1.9} className="mt-[1px] shrink-0 text-ink-400" />
      <p className="text-[8.5px] leading-[1.5] text-ink-500">
        <span className="font-bold text-ink-700">Catatan konsistensi:</span> 47 laporan WBS pada
        halaman ini ber-scope enterprise dan sudah mencakup {LABOR_WBS_REPORTS} laporan lingkup
        ketenagakerjaan yang ditampilkan di modul{" "}
        <Link
          href="/risk-compliance"
          className="font-bold text-ptpn-green underline underline-offset-2"
        >
          Risk &amp; Compliance (scope SDM)
        </Link>
        ; 16 laporan sisanya berada di luar lingkup tenaga kerja (pengadaan vendor, aset, dan
        lainnya). Kedua angka bersifat superset–subset, bukan angka tandingan.
      </p>
    </div>
  );
}
