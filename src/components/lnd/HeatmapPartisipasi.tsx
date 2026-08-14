import { ArrowRight } from "lucide-react";
import { heatColor, heatmapBulan, heatmapUnit } from "@/lib/lnd-data";

const LEGEND = ["#eaf7ef", "#d6efe0", "#b6e3c8", "#8ed4ac", "#5ec18c"];

export function HeatmapPartisipasi() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "460ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Heatmap Partisipasi Pelatihan per Unit Organisasi</h3>

      <div className="mt-2 min-h-0 flex-1">
        <table className="w-full border-separate border-spacing-x-[3px] border-spacing-y-[3px]">
          <thead>
            <tr>
              <th className="pb-1 text-left text-[9px] font-semibold text-ink-500">
                Unit Organisasi
              </th>
              {heatmapBulan.map((b) => (
                <th
                  key={b}
                  className="whitespace-nowrap pb-1 text-center text-[9px] font-semibold text-ink-500"
                >
                  {b}
                </th>
              ))}
              <th className="pb-1 text-center text-[9px] font-semibold text-ink-500">
                Rata-rata
              </th>
            </tr>
          </thead>
          <tbody>
            {heatmapUnit.map((r) => (
              <tr key={r.unit} className="group/row">
                <td className="whitespace-nowrap pr-2 text-[9.5px] text-ink-900 transition-colors group-hover/row:font-semibold">
                  {r.unit}
                </td>
                {r.nilai.map((v, i) => {
                  const c = heatColor(v);
                  const peserta = Math.round((r.karyawan * v) / 100);
                  return (
                    <td key={`${r.unit}-${i}`} className="p-0">
                      {/* sweep masuk kolom demi kolom (stagger per bulan) */}
                      <div
                        className="anim-fade group relative cursor-default rounded-[3px] py-[5px] text-center text-[9.5px] font-semibold tabular-nums ring-[#1a9c5b] transition-shadow hover:ring-2"
                        style={
                          {
                            background: c.bg,
                            color: c.fg,
                            "--d": `${90 * i}ms`,
                          } as React.CSSProperties
                        }
                      >
                        {v}%
                        {/* tooltip sel */}
                        <div
                          className={`pointer-events-none absolute bottom-full z-20 mb-1 hidden whitespace-nowrap rounded-lg border border-[#e3e9ef] bg-white px-2.5 py-1.5 text-left shadow-cardHover group-hover:block ${
                            i < 4 ? "left-1/2 -translate-x-1/2" : "right-0"
                          }`}
                        >
                          <div className="text-[9.5px] font-bold text-ink-900">{r.unit}</div>
                          <div className="mt-[2px] text-[9px] font-normal text-ink-500">
                            {heatmapBulan[i]} · Partisipasi{" "}
                            <span className="font-bold tabular-nums text-ink-900">{v}%</span>
                            {" · "}±
                            <span className="font-semibold tabular-nums text-ink-700">
                              {peserta.toLocaleString("id-ID")}
                            </span>{" "}
                            peserta
                          </div>
                        </div>
                      </div>
                    </td>
                  );
                })}
                <td className="pl-1 text-center text-[9.5px] font-bold tabular-nums text-ink-900">
                  {r.rata}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-1.5 flex items-center justify-between gap-2">
        <button className="link-more flex items-center gap-1">
          Lihat detail unit organisasi <ArrowRight size={11} />
        </button>
        <span className="flex items-center gap-1.5 text-[9px] text-ink-500">
          Rendah (0-60%)
          <span className="flex overflow-hidden rounded-[3px]">
            {LEGEND.map((c) => (
              <span key={c} className="h-[9px] w-[16px]" style={{ background: c }} />
            ))}
          </span>
          Tinggi (81-100%)
        </span>
      </div>
    </div>
  );
}
