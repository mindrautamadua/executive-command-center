import { asgInsights } from "@/lib/asg-data";
import { AsetInsightGrid } from "../AsetInsightGrid";

export function AsgInsight() {
  return <AsetInsightGrid items={asgInsights} cols="grid-cols-3" />;
}
