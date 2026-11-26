// Roast the Smart Fridge — Versi B, pilihan spesialis 26 Nov 08:47 WIB.
// Speaker pintar yang mendengarkan lalu salah menafsirkan "I'm fine"
// menjadi lagu sedih setiap kali kulkas dibuka jam 2 pagi.
// Alasan spesialis: belokan paling kuat — twist mendarat di akhir baris,
// premis paling segar dari ketiganya, paling ringkas (108 karakter) tanpa
// bantalan, dan perilaku nyata yang spesifik (speaker yang selalu
// mendengarkan lalu bertindak atas yang didengarnya). Versi A ditolak
// karena penutupnya berupa perbandingan, bukan twist; versi C ditolak
// karena tawanya lebih berupa anggukan paham daripada tawa sungguhan.
// Catatan gate: "2 a.m." mengandung titik, jadi jumlah tanda akhir kalimat
// tidak dipakai sebagai pemeriksaan — yang diperiksa hanya panjang,
// satu baris, dan kalimat berakhir dengan titik.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My smart speaker heard me say 'I'm fine' once and now plays sad songs every time I open the fridge at 2 a.m.";

const entry = ENTRY.trim();
if (
  entry.length < 1 ||
  entry.length > 160 ||
  entry.includes("\n") ||
  !entry.endsWith(".")
) {
  throw new Error("Entry must be one line of 1-160 characters ending with a period.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
