import { HseSidebar } from "@/components/hse/HseSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { BudayaHeader } from "@/components/hse/budaya-kepatuhan/BudayaHeader";
import { BudayaKpiStrip } from "@/components/hse/budaya-kepatuhan/BudayaKpiStrip";
import { Smk3ByUnit } from "@/components/hse/budaya-kepatuhan/Smk3ByUnit";
import { AuditFindings } from "@/components/hse/budaya-kepatuhan/AuditFindings";
import { TrainingProgram } from "@/components/hse/budaya-kepatuhan/TrainingProgram";
import { InspectionCoverage } from "@/components/hse/budaya-kepatuhan/InspectionCoverage";
import { SafetyCultureIndex } from "@/components/hse/budaya-kepatuhan/SafetyCultureIndex";
import { HealthSurveillance } from "@/components/hse/budaya-kepatuhan/HealthSurveillance";
import { BudayaInsight } from "@/components/hse/budaya-kepatuhan/BudayaInsight";
import { hseDataTrust } from "@/lib/hse-data";

export const metadata = { title: "Budaya & Kepatuhan K3 — PTPN Group" };

export default function BudayaKepatuhanPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <HseSidebar active="Budaya & Kepatuhan K3" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <BudayaHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={hseDataTrust} />
          </div>

          <BudayaKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,44fr)_minmax(0,56fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <Smk3ByUnit />
            <AuditFindings />
          </div>

          <div className="grid h-[230px] grid-cols-[minmax(0,50fr)_minmax(0,50fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <TrainingProgram />
            <InspectionCoverage />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,36fr)_minmax(0,64fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SafetyCultureIndex />
            <HealthSurveillance />
          </div>

          <BudayaInsight />
        </div>
      </main>
    </div>
  );
}
