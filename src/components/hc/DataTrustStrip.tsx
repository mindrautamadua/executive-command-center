import { Activity, Database, Gauge, ShieldCheck } from "lucide-react";
import { dataTrust } from "@/lib/hc-data";

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

      <div className="flex items-center gap-1.5 rounded bg-[#eef2f6] px-2 py-[3px]">
        <span className="text-[8.5px] text-ink-500">Data as-of</span>
        <span className="text-[9.5px] font-bold text-ink-900">{data.asOf}</span>
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
      <Metric icon={ShieldCheck} label="Quality" value={data.quality} />

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
