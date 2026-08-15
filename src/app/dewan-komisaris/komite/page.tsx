import { DekSidebar } from "@/components/dek/DekSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { KomiteHeader } from "@/components/dek/komite/KomiteHeader";
import { KomiteKpiStrip } from "@/components/dek/komite/KomiteKpiStrip";
import { Committees } from "@/components/dek/komite/Committees";
import { WorkPlanProgress } from "@/components/dek/komite/WorkPlanProgress";
import { CommitteeFindings } from "@/components/dek/komite/CommitteeFindings";
import { MeetingCadence } from "@/components/dek/komite/MeetingCadence";
import { KomiteInsight } from "@/components/dek/komite/KomiteInsight";
import { dekDataTrust } from "@/lib/dek-data";

export const metadata = { title: "Komite Dewan Komisaris — PTPN Group" };

export default function KomitePage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <DekSidebar active="Komite Dewan Komisaris" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <KomiteHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={dekDataTrust} />
          </div>

          <KomiteKpiStrip />

          <div className="grid h-[270px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <Committees />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,42fr)_minmax(0,58fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <WorkPlanProgress />
            <CommitteeFindings />
          </div>

          <div className="grid h-[230px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <MeetingCadence />
          </div>

          <KomiteInsight />
        </div>
      </main>
    </div>
  );
}
