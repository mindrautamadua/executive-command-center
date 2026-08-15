import { albKpi } from "@/lib/alb-data";
import { AsetKpiCards } from "../AsetKpiCards";

export function AlbKpiStrip() {
  return <AsetKpiCards items={albKpi} cols="grid-cols-5" />;
}
