import { KeuSidebar } from "@/components/keu/KeuSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { KsbHeader } from "@/components/keu/struktur-biaya/KsbHeader";
import { KsbKpiStrip } from "@/components/keu/struktur-biaya/KsbKpiStrip";
import { CostStructureBreakdown } from "@/components/keu/struktur-biaya/CostStructureBreakdown";
import { UnitCostTrend } from "@/components/keu/struktur-biaya/UnitCostTrend";
import { CostPerRegional } from "@/components/keu/struktur-biaya/CostPerRegional";
import { FertilizerFuelExposure } from "@/components/keu/struktur-biaya/FertilizerFuelExposure";
import { CostSavingPrograms } from "@/components/keu/struktur-biaya/CostSavingPrograms";
import { KsbInsight } from "@/components/keu/struktur-biaya/KsbInsight";
import { keuDataTrust } from "@/lib/keu-core";

export const metadata = { title: "Struktur Biaya & HPP — PTPN Group" };

export default function StrukturBiayaPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <KeuSidebar active="Struktur Biaya & HPP" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <KsbHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={keuDataTrust} />
          </div>

          <KsbKpiStrip />

          <div className="grid h-[245px] grid-cols-[minmax(0,42fr)_minmax(0,58fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <CostStructureBreakdown />
            <UnitCostTrend />
          </div>

          <div className="grid h-[235px] grid-cols-[minmax(0,36fr)_minmax(0,32fr)_minmax(0,32fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <CostPerRegional />
            <FertilizerFuelExposure />
            <CostSavingPrograms />
          </div>

          <KsbInsight />
        </div>
      </main>
    </div>
  );
}
