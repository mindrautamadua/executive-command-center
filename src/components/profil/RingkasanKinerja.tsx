import { TrendingUp } from "lucide-react";
import { kinerja } from "@/lib/profil-data";

function DonutSkor() {
  const size = 128;
  const stroke = 13;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#eef2f6" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#1a9c5b"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${(c * kinerja.pct) / 100} ${c}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
        <span className="text-[30px] font-extrabold text-ink-900">{kinerja.skor}</span>
        <span className="mt-1 text-[9.5px] text-ink-400">{kinerja.maks}</span>
      </div>
    </div>
  );
}

export function RingkasanKinerja() {
  return (
    <div className="card flex h-full flex-col px-4 pb-4 pt-3.5">
      <h3 className="text-[11px] font-bold text-ink-900">Ringkasan Kinerja 2025</h3>

      <div className="flex min-h-0 flex-1 items-center gap-4 py-3">
        <DonutSkor />
        <div className="leading-tight">
          <div className="text-[12px] font-bold text-[#16a34a]">{kinerja.label}</div>
          <div className="mt-1 text-[9.5px] text-ink-500">{kinerja.deskripsi}</div>
          <div className="mt-2 flex items-center gap-1 text-[9.5px] font-semibold text-[#16a34a]">
            <TrendingUp size={11} />
            {kinerja.delta}
          </div>
        </div>
      </div>

      <button className="w-full rounded-lg border border-[#e3e9ef] py-[7px] text-[10px] font-semibold text-ink-700 transition-colors hover:bg-[#f5f8fa]">
        Lihat Detail Kinerja
      </button>
    </div>
  );
}
