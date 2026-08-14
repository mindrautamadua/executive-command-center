import { ChevronRight } from "lucide-react";
import { sumberKandidat } from "@/lib/rekrutmen-data";

/* lebar bar dihitung dari nilai, bukan angka normalisasi manual */
const max = Math.max(...sumberKandidat.map((s) => s.valueNum));

export function SumberKandidat() {
  return (
    <div className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3">
      <h3 className="card-title-navy">Sumber Kandidat</h3>

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-around">
        {sumberKandidat.map((s, i) => (
          <div
            key={s.sumber}
            className="flex items-center gap-2"
            title={`${s.sumber}: ${s.value} kandidat (${s.pct})`}
          >
            <span className="w-[92px] shrink-0 truncate text-[9.5px] text-ink-700">{s.sumber}</span>
            <span className="min-w-0 flex-1">
              <span
                className="anim-grow-x block h-[8px] rounded-full"
                style={
                  {
                    width: `${(s.valueNum / max) * 100}%`,
                    background: s.color,
                    "--d": `${i * 60}ms`,
                  } as React.CSSProperties
                }
              />
            </span>
            <span className="w-[74px] shrink-0 whitespace-nowrap text-right text-[9.5px] text-ink-500">
              <span className="font-semibold text-ink-900">{s.value}</span> ({s.pct})
            </span>
          </div>
        ))}
      </div>

      <button className="link-more mt-2 flex items-center gap-1 self-start">
        Lihat semua sumber <ChevronRight size={11} />
      </button>
    </div>
  );
}
