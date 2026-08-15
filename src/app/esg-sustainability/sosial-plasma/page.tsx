import { EsgSidebar } from "@/components/esg/EsgSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { SosialHeader } from "@/components/esg/sosial-plasma/SosialHeader";
import { SosialKpiStrip } from "@/components/esg/sosial-plasma/SosialKpiStrip";
import { PlasmaWelfareTrend } from "@/components/esg/sosial-plasma/PlasmaWelfareTrend";
import { PsrProgress } from "@/components/esg/sosial-plasma/PsrProgress";
import { TjslAllocation } from "@/components/esg/sosial-plasma/TjslAllocation";
import { CommunityGrievance } from "@/components/esg/sosial-plasma/CommunityGrievance";
import { HumanRightsScorecard } from "@/components/esg/sosial-plasma/HumanRightsScorecard";
import { LandConflictCompact } from "@/components/esg/sosial-plasma/LandConflictCompact";
import { SosialInsight } from "@/components/esg/sosial-plasma/SosialInsight";
import { esgDataTrust } from "@/lib/esg-data";

export const metadata = { title: "Sosial & Plasma — PTPN Group" };

export default function SosialPlasmaPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <EsgSidebar active="Sosial & Plasma" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <SosialHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={esgDataTrust} />
          </div>

          <SosialKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,36fr)_minmax(0,36fr)_minmax(0,28fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <PlasmaWelfareTrend />
            <PsrProgress />
            <TjslAllocation />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,32fr)_minmax(0,36fr)_minmax(0,32fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <CommunityGrievance />
            <HumanRightsScorecard />
            <LandConflictCompact />
          </div>

          <SosialInsight />
        </div>
      </main>
    </div>
  );
}
