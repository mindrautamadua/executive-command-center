import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { LndHeader } from "@/components/lnd/LndHeader";
import { LndKpiStrip } from "@/components/lnd/LndKpiStrip";
import { DistribusiKompetensi } from "@/components/lnd/DistribusiKompetensi";
import { TrenJamPelatihan } from "@/components/lnd/TrenJamPelatihan";
import { LearningValueChain } from "@/components/lnd/LearningValueChain";
import { SkillGapClosure } from "@/components/lnd/SkillGapClosure";
import { LearningRoi } from "@/components/lnd/LearningRoi";
import { ProgramTipe } from "@/components/lnd/ProgramTipe";
import { TopProgram } from "@/components/lnd/TopProgram";
import { PersonalizedLearning } from "@/components/lnd/PersonalizedLearning";
import { EffectivenessUnit } from "@/components/lnd/EffectivenessUnit";
import { TopInstruktur } from "@/components/lnd/TopInstruktur";
import { InsightLnd } from "@/components/lnd/InsightLnd";
import { LndDecisionCenter } from "@/components/lnd/LndDecisionCenter";

export const metadata = { title: "Learning & Development — PTPN Group" };

export default function LearningDevelopmentPage() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <LndHeader />

        <div className="mx-5 mb-4 flex flex-col gap-3">
          <LndKpiStrip />

          <div className="grid h-[280px] grid-cols-[minmax(0,380fr)_minmax(0,473fr)_minmax(0,450fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <DistribusiKompetensi />
            <TrenJamPelatihan />
            <LearningValueChain />
          </div>

          <div className="grid h-[256px] grid-cols-[minmax(0,865fr)_minmax(0,450fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SkillGapClosure />
            <LearningRoi />
          </div>

          <div className="grid h-[208px] grid-cols-[minmax(0,380fr)_minmax(0,473fr)_minmax(0,450fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ProgramTipe />
            <TopProgram />
            <PersonalizedLearning />
          </div>

          <div className="grid h-[262px] grid-cols-[minmax(0,523fr)_minmax(0,318fr)_minmax(0,454fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <EffectivenessUnit />
            <TopInstruktur />
            <InsightLnd />
          </div>

          <LndDecisionCenter />
        </div>
      </main>
    </div>
  );
}
