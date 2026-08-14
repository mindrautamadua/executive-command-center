import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { topInstruktur } from "@/lib/lnd-data";
import { PersonAvatar } from "../ui/PersonAvatar";

export function TopInstruktur() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "520ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="card-title-navy">Top 5 Instruktur Berdasarkan Rating</h3>
        <button className="select-chip whitespace-nowrap px-2.5 py-[5px] text-[9.5px]">
          Semua Instruktur <ChevronDown size={11} />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-around py-1">
        {topInstruktur.map((it, i) => (
          <div
            key={it.nama}
            className="-mx-1.5 flex items-center gap-2.5 rounded-lg px-1.5 py-[3px] transition-colors hover:bg-[#f5f8fa]"
          >
            <PersonAvatar seed={i + 2} size={28} />
            <div className="min-w-0 flex-1 leading-[1.25]">
              <div className="truncate text-[10px] font-semibold text-ink-900">{it.nama}</div>
              <div className="truncate text-[9px] text-ink-500">{it.bidang}</div>
            </div>
            <span className="flex shrink-0 items-center gap-1">
              <Star size={11} fill="#1a9c5b" strokeWidth={0} />
              <span className="text-[10px] font-bold tabular-nums text-ink-900">
                {it.rating}
              </span>
            </span>
            <div className="w-[42px] shrink-0 text-right leading-[1.2]">
              <div className="text-[10px] font-bold tabular-nums text-ink-900">{it.peserta}</div>
              <div className="text-[9px] text-ink-400">Peserta</div>
            </div>
          </div>
        ))}
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat semua instruktur <ArrowRight size={11} />
      </button>
    </div>
  );
}
