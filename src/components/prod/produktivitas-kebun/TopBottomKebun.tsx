import { bottomKebun, topKebun, type KebunYield } from "@/lib/produksi-data";
import { SectionHead } from "../../hc/SectionHead";

const num = (v: number) =>
  v.toLocaleString("id-ID", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function KebunList({ title, items, tone }: { title: string; items: KebunYield[]; tone: "good" | "bad" }) {
  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col">
      <div className="flex items-center justify-between gap-2">
        <span
          className={`text-[8.5px] font-extrabold uppercase tracking-[0.04em] ${
            tone === "good" ? "text-ptpn-green" : "text-[#ef4444]"
          }`}
        >
          {title}
        </span>
        <span className="text-[7.5px] font-semibold uppercase tracking-[0.04em] text-ink-400">
          Yield t/ha
        </span>
      </div>
      <ul className="mt-1 flex min-h-0 flex-1 flex-col justify-between gap-1">
        {items.map((k) => (
          <li
            key={k.kebun}
            className="flex items-center gap-2 rounded-lg border border-[#eef2f6] bg-[#fbfcfd] px-2 py-1"
          >
            <span className="min-w-0 flex-1 leading-[1.25]">
              <span className="flex items-baseline gap-1.5">
                <span className="truncate text-[9px] font-extrabold text-ink-900">{k.kebun}</span>
                <span className="shrink-0 text-[7.5px] text-ink-400">{k.regional}</span>
              </span>
              <span className="block truncate text-[7.5px] text-ink-500">{k.driver}</span>
            </span>
            <span
              className={`shrink-0 text-[10px] font-extrabold ${
                tone === "good" ? "text-ptpn-green" : "text-[#ef4444]"
              }`}
            >
              {num(k.yieldTonHa)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TopBottomKebun() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <SectionHead title="Top & Bottom 5 Kebun" action="Lihat Detail" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Yield TBS Terbaik vs Tertinggal beserta Faktor Dominan
      </p>

      <div className="mt-2 flex min-h-0 flex-1 gap-3">
        <KebunList title="Top 5 Kebun" items={topKebun} tone="good" />
        <KebunList title="Bottom 5 Kebun" items={bottomKebun} tone="bad" />
      </div>
    </div>
  );
}
