import { stgKpi } from "@/lib/stg-data";
import { StgKpiCards } from "../StgKpiCards";

/** KPI strip Executive Overview Strategi & Kinerja — 6 kartu. */
export function StgKpiStrip() {
  return <StgKpiCards items={stgKpi} cols="grid-cols-6" />;
}
