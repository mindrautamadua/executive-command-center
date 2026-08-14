import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { DiHeader } from "@/components/di/DiHeader";
import { DiKpiStrip } from "@/components/di/DiKpiStrip";
import { KomposisiGender } from "@/components/di/KomposisiGender";
import { TrenPerempuanManajemen } from "@/components/di/TrenPerempuanManajemen";
import { PiramidaPopulasi } from "@/components/di/PiramidaPopulasi";
import { PerempuanLevelJabatan } from "@/components/di/PerempuanLevelJabatan";
import { KaryawanDisabilitas } from "@/components/di/KaryawanDisabilitas";
import { PemerataanKesempatan } from "@/components/di/PemerataanKesempatan";
import { GenderPayGap } from "@/components/di/GenderPayGap";
import { DiversityIndexUnit } from "@/components/di/DiversityIndexUnit";
import { InsightDi } from "@/components/di/InsightDi";

export const metadata = { title: "Diversity & Inclusion — PTPN Group" };

export default function DiversityInclusionPage() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar
        assistantCard="coach"
        assistantTitle="AI Insight"
        assistantText="Dapatkan insight otomatis tentang Diversity & Inclusion di organisasi Anda."
        assistantCta="Tanya AI Assistant"
      />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <DiHeader />

        <div className="mx-5 mb-4 flex flex-col gap-3">
          <DiKpiStrip />

          <div className="grid h-[262px] grid-cols-[minmax(0,366fr)_minmax(0,452fr)_minmax(0,442fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <KomposisiGender />
            <TrenPerempuanManajemen />
            <PiramidaPopulasi />
          </div>

          <div className="grid h-[222px] grid-cols-[minmax(0,366fr)_minmax(0,452fr)_minmax(0,442fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <PerempuanLevelJabatan />
            <KaryawanDisabilitas />
            <PemerataanKesempatan />
          </div>

          <div className="grid h-[234px] grid-cols-[minmax(0,366fr)_minmax(0,378fr)_minmax(0,516fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <GenderPayGap />
            <DiversityIndexUnit />
            <InsightDi />
          </div>
        </div>
      </main>
    </div>
  );
}
