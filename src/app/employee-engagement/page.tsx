import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { EngagementHeader } from "@/components/engagement/EngagementHeader";
import { EngagementKpiStrip } from "@/components/engagement/EngagementKpiStrip";
import { EngagementOverview } from "@/components/engagement/EngagementOverview";
import { TrenEngagement } from "@/components/engagement/TrenEngagement";
import { EnpsTrend } from "@/components/engagement/EnpsTrend";
import { EngagementUnit } from "@/components/engagement/EngagementUnit";
import { EngagementDemografi } from "@/components/engagement/EngagementDemografi";
import { FaktorEngagement } from "@/components/engagement/FaktorEngagement";
import { KomentarSentimen } from "@/components/engagement/KomentarSentimen";
import { PartisipasiSurvey } from "@/components/engagement/PartisipasiSurvey";
import { InsightEngagement } from "@/components/engagement/InsightEngagement";

export const metadata = { title: "Employee Engagement — PTPN Group" };

export default function EmployeeEngagementPage() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar
        assistantCard="coach"
        assistantTitle="AI Engagement Assistant"
        assistantText="Dapatkan insight dan rekomendasi untuk meningkatkan engagement di organisasi Anda."
        assistantCta="Tanya AI Assistant"
      />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <EngagementHeader />

        <div className="mx-5 mb-4 flex flex-col gap-3">
          <EngagementKpiStrip />

          <div className="grid h-[268px] grid-cols-[minmax(0,373fr)_minmax(0,415fr)_minmax(0,495fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <EngagementOverview />
            <TrenEngagement />
            <EnpsTrend />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,373fr)_minmax(0,370fr)_minmax(0,540fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <EngagementUnit />
            <EngagementDemografi />
            <FaktorEngagement />
          </div>

          <div className="grid h-[228px] grid-cols-[minmax(0,440fr)_minmax(0,348fr)_minmax(0,495fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <KomentarSentimen />
            <PartisipasiSurvey />
            <InsightEngagement />
          </div>
        </div>
      </main>
    </div>
  );
}
