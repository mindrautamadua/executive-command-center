import Link from "next/link";
import { ArrowLeft, FileText, MoreHorizontal } from "lucide-react";

export function ProfilTopbar() {
  return (
    <div className="flex items-center gap-3 px-5 pb-3 pt-3.5">
      <Link
        href="/sdm-talenta/direktori-karyawan"
        className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-500 transition-colors hover:text-ptpn-green"
      >
        <ArrowLeft size={14} />
        Direktori Karyawan
      </Link>
      <h1 className="text-[13px] font-bold text-ink-900">Profil Karyawan</h1>

      <div className="ml-auto flex items-center gap-2">
        <Link
          href="/sdm-talenta/profil-karyawan/talent-brief"
          className="flex items-center gap-1.5 rounded-lg bg-ptpn-green px-3 py-[7px] text-[10.5px] font-semibold text-white shadow-pill transition-opacity hover:opacity-90"
        >
          <FileText size={12} />
          Generate Talent Brief
        </Link>
        <button
          className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-[#e3e9ef] bg-white text-ink-500 shadow-card transition-colors hover:bg-[#f5f8fa]"
          aria-label="Menu lainnya"
        >
          <MoreHorizontal size={14} />
        </button>
      </div>
    </div>
  );
}
