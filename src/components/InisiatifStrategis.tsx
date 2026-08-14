import { inisiatif } from "@/lib/data";

export function InisiatifStrategis() {
  return (
    <div className="card shrink-0 px-4 pb-2 pt-2">
      <div className="flex items-center justify-between">
        <h3 className="card-title">INISIATIF STRATEGIS</h3>
        <button className="link-more">Lihat semua</button>
      </div>

      <div className="mt-1.5 flex flex-col gap-[6px]">
        {inisiatif.map((it) => (
          <div key={it.label} className="flex items-center gap-2">
            <span className="w-[144px] shrink-0 whitespace-nowrap text-[10px] font-medium text-ink-700">
              {it.label}
            </span>
            <div className="h-[7px] flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#7ed957] to-[#22a45d]"
                style={{ width: `${it.value}%` }}
              />
            </div>
            <span className="w-[26px] shrink-0 text-right text-[10.5px] font-bold tabular-nums text-ink-900">
              {it.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
