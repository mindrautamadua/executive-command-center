import { RiskSidebar } from "@/components/risk/RiskSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { KepHeader } from "@/components/risk/kepatuhan-regulasi/KepHeader";
import { KepKpiStrip } from "@/components/risk/kepatuhan-regulasi/KepKpiStrip";
import { ObligationByDomain } from "@/components/risk/kepatuhan-regulasi/ObligationByDomain";
import { RegulatoryChangeRadar } from "@/components/risk/kepatuhan-regulasi/RegulatoryChangeRadar";
import { DmoDpoTracker } from "@/components/risk/kepatuhan-regulasi/DmoDpoTracker";
import { HguPortfolio } from "@/components/risk/kepatuhan-regulasi/HguPortfolio";
import { ComplianceBySubholding } from "@/components/risk/kepatuhan-regulasi/ComplianceBySubholding";
import { SanctionLog } from "@/components/risk/kepatuhan-regulasi/SanctionLog";
import { KepInsight } from "@/components/risk/kepatuhan-regulasi/KepInsight";
import { riskDataTrust } from "@/lib/risk-data";

export const metadata = { title: "Kepatuhan Regulasi — PTPN Group" };

export default function KepatuhanRegulasiPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <RiskSidebar active="Kepatuhan Regulasi" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <KepHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={riskDataTrust} />
          </div>

          <KepKpiStrip />

          {/* Peta kewajiban & pipeline regulasi */}
          <div className="grid h-[250px] grid-cols-[minmax(0,48fr)_minmax(0,52fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ObligationByDomain />
            <RegulatoryChangeRadar />
          </div>

          {/* Kewajiban pasar domestik & legalitas lahan */}
          <div className="grid h-[240px] grid-cols-[minmax(0,52fr)_minmax(0,48fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <DmoDpoTracker />
            <HguPortfolio />
          </div>

          {/* Kinerja kepatuhan per entitas & sanksi */}
          <div className="grid h-[225px] grid-cols-[minmax(0,55fr)_minmax(0,45fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ComplianceBySubholding />
            <SanctionLog />
          </div>

          <KepInsight />
        </div>
      </main>
    </div>
  );
}
