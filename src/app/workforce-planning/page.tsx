import { Sparkles } from "lucide-react";
import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { WpHeader } from "@/components/wp/WpHeader";
import { WpKpiStrip } from "@/components/wp/WpKpiStrip";
import { HeadcountProjection } from "@/components/wp/HeadcountProjection";
import { KebutuhanJenjang } from "@/components/wp/KebutuhanJenjang";
import { KebutuhanFungsi } from "@/components/wp/KebutuhanFungsi";
import { GapTalentaKritis } from "@/components/wp/GapTalentaKritis";
import { SumberPemenuhan } from "@/components/wp/SumberPemenuhan";
import { SupplyDemandBalance } from "@/components/wp/SupplyDemandBalance";
import { ScenarioPlanning } from "@/components/wp/ScenarioPlanning";
import { RekomendasiStrategis } from "@/components/wp/RekomendasiStrategis";
import { wpQuote } from "@/lib/wp-data";

export const metadata = { title: "Workforce Planning — PTPN Group" };

export default function WorkforcePlanningPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar active="Workforce Planning" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <WpHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <WpKpiStrip />

          <div className="grid h-[268px] grid-cols-[minmax(0,32fr)_minmax(0,33fr)_minmax(0,35fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <HeadcountProjection />
            <KebutuhanJenjang />
            <KebutuhanFungsi />
          </div>

          <div className="grid h-[258px] grid-cols-[minmax(0,32fr)_minmax(0,34fr)_minmax(0,34fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <GapTalentaKritis />
            <SumberPemenuhan />
            <SupplyDemandBalance />
          </div>

          <div className="grid h-[248px] grid-cols-[minmax(0,64fr)_minmax(0,36fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ScenarioPlanning />
            <RekomendasiStrategis />
          </div>

          <div
            className="card anim-rise flex items-center gap-2.5 px-4 py-3"
            style={{ "--d": "180ms" } as React.CSSProperties}
          >
            <Sparkles size={14} className="shrink-0 text-ptpn-green" />
            <p className="text-[9.5px] font-semibold text-ink-700">{wpQuote}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
