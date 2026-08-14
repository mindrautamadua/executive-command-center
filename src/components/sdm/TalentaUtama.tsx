import { ChevronRight } from "lucide-react";
import { talenta } from "@/lib/sdm-data";
import { PersonAvatar } from "../ui/PersonAvatar";

export function TalentaUtama() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "180ms" } as React.CSSProperties}
    >
      <div className="flex items-center justify-between">
        <h3 className="card-title-navy">TALENTA UTAMA</h3>
        <button className="link-more cursor-pointer">Lihat semua</button>
      </div>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Top Talent by Potential</p>

      <div className="mt-1 flex min-h-0 flex-1 flex-col justify-around">
        {talenta.map((t) => (
          <div
            key={t.nama}
            className="-mx-1.5 flex cursor-pointer items-center gap-2.5 rounded-md px-1.5 py-[3px] transition-colors hover:bg-[#f7f9fb]"
          >
            <PersonAvatar seed={t.seed} size={30} className="ring-1 ring-[#eef2f6]" />
            <div className="min-w-0 leading-tight">
              <div className="truncate text-[10.5px] font-bold text-ink-900">{t.nama}</div>
              <div className="truncate text-[9px] text-ink-500">{t.jabatan}</div>
            </div>
            <span className="tone-green ml-auto shrink-0 rounded-md px-2 py-[3px] text-[9px] font-semibold">
              Potential: {t.skor}
            </span>
            <ChevronRight size={13} className="shrink-0 text-ink-300" />
          </div>
        ))}
      </div>

      <button className="link-more mt-1.5 flex cursor-pointer items-center gap-0.5">
        Lihat Talent Pool <ChevronRight size={12} />
      </button>
    </div>
  );
}
