import { riskInsights } from "@/lib/risk-data";
import { RiskInsightGrid } from "../RiskInsightGrid";

export function RiskInsight() {
  return <RiskInsightGrid items={riskInsights} cols="grid-cols-3" />;
}
