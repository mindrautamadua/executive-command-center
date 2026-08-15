import { TikSidebar } from "@/components/tik/TikSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { ProgramHeader } from "@/components/tik/program-digital/ProgramHeader";
import { ProgramKpiStrip } from "@/components/tik/program-digital/ProgramKpiStrip";
import { ErpModuleStatus } from "@/components/tik/program-digital/ErpModuleStatus";
import { RolloutTimeline } from "@/components/tik/program-digital/RolloutTimeline";
import { AdoptionBySubholding } from "@/components/tik/program-digital/AdoptionBySubholding";
import { BenefitWaterfall } from "@/components/tik/program-digital/BenefitWaterfall";
import { DeliveryRisks } from "@/components/tik/program-digital/DeliveryRisks";
import { ProjectPortfolio } from "@/components/tik/program-digital/ProjectPortfolio";
import { ProgramInsight } from "@/components/tik/program-digital/ProgramInsight";
import { tikDataTrust } from "@/lib/tik-data";

export const metadata = { title: "Program & Delivery Digital — PTPN Group" };

export default function ProgramDigitalPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <TikSidebar active="Program & Delivery Digital" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <ProgramHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={tikDataTrust} />
          </div>

          <ProgramKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,56fr)_minmax(0,44fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ErpModuleStatus />
            <RolloutTimeline />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,42fr)_minmax(0,58fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <AdoptionBySubholding />
            <BenefitWaterfall />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,38fr)_minmax(0,62fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <DeliveryRisks />
            <ProjectPortfolio />
          </div>

          <ProgramInsight />
        </div>
      </main>
    </div>
  );
}
