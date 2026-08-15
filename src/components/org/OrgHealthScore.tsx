import { ChevronRight } from "lucide-react";
import { healthColor, orgHealthDims, orgHealthOverall } from "@/lib/org-data";
import { RingGauge } from "./RingGauge";

export function OrgHealthScore() {
  return (
    <div className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3">
      <h3 className="card-title-navy">Kesehatan Organisasi</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">
        Skor Komposit Struktur, Kapasitas &amp; Biaya
      </p>

      <div className="mt-2 flex min-h-0 flex-1 items-center gap-4">
        <div className="flex shrink-0 flex-col items-center gap-1">
          <RingGauge
            pct={orgHealthOverall}
            color={healthColor(orgHealthOverall)}
            size={72}
            label={`${orgHealthOverall}`}
            animate
          />
          <span className="text-[9px] font-semibold text-ink-500">dari 100</span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-[7px]">
          {orgHealthDims.map((d, i) => (
            <div key={d.dim} className="flex items-center gap-2" title={`${d.dim}: ${d.score}/100`}>
              <span className="w-[118px] shrink-0 truncate text-[9px] text-ink-500">{d.dim}</span>
              <span className="h-[6px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
                <span
                  className="anim-grow-x block h-full rounded-full"
                  style={
                    {
                      width: `${d.score}%`,
                      background: healthColor(d.score),
                      "--d": `${i * 60}ms`,
                    } as React.CSSProperties
                  }
                />
              </span>
              <span className="w-[20px] shrink-0 text-right text-[9.5px] font-bold tabular-nums text-ink-900">
                {d.score}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="link-more mt-1 flex items-center gap-1 self-start">
        Lihat metodologi skor <ChevronRight size={11} />
      </button>
    </div>
  );
}
