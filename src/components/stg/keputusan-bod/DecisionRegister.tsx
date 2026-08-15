import { register, type DecisionStatus } from "@/lib/sbd-data";
import { SectionHead } from "@/components/hc/SectionHead";
import { ToneBadge, type BadgeTone } from "@/components/shared/ToneBadge";

const STATUS_TONE: Record<DecisionStatus, BadgeTone> = {
  Selesai: "good",
  Berjalan: "info",
  Overdue: "bad",
};

/** Register 14 keputusan terkini beserta PIC, batas waktu, dan status. */
export function DecisionRegister() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "180ms" } as React.CSSProperties}
    >
      <SectionHead title="Register Keputusan" action="Lihat 46 Keputusan" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        14 Keputusan Terkini · Klasifikasi, PIC &amp; Batas Waktu Tindak Lanjut
      </p>

      <div className="scroll-thin mt-1.5 min-h-0 flex-1 overflow-y-auto">
        <table className="w-full border-separate border-spacing-0">
          <thead className="sticky top-0 bg-[var(--surface)]">
            <tr className="text-left text-[7.5px] font-extrabold uppercase tracking-[0.05em] text-ink-400">
              <th className="border-b border-[#eef2f6] pb-1.5 pr-2">Tanggal</th>
              <th className="border-b border-[#eef2f6] pb-1.5 pr-2">Keputusan</th>
              <th className="border-b border-[#eef2f6] pb-1.5 pr-2">Klasifikasi</th>
              <th className="border-b border-[#eef2f6] pb-1.5 pr-2">PIC</th>
              <th className="border-b border-[#eef2f6] pb-1.5 pr-2">Batas Waktu</th>
              <th className="border-b border-[#eef2f6] pb-1.5">Status</th>
            </tr>
          </thead>
          <tbody>
            {register.map((d) => (
              <tr key={`${d.tanggal}-${d.title}`} className="align-middle">
                <td className="whitespace-nowrap border-b border-[#f3f6f9] py-[6px] pr-2 text-[8px] font-semibold text-ink-500">
                  {d.tanggal}
                </td>
                <td className="border-b border-[#f3f6f9] py-[6px] pr-2 text-[8.5px] font-bold leading-snug text-ink-900">
                  {d.title}
                </td>
                <td className="whitespace-nowrap border-b border-[#f3f6f9] py-[6px] pr-2 text-[8px] text-ink-500">
                  {d.category}
                </td>
                <td className="whitespace-nowrap border-b border-[#f3f6f9] py-[6px] pr-2 text-[8px] text-ink-500">
                  {d.pic}
                </td>
                <td
                  className={`whitespace-nowrap border-b border-[#f3f6f9] py-[6px] pr-2 text-[8px] font-semibold ${
                    d.status === "Overdue" ? "text-[#ef4444]" : "text-ink-700"
                  }`}
                >
                  {d.due}
                </td>
                <td className="border-b border-[#f3f6f9] py-[6px]">
                  <ToneBadge label={d.status} tone={STATUS_TONE[d.status]} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
