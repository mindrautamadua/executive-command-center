import { ArrowRight } from "lucide-react";
import { ISLANDS, MAP_H } from "@/lib/indonesia";
import { kehadiranLokasi, warnaLokasi } from "@/lib/absensi-data";
import { PALETTE } from "@/lib/chart-palette";

/** Lokasi dengan kehadiran terendah diberi denyut ripple. */
const NILAI_TERENDAH = Math.min(...kehadiranLokasi.map((l) => l.value));

export function KehadiranLokasi() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "180ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Kehadiran Berdasarkan Lokasi</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Peta Sebaran Kehadiran</p>

      <div className="relative mt-1 min-h-0 flex-1">
        <svg
          viewBox={`0 0 1000 ${MAP_H}`}
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {ISLANDS.map((is) => (
            <path
              key={is.id}
              d={is.d}
              fill="var(--surface-3)"
              stroke="var(--border-line)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          ))}
        </svg>

        {kehadiranLokasi.map((l) => {
          const terendah = l.value === NILAI_TERENDAH;
          const warna = terendah ? PALETTE.amber : warnaLokasi(l.value);
          return (
            <div
              key={l.nama}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${l.x}%`, top: `${l.y}%` }}
              title={`${l.nama} — kehadiran ${l.label}`}
            >
              {terendah && (
                <span
                  className="animate-ripple pointer-events-none absolute -inset-2 rounded-xl"
                  style={{ background: PALETTE.amber, opacity: 0.35 }}
                />
              )}
              <div className="relative whitespace-nowrap rounded-lg border border-[#e3e9ef] bg-white px-2 py-[3px] text-center leading-[1.25] shadow-card transition-all duration-150 group-hover:z-10 group-hover:scale-110 group-hover:shadow-cardHover">
                <span className="flex items-center justify-center gap-1 text-[9px] font-semibold text-ink-700">
                  <span
                    className="h-[6px] w-[6px] shrink-0 rounded-full"
                    style={{ background: warna }}
                  />
                  {l.nama}
                </span>
                <span
                  className="block text-[9px] font-bold tabular-nums"
                  style={{ color: warna }}
                >
                  {l.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat detail lokasi <ArrowRight size={11} />
      </button>
    </div>
  );
}
