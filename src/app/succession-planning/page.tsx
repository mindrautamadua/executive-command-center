import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { SuksesiHeader } from "@/components/succession/SuksesiHeader";
import { SuksesiKpiStrip } from "@/components/succession/SuksesiKpiStrip";
import { NineBoxGrid } from "@/components/succession/NineBoxGrid";
import { PosisiKritisTabel } from "@/components/succession/PosisiKritisTabel";
import { PipelineKepemimpinan } from "@/components/succession/PipelineKepemimpinan";
import { TalentPoolFungsi } from "@/components/succession/TalentPoolFungsi";
import { TrenBenchStrength } from "@/components/succession/TrenBenchStrength";
import { DistribusiKesiapan } from "@/components/succession/DistribusiKesiapan";
import { RencanaAksi } from "@/components/succession/RencanaAksi";
import { KandidatSiapSekarang } from "@/components/succession/KandidatSiapSekarang";
import { InsightSuksesi } from "@/components/succession/InsightSuksesi";
import { EmergencyCoverage } from "@/components/succession/EmergencyCoverage";
import { BodDecisionCenter } from "@/components/succession/BodDecisionCenter";
import { KnowledgeTransfer } from "@/components/succession/KnowledgeTransfer";
import { SuccessorConcentration } from "@/components/succession/SuccessorConcentration";
import { DiversityPipeline } from "@/components/succession/DiversityPipeline";
import { ExternalBench } from "@/components/succession/ExternalBench";
import { TrenSuksesi } from "@/components/succession/TrenSuksesi";
import { SuksesiFootnote } from "@/components/succession/SuksesiFootnote";

export const metadata = { title: "Succession Planning — PTPN Group" };

export default function SuccessionPlanningPage() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar
        assistantCard="coach"
        assistantTitle="AI Succession Assistant"
        assistantText="Dapatkan rekomendasi talent dan analisis risiko kekosongan secara cerdas."
        assistantCta="Tanya AI Assistant"
      />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <SuksesiHeader />

        <div className="mx-5 mb-4 flex flex-col gap-3">
          <SuksesiKpiStrip />

          <div className="grid h-[296px] grid-cols-[minmax(0,360fr)_minmax(0,435fr)_minmax(0,482fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <NineBoxGrid />
            <PosisiKritisTabel />
            <PipelineKepemimpinan />
          </div>

          <div className="grid h-[218px] grid-cols-[minmax(0,360fr)_minmax(0,435fr)_minmax(0,482fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <TalentPoolFungsi />
            <TrenBenchStrength />
            <DistribusiKesiapan />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,505fr)_minmax(0,300fr)_minmax(0,472fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RencanaAksi />
            <KandidatSiapSekarang />
            <InsightSuksesi />
          </div>

          <div className="grid h-[196px] grid-cols-[minmax(0,435fr)_minmax(0,842fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <EmergencyCoverage />
            <BodDecisionCenter />
          </div>

          <div className="grid h-[212px] grid-cols-[minmax(0,460fr)_minmax(0,375fr)_minmax(0,442fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <KnowledgeTransfer />
            <SuccessorConcentration />
            <DiversityPipeline />
          </div>

          <div className="grid h-[178px] grid-cols-[minmax(0,842fr)_minmax(0,435fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ExternalBench />
            <TrenSuksesi />
          </div>

          <SuksesiFootnote />
        </div>
      </main>
    </div>
  );
}
