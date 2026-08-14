import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { KinerjaHeader } from "@/components/kinerja/KinerjaHeader";
import { KinerjaKpiStrip } from "@/components/kinerja/KinerjaKpiStrip";
import { KinerjaIntelligence } from "@/components/kinerja/KinerjaIntelligence";
import { KinerjaDecisionCenter } from "@/components/kinerja/KinerjaDecisionCenter";
import { KalibrasiRating } from "@/components/kinerja/KalibrasiRating";
import { FairnessKinerja } from "@/components/kinerja/FairnessKinerja";
import { RisikoKinerjaRadar } from "@/components/kinerja/RisikoKinerjaRadar";
import { DekomposisiScore } from "@/components/kinerja/DekomposisiScore";
import { KonversiTalenta } from "@/components/kinerja/KonversiTalenta";
import { GoalAlignment } from "@/components/kinerja/GoalAlignment";
import { ContinuousPerformance } from "@/components/kinerja/ContinuousPerformance";
import { Signal360 } from "@/components/kinerja/Signal360";
import { RewardDevelopment } from "@/components/kinerja/RewardDevelopment";
import { DistribusiKinerja } from "@/components/kinerja/DistribusiKinerja";
import { TrendOverallScore } from "@/components/kinerja/TrendOverallScore";
import { KinerjaDimensi } from "@/components/kinerja/KinerjaDimensi";
import { KinerjaUnitOrganisasi } from "@/components/kinerja/KinerjaUnitOrganisasi";
import { KinerjaLevelJabatan } from "@/components/kinerja/KinerjaLevelJabatan";
import { PencapaianTarget } from "@/components/kinerja/PencapaianTarget";
import { RingkasanKinerjaTim } from "@/components/kinerja/RingkasanKinerjaTim";
import { InsightRekomendasi } from "@/components/kinerja/InsightRekomendasi";

export const metadata = { title: "Kinerja Karyawan — PTPN Group" };

export default function KinerjaKaryawanPage() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar assistantCard="coach" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <KinerjaHeader />

        <div className="mx-5 mb-4 flex flex-col gap-3">
          <KinerjaKpiStrip />

          <KinerjaIntelligence />

          <div className="grid h-[272px] grid-cols-[minmax(0,405fr)_minmax(0,415fr)_minmax(0,475fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <DistribusiKinerja />
            <TrendOverallScore />
            <KinerjaDimensi />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,340fr)_minmax(0,480fr)_minmax(0,475fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <KinerjaUnitOrganisasi />
            <KinerjaLevelJabatan />
            <PencapaianTarget />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,52fr)_minmax(0,48fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <KalibrasiRating />
            <FairnessKinerja />
          </div>

          <RisikoKinerjaRadar />

          <div className="grid h-[240px] grid-cols-[minmax(0,46fr)_minmax(0,54fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <DekomposisiScore />
            <KonversiTalenta />
          </div>

          <div className="grid h-[248px] grid-cols-[minmax(0,50fr)_minmax(0,50fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <GoalAlignment />
            <ContinuousPerformance />
          </div>

          <div className="grid h-[224px] grid-cols-[minmax(0,46fr)_minmax(0,54fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <Signal360 />
            <RewardDevelopment />
          </div>

          <div className="grid h-[228px] grid-cols-[minmax(0,830fr)_minmax(0,475fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RingkasanKinerjaTim />
            <InsightRekomendasi />
          </div>

          <KinerjaDecisionCenter />
        </div>
      </main>
    </div>
  );
}
