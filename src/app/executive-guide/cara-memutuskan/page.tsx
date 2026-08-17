import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GuideShell } from "@/components/guide/GuideShell";
import { FlowList, GuideCard, GuideTitle, TonePill } from "@/components/guide/GuideBlocks";
import { agingGuide, decisionFramework } from "@/lib/guide-data";

export const metadata = { title: "Cara Memutuskan — Executive Guide" };

export default function CaraMemutuskanPage() {
  return (
    <GuideShell
      title="How to Decide"
      subtitle="Membaca Decision Center: dari issue sampai deadline"
      active="/executive-guide/cara-memutuskan"
    >
      <div className="grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,62fr)_minmax(0,38fr)]">
        {/* framework 8 langkah dengan contoh nyata */}
        <GuideCard>
          <GuideTitle kicker="Decision reading framework">
            Delapan Pertanyaan untuk Setiap Keputusan
          </GuideTitle>
          <p className="mb-3 text-[9.5px] leading-relaxed text-ink-500">
            Setiap kartu di Decision Center dibaca dengan urutan yang sama. Kolom contoh diambil
            langsung dari keputusan nyata yang sedang menunggu di BOD Decision Center — bukan
            ilustrasi statis.
          </p>
          <FlowList
            items={decisionFramework.map((f) => ({
              lead: f.step,
              title: f.question,
              desc: f.example,
            }))}
          />
          <Link
            href="/strategi-kinerja/keputusan-bod"
            className="mt-3 inline-flex items-center gap-1 text-[9.5px] font-bold text-ptpn-green hover:underline"
          >
            Terapkan pada antrian keputusan sekarang
            <ArrowRight size={10} />
          </Link>
        </GuideCard>

        <div className="flex flex-col gap-3">
          {/* decision aging */}
          <GuideCard>
            <GuideTitle kicker="Decision aging">Membaca Umur Keputusan</GuideTitle>
            <p className="mb-3 text-[9.5px] leading-relaxed text-ink-500">
              Setiap keputusan membawa label umur terhadap tenggatnya. Cara memprioritaskan
              antrian:
            </p>
            <div className="flex flex-col gap-2">
              {agingGuide.map((a) => (
                <div key={a.label} className="flex items-start gap-2.5">
                  <TonePill tone={a.tone}>{a.label}</TonePill>
                  <span className="min-w-0 text-[9.5px] leading-relaxed text-ink-700">
                    {a.desc}
                  </span>
                </div>
              ))}
            </div>
          </GuideCard>

          {/* prinsip prioritas */}
          <GuideCard>
            <GuideTitle kicker="Prioritize">Mana yang Didahulukan?</GuideTitle>
            <p className="text-[9.5px] leading-relaxed text-ink-700">
              Urutkan antrian bukan berdasarkan siapa yang paling lantang, tetapi berdasarkan{" "}
              <span className="font-extrabold">eksposur finansial × urgensi</span>. Keputusan
              overdue dengan eksposur terbesar selalu di atas. Dashboard bukan tempat membaca
              angka — dashboard adalah tempat <span className="font-extrabold">mengelola
              keputusan</span>.
            </p>
          </GuideCard>
        </div>
      </div>
    </GuideShell>
  );
}
