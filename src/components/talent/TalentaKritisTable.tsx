import { ChevronRight } from "lucide-react";
import {
  talentaKritis,
  READINESS_STYLE,
  RISKLEVEL_STYLE,
} from "@/lib/talent-data";
import { PersonAvatar } from "../ui/PersonAvatar";

const HEAD = [
  "Posisi Kritis",
  "Unit Kerja",
  "Talenta Saat Ini",
  "Readiness",
  "Succession Plan",
  "",
  "Ready Now",
  "Ready In 1-2 Thn",
  "Risk Level",
];

export function TalentaKritisTable() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "720ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Talenta Kritis &amp; Rencana Suksesi</h3>

      <table className="mt-2 w-full">
        <thead>
          <tr className="border-b border-[#eef2f6]">
            {HEAD.map((h, i) => (
              <th
                key={i}
                className={`whitespace-nowrap px-2 pb-2 text-[9px] font-semibold text-ink-500 ${
                  i >= 6 ? "text-center" : "text-left"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {talentaKritis.map((r) => (
            <tr
              key={r.posisi}
              className="border-b border-[#f4f7fa] transition-colors last:border-0 hover:bg-[#f7f9fb]"
            >
              <td className="whitespace-nowrap px-2 py-[6px] text-[10px] text-ink-900">
                {r.posisi}
              </td>
              <td className="whitespace-nowrap px-2 text-[10px] text-ink-700">{r.unit}</td>
              <td className="whitespace-nowrap px-2 text-[10px] text-ink-700">{r.saatIni}</td>
              <td className="px-2">
                <span
                  className={`inline-block whitespace-nowrap rounded-md px-2 py-[3px] text-[9px] font-semibold ${READINESS_STYLE[r.readiness]}`}
                >
                  {r.readiness}
                </span>
              </td>
              {r.suksesor.map((s, i) => (
                <td key={s.nama} className="whitespace-nowrap px-2 text-[10px] text-ink-700">
                  <span className="flex items-center gap-1.5">
                    {i === 1 && <PersonAvatar seed={s.seed} size={15} />}
                    {i === 0 && r.readiness !== "Ready Now" && (
                      <PersonAvatar seed={s.seed} size={15} />
                    )}
                    {s.nama}
                  </span>
                </td>
              ))}
              <td className="px-2 text-center text-[10px] tabular-nums text-ink-700">
                {r.readyNow}
              </td>
              <td className="px-2 text-center text-[10px] tabular-nums text-ink-700">
                {r.ready12}
              </td>
              <td className="px-2 text-center">
                <span
                  className={`inline-block rounded-md px-2.5 py-[3px] text-[9px] font-semibold ${RISKLEVEL_STYLE[r.risk]}`}
                >
                  {r.risk}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="link-more mt-auto flex cursor-pointer items-center gap-0.5 self-end pt-2">
        Lihat semua posisi kritis <ChevronRight size={12} />
      </button>
    </div>
  );
}
