import { Download } from "lucide-react";
import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { SdmHeader } from "@/components/sdm/SdmHeader";
import { HcKpiStrip } from "@/components/hc/HcKpiStrip";
import { StrategicAlignment } from "@/components/hc/StrategicAlignment";
import { PeopleRiskRadar } from "@/components/hc/PeopleRiskRadar";
import { PeopleMathHpi } from "@/components/hc/PeopleMathHpi";
import { BodDecisionCenter } from "@/components/hc/BodDecisionCenter";
import { PeopleProductivity } from "@/components/hc/PeopleProductivity";
import { ScenarioSimulation } from "@/components/hc/ScenarioSimulation";
import { SkillsIntelligence } from "@/components/hc/SkillsIntelligence";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { TalentPortfolio } from "@/components/hc/TalentPortfolio";
import { AlertsNotifications } from "@/components/hc/AlertsNotifications";
import { AiHrAssistant } from "@/components/hc/AiHrAssistant";

export const metadata = { title: "HC Executive Command Center — PTPN Group" };

export default function SdmTalentaPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar active="Executive Overview" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <SdmHeader />

        <div className="px-5 pb-5">
          <DataTrustStrip />
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-[10px] font-extrabold uppercase tracking-[0.05em] text-ink-900">
              1. Key Strategic KPI
            </h2>
            <button className="flex items-center gap-1.5 rounded-lg bg-ptpn-green px-3 py-[7px] text-[10px] font-semibold text-white shadow-pill transition-opacity hover:opacity-90">
              <Download size={12} />
              Export Dashboard
            </button>
          </div>

          <div className="grid grid-cols-[minmax(0,1fr)_330px] items-start gap-3">
            {/* kolom utama */}
            <div className="flex min-w-0 flex-col gap-3">
              <HcKpiStrip />
              <div className="grid grid-cols-[minmax(0,52fr)_minmax(0,48fr)] items-stretch gap-3">
                <PeopleRiskRadar />
                <PeopleMathHpi />
              </div>
              <div className="grid grid-cols-[minmax(0,46fr)_minmax(0,54fr)] items-stretch gap-3">
                <PeopleProductivity />
                <ScenarioSimulation />
              </div>
              <SkillsIntelligence />
              <AlertsNotifications />
            </div>

            {/* rail kanan */}
            <div className="flex min-w-0 flex-col gap-3">
              <StrategicAlignment />
              <BodDecisionCenter />
              <TalentPortfolio />
              <AiHrAssistant />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
