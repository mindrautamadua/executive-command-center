"use client";

import { Landmark } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function SbdHeader() {
  return (
    <ModuleHeader
      icon={<Landmark size={19} strokeWidth={1.9} />}
      title="Keputusan Direksi & Dekom"
      subtitle={<>Registrasi &amp; Tindak Lanjut Keputusan Radirsus, Radir dan Radirkom</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Status" value="Semua Status" width="160px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
