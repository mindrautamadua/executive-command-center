import { kiInsights } from "@/lib/risk-data";
import { RiskInsightGrid } from "../RiskInsightGrid";

export function KiInsight() {
  return <RiskInsightGrid items={kiInsights} cols="grid-cols-3" />;
}
