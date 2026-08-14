import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { AbsensiHeader } from "@/components/absensi/AbsensiHeader";
import { AbsensiKpiStrip } from "@/components/absensi/AbsensiKpiStrip";
import { RingkasanKehadiran } from "@/components/absensi/RingkasanKehadiran";
import { TrenKehadiran } from "@/components/absensi/TrenKehadiran";
import { KehadiranUnitOrganisasi } from "@/components/absensi/KehadiranUnitOrganisasi";
import { KehadiranLokasi } from "@/components/absensi/KehadiranLokasi";
import { PolaKehadiranHari } from "@/components/absensi/PolaKehadiranHari";
import { Keterlambatan } from "@/components/absensi/Keterlambatan";
import { StatusHariIni } from "@/components/absensi/StatusHariIni";
import { RekapKehadiran } from "@/components/absensi/RekapKehadiran";
import { InsightAbsensi } from "@/components/absensi/InsightAbsensi";
import { KalenderKehadiran } from "@/components/absensi/KalenderKehadiran";

export const metadata = { title: "Absensi & Kehadiran — PTPN Group" };

export default function AbsensiKehadiranPage() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar
        active="Absensi & Kehadiran"
        assistantCard="coach"
        assistantTitle="AI Attendance Assistant"
        assistantText="Butuh insight kehadiran atau rekomendasi peningkatan disiplin? Tanya AI Assistant sekarang."
        assistantCta="Tanya AI Assistant"
      />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <AbsensiHeader />

        <div className="mx-5 mb-4 flex flex-col gap-3">
          <AbsensiKpiStrip />

          <div className="grid h-[272px] grid-cols-[minmax(0,383fr)_minmax(0,450fr)_minmax(0,449fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RingkasanKehadiran />
            <TrenKehadiran />
            <KehadiranUnitOrganisasi />
          </div>

          <div className="grid h-[236px] grid-cols-[minmax(0,378fr)_minmax(0,355fr)_minmax(0,326fr)_minmax(0,214fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <KehadiranLokasi />
            <PolaKehadiranHari />
            <Keterlambatan />
            <StatusHariIni />
          </div>

          <div className="grid h-[228px] grid-cols-[minmax(0,552fr)_minmax(0,368fr)_minmax(0,367fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RekapKehadiran />
            <InsightAbsensi />
            <KalenderKehadiran />
          </div>
        </div>
      </main>
    </div>
  );
}
