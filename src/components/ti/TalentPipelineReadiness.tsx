import { tiPipeline, tiPipelineFokus } from "@/lib/ti-data";
import { SectionHead } from "../hc/SectionHead";

export function TalentPipelineReadiness() {
  return (
    <section className="card anim-rise flex flex-col p-3.5" style={{ "--d": "60ms" } as React.CSSProperties}>
      <SectionHead
        title="Talent Pipeline by Readiness"
        action="Lihat Detail"
        href="/talent-intelligence/pipeline-readiness"
      />

      <div className="mt-3 flex flex-1 items-center gap-3">
        {/* funnel */}
        <div className="flex min-w-0 flex-1 flex-col items-center gap-[5px]">
          {tiPipeline.map((s, i) => (
            <div
              key={s.label}
              className="anim-rise flex h-[46px] flex-col items-center justify-center rounded-md"
              style={
                {
                  width: `${s.width}%`,
                  background: s.color,
                  clipPath: "polygon(3.5% 0, 96.5% 0, 100% 100%, 0 100%)",
                  "--d": `${120 + 70 * i}ms`,
                } as React.CSSProperties
              }
            >
              <span
                className={`text-[10px] font-bold leading-none ${
                  i === 3 ? "text-ink-700" : "text-white"
                }`}
              >
                {s.label}
              </span>
              <span
                className={`mt-[3px] text-[9px] font-semibold leading-none ${
                  i === 3 ? "text-ink-500" : "text-white/85"
                }`}
              >
                {s.value} ({s.pct})
              </span>
            </div>
          ))}
        </div>

        {/* fokus penguatan */}
        <div className="w-[168px] shrink-0 rounded-lg border border-[#eef2f6] bg-[#f8fafb] p-2.5">
          <div className="text-[9px] font-extrabold text-ink-900">Fokus Penguatan Pipeline</div>
          <ul className="mt-1.5 flex flex-col gap-1.5">
            {tiPipelineFokus.map((f) => (
              <li key={f} className="flex items-start gap-1.5">
                <span className="mt-[4px] h-[4px] w-[4px] shrink-0 rounded-full bg-ptpn-green" />
                <span className="text-[8.5px] leading-[1.35] text-ink-500">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
