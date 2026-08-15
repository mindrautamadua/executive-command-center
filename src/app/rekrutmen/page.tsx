import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { RekrutmenHeader } from "@/components/rekrutmen/RekrutmenHeader";
import { RekrutmenKpiStrip } from "@/components/rekrutmen/RekrutmenKpiStrip";
import { WorkforcePlanFulfillment } from "@/components/rekrutmen/WorkforcePlanFulfillment";
import { CriticalRoleHiring } from "@/components/rekrutmen/CriticalRoleHiring";
import { RequisitionStatus } from "@/components/rekrutmen/RequisitionStatus";
import { RekrutmenPipeline } from "@/components/rekrutmen/RekrutmenPipeline";
import { FunnelBottleneck } from "@/components/rekrutmen/FunnelBottleneck";
import { TrenRekrutmen } from "@/components/rekrutmen/TrenRekrutmen";
import { SourceQuality } from "@/components/rekrutmen/SourceQuality";
import { RekrutmenUnitOrganisasi } from "@/components/rekrutmen/RekrutmenUnitOrganisasi";
import { TimeToFillTrend } from "@/components/rekrutmen/TimeToFillTrend";
import { AktivitasTerbaru } from "@/components/rekrutmen/AktivitasTerbaru";
import { RequisitionJobFamily } from "@/components/rekrutmen/RequisitionJobFamily";
import { KualitasHire } from "@/components/rekrutmen/KualitasHire";
import { HireOutcomeCohort } from "@/components/rekrutmen/HireOutcomeCohort";
import { RekrutmenDecisionCenter } from "@/components/rekrutmen/RekrutmenDecisionCenter";

export const metadata = { title: "Rekrutmen — PTPN Group" };

/**
 * Alur naratif halaman: Demand (WP & critical role) → Execution (funnel,
 * bottleneck, tren) → Sourcing & unit → Outcome (QoH, cohort) → Decision.
 */
export default function RekrutmenPage() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <RekrutmenHeader />

        <div className="mx-5 mb-4 flex flex-col gap-3">
          <RekrutmenKpiStrip />

          <div className="grid h-[276px] grid-cols-[minmax(0,430fr)_minmax(0,450fr)_minmax(0,340fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <WorkforcePlanFulfillment />
            <CriticalRoleHiring />
            <RequisitionStatus />
          </div>

          <div className="grid h-[276px] grid-cols-[minmax(0,470fr)_minmax(0,420fr)_minmax(0,400fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RekrutmenPipeline />
            <FunnelBottleneck />
            <TrenRekrutmen />
          </div>

          <div className="grid h-[258px] grid-cols-[minmax(0,380fr)_minmax(0,330fr)_minmax(0,320fr)_minmax(0,300fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SourceQuality />
            <RekrutmenUnitOrganisasi />
            <TimeToFillTrend />
            <AktivitasTerbaru />
          </div>

          <div className="grid h-[238px] grid-cols-[minmax(0,475fr)_minmax(0,363fr)_minmax(0,447fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RequisitionJobFamily />
            <KualitasHire />
            <HireOutcomeCohort />
          </div>

          <RekrutmenDecisionCenter />
        </div>
      </main>
    </div>
  );
}
