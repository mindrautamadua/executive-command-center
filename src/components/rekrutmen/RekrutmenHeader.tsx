"use client";

import { UserPlus } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function RekrutmenHeader() {
  return (
    <ModuleHeader
      icon={<UserPlus size={19} strokeWidth={1.9} />}
      title="Rekrutmen"
      subtitle="Pantau dan kelola seluruh proses rekrutmen secara real-time"
      controls={
        <>
          <SelectBox label="Periode" value="Sem I 2026 (Jan - Jun)" width="168px" />
          <SelectBox label="Unit Organisasi" value="Semua Unit" width="158px" />
          <SelectBox label="Lokasi" value="Semua Lokasi" width="158px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
