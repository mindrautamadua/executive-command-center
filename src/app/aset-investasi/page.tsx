import { AsetSidebar } from "@/components/aset/AsetSidebar";
import { AsetHeader } from "@/components/aset/AsetHeader";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { AstKpiStrip } from "@/components/aset/overview/AstKpiStrip";
import { AssetIntelligence } from "@/components/aset/overview/AssetIntelligence";
import { LandBankComposition } from "@/components/aset/overview/LandBankComposition";
import { AssetRiskRadar } from "@/components/aset/overview/AssetRiskRadar";
import { AssetValueTrend } from "@/components/aset/overview/AssetValueTrend";
import { UtilizationSnapshot } from "@/components/aset/overview/UtilizationSnapshot";
import { AstAlerts } from "@/components/aset/overview/AstAlerts";
import { AstStrategicAlignment } from "@/components/aset/overview/AstStrategicAlignment";
import { AstDecisionCenter } from "@/components/aset/overview/AstDecisionCenter";
import { AstInsight } from "@/components/aset/overview/AstInsight";
import { astDataTrust } from "@/lib/ast-core";

export const metadata = { title: "Aset & Investasi — PTPN Group" };

export default function AsetInvestasiPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <AsetSidebar active="Executive Overview" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <AsetHeader />

        <div className="px-5 pb-5">
          <DataTrustStrip data={astDataTrust} />

          <div className="grid grid-cols-[minmax(0,1fr)_330px] items-start gap-3">
            {/* kolom utama */}
            <div className="flex min-w-0 flex-col gap-3">
              <AstKpiStrip />
              <AssetIntelligence />
              <div className="grid h-[250px] grid-cols-[minmax(0,54fr)_minmax(0,46fr)] grid-rows-[minmax(0,1fr)] gap-3">
                <LandBankComposition />
                <AssetRiskRadar />
              </div>
              <div className="grid h-[250px] grid-cols-[minmax(0,52fr)_minmax(0,48fr)] grid-rows-[minmax(0,1fr)] gap-3">
                <AssetValueTrend />
                <UtilizationSnapshot />
              </div>
              <AstAlerts />
            </div>

            {/* rail kanan */}
            <div className="flex min-w-0 flex-col gap-3">
              <AstStrategicAlignment />
              <AstDecisionCenter />
            </div>
          </div>

          <div className="mt-3">
            <AstInsight />
          </div>
        </div>
      </main>
    </div>
  );
}
