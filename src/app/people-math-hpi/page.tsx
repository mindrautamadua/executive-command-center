import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { PmHeader } from "@/components/pm/PmHeader";
import { PmKpiStrip } from "@/components/pm/PmKpiStrip";
import { PmCoverageStrip } from "@/components/pm/PmCoverageStrip";
import { DimensionScoreCard } from "@/components/pm/DimensionScoreCard";
import { HpiBemOverviewCard } from "@/components/pm/HpiBemOverviewCard";
import { PerformanceGapCard } from "@/components/pm/PerformanceGapCard";
import { ProfileClusterCard } from "@/components/pm/ProfileClusterCard";
import { RootCauseCard } from "@/components/pm/RootCauseCard";
import { PmIntelligence } from "@/components/pm/PmIntelligence";
import { InterventionPortfolioCard } from "@/components/pm/InterventionPortfolioCard";
import { ClusterIntelligenceCard } from "@/components/pm/ClusterIntelligenceCard";
import { OutcomeTrackingCard } from "@/components/pm/OutcomeTrackingCard";
import { EmployeeHpiProfileCard } from "@/components/pm/EmployeeHpiProfileCard";
import { PmFootnote } from "@/components/pm/PmFootnote";

export const metadata = { title: "People Math & HPI — PTPN Group" };

export default function PeopleMathHpiPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar active="People Math & HPI" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <PmHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <PmKpiStrip />

          <PmCoverageStrip />

          <PmIntelligence />

          <div className="grid grid-cols-[minmax(0,30fr)_minmax(0,36fr)_minmax(0,34fr)] gap-3">
            <DimensionScoreCard />
            <HpiBemOverviewCard />
            <PerformanceGapCard />
          </div>

          <div className="grid grid-cols-[minmax(0,38fr)_minmax(0,62fr)] gap-3">
            <ProfileClusterCard />
            <RootCauseCard />
          </div>

          <InterventionPortfolioCard />

          <OutcomeTrackingCard />

          <ClusterIntelligenceCard />

          <EmployeeHpiProfileCard />

          <PmFootnote />
        </div>
      </main>
    </div>
  );
}
