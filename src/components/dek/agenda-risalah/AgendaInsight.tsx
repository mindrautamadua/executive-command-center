import { agendaInsights } from "@/lib/dek-data";
import { DekInsightGrid } from "../DekInsightGrid";

export function AgendaInsight() {
  return <DekInsightGrid items={agendaInsights} cols="grid-cols-4" />;
}
