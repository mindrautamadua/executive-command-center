import { ArrowRight, ChartNoAxesColumn, GitCompareArrows, Sprout } from "lucide-react";
import { pemerataanKesempatan } from "@/lib/di-data";

const ICONS = {
  promosi: Sprout,
  pelatihan: ChartNoAxesColumn,
  turnover: GitCompareArrows,
};

/** Kata yang ditebalkan pada catatan tiap rasio. */
const TEBAL = ["promosi", "pelatihan", "turnover"] as const;

function Catatan({ text, tebal }: { text: string; tebal: string }) {
  const at = text.indexOf(tebal);
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <strong className="font-bold text-ink-700">{tebal}</strong>
      {text.slice(at + tebal.length)}
    </>
  );
}

export function PemerataanKesempatan() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Pemerataan Kesempatan (Equal Opportunity)</h3>

      <div className="flex min-h-0 flex-1 flex-col justify-around py-1.5">
        {pemerataanKesempatan.map((r, i) => {
          const Icon = ICONS[r.icon];
          return (
            <div key={r.judul} className="flex items-center gap-3">
              <span
                className={`tone-${r.tone} flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg`}
              >
                <Icon size={15} strokeWidth={1.9} />
              </span>
              <span className="w-[34px] shrink-0 text-[17px] font-extrabold leading-none tabular-nums text-ink-900">
                {r.nilai}
              </span>
              <span className="w-[104px] shrink-0 leading-[1.3]">
                <span className="block text-[9.5px] font-semibold text-ink-900">
                  {r.judul}
                </span>
                <span className="block text-[9px] text-ink-500">{r.banding}</span>
              </span>
              <p className="min-w-0 flex-1 text-[9px] leading-[1.4] text-ink-500">
                <Catatan text={r.catatan} tebal={TEBAL[i]} />
              </p>
            </div>
          );
        })}
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat analisis lengkap <ArrowRight size={11} />
      </button>
    </div>
  );
}
