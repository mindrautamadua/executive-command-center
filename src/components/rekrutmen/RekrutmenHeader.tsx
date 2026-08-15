"use client";

import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function RekrutmenHeader() {
  return (
    <ModuleHeader
      title="Rekrutmen"
      subtitle="Pantau dan kelola seluruh proses rekrutmen secara real-time"
      controls={
        <>
          <SelectBox label="Periode" value="Sem I 2026 (Jan - Jun)" width="168px" />
          <SelectBox label="Unit Organisasi" value="Semua Unit" width="158px" />
          <SelectBox label="Lokasi" value="Semua Lokasi" width="158px" />
        </>
      }
      actions={<ExportButton label="Export Dashboard" />}
    />
  );
}
