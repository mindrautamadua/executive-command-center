import { knlInsights } from "@/lib/knl-data";
import { KeuInsight } from "../KeuInsight";

export function KnlInsight() {
  return <KeuInsight items={knlInsights} />;
}
