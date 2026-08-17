/**
 * Heuristik jenis kelamin dari nama Indonesia — dipakai memilih pool pasfoto
 * supaya foto dan nama tidak pernah bertentangan (nama perempuan berfoto pria
 * langsung merusak kepercayaan pada seluruh data mock).
 */

export type AvatarGender = "pria" | "wanita";

/** Token nama depan yang umum perempuan. */
const TOKEN_WANITA = new Set([
  "siti", "sri", "dewi", "ayu", "putri", "ratna", "rina", "rini", "nur", "nurul",
  "intan", "maya", "sari", "wulan", "fitri", "yuni", "yanti", "ani", "ana",
  "dian", "indah", "lestari", "ratih", "citra", "mega", "nina", "lina",
  "tuti", "endang", "ni", "diah", "eka", "vina", "novi", "sinta", "shinta",
  "kartika", "anisa", "annisa", "nadia", "laila", "aulia", "amelia",
]);

/** Akhiran nama yang umum perempuan. */
const SUFIKS_WANITA = [
  "wati", "yanti", "yani", "astuti", "ningsih", "ningrum", "lestari",
  "utami", "handayani", "susanti", "rahayu", "hartini", "aini",
];

export function genderFromName(nama: string): AvatarGender {
  const token = nama.toLowerCase().replace(/[^a-z\s]/g, "").trim().split(/\s+/);
  for (const t of token) {
    if (TOKEN_WANITA.has(t)) return "wanita";
    if (SUFIKS_WANITA.some((s) => t.endsWith(s) && t.length > s.length)) return "wanita";
  }
  return "pria";
}

/**
 * Jumlah pasfoto lokal per gender di public/avatars/. Sengaja bilangan prima
 * dan coprima dengan siklus daftar nama depan (24) di direktori — kalau tidak,
 * semua "Agus"/"Ahmad" (seed berjarak kelipatan 24) jatuh ke foto yang sama.
 */
export const AVATAR_POOL = 13;

/** Path pasfoto lokal deterministik dari gender + seed; ×7 menyebar seed berdekatan. */
export const avatarPath = (gender: AvatarGender, seed: number) =>
  `/avatars/${gender}-${((Math.abs(seed) * 7) % AVATAR_POOL) + 1}.jpg`;
