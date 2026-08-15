"use client";

import { Briefcase } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function InvHeader() {
  return (
    <ModuleHeader
      icon={<Briefcase size={19} strokeWidth={1.9} />}
      title="Portofolio Investasi"
      subtitle={<>Pipeline Proyek, Eksekusi Kurva-S &amp; Imbal Hasil Investasi Grup</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Portofolio" value="42 Proyek Aktif (Grup)" width="195px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
