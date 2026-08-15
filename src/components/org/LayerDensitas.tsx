import { ChevronRight, Layers, TriangleAlert } from "lucide-react";
import { SEMANTIC } from "@/lib/chart-palette";
import {
  densitasManajerial,
  layerBenchmarkMax,
  layerOrganisasi,
  unitLayerBerlebih,
} from "@/lib/org-data";

const maxLayers = Math.max(...layerOrganisasi.map((l) => l.layers));

export function LayerDensitas() {
  return (
    <div className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3">
      <h3 className="card-title-navy">Layer Manajemen &amp; Densitas</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">
        Kedalaman Struktur (benchmark ≤ {layerBenchmarkMax} layer)
      </p>

      <div className="mt-2 flex flex-col gap-[7px]">
        {layerOrganisasi.map((l, i) => {
          const over = l.layers > layerBenchmarkMax;
          return (
            <div
              key={l.scope}
              className="flex items-center gap-2"
              title={`${l.scope}: ${l.layers} layer manajemen${over ? " — di atas benchmark" : ""}`}
            >
              <span className="w-[104px] shrink-0 truncate text-[9px] text-ink-500">{l.scope}</span>
              <span className="h-[6px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
                <span
                  className="anim-grow-x block h-full rounded-full"
                  style={
                    {
                      width: `${(l.layers / maxLayers) * 100}%`,
                      background: over ? SEMANTIC.bad : SEMANTIC.good,
                      "--d": `${i * 60}ms`,
                    } as React.CSSProperties
                  }
                />
              </span>
              <span
                className="w-[14px] shrink-0 text-right text-[9.5px] font-bold tabular-nums"
                style={{ color: over ? SEMANTIC.bad : "var(--text-1)" }}
              >
                {l.layers}
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-2 flex items-center gap-1.5 text-[9px] font-medium text-ink-700">
        <TriangleAlert size={11} style={{ color: SEMANTIC.bad }} />
        {unitLayerBerlebih} unit memiliki lebih dari {layerBenchmarkMax} layer manajemen
      </p>

      <div className="mt-2 flex items-center gap-2 rounded-lg bg-[#f7f9fb] px-2.5 py-1.5">
        <Layers size={13} className="shrink-0 text-ink-400" />
        <div className="min-w-0 leading-tight">
          <span className="block text-[9px] text-ink-500">
            Densitas Manajerial (Manager ke atas)
          </span>
          <span className="text-[10.5px] font-bold text-ink-900">
            {densitasManajerial.value}
          </span>{" "}
          <span className="text-[9px] text-ink-500">
            · {densitasManajerial.detail} · {densitasManajerial.benchmark}
          </span>
        </div>
        <span className="tone-green ml-auto shrink-0 rounded-md px-2 py-[2px] text-[9px] font-semibold">
          {densitasManajerial.status}
        </span>
      </div>

      <button className="link-more mt-auto flex items-center gap-1 self-start pt-1">
        Lihat layer per unit <ChevronRight size={11} />
      </button>
    </div>
  );
}
