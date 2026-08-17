import { GuideShell } from "@/components/guide/GuideShell";
import { GuideCard, GuideTitle } from "@/components/guide/GuideBlocks";
import { QUESTION_ENGINE_INTRO, questionSets } from "@/lib/question-engine-data";

export const metadata = { title: "Pertanyaan Eksekutif — Executive Guide" };

/**
 * Executive Question Engine: lima situasi → set pertanyaan yang harus
 * diajukan SEBELUM membaca rekomendasi. Sistem melatih penggunanya bertanya,
 * bukan hanya memberi jawaban.
 */
export default function PertanyaanEksekutifPage() {
  return (
    <GuideShell
      title="Pertanyaan Eksekutif"
      subtitle="Question Engine — kualitas keputusan ditentukan kualitas pertanyaan"
      active="/executive-guide/pertanyaan-eksekutif"
    >
      <GuideCard className="bg-gradient-to-r from-[#1b3a6b] to-[#24518f] !border-transparent">
        <div className="text-[15px] font-extrabold tracking-tight text-white">
          Dashboard menjawab. Eksekutif bertanya.
        </div>
        <p className="mt-1.5 max-w-[680px] text-[10px] leading-relaxed text-white/75">
          {QUESTION_ENGINE_INTRO}
        </p>
      </GuideCard>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {questionSets.map((set, i) => (
          <GuideCard key={set.context} className={i === questionSets.length - 1 ? "lg:col-span-2" : ""}>
            <GuideTitle kicker={`Situasi ${i + 1}`}>{set.context}</GuideTitle>
            <p className="mb-2 rounded-lg bg-[#f5f8fa] px-2.5 py-1.5 text-[9px] text-ink-500">
              Contoh di dashboard: <span className="font-semibold text-ink-700">{set.example}</span>
            </p>
            <ol className="space-y-[5px]">
              {set.questions.map((q, qi) => (
                <li key={q} className="flex gap-1.5 text-[9.5px] leading-[1.45] text-ink-700">
                  <span className="shrink-0 font-bold text-ptpn-green">{qi + 1}.</span>
                  {q}
                </li>
              ))}
            </ol>
          </GuideCard>
        ))}
      </div>
    </GuideShell>
  );
}
