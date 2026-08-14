import { ArrowRight, Sparkles, Target, Leaf } from "lucide-react";
import { topPotential, retentionRisk, insightAi } from "@/lib/talent-data";
import { PersonAvatar } from "../ui/PersonAvatar";

export function TopPotentialCard() {
  return (
    <div
      className="card anim-rise shrink-0 px-3 pb-2.5 pt-2.5"
      style={{ "--d": "480ms" } as React.CSSProperties}
    >
      <div className="flex items-center justify-between gap-1">
        <span className="flex items-center gap-1.5">
          <Target size={12} className="text-ptpn-green" />
          <h3 className="card-title-navy">Top Potential</h3>
        </span>
        <button className="link-more cursor-pointer">Lihat semua</button>
      </div>

      <div className="mt-1.5 flex flex-col">
        {topPotential.map((t, i) => (
          <div
            key={t.nama}
            className={`-mx-1 flex cursor-pointer items-center gap-2 rounded-md px-1 py-[6px] transition-colors hover:bg-[#f7f9fb] ${
              i !== 0 ? "border-t border-[#f4f7fa]" : ""
            }`}
          >
            <PersonAvatar seed={t.seed} size={26} className="ring-1 ring-[#eef2f6]" />
            <div className="min-w-0 leading-tight">
              <div className="truncate text-[10px] font-semibold text-ink-900">{t.nama}</div>
              <div className="truncate text-[9px] text-ink-500">{t.jabatan}</div>
            </div>
            <span className="ml-auto shrink-0 text-[10.5px] font-extrabold text-[#16a34a]">
              {t.skor}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RetentionRiskCard() {
  return (
    <div
      className="card anim-rise shrink-0 px-3 pb-2.5 pt-2.5"
      style={{ "--d": "560ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Talenta Retention Risk (High)</h3>
      <button className="link-more mt-[2px] block cursor-pointer">Lihat semua</button>

      <div className="mt-1.5 flex flex-col">
        {retentionRisk.map((t, i) => (
          <div
            key={t.nama}
            className={`-mx-1 flex cursor-pointer items-center gap-2 rounded-md px-1 py-[6px] transition-colors hover:bg-[#f7f9fb] ${
              i !== 0 ? "border-t border-[#f4f7fa]" : ""
            }`}
          >
            <PersonAvatar seed={t.seed} size={24} className="ring-1 ring-[#eef2f6]" />
            <div className="min-w-0 leading-tight">
              <div className="whitespace-nowrap text-[9px] font-semibold text-ink-900">
                {t.nama}
              </div>
              <div className="truncate text-[9px] text-ink-500">{t.jabatan}</div>
            </div>
            <span className="tone-red ml-auto shrink-0 rounded-md px-1 py-[2px] text-[9px] font-semibold">
              Risk: {t.risk}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InsightAiCard() {
  return (
    <div
      className="card anim-rise flex min-h-0 flex-1 flex-col px-3 pb-2.5 pt-2.5"
      style={{ "--d": "640ms" } as React.CSSProperties}
    >
      <div className="flex items-center justify-between gap-1">
        <span className="flex items-center gap-1.5">
          <Sparkles size={12} className="text-[#2f6fe4]" />
          <h3 className="card-title-navy">Insight AI</h3>
        </span>
        <span className="tone-blue rounded px-1.5 py-[1px] text-[9px] font-bold">Beta</span>
      </div>

      <p className="mt-2 text-[9px] leading-[1.4] text-ink-500">
        Berdasarkan analisis data talent terkini, berikut insight utama untuk Anda.
      </p>

      <div className="mt-2 flex flex-1 flex-col gap-2.5">
        {insightAi.map((t) => (
          <div key={t} className="flex gap-1.5">
            <Leaf size={11} className="mt-[1px] shrink-0 text-ptpn-green" />
            <p className="text-[9px] leading-[1.4] text-ink-700">{t}</p>
          </div>
        ))}
      </div>

      <button className="mt-2 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-[#e3e9ef] py-[7px] text-[10px] font-semibold text-ink-700 transition-colors hover:bg-[#f7f9fb]">
        Lihat Insight Lengkap
        <ArrowRight size={11} />
      </button>
    </div>
  );
}
