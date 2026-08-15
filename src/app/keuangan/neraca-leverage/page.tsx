import { KeuSidebar } from "@/components/keu/KeuSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { KnlHeader } from "@/components/keu/neraca-leverage/KnlHeader";
import { KnlKpiStrip } from "@/components/keu/neraca-leverage/KnlKpiStrip";
import { BalanceSheetComposition } from "@/components/keu/neraca-leverage/BalanceSheetComposition";
import { DebtMaturityProfile } from "@/components/keu/neraca-leverage/DebtMaturityProfile";
import { LeverageTrend } from "@/components/keu/neraca-leverage/LeverageTrend";
import { CovenantMonitor } from "@/components/keu/neraca-leverage/CovenantMonitor";
import { DebtByLenderCurrency } from "@/components/keu/neraca-leverage/DebtByLenderCurrency";
import { KnlInsight } from "@/components/keu/neraca-leverage/KnlInsight";
import { keuDataTrust } from "@/lib/keu-core";

export const metadata = { title: "Neraca & Leverage — PTPN Group" };

export default function NeracaLeveragePage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <KeuSidebar active="Neraca & Leverage" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <KnlHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={keuDataTrust} />
          </div>

          <KnlKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,38fr)_minmax(0,31fr)_minmax(0,31fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <BalanceSheetComposition />
            <DebtMaturityProfile />
            <LeverageTrend />
          </div>

          <div className="grid h-[235px] grid-cols-[minmax(0,45fr)_minmax(0,55fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <CovenantMonitor />
            <DebtByLenderCurrency />
          </div>

          <KnlInsight />
        </div>
      </main>
    </div>
  );
}
