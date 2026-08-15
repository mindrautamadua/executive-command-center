import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { DiHeader } from "@/components/di/DiHeader";
import { DiKpiStrip } from "@/components/di/DiKpiStrip";
import { KomposisiGender } from "@/components/di/KomposisiGender";
import { TrenPerempuanManajemen } from "@/components/di/TrenPerempuanManajemen";
import { PiramidaPopulasi } from "@/components/di/PiramidaPopulasi";
import { GenderLeadershipFunnel } from "@/components/di/GenderLeadershipFunnel";
import { TargetTrajectory } from "@/components/di/TargetTrajectory";
import { KaryawanDisabilitas } from "@/components/di/KaryawanDisabilitas";
import { EquityOfOpportunity } from "@/components/di/EquityOfOpportunity";
import { GenderPayGap } from "@/components/di/GenderPayGap";
import { FemaleTalentPipeline } from "@/components/di/FemaleTalentPipeline";
import { DeiRiskMatrix } from "@/components/di/DeiRiskMatrix";
import { DeiActionTracker } from "@/components/di/DeiActionTracker";
import { InsightDi } from "@/components/di/InsightDi";
import { DiFootnote } from "@/components/di/DiFootnote";

export const metadata = { title: "Diversity, Equity & Inclusion — PTPN Group" };

export default function DiversityInclusionPage() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar
        assistantCard="coach"
        assistantTitle="AI Insight"
        assistantText="Dapatkan insight otomatis tentang Diversity, Equity & Inclusion di organisasi Anda."
        assistantCta="Tanya AI Assistant"
      />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <DiHeader />

        <div className="mx-5 mb-4 flex flex-col gap-3">
          <DiKpiStrip />

          {/* D — Representation: siapa yang terwakili */}
          <div className="grid h-[262px] grid-cols-[minmax(0,366fr)_minmax(0,452fr)_minmax(0,442fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <KomposisiGender />
            <TrenPerempuanManajemen />
            <PiramidaPopulasi />
          </div>

          {/* Leadership pipeline: leakage, trajectory target, dan disabilitas */}
          <div className="grid h-[252px] grid-cols-[minmax(0,452fr)_minmax(0,404fr)_minmax(0,404fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <GenderLeadershipFunnel />
            <TargetTrajectory />
            <KaryawanDisabilitas />
          </div>

          {/* E — Equity: kesempatan, gaji, dan pipeline talenta perempuan */}
          <div className="grid h-[232px] grid-cols-[minmax(0,452fr)_minmax(0,404fr)_minmax(0,404fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <EquityOfOpportunity />
            <GenderPayGap />
            <FemaleTalentPipeline />
          </div>

          {/* I & O — Inclusion per unit, akuntabilitas, dan intelligence */}
          <div className="grid h-[240px] grid-cols-[minmax(0,366fr)_minmax(0,428fr)_minmax(0,466fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <DeiRiskMatrix />
            <DeiActionTracker />
            <InsightDi />
          </div>

          <DiFootnote />
        </div>
      </main>
    </div>
  );
}
