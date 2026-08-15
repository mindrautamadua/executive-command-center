import { counterpartyExposure } from "@/lib/kontrak-buyer-data";
import { SectionHead } from "@/components/hc/SectionHead";
import { ToneBadge, type BadgeTone } from "@/components/shared/ToneBadge";

const RATING_TONE: Record<string, BadgeTone> = {
  A: "good",
  "A−": "good",
  BBB: "warn",
  BB: "bad",
  "—": "neutral",
};

/** Eksposur outstanding per counterparty + rating internal. */
export function CounterpartyExposure() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "150ms" } as React.CSSProperties}
    >
      <SectionHead title="Counterparty Exposure" action="Lihat Detail" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Piutang &amp; delivery in-transit per counterparty (rating internal)
      </p>

      <div className="mt-2 grid grid-cols-[minmax(0,1fr)_60px_44px_minmax(0,1.15fr)] items-center gap-x-2 text-[8px] font-semibold uppercase tracking-[0.04em] text-ink-400">
        <span>Counterparty</span>
        <span className="text-right">Eksposur</span>
        <span className="text-right">Rating</span>
        <span>Catatan</span>
      </div>

      <ul className="mt-1 flex min-h-0 flex-1 flex-col justify-between gap-1">
        {counterpartyExposure.map((c) => (
          <li
            key={c.counterparty}
            className="grid grid-cols-[minmax(0,1fr)_60px_44px_minmax(0,1.15fr)] items-center gap-x-2 rounded-lg border border-[#eef2f6] bg-[#fbfcfd] px-2.5 py-[5px]"
          >
            <span className="truncate text-[9.5px] font-extrabold text-ink-900">
              {c.counterparty}
            </span>
            <span className="text-right text-[9px] font-extrabold text-ink-900">{c.nilai}</span>
            <span className="flex justify-end">
              <ToneBadge label={c.rating} tone={RATING_TONE[c.rating] ?? "neutral"} />
            </span>
            <span className="truncate text-[8.5px] text-ink-500" title={c.catatan}>
              {c.catatan}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-1.5 truncate text-[8px] text-ink-400">
        Total eksposur Rp 6,22 T · 37 counterparty · limit individual di luar top-5 &lt; Rp 150 M.
      </p>
    </div>
  );
}
