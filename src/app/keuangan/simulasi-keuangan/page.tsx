import { KeuSidebar } from "@/components/keu/KeuSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { KskHeader } from "@/components/keu/simulasi-keuangan/KskHeader";
import { KskKpiStrip } from "@/components/keu/simulasi-keuangan/KskKpiStrip";
import { ScenarioAssumptionsPanel } from "@/components/keu/simulasi-keuangan/ScenarioAssumptionsPanel";
import { ScenarioComparison } from "@/components/keu/simulasi-keuangan/ScenarioComparison";
import { SensitivityTornadoFin } from "@/components/keu/simulasi-keuangan/SensitivityTornadoFin";
import { StressTestCase } from "@/components/keu/simulasi-keuangan/StressTestCase";
import { EbitdaOutcomeRange } from "@/components/keu/simulasi-keuangan/EbitdaOutcomeRange";
import { KskDecisionCenter } from "@/components/keu/simulasi-keuangan/KskDecisionCenter";
import { KskInsight } from "@/components/keu/simulasi-keuangan/KskInsight";
import { KskFootnote } from "@/components/keu/simulasi-keuangan/KskFootnote";
import { keuDataTrust } from "@/lib/keu-core";

export const metadata = { title: "Simulasi Keuangan — PTPN Group" };

export default function SimulasiKeuanganPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <KeuSidebar active="Simulasi Keuangan" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <KskHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={keuDataTrust} />
          </div>

          <KskKpiStrip />

          {/* Asumsi & perbandingan skenario */}
          <div className="grid h-[250px] grid-cols-[minmax(0,36fr)_minmax(0,64fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ScenarioAssumptionsPanel />
            <ScenarioComparison />
          </div>

          {/* Sensitivitas driver & stress test */}
          <div className="grid h-[240px] grid-cols-[minmax(0,52fr)_minmax(0,48fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SensitivityTornadoFin />
            <StressTestCase />
          </div>

          {/* Rentang hasil probabilistik */}
          <div className="grid h-[245px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)]">
            <EbitdaOutcomeRange />
          </div>

          {/* Keputusan berbasis skenario */}
          <div className="grid grid-cols-[minmax(0,52fr)_minmax(0,48fr)] gap-3">
            <KskDecisionCenter />
            <KskInsight />
          </div>

          <KskFootnote />
        </div>
      </main>
    </div>
  );
}
