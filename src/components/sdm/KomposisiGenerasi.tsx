import { ChevronRight } from "lucide-react";
import { generasi } from "@/lib/sdm-data";

const fmt = (n: number) => n.toLocaleString("id-ID");

/** Bar horizontal terurut per generasi (menggantikan donut ke-3 di baris ini). */
export function KomposisiGenerasi() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">KOMPOSISI KARYAWAN</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Berdasarkan Generasi</p>

      <div className="mt-1 flex min-h-0 flex-1 flex-col justify-around">
        {generasi.map((d, i) => (
          <div key={d.name}>
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[9.5px] text-ink-700">
                {d.name} <span className="text-ink-400">{d.periode}</span>
              </span>
              <span className="shrink-0 text-[9.5px] font-semibold tabular-nums text-ink-900">
                {fmt(d.value)} <span className="font-normal text-ink-500">({d.pct})</span>
              </span>
            </div>
            <div className="mt-[4px] h-[9px] overflow-hidden rounded-full bg-[#f1f5f8]">
              <div
                className="anim-grow-x h-full rounded-full"
                style={
                  {
                    width: `${d.share}%`,
                    background: d.color,
                    "--d": `${120 + i * 80}ms`,
                  } as React.CSSProperties
                }
              />
            </div>
          </div>
        ))}
      </div>

      <button className="link-more mt-1 flex cursor-pointer items-center gap-0.5">
        Lihat detail generasi <ChevronRight size={12} />
      </button>
    </div>
  );
}
