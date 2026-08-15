import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { topInstruktur } from "@/lib/lnd-data";
import { PersonAvatar } from "../ui/PersonAvatar";

/** Effectiveness, bukan rating saja: rating + learning gain + transfer. */
export function TopInstruktur() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "640ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="card-title-navy">Top 5 Instruktur — Effectiveness</h3>
        <button className="select-chip whitespace-nowrap px-2.5 py-[5px] text-[9.5px]">
          Semua <ChevronDown size={11} />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-around py-1">
        {topInstruktur.map((it, i) => (
          <div
            key={it.nama}
            className="-mx-1.5 flex items-center gap-2 rounded-lg px-1.5 py-[3px] transition-colors hover:bg-[#f5f8fa]"
          >
            <PersonAvatar seed={i + 2} size={26} />
            <div className="min-w-0 flex-1 leading-[1.25]">
              <div className="truncate text-[9.5px] font-semibold text-ink-900">{it.nama}</div>
              <div className="truncate text-[8.5px] text-ink-500">{it.bidang}</div>
            </div>
            <span className="flex shrink-0 items-center gap-[3px]">
              <Star size={10} fill="#1a9c5b" strokeWidth={0} />
              <span className="text-[9.5px] font-bold tabular-nums text-ink-900">
                {it.rating}
              </span>
            </span>
            <div className="w-[34px] shrink-0 text-right leading-[1.2]">
              <div className="text-[9.5px] font-bold tabular-nums text-ink-900">{it.gain}</div>
              <div className="text-[7.5px] text-ink-400">Gain</div>
            </div>
            <div className="w-[32px] shrink-0 text-right leading-[1.2]">
              <div className="text-[9.5px] font-bold tabular-nums text-ink-900">
                {it.transfer}
              </div>
              <div className="text-[7.5px] text-ink-400">Transfer</div>
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
