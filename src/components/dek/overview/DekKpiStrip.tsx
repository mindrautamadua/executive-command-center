"use client";

import { CalendarCheck, ClipboardCheck, Gauge, ScrollText, ShieldCheck, Stamp, Users } from "lucide-react";
import { dekKpi } from "@/lib/dek-data";
import { DekKpiCards, type DekKpiCardItem } from "../DekKpiCards";
import { useSubholding } from "@/components/SubholdingProvider";
import { ScopeNote } from "@/components/ui/ScopeNote";

const ICONS = [CalendarCheck, Users, ClipboardCheck, ScrollText, Gauge, Stamp, ShieldCheck];

const items: DekKpiCardItem[] = dekKpi.map((k, i) => ({ ...k, icon: ICONS[i] }));

export function DekKpiStrip() {
  const { isFiltered } = useSubholding();

  return (
    <>
      {isFiltered && (
        <div className="mb-1.5 flex justify-end">
          <ScopeNote />
        </div>
      )}
      <DekKpiCards items={items} cols="grid-cols-7" />
    </>
  );
}
