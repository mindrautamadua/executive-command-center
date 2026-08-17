import { GuideShell } from "@/components/guide/GuideShell";
import { GuideCard, GuideTitle } from "@/components/guide/GuideBlocks";
import { ExecutiveCase, type CaseQuestion } from "@/components/guide/ExecutiveCase";

export const metadata = { title: "Kasus Eksekutif — Executive Guide" };

/**
 * Kasus dibangun dari data real dashboard (gap Regional 4) — bukan hipotetis.
 * Executive Analysis di tiap pertanyaan merangkum reasoning yang tersebar di
 * alert, AI Insight, Impact Chain, dan People Capability.
 */
const CASE_QUESTIONS: CaseQuestion[] = [
  {
    q: "Apa yang Anda lihat? (fakta, bukan interpretasi)",
    analysis:
      "Produksi CPO Regional 4 kurang 30 rb ton vs RKAP YTD; pendapatan regional −2,3% vs 2025 — satu-satunya regional negatif; empat regional lain tumbuh. Ini fakta yang bisa diverifikasi, belum ada penyebab.",
  },
  {
    q: "Menurut Anda apa penyebabnya? Struktural atau temporer?",
    analysis:
      "Dua driver operasional: rotasi panen terganggu dan utilisasi PKS di bawah target — keduanya controllable (bukan cuaca/harga). Diperparah faktor struktural: posisi Regional Head 4 kosong, jadi pemulihan berjalan tanpa pemimpin tetap. Campuran temporer (operasional) + struktural (kepemimpinan).",
  },
  {
    q: "Berapa dampak ekonominya?",
    analysis:
      "Pendapatan tertunda Rp 374 M dan EBITDA Rp 104 M pada basis YTD 5 bulan; disetahunkan setara potensi laba bersih ± Rp 107 M (lihat waterfall AI Insight: pendapatan → biaya variabel → EBITDA → depresiasi & bunga → pajak 22%). Materialitas ± 1,5% EBITDA YTD — nyata tapi bukan krisis.",
  },
  {
    q: "Apa risiko terbesarnya bila dibiarkan?",
    analysis:
      "Bukan angka YTD-nya, tapi persistensi: gap yang tidak ditutup menjadi run-rate. Risiko sekunder: El Niño H2 (62%) bisa menambah tekanan yield sehingga jendela pemulihan tertutup, dan kekosongan Regional Head membuat program pemulihan tidak tereksekusi.",
  },
  {
    q: "Apa yang akan Anda lakukan? (opsi, pilihan, owner, tenggat)",
    analysis:
      "Tiga opsi: (A) audit rotasi panen & utilisasi PKS, (B) realokasi TBS antar-PKS untuk mengejar utilisasi, (C) percepat pengisian Regional Head 4 dari 18 kandidat Ready Now. Pilihan yang diambil sistem: A sebagai aksi cepat (Direktorat Operasional, tenggat 29 Agu) + C paralel via SDM — karena A tanpa C berisiko tidak berkelanjutan. Ukuran keberhasilan: gap bulanan vs RKAP menyempit dalam 2 siklus panen.",
  },
];

export default function KasusEksekutifPage() {
  return (
    <GuideShell
      title="Kasus Eksekutif"
      subtitle="Executive Case — latihan reasoning dari data real dashboard"
      active="/executive-guide/kasus-eksekutif"
    >
      <GuideCard className="bg-gradient-to-r from-[#1b3a6b] to-[#24518f] !border-transparent">
        <div className="text-[15px] font-extrabold tracking-tight text-white">
          Today&apos;s Executive Case
        </div>
        <p className="mt-1.5 max-w-[680px] text-[10px] leading-relaxed text-white/75">
          Gap produksi Regional 4: 30 rb ton di bawah RKAP YTD, pendapatan regional −2,3% vs
          2025. Semua bukti ada di dashboard — Overview, Produksi, People, Risk. Sistem sengaja
          menahan analisisnya: tulis reasoning Anda dulu, baru bandingkan.
        </p>
      </GuideCard>

      <div className="grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,62fr)_minmax(0,38fr)]">
        <ExecutiveCase questions={CASE_QUESTIONS} />

        <GuideCard>
          <GuideTitle kicker="Cara berlatih">Aturan Mainnya</GuideTitle>
          <ol className="space-y-[6px]">
            {[
              "Buka bukti di dashboard: Overview (alert & AI Insight), Produksi & Operasi, SDM (posisi kritikal), Risiko (El Niño). Jangan menjawab dari ingatan.",
              "Tulis jawaban Anda per pertanyaan — kalimat pendek cukup; yang dilatih adalah struktur berpikirnya, bukan panjangnya.",
              "Baru setelah itu buka Executive Analysis dan bandingkan: apa yang Anda lewatkan? Biasanya dimensi lintas-domain (people, korelasi risiko).",
              "Jawaban tersimpan di browser Anda (localStorage) — kembali kapan saja, bandingkan cara berpikir Anda bulan depan dengan hari ini.",
            ].map((r, i) => (
              <li key={r} className="flex gap-1.5 text-[9.5px] leading-[1.5] text-ink-700">
                <span className="shrink-0 font-bold text-ptpn-green">{i + 1}.</span>
                {r}
              </li>
            ))}
          </ol>
          <p className="mt-2 rounded-lg bg-[#eef5fd] px-2.5 py-1.5 text-[8.5px] leading-[1.45] text-ink-700">
            Kerangka jawaban mengikuti <span className="font-bold">Executive Management Loop</span>{" "}
            dan <span className="font-bold">Pertanyaan Eksekutif</span> — dua bab lain di guide
            ini. Kasus akan diganti berkala mengikuti isu material terbaru di dashboard.
          </p>
        </GuideCard>
      </div>
    </GuideShell>
  );
}
