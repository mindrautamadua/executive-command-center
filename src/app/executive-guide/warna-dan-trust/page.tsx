import { AlertTriangle } from "lucide-react";
import { GuideShell } from "@/components/guide/GuideShell";
import { GuideCard, GuideTitle, TonePill } from "@/components/guide/GuideBlocks";
import {
  redNotBad,
  statusLegend,
  timeLayers,
  timeWarning,
  trustComponents,
  trustHeadline,
  trustRules,
} from "@/lib/guide-data";

export const metadata = { title: "Warna & Trust — Executive Guide" };

const STATUS_TONE = { GREEN: "green", AMBER: "amber", RED: "red", EXTREME: "red" } as const;

export default function WarnaDanTrustPage() {
  return (
    <GuideShell
      title="Warna, Status & Data Trust"
      subtitle="Membaca sinyal warna, tingkat kepercayaan data, dan lapisan waktu"
      active="/executive-guide/warna-dan-trust"
    >
      <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
        {/* legend status */}
        <GuideCard>
          <GuideTitle kicker="Color & status">Arti Warna — Sebagai Aturan Keputusan</GuideTitle>
          <div className="flex flex-col gap-2">
            {statusLegend.map((s) => (
              <div
                key={s.code}
                className="flex items-start gap-2.5 rounded-lg border border-[#eef2f6] bg-[#f8fafc] px-3 py-2"
              >
                <span
                  className="mt-[3px] h-[10px] w-[10px] shrink-0 rounded-full"
                  style={{ backgroundColor: s.dot }}
                />
                <div className="min-w-0">
                  <div className="text-[10px] font-extrabold text-ink-900">
                    {s.code} — <span className="font-bold">{s.meaning}</span>
                  </div>
                  <div className="mt-[2px] text-[9px] leading-relaxed text-ink-500">
                    {s.implication}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GuideCard>

        {/* red ≠ bad */}
        <GuideCard>
          <GuideTitle kicker="Salah baca paling umum">Red Bukan Berarti Rugi</GuideTitle>
          <p className="mb-3 text-[9.5px] leading-relaxed text-ink-500">
            Warna mengikuti threshold deviasi/eksposur — bukan penilaian baik/buruk perusahaan.
            Tiga contoh dari data dashboard saat ini:
          </p>
          <div className="flex flex-col gap-2">
            {redNotBad.map((e) => (
              <div
                key={e.metric}
                className="rounded-lg border border-[#eef2f6] bg-[#f8fafc] px-3 py-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-ink-900">{e.metric}</span>
                  <TonePill tone={STATUS_TONE[e.status]}>{e.status}</TonePill>
                </div>
                <div className="mt-[2px] text-[9.5px] font-semibold text-ink-700">{e.reading}</div>
                <div className="mt-[2px] text-[9px] leading-relaxed text-ink-500">{e.why}</div>
              </div>
            ))}
          </div>
        </GuideCard>
      </div>

      <div className="grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,55fr)_minmax(0,45fr)]">
        {/* data trust */}
        <GuideCard>
          <GuideTitle kicker="Data trust">Membaca Data Trust Index</GuideTitle>
          <p className="mb-3 text-[9.5px] leading-relaxed text-ink-500">
            Contoh: Data Trust {trustHeadline.example} pada domain Human Capital.{" "}
            {trustHeadline.caption}
          </p>
          <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
            {trustComponents.map((c) => (
              <div key={c.label} className="border-b border-[#f0f3f6] py-1.5">
                <span className="text-[9.5px] font-extrabold text-[#1b3a6b]">{c.label}</span>
                <span className="mt-[1px] block text-[9px] leading-relaxed text-ink-500">
                  {c.desc}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-1.5">
            {trustRules.map((r) => (
              <div key={r.range} className="flex items-center gap-2.5">
                <TonePill tone={r.tone}>Trust {r.range}</TonePill>
                <span className="text-[9.5px] text-ink-700">{r.rule}</span>
              </div>
            ))}
          </div>
        </GuideCard>

        {/* lapisan waktu */}
        <GuideCard>
          <GuideTitle kicker="How to read time">Enam Lapisan Waktu</GuideTitle>
          <div className="flex flex-col gap-1.5">
            {timeLayers.map((t) => (
              <div
                key={t.label}
                className="rounded-lg border border-[#eef2f6] bg-[#f8fafc] px-3 py-2"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[9.5px] font-extrabold text-ink-900">{t.label}</span>
                  <span className="shrink-0 text-[8.5px] font-bold text-[#1b3a6b]">{t.value}</span>
                </div>
                <div className="mt-[2px] text-[9px] leading-relaxed text-ink-500">{t.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-start gap-2 rounded-lg border border-[#f5e5c8] bg-[#fdf3e0] px-3 py-2">
            <AlertTriangle size={12} className="mt-[1px] shrink-0 text-[#d98b06]" />
            <span className="text-[9px] leading-relaxed text-ink-700">{timeWarning}</span>
          </div>
        </GuideCard>
      </div>
    </GuideShell>
  );
}
