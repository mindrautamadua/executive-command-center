"use client";

import { ClipboardCheck } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function RekomendasiHeader() {
  return (
    <ModuleHeader
      icon={<ClipboardCheck size={19} strokeWidth={1.9} />}
      title={<>Rekomendasi &amp; Tindak Lanjut</>}
      subtitle={<>Pemantauan Rekomendasi Dewan Komisaris &amp; Tindak Lanjut Direksi</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Bidang Pengawasan" value="Seluruh Bidang" width="190px" />
          <SelectBox label="Direktorat PIC" value="Seluruh Direktorat" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
