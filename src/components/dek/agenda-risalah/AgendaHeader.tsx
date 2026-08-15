"use client";

import { CalendarDays } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function AgendaHeader() {
  return (
    <ModuleHeader
      icon={<CalendarDays size={19} strokeWidth={1.9} />}
      title={<>Agenda &amp; Risalah Rapat</>}
      subtitle={<>Kalender Rapat, Tema Agenda &amp; Kepatuhan Penerbitan Risalah</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Jenis Rapat" value="Seluruh Jenis Rapat" width="190px" />
          <SelectBox label="Komite" value="Seluruh Komite" width="170px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
