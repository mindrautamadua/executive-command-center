import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { SdmHeader } from "@/components/sdm/SdmHeader";
import { SdmKpiStrip } from "@/components/sdm/SdmKpiStrip";
import { DistribusiKaryawan } from "@/components/sdm/DistribusiKaryawan";
import { HeadcountTrend } from "@/components/sdm/HeadcountTrend";
import { KomposisiGenerasi } from "@/components/sdm/KomposisiGenerasi";
import { TalentaUtama } from "@/components/sdm/TalentaUtama";
import { KinerjaKaryawan } from "@/components/sdm/KinerjaKaryawan";
import { Rekrutmen } from "@/components/sdm/Rekrutmen";
import { LearningDevelopment } from "@/components/sdm/LearningDevelopment";
import { EmployeeEngagement } from "@/components/sdm/EmployeeEngagement";
import { RasioGender } from "@/components/sdm/RasioGender";
import { SuksesiPosisi } from "@/components/sdm/SuksesiPosisi";
import { WorkforcePlanning } from "@/components/sdm/WorkforcePlanning";
import { SdmAlertPanel } from "@/components/sdm/SdmAlertPanel";
import { QuoteCard } from "@/components/sdm/QuoteCard";

export const metadata = { title: "SDM & Talenta — PTPN Group" };

export default function SdmTalentaPage() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <SdmHeader />
        <SdmKpiStrip />

        {/* baris 2 */}
        <div className="mx-5 mb-3 grid h-[273px] grid-cols-[minmax(0,337fr)_minmax(0,344fr)_minmax(0,290fr)_minmax(0,307fr)] grid-rows-[minmax(0,1fr)] gap-3">
          <DistribusiKaryawan />
          <HeadcountTrend />
          <KomposisiGenerasi />
          <TalentaUtama />
        </div>

        {/* baris 3 */}
        <div className="mx-5 mb-3 grid h-[240px] grid-cols-[minmax(0,270fr)_minmax(0,208fr)_minmax(0,250fr)_minmax(0,228fr)_minmax(0,307fr)] grid-rows-[minmax(0,1fr)] gap-3">
          <KinerjaKaryawan />
          <Rekrutmen />
          <LearningDevelopment />
          <EmployeeEngagement />
          <RasioGender />
        </div>

        {/* baris 4 */}
        <div className="mx-5 mb-4 grid h-[232px] grid-cols-[minmax(0,442fr)_minmax(0,288fr)_minmax(0,238fr)_minmax(0,307fr)] grid-rows-[minmax(0,1fr)] gap-3">
          <SuksesiPosisi />
          <WorkforcePlanning />
          <SdmAlertPanel />
          <QuoteCard />
        </div>
      </main>
    </div>
  );
}
