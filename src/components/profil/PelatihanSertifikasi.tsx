import { ArrowRight, FileBadge } from "lucide-react";
import { pelatihan } from "@/lib/profil-data";

export function PelatihanSertifikasi() {
  return (
    <div className="card flex h-full flex-col px-4 pb-3.5 pt-3.5">
      <h3 className="text-[11px] font-bold text-ink-900">Pelatihan &amp; Sertifikasi</h3>

      <div className="mt-1 flex min-h-0 flex-1 flex-col justify-around">
        {pelatihan.map((p) => (
          <div key={p.nama} className="flex items-start gap-2.5">
            <span className="mt-[1px] flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg bg-ptpn-greenLight">
              <FileBadge size={13} className="text-ptpn-green" strokeWidth={1.8} />
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <div className="truncate text-[10px] font-bold text-ink-900">{p.nama}</div>
              <div className="mt-[2px] text-[8.5px] text-ink-500">{p.penyelenggara}</div>
            </div>
            <span className="shrink-0 text-[8.5px] text-ink-500">{p.tanggal}</span>
          </div>
        ))}
      </div>

      <button className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-ptpn-greenDark hover:underline">
        Lihat semua riwayat pelatihan <ArrowRight size={11} />
      </button>
    </div>
  );
}
