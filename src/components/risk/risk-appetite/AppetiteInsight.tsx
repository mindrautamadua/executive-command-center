import { appetiteInsights } from "@/lib/risk-data";
import { RiskInsightGrid } from "../RiskInsightGrid";

export function AppetiteInsight() {
  return <RiskInsightGrid items={appetiteInsights} cols="grid-cols-3" />;
}
