import { ArrowRight, Trophy } from "lucide-react";
import { penghargaan } from "@/lib/profil-data";

export function Penghargaan() {
  return (
    <div className="card flex h-full flex-col px-4 pb-3.5 pt-3.5">
      <h3 className="text-[11px] font-bold text-ink-900">Penghargaan</h3>

      <div className="mt-1 flex min-h-0 flex-1 flex-col justify-around">
        {penghargaan.map((p) => (
          <div key={p.nama} className="flex items-center gap-2.5">
            <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#fef4e3]">
              <Trophy size={13} className="text-[#f5a524]" strokeWidth={1.8} />
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <div className="truncate text-[10px] font-bold text-ink-900">{p.nama}</div>
              <div className="mt-[2px] text-[8.5px] text-ink-500">{p.unit}</div>
            </div>
            <span className="shrink-0 text-[9px] text-ink-500">{p.tahun}</span>
          </div>
        ))}
      </div>

      <button className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-ptpn-greenDark hover:underline">
        Lihat semua penghargaan <ArrowRight size={11} />
      </button>
    </div>
  );
}
