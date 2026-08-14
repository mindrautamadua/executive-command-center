/**
 * Palet chart terpusat untuk seluruh modul SDM & Talent.
 * Satu warna kanonik per peran — jangan hardcode hex baru di komponen/data.
 */

export const PALETTE = {
  green: "#1a9c5b",
  greenSoft: "#4caf6d",
  blue: "#3b7ded",
  blueSoft: "#7cb0f7",
  teal: "#0d9488",
  amber: "#f5a524",
  red: "#ef4444",
  purple: "#8b5cf6",
  pink: "#ec4899",
  slate: "#94a3b8",
  navy: "#1b3a6b",
} as const;

/** Urutan default untuk seri kategorikal (maks 7 kategori). */
export const CATEGORICAL = [
  PALETTE.green,
  PALETTE.blue,
  PALETTE.amber,
  PALETTE.purple,
  PALETTE.teal,
  PALETTE.pink,
  PALETTE.slate,
];

/** Ramp sekuensial (rendah → tinggi). */
export const SEQ_GREEN = ["#dcf1e6", "#a7dcc1", "#63c393", "#2aa96b", "#0f7a44"];
export const SEQ_BLUE = ["#deeafc", "#aecdf8", "#7cb0f7", "#4a8ef0", "#2563c9"];

/**
 * Skala ordinal kesiapan suksesi / readiness:
 * Ready Now → Ready 1-2 Thn → Ready 3+ Thn → Belum Siap.
 */
export const READINESS = ["#1a9c5b", "#63c393", "#f5a524", "#94a3b8"];

/** Semantik status. "On Target" = hijau lembut, bukan kuning. */
export const SEMANTIC = {
  good: PALETTE.green,
  goodSoft: PALETTE.greenSoft,
  warn: PALETTE.amber,
  bad: PALETTE.red,
  info: PALETTE.blue,
  neutral: PALETTE.slate,
} as const;

/** Warna entitas konsisten lintas halaman. */
export const GENDER = { lakiLaki: PALETTE.blue, perempuan: PALETTE.pink } as const;

export const GENERATION = {
  babyBoomer: PALETTE.slate,
  genX: PALETTE.teal,
  millennial: PALETTE.blue,
  genZ: PALETTE.purple,
} as const;

/**
 * Style tooltip Recharts yang mengikuti tema (pakai CSS var, aman dark mode).
 * Pakai: <Tooltip contentStyle={CHART_TOOLTIP_STYLE} />
 */
export const CHART_TOOLTIP_STYLE: React.CSSProperties = {
  backgroundColor: "var(--surface)",
  border: "1px solid var(--border-line)",
  borderRadius: 8,
  fontSize: 11,
  color: "var(--text-1)",
  boxShadow: "0 4px 12px rgba(16,24,40,0.10)",
};

/** Warna axis/grid chart yang mengikuti tema. */
export const CHART_AXIS = {
  grid: "var(--chart-grid)",
  axis: "var(--chart-axis)",
  tick: "var(--chart-tick)",
} as const;
