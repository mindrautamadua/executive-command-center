import { AppShell } from "@/components/AppShell";
import { KpiStrip } from "@/components/KpiStrip";
import { OperasionalCard } from "@/components/OperasionalCard";
import { KomoditasUtama } from "@/components/KomoditasUtama";
import { IndonesiaMap } from "@/components/IndonesiaMap";
import { KinerjaRegional } from "@/components/KinerjaRegional";
import { AlertPanel } from "@/components/AlertPanel";
import { InisiatifStrategis } from "@/components/InisiatifStrategis";
import { BeritaInformasi } from "@/components/BeritaInformasi";
import { TrendKeuangan } from "@/components/TrendKeuangan";
import { KomposisiPenjualan } from "@/components/KomposisiPenjualan";
import { KinerjaProduksi } from "@/components/KinerjaProduksi";
import { KinerjaSdm } from "@/components/KinerjaSdm";
import { KpiStrategis } from "@/components/KpiStrategis";
import { AnalitikPrediktif } from "@/components/AnalitikPrediktif";
import { AiInsight } from "@/components/AiInsight";

export default function Page() {
  return (
    <AppShell>
      <KpiStrip />

      {/* main grid + right rail */}
      <div className="mx-5 grid h-[548px] grid-cols-[minmax(0,1fr)_320px] grid-rows-[minmax(0,1fr)] gap-3">
        <div className="flex min-h-0 min-w-0 flex-col gap-3">
          {/* row 1 — operasional / peta / regional */}
          <div className="grid h-[300px] shrink-0 grid-cols-[minmax(0,235fr)_minmax(0,388fr)_minmax(0,354fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <div className="flex min-h-0 flex-col gap-3">
              <OperasionalCard />
              <KomoditasUtama />
            </div>
            <IndonesiaMap />
            <KinerjaRegional />
          </div>

          {/* row 2 — 4 kartu grafik */}
          <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,275fr)_minmax(0,220fr)_minmax(0,237fr)_minmax(0,217fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <TrendKeuangan />
            <KomposisiPenjualan />
            <KinerjaProduksi />
            <KinerjaSdm />
          </div>
        </div>

        <aside className="flex min-h-0 flex-col gap-3">
          <AlertPanel />
          <InisiatifStrategis />
          <BeritaInformasi />
        </aside>
      </div>

      {/* row 3 — kpi / prediktif / ai */}
      <div className="mx-5 mb-2 mt-2 grid h-[142px] grid-cols-[minmax(0,600fr)_minmax(0,412fr)_minmax(0,282fr)] grid-rows-[minmax(0,1fr)] gap-3">
        <KpiStrategis />
        <AnalitikPrediktif />
        <AiInsight />
      </div>
    </AppShell>
  );
}
