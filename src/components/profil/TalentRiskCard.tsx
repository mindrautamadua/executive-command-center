import Link from "next/link";
import { ArrowRight, ShieldAlert, TriangleAlert } from "lucide-react";
import { talentRisk } from "@/lib/profil-data";

const LEVEL_STYLE: Record<string, { dot: string; text: string; chip: string }> = {
  Low: { dot: "bg-[#22a45d]", text: "text-ptpn-greenDark", chip: "bg-ptpn-greenLight" },
  Medium: { dot: "bg-[#f59e0b]", text: "text-[#c07c05]", chip: "bg-[#fdf3e0]" },
  High: { dot: "bg-[#ef4444]", text: "text-[#dc2626]", chip: "bg-[#fdecec]" },
};

/** Kartu Talent Risk — menautkan profil ke perspektif People Risk Radar. */
export function TalentRiskCard() {
  return (
    <div className="card flex h-full flex-col px-4 pb-3.5 pt-3.5">
      <h3 className="flex items-center gap-1.5 text-[11px] font-bold text-ink-900">
        <ShieldAlert size={13} className="text-[#d97706]" />
        Talent Risk
      </h3>

      <div className="mt-2.5 flex min-h-0 flex-1 flex-col justify-around gap-1.5">
        {talentRisk.items.map((r) => {
          const st = LEVEL_STYLE[r.level];
          return (
            <div key={r.label} className="flex items-center justify-between gap-2">
              <span className="text-[9.5px] text-ink-700">{r.label}</span>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[8.5px] font-extrabold ${st.chip} ${st.text}`}
              >
                <span className={`h-[6px] w-[6px] rounded-full ${st.dot}`} />
                {r.level}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-2.5 flex items-start gap-2 rounded-lg bg-[#fdf6e7] px-3 py-2">
        <TriangleAlert size={12} className="mt-[1px] shrink-0 text-[#d97706]" />
        <p className="text-[9px] leading-snug text-ink-700">
          <span className="font-bold text-ink-900">Primary Risk: </span>
          {talentRisk.primary}
        </p>
      </div>

      <Link
        href="/people-risk-radar"
        className="link-more mt-2 inline-flex items-center gap-1"
      >
        Lihat People Risk Radar <ArrowRight size={11} />
      </Link>
    </div>
  );
}
