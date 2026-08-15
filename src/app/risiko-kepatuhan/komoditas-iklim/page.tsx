import { RiskSidebar } from "@/components/risk/RiskSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { KiHeader } from "@/components/risk/komoditas-iklim/KiHeader";
import { KiKpiStrip } from "@/components/risk/komoditas-iklim/KiKpiStrip";
import { CpoPriceBand } from "@/components/risk/komoditas-iklim/CpoPriceBand";
import { ElNinoScenario } from "@/components/risk/komoditas-iklim/ElNinoScenario";
import { RainfallAnomalyChart } from "@/components/risk/komoditas-iklim/RainfallAnomaly";
import { CommodityScenarioTable } from "@/components/risk/komoditas-iklim/CommodityScenarioTable";
import { SugarImportRisk } from "@/components/risk/komoditas-iklim/SugarImportRisk";
import { ClimateAdaptasi } from "@/components/risk/komoditas-iklim/ClimateAdaptasi";
import { KiDecisionCenter } from "@/components/risk/komoditas-iklim/KiDecisionCenter";
import { KiInsight } from "@/components/risk/komoditas-iklim/KiInsight";
import { riskDataTrust } from "@/lib/risk-data";

export const metadata = { title: "Risiko Komoditas & Iklim — PTPN Group" };

export default function KomoditasIklimPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <RiskSidebar active="Risiko Komoditas & Iklim" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <KiHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={riskDataTrust} />
          </div>

          <KiKpiStrip />

          {/* Eksposur harga & skenario iklim */}
          <div className="grid h-[250px] grid-cols-[minmax(0,58fr)_minmax(0,42fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <CpoPriceBand />
            <ElNinoScenario />
          </div>

          {/* Anomali iklim & sensitivitas komoditas */}
          <div className="grid h-[240px] grid-cols-[minmax(0,38fr)_minmax(0,62fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RainfallAnomalyChart />
            <CommodityScenarioTable />
          </div>

          {/* Risiko gula, adaptasi, dan keputusan mitigasi */}
          <div className="grid h-[230px] grid-cols-[minmax(0,28fr)_minmax(0,38fr)_minmax(0,34fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SugarImportRisk />
            <ClimateAdaptasi />
            <KiDecisionCenter />
          </div>

          <KiInsight />
        </div>
      </main>
    </div>
  );
}
