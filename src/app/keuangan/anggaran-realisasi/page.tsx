import { KeuSidebar } from "@/components/keu/KeuSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { KbaHeader } from "@/components/keu/anggaran-realisasi/KbaHeader";
import { KbaKpiStrip } from "@/components/keu/anggaran-realisasi/KbaKpiStrip";
import { BudgetVarianceWaterfall } from "@/components/keu/anggaran-realisasi/BudgetVarianceWaterfall";
import { RkapScoreBySubholding } from "@/components/keu/anggaran-realisasi/RkapScoreBySubholding";
import { MonthlyBudgetTrack } from "@/components/keu/anggaran-realisasi/MonthlyBudgetTrack";
import { VarianceHeatmap } from "@/components/keu/anggaran-realisasi/VarianceHeatmap";
import { ForecastFullYear } from "@/components/keu/anggaran-realisasi/ForecastFullYear";
import { KbaInsight } from "@/components/keu/anggaran-realisasi/KbaInsight";
import { keuDataTrust } from "@/lib/keu-core";

export const metadata = { title: "Anggaran vs Realisasi — PTPN Group" };

export default function AnggaranRealisasiPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <KeuSidebar active="Anggaran vs Realisasi" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <KbaHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={keuDataTrust} />
          </div>

          <KbaKpiStrip />

          {/* Sumber deviasi & rapor per subholding */}
          <div className="grid h-[245px] grid-cols-[minmax(0,52fr)_minmax(0,48fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <BudgetVarianceWaterfall />
            <RkapScoreBySubholding />
          </div>

          {/* Disiplin bulanan & peta deviasi */}
          <div className="grid h-[240px] grid-cols-[minmax(0,55fr)_minmax(0,45fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <MonthlyBudgetTrack />
            <VarianceHeatmap />
          </div>

          <ForecastFullYear />

          <KbaInsight />
        </div>
      </main>
    </div>
  );
}
