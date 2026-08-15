import { asgKpi } from "@/lib/asg-data";
import { AsetKpiCards } from "../AsetKpiCards";

export function AsgKpiStrip() {
  return <AsetKpiCards items={asgKpi} cols="grid-cols-5" />;
}
