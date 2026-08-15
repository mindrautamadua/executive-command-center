import { registerInsights } from "@/lib/risk-data";
import { RiskInsightGrid } from "../RiskInsightGrid";

export function RegisterInsight() {
  return <RiskInsightGrid items={registerInsights} cols="grid-cols-3" />;
}
