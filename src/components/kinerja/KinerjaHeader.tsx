"use client";

import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KinerjaHeader() {
  return (
    <ModuleHeader
      title="Kinerja Karyawan"
      subtitle="Pantau, kelola dan tingkatkan kinerja untuk mencapai target perusahaan"
      controls={
        <>
          <SelectBox label="Periode Penilaian" value="Q2 2026 (Apr - Jun)" width="168px" />
          <SelectBox label="Unit Organisasi" value="Semua Unit" width="158px" />
          <SelectBox label="" value="PTPN Group" width="152px" />
        </>
      }
      actions={<ExportButton label="Ekspor" />}
    />
  );
}
