import { ChevronRight } from "lucide-react";
import { rencanaAksi, KESEHATAN_COLOR, STATUS_STYLE } from "@/lib/succession-data";

export function RencanaAksi() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "780ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Rencana Aksi Suksesi</h3>

      <div className="mt-2 min-h-0 flex-1">
        {/* leading-none: tanpa ini tiap <tr> mewarisi line-height 24px dan baris jadi tinggi */}
        <table className="w-full table-fixed border-collapse leading-none">
          <thead>
            <tr className="border-b border-[#eef2f6] text-[9px] font-semibold text-ink-500">
              <th className="w-[23%] pb-1.5 text-left">Inisiatif</th>
              <th className="w-[35%] pb-1.5 text-left">Deskripsi</th>
              <th className="w-[12%] pb-1.5 text-left">Target</th>
              <th className="w-[14%] pb-1.5 text-left">Progress</th>
              <th className="w-[16%] pb-1.5 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {rencanaAksi.map((a, i) => (
              <tr
                key={a.inisiatif}
                className="h-[28px] border-b border-[#f4f7fa] transition-colors last:border-0 hover:bg-[#f7f9fb]"
              >
                <td className="py-0 pr-1 text-[9px] font-semibold leading-[1.25] text-ink-900">
                  {a.inisiatif}
                </td>
                <td className="py-0 pr-1 text-[9px] leading-[1.25] text-ink-500">
                  {a.deskripsi}
                </td>
                <td className="py-0 pr-1 text-[9px] leading-none text-ink-700">{a.target}</td>
                <td className="py-0 pr-2">
                  <span className="flex items-center gap-1.5">
                    <span className="h-[6px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#f2f5f8]">
                      {/* warna bar mengikuti kesehatan progres, bukan hijau seragam */}
                      <span
                        className="anim-grow-x block h-full rounded-full"
                        style={
                          {
                            width: `${a.progress}%`,
                            background: KESEHATAN_COLOR[a.kesehatan],
                            "--d": `${780 + i * 60}ms`,
                          } as React.CSSProperties
                        }
                      />
                    </span>
                    <span className="w-[22px] shrink-0 text-right text-[9px] font-semibold tabular-nums text-ink-700">
                      {a.progress}%
                    </span>
                  </span>
                </td>
                <td className="py-0">
                  <span
                    className={`inline-flex items-center whitespace-nowrap rounded px-1.5 py-[2px] text-[9px] font-semibold leading-none ${STATUS_STYLE[a.status]}`}
                  >
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="link-more mt-1.5 flex cursor-pointer items-center gap-0.5">
        Lihat semua rencana aksi <ChevronRight size={12} />
      </button>
    </div>
  );
}
