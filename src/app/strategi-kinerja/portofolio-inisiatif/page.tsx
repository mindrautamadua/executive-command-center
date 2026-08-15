import { StgSidebar } from "@/components/stg/StgSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { SpiHeader } from "@/components/stg/portofolio-inisiatif/SpiHeader";
import { SpiKpiStrip } from "@/components/stg/portofolio-inisiatif/SpiKpiStrip";
import { InitiativeByTheme } from "@/components/stg/portofolio-inisiatif/InitiativeByTheme";
import { InitiativeStatusBoard } from "@/components/stg/portofolio-inisiatif/InitiativeStatusBoard";
import { ImpactVsEffort } from "@/components/stg/portofolio-inisiatif/ImpactVsEffort";
import { AtRiskInitiatives } from "@/components/stg/portofolio-inisiatif/AtRiskInitiatives";
import { InitiativeFunding } from "@/components/stg/portofolio-inisiatif/InitiativeFunding";
import { SpiInsight } from "@/components/stg/portofolio-inisiatif/SpiInsight";
import { stgDataTrust } from "@/lib/stg-core";

export const metadata = { title: "Portofolio Inisiatif — PTPN Group" };

export default function PortofolioInisiatifPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <StgSidebar active="Portofolio Inisiatif" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <SpiHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={stgDataTrust} />
          </div>

          <SpiKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,38fr)_minmax(0,62fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <InitiativeByTheme />
            <InitiativeStatusBoard />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,45fr)_minmax(0,55fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ImpactVsEffort />
            <InitiativeFunding />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <AtRiskInitiatives />
          </div>

          <SpiInsight />
        </div>
      </main>
    </div>
  );
}
