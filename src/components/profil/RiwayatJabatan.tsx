import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { riwayatJabatan } from "@/lib/profil-data";

export function RiwayatJabatan() {
  return (
    <div className="card flex h-full flex-col px-4 pb-3.5 pt-3.5">
      <h3 className="text-[11px] font-bold text-ink-900">Riwayat Jabatan</h3>

      <div className="mt-2 flex min-h-0 flex-1 flex-col">
        {riwayatJabatan.map((r, i) => (
          <div key={r.jabatan} className="relative flex gap-3 pb-1">
            {/* Garis + titik timeline */}
            <div className="flex w-[22px] shrink-0 flex-col items-center">
              <span
                className={`z-10 flex h-[22px] w-[22px] items-center justify-center rounded-full border ${
                  r.aktif
                    ? "border-ptpn-green bg-ptpn-greenLight"
                    : "border-[#e3e9ef] bg-white"
                }`}
              >
                <Briefcase
                  size={10}
                  className={r.aktif ? "text-ptpn-green" : "text-ink-400"}
                  strokeWidth={1.8}
                />
              </span>
              {i < riwayatJabatan.length - 1 && (
                <span className="w-px flex-1 bg-[#e9eef3]" />
              )}
            </div>

            <div
              className={`flex min-w-0 flex-1 items-start justify-between gap-3 pt-[2px] ${
                i < riwayatJabatan.length - 1 ? "border-b border-[#f2f5f8] pb-3 mb-3" : ""
              }`}
            >
              <div className="min-w-0 leading-tight">
                <div className="text-[10.5px] font-bold text-ink-900">{r.jabatan}</div>
                <div className="mt-[3px] text-[9px] text-ink-500">{r.unit}</div>
              </div>
              <div className="shrink-0 text-right leading-tight">
                <div className="text-[9px] text-ink-500">{r.periode}</div>
                <div className="mt-[3px] text-[8.5px] font-semibold text-ptpn-greenDark">{r.durasi}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/sdm-talenta/profil-karyawan/riwayat-jabatan"
        className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-ptpn-greenDark hover:underline"
      >
        Lihat semua riwayat jabatan <ArrowRight size={11} />
      </Link>
    </div>
  );
}
