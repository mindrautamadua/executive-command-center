import { ArrowRight, History } from "lucide-react";
import { deltaSinceReview } from "@/lib/profil-data";

/** Apa yang berubah sejak review terakhir — untuk pembaca yang kembali. */
export function DeltaReviewCard() {
  return (
    <div className="card flex h-full flex-col px-4 pb-3.5 pt-3.5">
      <h3 className="flex items-center gap-1.5 text-[11px] font-bold text-ink-900">
        <History size={13} className="text-[#2f6fe4]" />
        Perubahan Sejak Review
      </h3>
      <p className="mt-[3px] text-[8.5px] text-ink-500">{deltaSinceReview.sejak}</p>

      <div className="mt-2 min-h-0 flex-1 space-y-1.5">
        {deltaSinceReview.items.map((it) => (
          <div key={it.label} className="flex items-center justify-between gap-2">
            <span className="min-w-0 truncate text-[9px] text-ink-500">{it.label}</span>
            <span className="flex shrink-0 items-center gap-1 text-[9px] font-bold">
              <span className="text-ink-400">{it.dari}</span>
              <ArrowRight size={9} className="text-ink-300" />
              <span className={it.baik ? "text-ptpn-greenDark" : "text-[#c07c05]"}>{it.ke}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
