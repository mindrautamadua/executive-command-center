import { ChevronDown, ChevronRight } from "lucide-react";
import { kandidatSiap } from "@/lib/succession-data";
import { PersonAvatar } from "../ui/PersonAvatar";

export function KandidatSiapSekarang() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "840ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="card-title-navy leading-[1.25]">
          Kandidat Siap Sekarang (&lt; 1 Tahun)
        </h3>
        <button className="select-chip shrink-0 whitespace-nowrap px-2 py-[5px] text-[9px]">
          Top 5 Posisi <ChevronDown size={11} />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-around py-1">
        {kandidatSiap.map((k) => (
          <div
            key={k.posisi}
            className="-mx-1.5 flex cursor-pointer items-center gap-2.5 rounded-md px-1.5 py-[3px] transition-colors hover:bg-[#f7f9fb]"
          >
            <PersonAvatar seed={k.seed} size={28} className="ring-1 ring-[#eef2f6]" />
            <div className="min-w-0 leading-tight">
              <div className="truncate text-[9.5px] font-semibold text-ink-900">
                {k.posisi}
              </div>
              <div className="truncate text-[9px] text-ink-500">{k.unit}</div>
            </div>
            <div className="ml-auto shrink-0 text-right leading-tight">
              <div className="text-[9.5px] font-bold text-ink-900">{k.jumlah} Kandidat</div>
              <div className="text-[9px] text-ptpn-green">Siap Sekarang</div>
            </div>
          </div>
        ))}
      </div>

      <button className="link-more mt-1 flex cursor-pointer items-center gap-0.5">
        Lihat semua kandidat siap <ChevronRight size={12} />
      </button>
    </div>
  );
}
