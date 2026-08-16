import { BadgeCheck, ShieldCheck } from "lucide-react";
import { kepatuhanDisiplin } from "@/lib/profil-data";

/**
 * Catatan kepatuhan & disiplin — due diligence wajib sebelum promosi;
 * ketiadaan catatan ditampilkan eksplisit sebagai hasil verifikasi.
 */
export function KepatuhanCard() {
  return (
    <div className="card flex h-full flex-col px-4 pb-3.5 pt-3.5">
      <h3 className="flex items-center gap-1.5 text-[11px] font-bold text-ink-900">
        <ShieldCheck size={13} className="text-ptpn-green" />
        Kepatuhan &amp; Disiplin
      </h3>

      <div className="mt-2.5 min-h-0 flex-1 space-y-2">
        {kepatuhanDisiplin.items.map((it) => (
          <div key={it.label} className="flex items-center justify-between gap-3">
            <span className="text-[9px] text-ink-500">{it.label}</span>
            <span className="flex items-center gap-1.5 text-[9px] font-extrabold text-ink-900">
              {it.ok && <BadgeCheck size={11} className="text-ptpn-green" strokeWidth={2} />}
              {it.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2 rounded-lg border-l-[3px] border-ptpn-green bg-ptpn-greenLight/60 px-3 py-2">
        <p className="text-[8.5px] font-bold leading-snug text-ink-900">
          {kepatuhanDisiplin.verifikasi}
        </p>
      </div>
    </div>
  );
}
