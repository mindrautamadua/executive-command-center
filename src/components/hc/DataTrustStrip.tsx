import { Activity, Database, Gauge, ShieldCheck } from "lucide-react";
import { dataTrust } from "@/lib/hc-data";
import { dataQualityBreakdown } from "@/lib/profil-data";

function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Database;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon size={12} strokeWidth={1.9} className="shrink-0 text-ink-400" />
      <span className="text-[8.5px] text-ink-500">{label}</span>
      <span className="text-[9.5px] font-bold text-ink-900">{value}</span>
    </div>
  );
}

/** Strip Data Trust: kesegaran, cakupan, kualitas, dan sumber data dashboard. */
export function DataTrustStrip({ data = dataTrust }: { data?: typeof dataTrust }) {
  return (
    <div className="card anim-rise mb-3 flex items-center gap-4 px-4 py-2">
      <span className="text-[8.5px] font-extrabold uppercase tracking-[0.05em] text-ink-400">
        Data Trust
      </span>

      {/* Hover menjelaskan beda periode data vs waktu sinkronisasi sistem. */}
      <div className="group relative flex cursor-help items-center gap-1.5 rounded bg-[#eef2f6] px-2 py-[3px]">
        <span className="text-[8.5px] text-ink-500">Data as-of</span>
        <span className="text-[9.5px] font-bold text-ink-900 underline decoration-dotted decoration-[#c6cfd8] underline-offset-2">
          {data.asOf}
        </span>
        <div className="invisible absolute left-0 top-full z-30 mt-1.5 w-[230px] rounded-xl border border-[#e3e9ef] bg-white p-3 opacity-0 shadow-cardHover transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
          <div className="space-y-1.5 text-[9px]">
            <div className="flex justify-between gap-2">
              <span className="text-ink-500">Data effective date</span>
              <span className="font-bold text-ink-900">{data.asOf}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-ink-500">System synchronization</span>
              <span className="font-bold text-ink-900">{data.lastRefresh}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-ink-500">Source</span>
              <span className="font-bold text-ink-900">{data.sources.slice(0, 2).join(", ")}</span>
            </div>
          </div>
          <p className="mt-1.5 border-t border-[#eef2f6] pt-1.5 text-[8px] leading-snug text-ink-400">
            Angka dashboard merepresentasikan periode bisnis s.d. tanggal efektif; sinkronisasi
            sistem berjalan lebih sering tanpa mengubah periode data.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <span className="relative flex h-[7px] w-[7px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ptpn-green opacity-60" />
          <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-ptpn-green" />
        </span>
        <span className="text-[8.5px] text-ink-500">Last Refresh</span>
        <span className="text-[9.5px] font-semibold text-ink-900">{data.lastRefresh}</span>
      </div>

      <Metric icon={Gauge} label="Coverage" value={data.coverage} />

      {/* Quality bisa di-hover untuk rincian dimensi kualitas data. */}
      <div className="group relative flex cursor-help items-center gap-1.5">
        <ShieldCheck size={12} strokeWidth={1.9} className="shrink-0 text-ink-400" />
        <span className="text-[8.5px] text-ink-500">Quality</span>
        <span className="text-[9.5px] font-bold text-ink-900 underline decoration-dotted decoration-[#c6cfd8] underline-offset-2">
          {data.quality}
        </span>
        <div className="invisible absolute left-0 top-full z-30 mt-1.5 w-[190px] rounded-xl border border-[#e3e9ef] bg-white p-3 opacity-0 shadow-cardHover transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
          <div className="text-[8.5px] font-extrabold uppercase tracking-[0.05em] text-ink-500">
            Rincian Data Quality
          </div>
          <div className="mt-1.5 space-y-1.5">
            {dataQualityBreakdown.map((d) => (
              <div key={d.label} className="flex items-center justify-between gap-2">
                <span className="text-[9px] text-ink-500">{d.label}</span>
                <span className="text-[9.5px] font-bold text-ink-900">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex min-w-0 items-center gap-1.5">
        <Database size={12} strokeWidth={1.9} className="shrink-0 text-ink-400" />
        <span className="text-[8.5px] text-ink-500">Sumber</span>
        <div className="flex min-w-0 items-center gap-1 overflow-hidden">
          {data.sources.map((s) => (
            <span
              key={s}
              className="shrink-0 rounded bg-[#eef2f6] px-1.5 py-[2px] text-[8px] font-semibold text-ink-700"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="ml-auto flex shrink-0 items-center gap-1.5 text-ptpn-green">
        <Activity size={11} strokeWidth={1.9} />
        <span className="text-[8.5px] font-semibold">Healthy</span>
      </div>
    </div>
  );
}
