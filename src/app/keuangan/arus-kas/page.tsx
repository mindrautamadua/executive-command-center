import { KeuSidebar } from "@/components/keu/KeuSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { KasHeader } from "@/components/keu/arus-kas/KasHeader";
import { KasKpiStrip } from "@/components/keu/arus-kas/KasKpiStrip";
import { CashflowWaterfall } from "@/components/keu/arus-kas/CashflowWaterfall";
import { LiquidityRunway } from "@/components/keu/arus-kas/LiquidityRunway";
import { WorkingCapitalTrend } from "@/components/keu/arus-kas/WorkingCapitalTrend";
import { ReceivablesAging } from "@/components/keu/arus-kas/ReceivablesAging";
import { PayablesMaturity } from "@/components/keu/arus-kas/PayablesMaturity";
import { KasInsight } from "@/components/keu/arus-kas/KasInsight";
import { keuDataTrust } from "@/lib/keu-core";

export const metadata = { title: "Arus Kas & Likuiditas — PTPN Group" };

export default function ArusKasPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <KeuSidebar active="Arus Kas & Likuiditas" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <KasHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={keuDataTrust} />
          </div>

          <KasKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,55fr)_minmax(0,45fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <CashflowWaterfall />
            <LiquidityRunway />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,34fr)_minmax(0,38fr)_minmax(0,28fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <WorkingCapitalTrend />
            <ReceivablesAging />
            <PayablesMaturity />
          </div>

          <KasInsight />
        </div>
      </main>
    </div>
  );
}
