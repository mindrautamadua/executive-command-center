import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { CompHeader } from "@/components/comp/CompHeader";
import { CompKpiStrip } from "@/components/comp/CompKpiStrip";
import { KomposisiTotalRewards } from "@/components/comp/KomposisiTotalRewards";
import { TrenBiayaKompensasi } from "@/components/comp/TrenBiayaKompensasi";
import { BenchmarkGaji } from "@/components/comp/BenchmarkGaji";
import { PayGapAnalisis } from "@/components/comp/PayGapAnalisis";
import { DistribusiGaji } from "@/components/comp/DistribusiGaji";
import { RealisasiKenaikanGaji } from "@/components/comp/RealisasiKenaikanGaji";
import { KomposisiBenefits } from "@/components/comp/KomposisiBenefits";
import { RingkasanUnitKompensasi } from "@/components/comp/RingkasanUnitKompensasi";
import { RasioKinerja } from "@/components/comp/RasioKinerja";
import { InsightComp } from "@/components/comp/InsightComp";

export const metadata = { title: "Compensation & Benefits — PTPN Group" };

export default function CompensationBenefitsPage() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar
        assistantCard="coach"
        assistantTitle="AI Comp Assistant"
        assistantText="Butuh insight kompensasi atau benchmark gaji? Tanya AI Assistant sekarang."
        assistantCta="Tanya AI Assistant"
      />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <CompHeader />

        <div className="mx-5 mb-4 flex flex-col gap-3">
          <CompKpiStrip />

          <div className="grid h-[266px] grid-cols-[minmax(0,380fr)_minmax(0,450fr)_minmax(0,457fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <KomposisiTotalRewards />
            <TrenBiayaKompensasi />
            <BenchmarkGaji />
          </div>

          <div className="grid h-[230px] grid-cols-[minmax(0,380fr)_minmax(0,308fr)_minmax(0,307fr)_minmax(0,283fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <PayGapAnalisis />
            <DistribusiGaji />
            <RealisasiKenaikanGaji />
            <KomposisiBenefits />
          </div>

          <div className="grid h-[216px] grid-cols-[minmax(0,495fr)_minmax(0,328fr)_minmax(0,468fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RingkasanUnitKompensasi />
            <RasioKinerja />
            <InsightComp />
          </div>
        </div>
      </main>
    </div>
  );
}
