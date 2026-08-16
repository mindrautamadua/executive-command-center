import Link from "next/link";
import { ArrowDown, ArrowRight, BrainCircuit, Sparkles } from "lucide-react";
import { peopleIntelligence, similarTalent } from "@/lib/profil-data";

/**
 * Sintesis People Intelligence: bukti (performance, capability, People Math,
 * HPI) → interpretasi AI → rekomendasi. Menjadikan People Math & HPI engine
 * yang menjelaskan "mengapa high potential", bukan sekadar tab data.
 */
export function PeopleIntelligenceCard() {
  return (
    <div className="card flex h-full flex-col px-4 pb-3.5 pt-3.5">
      <h3 className="flex items-center gap-1.5 text-[11px] font-bold text-ink-900">
        <BrainCircuit size={13} className="text-[#8b5cf6]" />
        People Intelligence
      </h3>

      <div className="mt-2.5 grid grid-cols-2 gap-2">
        {peopleIntelligence.evidence.map((e) => (
          <div key={e.label} className="rounded-xl border border-[#eef2f6] px-3 py-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[8.5px] font-extrabold uppercase tracking-[0.04em] text-ink-500">
                {e.label}
              </span>
              <span className="shrink-0 rounded bg-[#eef2f6] px-1.5 py-[1px] text-[7.5px] font-bold text-ink-500">
                {e.sumber}
              </span>
            </div>
            <p className="mt-1 text-[9.5px] font-bold leading-snug text-ink-900">{e.value}</p>
          </div>
        ))}
      </div>

      <div className="my-1.5 flex justify-center text-ink-300">
        <ArrowDown size={12} />
      </div>

      <div className="rounded-xl bg-[#f3effd] px-3.5 py-2.5">
        <div className="flex items-center gap-1.5 text-[8.5px] font-extrabold uppercase tracking-[0.06em] text-[#7c4fe0]">
          <Sparkles size={11} /> AI Talent Interpretation
        </div>
        <p className="mt-1 text-[9.5px] leading-[1.55] text-ink-900">
          {peopleIntelligence.interpretation}
        </p>
      </div>

      <div className="mt-2 flex items-start gap-2 rounded-xl border border-[#eef2f6] px-3 py-2">
        <span className="shrink-0 rounded-md bg-[#f3effd] px-2 py-[3px] text-[9.5px] font-extrabold text-[#7c4fe0]">
          {similarTalent.skor}
        </span>
        <p className="text-[8.5px] leading-snug text-ink-700">
          <span className="font-bold text-ink-900">Pola talenta serupa: </span>
          {similarTalent.teks}
        </p>
      </div>

      <div className="mt-2 flex items-center justify-between gap-3 rounded-xl border-l-[3px] border-ptpn-green bg-ptpn-greenLight/60 px-3.5 py-2">
        <p className="text-[9.5px] font-extrabold text-ink-900">
          {peopleIntelligence.recommendation}
        </p>
        <Link
          href="/sdm-talenta/profil-karyawan/people-factors"
          className="link-more inline-flex shrink-0 items-center gap-1"
        >
          Detail <ArrowRight size={11} />
        </Link>
      </div>
    </div>
  );
}
