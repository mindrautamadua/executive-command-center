"use client";

import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";
import { MethodologyInfo } from "./MethodologyInfo";

export function PmHeader() {
  return (
    <ModuleHeader
      title={<>People Math &amp; HPI Overview</>}
      titleExtra={<MethodologyInfo />}
      subtitle="Memahami Pola Individu dan Pengungkit Performance untuk Intervensi yang Tepat"
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Level Organisasi" value="PTPN Group (Holding)" width="200px" />
        </>
      }
    />
  );
}
