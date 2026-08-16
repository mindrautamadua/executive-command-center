import { Banknote } from "lucide-react";
import { costOfLoss } from "@/lib/profil-data";

/** Nilai finansial talenta: biaya kehilangan vs investasi retensi. */
export function CostOfLossCard() {
  return (
    <div className="card flex h-full flex-col px-4 pb-3.5 pt-3.5">
      <h3 className="flex items-center gap-1.5 text-[11px] font-bold text-ink-900">
        <Banknote size={13} className="text-[#d98b06]" />
        Nilai Finansial Talenta
      </h3>

      <div className="mt-2.5 rounded-xl bg-[#fdecec] px-3 py-2.5">
        <div className="text-[8.5px] font-semibold text-[#dc2626]">Estimasi biaya bila kehilangan</div>
        <div className="mt-1 text-[18px] font-extrabold leading-none text-ink-900">
          {costOfLoss.estimasi}
        </div>
      </div>

      <ul className="mt-2 min-h-0 flex-1 space-y-1">
        {costOfLoss.rincian.map((r) => (
          <li key={r} className="flex items-start gap-1.5 text-[8.5px] leading-snug text-ink-700">
            <span className="mt-[1px] shrink-0 text-[#dc2626]">•</span>
            {r}
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-center justify-between rounded-lg bg-ptpn-greenLight/60 px-3 py-2">
        <span className="text-[8.5px] text-ink-700">Investasi retensi &amp; pengembangan</span>
        <span className="text-[9.5px] font-extrabold text-ptpn-greenDark">
          {costOfLoss.investasiRetensi}
        </span>
      </div>
      <p className="mt-1.5 text-[8.5px] font-bold text-ink-900">{costOfLoss.rasio}</p>
    </div>
  );
}
