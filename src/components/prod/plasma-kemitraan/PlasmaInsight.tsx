import { plasmaInsights } from "@/lib/agro-data";
import { ProdInsightCard } from "../ProdInsightCard";

export function PlasmaInsight() {
  return <ProdInsightCard insights={plasmaInsights} cols={3} />;
}
