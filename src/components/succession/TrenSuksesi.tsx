import { TrendingUp } from "lucide-react";
import { trenSuksesi } from "@/lib/succession-data";
import { Sparkline } from "../ui/Sparkline";

/**
 * Tren kesehatan program suksesi 6 bulan: coverage, ready-now, dan
 * time-to-readiness — bukti program bekerja, bukan sekadar aktivitas.
 */
export function TrenSuksesi() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "1260ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="card-title-navy flex items-center gap-1.5">
          <TrendingUp size={13} className="text-ptpn-green" />
          Tren Kesehatan Suksesi
        </h3>
        <span className="shrink-0 text-[8.5px] font-medium text-ink-400">
          Jan – Jun 2026
        </span>
      </div>

      <div className="mt-1.5 flex min-h-0 flex-1 flex-col justify-around">
        {trenSuksesi.map((t) => (
          <div key={t.label} className="flex items-center gap-2.5">
            <div className="w-[118px] shrink-0 leading-tight">
              <div className="truncate text-[9px] font-semibold text-ink-900">
                {t.label}
              </div>
              <div className="text-[8.5px] tabular-nums text-ink-500">
                {t.awal} <span className="text-ink-300">→</span>{" "}
                <span className="font-bold text-ink-700">{t.akhir}</span>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <Sparkline data={t.series} color={t.color} height={26} animate endDot />
            </div>
            <span
              className="tone-green inline-flex shrink-0 items-center rounded px-1.5 py-[2px] text-[8.5px] font-bold leading-none tabular-nums"
              title={
                t.turunBaik
                  ? "Turun = membaik (waktu menuju siap makin pendek)"
                  : "Naik = membaik"
              }
            >
              {t.delta}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
