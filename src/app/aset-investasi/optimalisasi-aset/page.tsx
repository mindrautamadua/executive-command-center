import { AsetSidebar } from "@/components/aset/AsetSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { AopHeader } from "@/components/aset/optimalisasi-aset/AopHeader";
import { AopKpiStrip } from "@/components/aset/optimalisasi-aset/AopKpiStrip";
import { IdleAssetInventory } from "@/components/aset/optimalisasi-aset/IdleAssetInventory";
import { MonetizationPipeline } from "@/components/aset/optimalisasi-aset/MonetizationPipeline";
import { PartnershipDeals } from "@/components/aset/optimalisasi-aset/PartnershipDeals";
import { OptimizationValueBridge } from "@/components/aset/optimalisasi-aset/OptimizationValueBridge";
import { AssetHoldSellMatrix } from "@/components/aset/optimalisasi-aset/AssetHoldSellMatrix";
import { AopDecisionCenter } from "@/components/aset/optimalisasi-aset/AopDecisionCenter";
import { AopInsight } from "@/components/aset/optimalisasi-aset/AopInsight";
import { astDataTrust } from "@/lib/ast-core";

export const metadata = { title: "Optimalisasi Aset — PTPN Group" };

export default function OptimalisasiAsetPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <AsetSidebar active="Optimalisasi Aset" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <AopHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={astDataTrust} />
          </div>

          <AopKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,60fr)_minmax(0,40fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <IdleAssetInventory />
            <MonetizationPipeline />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,46fr)_minmax(0,54fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <PartnershipDeals />
            <OptimizationValueBridge />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <AssetHoldSellMatrix />
          </div>

          <AopDecisionCenter />

          <AopInsight />
        </div>
      </main>
    </div>
  );
}
