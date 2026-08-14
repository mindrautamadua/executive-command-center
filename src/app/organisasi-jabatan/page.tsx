import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { OrgHeader } from "@/components/org/OrgHeader";
import { RingkasanOrganisasi } from "@/components/org/RingkasanOrganisasi";
import { StrukturOrganisasi } from "@/components/org/StrukturOrganisasi";
import { DistribusiUnit } from "@/components/org/DistribusiUnit";
import { AnalisisJabatan } from "@/components/org/AnalisisJabatan";
import { JabatanKosongKritis } from "@/components/org/JabatanKosongKritis";
import { SpanOfControl } from "@/components/org/SpanOfControl";
import { TingkatOrganisasi } from "@/components/org/TingkatOrganisasi";
import { StatusPengisian } from "@/components/org/StatusPengisian";
import { PerubahanOrganisasi } from "@/components/org/PerubahanOrganisasi";
import { MappingJabatanKritis } from "@/components/org/MappingJabatanKritis";
import { OrgInsightAi } from "@/components/org/OrgInsightAi";

export const metadata = { title: "Organisasi & Jabatan — PTPN Group" };

export default function OrganisasiJabatanPage() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar
        assistantPlaceholder="Tanya tentang struktur organisasi, span of control, atau analisis jabatan..."
      />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <OrgHeader />

        <div className="mx-5 mb-4 flex flex-col gap-3">
          <RingkasanOrganisasi />

          <div className="grid h-[378px] grid-cols-[minmax(0,532fr)_minmax(0,375fr)_minmax(0,372fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <StrukturOrganisasi />
            <DistribusiUnit />
            <div className="flex min-h-0 flex-col gap-3">
              <AnalisisJabatan />
              <JabatanKosongKritis />
            </div>
          </div>

          <div className="grid h-[232px] grid-cols-[minmax(0,302fr)_minmax(0,270fr)_minmax(0,330fr)_minmax(0,372fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SpanOfControl />
            <TingkatOrganisasi />
            <StatusPengisian />
            <PerubahanOrganisasi />
          </div>

          <div className="grid h-[195px] grid-cols-[minmax(0,917fr)_minmax(0,372fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <MappingJabatanKritis />
            <OrgInsightAi />
          </div>
        </div>
      </main>
    </div>
  );
}
