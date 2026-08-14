import { pipeline, conversionRate } from "@/lib/talent-data";

const fmt = (n: number) => n.toLocaleString("id-ID");
const pct = (v: number, base: number) => ((v / base) * 100).toFixed(1).replace(".", ",");

/** setengah lebar corong (persen dari area gambar) untuk nilai terbesar */
const HALF_MAX = 20.7;
/** sumbu vertikal corong, diukur dari kiri area gambar */
const AXIS = 44;
/** jarak tetap antara tepi corong dan angka */
const GAP = 11.5;

const max = pipeline[0].value;
const half = (v: number) => (HALF_MAX * v) / max;

export function TalentaPipeline() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "480ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Talenta Pipeline</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Kesiapan Talenta untuk Posisi Kritis</p>

      <div className="mt-2 flex min-h-0 flex-1 flex-col">
        {pipeline.map((p, i) => {
          const hTop = half(p.value);
          const hBottom =
            i === pipeline.length - 1 ? hTop * 0.62 : half(pipeline[i + 1].value);
          const r = (50 * hBottom) / hTop;
          const prev = i > 0 ? pipeline[i - 1].value : null;

          return (
            <div
              key={p.label}
              className={`group relative flex flex-1 items-center ${
                i !== 0 ? "border-t border-[#f2f5f8]" : ""
              }`}
            >
              {/* chip konversi antar-tahap, di garis batas tahap */}
              {prev !== null && (
                <span className="tone-blue absolute right-0 top-0 z-10 -translate-y-1/2 rounded-full px-1.5 py-[2px] text-[9px] font-semibold tabular-nums">
                  ↓ {pct(p.value, prev)}%
                </span>
              )}

              <span className="z-10 w-[72px] shrink-0 text-[10px] text-ink-700">{p.label}</span>
              <div className="relative h-full flex-1">
                <div
                  className="anim-grow-x absolute inset-y-0 transition-opacity duration-150 group-hover:opacity-85"
                  style={
                    {
                      left: `${AXIS - hTop}%`,
                      width: `${hTop * 2}%`,
                      background: p.color,
                      clipPath: `polygon(0 0, 100% 0, ${50 + r}% 100%, ${50 - r}% 100%)`,
                      transformOrigin: "center",
                      "--d": `${480 + i * 90}ms`,
                    } as React.CSSProperties
                  }
                />
                <span
                  className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[10.5px] font-bold tabular-nums text-ink-900"
                  style={{ left: `${AXIS + hTop + GAP}%` }}
                >
                  {fmt(p.value)}
                </span>
              </div>

              {/* tooltip tahap */}
              <div className="pointer-events-none absolute left-[72px] top-1 z-20 hidden whitespace-nowrap rounded-md border border-[#e3e9ef] bg-white px-2 py-1 text-[9px] text-ink-700 shadow-cardHover group-hover:block">
                <strong className="font-bold text-ink-900">{p.label}</strong>: {fmt(p.value)}{" "}
                talenta • {pct(p.value, max)}% dari Identified
                {prev !== null && (
                  <>
                    {" "}
                    • konversi {pct(p.value, prev)}%
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-[#f2f5f8] pt-2.5">
        <span className="text-[10px] text-ink-700">
          Conversion Rate (Ready Now → In Role)
        </span>
        <span className="text-[13px] font-extrabold text-[#16a34a]">{conversionRate}</span>
      </div>
    </div>
  );
}
