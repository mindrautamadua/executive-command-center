import { kplInsights } from "@/lib/kpl-data";
import { KeuInsight } from "../KeuInsight";
import { ScopeNote } from "@/components/ui/ScopeNote";

/** Insight naratif tingkat grup (menyandingkan beberapa subholding sekaligus). */
export function KplInsight() {
  return (
    <div className="flex flex-col gap-1.5">
      <ScopeNote className="self-start" />
      <KeuInsight items={kplInsights} />
    </div>
  );
}
