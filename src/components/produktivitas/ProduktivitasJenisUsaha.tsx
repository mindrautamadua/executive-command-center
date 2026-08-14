import { Coffee, Factory, Leaf, TreePalm, Wheat } from "lucide-react";
import { jenisUsaha } from "@/lib/produktivitas-data";

const ICONS = {
  sawit: { Icon: TreePalm, chip: "tone-green" },
  karet: { Icon: Leaf, chip: "tone-teal" },
  teh: { Icon: Coffee, chip: "tone-blue" },
  gula: { Icon: Wheat, chip: "tone-purple" },
  support: { Icon: Factory, chip: "tone-amber" },
} as const;

/** Skala index 80–140; marker hitam di atas ramp merah→hijau. */
const SCALE_MIN = 80;
const SCALE_MAX = 140;

function IndexScale({ index }: { index: number }) {
  const pos = Math.min(100, Math.max(0, ((index - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100));
  return (
    <div className="relative h-[7px] w-full max-w-[96px] rounded-full bg-gradient-to-r from-[#ef4444] via-[#f5a524] to-[#1a9c5b]">
      <span
        className="absolute top-1/2 h-[11px] w-[3px] -translate-y-1/2 rounded-sm bg-ink-900 ring-1 ring-white"
        style={{ left: `calc(${pos}% - 1.5px)` }}
      />
    </div>
  );
}

export function ProduktivitasJenisUsaha() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "180ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">3. Produktivitas Berdasarkan Jenis Usaha</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Kinerja Berdasarkan Lini Bisnis</p>

      <div className="mt-1 flex items-center border-b border-[#eef2f6] pb-[5px] text-[8.5px] font-semibold text-ink-500">
        <span className="w-[34%]">Lini Bisnis</span>
        <span className="w-[24%] text-right">Revenue / Employee (Rp)</span>
        <span className="w-[22%] text-right">Production / Employee</span>
        <span className="w-[20%] pl-4">Productivity Index</span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-around">
        {jenisUsaha.map((j) => {
          const { Icon, chip } = ICONS[j.icon];
          return (
            <div
              key={j.lini}
              className="flex items-center border-b border-[#f5f8fa] py-[5px] last:border-0"
            >
              <span className="flex w-[34%] items-center gap-2">
                <span
                  className={`${chip} flex h-6 w-6 shrink-0 items-center justify-center rounded-md`}
                >
                  <Icon size={13} strokeWidth={1.9} />
                </span>
                <span className="truncate text-[9.5px] font-semibold text-ink-900">{j.lini}</span>
              </span>
              <span className="w-[24%] text-right text-[9.5px] font-medium tabular-nums text-ink-700">
                {j.revenue}
              </span>
              <span className="w-[22%] text-right text-[9.5px] font-medium tabular-nums text-ink-700">
                {j.produksi}
              </span>
              <span className="w-[20%] pl-4">
                {j.index !== null ? (
                  <IndexScale index={j.index} />
                ) : (
                  <span className="text-[9.5px] text-ink-400">-</span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
