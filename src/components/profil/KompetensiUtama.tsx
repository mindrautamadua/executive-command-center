import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { kompetensi } from "@/lib/profil-data";

export function KompetensiUtama() {
  return (
    <div className="card flex h-full flex-col px-4 pb-3.5 pt-3.5">
      <h3 className="text-[11px] font-bold text-ink-900">Kompetensi Utama</h3>

      <div className="mt-1 flex min-h-0 flex-1 flex-col justify-around">
        {kompetensi.map((k) => (
          <div key={k.label} className="flex items-center gap-3">
            <span className="w-[104px] shrink-0 text-[9.5px] text-ink-700">{k.label}</span>
            <span className="h-[6px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
              <span
                className="block h-full rounded-full bg-ptpn-green"
                style={{ width: `${(k.value / 5) * 100}%` }}
              />
            </span>
            <span className="w-6 shrink-0 text-right text-[10px] font-bold text-ink-900">
              {k.value}
            </span>
          </div>
        ))}
      </div>

      <Link
        href="/sdm-talenta/profil-karyawan/kompetensi"
        className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-ptpn-greenDark hover:underline"
      >
        Lihat semua kompetensi <ArrowRight size={11} />
      </Link>
    </div>
  );
}
