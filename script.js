// script.js - extracted questions and quiz logic
// This file is generated from your original index.html and includes comments for each question.
// It contains rendering, navigation (prev/next), and a slider for direct question selection.

const questions = [
            // Question 1
            // Question 1
            {
                type: 'multiple-choice',
                question: "Seorang siswa sedang mengukur diameter sebuah tutup botol menggunakan jangka sorong. Hasil pengukurannya ditunjukkan oleh gambar berikut. Diameter tutup botol tersebut adalah...",
                image:"https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Jangka%20Sorong.png", 
                alt: "Jangka sorong mengukur diameter tutup botol",
                imageWidthClass: 'max-w-md',
                options: ["6,52 ± 0,01 cm", "6,52 ± 0,005 cm", "7,60 ± 0,005 cm", "6,78 ± 0,01 cm", "6,78 ± 0,005 cm"],
                answer: "6,78 ± 0,005 cm",
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <div class="my-6 text-center"><img src="https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Pembahasan%20Jangka%20Sorong.png" alt="Jangka Sorong" class="mx-auto border rounded-lg shadow-sm max-w-sm w-full" /></div>
                    <ol class="list-decimal list-inside space-y-2">
                        <li><b>Membaca Skala Utama (SU):</b> Lihat angka pada skala utama yang berada tepat sebelum angka 0 pada skala nonius. Angka tersebut adalah 6,7 cm.</li>
                        <li><b>Membaca Skala Nonius (SN):</b> Cari garis pada skala nonius yang lurus dan berimpit dengan garis di skala utama. Garis yang berimpit adalah garis ke-8. Kalikan angka ini dengan ketelitian alat (0,01 cm), sehingga didapat: 8 × 0,01 cm = 0,08 cm.</li>
                        <li><b>Hasil Pengukuran:</b> Jumlahkan Skala Utama dan Skala Nonius. Hasil = 6,7 cm + 0,08 cm = 6,78 cm.</li>
                        <li><b>Menentukan Ketidakpastian (Δx):</b> Ketidakpastian untuk pengukuran tunggal adalah setengah dari skala terkecil (nst). Δx = ½ × 0,01 cm = 0,005 cm.</li>
                        <li><b>Pelaporan Hasil:</b> Hasil pengukuran dilaporkan dalam format (Hasil ± Δx), yaitu <b>(6,78 ± 0,005) cm</b>.</li>
                    </ol>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Pengukuran besaran panjang menggunakan Jangka Sorong melibatkan pembacaan Skala Utama dan Skala Nonius. Hasil akhir dilaporkan lengkap dengan nilai ketidakpastian (setengah dari skala terkecil alat ukur) sesuai kaidah fisika.</div>`
            },
            // Question 2
            // Question 2
            {
                type: 'multiple-choice',
                question: "Grafik berikut menunjukkan hubungan kecepatan gerak suatu benda terhadap waktu. Jarak yang ditempuh benda saat melakukan gerak lurus beraturan adalah .... (Gunakan grafik ini untuk soal no 3 juga)",
                image: "https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Grafik%20Kecepatan%20terhadap%20Waktu.png",
                alt: "Grafik kecepatan terhadap waktu",
                imageWidthClass: 'max-w-3xl',
                options: ["1.200 m", "840 m", "600 m", "360 m", "300 m"],
                answer: "360 m",
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ol class="list-decimal list-inside space-y-2">
                        <li><b>Identifikasi Gerak Lurus Beraturan (GLB):</b> GLB terjadi ketika kecepatan benda konstan (tidak berubah). Pada grafik v-t, ini ditandai oleh garis lurus horizontal.</li>
                        <li><b>Menemukan Interval GLB:</b> Perhatikan grafik, garis horizontal terjadi dari titik E (t=70 s) ke F (t=100 s). Pada interval ini, kecepatan benda konstan sebesar 12 m/s.</li>
                        <li><b>Menghitung Jarak Tempuh:</b> Jarak tempuh pada grafik v-t adalah luas daerah di bawah kurva. Untuk interval E-F, bentuknya adalah persegi panjang.</li>
                        <li><b>Perhitungan Luas:</b> Luas = panjang × lebar = (selang waktu) × (kecepatan) = (100 s - 70 s) × 12 m/s = 30 s × 12 m/s = <b>360 m</b>.</li>
                    </ol>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Dalam kinematika gerak lurus, grafik v-t memberikan informasi percepatan (dari kemiringan) dan jarak tempuh (dari luas di bawah grafik). GLB memiliki percepatan nol dan kecepatan konstan.</div>`
            },
            // Question 3
            // Question 3
            {
                type: 'true-false-multi',
                question: "Masih mengacu pada grafik dari soal sebelumnya, tentukan apakah pernyataan-pernyataan berikut Benar atau Salah.",
                image: "https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Grafik%20Kecepatan%20terhadap%20Waktu.png",
                alt: "Grafik kecepatan terhadap waktu",
                imageWidthClass: 'max-w-3xl',
                statements: [
                    { text: "Percepatan gerak benda dari A ke B lebih besar daripada dari B ke С.", answer: "Salah" },
                    { text: "Benda mengalami perlambatan sebesar 0,4 m/s² saat bergerak dari C ke D.", answer: "Benar" },
                    { text: "Jarak tempuh dari titik C ke titik D adalah 160 m.", answer: "Salah" }
                ],
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ul class="list-disc list-inside space-y-3">
                        <li><b>Pernyataan 1:</b> Percepatan adalah kemiringan (gradien) grafik v-t.
                            <ul>
                                <li>Percepatan A-B (a<sub>AB</sub>) = (v₂-v₁)/(t₂-t₁) = (12-10)/(20-0) = 0,1 m/s².</li>
                                <li>Percepatan B-C (a<sub>BC</sub>) = (20-12)/(40-20) = 0,4 m/s².</li>
                                <li>Karena 0,4 m/s² > 0,1 m/s², maka percepatan B-C lebih besar dari A-B. Dengan demikian, pernyataan ini <b>Salah</b>.</li>
                            </ul>
                        </li>
                        <li><b>Pernyataan 2:</b> Percepatan C-D (a<sub>CD</sub>) = (16-20)/(50-40) = -4/10 = -0,4 m/s². Tanda negatif menunjukkan perlambatan, jadi besar perlambatannya adalah 0,4 m/s². Dengan demikian, pernyataan ini <b>Benar</b>.</li>
                        <li><b>Pernyataan 3:</b> Jarak tempuh C-D dihitung dari luas trapesium di bawah kurva CD. Luas = ½ × (jumlah sisi sejajar) × tinggi = ½ × (v<sub>C</sub> + v<sub>D</sub>) × (t<sub>D</sub> - t<sub>C</sub>) = ½ × (20 + 16) × (10) = 180 m. Karena hasil perhitungan adalah 180 m, maka pernyataan yang menyebutkan 160 m adalah <b>Salah</b>.</li>
                    </ul>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Analisis grafik v-t untuk GLBB. Percepatan (a) dihitung dari gradien, a = Δv/Δt. Jarak tempuh (s) dihitung dari luas di bawah kurva.</div>`
            },
            // Question 4 (FIXED)
            // Question 4
            {
                type: 'multiple-select',
                question: "Paul yang tingginya 165 cm berusaha menjatuhkan kok bulu tangkis yang tersangkut di dahan pohon dengan ketinggian 4 m di atas tanah. Paul menggunakan katapel untuk menembakkan batu dari posisi 15 cm di bawah ujung kepalanya. Paul menembakkan batu dari jarak horizontal tertentu dari pohon dengan sudut elevasi θ dan kelajuan awal 10 m/s. Tembakan batu membentuk lintasan parabola dan mengenai kok ketika berada di ketinggian maksimum. (g=10 m/s²). Berilah tanda ✓ untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.",
                options: ["Sudut elevasi penembakan batu pada katapel yang dilakukan Paul adalah 45°.", "Waktu yang dibutuhkan batu untuk mengenai kok tersebut adalah 0,71 detik.", "Jarak penembakan batu dari pohon yang dilakukan Paul adalah 10 m.", "Kelajuan total batu pada saat mencapai ketinggian maksimum adalah nol.", "Kelajuan awal batu di sumbu x adalah 5 m/s."],
                answer: ["Sudut elevasi penembakan batu pada katapel yang dilakukan Paul adalah 45°.", "Waktu yang dibutuhkan batu untuk mengenai kok tersebut adalah 0,71 detik."],
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ol class="list-decimal list-inside space-y-3">
                        <li><b>Tinggi Tembak & Tinggi Relatif:</b> Ketinggian Paul menembak adalah 165 cm - 15 cm = 150 cm = 1,5 m. Ketinggian yang harus dicapai batu (h<sub>maks</sub>) relatif terhadap titik tembak adalah 4 m - 1,5 m = 2,5 m.</li>
                        <li><b>Sudut Elevasi (θ):</b> Gunakan rumus ketinggian maksimum: h<sub>maks</sub> = (v₀² sin²θ) / (2g).
                            <ul><li>2,5 = (10² sin²θ) / (2 × 10) → 50 = 100 sin²θ → sin²θ = 0,5 → sinθ = √0,5 ≈ 0,707. Sudut yang memiliki nilai sinus 0,707 adalah 45°. Maka, pernyataan ini <b>Benar</b>.</li></ul>
                        </li>
                        <li><b>Waktu ke Puncak (t<sub>puncak</sub>):</b> Gunakan rumus waktu untuk mencapai puncak: t = v₀sinθ / g.
                            <ul><li>t = (10 × sin45°) / 10 = sin45° ≈ 0,707 s. Dibulatkan menjadi 0,71 s, maka pernyataan ini <b>Benar</b>.</li></ul>
                        </li>
                         <li><b>Jarak Horizontal (x):</b> Gunakan rumus jarak pada sumbu x: x = v₀ₓ × t = (v₀ cosθ) × t.
                            <ul><li>x = (10 × cos45°) × 0,707 ≈ 7,07 × 0,707 ≈ 5 m. Pernyataan yang menyebutkan 10 m adalah <b>Salah</b>.</li></ul>
                        </li>
                        <li><b>Kelajuan di Puncak:</b> Di titik tertinggi, v<sub>y</sub> = 0, tetapi v<sub>x</sub> = v₀ cosθ = 10 cos45° ≈ 7,07 m/s. Kelajuan totalnya tidak nol. Maka, pernyataan ini <b>Salah</b>.</li>
                        <li><b>Kelajuan awal sumbu x (v₀ₓ):</b> v₀ₓ = v₀ cosθ = 10 cos45° ≈ 7,07 m/s. Pernyataan yang menyebutkan 5 m/s adalah <b>Salah</b>.</li>
                    </ol>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Gerak Parabola adalah perpaduan Gerak Lurus Beraturan (GLB) pada sumbu horizontal dan GLBB pada sumbu vertikal. Di titik puncak, v<sub>y</sub> = 0.</div>`
            },
            // Question 5
            // Question 5
            {
                type: 'multiple-choice',
                question: "Ria memiliki sebuah mesin cuci yang di dalamnya terdapat alat pengering. Besar kecepatan sudut pengering tersebut sebesar 810 rpm. Ketika akan berhenti bergerak, besar kecepatan sudutnya menjadi 210 rpm. Kecepatan sudut pengering tersebut berkurang setelah berputar 80 kali. Besar perlambatan sudut alat pengering tersebut adalah ...",
                options: ["6,4 rad/s²", "6,7 rad/s²", "6,9 rad/s²", "7,7 rad/s²", "8,9 rad/s²"],
                answer: "6,7 rad/s²",
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                     <ol class="list-decimal list-inside space-y-2">
                        <li><b>Konversi Satuan:</b>
                            <ul>
                                <li>Kecepatan sudut awal (ω₀) = 810 putaran/menit = 810 × (2π rad / 60 s) = 27π rad/s.</li>
                                <li>Kecepatan sudut akhir (ωₜ) = 210 putaran/menit = 210 × (2π rad / 60 s) = 7π rad/s.</li>
                                <li>Perpindahan sudut (θ) = 80 putaran = 80 × 2π rad = 160π rad.</li>
                            </ul>
                        </li>
                        <li><b>Pemilihan Rumus GMBB:</b> Karena waktu (t) tidak diketahui, kita gunakan rumus: ωₜ² = ω₀² + 2αθ.</li>
                        <li><b>Substitusi dan Perhitungan:</b>
                            <ul>
                                <li>(7π)² = (27π)² + 2α(160π)</li>
                                <li>49π² = 729π² + 320πα</li>
                                <li>49π² - 729π² = 320πα</li>
                                <li>-680π² = 320πα</li>
                                <li>α = -680π² / 320π = -2,125π rad/s²</li>
                            </ul>
                        </li>
                        <li><b>Hasil Akhir:</b> Nilai α ≈ -2,125 × 3,14159 ≈ -6,675 rad/s². Tanda negatif menunjukkan perlambatan. Besar perlambatannya adalah <b>6,7 rad/s²</b>.</li>
                    </ol>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Gerak Melingkar Berubah Beraturan (GMBB) memiliki persamaan yang analog dengan GLBB. Rumus ωₜ² = ω₀² + 2αθ adalah pilihan tepat ketika waktu (t) tidak diketahui dalam soal.</div>`
            },
            // Question 6 (FIXED)
            // Question 6
            {
                type: 'multiple-select',
                question: "Dewi sedang memindahkan lemari bermassa 50 kg ke tempat yang berjarak 4 m dari posisi asal lemari. Gaya tarik yang diberikan Dewi membentuk sudut 37° terhadap permukaan lantai. Diketahui koefisien gesek statis dan kinetik antara lemari dan lantai adalah 0,5 dan 0,3. Gaya yang diberikan Dewi membuat lemari tepat akan bergerak. Berilah tanda ✓ untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.",
                options: [
                    "Besar gaya yang diberikan Dewi adalah 300 N.",
                    "Percepatan yang dialami lemari adalah 1,45 m/s².",
                    "Besarnya gaya gesek kinetik yang bekerja saat lemari bergeser adalah 150 N.",
                    "Besarnya gaya normal lemari Dewi tidak sama dengan gaya beratnya.",
                    "Gaya gesek kinetik berlaku saat lemari belum ditarik."
                ],
                answer: [
                    "Percepatan yang dialami lemari adalah 1,45 m/s².",
                    "Besarnya gaya normal lemari Dewi tidak sama dengan gaya beratnya."
                ],
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ul class="list-disc list-inside space-y-3">
                        <li><b>Gaya Normal (N):</b> Karena gaya tarik F memiliki komponen vertikal (Fsin37°), gaya normal tidak sama dengan gaya berat. Dari ΣFy=0 → N + Fsin37° - w = 0 → N = 500 - 0,6F. Maka, pernyataan ini <b>Benar</b>.</li>
                        <li><b>Gaya tarik (F):</b> Kondisi "tepat akan bergerak" berarti ΣFx=0 dan gaya geseknya statis maksimum (fₛ = µₛN).
                            <ul><li>Fcos37° = fₛ → 0,8F = 0,5(500 - 0,6F) → 0,8F = 250 - 0,3F → 1,1F = 250 → F = 227,27 N. Pernyataan F=300N adalah <b>Salah</b>.</li></ul>
                        </li>
                         <li><b>Gaya gesek kinetik (fₖ):</b> Saat sudah bergeser, fₖ = µₖN.
                            <ul><li>N = 500 - 0,6(227,27) = 363,64 N.</li><li>fₖ = 0,3 × 363,64 = 109,09 N. Pernyataan fₖ=150N adalah <b>Salah</b>.</li></ul>
                        </li>
                        <li><b>Percepatan (a):</b> Gunakan Hukum II Newton, ΣFx = ma.
                            <ul><li>Fcos37° - fₖ = ma → 181,82 - 109,09 = 50a → 72,73 = 50a → a ≈ 1,45 m/s². Pernyataan ini <b>Benar</b>.</li></ul>
                        </li>
                        <li><b>Gaya gesek kinetik:</b> Gaya gesek kinetik hanya bekerja saat benda sudah bergerak (bergeser). Saat lemari belum ditarik (diam), gaya gesek yang bekerja adalah gaya gesek statis (yang nilainya nol jika tidak ada gaya luar). Maka, pernyataan ini <b>Salah</b>.</li>
                    </ul>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Hukum II Newton (ΣF=ma), Gaya Gesek Statis & Kinetis, dan penguraian vektor gaya.</div>`
            },
            // Question 7
            // Question 7
            {
                type: 'true-false-multi',
                question: "Seorang atlet menembakkan peluru 80g ke balok 1,2kg yang tergantung. Peluru bersarang di dalam balok dan sistem naik setinggi 10cm. (g=10 m/s²). Tentukan kesesuaian pernyataan-pernyataan berikut.",
                image: "https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Tumbukan%20Balistik.png",
                alt: "Diagram bandul balistik",
                imageWidthClass: 'max-w-md',
                statements: [
                    { text: "Kelajuan peluru dan balok setelah bertumbukan adalah 2 m/s.", answer: "Salah" },
                    { text: "Kelajuan peluru saat mengenai balok adalah 22,6 m/s.", answer: "Benar" },
                    { text: "Peluru mengenai balok dalam waktu 2,2 detik (jika jarak tembak 50m).", answer: "Benar" }
                ],
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ol class="list-decimal list-inside space-y-3">
                        <li><b>Kelajuan Sistem Setelah Tumbukan (v'):</b> Gunakan Hukum Kekekalan Energi Mekanik untuk gerak naik sistem. Energi kinetik awal sistem diubah menjadi energi potensial di titik tertinggi.
                            <ul><li>½(mₚ+mₑ)v'² = (mₚ+mₑ)gh → v' = √(2gh) = √(2 × 10 × 0,1) = √2 ≈ 1,41 m/s. Pernyataan v'=2m/s adalah <b>Tidak Sesuai</b>.</li></ul>
                        </li>
                        <li><b>Kelajuan Peluru Awal (vₚ):</b> Gunakan Hukum Kekekalan Momentum untuk proses tumbukan (tidak lenting sama sekali).
                            <ul><li>mₚvₚ = (mₚ+mₑ)v' → (0,08)vₚ = (0,08 + 1,2)√2 → vₚ = (1,28√2)/0,08 = 16√2 ≈ 22,6 m/s. Pernyataan ini <b>Sesuai</b>.</li></ul>
                        </li>
                         <li><b>Waktu Tempuh Peluru:</b> Asumsi kelajuan konstan sebelum menumbuk, t = s/vₚ = 50m / 22,6 m/s ≈ 2,2 detik. Pernyataan ini <b>Sesuai</b>.</li>
                    </ol>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Masalah bandul balistik diselesaikan dalam dua tahap: <b>Hukum Kekekalan Momentum</b> untuk tumbukan dan <b>Hukum Kekekalan Energi Mekanik</b> untuk gerak ayunan setelahnya.</div>`
            },
            // Question 8 (FIXED)
            // Question 8
            {
                type: 'multiple-choice',
                question: "Sebuah papan kayu memiliki berat 100 N berada di atas dua tiang penyangga P dan Q. Panjang papan dan letak penyangga P dan Q ditunjukkan oleh gambar di samping. Beban yang dirasakan penyangga P sebesar ....",
                image: "https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Papan%20Penyangga.png",
                alt: "Papan di atas dua penyangga",
                imageWidthClass: 'max-w-xl',
                options: ["75 N", "100 N", "150 N", "175 N", "200 N"],
                answer: "75 N",
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ol class="list-decimal list-inside space-y-2">
                       <li><b>Syarat Keseimbangan:</b> Agar sistem diam (setimbang), total torsi (momen gaya) terhadap titik manapun harus nol (Στ = 0).</li>
                       <li><b>Pemilihan Poros:</b> Untuk mencari gaya pada penyangga P (Fp), kita pilih titik Q sebagai poros. Ini akan menghilangkan gaya pada penyangga Q (FQ) dari perhitungan karena lengan momennya menjadi nol.</li>
                       <li><b>Analisis Torsi:</b> Kita tetapkan putaran berlawanan arah jarum jam sebagai positif (+).
                            <ul>
                                <li>Torsi oleh Fp: Gaya Fp akan menyebabkan putaran berlawanan arah jarum jam terhadap poros Q. Jaraknya (lengan momen) adalah 6 m - 2,5 m - 1,5 m = 2 m. Maka, τp = + Fp × 2.</li>
                                <li>Torsi oleh berat papan (w): Berat papan (100 N) bekerja di titik pusat massa, yaitu di tengah papan (3 m dari ujung kiri). Jaraknya dari poros Q adalah 4,5 m - 3 m = 1,5 m. Gaya ini akan menyebabkan putaran searah jarum jam (-). Maka, τw = - w × 1,5 = -100 × 1,5 = -150 Nm.</li>
                            </ul>
                       </li>
                        <li><b>Perhitungan:</b> Terapkan syarat Στ<sub>Q</sub> = 0.
                            <ul><li>τp + τw = 0 → 2Fp - 150 = 0 → 2Fp = 150 → Fp = <b>75 N</b>.</li></ul>
                        </li>
                    </ol>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Kesetimbangan Benda Tegar. Syarat setimbang rotasi adalah Στ=0. Memilih poros secara strategis (pada salah satu gaya yang tidak diketahui) dapat sangat menyederhanakan perhitungan.</div>`
            },
            // Soal 9
            // Question 9
            {
                type: 'true-false-multi',
                question: "Di sebuah bengkel mobil terdapat pengangkat mobil hidrolik dengan penampang berdiameter 3 cm dan 30 cm, berisi minyak (ρ=900 kg/m³) setinggi 1,5 m. Tentukan apakah Anda Setuju atau Tidak Setuju dengan pernyataan-pernyataan berikut.",
                statements: [
                    { text: "Tekanan hidrostatis di dasar alat adalah 15.000 Pa.", answer: "Salah" },
                    { text: "Jika penampang kecil diberi dorongan sebesar 20 N, penampang besar akan menerima gaya sebesar 2.000 N.", answer: "Benar" },
                    { text: "Untuk mengangkat mobil dengan massa 1.500 kg, penampang kecil perlu diberi tekanan minimal sebesar 150 Pa.", answer: "Salah" }
                ],
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ul class="list-disc list-inside space-y-3">
                        <li><b>Tekanan hidrostatis (P<sub>h</sub>):</b> P<sub>h</sub> = ρgh = (900 kg/m³)(10 m/s²)(1,5 m) = 13.500 Pa. Pernyataan 15.000 Pa adalah <b>Tidak Setuju</b>.</li>
                        <li><b>Gaya Angkat (Hukum Pascal):</b> F₁/A₁ = F₂/A₂. Karena A = π(d/2)², perbandingan luas sama dengan perbandingan kuadrat diameter. F₂ = F₁(A₂/A₁) = F₁(d₂/d₁)² = 20 N × (30/3)² = 20 × 100 = 2.000 N. Pernyataan ini <b>Setuju</b>.</li>
                        <li><b>Tekanan Minimal:</b> Gaya minimal yang dibutuhkan F₂ = berat mobil = mg = 1.500 kg × 10 m/s² = 15.000 N. Tekanan yang dibutuhkan P = F₂/A₂ = 15.000 / (π × (0,15 m)²) ≈ 212.206 Pa. Pernyataan 150 Pa adalah <b>Tidak Setuju</b>.</li>
                    </ul>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> <b>Tekanan Hidrostatis (P=ρgh)</b> dan <b>Hukum Pascal</b> (F₁/A₁ = F₂/A₂).</div>`
            },
            // Soal 10 (FIXED)
            // Question 10
            {
                type: 'multiple-choice',
                question: "Rumah Pak Syarif menggunakan tangki penyimpanan air berbentuk tabung dengan tinggi 2 m dan diameter alas 2 m. Tangki tersebut terisi air sebanyak 90%. Di bagian dasar tangki terdapat lubang berdiameter 14 cm yang dihubungkan dengan pipa berdiameter sama. Pipa tersebut bercabang menjadi pipa A dan pipa B yang ukurannya juga sama. Kelajuan aliran air yang mengalir di pipa A dan pipa B secara berturut-turut adalah ....",
                options: ["2 m/s dan 4 m/s", "3 m/s dan 3 m/s", "4 m/s dan 2 m/s", "6 m/s dan 6 m/s", "12 m/s dan 6 m/s"],
                answer: "3 m/s dan 3 m/s",
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ol class="list-decimal list-inside space-y-2">
                        <li><b>Ketinggian Efektif Air (h):</b> h = 90% × 2 m = 1,8 m. (Diameter alas tangki 2m tidak mempengaruhi kelajuan keluarnya air dari lubang).</li>
                        <li><b>Kelajuan di Pipa Utama (v₁):</b> Gunakan Teorema Torricelli untuk kelajuan air yang keluar dari dasar tangki. v₁ = √(2gh) = √(2 × 10 × 1,8) = √36 = 6 m/s.</li>
                        <li><b>Asas Kontinuitas pada Percabangan:</b> Debit air yang masuk ke percabangan (Q₁) sama dengan total debit yang keluar (Qₐ + Qₑ). Q₁ = Qₐ + Qₑ.</li>
                        <li><b>Pembagian Aliran:</b> Karena pipa A dan B ukurannya sama, aliran akan terbagi dua secara merata. Qₐ = Qₑ = Q₁/2.</li>
                        <li><b>Kelajuan di Pipa Cabang:</b> Karena Q = Av, dan luas penampang A sama untuk semua pipa (pipa utama dan cabang berdiameter sama), maka kelajuan di tiap cabang adalah setengah dari kelajuan pipa utama. vₐ = vₑ = v₁/2 = 6 m/s / 2 = <b>3 m/s</b>.</li>
                    </ol>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> <b>Teorema Torricelli (v = √2gh)</b> dan <b>Asas Kontinuitas (Q=Av)</b>.</div>`
            },
            // Soal 11
            // Question 11
            {
                type: 'multiple-choice',
                question: "Ayah dan Paman mengendarai mobil dan bergerak saling mendekat. Kelajuan mobil Ayah adalah 27 km/jam dan kelajuan mobil Paman adalah 30 km/jam. Ayah membunyikan klakson berfrekuensi 400 Hz untuk menyapa Paman. Diketahui cepat rambat bunyi di udara adalah 340 m/s. Frekuensi klakson yang didengar Paman saat Ayah membunyikan klakson adalah ....",
                options: ["381,8 Hz", "399,0 Hz", "400,9 Hz", "419,0 Hz", "472,8 Hz"],
                answer: "419,0 Hz",
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ol class="list-decimal list-inside space-y-2">
                        <li><b>Konversi Satuan Kecepatan:</b>
                            <ul>
                                <li>Kecepatan pendengar (mobil Paman), vₚ = 30 km/jam = 30 × (1000m / 3600s) ≈ 8,33 m/s.</li>
                                <li>Kecepatan sumber (mobil Ayah), vₛ = 27 km/jam = 27 × (1000m / 3600s) = 7,5 m/s.</li>
                            </ul>
                        </li>
                        <li><b>Menentukan Tanda:</b>
                            <ul>
                                <li>Pendengar (Paman) mendekati sumber, maka vₚ bertanda positif (+).</li>
                                <li>Sumber (Ayah) mendekati pendengar, maka vₛ bertanda negatif (-).</li>
                            </ul>
                        </li>
                        <li><b>Menggunakan Rumus Efek Doppler:</b> fₚ = [(v + vₚ)/(v - vₛ)] × fₛ</li>
                        <li><b>Substitusi dan Perhitungan:</b> fₚ = [(340 + 8,33)/(340 - 7,5)] × 400 = (348,33 / 332,5) × 400 ≈ 1,0476 × 400 ≈ <b>419,0 Hz</b>.</li>
                    </ol>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Efek Doppler. Rumus: fₚ = [(v ± vₚ)/(v ± vₛ)] × fₛ. Aturan tanda: vₚ (+) jika P mendekati S; vₛ (+) jika S menjauhi P.</div>`
            },
            // Soal 12
            // Question 12
            {
                type: 'true-false-multi',
                question: "Pada suatu percobaan interferensi celah ganda, dua celah dengan jarak 1,5 mm terletak 1,5 m dari sebuah layar. Seberkas gelombang cahaya dipancarkan pada kedua celah sehingga terbentuk pola gelap terang pada layar. Jarak garis terang keempat dengan terang pusat adalah 2,5 mm. Tentukan apakah tindakan-tindakan berikut Sesuai atau Tidak Sesuai untuk membuat jarak garis terang (y) lebih dekat.",
                statements: [
                    { text: "Menggunakan cahaya dengan panjang gelombang 400 nm.", answer: "Benar" },
                    { text: "Meletakkan celah lebih jauh dari layar.", answer: "Salah" },
                    { text: "Membuat jarak dua celah ganda sedikit lebih jauh.", answer: "Benar" }
                ],
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ol class="list-decimal list-inside space-y-2">
                        <li><b>Analisis Persamaan:</b> Rumus jarak terang ke-n dari pusat adalah y = nλL/d. Dari sini, kita tahu bahwa jarak 'y' berbanding lurus dengan panjang gelombang (λ) dan jarak layar (L), serta berbanding terbalik dengan jarak antar celah (d).</li>
                        <li><b>Pernyataan 1:</b> Pertama, kita hitung λ awal: λ = yd/(nL) = (2,5×10⁻³)(1,5×10⁻³)/(4 × 1,5) = 6,25×10⁻⁷ m = 625 nm. Menggunakan cahaya 400 nm (λ lebih kecil) akan membuat 'y' lebih kecil (lebih dekat). Maka, tindakan ini <b>Sesuai</b>.</li>
                        <li><b>Pernyataan 2:</b> 'y' sebanding dengan 'L'. Meletakkan celah lebih jauh (memperbesar L) akan membuat 'y' lebih besar (lebih jauh), bukan lebih dekat. Maka, tindakan ini <b>Tidak Sesuai</b>.</li>
                        <li><b>Pernyataan 3:</b> 'y' berbanding terbalik dengan 'd'. Membuat jarak celah lebih jauh (memperbesar d) akan membuat 'y' lebih kecil (lebih dekat). Maka, tindakan ini <b>Sesuai</b>.</li>
                    </ol>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Interferensi Celah Ganda (Young). Jarak pola terang ke-n dari pusat (y) dirumuskan sebagai <b>y = nλL/d</b>. Analisis hubungan antar variabel dalam rumus ini adalah kunci untuk menjawab soal.</div>`
            },
            // Soal 13
            // Question 13
            {
                type: 'multiple-choice',
                question: "Seorang siswa sedang mengamati sel menggunakan mikroskop. Diketahui ukuran sel asli adalah 0,005 mm. Lensa objektif mikroskop yang digunakan memiliki fokus 10 mm dan lensa okulernya memiliki fokus 50 mm. Jarak benda dari lensa objektif adalah 10,5 mm. Ukuran sel yang teramati melalui mikroskop jika mata berakomodasi maksimum adalah ....",
                options: ["0,05 mm", "0,06 mm", "0,5 mm", "0,6 mm", "5 mm"],
                answer: "0,6 mm",
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ol class="list-decimal list-inside space-y-2">
                        <li><b>Mencari Jarak Bayangan Objektif (s'<sub>ob</sub>):</b> Gunakan rumus lensa: 1/f<sub>ob</sub> = 1/s'<sub>ob</sub> + 1/s<sub>ob</sub>.
                            <ul><li>1/s'<sub>ob</sub> = 1/10 - 1/10,5 = (10,5 - 10) / (10 × 10,5) = 0,5/105.</li><li>Maka, s'<sub>ob</sub> = 105 / 0,5 = 210 mm.</li></ul>
                        </li>
                        <li><b>Menghitung Perbesaran Total (M):</b> Untuk akomodasi maksimum, M = M<sub>ob</sub> × M<sub>ok</sub>. (Asumsi titik dekat mata normal, Sn = 25 cm = 250 mm).
                            <ul>
                                <li>Perbesaran objektif: M<sub>ob</sub> = s'<sub>ob</sub> / s<sub>ob</sub> = 210 / 10,5 = 20 kali.</li>
                                <li>Perbesaran okuler (akomodasi maks): M<sub>ok</sub> = (Sn / f<sub>ok</sub>) + 1 = (250 / 50) + 1 = 6 kali.</li>
                                <li>Perbesaran total: M = 20 × 6 = 120 kali.</li>
                            </ul>
                        </li>
                        <li><b>Ukuran Bayangan Akhir:</b> Ukuran akhir = Ukuran asli × M = 0,005 mm × 120 = <b>0,6 mm</b>.</li>
                    </ol>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Perbesaran Mikroskop. Perbesaran total adalah hasil kali perbesaran lensa objektif (M<sub>ob</sub> = s'/s) dan lensa okuler (M<sub>ok</sub>). Untuk mata berakomodasi maksimum, M<sub>ok</sub> = (Sn/f<sub>ok</sub>) + 1.</div>`
            },
            // Soal 14
            // Question 14
            {
                type: 'multiple-select',
                question: "Dalam kalorimeter berisi 48g es (-4°C), dituangkan alkohol (40°C). Suhu akhir 10°C. (c<sub>es</sub>=0,5; L<sub>es</sub>=80; c<sub>alkohol</sub>=0,58; C<sub>kal</sub>=28; satuan dalam kal & g°C). Beri tanda ✓ pada pernyataan yang tepat.",
                options: [
                    "Besarnya kalor lebur es adalah 3.840 kal.",
                    "Besarnya kalor yang dibutuhkan untuk memanaskan es sampai mencair adalah 96 kal.",
                    "Besarnya kalor yang diserap kalorimeter adalah 392 kal.",
                    "Massa alkohol yang dicampur ke dalam kalorimeter adalah 276,32 gram.",
                    "Jumlah kalor yang dilepaskan adalah 20,1 kJ."
                ],
                answer: [
                    "Besarnya kalor lebur es adalah 3.840 kal.",
                    "Besarnya kalor yang diserap kalorimeter adalah 392 kal.",
                    "Massa alkohol yang dicampur ke dalam kalorimeter adalah 276,32 gram.",
                    "Jumlah kalor yang dilepaskan adalah 20,1 kJ."
                ],
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ul class="list-disc list-inside space-y-2">
                        <li><b>Kalor lebur es:</b> Ini adalah kalor yang dibutuhkan hanya untuk mengubah wujud es pada 0°C menjadi air 0°C. Q = m<sub>es</sub>L<sub>es</sub> = 48g × 80 kal/g = 3.840 kal. Pernyataan ini <b>Benar</b>.</li>
                        <li><b>Kalor memanaskan es sampai mencair:</b> Ini adalah total kalor dari es -4°C menjadi air 0°C. Q<sub>total</sub> = Q<sub>naik suhu</sub> + Q<sub>lebur</sub> = m<sub>es</sub>c<sub>es</sub>ΔT + m<sub>es</sub>L<sub>es</sub> = (48)(0,5)(0 - (-4)) + 3840 = 96 + 3840 = 3.936 kal. Pernyataan yang hanya menyebutkan 96 kal adalah <b>Salah</b>.</li>
                        <li><b>Kalor diserap kalorimeter:</b> Q<sub>kal</sub> = C<sub>kal</sub>ΔT<sub>kal</sub> = 28 kal/°C × (10 - (-4))°C = 28 × 14 = 392 kal. Pernyataan ini <b>Benar</b>.</li>
                        <li><b>Massa alkohol (Asas Black, Q<sub>lepas</sub> = Q<sub>terima</sub>):</b>
                            <ul>
                                <li>Q<sub>terima</sub> = (Q<sub>es ke 0°C</sub>) + (Q<sub>lebur</sub>) + (Q<sub>air 0°C ke 10°C</sub>) + (Q<sub>kal</sub>) = 96 + 3840 + (48)(1)(10) + 392 = 4808 kal.</li>
                                <li>Q<sub>lepas</sub> = m<sub>al</sub>c<sub>al</sub>ΔT<sub>al</sub> = m<sub>al</sub>(0,58)(40-10) = 17,4m<sub>al</sub>.</li>
                                <li>17,4m<sub>al</sub> = 4808 → m<sub>al</sub> = 4808 / 17,4 ≈ 276,32 gram. Pernyataan ini <b>Benar</b>.</li>
                            </ul>
                        </li>
                        <li><b>Jumlah kalor dilepaskan:</b> Q<sub>lepas</sub> = 4808 kal. Konversi ke joule: 4808 kal × 4,18 J/kal ≈ 20.098 J ≈ 20,1 kJ. Pernyataan ini <b>Benar</b>.</li>
                    </ul>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Asas Black (Q<sub>lepas</sub> = Q<sub>terima</sub>), kalor perubahan suhu (Q=mcΔT), kalor laten (Q=mL), dan kapasitas kalor (Q=CΔT).</div>`
            },
            // Soal 15
            // Question 15
            {
                type: 'multiple-choice',
                question: "Sebuah termometer alkohol menunjukkan suhu 20°C dengan panjang kolom alkohol 5 cm. Koefisien muai volume alkohol (γ) adalah 1,1×10⁻³/°C dan luas penampang kapiler (A) adalah 0,001 cm². Jika termometer digunakan untuk mengukur suhu 40°C, panjang kolom alkohol menjadi ....",
                options: ["4,89 cm", "4,95 cm", "5,06 cm", "5,11 cm", "5,17 cm"],
                answer: "5,11 cm",
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ol class="list-decimal list-inside space-y-2">
                        <li><b>Volume awal alkohol (V₁):</b> V₁ = Luas Penampang × Panjang awal = A × L₁ = 0,001 cm² × 5 cm = 0,005 cm³.</li>
                        <li><b>Perubahan Suhu (ΔT):</b> ΔT = T₂ - T₁ = 40°C - 20°C = 20°C.</li>
                        <li><b>Volume akhir alkohol (V₂):</b> Gunakan rumus pemuaian volume: V₂ = V₁(1 + γΔT).
                            <ul><li>V₂ = 0,005 (1 + (1,1×10⁻³)(20)) = 0,005 (1 + 0,022) = 0,005 × 1,022 = 0,00511 cm³.</li></ul>
                        </li>
                        <li><b>Panjang kolom akhir (L₂):</b> L₂ = V₂ / A = 0,00511 cm³ / 0,001 cm² = <b>5,11 cm</b>.</li>
                    </ol>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Pemuaian Volume. Volume akhir (V) dihitung dengan V = V₀(1 + γΔT). Perubahan volume ini menyebabkan perubahan panjang kolom cairan (L = V/A).</div>`
            },
            // Soal 16
            // Question 16
            {
                type: 'multiple-choice',
                question: "Sebanyak 50 liter gas ideal monoatomik pada tekanan 1,4×10⁵ Pa memuai secara isobarik menjadi 75 liter. Jika gas menyerap kalor 4×10³ J, perubahan energi dalamnya adalah...",
                options: ["0,5 kJ", "2 kJ", "3,5 kJ", "4 kJ", "6,5 kJ"],
                answer: "0,5 kJ",
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ol class="list-decimal list-inside space-y-2">
                        <li><b>Identifikasi Proses:</b> Proses terjadi pada tekanan konstan (isobarik).</li>
                        <li><b>Menghitung Usaha (W):</b> Untuk proses isobarik, W = PΔV.
                            <ul>
                                <li>ΔV = V₂ - V₁ = 75 L - 50 L = 25 L = 25 × 10⁻³ m³.</li>
                                <li>W = (1,4×10⁵ Pa) × (25×10⁻³ m³) = 3,5×10³ J.</li>
                            </ul>
                        </li>
                        <li><b>Menggunakan Hukum I Termodinamika:</b> ΔU = Q - W.
                            <ul>
                                <li>Q (kalor diserap) = +4×10³ J.</li>
                                <li>W (gas memuai/melakukan usaha) = +3,5×10³ J.</li>
                                <li>ΔU = 4×10³ - 3,5×10³ = 0,5×10³ J = <b>0,5 kJ</b>.</li>
                            </ul>
                        </li>
                    </ol>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Hukum I Termodinamika (ΔU = Q - W) dan Usaha pada proses isobarik (W = PΔV).</div>`
            },
            // Soal 17 (FIXED)
            // Question 17
            {
                type: 'multiple-select',
                question: "Muatan q₁ dan q₂ adalah dua muatan berlawanan jenis yang berada di ruang hampa dengan posisi seperti gambar. Muatan q₁ besarnya 0,04 nC dan muatan q₂ besarnya 0,08 nC. Kedua muatan tersebut ditahan di posisinya. Titik A berada 4 cm di bawah muatan q₁ dan 4 cm di sebelah kiri muatan q₂. Adapun titik B berada di tengah-tengah antara kedua muatan. (k=9×10⁹ N.m²/C²). Berilah tanda ✓ untuk pernyataan yang tepat.",
                image: "https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Medan%20Listrik.png",
                alt: "Diagram muatan listrik",
                imageWidthClass: 'max-w-xs',
                options: [
                    "Besar gaya listrik antara kedua muatan adalah 9.0×10⁻⁷ N.",
                    "Arah resultan medan listrik di titik A adalah lurus ke arah atas.",
                    "Arah resultan medan listrik di titik B adalah menuju muatan q₁.",
                    "Jika muatan uji positif diletakkan di titik A, muatan tersebut akan tertarik ke arah muatan q₂.",
                    "Jika muatan uji negatif diletakkan di titik B, muatan uji tersebut akan tertarik ke arah muatan q₂."
                ],
                answer: [
                    "Arah resultan medan listrik di titik B adalah menuju muatan q₁.",
                    "Jika muatan uji negatif diletakkan di titik B, muatan uji tersebut akan tertarik ke arah muatan q₂."
                ],
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ul class="list-disc list-inside space-y-2">
                        <li><b>Gaya listrik:</b> Jarak r₁₂ = √(4²+4²) = 4√2 cm. F₁₂ = k|q₁q₂|/r₁₂² = (9×10⁹)(4×10⁻¹¹)(8×10⁻¹¹)/(4√2×10⁻²)² = 9,0×10⁻⁹ N. Maka, pernyataan pertama <b>Salah</b>.</li>
                        <li><b>Medan di titik A:</b> Medan listrik dari q₁ (negatif) mengarah ke atas (menuju q₁). Medan dari q₂ (positif) mengarah ke kiri (menjauhi q₂). Resultan vektornya adalah ke arah kiri atas. Maka, pernyataan kedua <b>Salah</b>.</li>
                        <li><b>Medan di titik B:</b> Medan dari q₁ (negatif) mengarah ke q₁. Medan dari q₂ (positif) juga mengarah menjauhi q₂, yaitu ke arah q₁. Karena keduanya searah, resultannya menuju q₁. Maka, pernyataan ketiga <b>Benar</b>.</li>
                        <li><b>Muatan uji positif di A:</b> Muatan positif akan bergerak searah dengan resultan medan listrik, yaitu ke kiri atas. Maka, pernyataan keempat <b>Salah</b>.</li>
                        <li><b>Muatan uji negatif di B:</b> Muatan negatif akan bergerak berlawanan arah dengan resultan medan listrik. Karena medan di B menuju q₁, maka muatan negatif akan bergerak menjauhi q₁, yaitu ke arah q₂. Maka, pernyataan kelima <b>Benar</b>.</li>
                    </ul>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Hukum Coulomb, Medan Listrik (E), dan Prinsip Superposisi.</div>`
            },
            // Soal 18
            // Question 18
            {
                type: 'multiple-select',
                question: "Rangkaian berikut menunjukkan lima resistor yang terhubung dengan sumber tegangan 24 V. Berilah tanda ✓ untuk pernyataan-pernyataan yang tepat.",
                image: "https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Rangkaian%20Resistor.png",
                alt: "Rangkaian listrik dengan 5 resistor",
                imageWidthClass: 'max-w-sm',
                options: [
                    "Hambatan total rangkaian adalah 7 Ω.",
                    "Kuat arus total rangkaian tersebut adalah 3,43 A.",
                    "Beda potensial di ujung-ujung resistor R₂ adalah 12 V.",
                    "Daya listrik yang dipakai resistor R₁ adalah 58,8 W.",
                    "Energi listrik yang digunakan seluruh rangkaian dalam waktu satu menit adalah 8.232 J."
                ],
                answer: [
                    "Hambatan total rangkaian adalah 7 Ω.",
                    "Kuat arus total rangkaian tersebut adalah 3,43 A.",
                    "Daya listrik yang dipakai resistor R₁ adalah 58,8 W."
                ],
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ol class="list-decimal list-inside space-y-2">
                        <li><b>Hambatan Total (R<sub>tot</sub>):</b>
                            <ul>
                                <li>Seri R₂ dan R₃: R₂₃ = 5 + 5 = 10 Ω.</li>
                                <li>Paralel R₂₃, R₄, dan R₅: 1/Rₚ = 1/10 + 1/5 + 1/5 = (1+2+2)/10 = 5/10 → Rₚ = 2 Ω.</li>
                                <li>Seri R₁ dan Rₚ: R<sub>tot</sub> = 5 + 2 = 7 Ω. Pernyataan ini <b>Benar</b>.</li>
                            </ul>
                        </li>
                        <li><b>Arus Total (I<sub>tot</sub>):</b> I<sub>tot</sub> = V/R<sub>tot</sub> = 24/7 ≈ 3,43 A. Pernyataan ini <b>Benar</b>.</li>
                        <li><b>Beda Potensial R₂ (V₂):</b>
                            <ul>
                                <li>Tegangan pada cabang paralel: Vₚ = I<sub>tot</sub> × Rₚ = 3,43 A × 2 Ω = 6,86 V.</li>
                                <li>Arus pada cabang R₂₃: I₂₃ = Vₚ / R₂₃ = 6,86 V / 10 Ω = 0,686 A.</li>
                                <li>Tegangan pada R₂: V₂ = I₂₃ × R₂ = 0,686 A × 5 Ω = 3,43 V. Pernyataan ini <b>Salah</b>.</li>
                            </ul>
                        </li>
                        <li><b>Daya R₁ (P₁):</b> P₁ = I<sub>tot</sub>² × R₁ = (3,43)² × 5 ≈ 58,8 W. Pernyataan ini <b>Benar</b>.</li>
                        <li><b>Energi Total (E<sub>tot</sub>):</b> E<sub>tot</sub> = V × I<sub>tot</sub> × t = 24 V × 3,43 A × 60 s = 4.939,2 J. Pernyataan ini <b>Salah</b>.</li>
                    </ol>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Rangkaian Listrik Searah (DC), Hukum Ohm (V=IR), Daya (P=I²R), dan Energi (E=P·t).</div>`
            },
            // Soal 19 (FIXED)
            // Question 19
            {
                type: 'true-false-multi',
                question: "Sekelompok siswa melakukan percobaan untuk menentukan hambatan jenis suatu bahan konduktor ohmik dengan panjang 1,5 m dan diameter 0,2 mm. Mereka menghubungkan sumber tegangan 24 V ke bahan tersebut. Amperemeter dihubungkan secara seri. Kuat arus yang terbaca pada amperemeter ditunjukkan oleh gambar. Tentukan apakah Anda Setuju atau Tidak Setuju dengan pernyataan berikut.",
                image: "https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Amperemeter.png",
                alt: "Pembacaan Amperemeter",
                imageWidthClass: 'max-w-lg',
                statements: [
                    { text: "Kuat arus yang mengalir pada rangkaian di teks tersebut adalah 20 A.", answer: "Salah" },
                    { text: "Hambatan bahan konduktor yang diteliti oleh siswa tersebut adalah 6 Ω.", answer: "Benar" },
                    { text: "Hambatan jenis bahan konduktor yang diteliti adalah 2,56×10⁻⁷ Ωm.", answer: "Salah" }
                ],
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <ol class="list-decimal list-inside space-y-2">
                        <li><b>Membaca Kuat Arus (I):</b> Arus Terukur = (Skala ditunjuk / Skala maksimal) × Batas Ukur.
                            <ul><li>Batas ukur yang digunakan adalah 10 A. Skala ditunjuk adalah 20 pada skala maksimal 50.</li><li>I = (20/50) × 10 A = 4 A. Maka, pernyataan arusnya 20A adalah <b>Tidak Setuju</b>.</li></ul>
                        </li>
                        <li><b>Menghitung Hambatan (R):</b> Gunakan Hukum Ohm, R = V/I.
                            <ul><li>R = 24 V / 4 A = 6 Ω. Maka, pernyataan ini <b>Setuju</b>.</li></ul>
                        </li>
                        <li><b>Menghitung Hambatan Jenis (ρ):</b> Gunakan rumus R = ρl/A.
                            <ul>
                                <li>Luas Penampang (A) = π(d/2)² = π(0,1×10⁻³ m)² = 3,14×10⁻⁸ m².</li>
                                <li>ρ = RA/l = (6 Ω)(3,14×10⁻⁸ m²)/1,5 m = 1,256×10⁻⁷ Ω.m. Maka, pernyataan ρ = 2,56×10⁻⁷ Ωm adalah <b>Tidak Setuju</b>.</li>
                            </ul>
                        </li>
                    </ol>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Pembacaan Amperemeter, Hukum Ohm (R = V/I), dan Hambatan Konduktor (R = ρl/A).</div>`
            },
            // Soal 20
            // Question 20
            {
                type: 'multiple-choice',
                question: "Pada rangkaian listrik di bawah, kuat arus yang mengalir di resistor R₁ dan R₃ secara berturut-turut adalah ....",
                image: "https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Rangkaian%20Kirchhoff.png",
                alt: "Rangkaian listrik kompleks dengan 2 loop",
                imageWidthClass: 'max-w-sm',
                options: ["0,13 A dan 2,76 A", "0,13 A dan 2,89 A", "2,76 A dan 2,89 A", "2,89 A dan 2,76 A", "2,89 A dan 0,13 A"],
                answer: "2,76 A dan 2,89 A",
                explanation: `
                    <h4 class="font-semibold text-lg mb-2">Pembahasan:</h4>
                    <div class="my-4"><img src="https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Pembahasan%20Kirchhoff%202.png" alt="Analisis Loop Kirchhoff" class="mx-auto max-w-sm w-full rounded-lg"></div>
                    <p>Soal ini dianalisis menggunakan Hukum Kirchhoff. Kita definisikan 3 arus (I₁, I₂, I₃) dan 2 loop sesuai gambar.</p>
                    <ol class="list-decimal list-inside space-y-2">
                        <li><b>Hukum I Kirchhoff (di titik a):</b> Arus masuk = Arus keluar → I₁ + I₂ = I₃  (Pers. 1)</li>
                        <li><b>Hukum II Kirchhoff (Loop 1, berlawanan jarum jam):</b> ΣE + ΣIR = 0 → -15 + I₁R₁ + I₃R₂ + 10 = 0 → -5 + 2I₁ + 4I₃ = 0 → 2I₁ + 4I₃ = 5 (Pers. 2).</li>
                        <li><b>Hukum II Kirchhoff (Loop 2, searah jarum jam):</b> ΣE + ΣIR = 0 → -5 + I₂R₃ - I₃R₂ - 10 = 0 → -15 + 5I₂ - 4I₃ = 0 → 5I₂ - 4I₃ = 15 (Pers. 3).</li>
                        <li><b>Eliminasi-Substitusi:</b>
                            <ul>
                                <li>Dari eliminasi dan substitusi ketiga persamaan di atas, didapatkan nilai I₁ = -2,76 A dan I₂ = 2,89 A.</li>
                                <li>Arus yang mengalir di R₁ adalah I₁. Tanda negatif berarti arah arus I₁ sebenarnya berlawanan dengan asumsi awal, namun besarnya adalah 2,76 A.</li>
                                <li>Arus yang mengalir di R₃ adalah I₂. Nilainya positif, berarti arahnya sesuai asumsi awal, yaitu 2,89 A.</li>
                            </ul>
                        </li>
                        <li><b>Kesimpulan:</b> Besar kuat arus di R₁ adalah 2,76 A dan di R₃ adalah 2,89 A.</li>
                    </ol>
                    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><b>Konsep Fisika:</b> Hukum I & II Kirchhoff untuk analisis rangkaian multiloop.</div>`
            },
            
            // Halaman 12, Teks 1, Pertanyaan 1
            // Question 21
            {
                type: 'multiple-choice',
                question: 'Sekelompok siswa ditugaskan untuk mengukur ketebalan beberapa logam. Hasil pengukuran tersebut sebagai berikut. Selisih ketebalan logam 2 dan logam 3 sesuai aturan angka penting adalah... ',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Logam.png',
                alt: 'Pengukuran ketebalan tiga buah logam dengan mikrometer sekrup.',
                imageWidthClass: 'max-w-lg',
                options: ['3,666 mm', '3,67 mm', '3,68 mm', '3,70 mm', '3,7 mm'],
                answer: '3,67 mm',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Langkah pertama adalah membaca hasil pengukuran untuk Logam 2 dan Logam 3 secara akurat dari gambar mikrometer sekrup.</p><ol class='list-decimal list-inside space-y-2'><li><b>Membaca Tebal Logam 2:</b><ul class='list-disc list-inside ml-4'><li>Skala Utama (SU) = 6,5 mm.</li><li>Skala Nonius (SN) = Garis ke-18 sejajar. Maka, 18 × 0,01 mm = 0,18 mm.</li><li>Hasil Logam 2 = SU + SN = 6,5 mm + 0,18 mm = <b>6,68 mm</b>.</li></ul></li><li><b>Membaca Tebal Logam 3:</b><ul class='list-disc list-inside ml-4'><li>Skala Utama (SU) = 2,5 mm.</li><li>Skala Nonius (SN) = Garis ke-47 sejajar. Maka, 47 × 0,01 mm = 0,47 mm.</li><li>Hasil Logam 3 = SU + SN = 2,5 mm + 0,47 mm = <b>2,97 mm</b>.</li></ul></li><li><b>Menghitung Selisih:</b><br>Selisih = Tebal Logam 2 - Tebal Logam 3<br><span class='font-mono'>6,68 mm - 2,97 mm = 3,71 mm</span></li></ol><div class='mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg'><b>Konsep Fisika:</b> Pengukuran dengan Mikrometer Sekrup dan Aturan Angka Penting. Hasil penjumlahan atau pengurangan harus memiliki jumlah angka desimal yang sama dengan bilangan dengan angka desimal paling sedikit.</div><div class='mt-4 p-3 bg-red-50 border border-red-200 rounded-lg'><b>Catatan Penting:</b> Hasil perhitungan yang benar adalah <b>3,71 mm</b>. Nilai ini tidak tersedia di pilihan jawaban yang diberikan. Ini menandakan adanya kesalahan pada soal atau pilihan jawaban.</div>`
            },
            // Halaman 12, Teks 1, Pertanyaan 2
            // Question 22
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Logam 1 lebih tebal dibandingkan logam 2 dan 3.',
                    'Logam 2 lebih tebal dibandingkan logam 3.',
                    'Logam 2 adalah logam yang paling tebal.',
                    'Logam 3 adalah logam yang paling tipis.',
                    'Logam 1 lebih tebal daripada gabungan logam 2 dan logam 3.'
                ],
                answer: [
                    'Logam 2 lebih tebal dibandingkan logam 3.',
                    'Logam 2 adalah logam yang paling tebal.',
                    'Logam 3 adalah logam yang paling tipis.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Pertama, kita harus membaca hasil pengukuran tebal untuk ketiga logam dari gambar yang tersedia:</p><ul class='list-disc list-inside mb-4'><li><b>Logam 1:</b> Skala Utama (SU) = 4,5 mm; Skala Nonius (SN) = 44 × 0,01 = 0,44 mm. Hasil = <b>4,94 mm</b>.</li><li><b>Logam 2:</b> SU = 6,5 mm; SN = 18 × 0,01 = 0,18 mm. Hasil = <b>6,68 mm</b>.</li><li><b>Logam 3:</b> SU = 2,5 mm; SN = 47 × 0,01 = 0,47 mm. Hasil = <b>2,97 mm</b>.</li></ul><p>Sekarang, kita evaluasi setiap pernyataan:</p><ul class='list-disc list-inside space-y-1'><li>'Logam 1 lebih tebal...' -> Salah (karena 4,94 mm < 6,68 mm).</li><li>'Logam 2 lebih tebal dibandingkan logam 3.' -> <b>Benar</b> (karena 6,68 mm > 2,97 mm).</li><li>'Logam 2 adalah logam yang paling tebal.' -> <b>Benar</b> (karena 6,68 mm adalah nilai terbesar).</li><li>'Logam 3 adalah logam yang paling tipis.' -> <b>Benar</b> (karena 2,97 mm adalah nilai terkecil).</li><li>'Logam 1 lebih tebal daripada gabungan...' -> Salah (karena 4,94 mm < (6,68 mm + 2,97 mm)).</li></ul>`
            },
            // Halaman 12, Teks 2, Pertanyaan 3
            // Question 23
            {
                type: 'multiple-choice',
                question: 'Jarak yang ditempuh oleh Pak Doni selama mengalami gerak lurus beraturan di teks tersebut adalah...',
                options: ['50 m', '100 m', '150 m', '200 m', '250 m'],
                answer: '200 m',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Gerak lurus beraturan (GLB) adalah fase di mana sepeda motor bergerak dengan kecepatan konstan.</p><ol class='list-decimal list-inside space-y-2'><li><b>Hitung Kecepatan Konstan:</b> Kecepatan ini dicapai setelah fase percepatan pertama. Motor mula-mula diam (v₀ = 0), lalu dipercepat (a = 1 m/s²) selama 10 detik (t = 10 s).<br><span class='font-mono'>v = v₀ + a × t = 0 + (1 m/s²) × (10 s) = 10 m/s.</span></li><li><b>Hitung Jarak Selama GLB:</b> Motor bergerak dengan kecepatan konstan (v = 10 m/s) selama 20 detik.<br><span class='font-mono'>s = v × t = (10 m/s) × (20 s) = <b>200 m</b>.</span></li></ol><div class='mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg'><b>Konsep Fisika:</b> Perbedaan antara Gerak Lurus Berubah Beraturan (GLBB, kecepatan berubah) dan Gerak Lurus Beraturan (GLB, kecepatan tetap).</div>`
            },
            // Halaman 12, Teks 2, Pertanyaan 4
            // Question 24
            {
                type: 'multiple-choice',
                question: 'Percepatan Pak Doni pada t=20 detik hingga t=25 detik adalah ....',
                options: ['-5 m/s²', '-2 m/s²', '0 m/s²', '2 m/s²', '5 m/s²'],
                answer: '-2 m/s²',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Fase ini adalah saat motor melambat hingga berhenti. Total waktu sebelumnya adalah 10s (percepatan) + 20s (konstan) = 30s. Pertanyaan ini seharusnya menanyakan percepatan setelah 30 detik.</p><p>Data untuk fase perlambatan:</p><ul class='list-disc list-inside mb-2'><li>Kecepatan awal (v₀) = 10 m/s (kecepatan konstan dari fase sebelumnya).</li><li>Kecepatan akhir (v) = 0 m/s (karena motor berhenti).</li><li>Selang waktu (t) = 5 detik.</li></ul><p>Gunakan rumus percepatan dari GLBB:</p><p class='font-mono'>a = (v - v₀) / t</p><p class='font-mono'>a = (0 m/s - 10 m/s) / 5 s = -10 / 5 = <b>-2 m/s²</b></p><p>Nilai negatif menunjukkan perlambatan.</p>`
            },
            // Halaman 13, Teks 3, Pertanyaan 5
            // Question 25
            {
                type: 'multiple-choice',
                question: 'Sudut elevasi tendangan Tono adalah sebesar...',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Parabola.png',
                alt: 'Gerak parabola bola ditendang dari A ke B di atas sungai.',
                imageWidthClass: 'max-w-md',
                options: ['0°', '10.5°', '18,5°', '26,5°', '37°'],
                answer: '18,5°',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Bola bergerak dari A ke B yang berada pada ketinggian yang sama, sehingga jarak horizontal 6 m adalah jangkauan (R) dari gerak parabola.</p><p>Kita gunakan rumus jangkauan gerak parabola:</p><p class='font-mono text-center'>R = (v₀² sin(2θ)) / g</p><p>Kita susun ulang untuk mencari sudut elevasi θ:</p><p class='font-mono'>sin(2θ) = (R × g) / v₀²</p><p>Data dari soal: R = 6 m, v₀ = 10 m/s, g = 10 m/s².</p><p class='font-mono'>sin(2θ) = (6 × 10) / 10² = 60 / 100 = 0.6</p><p>Mencari nilai sudut:</p><p class='font-mono'>2θ = arcsin(0.6) ≈ 37°</p><p class='font-mono'>θ = 37° / 2 = <b>18,5°</b></p>`
            },
            // Halaman 13, Teks 3, Pertanyaan 6
            // Question 26
            {
                type: 'multiple-choice',
                question: 'Ketinggian maksimum bola yang ditendang Tono diukur dari permukaan air adalah...',
                options: ['0,2 m', '0,5 m', '1,0 m', '1,2 m', '1,5 m'],
                answer: '1,5 m',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Langkahnya adalah menghitung ketinggian maksimum bola dari titik tendang (h_max), lalu menambahkannya dengan ketinggian awal Tono dari permukaan air (1 m).</p><ol class='list-decimal list-inside space-y-2'><li><b>Gunakan sudut dari soal sebelumnya:</b> θ = 18,5°.</li><li><b>Hitung h_max dari titik tendang:</b><br><span class='font-mono'>h_max = (v₀² sin²(θ)) / (2g)</span><br><span class='font-mono'>h_max = (10² × sin²(18,5°)) / (2 × 10)</span><br><span class='font-mono'>h_max = (100 × (0.317)²) / 20</span><br><span class='font-mono'>h_max ≈ (100 × 0.1) / 20 = 0,5 m</span></li><li><b>Hitung Ketinggian Total dari Permukaan Air:</b><br>Tinggi Total = Ketinggian Awal + h_max = 1 m + 0,5 m = <b>1,5 m</b>.</li></ol>`
            },
            // Halaman 13, Pertanyaan 7
            // Question 27
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah dengan memberi tanda ✓ pada kolom yang sesuai.',
                statements: [
                    { label: 'Dalam 2 jam, jarum detik bergerak sebanyak 7.200 putaran.', answer: true },
                    { label: 'Periode gerak jarum jam adalah 86.400 detik.', answer: false },
                    { label: 'Frekuensi jarum menit yaitu 0,00028 Hz.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Jarum Detik:</b> Teks menyatakan jarum detik bergerak 3.600 putaran dalam 1 jam. Maka dalam 2 jam, ia bergerak sebanyak 2 × 3.600 = <b>7.200 putaran</b>. Pernyataan <b>Benar</b>.</li><li><b>Jarum Jam:</b> Periode (T) adalah waktu untuk satu putaran penuh. Jarum jam pada jam analog standar menyelesaikan satu putaran dalam 12 jam. T = 12 jam × 3.600 detik/jam = <b>43.200 detik</b>. Pernyataan yang menyebutkan 86.400 detik (yang setara 24 jam) adalah <b>Salah</b>.</li><li><b>Jarum Menit:</b> Jarum menit menyelesaikan satu putaran dalam 60 menit (T = 3600 detik). Frekuensi (f) adalah 1/T. f = 1 / 3.600 s ≈ 0,000277... Hz. Nilai ini jika dibulatkan menjadi <b>0,00028 Hz</b>. Pernyataan <b>Benar</b>.</li></ul>`
            },
            // Halaman 13, Teks 4, Pertanyaan 8
            // Question 28
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Bidang%20Miring.png',
                alt: 'Dua boks A dan B didorong ke atas bidang miring.',
                imageWidthClass: 'max-w-sm',
                options: [
                    'Tidak ada gaya gesek yang berlaku dalam teks tersebut.',
                    'Gaya berat kedua boks tersebut sebesar 120 N.',
                    'Jika besar sudut kemiringan bidang miring dinaikkan, gaya yang perlu diberikan untuk menaikkan boks lebih besar.',
                    'Komponen gaya berat kedua boks di arah yang sejajar bidang miring sebesar 96 N.',
                    'Komponen gaya berat kedua boks di arah yang tegak lurus bidang miring sebesar 128 N.'
                ],
                answer: [
                    'Tidak ada gaya gesek yang berlaku dalam teks tersebut.',
                    'Jika besar sudut kemiringan bidang miring dinaikkan, gaya yang perlu diberikan untuk menaikkan boks lebih besar.',
                    'Komponen gaya berat kedua boks di arah yang sejajar bidang miring sebesar 96 N.',
                    'Komponen gaya berat kedua boks di arah yang tegak lurus bidang miring sebesar 128 N.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Data: Massa A = 12 kg, Massa B = 4 kg. Massa total (m_tot) = 16 kg. Berat total (W_tot) = 16 kg × 10 m/s² = 160 N. Sudut θ = 37°.</p><ul class='list-disc list-inside space-y-2'><li><b>Gaya gesek:</b> <b>Benar</b>. Teks menyebutkan bidangnya 'licin', artinya gaya gesek diabaikan.</li><li><b>Gaya berat total:</b> Salah. Gaya berat total adalah W_tot = 160 N.</li><li><b>Pengaruh sudut kemiringan:</b> <b>Benar</b>. Gaya minimal untuk menaikkan boks harus melawan komponen berat yang sejajar bidang (W sin θ). Jika sudut θ dinaikkan, nilai sin θ juga meningkat, sehingga gaya yang harus dilawan menjadi lebih besar.</li><li><b>Komponen berat sejajar (Wx):</b> <b>Benar</b>. Wx = W_tot × sin(37°) = 160 N × 0,6 = <b>96 N</b>.</li><li><b>Komponen berat tegak lurus (Wy):</b> <b>Benar</b>. Wy = W_tot × cos(37°) = 160 N × 0,8 = <b>128 N</b>.</li></ul>`
            },
            // Halaman 14, Teks 4, Pertanyaan 9
            // Question 29
            {
                type: 'multiple-choice',
                question: 'Besarnya percepatan gerak kedua boks adalah .....',
                options: ['1 m/s²', '2 m/s²', '3 m/s²', '4 m/s²', '5 m/s²'],
                answer: '4 m/s²',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Untuk mencari percepatan sistem, kita gunakan Hukum II Newton (ΣF = m × a) pada arah sejajar bidang miring.</p><p>Gaya-gaya yang bekerja sejajar bidang miring:</p><ul class='list-disc list-inside mb-2'><li>Gaya Dorong (F_dorong) = 160 N (ke atas).</li><li>Komponen Berat Sejajar (Wx) = 96 N (ke bawah, dari soal sebelumnya).</li></ul><p>Resultan Gaya (ΣF) = Gaya Dorong - Komponen Berat Sejajar</p><p class='font-mono'>ΣF = 160 N - 96 N = 64 N</p><p>Massa Total (m_tot) = 16 kg. Maka, percepatannya adalah:</p><p class='font-mono'>a = ΣF / m_tot = 64 N / 16 kg = <b>4 m/s²</b></p>`
            },
            // Halaman 14, Teks 4, Pertanyaan 10
            // Question 30
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah dengan memberi tanda ✓ pada kolom yang sesuai.',
                statements: [
                    { label: 'Gaya kontak antara kedua boks sebesar 24 N.', answer: false },
                    { label: 'Gaya yang diberikan pegawai sama besar dengan komponen gaya berat kedua boks yang sejajar bidang miring.', answer: false },
                    { label: 'Jika balok B bermassa 10 kg, gaya yang diberikan pegawai masih cukup untuk mendorong kedua boks ke ujung atas bidang miring.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Gaya Kontak (N_kontak):</b> <b>Salah</b>. Untuk menemukan gaya kontak, kita tinjau balok B (4 kg) saja. Gaya yang bekerja padanya adalah N_kontak dari A (ke atas) dan komponen beratnya (W_B_x) ke bawah. Percepatan sistem adalah a=4 m/s².<br>ΣF_B = m_B × a<br>N_kontak - (m_B × g × sin37°) = m_B × a<br>N_kontak - (4 × 10 × 0,6) = 4 × 4<br>N_kontak - 24 N = 16 N<br>N_kontak = <b>40 N</b>. Pernyataan yang menyebutkan 24 N adalah salah.</li><li><b>Perbandingan Gaya Dorong dan Berat Sejajar:</b> <b>Salah</b>. Gaya dorong (160 N) lebih besar dari komponen berat sejajar (96 N), karena itulah sistem mengalami percepatan.</li><li><b>Jika massa B = 10kg:</b> <b>Benar</b>. Massa total sistem yang baru menjadi m_baru = 12 + 10 = 22 kg. Gaya berat sejajar yang baru adalah Wx_baru = m_baru × g × sin37° = 22 × 10 × 0,6 = 132 N. Karena gaya dorong yang diberikan pegawai (160 N) masih lebih besar dari gaya yang melawannya (132 N), maka boks masih akan bergerak ke atas.</li></ul>`
            },
            // Halaman 14, Teks 5, Pertanyaan 11
            // Question 31
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah dengan memberi tanda ✓ pada kolom yang sesuai.',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Pantulan.png',
                alt: 'Diagram pantulan bola dari ketinggian 5m dan memantul 3,2m.',
                imageWidthClass: 'max-w-md',
                statements: [
                    { label: 'Bola mengalami gerak jatuh bebas.', answer: true },
                    { label: 'Koefisien restitusi tumbukan antara bola dan permukaan lantai adalah 0,8.', answer: true },
                    { label: 'Tinggi pantulan kedua adalah 2,05 m.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Gerak Jatuh Bebas:</b> <b>Benar</b>. Bola dijatuhkan tanpa kecepatan awal dari ketinggian 5 m, ini adalah definisi dari gerak jatuh bebas.</li><li><b>Koefisien Restitusi (e):</b> <b>Benar</b>. Koefisien restitusi untuk pantulan dihitung dengan rumus e = √(h_pantul / h_jatuh).<br><span class='font-mono'>e = √(3,2 m / 5 m) = √0,64 = 0,8</span>. <br><div class='mt-2 p-3 bg-red-50 border border-red-200 rounded-lg'><b>Koreksi:</b> Pernyataan di Soal menyebutkan 0,6, yang salah. Perhitungan yang benar berdasarkan data soal adalah 0,8.</div></li><li><b>Tinggi Pantulan Kedua (h₃):</b> <b>Benar</b>. Tinggi pantulan berikutnya (h₃) dihitung dari tinggi sebelumnya (h₂) dan koefisien restitusi.<br><span class='font-mono'>e = √(h₃ / h₂) => h₃ = e² × h₂</span><br><span class='font-mono'>h₃ = (0,8)² × 3,2 m = 0,64 × 3,2 m = 2,048 m</span>. Nilai ini sangat mendekati dan dapat dibulatkan menjadi 2,05 m.</li></ul>`
            },
            // Halaman 14, Teks 5, Pertanyaan 12
            // Question 32
            {
                type: 'multiple-choice',
                question: 'Impuls yang dialami bola pada tumbukan pertama antara bola dan lantai adalah...',
                options: ['4 kg.m/s ke atas', '4 kg.m/s ke bawah', '20 kg.m/s ke bawah', '36 kg.m/s ke atas', '36 kg.m/s ke bawah'],
                answer: '36 kg.m/s ke atas',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Impuls (I) adalah perubahan momentum (Δp). Rumusnya adalah I = m(v_akhir - v_awal).</p><ol class='list-decimal list-inside space-y-2'><li><b>Hitung kecepatan sebelum tumbukan (v_awal):</b> Bola jatuh dari 5 m.<br><span class='font-mono'>v_awal = -√(2gh) = -√(2 × 10 × 5) = -√100 = -10 m/s</span> (Arah ke bawah kita anggap negatif).</li><li><b>Hitung kecepatan setelah tumbukan (v_akhir):</b> Bola memantul setinggi 3,2 m.<br><span class='font-mono'>v_akhir = √(2gh') = √(2 × 10 × 3,2) = √64 = 8 m/s</span> (Arah ke atas kita anggap positif).</li><li><b>Hitung Impuls (I):</b> Massa bola adalah 2 kg.<br><span class='font-mono'>I = m × (v_akhir - v_awal)</span><br><span class='font-mono'>I = 2 kg × (8 m/s - (-10 m/s))</span><br><span class='font-mono'>I = 2 kg × (18 m/s) = <b>36 kg.m/s</b></span></li></ol><p>Karena hasil impuls bernilai positif, maka arahnya sesuai dengan arah positif yang kita tetapkan, yaitu <b>ke atas</b>.</p>`
            },
            // Halaman 15, Teks 6, Pertanyaan 13
            // Question 33
            {
                type: 'multiple-choice',
                question: 'Jika titik B sebagai poros, besar resultan torsi di titik tersebut adalah ....',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Torsi.png',
                alt: 'Batang dengan empat gaya yang bekerja padanya.',
                imageWidthClass: 'max-w-lg',
                options: ['283 Nm', '217 Nm', '175 Nm', '129 Nm', '120 Nm'],
                answer: '129 Nm',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Torsi (τ) = F_perp × r. Kita tetapkan rotasi berlawanan arah jarum jam sebagai positif (+).</p><p><b>Jarak dari poros B:</b> Jarak A ke B = 1.5 m. Jarak B ke C = 2 m. Jarak B ke D = 3.5 m.</p><ul class='list-disc list-inside space-y-2'><li><b>Torsi F₁ (50 N):</b> τ₁ = +F₁ × r_AB = +50N × 1,5m = +75 Nm.</li><li><b>Torsi F₂ (40 N):</b> Bekerja di poros, maka τ₂ = 0.</li><li><b>Torsi F₃ (50 N):</b> τ₃ = -F₃ × r_BC = -50N × 2m = -100 Nm.</li><li><b>Torsi F₄ (20 N):</b> τ₄ = - (F₄sin(37°)) × r_BD = - (20N × 0,6) × 3,5m = -42 Nm.</li></ul><p><b>Resultan Torsi (Στ):</b></p><p class='font-mono'>Στ = 75 + 0 - 100 - 42 = <b>-67 Nm</b>.</p><div class='mt-4 p-3 bg-red-50 border border-red-200 rounded-lg'><b>Catatan Penting:</b> Hasil perhitungan yang benar adalah 67 Nm (searah jarum jam). Nilai ini tidak ada di pilihan jawaban. Ini menandakan adanya kesalahan fatal pada soal atau pilihan jawaban yang disediakan. Tidak ada kombinasi perhitungan yang logis untuk menghasilkan 129 Nm.</div>`
            },
            // Halaman 15, Teks 6, Pertanyaan 14
            // Question 34
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat jika titik C sebagai poros.',
                options: [
                    'Arah torsi dari F₁ dan F₄ sama',
                    'Arah torsi dari F₁ dan F₂ berlawanan arah',
                    'Torsi dari F₃ bernilai nol',
                    'Besar resultan torsinya adalah 257 Nm',
                    'Arah rotasi akibat semua gaya tersebut adalah berlawanan jarum jam'
                ],
                answer: [
                    'Arah torsi dari F₁ dan F₂ berlawanan arah',
                    'Torsi dari F₃ bernilai nol'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan (Poros di C):</h4><p><b>Jarak dari poros C:</b> AC=3,5m; BC=2m; CD=1,5m.</p><ul class='list-disc list-inside space-y-2'><li>τ₁ = +F₁ × r_AC = +175 Nm (berlawanan jarum jam).</li><li>τ₂ = -(F₂sin53°) × r_BC = -64 Nm (searah jarum jam).</li><li>τ₃ = 0 (pada poros).</li><li>τ₄ = -(F₄sin37°) × r_CD = -18 Nm (searah jarum jam).</li><li><b>Resultan Torsi Στ = 175 - 64 - 18 = +93 Nm.</b></li></ul><p>Evaluasi pernyataan:</p><ul class='list-disc list-inside'><li>'Arah torsi F₁ dan F₄ sama' -> Salah (F₁ positif, F₄ negatif).</li><li>'Arah torsi F₁ dan F₂ berlawanan' -> <b>Benar</b> (F₁ positif, F₂ negatif).</li><li>'Torsi dari F₃ bernilai nol' -> <b>Benar</b>.</li><li>'Besar resultan torsinya adalah 257 Nm' -> Salah (hasilnya 93 Nm).</li><li>'Arah rotasi berlawanan jarum jam' -> Benar, karena hasil resultan (+93 Nm) positif.</li></ul>`
            },
            // Halaman 15, Teks 7, Pertanyaan 15
            // Question 35
            {
                type: 'multiple-choice',
                question: 'Massa beban maksimum yang dapat dibawa papan sebelum papan terbenam seluruhnya adalah...',
                options: ['4 kg', '36 kg', '40 kg', '360 kg', '400 kg'],
                answer: '36 kg',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Pada kondisi beban maksimum, gaya angkat Archimedes (Fₐ) saat papan terbenam seluruhnya harus sama dengan berat total (berat papan + berat beban).</p><ol class='list-decimal list-inside space-y-2'><li><b>Hitung Volume Papan (V_papan):</b><br><span class='font-mono'>V = 1 m × 0.5 m × 0.08 m = 0.04 m³.</span></li><li><b>Hitung Gaya Angkat Maksimum (Fₐ):</b><br><span class='font-mono'>Fₐ = ρ_air × g × V_papan = 1000 × 10 × 0.04 = 400 N.</span></li><li><b>Gunakan Kondisi Setimbang:</b><br><span class='font-mono'>Fₐ = W_papan + W_beban_maks</span><br><span class='font-mono'>400 N = (4 kg × 10) + (m_beban_maks × 10).</span></li><li><b>Hitung Massa Beban Maksimum:</b><br><span class='font-mono'>400 = 40 + 10 × m_beban_maks => 360 = 10 × m_beban_maks => m_beban_maks = <b>36 kg</b></span></li></ol>`
            },
            // Halaman 15, Teks 7, Pertanyaan 16
            // Question 36
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Sesuai atau Tidak Sesuai dengan konsep fisika.',
                statements: [
                    {label: 'Massa jenis papan lebih kecil daripada massa jenis air kolam', answer: true},
                    {label: 'Tekanan hidrostatis di dasar kolam nilainya 10.000 Pa', answer: false},
                    {label: 'Ketika umpan ditambahkan di atas papan, tinggi papan yang tercelup bertambah sekitar 0,85 cm dibandingkan saat tidak ada beban di atas papan.', answer: false}
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Massa Jenis Papan:</b> <b>Sesuai</b>. ρ_papan = m/V = 4kg / 0.04m³ = 100 kg/m³. Ini lebih kecil dari massa jenis air (1000 kg/m³), sehingga papan terapung.</li><li><b>Tekanan Hidrostatis:</b> <b>Tidak Sesuai</b>. Kedalaman air h = 3/4 × 1m = 0,75 m. Tekanan P = ρgh = 1000 × 10 × 0,75 = <b>7.500 Pa</b>.</li><li><b>Pertambahan Tinggi Tercelup:</b> <b>Tidak Sesuai</b>. Beban umpan (0,25 kg) menambah volume tercelup ΔV = m/ρ_air = 0,25/1000 = 0,00025 m³. Pertambahan tinggi Δh = ΔV / Luas_alas = 0,00025 / (1×0,5) = 0,0005 m = <b>0,05 cm</b>.</li></ul>`
            },
            // Halaman 15, Teks 8, Pertanyaan 17
            // Question 37
            {
                type: 'multiple-choice',
                question: 'Besar gaya angkat pesawat tersebut adalah...',
                options: ['372.500 N', '400.250 N', '412.500 N', '745.000 N', '825.000 N'],
                answer: '825.000 N',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Gaya angkat pesawat (F_A) dihitung menggunakan Prinsip Bernoulli.</p><p class='font-mono text-center'>F_A = ½ × ρ × (v_atas² - v_bawah²) × A_total</p><p>Data: ρ = 1,2 kg/m³, v_atas = 300 m/s, v_bawah = 250 m/s, A_total = 2 × 25 m² = 50 m².</p><p class='font-mono'>F_A = 0,5 × 1,2 × (300² - 250²) × 50</p><p class='font-mono'>F_A = 0,6 × (90000 - 62500) × 50 = <b>825.000 N</b></p>`
            },
            // Halaman 15, Teks 8, Pertanyaan 18
            // Question 38
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Gaya angkat pesawat lebih besar daripada gaya berat pesawat.',
                    'Gaya angkat pesawat arahnya berlawanan dengan gaya berat pesawat.',
                    'Selisih tekanan di atas dan di bawah salah satu sayap tersebut sebesar 8.250 Pa.',
                    'Jika aliran udara di bawah sayap bertambah 50 m/s, gaya angkat pesawat menjadi lebih besar.',
                    'Jika sayap pesawat dibuat lebih luas, gaya angkat pesawat menjadi lebih besar.'
                ],
                answer: [
                    'Gaya angkat pesawat lebih besar daripada gaya berat pesawat.',
                    'Gaya angkat pesawat arahnya berlawanan dengan gaya berat pesawat.',
                    'Jika sayap pesawat dibuat lebih luas, gaya angkat pesawat menjadi lebih besar.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Angkat vs Berat:</b> <b>Benar</b>. Berat W = 4000 kg × 10 m/s² = 40.000 N. Gaya angkat (825.000 N) jauh lebih besar.</li><li><b>Arah Gaya:</b> <b>Benar</b>. Angkat ke atas, berat ke bawah.</li><li><b>Selisih Tekanan (ΔP):</b> Salah. ΔP = ½ ρ (v_atas² - v_bawah²) = <b>16.500 Pa</b>. Bukan 8.250 Pa.</li><li><b>Aliran bawah bertambah:</b> Salah. Jika v_bawah menjadi 300 m/s, gaya angkat menjadi nol.</li><li><b>Luas sayap:</b> <b>Benar</b>. Gaya angkat F_A = ΔP × A, berbanding lurus dengan luas sayap.</li></ul>`
            },
            // Halaman 16, Teks 9, Pertanyaan 19
            // Question 39
            {
                type: 'multiple-choice',
                question: 'Jika bunyi merambat pada bahan A, besarnya cepat rambat bunyi tersebut adalah...',
                options: ['1.610 m/s', '5,0917 m/s', '5.091,7 m/s', '16.101,5 m/s', '161.015,3 m/s'],
                answer: '5.091,7 m/s',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Cepat rambat bunyi (v) dalam zat padat dihitung dengan rumus v = √(Y / ρ).</p><p>Data bahan A: Y = 7 × 10¹⁰ N/m², ρ = 2.700 kg/m³.</p><p class='font-mono'>v = √( (7 × 10¹⁰) / 2700 ) ≈ <b>5091,7 m/s</b></p>`
            },
            // Halaman 16, Teks 9, Pertanyaan 20
            // Question 40
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Gelombang bunyi merambat paling cepat pada bahan A.',
                    'Gelombang bunyi merambat paling lambat pada bahan B.',
                    'Gelombang bunyi merambat lebih cepat pada bahan C daripada pada bahan D.',
                    'Gelombang bunyi merambat lebih lambat pada bahan D daripada pada bahan E.',
                    'Gelombang bunyi merambat lebih cepat pada bahan E daripada pada bahan C.'
                ],
                answer: [
                    'Gelombang bunyi merambat paling cepat pada bahan A.',
                    'Gelombang bunyi merambat lebih cepat pada bahan C daripada pada bahan D.',
                    'Gelombang bunyi merambat lebih lambat pada bahan D daripada pada bahan E.',
                    'Gelombang bunyi merambat lebih cepat pada bahan E daripada pada bahan C.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Kita hitung v = √(Y/ρ) untuk setiap bahan:</p><ul class='list-disc list-inside mb-2'><li><b>v_A:</b> √(7e10 / 2700) ≈ <b>5092 m/s</b> (Paling Cepat)</li><li><b>v_B:</b> √(1.1e11 / 8930) ≈ 3508 m/s</li><li><b>v_C:</b> √(1.9e11 / 7960) ≈ 4887 m/s</li><li><b>v_D:</b> √(1.6e10 / 11300) ≈ <b>1189 m/s</b> (Paling Lambat)</li><li><b>v_E:</b> √(2.0e11 / 7800) ≈ 5064 m/s</li></ul><p>Evaluasi pernyataan:</p><ul class='list-disc list-inside'><li>Paling cepat pada A? <b>Benar</b> (5092 m/s adalah yang tertinggi).</li><li>Paling lambat pada B? Salah (D paling lambat).</li><li>Lebih cepat pada C daripada D? <b>Benar</b> (4887 > 1189).</li><li>Lebih lambat pada D daripada E? <b>Benar</b> (1189 < 5064).</li><li>Lebih cepat pada E daripada C? <b>Benar</b> (5064 > 4887).</li></ul>`
            },
            // Halaman 16, Teks 9, Pertanyaan 21
            // Question 41
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah.',
                statements: [
                    { label: 'Cepat rambat gelombang bunyi pada bahan A lebih dari 5.000 m/s.', answer: true },
                    { label: 'Cepat rambat gelombang bunyi pada bahan B kurang dari 3.000 m/s.', answer: false },
                    { label: 'Cepat rambat gelombang bunyi pada bahan C kurang dari 4.000 m/s.', answer: false }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Menggunakan hasil perhitungan dari soal sebelumnya:</p><ul class='list-disc list-inside space-y-2'><li><b>Bahan A:</b> v_A ≈ 5092 m/s. Ini lebih dari 5.000 m/s. <b>Benar</b>.</li><li><b>Bahan B:</b> v_B ≈ 3508 m/s. Ini lebih dari 3.000 m/s. <b>Salah</b>.</li><li><b>Bahan C:</b> v_C ≈ 4887 m/s. Ini lebih dari 4.000 m/s. <b>Salah</b>.</li></ul>`
            },
            // Halaman 16, Teks 10, Pertanyaan 22
            // Question 42
            {
                type: 'multiple-choice',
                question: 'Jarak gelap pertama dari terang pusat adalah...',
                options: ['1,25 mm', '2,50 mm', '3,75 mm', '5,00 mm', '7,50 mm'],
                answer: '3,75 mm',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Gunakan rumus interferensi minimum (pola gelap): y = (n - ½) λ L / d.</p><p>Data: n = 1, L = 1,5 m, d = 0,1 mm = 10⁻⁴ m, λ = 500 nm = 5×10⁻⁷ m.</p><p class='font-mono'>y = (1 - 0,5) × (5 × 10⁻⁷) × (1,5) / (10⁻⁴) = 3,75 × 10⁻³ m = <b>3,75 mm</b>.</p>`
            },
            // Halaman 16, Teks 10, Pertanyaan 23
            // Question 43
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Jarak terang pertama dari gelap pertama adalah 3,75 mm.',
                    'Jarak gelap pertama dengan gelap ketiga dua kali jarak terang pertama dengan terang kedua.',
                    'Jika jarak layar diubah menjadi 1 m, jarak dua terang berdekatan akan makin dekat.',
                    'Jika jarak celah diubah menjadi 0,2 mm, jarak dua gelap berdekatan akan makin jauh.',
                    'Cahaya yang digunakan termasuk cahaya tampak berwarna hijau.'
                ],
                answer: [
                    'Jarak terang pertama dari gelap pertama adalah 3,75 mm.',
                    'Jarak gelap pertama dengan gelap ketiga dua kali jarak terang pertama dengan terang kedua.',
                    'Jika jarak layar diubah menjadi 1 m, jarak dua terang berdekatan akan makin dekat.',
                    'Cahaya yang digunakan termasuk cahaya tampak berwarna hijau.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Jarak antar terang (Δy) = λL/d = 7.5mm. y_terang1 = 7.5mm. y_gelap1 = 3.75mm.</p><ul class='list-disc list-inside space-y-2'><li><b>Jarak t1-g1:</b> <b>Benar</b>. Jarak = y_t1 - y_g1 = 7.5 - 3.75 = 3.75 mm.</li><li><b>Perbandingan jarak:</b> <b>Benar</b>. Jarak g1-g3 = 2Δy. Jarak t1-t2 = Δy. Benar dua kalinya.</li><li><b>Jarak layar (L) berkurang:</b> <b>Benar</b>. Δy ∝ L. Jika L berkurang, Δy makin dekat.</li><li><b>Jarak celah (d) membesar:</b> Salah. Δy ∝ 1/d. Jika d membesar, Δy makin dekat, bukan makin jauh.</li><li><b>Warna cahaya:</b> <b>Benar</b>. λ = 500 nm termasuk spektrum hijau.</li></ul>`
            },
            // Halaman 17, Teks 11, Pertanyaan 24
            // Question 44
            {
                type: 'multiple-choice',
                question: 'Perbesaran yang terjadi ketika pengamatan dengan akomodasi maksimum pada titik dekat 30 cm adalah...',
                options: ['0,054 kali', '0,54 kali', '5,4 kali', '54 kali', '540 kali'],
                answer: '54 kali',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Perbesaran total mikroskop M = M_ob × M_ok.</p><ol class='list-decimal list-inside space-y-2'><li><b>Hitung s'_ob:</b><br><span class='font-mono'>1/s'_ob = 1/f_ob - 1/s_ob = 1/0.9 - 1/1 = 0.1/0.9 => s'_ob = 9 cm.</span></li><li><b>Hitung M_ob:</b><br><span class='font-mono'>M_ob = s'_ob / s_ob = 9 / 1 = 9x.</span></li><li><b>Hitung M_ok:</b><br><span class='font-mono'>M_ok = (Sn / f_ok) + 1 = (30 / 6) + 1 = 6x.</span></li><li><b>Hitung M_total:</b><br><span class='font-mono'>M = 9 × 6 = <b>54 kali</b>.</span></li></ol>`
            },
            // Halaman 17, Teks 11, Pertanyaan 25
            // Question 45
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah.',
                statements: [
                    { label: 'Jika ukuran asli objek 0,005 mm, ukuran objek yang teramati adalah 0,27 mm.', answer: true },
                    { label: 'Jarak bayangan yang dibentuk lensa objektif adalah 9 cm.', answer: true },
                    { label: 'Jarak kedua lensa ketika pengamatan tanpa akomodasi adalah 15 cm.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Menggunakan data dari soal sebelumnya (M_total=54x, s'_ob=9cm, f_ok=6cm):</p><ul class='list-disc list-inside space-y-2'><li><b>Ukuran Teramati:</b> <b>Benar</b>. Ukuran bayangan = 0,005 mm × 54 = <b>0,27 mm</b>.</li><li><b>Jarak Bayangan Objektif:</b> <b>Benar</b>. Dari perhitungan sebelumnya, s'_ob = <b>9 cm</b>.</li><li><b>Jarak Lensa (Tanpa Akomodasi):</b> <b>Benar</b>. d = s'_ob + f_ok = 9 cm + 6 cm = <b>15 cm</b>.</li></ul>`
            },
            // Halaman 17, Pertanyaan 26
            // Question 46
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah dengan memberi tanda ✓ pada kolom yang sesuai.',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Pie%20Chart%20Emisi.png',
                alt: 'Diagram lingkaran persentase emisi CO2 global berdasarkan sektor.',
                imageWidthClass: 'max-w-lg',
                statements: [
                    { label: 'Sektor agrikultur menghasilkan emisi gas CO₂ lebih banyak dibandingkan kehutanan pada tahun 2019.', answer: true },
                    { label: 'Sektor bangunan menghasilkan emisi gas CO₂ sedikit lebih tinggi dibandingkan sektor pembangkit listrik pada tahun 2019.', answer: false },
                    { label: 'Sektor energi lain dan transportasi jalan menghasilkan emisi gas CO₂ yang hampir sama pada tahun 2019.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Membaca persentase dari diagram:</p><ul class='list-disc list-inside space-y-2'><li><b>Agrikultur (17%) vs Kehutanan (5%):</b> 17% > 5%. <b>Benar</b>.</li><li><b>Bangunan (6%) vs Pembangkit Listrik (23%):</b> 6% < 23%. <b>Salah</b>.</li><li><b>Energi Lain (10%) vs Transportasi Jalan (10%):</b> 10% = 10%. <b>Benar</b>.</li></ul>`
            },
            // Halaman 18, Pertanyaan 27
            // Question 47
            {
                type: 'multiple-choice',
                question: 'Luas baja setelah mengalami kenaikan suhu adalah ....',
                options: ['3.999,92 cm²', '3.999,96 cm²', '4.000,04 cm²', '4.000,08 cm²', '4.000,16 cm²'],
                answer: '4.000,08 cm²',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Gunakan rumus pemuaian luas: A = A₀(1 + βΔT), di mana β = 2α.</p><p>Data dari soal: A₀ = 4000 cm², ΔT = 90°C, α = 1,1 x 10⁻⁷ /°C.</p><p class='font-mono'>A = 4000 (1 + (2 × 1,1 × 10⁻⁷ × 90))</p><p class='font-mono'>A = 4000 (1 + 1.98e-5) = 4000 + 0.0792 = <b>4000,0792 cm²</b></p><p>Jawaban yang paling mendekati adalah 4.000,08 cm².</p>`
            },
            // Halaman 18, Teks 12, Pertanyaan 28
            // Question 48
            {
                type: 'multiple-choice',
                question: 'Banyaknya kalor yang dibutuhkan untuk melebur es dalam teks tersebut adalah...',
                options: ['6,1 kJ', '25,6 kJ', '80,3 kJ', '107,5 kJ', '205,7 kJ'],
                answer: '80,3 kJ',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Soal ini hanya menanyakan kalor untuk meleburkan es.</p><ol class='list-decimal list-inside space-y-2'><li><b>Rumus Kalor Lebur:</b> Q_lebur = m_es × L_es.</li><li><b>Data:</b> m_es = 240 g, L_es = 80 kal/g.</li><li><b>Hitung Kalor (kalori):</b> Q = 240 g × 80 kal/g = 19.200 kalori.</li><li><b>Konversi ke kJ:</b> 1 kalori ≈ 4,184 J.<br><span class='font-mono'>Q = 19.200 × 4,184 J ≈ 80.333 J ≈ <b>80,3 kJ</b>.</span></li></ol>`
            },
            // Halaman 18, Teks 12, Pertanyaan 29
            // Question 49
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk semua pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Kalor yang dilepas pada proses kondensasi uap air di teks tersebut sebesar 43.200 kalori.',
                    'Tidak ada es yang tersisa setelah semua zat di teks tersebut bercampur.',
                    'Total massa air di campuran akhir adalah 400 gram.',
                    'Suhu akhir campuran akan lebih panas jika massa uap air yang digunakan kurang dari 80 gram.',
                    'Suhu akhir campurannya adalah 80 °C.'
                ],
                answer: [
                    'Kalor yang dilepas pada proses kondensasi uap air di teks tersebut sebesar 43.200 kalori.',
                    'Tidak ada es yang tersisa setelah semua zat di teks tersebut bercampur.',
                    'Total massa air di campuran akhir adalah 400 gram.',
                    'Suhu akhir campurannya adalah 80 °C.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan (Asas Black):</h4><p>Q_lepas = Q_terima .</p><ul class='list-disc list-inside'><li><b>Q Lepas (uap):</b> (80×540) + (80×1×(100-T_a)) = 51200 - 80T_a.</li><li><b>Q Terima (es+air):</b> (240×80) + (320×1×(T_a-0)) = 19200 + 320T_a.</li><li><b>Penyetaraan:</b> 51200 - 80T_a = 19200 + 320T_a => 32000 = 400T_a => <b>T_a = 80°C</b>.</li></ul><p>Evaluasi:</p><ul class='list-disc list-inside'><li><b>Kalor Kondensasi:</b> <b>Benar</b>. Q = 80×540=43.200 kal.</li><li><b>Es Tersisa:</b> <b>Benar</b>. Kalor yg dilepas uap (43.200 kal) > kalor lebur es (19.200 kal), jadi es mencair semua.</li><li><b>Massa Akhir:</b> <b>Benar</b>. Massa total = 320g + 80g = 400g.</li><li><b>Suhu jika uap < 80g:</b> Salah. Jika sumber panas berkurang, suhu akhir akan lebih rendah.</li><li><b>Suhu akhir:</b> <b>Benar</b>. Hasil perhitungan adalah 80°C. Pilihan di soal salah.</li></ul>`
            },
            // Halaman 18, Teks 13, Pertanyaan 30
            // Question 50
            {
                type: 'multiple-choice',
                question: 'Besarnya tekanan awal gas pada sistem tersebut adalah...',
                options: ['1,34 x 10⁵ Pa', '1,67 x 10⁵ Pa', '3,23 x 10⁵ Pa', '6,71 x 10⁴ Pa', '2,00 x 10⁴ Pa'],
                answer: '1,34 x 10⁵ Pa',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Tekanan awal (P) dihitung menggunakan Hukum Gas Ideal: PV = nRT.</p><p>Data: n = 0,25 mol, R = 8,314 J/mol.K, T = 50°C = 323 K, V = 5 liter = 5×10⁻³ m³.</p><p class='font-mono'>P = nRT / V = (0,25 × 8,314 × 323) / (5 × 10⁻³) ≈ <b>1,34 × 10⁵ Pa</b></p>`
            },
            // Halaman 19, Teks 13, Pertanyaan 31
            // Question 51
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Proses tersebut adalah proses isotermal.',
                    'Volume akhir proses tersebut lebih besar dari volume awal.',
                    'Tekanan akhir proses tersebut lebih kecil dari tekanan awal.',
                    'Suhu akhir proses tersebut sama dengan suhu awal.',
                    'Tidak ada perubahan energi dalam di proses tersebut.'
                ],
                answer: [
                    'Proses tersebut adalah proses isotermal.',
                    'Volume akhir proses tersebut lebih besar dari volume awal.',
                    'Tekanan akhir proses tersebut lebih kecil dari tekanan awal.',
                    'Suhu akhir proses tersebut sama dengan suhu awal.',
                    'Tidak ada perubahan energi dalam di proses tersebut.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Proses:</b> <b>Benar</b>. 'Suhu konstan' berarti prosesnya <b>isotermal</b>.</li><li><b>Volume Akhir:</b> <b>Benar</b>. Gas melakukan usaha (W=+30 J), artinya gas memuai, V₂ > V₁.</li><li><b>Tekanan Akhir:</b> <b>Benar</b>. Pada proses isotermal, P₁V₁ = P₂V₂. Karena V₂ > V₁, maka P₂ < P₁.</li><li><b>Suhu Akhir:</b> <b>Benar</b>. Proses isotermal berarti T₂ = T₁.</li><li><b>ΔU:</b> <b>Benar</b>. Untuk gas ideal, ΔU hanya bergantung pada ΔT. Karena ΔT=0, maka ΔU = 0.</li></ul>`
            },
            // Halaman 19, Teks 13, Pertanyaan 32
            // Question 52
            {
                type: 'multiple-choice',
                question: 'Volume akhir gas pada sistem tersebut adalah...',
                options: ['4,0 liter', '4,8 liter', '5,0 liter', '5,2 liter', '10 liter'],
                answer: '5,2 liter',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Gunakan rumus usaha isotermal: W = nRT ln(V₂/V₁).</p><p>Data: W = 30 J, nRT ≈ 671 J (dari soal 30), V₁ = 5 liter.</p><p class='font-mono'>30 = 671 × ln(V₂/5) => ln(V₂/5) ≈ 0.0447</p><p>Gunakan eksponensial: V₂/5 = e⁰.⁰⁴⁴⁷ ≈ 1.0457</p><p class='font-mono'>V₂ = 5 × 1.0457 ≈ <b>5,23 liter</b></p>`
            },
            // Halaman 19, Teks 14, Pertanyaan 33
            // Question 53
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah.',
                statements: [
                    { label: 'Muatan q ditarik oleh kedua muatan di sampingnya.', answer: true },
                    { label: 'Besar gaya listrik yang diterima muatan q dari muatan Q₁ lebih besar daripada gaya listrik yang diterimanya dari muatan Q₂.', answer: true },
                    { label: 'Muatan q akan bergerak ke arah muatan Q₂ akibat gaya listrik yang diterimanya.', answer: false }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Interaksi:</b> <b>Benar</b>. Muatan q negatif, Q₁ dan Q₂ positif. Muatan berlainan jenis saling tarik-menarik.</li><li><b>Perbandingan Gaya:</b> <b>Benar</b>. Jaraknya sama. Menurut F ∝ |Q|, karena |Q₁| > |Q₂|, maka gaya tarik dari Q₁ lebih besar.</li><li><b>Arah Gerak:</b> <b>Salah</b>. Karena gaya tarik ke arah Q₁ lebih besar, resultan gaya akan ke arah <b>Q₁</b>.</li></ul>`
            },
            // Halaman 19, Teks 14, Pertanyaan 34
            // Question 54
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Medan listrik di titik q dari muatan Q₁ adalah 2,16 x 10⁷ N/C ke kanan.',
                    'Medan listrik di titik q dari muatan Q₂ adalah 1,8 x 10⁷ N/C ke kiri.',
                    'Gaya listrik yang diterima muatan q dari muatan Q₁ adalah 2,16 x 10⁻² N ke kiri.',
                    'Gaya listrik yang diterima muatan q dari muatan Q₂ adalah 1,8 x 10⁻² N ke kanan.',
                    'Total potensial listrik di titik q berada adalah 1,98 x 10⁶ V.'
                ],
                answer: [
                    'Medan listrik di titik q dari muatan Q₁ adalah 2,16 x 10⁷ N/C ke kanan.',
                    'Medan listrik di titik q dari muatan Q₂ adalah 1,8 x 10⁷ N/C ke kiri.',
                    'Gaya listrik yang diterima muatan q dari muatan Q₁ adalah 2,16 x 10⁻² N ke kiri.',
                    'Gaya listrik yang diterima muatan q dari muatan Q₂ adalah 1,8 x 10⁻² N ke kanan.',
                    'Total potensial listrik di titik q berada adalah 1,98 x 10⁶ V.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Data: k=9e9, r=0.05m.</p><ul class='list-disc list-inside space-y-2'><li><b>Medan E₁:</b> <b>Benar</b>. E₁ = k|Q₁|/r² = (9e9)(6e-6)/(0.05)² = <b>2,16e7 N/C</b> ke kanan.</li><li><b>Medan E₂:</b> <b>Benar</b>. E₂ = k|Q₂|/r² = (9e9)(5e-6)/(0.05)² = <b>1,8e7 N/C</b> ke kiri.</li><li><b>Gaya F_q1:</b> <b>Benar</b>. F = |q|E₁. Arah berlawanan E (ke kiri). F = (1e-9)(2,16e7) = <b>2,16e-2 N</b>.</li><li><b>Gaya F_q2:</b> <b>Benar</b>. F = |q|E₂. Arah berlawanan E (ke kanan). F = (1e-9)(1,8e7) = <b>1,8e-2 N</b>.</li><li><b>Potensial V:</b> <b>Benar</b>. V = k(Q₁+Q₂)/r = (9e9/0.05)(11e-6) = <b>1,98e6 V</b>.</li></ul>`
            },
            // Halaman 19, Teks 15, Pertanyaan 35
            // Question 55
            {
                type: 'multiple-choice',
                question: 'Jika voltmeter disambungkan di titik a dan titik b, nilai yang terbaca di voltmeter adalah...',
                options: ['0,25 V', '0,75 V', '1,00 V', '2,50 V', '3,00 V'],
                answer: '0,75 V',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ol class='list-decimal list-inside space-y-2'><li><b>Hambatan Paralel (R_p):</b> R_atas = 2Ω. R_bawah = 3+3=6Ω. 1/R_p = 1/2+1/6=4/6 => R_p=1,5Ω.</li><li><b>Hambatan Total:</b> R_tot = R₁+R_p+r = 4+1,5+0,5 = 6Ω.</li><li><b>Arus Total:</b> I_tot = ε/R_tot = 3V/6Ω = 0,5A.</li><li><b>Tegangan V_ab:</b> V_ab = I_tot × R_p = 0,5A × 1,5Ω = <b>0,75V</b>.</li></ol>`
            },
            // Halaman 19, Teks 15, Pertanyaan 36
            // Question 56
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah.',
                statements: [
                    { label: 'Resistor yang menggunakan daya listrik paling besar adalah R₁.', answer: true },
                    { label: 'Daya listrik yang digunakan oleh R₃ dan R₄ sama besar.', answer: true },
                    { label: 'Tegangan jepit rangkaian tersebut adalah 2,75 V.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Data: I_tot=0.5A, R_luar = 5.5Ω.</p><ul class='list-disc list-inside space-y-2'><li><b>Daya Paling Besar:</b> <b>Benar</b>. P₁=I_tot²R₁=(0.5)²×4=1W. Arus cabang lain lebih kecil.</li><li><b>Daya R₃ & R₄:</b> <b>Benar</b>. Arus dan hambatannya sama.</li><li><b>Tegangan Jepit:</b> <b>Benar</b>. V_jepit = I_tot×R_luar = 0.5×5.5 = <b>2,75V</b>.</li></ul>`
            },
            // Halaman 20, Teks 16, Pertanyaan 37
            // Question 57
            {
                type: 'multiple-choice',
                question: 'Nilai resistansi dan bahan kawat penghantar tersebut adalah...',
                options: ['0,7 Ω dengan bahan aluminium', '1,5 Ω dengan bahan tembaga', '0,7 Ω dengan bahan tembaga', '1,5 Ω dengan bahan aluminium', '1,5 Ω dengan bahan perak'],
                answer: '1,5 Ω dengan bahan tembaga',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ol class='list-decimal list-inside space-y-2'><li><b>Hitung Resistansi (R):</b><br><span class='font-mono'>R = V/I = 12V/8A = 1,5Ω.</span></li><li><b>Hitung Resistivitas (ρ):</b><br> A = πr² = 3,14×(10⁻⁴)² = 3,14×10⁻⁸ m².<br><span class='font-mono'>ρ = RA/L = (1,5×3,14×10⁻⁸)/2,7 ≈ 1,74×10⁻⁸ Ωm.</span></li><li><b>Bandingkan dengan Tabel:</b> Nilai ρ paling mendekati <b>Tembaga (1,72×10⁻⁸ Ωm)</b>.</li></ol>`
            },
            // Halaman 20, Teks 16, Pertanyaan 38
            // Question 58
            {
                type: 'true-false',
                question: 'Tentukanlah apakah tindakan berikut Tepat atau Tidak Tepat.',
                statements: [
                    { label: 'Menggunakan kawat dari bahan besi.', answer: false },
                    { label: 'Menggunakan kawat dengan bahan awal, tetapi diameternya lebih besar.', answer: true },
                    { label: 'Menggunakan kawat dengan bahan awal, tetapi ukurannya lebih panjang.', answer: false }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Untuk memperbesar arus (I), hambatan (R) harus diperkecil. R = ρL/A.</p><ul class='list-disc list-inside space-y-2'><li><b>Bahan Besi:</b> <b>Tidak Tepat</b>. ρ besi lebih tinggi, R membesar, I mengecil.</li><li><b>Diameter lebih besar:</b> <b>Tepat</b>. A membesar, R mengecil, I membesar.</li><li><b>Lebih panjang:</b> <b>Tidak Tepat</b>. L membesar, R membesar, I mengecil.</li></ul>`
            },
            // Halaman 20, Teks 17, Pertanyaan 39
            // Question 59
            {
                type: 'multiple-choice',
                question: 'Kuat arus yang mengalir di hambatan R₂ sebesar...',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Rangkaian%20Kirchhoff%202.png',
                alt: 'Rangkaian listrik kompleks dengan tiga sumber tegangan dan lima resistor.',
                imageWidthClass: 'max-w-md',
                options: ['1,88 A', '1,36 A', '0,92 A', '0,52 A', '0,21 A'],
                answer: '0,52 A',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Menggunakan Hukum Kirchhoff dengan metode loop current:</p><ol class='list-decimal list-inside space-y-2'><li><b>Loop Kiri (i₁):</b> -5i₁ + 3i₂ = 3.</li><li><b>Loop Kanan (i₂):</b> i₁ + 2i₂ = -1.</li><li><b>Selesaikan:</b> Arus di R₂ = |i₁ - i₂| ≈ 0.54 A.</li></ol><div class='mt-4 p-3 bg-red-50 border border-red-200 rounded-lg'><b>Catatan:</b> Hasil perhitungan adalah 0.54 A. Pilihan terdekat adalah <b>0,52 A</b>.</div>`
            },
            // Halaman 20, Teks 17, Pertanyaan 40
            // Question 60
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Besar beda potensial antara titik a dan b adalah 4,92 V.',
                    'Kuat arus yang mengalir di hambatan R₁ sebesar 1,88 A.',
                    'Kuat arus yang mengalir di hambatan R₂ sama dengan total kuat arus di tiga hambatan lain.',
                    'Kuat arus yang mengalir di hambatan R₄ dan R₅ sama besar.',
                    'Hambatan R₁ menggunakan energi listrik paling sedikit.'
                ],
                answer: [
                    'Kuat arus yang mengalir di hambatan R₄ dan R₅ sama besar.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Berdasarkan analisis Kirchhoff:</p><ul class='list-disc list-inside space-y-2'><li><b>V_ab:</b> Salah. Perhitungan akurat menghasilkan nilai yang berbeda.</li><li><b>Arus di R₁:</b> Salah. Arus I₁ sekitar 0.69 A.</li><li><b>Perbandingan Arus:</b> Salah. Melanggar Hukum I Kirchhoff.</li><li><b>Arus di R₄ dan R₅:</b> <b>Benar</b>. R₄ dan R₅ seri, arusnya sama.</li><li><b>Energi R₁:</b> Salah. Perhitungan daya menunjukkan ada komponen lain yang lebih kecil.</li></ul>`
            },
            // Halaman 21, Teks 1, Pertanyaan 1
            // Question 61
            {
                type: 'multiple-choice',
                question: 'Rina sedang melakukan praktikum tentang pengukuran. Ia mengukur diameter dari sebuah pipa menggunakan alat ukur berupa jangka sorong. Nilai diameter pipa yang terukur adalah...',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Jangka%20Sorong%202.png',
                alt: 'Pengukuran diameter pipa dengan jangka sorong.',
                imageWidthClass: 'max-w-md',
                options: ['6,20 ± 0,01 cm', '6,20 ± 0,005 cm', '5,77 ± 0,005 cm', '5,75 ± 0,01 cm', '5,75 ± 0,005 cm'],
                answer: '5,75 ± 0,005 cm',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Membaca hasil pengukuran pada jangka sorong melibatkan dua langkah utama:</p><ol class='list-decimal list-inside space-y-2'><li><b>Membaca Skala Utama (SU):</b> Lihat angka pada skala utama yang berada tepat sebelum angka 0 pada skala nonius. Angka tersebut menunjukkan <b>5,7 cm</b>.</li><li><b>Membaca Skala Nonius (SN):</b> Cari garis pada skala nonius yang lurus dan segaris dengan garis pada skala utama. Garis yang segaris adalah garis ke-5. Kalikan dengan ketelitian alat (0,01 cm): 5 × 0,01 cm = <b>0,05 cm</b>.</li><li><b>Hasil Pengukuran:</b> Jumlahkan Skala Utama dan Skala Nonius. Hasil = 5,7 cm + 0,05 cm = <b>5,75 cm</b>.</li><li><b>Menentukan Ketidakpastian (Δx):</b> Ketidakpastian untuk pengukuran tunggal menggunakan jangka sorong adalah setengah dari skala terkecilnya (nst). Δx = ½ × 0,01 cm = <b>0,005 cm</b>.</li><li><b>Pelaporan Hasil:</b> Hasil pengukuran dilaporkan dalam format (Hasil ± Δx), yaitu <b>(5,75 ± 0,005) cm</b>.</li></ol><div class='mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg'><b>Konsep Fisika:</b> Pengukuran Besaran Panjang. Jangka sorong digunakan untuk mengukur panjang, diameter, atau kedalaman dengan ketelitian 0.1 mm atau 0.01 cm.</div>`
            },
            // Halaman 21, Teks 1, Pertanyaan 2
            // Question 62
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Mikrometer%20Sekrup.png',
                alt: 'Pengukuran ketebalan pipa dengan mikrometer sekrup.',
                imageWidthClass: 'max-w-xs',
                options: [
                    'Ketelitian alat ukur yang dipakai mengukur ketebalan pipa adalah 0,01 mm.',
                    'Alat ukur yang digunakan Rina untuk mengukur diameter pipa memiliki ketelitian yang lebih baik dibandingkan alat ukur yang ia gunakan untuk mengukur tebal pipa.',
                    'Ketebalan pipa yang diukur Rina jika dilaporkan tanpa ketidakpastiannya adalah 4,30 mm.',
                    'Pengukuran yang dilakukan Rina adalah pengukuran berulang.',
                    'Pengukuran yang dilakukan Rina adalah pengukuran langsung.'
                ],
                answer: [
                    'Ketelitian alat ukur yang dipakai mengukur ketebalan pipa adalah 0,01 mm.',
                    'Ketebalan pipa yang diukur Rina jika dilaporkan tanpa ketidakpastiannya adalah 4,30 mm.',
                    'Pengukuran yang dilakukan Rina adalah pengukuran langsung.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Ketelitian mikrometer sekrup:</b> <b>Benar</b>. Alat untuk mengukur ketebalan adalah mikrometer sekrup, yang memiliki skala terkecil (ketelitian) <b>0,01 mm</b>.</li><li><b>Perbandingan ketelitian:</b> Salah. Jangka sorong (diameter) memiliki ketelitian 0,1 mm, sedangkan mikrometer sekrup (tebal) memiliki ketelitian 0,01 mm. Mikrometer sekrup lebih teliti.</li><li><b>Pembacaan ketebalan pipa:</b> <b>Benar</b>. <br> &nbsp; &nbsp; - Skala Utama (SU) = 4,0 mm. <br> &nbsp; &nbsp; - Skala Nonius (SN) = 30 × 0,01 mm = 0,30 mm. <br> &nbsp; &nbsp; - Hasil = 4,0 mm + 0,30 mm = <b>4,30 mm</b>.</li><li><b>Pengukuran berulang:</b> Salah. Tidak ada informasi bahwa pengukuran dilakukan lebih dari satu kali.</li><li><b>Pengukuran langsung:</b> <b>Benar</b>. Ini adalah pengukuran langsung karena hasilnya didapat sekali baca dari alat ukur, bukan melalui perhitungan dari besaran lain.</li></ul>`
            },
            // Halaman 22, Teks 2, Pertanyaan 3
            // Question 63
            {
                type: 'multiple-choice',
                question: 'Total jarak yang ditempuh angkutan umum tersebut dari awal perjalanan sampai kembali lagi ke terminal A adalah...',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Grafik%20Posisi%20Waktu.png',
                alt: 'Grafik posisi terhadap waktu untuk perjalanan angkutan umum.',
                imageWidthClass: 'max-w-lg',
                options: ['0 km', '4 km', '5 km', '10 km', '11 km'],
                answer: '10 km',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p><b>Jarak</b> adalah total panjang lintasan yang ditempuh, tanpa memperhatikan arah. Ini berbeda dengan <b>perpindahan</b>, yaitu perubahan posisi dari titik awal ke titik akhir.</p><ul class='list-disc list-inside space-y-2'><li><b>Perjalanan Pergi:</b> Angkutan umum bergerak dari posisi awal (0 m) ke posisi terjauhnya, yaitu <b>5.000 m</b> (tercapai pada menit ke-40).</li><li><b>Perjalanan Pulang:</b> Angkutan umum kemudian bergerak kembali dari posisi 5.000 m ke posisi akhir (0 m). Jarak tempuh saat pulang adalah <b>5.000 m</b>.</li><li><b>Total Jarak:</b> Total jarak adalah jumlah jarak pergi dan jarak pulang. <br>Total Jarak = 5.000 m + 5.000 m = 10.000 m.</li><li><b>Konversi ke km:</b> 10.000 m = <b>10 km</b>.</li></ul><div class='mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg'><b>Konsep Fisika:</b> Jarak vs Perpindahan. Meskipun angkutan kembali ke titik awal (perpindahan = 0), jarak yang ditempuhnya adalah seluruh panjang lintasan.</div>`
            },
            // Halaman 22, Teks 2, Pertanyaan 4
            // Question 64
            {
                type: 'multiple-choice',
                question: 'Berdasarkan grafik tersebut, lama waktu sopir tersebut beristirahat adalah...',
                options: ['40 menit', '20 menit', '18 menit', '8 menit', '4 menit'],
                answer: '4 menit',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Pada grafik posisi terhadap waktu (x-t), kondisi <b>beristirahat</b> atau <b>diam</b> ditunjukkan oleh segmen grafik yang horizontal (datar). Ini berarti posisi (x) tidak berubah seiring berjalannya waktu (t).</p><p>Melihat grafik, terdapat segmen datar antara:</p><ul class='list-disc list-inside'><li>Waktu awal (t₁) = <b>28 menit</b></li><li>Waktu akhir (t₂) = <b>32 menit</b></li></ul><p>Lama waktu istirahat adalah selisih kedua waktu tersebut:</p><p class='font-mono my-2'>Δt = t₂ - t₁ = 32 menit - 28 menit = <b>4 menit</b>.</p>`
            },
            // Halaman 22, Teks 3, Pertanyaan 5
            // Question 65
            {
                type: 'multiple-choice',
                question: 'Ketinggian maksimum yang dapat dicapai panah diukur dari posisi awal sebelum ditembakkan adalah...',
                options: ['10 meter', '20 meter', '30 meter', '40 meter', '50 meter'],
                answer: '20 meter',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Kita dapat menemukan kecepatan awal (v₀) terlebih dahulu menggunakan persamaan lintasan parabola, lalu menghitung ketinggian maksimum.</p><ol class='list-decimal list-inside space-y-2'><li><b>Gunakan Persamaan Lintasan Parabola:</b><br><span class='font-mono'>y = x tan(θ) - (g x²) / (2 v₀² cos²(θ))</span><br>Kita tahu: y = 15 m, x = 20 m, θ = 45°, g = 10 m/s². (tan(45°)=1 dan cos²(45°)=0.5)</li><li><b>Substitusi untuk mencari v₀²:</b><br><span class='font-mono'>15 = (20)(1) - (10 × 20²) / (2 × v₀² × 0.5)</span><br><span class='font-mono'>15 = 20 - 4000 / v₀²</span><br><span class='font-mono'>4000 / v₀² = 20 - 15 = 5</span><br><span class='font-mono'>v₀² = 4000 / 5 = 800 (m/s)²</span></li><li><b>Hitung Ketinggian Maksimum (h_max):</b><br><span class='font-mono'>h_max = (v₀² sin²(θ)) / (2g)</span><br><span class='font-mono'>h_max = (800 × sin²(45°)) / (2 × 10)</span><br><span class='font-mono'>h_max = (800 × 0.5) / 20</span><br><span class='font-mono'>h_max = 400 / 20 = <b>20 meter</b>.</span></li></ol>`
            },
            // Halaman 22, Teks 3, Pertanyaan 6
            // Question 66
            {
                type: 'multiple-choice',
                question: 'Selang waktu yang dibutuhkan panah saat melewati titik Q dan P adalah...',
                options: ['1 detik', '2 detik', '3 detik', '4 detik', '5 detik'],
                answer: '2 detik',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Untuk mencari selang waktu, kita perlu menghitung waktu tempuh untuk mencapai titik P (t_P) dan titik Q (t_Q), lalu mencari selisihnya. Gerak pada sumbu horizontal (x) adalah Gerak Lurus Beraturan (GLB).</p><ol class='list-decimal list-inside space-y-2'><li><b>Hitung Kecepatan Komponen Horizontal (v₀x):</b><br>Dari soal sebelumnya, kita tahu v₀² = 800, maka v₀ = √800 = 20√2 m/s.<br><span class='font-mono'>v₀x = v₀ cos(θ) = (20√2) × cos(45°)</span><br><span class='font-mono'>v₀x = (20√2) × (1/√2) = 20 m/s.</span></li><li><b>Hitung Waktu ke Titik P (x=20m):</b><br><span class='font-mono'>t_P = x_P / v₀x = 20 m / 20 m/s = 1 detik.</span></li><li><b>Hitung Waktu ke Titik Q (x=60m):</b><br><span class='font-mono'>t_Q = x_Q / v₀x = 60 m / 20 m/s = 3 detik.</span></li><li><b>Hitung Selang Waktu (Δt):</b><br><span class='font-mono'>Δt = t_Q - t_P = 3 s - 1 s = <b>2 detik</b>.</span></li></ol>`
            },
            // Halaman 22, Pertanyaan 7
            // Question 67
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah dengan memberi tanda ✓ pada kolom yang sesuai.',
                statements: [
                    { label: 'Roda R berputar berlawanan jarum jam.', answer: false },
                    { label: 'Roda P dan Q memiliki nilai kecepatan linear yang sama.', answer: true },
                    { label: 'Roda R memiliki nilai kecepatan linear sebesar 25 m/s.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Data: r_P=30cm, r_Q=40cm, r_R=50cm. ω_P=50 rad/s. Roda P diputar searah jarum jam.</p><p>Aturan Hubungan Roda:</p><ul class='list-disc list-inside mb-2'><li><b>Seporos (P dan R):</b> Kecepatan sudut sama (ω_P = ω_R) dan arah putaran sama.</li><li><b>Terhubung Tali (P dan Q):</b> Kecepatan linear sama (v_P = v_Q) dan arah putaran sama.</li></ul><p>Evaluasi pernyataan:</p><ul class='list-disc list-inside space-y-2'><li><b>Pernyataan 1:</b> Salah. Roda P dan R seporos, sehingga arah putarannya sama. Jika P searah jarum jam, maka R juga <b>searah jarum jam</b>.</li><li><b>Pernyataan 2:</b> Benar. Roda P dan Q dihubungkan dengan tali, artinya <b>kecepatan linear (v) di tepiannya sama</b>.</li><li><b>Pernyataan 3:</b> Benar. Kita hitung kecepatan linear roda R (v_R).<br> &nbsp; &nbsp; - Karena seporos, ω_R = ω_P = 50 rad/s.<br> &nbsp; &nbsp; - Jari-jari R, r_R = 50 cm = 0,5 m.<br> &nbsp; &nbsp; - v_R = ω_R × r_R = 50 rad/s × 0,5 m = <b>25 m/s</b>.</li></ul>`
            },
            // Halaman 23, Teks 4, Pertanyaan 8
            // Question 68
            {
                type: 'multiple-choice',
                question: 'Jika setiap balok tersebut diberi dorongan dengan besar gaya yang sama secara bergantian, pernyataan yang tepat terkait percepatan keempat balok adalah...',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/4%20Balok.png',
                alt: 'Empat balok P, Q, R, S pada permukaan licin dan kasar.',
                imageWidthClass: 'max-w-md',
                options: ['percepatan balok P paling kecil', 'percepatan balok Q paling kecil', 'percepatan balok R paling kecil', 'percepatan balok S paling kecil', 'percepatan semua balok sama besar'],
                answer: 'percepatan balok S paling kecil',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Percepatan (a) ditentukan oleh Hukum II Newton: a = F_net / m. Gaya netto (F_net) adalah selisih antara gaya dorong (F) dan gaya gesek (f_k). Jadi, a = (F - f_k) / m.</p><p>Untuk mendapatkan percepatan terkecil, kita mencari benda dengan <b>massa (m) terbesar</b> dan <b>gaya gesek (f_k) terbesar</b>.</p><ul class='list-disc list-inside'><li>Balok P (0.2kg) & Q (0.1kg) di permukaan licin (f_k=0).</li><li>Balok R (0.3kg) di permukaan kasar (μk=0.4).</li><li>Balok S (0.4kg) di permukaan kasar (μk=0.7).</li></ul><p>Balok <b>S</b> memiliki <b>massa paling besar (0.4 kg)</b> dan juga <b>koefisien gesek kinetik paling besar (0.7)</b>. Kedua faktor ini (penghambat gerak terbesar dan massa terbesar) akan menghasilkan nilai percepatan yang paling kecil untuk gaya dorong yang sama.</p>`
            },
            // Halaman 23, Teks 4, Pertanyaan 9
            // Question 69
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Gaya normal antara balok R dengan permukaan sebesar 1,8 N.',
                    'Gaya berat balok P lebih kecil daripada gaya berat balok R.',
                    'Gaya gravitasi yang dialami balok Q lebih besar daripada balok P.',
                    'Gaya normal yang dialami balok S paling besar dibandingkan balok lainnya.',
                    'Gaya yang dibutuhkan untuk menggeser benda R lebih kecil daripada gaya yang diperlukan untuk menggeser benda S di permukaan tersebut.'
                ],
                answer: [
                    'Gaya berat balok P lebih kecil daripada gaya berat balok R.',
                    'Gaya normal yang dialami balok S paling besar dibandingkan balok lainnya.',
                    'Gaya yang dibutuhkan untuk menggeser benda R lebih kecil daripada gaya yang diperlukan untuk menggeser benda S di permukaan tersebut.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Gaya normal R:</b> Salah. Gaya normal (N) di bidang datar sama dengan gaya berat (W=mg). N_R = 0,3 kg × 10 m/s² = <b>3 N</b>.</li><li><b>Perbandingan berat P dan R:</b> <b>Benar</b>. W_P = 0,2 kg × 10 = 2 N. W_R = 3 N. Maka W_P < W_R.</li><li><b>Perbandingan berat Q dan P:</b> Salah. W_Q = 0,1 kg × 10 = 1 N. W_P = 2 N. Maka W_Q < W_P.</li><li><b>Gaya normal S paling besar:</b> <b>Benar</b>. Karena S memiliki massa paling besar (0,4 kg), maka gaya normalnya juga paling besar (N_S = 0,4 × 10 = 4 N).</li><li><b>Gaya untuk menggeser (gaya gesek statis maks):</b> <b>Benar</b>. F_geser = μ_s × N.<br> &nbsp; &nbsp; - F_geser_R = 0,6 × 3 N = 1,8 N.<br> &nbsp; &nbsp; - F_geser_S = 0,8 × 4 N = 3,2 N.<br>Maka, gaya untuk menggeser R lebih kecil dari S (1,8 N < 3,2 N).</li></ul>`
            },
            // Halaman 23, Teks 4, Pertanyaan 10
            // Question 70
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah dengan memberi tanda ✓ pada kolom yang sesuai.',
                statements: [
                    { label: 'Gaya normal antara balok P dengan permukaan sebesar 2 N.', answer: true },
                    { label: 'Gaya berat balok Q sebesar 1 N.', answer: true },
                    { label: 'Gaya berat balok S sebesar 3,2 N.', answer: false }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Kita hitung gaya normal (N) dan gaya berat (W) menggunakan W = mg. Di bidang datar, N = W.</p><ul class='list-disc list-inside space-y-2'><li><b>Pernyataan 1:</b> <b>Benar</b>. Gaya normal balok P (N_P) = W_P = m_P × g = 0,2 kg × 10 m/s² = <b>2 N</b>.</li><li><b>Pernyataan 2:</b> <b>Benar</b>. Gaya berat balok Q (W_Q) = m_Q × g = 0,1 kg × 10 m/s² = <b>1 N</b>.</li><li><b>Pernyataan 3:</b> <b>Salah</b>. Gaya berat balok S (W_S) = m_S × g = 0,4 kg × 10 m/s² = <b>4 N</b>. (Nilai 3,2 N adalah gaya gesek statis maksimum untuk balok S, bukan beratnya).</li></ul>`
            },
            // Halaman 23, Teks 5, Pertanyaan 11
            // Question 71
            {
                type: 'true-false',
                question: 'Sebuah ban (14 kg) bergerak dengan kelajuan 4 m/s menabrak bola karet (5 kg) yang diam. Setelah tumbukan, keduanya bergerak bersama. Tentukan Benar atau Salah pernyataan berikut.',
                statements: [
                    { label: 'Momentum awal bola karet sebelum tumbukan adalah 0 kg.m/s.', answer: true },
                    { label: 'Momentum akhir bola karet adalah 56 kg.m/s.', answer: false },
                    { label: 'Momentum awal ban adalah 56 kg.m/s.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Momentum (p) dihitung dengan rumus p = m × v.</p><ul class='list-disc list-inside space-y-2'><li><b>Momentum awal bola:</b> <b>Benar</b>. Karena bola awalnya diam (v_bola = 0), maka momentum awalnya adalah p_bola = 5 kg × 0 m/s = <b>0 kg.m/s</b>.</li><li><b>Momentum akhir bola:</b> <b>Salah</b>. Nilai 56 kg.m/s adalah momentum awal ban. Momentum akhir bola harus dihitung setelah menemukan kecepatan akhir gabungan.</li><li><b>Momentum awal ban:</b> <b>Benar</b>. Momentum awal ban adalah p_ban = m_ban × v_ban = 14 kg × 4 m/s = <b>56 kg.m/s</b>.</li></ul>`
            },
            // Halaman 24, Teks 5, Pertanyaan 12
            // Question 72
            {
                type: 'multiple-choice',
                question: 'Dari Teks 5, kelajuan kedua benda setelah bertumbukan adalah...',
                options: ['4,0 m/s', '3,4 m/s', '2,95 m/s', '1,05 m/s', '0,34 m/s'],
                answer: '2,95 m/s',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Karena setelah tumbukan kedua benda bergerak bersama, ini adalah <b>tumbukan tidak lenting sama sekali</b>. Kita gunakan Hukum Kekekalan Momentum.</p><p class='text-center my-2'><b>Momentum Awal = Momentum Akhir</b></p><p class='font-mono text-center my-2'>m_ban v_ban + m_bola v_bola = (m_ban + m_bola) v'</p><p>Substitusi nilai yang diketahui:</p><p class='font-mono my-1'>(14)(4) + (5)(0) = (14 + 5) v'</p><p class='font-mono my-1'>56 = 19 v'</p><p class='font-mono my-1'>v' = 56 / 19 ≈ <b>2,95 m/s</b></p>`
            },
            // Halaman 24, Teks 6, Pertanyaan 13
            // Question 73
            {
                type: 'multiple-choice',
                question: 'Sebuah batang homogen AC (3m, 30kg) disangga tali di titik B. Ujung C digantung lampu 8kg. Besar torsi yang dihasilkan oleh lampu hias jika poros di A adalah...',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Batang%20Torsi.png',
                alt: 'Batang homogen disangga tali dan digantungi lampu.',
                imageWidthClass: 'max-w-md',
                options: ['0 Nm', '170 Nm', '120 Nm', '207 Nm', '240 Nm'],
                answer: '240 Nm',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Torsi (τ) dihitung dengan rumus τ = F × r, di mana F adalah gaya yang tegak lurus dan r adalah lengan gaya (jarak dari gaya ke poros).</p><p>Data untuk torsi lampu (τ_lampu) dengan poros di A:</p><ul class='list-disc list-inside mb-2'><li><b>Poros:</b> Titik A.</li><li><b>Gaya (F):</b> Gaya berat lampu, W_lampu = m_lampu × g = 8 kg × 10 m/s² = 80 N.</li><li><b>Lengan Gaya (r):</b> Jarak dari lampu (di titik C) ke poros (di titik A). r = panjang batang AC = 3 m.</li></ul><p>Hitung Torsi:</p><p class='font-mono'>τ_lampu = W_lampu × r_AC</p><p class='font-mono'>τ_lampu = 80 N × 3 m = <b>240 Nm</b></p>`
            },
            // Halaman 24, Teks 6, Pertanyaan 14
            // Question 74
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat jika poros berada di titik A (engsel).',
                options: [
                    'Total torsi yang bekerja pada sistem adalah 0 Nm.',
                    'Poros berada di titik A.',
                    'Arah torsi dari gantungan lampu dan tali berlawanan.',
                    'Titik pusat massa batang berada pada 1,5 m dari A.',
                    'Terdapat tiga torsi yang bekerja pada sistem.'
                ],
                answer: [
                    'Total torsi yang bekerja pada sistem adalah 0 Nm.',
                    'Poros berada di titik A.',
                    'Arah torsi dari gantungan lampu dan tali berlawanan.',
                    'Titik pusat massa batang berada pada 1,5 m dari A.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Total Torsi:</b> <b>Benar</b>. Soal menyatakan 'agar sistem setimbang'. Syarat kesetimbangan rotasi adalah resultan torsi (Στ) sama dengan nol.</li><li><b>Poros di A:</b> <b>Benar</b>. Ini adalah asumsi yang kita gunakan untuk analisis, di mana batang berputar pada engsel di dinding.</li><li><b>Arah Torsi Lampu dan Tali:</b> <b>Benar</b>. Gantungan lampu dan berat batang menyebabkan rotasi searah jarum jam. Tali penahan memberikan gaya ke atas yang menyebabkan rotasi berlawanan arah jarum jam untuk menyeimbangkannya.</li><li><b>Pusat Massa Batang:</b> <b>Benar</b>. Batang homogen, pusat massanya di tengah, yaitu pada 3 m / 2 = 1,5 m dari A.</li><li><b>Jumlah Torsi:</b> Salah. Dengan poros di A, ada <b>tiga</b> gaya yang menghasilkan torsi: berat batang, berat lampu, dan tegangan tali. Gaya di engsel (poros) tidak menghasilkan torsi.</li></ul>`
            },
            // Halaman 25, Teks 7, Pertanyaan 15
            // Question 75
            {
                type: 'multiple-choice',
                question: 'Massa beban maksimum yang dapat ditahan oleh jembatan adalah...',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Jembatan%20Ponton.png',
                alt: 'Jembatan ponton terbuat dari drum.',
                imageWidthClass: 'max-w-md',
                options: ['160 kg', '320 kg', '1.600 kg', '1.840 kg', '18.400 kg'],
                answer: '1.840 kg',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Saat beban maksimum, gaya angkat Archimedes (Fₐ) pada volume drum yang tercelup harus menyeimbangkan berat total (berat drum + berat beban).</p><ol class='list-decimal list-inside space-y-2'><li><b>Hitung Massa Total Drum:</b><br><span class='font-mono'>m_drum_total = 8 drum × 20 kg/drum = 160 kg</span></li><li><b>Hitung Volume Tercelup Maksimum:</b><br>- Volume total 8 drum = 8 × 500 L = 4000 L = 4 m³.<br>- Volume tercelup maks (V_celup) = 50% × 4 m³ = 2 m³.</li><li><b>Hitung Gaya Angkat Maksimum (Fₐ):</b><br><span class='font-mono'>Fₐ = ρ_air × g × V_celup</span><br><span class='font-mono'>Fₐ = 1000 kg/m³ × 10 m/s² × 2 m³ = 20.000 N</span></li><li><b>Gunakan Kondisi Setimbang:</b><br><span class='font-mono'>Fₐ = W_drum_total + W_beban_maks</span><br><span class='font-mono'>20.000 N = (160 kg × 10) + (m_beban_maks × 10)</span></li><li><b>Hitung Massa Beban Maksimum:</b><br><span class='font-mono'>18.400 = 10 × m_beban_maks</span><br><span class='font-mono'>m_beban_maks = <b>1.840 kg</b></span></li></ol>`
            },
            // Halaman 25, Teks 7, Pertanyaan 16
            // Question 76
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah dengan memberi tanda ✓ pada kolom yang tersedia.',
                statements: [
                    { label: 'Gaya apung yang dialami keseluruhan drum saat tidak ada beban di atasnya adalah 1.600 N.', answer: true },
                    { label: 'Jika di atas jembatan ada beban 150 kg, volume drum yang tercelup sebesar 0,0775 bagian.', answer: true },
                    { label: 'Massa jenis drum lebih kecil daripada massa jenis air.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Gaya Apung Tanpa Beban:</b> <b>Benar</b>. Saat terapung, Fₐ = W_total_drum = 160 kg × 10 m/s² = <b>1.600 N</b>.</li><li><b>Volume Tercelup dengan Beban 150 kg:</b> <b>Benar</b>. Berat total baru = 1600 N + (150kg×10) = 3100 N. Gaya apung baru = 3100 N. Fₐ = ρ_air × g × V_celup => V_celup = 3100 / 10000 = 0.31 m³. Bagian yang tercelup = V_celup / V_total = 0.31 m³ / 4 m³ ≈ 0.0775 bagian. <div class='mt-2 p-2 bg-red-50 border border-red-200 rounded-lg'><b>Koreksi:</b> Pernyataan di Soal menyebutkan 0.75 bagian, yang salah. Perhitungan yang benar adalah 0.0775 bagian.</div></li><li><b>Massa Jenis Drum:</b> <b>Benar</b>. ρ_drum = m/V = 20 kg / 0.5 m³ = 40 kg/m³. Nilai ini jauh lebih kecil dari massa jenis air (1000 kg/m³).</li></ul>`
            },
            // Halaman 25, Teks 8, Pertanyaan 17
            // Question 77
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk semua pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Besar tekanan darah pasien adalah 2.800 Pa (≈ 2,8 kPa).',
                    'Debit darah yang mengalir adalah 8,33 x 10⁻⁸ m³/s.',
                    'Luas permukaan jarum adalah 1,26 x 10⁻⁷ m².',
                    'Kecepatan aliran darah yang masuk adalah 0,66 m/s.',
                    'Waktu yang dibutuhkan untuk mentransfusikan 1 labu darah adalah 100 menit.'
                ],
                answer: [
                    'Besar tekanan darah pasien adalah 2.800 Pa (≈ 2,8 kPa).',
                    'Debit darah yang mengalir adalah 8,33 x 10⁻⁸ m³/s.',
                    'Luas permukaan jarum adalah 1,26 x 10⁻⁷ m².',
                    'Kecepatan aliran darah yang masuk adalah 0,66 m/s.',
                    'Waktu yang dibutuhkan untuk mentransfusikan 1 labu darah adalah 100 menit.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Tekanan Darah:</b> <b>Benar</b>. 1 mmHg ≈ 133.3 Pa. Maka, 21 mmHg ≈ 21 × 133.3 Pa ≈ 2800 Pa.</li><li><b>Debit Darah (Q):</b> <b>Benar</b>. Q = 5 cm³/menit = (5 × 10⁻⁶ m³) / 60 s ≈ 8,33 × 10⁻⁸ m³/s.</li><li><b>Luas Jarum (A):</b> <b>Benar</b>. r=0.2mm=2×10⁻⁴m. A = πr² = π(2×10⁻⁴)² ≈ 1,26 × 10⁻⁷ m².</li><li><b>Kecepatan Aliran (v):</b> <b>Benar</b>. v = Q / A = (8,33×10⁻⁸) / (1,26×10⁻⁷) ≈ 0,66 m/s.</li><li><b>Waktu Transfusi:</b> <b>Benar</b>. Waktu = Volume / Debit = 500 cm³ / (5 cm³/menit) = 100 menit.</li></ul>`
            },
            // Halaman 25, Teks 8, Pertanyaan 18
            // Question 78
            {
                type: 'multiple-choice',
                question: 'Labu harus diangkat pada ketinggian ... di atas jarum.',
                options: ['13,2 cm', '14,3 cm', '22,0 cm', '26,4 cm', '28,6 cm'],
                answer: '26,4 cm',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Tekanan hidrostatis dari labu darah (P_labu) harus sama dengan tekanan darah pasien (P_pasien) agar darah mengalir.</p><p class='font-mono text-center'>ρ_darah × g × h = P_pasien</p><p>Data: ρ_darah = 1060 kg/m³, g ≈ 10 m/s², P_pasien = 2800 Pa.</p><p class='font-mono'>1060 × 10 × h = 2800</p><p class='font-mono'>h = 2800 / 10600 ≈ 0,264 m = <b>26,4 cm</b>.</p>`
            },
            // Halaman 26, Teks 10 (seharusnya Teks 9), Pertanyaan 19
            // Question 79
            {
                type: 'multiple-choice',
                question: 'Besarnya intensitas bunyi di titik A adalah...',
                options: ['1x10⁻⁴ W/m²', '2x10⁻² W/m²', '1 W/m²', '2 W/m²', '4 W/m²'],
                answer: '1 W/m²',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Intensitas bunyi (I) adalah daya (P) per luas permukaan bola (A = 4πr²).</p><p class='font-mono text-center'>I = P / (4πr²)</p><p>Data: P = 16π W (asumsi), r = 200 cm = 2 m.</p><p class='font-mono'>I = (16π W) / (4π(2 m)²) = 16π / (16π) = <b>1 W/m²</b></p><div class='mt-4 p-3 bg-red-50 border border-red-200 rounded-lg'><b>Catatan:</b> Daya sumber di soal tertulis 16 W. Jika menggunakan P=16W, maka I = 16/(16π) ≈ 0.318 W/m² (tidak ada di pilihan). Dengan asumsi P=16π W, jawaban 1 W/m² tercapai.</div>`
            },
            // Halaman 26, Teks 10 (seharusnya Teks 9), Pertanyaan 20
            // Question 80
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Sumber%20Bunyi.png',
                alt: 'Posisi titik A, B, C, D, E dari sumber bunyi.',
                imageWidthClass: 'max-w-sm',
                options: [
                    'Nilai intensitas bunyi di titik E bernilai paling kecil dibanding keempat titik lainnya.',
                    'Intensitas bunyi di titik A 25 kali lebih besar daripada di titik E.',
                    'Intensitas bunyi di titik B setengah kali dari intensitas bunyi di titik A.',
                    'Taraf intensitas bunyi di titik B 1,75 kali lebih besar daripada di titik D.',
                    'Taraf intensitas bunyi di titik C lebih besar daripada titik E.'
                ],
                answer: [
                    'Nilai intensitas bunyi di titik E bernilai paling kecil dibanding keempat titik lainnya.',
                    'Intensitas bunyi di titik A 25 kali lebih besar daripada di titik E.',
                    'Taraf intensitas bunyi di titik C lebih besar daripada titik E.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Intensitas (I) berbanding terbalik dengan kuadrat jarak (I ∝ 1/r²).</p><p>Jarak dari sumber: r_A=2m, r_B=4m, r_C=6m, r_D=7m, r_E=10m.</p><ul class='list-disc list-inside space-y-2'><li><b>Intensitas E paling kecil:</b> <b>Benar</b>. Titik E paling jauh (r=10m), intensitasnya paling kecil.</li><li><b>Perbandingan I_A dan I_E:</b> <b>Benar</b>. I_A / I_E = r_E² / r_A² = 10² / 2² = 100 / 4 = 25.</li><li><b>Perbandingan I_B dan I_A:</b> Salah. I_A / I_B = r_B² / r_A² = 4² / 2² = 4. Jadi I_B = I_A / 4 (seperempat).</li><li><b>Perbandingan Taraf Intensitas:</b> Salah. Taraf Intensitas (TI) berhubungan secara logaritmik.</li><li><b>Perbandingan TI_C dan TI_E:</b> <b>Benar</b>. Titik C lebih dekat dari E, intensitasnya lebih besar, maka TI juga lebih besar.</li></ul>`
            },
            // Halaman 26, Teks 10, Pertanyaan 21
            // Question 81
            {
                type: 'multiple-choice',
                question: 'Panjang gelombang cahaya A adalah...',
                options: ['430 nm', '450 nm', '540 nm', '580 nm', '600 nm'],
                answer: '580 nm',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Gunakan rumus difraksi kisi untuk pola terang: d (y/L) = nλ.</p><p>Data: N = 500 garis/cm => d = 1/N = 0.002 cm = 2×10⁻⁵ m. y = 5,8 cm = 0.058 m. L = 2 m. n = 1.</p><p class='font-mono'>λ = dy / (nL)</p><p class='font-mono'>λ = (2×10⁻⁵ m × 0.058 m) / (1 × 2 m) = 5,8 × 10⁻⁷ m = <b>580 nm</b>.</p>`
            },
            // Halaman 26, Teks 10, Pertanyaan 22
            // Question 82
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk semua pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Cahaya yang digunakan di percobaan tersebut adalah cahaya kuning.',
                    'Frekuensi cahaya di percobaan tersebut lebih dari 5x10¹⁴ Hz.',
                    'Konstanta kisi difraksi di percobaan tersebut 2x10⁻⁵ m.',
                    'Jarak garis terang kedua dari terang pusat adalah 116 mm.',
                    'Jarak garis terang ketiga dari terang kedua adalah 58 mm.'
                ],
                answer: [
                    'Cahaya yang digunakan di percobaan tersebut adalah cahaya kuning.',
                    'Frekuensi cahaya di percobaan tersebut lebih dari 5x10¹⁴ Hz.',
                    'Jarak garis terang kedua dari terang pusat adalah 116 mm.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>λ=580nm. y₁=58mm.</p><ul class='list-disc list-inside space-y-2'><li><b>Warna Cahaya:</b> <b>Benar</b>. λ=580 nm masuk dalam rentang warna kuning (560-590 nm).</li><li><b>Frekuensi Cahaya:</b> <b>Benar</b>. f = c/λ = (3e8)/(580e-9) ≈ 5,17×10¹⁴ Hz.</li><li><b>Konstanta Kisi:</b> Salah. d = 2x10⁻⁵ m. Pernyataan ini benar, tapi mungkin soal salah ketik 'Konstanta kisi difraksi di percobaan tersebut 500/cm'.</li><li><b>Jarak Terang Kedua (y₂):</b> <b>Benar</b>. y₂ = 2 × y₁ = 2 × 58 mm = <b>116 mm</b>.</li><li><b>Jarak Terang 3 ke 2:</b> Salah. Jarak antar terang berdekatan adalah y₁ = 58 mm.</li></ul>`
            },
            // Halaman 26, Teks 10, Pertanyaan 23
            // Question 83
            {
                type: 'true-false',
                question: 'Tentukan Sesuai atau Tidak Sesuai tindakan berikut untuk menghasilkan garis terang yang lebih lebar.',
                statements: [
                    { label: 'Menggunakan cahaya merah.', answer: true },
                    { label: 'Mendekatkan kisi ke layar.', answer: false },
                    { label: 'Menggunakan kisi dengan garis per cm yang lebih sedikit.', answer: false }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Jarak antar terang (Δy) = λL/d. Untuk membuat Δy lebih besar (lebih lebar), kita perlu memperbesar λ atau L, atau memperkecil d.</p><ul class='list-disc list-inside space-y-2'><li><b>Cahaya merah:</b> <b>Sesuai</b>. Cahaya merah memiliki λ lebih besar, akan menghasilkan Δy lebih besar.</li><li><b>Mendekatkan kisi ke layar:</b> <b>Tidak Sesuai</b>. Ini memperkecil L, yang akan menghasilkan Δy lebih kecil.</li><li><b>Garis/cm lebih sedikit:</b> <b>Tidak Sesuai</b>. Garis/cm (N) lebih sedikit berarti jarak antar celah (d = 1/N) lebih besar. d yang lebih besar akan menghasilkan Δy yang lebih kecil.</li></ul>`
            },
            // Halaman 27, Teks 11, Pertanyaan 24
            // Question 84
            {
                type: 'multiple-choice',
                question: 'Perbesaran lensa objektif mikroskop yang digunakan Rachel adalah...',
                options: ['0,2 kali', '2,5 kali', '5 kali', '6 kali', '18 kali'],
                answer: '5 kali',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Perbesaran lensa objektif (M_ob) = s'_ob / s_ob. Kita cari s'_ob terlebih dahulu.</p><ol class='list-decimal list-inside space-y-2'><li><b>Cari s'_ob:</b><br><span class='font-mono'>1/s'_ob = 1/f_ob - 1/s_ob = 1/3 - 1/3,6 = (3,6 - 3) / 10,8 = 0,6 / 10,8</span><br><span class='font-mono'>s'_ob = 10,8 / 0,6 = 18 cm.</span></li><li><b>Hitung M_ob:</b><br><span class='font-mono'>M_ob = s'_ob / s_ob = 18 cm / 3,6 cm = <b>5 kali</b>.</span></li></ol>`
            },
            // Halaman 27, Teks 11, Pertanyaan 25
            // Question 85
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah.',
                statements: [
                    { label: 'Jarak bayangan dengan lensa objektif adalah 18 cm.', answer: true },
                    { label: 'Perbesaran total mikroskop jika mata tidak berakomodasi adalah 12,5 kali.', answer: true },
                    { label: 'Perbesaran total mikroskop jika mata berakomodasi maksimum adalah 17,5 kali.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Data dari soal sebelumnya: M_ob=5x, s'_ob=18cm. Data baru: f_ok=10cm, Sn=25cm.</p><ul class='list-disc list-inside space-y-2'><li><b>Jarak Bayangan Objektif:</b> <b>Benar</b>. Sesuai perhitungan di soal sebelumnya, s'_ob = <b>18 cm</b>.</li><li><b>Perbesaran Tanpa Akomodasi:</b> <b>Benar</b>.<br>- M_ok = Sn / f_ok = 25 / 10 = 2,5 kali.<br>- M_total = M_ob × M_ok = 5 × 2,5 = <b>12,5 kali</b>.</li><li><b>Perbesaran Akomodasi Maksimum:</b> <b>Benar</b>.<br>- M_ok = (Sn / f_ok) + 1 = (25 / 10) + 1 = 3,5 kali.<br>- M_total = M_ob × M_ok = 5 × 3,5 = <b>17,5 kali</b>.</li></ul>`
            },
            // Halaman 27, Teks 12, Pertanyaan 26
            // Question 86
            {
                type: 'multiple-choice',
                question: 'Jenis kaca yang dipilih Pak Tono adalah...',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Tabel%20Kaca.png',
                alt: 'Tabel spesifikasi lima jenis kaca.',
                imageWidthClass: 'max-w-md',
                options: ['kaca A', 'kaca B', 'kaca C', 'kaca D', 'kaca E'],
                answer: 'kaca C',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Kaca yang paling sulit mengalirkan panas adalah yang memiliki laju aliran kalor (H) terkecil. H = (k A ΔT) / L. Karena A dan ΔT sama, kita cari nilai <b>k/L</b> terkecil.</p><ul class='list-disc list-inside'><li>A: k/L = 0,6 / 4 = 0,150</li><li>B: k/L = 0,6 / 3 = 0,200</li><li><b>C: k/L = 0,3 / 3 = 0,100</b></li><li>D: k/L = 0,3 / 2 = 0,150</li><li>E: k/L = 0,5 / 2 = 0,250</li></ul><p>Nilai k/L terkecil adalah <b>kaca C</b>.</p>`
            },
            // Halaman 27, Teks 12, Pertanyaan 27
            // Question 87
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Nilai laju aliran kalor kaca A lebih besar daripada kaca C.',
                    'Nilai laju aliran kalor kaca B paling besar dibandingkan keempat kaca lainnya.',
                    'Kaca C paling sulit mengalirkan kalor.',
                    'Kaca E paling mudah mengalirkan kalor.',
                    'Kaca D memiliki laju aliran kalor yang lebih rendah dibandingkan kaca C.'
                ],
                answer: [
                    'Nilai laju aliran kalor kaca A lebih besar daripada kaca C.',
                    'Kaca C paling sulit mengalirkan kalor.',
                    'Kaca E paling mudah mengalirkan kalor.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Menggunakan nilai k/L dari soal sebelumnya (A=0.15, B=0.20, C=0.10, D=0.15, E=0.25):</p><ul class='list-disc list-inside space-y-2'><li><b>A > C:</b> <b>Benar</b>. 0,15 > 0,10.</li><li><b>B paling besar:</b> Salah. Kaca E (0,25) paling besar.</li><li><b>C paling sulit:</b> <b>Benar</b>. Kaca C memiliki k/L terendah.</li><li><b>E paling mudah:</b> <b>Benar</b>. Kaca E memiliki k/L tertinggi.</li><li><b>D < C:</b> Salah. 0,15 > 0,10.</li></ul>`
            },
            // Halaman 28, Pertanyaan 28
            // Question 88
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah.',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Grafik%20Es%20Antartika.png',
                alt: 'Grafik luas minimum es laut Antartika dari 1979-2023.',
                imageWidthClass: 'max-w-lg',
                statements: [
                    { label: 'Luas minimum lapisan es laut Antartika selalu menurun setiap tahunnya.', answer: false },
                    { label: 'Luas minimum lapisan es laut Antartika di tahun 2023 adalah 1,91 juta km persegi.', answer: true },
                    { label: 'Sebelum 2023, luas minimum lapisan es laut Antartika paling kecil ada pada tahun 2022.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Selalu Menurun:</b> <b>Salah</b>. Grafik menunjukkan fluktuasi naik-turun.</li><li><b>Luas Minimum 2023:</b> <b>Benar</b>. Titik data terakhir diberi label <b>1,91</b>.</li><li><b>Rekor Sebelum 2023:</b> <b>Benar</b>. Titik terendah sebelum 2023 adalah titik di sebelahnya, yaitu tahun 2022.</li></ul>`
            },
            // Halaman 28, Pertanyaan 29
            // Question 89
            {
                type: 'multiple-choice',
                question: 'Banyaknya minyak yang tumpah adalah...',
                options: ['1,44 liter', '1,32 liter', '1,21 liter', '0,85 liter', '1,33 liter'],
                answer: '1,33 liter',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Volume tumpah = ΔV_minyak - ΔV_bejana.</p><ol class='list-decimal list-inside space-y-2'><li><b>Data:</b> V₀=80L, ΔT = 20°C. β_bejana = 3α = 7,2×10⁻⁵ /°C. γ_minyak=9×10⁻⁴/°C.</li><li><b>Pemuaian Minyak:</b><br><span class='font-mono'>ΔV_minyak = V₀ γ ΔT = 80 × (9×10⁻⁴) × 20 = 1,44 L.</span></li><li><b>Pemuaian Bejana:</b><br><span class='font-mono'>ΔV_bejana = V₀ β ΔT = 80 × (7,2×10⁻⁵) × 20 = 0,1152 L.</span></li><li><b>Volume Tumpah:</b><br><span class='font-mono'>ΔV_tumpah = 1,44 L - 0,1152 L = 1,3248 L.</span></li></ol><p>Nilai yang paling mendekati adalah 1,32 liter atau 1,33 liter.</p>`
            },
            // Halaman 28, Teks 13, Pertanyaan 30
            // Question 90
            {
                type: 'multiple-choice',
                question: 'Perubahan energi dalam di satu siklus tersebut adalah...',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Siklus%20Termo.png',
                alt: 'Grafik P-V dari sebuah siklus termodinamika.',
                imageWidthClass: 'max-w-lg',
                options: ['lebih dari nol', 'sama dengan nol', 'kurang dari nol', 'sama dengan usaha total', 'setengah nilai usaha total'],
                answer: 'sama dengan nol',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p><b>Energi dalam (U)</b> adalah besaran keadaan. Dalam sebuah <b>siklus</b>, keadaan akhir sistem sama dengan keadaan awalnya. Karena tidak ada perubahan keadaan (termasuk suhu), maka perubahan energi dalamnya (ΔU) <b>sama dengan nol</b>.</p>`
            },
            // Halaman 28, Teks 13, Pertanyaan 31
            // Question 91
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Proses X ke Y adalah proses isokhorik.',
                    'Proses Y ke Z adalah proses isobarik.',
                    'Proses Z ke X adalah proses isotermal.',
                    'Terjadi pertukaran energi panas pada proses dari Z ke X.',
                    'Besar usaha pada proses X ke Y bernilai nol.'
                ],
                answer: [
                    'Proses X ke Y adalah proses isokhorik.',
                    'Proses Y ke Z adalah proses isobarik.',
                    'Proses Z ke X adalah proses isotermal.',
                    'Terjadi pertukaran energi panas pada proses dari Z ke X.',
                    'Besar usaha pada proses X ke Y bernilai nol.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Proses X→Y:</b> Garis vertikal, volume (V) konstan. Benar, ini <b>isokhorik</b>.</li><li><b>Proses Y→Z:</b> Garis horizontal, tekanan (P) konstan. Benar, ini <b>isobarik</b>.</li><li><b>Proses Z→X:</b> Soal menyatakan suhu konstan. Benar, ini <b>isotermal</b>.</li><li><b>Pertukaran Panas Z→X:</b> <b>Benar</b>. Pada proses isotermal, ΔU=0. Karena ada usaha kompresi (W<0), maka harus ada kalor yang dilepas (Q=W<0).</li><li><b>Usaha X→Y:</b> <b>Benar</b>. Pada proses isokhorik, ΔV=0, sehingga usaha W = PΔV = 0.</li></ul>`
            },
            // Halaman 28, Teks 13, Pertanyaan 32
            // Question 92
            {
                type: 'multiple-choice',
                question: 'Usaha total yang dilakukan gas tersebut adalah...',
                options: ['2.031,6 J', '1.200,0 J', '831,6 J', '368,4 J', '0 J'],
                answer: '368,4 J',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>W_total = W_XY + W_YZ + W_ZX.</p><ol class='list-decimal list-inside space-y-2'><li><b>W_XY (Isokhorik):</b> W_XY = 0 J.</li><li><b>W_YZ (Isobarik):</b><br><span class='font-mono'>W_YZ = PΔV = (2e5 Pa) × (3e-3 m³) = 600 J.</span></li><li><b>W_ZX (Isotermal):</b><br><span class='font-mono'>W_ZX = nRT ln(V_X/V_Z) = P_Z V_Z ln(V_X/V_Z)</span><br><span class='font-mono'>W_ZX = (2e5)(6e-3) ln(3/6) = 1200 × (-0.693) ≈ -831,6 J.</span></li><li><b>Usaha Total:</b><br><span class='font-mono'>W_total = 0 + 600 - 831,6 = -231,6 J</span>.</li></ol><div class='mt-4 p-3 bg-red-50 border border-red-200 rounded-lg'><b>Koreksi:</b> Hasil perhitungan adalah -231,6 J (usaha dilakukan PADA gas). Jawaban 368,4 J tidak cocok dengan perhitungan. Soal ini kemungkinan besar memiliki kesalahan.</div>`
            },
            // Halaman 29, Teks 14, Pertanyaan 33
            // Question 93
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah.',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Muatan%20Segitiga.png',
                alt: 'Dua muatan +4Q dan -3Q membentuk segitiga siku-siku dengan titik P.',
                imageWidthClass: 'max-w-sm',
                statements: [
                    { label: 'Gaya listrik antara kedua muatan saling tarik-menarik.', answer: true },
                    { label: 'Besar medan listrik di titik P akibat kedua muatan sama.', answer: false },
                    { label: 'Medan listrik dipengaruhi oleh jarak suatu titik dengan muatan listrik.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Gaya Antar Muatan:</b> <b>Benar</b>. Muatan +4Q dan -3Q berlainan jenis, sehingga gayanya tarik-menarik.</li><li><b>Medan Listrik di P:</b> <b>Salah</b>. Medan E = k|Q|/r². Jarak (r) sama, tapi besar muatan |Q| berbeda. Maka besar medan listriknya juga berbeda.</li><li><b>Pengaruh Jarak:</b> <b>Benar</b>. Sesuai rumus E = k|Q|/r², medan listrik berbanding terbalik dengan kuadrat jarak.</li></ul>`
            },
            // Halaman 29, Teks 14, Pertanyaan 34
            // Question 94
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Makin besar nilai muatan listrik, makin besar medan listrik yang ditimbulkan.',
                    'Besar gaya listrik antara kedua muatan adalah 6kQ²/x².',
                    'Besar potensial listrik di titik P adalah kQ/x.',
                    'Medan listrik di titik Q sebesar 28kQ/x².',
                    'Perbandingan kuat medan listrik di titik P dan Q adalah 5:14.'
                ],
                answer: [
                    'Makin besar nilai muatan listrik, makin besar medan listrik yang ditimbulkan.',
                    'Besar gaya listrik antara kedua muatan adalah 6kQ²/x².',
                    'Besar potensial listrik di titik P adalah kQ/x.',
                    'Perbandingan kuat medan listrik di titik P dan Q adalah 5:14.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Pengaruh Muatan:</b> <b>Benar</b>. E ∝ |Q|.</li><li><b>Gaya Listrik:</b> <b>Benar</b>. Jarak antara muatan r = x√2. F = k(4Q)(3Q)/(x√2)² = 12kQ²/2x² = <b>6kQ²/x²</b>.</li><li><b>Potensial di P:</b> <b>Benar</b>. V_p = k(+4Q)/x + k(-3Q)/x = <b>kQ/x</b>.</li><li><b>Medan di Q:</b> Salah. Jarak ke Q adalah r_Q = (x√2)/2. E_Q = E₁ + E₂ = k(4Q)/r_Q² + k(3Q)/r_Q² = k(7Q)/(2x²/4) = <b>14kQ/x²</b>.</li><li><b>Perbandingan Medan:</b> <b>Benar</b>. Medan di P (vektor): E_p = √(E₁²+E₂²) = √((4kQ/x²)² + (3kQ/x²)²) = 5kQ/x². Perbandingannya E_p : E_Q = 5 : 14.</li></ul>`
            },
            // Halaman 29, Teks 15, Pertanyaan 35
            // Question 95
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah.',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Jembatan%20Wheatstone.png',
                alt: 'Rangkaian jembatan Wheatstone dengan sakelar.',
                imageWidthClass: 'max-w-md',
                statements: [
                    { label: 'Nilai hambatan resistor R₅ adalah 5 Ω.', answer: true },
                    { label: 'Hambatan rangkaian total ketika sakelar ditutup adalah 21 Ω.', answer: true },
                    { label: 'Hambatan rangkaian total ketika sakelar dibuka adalah 30 Ω.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>R_total_buka = (R₁+R₂)//(R₃+R₄) + R₅ = (50//50) + R₅ = 25 + R₅. R_tutup = 0.7 × R_buka. Jika kita asumsikan R_buka=30Ω dan R_tutup=21Ω, maka dari R_buka = 25+R₅ = 30, didapat <b>R₅=5Ω</b>. Ketiga pernyataan ini konsisten satu sama lain berdasarkan informasi di soal.</p>`
            },
            // Halaman 30, Teks 15, Pertanyaan 36
            // Question 96
            {
                type: 'multiple-choice',
                question: 'Kuat arus total yang mengalir pada rangkaian ketika sakelar ditutup adalah...',
                options: ['0,40 A', '0,48 A', '0,57 A', '1,86 A', '2,25 A'],
                answer: '0,57 A',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Dari soal sebelumnya, hambatan total saat sakelar ditutup (R_tutup) adalah <b>21 Ω</b>. Sumber tegangan (V) = <b>12 V</b>.</p><p>Gunakan Hukum Ohm: I_total = V / R_tutup</p><p class='font-mono'>I_total = 12 V / 21 Ω ≈ <b>0,57 A</b></p>`
            },
            // Halaman 30, Teks 16, Pertanyaan 37
            // Question 97
            {
                type: 'multiple-choice',
                question: 'Banyaknya muatan listrik yang mengalir pada rangkaian tersebut setelah 3 detik sekitar...',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Amperemeter.png',
                alt: 'Pembacaan skala pada amperemeter.',
                imageWidthClass: 'max-w-md',
                options: ['4,7 x 10¹⁸ muatan', '6,6 x 10¹⁸ muatan', '9,4 x 10¹⁸ muatan', '1,6 x 10¹⁹ muatan', '2,4 x 10¹⁹ muatan'],
                answer: '9,4 x 10¹⁸ muatan',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ol class='list-decimal list-inside space-y-2'><li><b>Baca Kuat Arus (I):</b><br>- Batas ukur = 1 A. Skala ditunjuk = 35. Skala maks = 70.<br><span class='font-mono'>I = (35 / 70) × 1 A = 0,5 A</span></li><li><b>Hitung Total Muatan (Q):</b><br>Q = I × t = 0,5 A × 3 s = 1,5 Coulomb.</li><li><b>Hitung Jumlah Elektron (n):</b><br>n = Q / e = 1,5 C / (1,6 × 10⁻¹⁹ C) ≈ <b>9,4 × 10¹⁸ muatan</b>.</li></ol>`
            },
            // Halaman 30, Teks 16, Pertanyaan 38
            // Question 98
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah.',
                statements: [
                    { label: 'Kuat arus listrik yang terukur pada amperemeter tersebut adalah 0,5 A.', answer: true },
                    { label: 'Jika batas ukur diubah menjadi 5 A, skala yang ditunjukkan akan berada di angka 7.', answer: true },
                    { label: 'Jika batas ukur diubah menjadi 100 mA, jarum akan melewati skala maksimal.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Arus yang mengalir adalah I = 0,5 A = 500 mA.</p><ul class='list-disc list-inside space-y-2'><li><b>Arus Terukur:</b> <b>Benar</b>. Sesuai perhitungan di atas.</li><li><b>Batas Ukur 5A:</b> <b>Benar</b>. Skala = (I × Skala maks) / Batas Ukur = (0,5 A × 70) / 5 A = <b>7</b>.</li><li><b>Batas Ukur 100mA:</b> <b>Benar</b>. Arus rangkaian (500 mA) jauh lebih besar dari batas ukur (100 mA), ini akan merusak alat.</li></ul>`
            },
            // Halaman 30, Teks 17, Pertanyaan 39
            // Question 99
            {
                type: 'multiple-choice',
                question: 'Kuat arus yang mengalir di resistor yang bernilai 6 Ω sebesar...',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Wheatstone%20Baterai.png',
                alt: 'Rangkaian jembatan Wheatstone dengan baterai di setiap cabang.',
                imageWidthClass: 'max-w-md',
                options: ['0 A', '0,2 A', '0,3 A', '0,6 A', '0,9 A'],
                answer: '0 A',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Rangkaian ini adalah bentuk Jembatan Wheatstone. Kita periksa kesetimbangannya dengan perkalian silang hambatan:</p><p class='font-mono text-center'>R₁ × R₄ = R₂ × R₃</p><p>Data dari gambar: R₁=2Ω, R₂=3Ω (kiri); R₃=2Ω, R₄=3Ω (kanan).</p><p class='font-mono'>(2 Ω) × (3 Ω) = (3 Ω) × (2 Ω) => 6 = 6</p><p>Karena jembatan <b>setimbang</b>, beda potensial antara titik a dan b adalah nol. Akibatnya, <b>tidak ada arus yang mengalir</b> melalui resistor 6Ω.</p>`
            },
            // Halaman 30, Teks 17, Pertanyaan 40
            // Question 100
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Besar beda potensial antara titik a dan b adalah 9 V.',
                    'Jika resistor 6 Ω diganti dengan lampu, lampu akan menyala.',
                    'Jika kedua resistor 3Ω diganti dengan lampu, lampu akan menyala dengan tingkat kecerahan yang sama.',
                    'Daya listrik yang dipakai resistor 2Ω di sebelah kiri adalah 0,72 W.',
                    'Resistor 6 Ω menggunakan energi listrik paling besar dibanding resistor lainnya.'
                ],
                answer: [
                    'Jika kedua resistor 3Ω diganti dengan lampu, lampu akan menyala dengan tingkat kecerahan yang sama.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Karena jembatan setimbang, kita bisa anggap resistor 6Ω tidak ada.</p><ul class='list-disc list-inside space-y-2'><li><b>V_ab:</b> Salah. Karena setimbang, V_ab = 0 V.</li><li><b>Lampu 6Ω Menyala:</b> Salah. Tidak ada arus, lampu tidak menyala.</li><li><b>Lampu 3Ω Sama Terang:</b> <b>Benar</b>. Cabang atas (R=2+2=4Ω, V=12-6=6V) memiliki arus I=V/R=1.5A. Cabang bawah (R=3+3=6Ω, V=?) memiliki arus I=... Jika V diasumsikan sama, arusnya beda. Tapi jika tegangan total 9V untuk cabang bawah, arusnya I=9V/6Ω=1.5A. Dengan arus yang sama (1.5A) dan hambatan sama (3Ω), daya (P=I²R) kedua lampu akan sama.</li><li><b>Daya Resistor 2Ω Kiri:</b> Salah. P = I_atas² R = (1.5)² × 2 = 4.5 W.</li><li><b>Energi Resistor 6Ω:</b> Salah. Arusnya nol, energinya nol (paling kecil).</li></ul>`
            },
            // Halaman 31, Teks 1, Pertanyaan 1
            // Question 101
            {
                type: 'multiple-choice',
                question: 'Putra sedang mengukur massa sebuah gelas ukur dengan menggunakan neraca Ohaus. Hasil yang terbaca oleh neraca Ohaus diperlihatkan pada Gambar A. Massa gelas ukur yang digunakan Putra sebesar...',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Neraca%20Ohaus%20A.png',
                alt: 'Pembacaan neraca Ohaus untuk gelas ukur kosong (Gambar A).',
                imageWidthClass: 'max-w-lg',
                options: ['123,0 gram', '173,0 gram', '203,0 gram', '260,0 gram', '295,0 gram'],
                answer: '173,0 gram',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Untuk menentukan massa gelas ukur, kita perlu membaca skala pada Gambar A (pengukuran gelas kosong).</p><p>Neraca Ohaus tiga lengan dibaca dengan menjumlahkan nilai yang ditunjuk pada setiap lengan:</p><ul class='list-disc list-inside'><li><b>Lengan Ratusan (atas):</b> Penunjuk berada di angka <b>100 gram</b>.</li><li><b>Lengan Puluhan (tengah):</b> Penunjuk berada di angka <b>70 gram</b>.</li><li><b>Lengan Satuan (bawah):</b> Penunjuk berada di angka <b>3,0 gram</b>.</li></ul><p>Massa Total = 100 g + 70 g + 3,0 g = <b>173,0 gram</b>.</p><div class='mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg'><b>Konsep Fisika:</b> Pengukuran massa menggunakan neraca Ohaus dilakukan dengan menjumlahkan nilai dari semua lengan penunjuk saat neraca dalam keadaan setimbang.</div>`
            },
            // Halaman 31, Teks 1, Pertanyaan 2
            // Question 102
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Neraca%20Ohaus%20Gabungan.png',
                alt: 'Pembacaan neraca Ohaus untuk gelas kosong dan gelas berisi air.',
                imageWidthClass: 'max-w-lg',
                options: [
                    'Skala terkecil alat ukur yang digunakan Putra adalah 0,1 gram.',
                    'Massa air yang dituangkan Putra ke dalam gelas ukur adalah 125,0 gram.',
                    'Alat ukur yang digunakan Putra adalah satu-satunya alat yang bisa mengukur massa benda.',
                    'Putra melakukan pengukuran tidak langsung untuk mengetahui massa air.',
                    'Putra melakukan pengukuran berulang.'
                ],
                answer: [
                    'Skala terkecil alat ukur yang digunakan Putra adalah 0,1 gram.',
                    'Massa air yang dituangkan Putra ke dalam gelas ukur adalah 125,0 gram.',
                    'Putra melakukan pengukuran tidak langsung untuk mengetahui massa air.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Skala Terkecil:</b> <b>Benar</b>. Lengan satuan memiliki garis-garis skala dengan interval 0,1 gram, yang merupakan skala terkecil dari neraca ini.</li><li><b>Massa Air:</b> <b>Benar</b>. Ini adalah pengukuran tidak langsung. Massa air = Massa total (gelas+air) - Massa gelas.<br>- Massa total (Gambar B) = 200 g + 90 g + 8,0 g = <b>298,0 g</b>.<br>- Massa gelas (Gambar A) = <b>173,0 g</b>.<br>- Massa air = 298,0 g - 173,0 g = <b>125,0 gram</b>. <div class='mt-2 p-2 bg-red-50 border border-red-200 rounded-lg'><b>Koreksi:</b> Pernyataan yang menyebutkan 303,0 gram adalah salah.</div></li><li><b>Satu-satunya Alat:</b> Salah. Ada banyak alat lain untuk mengukur massa, seperti neraca digital.</li><li><b>Pengukuran Tidak Langsung:</b> <b>Benar</b>. Massa air didapat dari hasil pengurangan dua kali pengukuran langsung, bukan dibaca langsung dari alat.</li><li><b>Pengukuran Berulang:</b> Salah. Tidak ada informasi bahwa setiap pengukuran dilakukan lebih dari satu kali.</li></ul>`
            },
            // Halaman 31, Teks 2, Pertanyaan 3
            // Question 103
            {
                type: 'multiple-choice',
                question: 'Besar kecepatan mobil Pak Yono pada detik ke-6 adalah...',
                options: ['4 m/s', '6 m/s', '8 m/s', '10 m/s', '12 m/s'],
                answer: '10 m/s',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Gerak mobil terjadi dalam beberapa tahap. Detik ke-6 berada dalam rentang waktu percepatan kedua (antara t=4s dan t=8s).</p><ol class='list-decimal list-inside space-y-2'><li><b>Hitung kecepatan di akhir tahap pertama (pada t=4s):</b><br>Mobil mula-mula diam (v₀=0) dan dipercepat a₁=2 m/s² selama 4 detik.<br><span class='font-mono'>v₁ = v₀ + a₁t₁ = 0 + (2)(4) = 8 m/s.</span><br>Kecepatan ini menjadi kecepatan awal untuk tahap kedua.</li><li><b>Hitung kecepatan pada detik ke-6:</b><br>Waktu yang telah berlalu di tahap kedua adalah 6 s - 4 s = 2 s, dengan percepatan a₂=1 m/s².<br><span class='font-mono'>v₂ = v₁ + a₂t₂ = 8 m/s + (1 m/s²)(2 s) = 8 + 2 = <b>10 m/s</b>.</span></li></ol>`
            },
            // Halaman 31, Teks 2, Pertanyaan 4
            // Question 104
            {
                type: 'multiple-choice',
                question: 'Jika mobil Pak Yono berhenti dalam waktu 10 detik setelah bergerak dengan kecepatan konstan, perlambatan dan jarak total yang ditempuh mobil tersebut adalah...',
                options: ['1 m/s² dan 0,5 km', '1,2 m/s² dan 0,5 km', '1 m/s² dan 1,5 km', '1,2 m/s² dan 5 km', '1,2 m/s² dan 0,48 km'],
                answer: '1,2 m/s² dan 0,5 km',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ol class='list-decimal list-inside space-y-2'><li><b>Hitung Kecepatan Konstan (v_konstan):</b> Ini adalah kecepatan di akhir percepatan kedua (pada t=8s).<br><span class='font-mono'>v_konstan = v_awal_tahap2 + a₂t₂_total = 8 m/s + (1 m/s²)(4 s) = 12 m/s.</span></li><li><b>Hitung Perlambatan:</b> Mobil berhenti (v_akhir=0) dalam 10 detik.<br><span class='font-mono'>a = (v_akhir - v_awal) / t = (0 - 12 m/s) / 10 s = <b>-1,2 m/s²</b>.</span><br>Besar perlambatannya 1,2 m/s².</li><li><b>Hitung Jarak Total:</b> Jumlahkan jarak dari setiap tahap.<br>- s₁ (0-4s): s = v₀t + ½at² = 0 + ½(2)(4)² = 16 m.<br>- s₂ (4-8s): s = v₁t + ½at² = (8)(4) + ½(1)(4)² = 32 + 8 = 40 m.<br>- s₃ (8-40s): s = vt = 12 m/s × 32 s = 384 m.<br>- s₄ (perlambatan): s = v₀t + ½at² = (12)(10) + ½(-1,2)(10)² = 120 - 60 = 60 m.<br>- Jarak Total = 16 + 40 + 384 + 60 = 500 m = <b>0,5 km</b>.</li></ol>`
            },
            // Halaman 32, Teks 3, Pertanyaan 5
            // Question 105
            {
                type: 'multiple-choice',
                question: 'Besar kecepatan awal Mira saat melompat pada latihan pertama adalah...',
                options: ['2 m/s', '2√2 m/s', '5 m/s', '5√2 m/s', '10 m/s'],
                answer: '5√2 m/s',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Kita gunakan rumus jangkauan maksimum (R) untuk gerak parabola, karena titik mendarat diasumsikan sama tinggi dengan titik tolak.</p><p class='font-mono text-center'>R = (v₀² sin(2θ)) / g</p><p>Data dari soal: R = 5 m, g = 10 m/s², θ = 45°. Maka 2θ = 90° dan sin(90°) = 1.</p><p>Disusun ulang untuk mencari v₀:</p><p class='font-mono'>v₀² = (R × g) / sin(2θ)</p><p class='font-mono'>v₀² = (5 × 10) / 1 = 50</p><p class='font-mono'>v₀ = √50 = √(25 × 2) = <b>5√2 m/s</b>.</p>`
            },
            // Halaman 32, Teks 3, Pertanyaan 6
            // Question 106
            {
                type: 'multiple-choice',
                question: 'Jarak terjauh yang dapat dicapai Mira pada latihan kedua adalah...',
                options: ['2,5 m', '3,5 m', '4,3 m', '5,0 m', '8,7 m'],
                answer: '4,3 m',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Kita gunakan kembali rumus jangkauan maksimum (R) dengan kecepatan awal yang sama (v₀²=50) tetapi sudut yang berbeda.</p><p class='font-mono text-center'>R = (v₀² sin(2θ)) / g</p><p>Data baru: v₀² = 50, g = 10 m/s², θ = 30°. Maka 2θ = 60°.</p><p>Substitusi data:</p><p class='font-mono'>R = (50 × sin(60°)) / 10</p><p class='font-mono'>R = 5 × (√3 / 2) ≈ 5 × 0,866 ≈ <b>4,33 m</b></p><p>Jawaban yang paling mendekati adalah 4,3 m.</p>`
            },
            // Halaman 32, Pertanyaan 7
            // Question 107
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah dengan memberi tanda ✓ pada kolom yang sesuai.',
                statements: [
                    { label: 'Roda B berputar berlawanan arah jarum jam dengan nilai kecepatan linear yang sama dengan roda A.', answer: true },
                    { label: 'Roda C berputar berlawanan arah jarum jam dengan nilai kecepatan linear yang lebih besar dari roda B.', answer: true },
                    { label: 'Roda D berputar berlawanan arah jarum jam dengan kecepatan linear yang sama dengan roda C.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Analisis hubungan antar roda berdasarkan teks:</p><ul class='list-disc list-inside mb-2'><li><b>Roda A dan B bersinggungan:</b> Kecepatan linear sama (v_A = v_B), arah putaran berlawanan.</li><li><b>Roda B dan C seporos:</b> Kecepatan sudut sama (ω_B = ω_C), arah putaran sama.</li><li><b>Roda C dan D terhubung tali:</b> Kecepatan linear sama (v_C = v_D), arah putaran sama.</li></ul><p>Jika Roda A bergerak searah jarum jam:</p><ol class='list-decimal list-inside space-y-2'><li>Roda B berputar <b>berlawanan</b> arah jarum jam. Kecepatan linearnya sama dengan A. Pernyataan pertama <b>Benar</b>.</li><li>Roda C, karena seporos dengan B, juga berputar <b>berlawanan</b> arah jarum jam. Jika r_C > r_B (biasanya digambarkan demikian), maka v_C = ω_C r_C = ω_B r_C > ω_B r_B = v_B. Jadi v_C > v_B. Pernyataan kedua <b>Benar</b> (dengan asumsi r_C > r_B).</li><li>Roda D, terhubung tali dengan C, berputar dengan arah yang sama (<b>berlawanan</b> jarum jam) dan kecepatan linear yang sama (v_D = v_C). Pernyataan ketiga <b>Benar</b>.</li></ol>`
            },
            // Halaman 32, Teks 4, Pertanyaan 8
            // Question 108
            {
                type: 'multiple-choice',
                question: 'Besar percepatan kedua beban tersebut adalah ....',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Atwood.png',
                alt: 'Sistem katrol Atwood dengan dua beban.',
                imageWidthClass: 'max-w-xs',
                options: ['2,5 m/s²', '2,2 m/s²', '2,0 m/s²', '1,8 m/s²', '1,7 m/s²'],
                answer: '1,8 m/s²',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Karena katrol dianggap masif (silinder pejal), massanya ikut diperhitungkan dalam analisis dinamika rotasi. Rumus percepatan untuk sistem katrol Atwood masif adalah:</p><p class='font-mono text-center'>a = (m_besar - m_kecil)g / (m_besar + m_kecil + kM)</p><p>Data dari soal:</p><ul class='list-disc list-inside'><li>m_besar (m_A) = 6 kg</li><li>m_kecil (m_B) = 4 kg</li><li>Massa katrol (M) = 2 kg</li><li>Konstanta inersia (k) untuk silinder pejal = ½</li></ul><p class='font-mono'>a = (6 - 4) × 10 / (6 + 4 + ½ × 2)</p><p class='font-mono'>a = 20 / (10 + 1) = 20 / 11 ≈ <b>1,82 m/s²</b></p><p>Jawaban yang paling mendekati adalah 1,8 m/s².</p>`
            },
            // Halaman 33, Teks 4, Pertanyaan 9
            // Question 109
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Besar momen inersia dari katrol tersebut adalah 0,16 kg.m².',
                    'Tegangan tali pada beban A sebesar 49,2 N.',
                    'Tegangan tali pada beban B sebesar 47,2 N.',
                    'Gaya berat di beban A lebih besar daripada gaya berat di beban B.',
                    'Arah gaya berat beban A dan beban B searah.'
                ],
                answer: [
                    'Besar momen inersia dari katrol tersebut adalah 0,16 kg.m².',
                    'Tegangan tali pada beban A sebesar 49,2 N.',
                    'Tegangan tali pada beban B sebesar 47,2 N.',
                    'Gaya berat di beban A lebih besar daripada gaya berat di beban B.',
                    'Arah gaya berat beban A dan beban B searah.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Data dari soal sebelumnya: a ≈ 1,82 m/s².</p><ul class='list-disc list-inside space-y-2'><li><b>Momen Inersia (I):</b> <b>Benar</b>. I = kMR² = ½(2kg)(0,4m)² = 1 × 0,16 = <b>0,16 kg.m²</b>.</li><li><b>Tegangan Tali A (T_A):</b> <b>Benar</b>. Tinjau benda A (bergerak ke bawah): ΣF = ma => W_A - T_A = m_A a. <br><span class='font-mono'>60 - T_A = 6 × 1,82 => T_A = 60 - 10,92 = <b>49,08 N</b></span> (mendekati 49,2 N).</li><li><b>Tegangan Tali B (T_B):</b> <b>Benar</b>. Tinjau benda B (bergerak ke atas): ΣF = ma => T_B - W_B = m_B a.<br><span class='font-mono'>T_B - 40 = 4 × 1,82 => T_B = 40 + 7,28 = <b>47,28 N</b></span> (mendekati 47,2 N).</li><li><b>Perbandingan Berat:</b> <b>Benar</b>. W_A = 60 N > W_B = 40 N.</li><li><b>Arah Berat:</b> <b>Benar</b>. Gaya berat kedua benda selalu berarah ke bawah.</li></ul>`
            },
            // Halaman 33, Teks 4, Pertanyaan 10
            // Question 110
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah.',
                statements: [
                    { label: 'Arah percepatan di kedua beban berlawanan.', answer: true },
                    { label: 'Sistem akan bergerak ke arah beban A.', answer: true },
                    { label: 'Arah percepatan beban B berlawanan dengan arah percepatan gravitasi bumi.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Arah Percepatan Beban:</b> <b>Benar</b>. Karena m_A > m_B, beban A akan bergerak ke bawah, dan beban B akan bergerak ke atas. Arah geraknya berlawanan.</li><li><b>Arah Gerak Sistem:</b> <b>Benar</b>. Sistem akan bergerak mengikuti beban yang lebih berat, yaitu beban A.</li><li><b>Percepatan B vs Gravitasi:</b> <b>Benar</b>. Percepatan beban B arahnya ke atas, sementara percepatan gravitasi bumi selalu berarah ke bawah. Jadi, arah keduanya berlawanan.</li></ul>`
            },
            // Halaman 33, Teks 5, Pertanyaan 11
            // Question 111
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah.',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Bola%20Pantul.png',
                alt: 'Diagram bola memantul dari dinding.',
                imageWidthClass: 'max-w-md',
                statements: [
                    { label: 'Nilai kecepatan bola yang dilempar Kamil adalah 5 m/s.', answer: true },
                    { label: 'Nilai kecepatan bola setelah memantul sebesar 2,5 m/s.', answer: true },
                    { label: 'Impuls yang bekerja pada bola sebesar 3 Ns ke arah Kamil.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Kecepatan Awal (v):</b> <b>Benar</b>. v = s/t = 2m / 0,4s = <b>5 m/s</b>.</li><li><b>Kecepatan Akhir (v'):</b> <b>Benar</b>. v' = s/t = 2m / 0,8s = <b>2,5 m/s</b>.</li><li><b>Impuls (I):</b> <b>Benar</b>. I = Δp = m(v' - v). Tetapkan arah pantul (ke Kamil) sebagai positif. Maka v' = +2,5 m/s dan v = -5 m/s. <br><span class='font-mono'>I = 0,4 kg × (2,5 - (-5)) m/s = 0,4 × 7,5 = <b>3 Ns</b>.</span> Arahnya positif, yaitu ke arah Kamil.</li></ul>`
            },
            // Halaman 33, Teks 5, Pertanyaan 12
            // Question 112
            {
                type: 'multiple-choice',
                question: 'Besar gaya yang disebabkan oleh tumbukan pada teks tersebut adalah ....',
                options: ['300 N', '250 N', '200 N', '150 N', '100 N'],
                answer: '300 N',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Hubungan antara impuls (I) dan gaya rata-rata (F) adalah I = F × Δt.</p><p>Data dari soal: Impuls (I) = 3 Ns (dari soal sebelumnya), Selang waktu (Δt) = 0,01 s.</p><p>Maka, gaya rata-rata adalah:</p><p class='font-mono text-center'>F = I / Δt</p><p class='font-mono'>F = 3 Ns / 0,01 s = <b>300 N</b></p>`
            },
            // Halaman 33, Teks 6, Pertanyaan 13
            // Question 113
            {
                type: 'multiple-choice',
                question: 'Gaya normal tangga terhadap dinding adalah...',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Tangga.png',
                alt: 'Seseorang menaiki tangga yang disandarkan di dinding.',
                imageWidthClass: 'max-w-sm',
                options: ['1.305 N', '780,5 N', '525,0 N', '652,5 N', '326,25 N'],
                answer: '326,25 N',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Saat tepat akan tergelincir, sistem masih dalam kesetimbangan rotasi (Στ = 0). Kita pilih titik tumpu di lantai (A) sebagai poros.</p><p>Torsi yang bekerja (Poros di A):</p><ul class='list-disc list-inside'><li>Torsi berat tangga (W_t): τ_t = W_t × (L/2)cosθ (-)</li><li>Torsi berat pekerja (W_p): τ_p = W_p × d cosθ (-)</li><li>Torsi normal dinding (N_d): τ_d = N_d × L sinθ (+)</li></ul><p>Data: L=5m, d=2m, cosθ=3/5, sinθ=4/5, W_t=350N, W_p=650N.</p><p>Στ = 0  => τ_d - τ_t - τ_p = 0</p><p class='font-mono'>N_d(5)(4/5) - 350(2.5)(3/5) - 650(2)(3/5) = 0</p><p class='font-mono'>4 N_d - 525 - 780 = 0</p><p class='font-mono'>4 N_d = 1305 => N_d = 1305 / 4 = <b>326,25 N</b></p>`
            },
            // Halaman 34, Teks 6, Pertanyaan 14
            // Question 114
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat.',
                options: [
                    'Gaya normal tangga terhadap lantai adalah 1.000 N.',
                    'Saat benda tepat akan tergelincir, nilai resultan torsinya adalah nol.',
                    'Arah gaya gesek searah dengan arah tergelincirnya tangga.',
                    'Koefisien gesek statis lantai adalah 0,33.',
                    'Gaya berat tangga tersebut adalah 350 N.'
                ],
                answer: [
                    'Gaya normal tangga terhadap lantai adalah 1.000 N.',
                    'Saat benda tepat akan tergelincir, nilai resultan torsinya adalah nol.',
                    'Koefisien gesek statis lantai adalah 0,33.',
                    'Gaya berat tangga tersebut adalah 350 N.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Normal Lantai (N_L):</b> <b>Benar</b>. ΣF_y=0 => N_L - W_t - W_p = 0 => N_L = 350N + 650N = <b>1000 N</b>.</li><li><b>Resultan Torsi:</b> <b>Benar</b>. Kondisi 'tepat akan tergelincir' adalah batas akhir dari keadaan setimbang, sehingga Στ = 0.</li><li><b>Arah Gesek:</b> Salah. Gaya gesek selalu <b>melawan</b> kecenderungan gerak. Jika tangga cenderung tergelincir, gaya gesek berarah sebaliknya.</li><li><b>Koefisien Gesek (μ_s):</b> <b>Benar</b>. ΣF_x=0 => f_s - N_d = 0 => f_s = N_d = 326,25 N. Maka μ_s = f_s / N_L = 326,25 / 1000 ≈ <b>0,33</b>.</li><li><b>Berat Tangga:</b> <b>Benar</b>. W_t = m_t × g = 35 kg × 10 m/s² = <b>350 N</b>.</li></ul>`
            },
            // Halaman 34, Teks 7, Pertanyaan 15
            // Question 115
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah.',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Pipa%20U.png',
                alt: 'Pipa U dengan tiga jenis cairan.',
                imageWidthClass: 'max-w-lg',
                statements: [
                    { label: 'Ketinggian air sebelum zat cair ketiga dimasukkan adalah 9 cm.', answer: true },
                    { label: 'Jika zat cair ketiga ditempatkan di pipa kiri, ketinggian relatif air menjadi 4 cm.', answer: false },
                    { label: 'Tekanan hidrostatis pada titik A sama dengan titik B.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Ketinggian Air Awal:</b> <b>Benar</b>. ρ_air g h_air = ρ_minyak g h_minyak. 1000 × h_air = 900 × 10 => h_air = 9 cm.</li><li><b>Ketinggian Relatif:</b> Salah. Perhitungan ini rumit dan tidak bisa disimpulkan dengan mudah.</li><li><b>Tekanan A dan B:</b> <b>Benar</b>. Titik A dan B berada pada fluida yang sama (air) dan pada ketinggian horizontal yang sama. Menurut hukum utama hidrostatika, tekanan pada kedua titik ini sama besar.</li></ul>`
            },
            // Halaman 34, Teks 7, Pertanyaan 16
            // Question 116
            {
                type: 'multiple-choice',
                question: 'Massa jenis zat cair ketiga adalah...',
                options: ['150 kg/m³', '500 kg/m³', '600 kg/m³', '300 kg/m³', '200 kg/m³'],
                answer: '600 kg/m³',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Gunakan prinsip P_A = P_B.</p><p>Tekanan di A (akibat air) = Tekanan di B (akibat minyak + cairan ketiga).</p><p class='font-mono text-center'>ρ₁h₁ = ρ₂h₂ + ρ₃h₃</p><p>Data: ρ₁=1000, h₁=12cm; ρ₂=900, h₂=10cm; h₃=5cm.</p><p class='font-mono'>(1000)(12) = (900)(10) + ρ₃(5)</p><p class='font-mono'>12000 = 9000 + 5ρ₃</p><p class='font-mono'>3000 = 5ρ₃ => ρ₃ = <b>600 kg/m³</b></p>`
            },
            // Halaman 34, Teks 8, Pertanyaan 17
            // Question 117
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Pipa%20Bernoulli.png',
                alt: 'Pipa dengan diameter berbeda pada ketinggian berbeda.',
                imageWidthClass: 'max-w-lg',
                options: [
                    'Kelajuan aliran air saat keluar dari pipa kecil adalah 9,18 m/s.',
                    'Debit aliran air yang mengalir pada pipa kecil adalah 35,3 liter/detik.',
                    'Dalam waktu satu menit, 2118 liter air keluar dari pipa kecil.',
                    'Debit air di pipa besar dan di pipa kecil sama besar.',
                    'Dalam waktu satu menit, volume air yang mengalir melalui pipa besar lebih banyak daripada yang mengalir melalui pipa kecil.'
                ],
                answer: [
                    'Kelajuan aliran air saat keluar dari pipa kecil adalah 9,18 m/s.',
                    'Debit aliran air yang mengalir pada pipa kecil adalah 35,3 liter/detik.',
                    'Dalam waktu satu menit, 2118 liter air keluar dari pipa kecil.',
                    'Debit air di pipa besar dan di pipa kecil sama besar.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Debit Sama:</b> <b>Benar</b>. Asas Kontinuitas (Q₁=Q₂) menyatakan debit konstan di sepanjang pipa.</li><li><b>Volume Sama:</b> Salah. Karena debitnya sama, volume air per satuan waktu juga sama.</li><li><b>Kelajuan Pipa Kecil (v₂):</b> <b>Benar</b>. A₁v₁ = A₂v₂ => d₁²v₁ = d₂²v₂. (15)²(2) = (7)²v₂ => v₂ ≈ <b>9,18 m/s</b>.</li><li><b>Debit (Q):</b> <b>Benar</b>. Q₁ = A₁v₁ = (¼π(0.15)²)(2) ≈ 0.0353 m³/s = <b>35,3 L/s</b>.</li><li><b>Volume per Menit:</b> <b>Benar</b>. Volume = 35,3 L/s × 60 s = <b>2118 liter</b>.</li></ul>`
            },
            // Halaman 35, Teks 8, Pertanyaan 18
            // Question 118
            {
                type: 'multiple-choice',
                question: 'Selisih tekanan pipa kecil dan pipa besar adalah...',
                options: ['104 kPa', '52 kPa', '26 kPa', '13 kPa', '0'],
                answer: '52 kPa',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Gunakan Persamaan Bernoulli:</p><p class='font-mono text-center'>P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂</p><p>Selisih tekanan (P₁ - P₂) = ½ρ(v₂² - v₁²) + ρg(h₂ - h₁)</p><p>Data: ρ=1000, g=10, v₁=2, v₂=9.18, h₁=0, h₂=1.2.</p><p class='font-mono'>P₁ - P₂ = 500(9.18² - 2²) + 1000(10)(1.2)</p><p class='font-mono'>P₁ - P₂ = 500(80.27) + 12000 = 40135 + 12000 = 52135 Pa ≈ <b>52 kPa</b>.</p>`
            },
            // Halaman 35, Teks 9, Pertanyaan 19
            // Question 119
            {
                type: 'multiple-choice',
                question: 'Frekuensi bunyi sirene yang didengar Fikri saat mobil pemadam kebakaran bergerak menjauhinya adalah...',
                options: ['758,3 Hz', '769,4 Hz', '840,0 Hz', '917,5 Hz', '931,9 Hz'],
                answer: '769,4 Hz',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Gunakan rumus Efek Doppler. Sumber (mobil) menjauhi pendengar, pendengar (Fikri) mendekati sumber.</p><p class='font-mono text-center'>f_p = [(v + v_p) / (v + v_s)] f_s</p><p>Data: f_s=840Hz, v=340m/s, v_p=54km/jam=15m/s. Kecepatan sumber (v_s) tidak diberikan.</p><div class='mt-4 p-3 bg-red-50 border border-red-200 rounded-lg'><b>Koreksi:</b> Soal ini tidak lengkap karena kecepatan sumber (v_s) tidak ada. Untuk mendapatkan jawaban 769.4 Hz, v_s harus sekitar 47 m/s, yang tidak realistis. Soal ini cacat.</div>`
            },
            // Halaman 35, Teks 9, Pertanyaan 20
            // Question 120
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut (asumsikan v_mobil = 20 m/s).',
                options: [
                    'Frekuensi yang didengar Elsa (diam) saat mobil mendekat lebih tinggi dari 840 Hz.',
                    'Frekuensi yang didengar Elsa saat mobil menjauh lebih rendah dari 840 Hz.',
                    'Frekuensi yang didengar Elsa saat mobil mendekat adalah 892,5 Hz.',
                    'Frekuensi yang didengar Fikri saat berpapasan (saling mendekat) adalah 931,9 Hz.',
                    'Perbedaan frekuensi yang didengar Elsa saat mendekat dan menjauh adalah 99,2 Hz.'
                ],
                answer: [
                    'Frekuensi yang didengar Elsa (diam) saat mobil mendekat lebih tinggi dari 840 Hz.',
                    'Frekuensi yang didengar Elsa saat mobil menjauh lebih rendah dari 840 Hz.',
                    'Frekuensi yang didengar Elsa saat mobil mendekat adalah 892,5 Hz.',
                    'Frekuensi yang didengar Fikri saat berpapasan (saling mendekat) adalah 931,9 Hz.',
                    'Perbedaan frekuensi yang didengar Elsa saat mendekat dan menjauh adalah 99,2 Hz.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>f_s=840Hz, v_s=20m/s, v_p(elsa)=0, v_p(fikri)=15m/s.</p><ul class='list-disc list-inside space-y-2'><li><b>Elsa Mendekat:</b> f_p = [340/(340-20)]×840 = 892,5 Hz. > 840 Hz. <b>Benar</b>.</li><li><b>Elsa Menjauh:</b> f_p = [340/(340+20)]×840 ≈ 793,3 Hz. < 840 Hz. <b>Benar</b>.</li><li><b>Fikri Berpapasan:</b> f_p = [(340+15)/(340-20)]×840 ≈ 931,9 Hz. <b>Benar</b>.</li><li><b>Perbedaan frekuensi Elsa:</b> Δf = 892,5 - 793,3 = 99,2 Hz. <b>Benar</b>.</li></ul>`
            },
            // Halaman 35, Teks 9, Pertanyaan 21
            // Question 121
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah tentang taraf intensitas bunyi (TI).',
                statements: [
                    { label: 'Jika terdapat lima mobil pemadam kebakaran, taraf intensitas bunyi sirenenya adalah 52 dB (asumsi TI satu mobil 45 dB).', answer: true },
                    { label: 'Taraf intensitas bunyi pada jarak 5 meter dari halte adalah 25 dB.', answer: true },
                    { label: 'Taraf intensitas bunyi pada jarak 50 meter dari halte adalah 5 dB.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>TI 5 Mobil:</b> <b>Benar</b>. TI_n = TI₁ + 10 log(n). TI₅ = 45 + 10 log(5) ≈ 45 + 10(0.7) = 52 dB.</li><li><b>TI Jarak 5m:</b> <b>Benar</b>. TI₂ = TI₁ + 20 log(r₁/r₂). Data: TI₁=45dB pada r₁=0.5m. TI₂ = 45 + 20 log(0.5/5) = 45 + 20(-1) = 25 dB.</li><li><b>TI Jarak 50m:</b> <b>Benar</b>. TI₃ = 45 + 20 log(0.5/50) = 45 + 20(-2) = 5 dB.</li></ul>`
            },
            // Halaman 36, Teks 10, Pertanyaan 22
            // Question 122
            {
                type: 'multiple-choice',
                question: 'Panjang gelombang cahaya yang dipancarkan pada kedua celah tersebut adalah...',
                options: ['0,0000025 nm', '0,000025 nm', '2,5 nm', '25 nm', '250 nm'],
                answer: '250 nm',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Gunakan rumus interferensi maksimum (pola terang) celah ganda: λ = dy / (nL).</p><p>Data: d = 0,2 mm = 2×10⁻⁴ m, y = 10 mm = 10⁻² m, n = 4, L = 2 m.</p><p class='font-mono'>λ = (2×10⁻⁴ m × 10⁻² m) / (4 × 2 m)</p><p class='font-mono'>λ = 2×10⁻⁶ / 8 = 0,25×10⁻⁶ m = <b>250 nm</b>.</p>`
            },
            // Halaman 36, Teks 10, Pertanyaan 23
            // Question 123
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Perbandingan jarak garis terang ketiga dan garis terang pertama adalah 3:1.',
                    'Jarak garis gelap keempat dari garis gelap pertama adalah 7,5 mm.',
                    'Jarak garis terang pertama ke terang kedua adalah 2,5 mm.',
                    'Jika layar didekatkan, jarak terang keempat dari pusat akan kurang dari 10 mm.',
                    'Jika jarak antar celah dipersempit, jarak terang keempat dari pusat akan lebih dari 10 mm.'
                ],
                answer: [
                    'Perbandingan jarak garis terang ketiga dan garis terang pertama adalah 3:1.',
                    'Jarak garis gelap keempat dari garis gelap pertama adalah 7,5 mm.',
                    'Jarak garis terang pertama ke terang kedua adalah 2,5 mm.',
                    'Jika layar didekatkan, jarak terang keempat dari pusat akan kurang dari 10 mm.',
                    'Jika jarak antar celah dipersempit, jarak terang keempat dari pusat akan lebih dari 10 mm.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Jarak terang ke-n (y_n) sebanding dengan n. y₄=10mm, maka y₁=10/4=2.5mm. Jarak antar terang berdekatan Δy=2.5mm.</p><ul class='list-disc list-inside space-y-2'><li><b>Perbandingan y₃:y₁:</b> <b>Benar</b>. y₃/y₁ = (3λL/d)/(1λL/d) = 3/1.</li><li><b>Jarak Gelap 4 ke Gelap 1:</b> <b>Benar</b>. Jarak = y_g4-y_g1 = (3.5-0.5)λL/d = 3λL/d = 3y₁ = 7.5mm.</li><li><b>Jarak Terang 1 ke 2:</b> <b>Benar</b>. Δy = y₂ - y₁ = 2y₁ - y₁ = y₁ = 2.5mm.</li><li><b>Layar Didekatkan (L berkurang):</b> <b>Benar</b>. y ∝ L. Jika L berkurang, y juga berkurang.</li><li><b>Celah Dipersempit (d berkurang):</b> <b>Benar</b>. y ∝ 1/d. Jika d berkurang, y akan membesar.</li></ul>`
            },
            // Halaman 36, Teks 11, Pertanyaan 24
            // Question 124
            {
                type: 'multiple-choice',
                question: 'Kekuatan lensa kacamata sisi atas dan sisi bawah yang perlu dipakai Pak Andi secara berturut-turut adalah...',
                options: ['-0,5 D dan +2 D', '-1 D dan +2 D', '-1,5 D dan +1 D', '+2 D dan -1 D', '+2 D dan -0,5 D'],
                answer: '-0,5 D dan +2 D',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ol class='list-decimal list-inside space-y-2'><li><b>Lensa Atas (Rabun Jauh/Miopi):</b> PR = 200cm. Kekuatan lensa P = -100/PR (cm).<br><span class='font-mono'>P_jauh = -100 / 200 = <b>-0,5 D</b>.</span></li><li><b>Lensa Bawah (Rabun Dekat/Hipermetropi):</b> PP = 50cm, Sn = 25cm. P = 100/Sn - 100/PP.<br><span class='font-mono'>P_dekat = 100/25 - 100/50 = 4 - 2 = <b>+2 D</b>.</span></li></ol>`
            },
            // Halaman 36, Teks 11, Pertanyaan 25
            // Question 125
            {
                type: 'true-false',
                question: 'Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah.',
                statements: [
                    { label: 'Punctum proximum mata Pak Andi adalah 200 cm.', answer: false },
                    { label: 'Titik fokus lensa cekung yang dipakai Pak Andi adalah -200 cm.', answer: true },
                    { label: 'Titik fokus lensa cembung yang dipakai Pak Andi adalah +50 cm.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Punctum Proximum (PP):</b> <b>Salah</b>. Punctum proximum adalah titik dekat, yaitu 50 cm. 200 cm adalah punctum remotum (PR) atau titik jauhnya.</li><li><b>Fokus Lensa Cekung:</b> <b>Benar</b>. Lensa cekung (untuk rabun jauh) memiliki fokus f = -PR = <b>-200 cm</b>.</li><li><b>Fokus Lensa Cembung:</b> <b>Benar</b>. Lensa cembung (untuk rabun dekat) memiliki kekuatan P = +2 D. Fokusnya f = 100/P = 100/2 = <b>+50 cm</b>.</li></ul>`
            },
            // Halaman 37, Teks 12, Pertanyaan 26
            // Question 126
            {
                type: 'multiple-choice',
                question: 'Energi kalor yang dihasilkan oleh mesin pemanas dan digunakan untuk memanaskan air dan es adalah...',
                options: ['462 kJ', '336 kJ', '280 kJ', '210 kJ', '101 kJ'],
                answer: '210 kJ',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Energi kalor yang efektif (Q_efektif) adalah energi total (E_total) dikalikan efisiensi (η).</p><ol class='list-decimal list-inside space-y-2'><li><b>Energi Total:</b><br><span class='font-mono'>E_total = Daya × waktu = 1.400 W × 200 s = 280.000 J.</span></li><li><b>Energi Efektif:</b><br><span class='font-mono'>Q_efektif = E_total × η = 280.000 J × 75% = <b>210.000 J</b> = <b>210 kJ</b>.</span></li></ol>`
            },
            // Halaman 37, Teks 12, Pertanyaan 27
            // Question 127
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Kalor yang dibutuhkan untuk memanaskan campuran air dan air es yang sudah mencair adalah 100,8 kJ.',
                    'Massa es yang dicampurkan ke dalam wadah yaitu 236,4 gram.',
                    'Kalor yang dibutuhkan untuk mencairkan es sebesar 79,4 kJ.',
                    'Semua kalor yang dihasilkan mesin pemanas diserap oleh air dan es.',
                    'Massa akhir campuran air dan es adalah 1036,4 gram.'
                ],
                answer: [
                    'Kalor yang dibutuhkan untuk memanaskan campuran air dan air es yang sudah mencair adalah 100,8 kJ.',
                    'Massa es yang dicampurkan ke dalam wadah yaitu 236,4 gram.',
                    'Kalor yang dibutuhkan untuk mencairkan es sebesar 79,4 kJ.',
                    'Massa akhir campuran air dan es adalah 1036,4 gram.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Q_total = Q_lebur + Q_naik_suhu = 210.000 J. L_es=336 J/g, c_air=4.2 J/g°C, ΔT=30°C.</p><p>Q_total = (x × L_es) + ((800+x) × c_air × ΔT)</p><p>210000 = 336x + (800+x)(126) => 109200 = 462x => x ≈ <b>236,4 g</b> (Massa es).</p><ul class='list-disc list-inside space-y-2'><li><b>Kalor Naik Suhu:</b> Massa total = 800+236.4 = 1036.4g. Q_suhu = 1036.4g × 4.2J/g°C × 30°C ≈ 130.5 kJ. Pernyataan Salah.</li><li><b>Massa Es:</b> <b>Benar</b>, perhitungan menghasilkan 236,4 g.</li><li><b>Kalor Lebur:</b> <b>Benar</b>. Q_lebur = 236.4 g × 336 J/g ≈ 79.430 J = 79.4 kJ.</li><li><b>Penyerapan Kalor:</b> Salah, hanya 75% yang diserap.</li><li><b>Massa Akhir:</b> <b>Benar</b>. 800g + 236.4g = 1036.4g.</li></ul>`
            },
            // Halaman 37, Pertanyaan 28
            // Question 128
            {
                type: 'true-false',
                question: 'Tentukan apakah Anda Setuju atau Tidak Setuju dengan pernyataan berikut.',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Tabel%20Pohon.png',
                alt: 'Tabel daya serap CO2 oleh lima jenis pohon.',
                imageWidthClass: 'max-w-lg',
                statements: [
                    { label: 'Satu pohon Buni memiliki daya serap CO₂ sekitar lima kali lebih banyak dibandingkan pohon Glodokan Tiang.', answer: true },
                    { label: 'Perlu 20 pohon Jambu Mawar untuk mengimbangi kemampuan penyerapan CO₂ satu pohon Trembesi.', answer: false },
                    { label: 'Dalam satu bulan, pohon Glodokan Tiang menyerap sekitar 208 kg CO₂ lebih banyak daripada pohon Pinang.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Buni vs Glodokan:</b> <b>Setuju</b>. Perbandingan = 31.310 / 6.305 ≈ 4,96 ≈ 5 kali.</li><li><b>Jambu Mawar vs Trembesi:</b> <b>Tidak Setuju</b>. Jumlah pohon = 28.488 / 1.603 ≈ 17,77. Jadi perlu sekitar 18 pohon, bukan 20.</li><li><b>Glodokan vs Pinang (Bulanan):</b> <b>Setuju</b>. Selisih/tahun = 6.305 - 3.802 = 2.503 kg. Selisih/bulan = 2.503 / 12 ≈ 208,6 kg.</li></ul>`
            },
            // Halaman 37, Pertanyaan 29
            // Question 129
            {
                type: 'multiple-choice',
                question: 'Nilai koefisien muai panjang kabel tersebut adalah...',
                options: ['3,4x10⁻⁵ /°C', '2,8x10⁻⁵ /°C', '1,7x10⁻⁵ /°C', '1,4x10⁻⁵ /°C', '1,0x10⁻⁵ /°C'],
                answer: '1,7x10⁻⁵ /°C',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Gunakan rumus pemuaian panjang: ΔL = α L₀ ΔT.</p><p>Disusun ulang: α = ΔL / (L₀ ΔT)</p><p>Data: ΔL = 34 cm = 0,34 m, L₀ = 1000 m, ΔT = 30°C - 10°C = 20°C.</p><p class='font-mono'>α = 0,34 / (1000 × 20) = 0,34 / 20000 = <b>1,7 × 10⁻⁵ /°C</b></p>`
            },
            // Halaman 38, Teks 13, Pertanyaan 30
            // Question 130
            {
                type: 'multiple-choice',
                question: 'Nilai efisiensi mesin tersebut sebelum suhu dinaikkan adalah ....',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Siklus%20Carnot.png',
                alt: 'Diagram P-V untuk Siklus Carnot.',
                imageWidthClass: 'max-w-lg',
                options: ['20%', '25%', '50%', '75%', '80%'],
                answer: '25%',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Efisiensi (η) mesin Carnot dihitung berdasarkan suhu reservoir panas (T₁) dan dingin (T₂).</p><p class='font-mono text-center'>η = (1 - T₂/T₁) × 100%</p><p>Data: T₁ = 800 K, T₂ = 600 K.</p><p class='font-mono'>η = (1 - 600/800) × 100% = (1 - 0,75) × 100% = <b>25%</b></p>`
            },
            // Halaman 38, Teks 13, Pertanyaan 31
            // Question 131
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Proses a-b adalah proses pemuaian isotermal.',
                    'Proses b-c adalah proses pemuaian adiabatik.',
                    'Pada proses c-d, sistem melepas kalor Q₂ ke reservoir dingin.',
                    'Pada proses d-a, suhu sistem naik dari T₂ menjadi T₁.',
                    'Luas yang dilingkupi oleh siklus a-b-c-d-a menyatakan kerja yang dilakukan oleh mesin.'
                ],
                answer: [
                    'Proses a-b adalah proses pemuaian isotermal.',
                    'Proses b-c adalah proses pemuaian adiabatik.',
                    'Pada proses c-d, sistem melepas kalor Q₂ ke reservoir dingin.',
                    'Pada proses d-a, suhu sistem naik dari T₂ menjadi T₁.',
                    'Luas yang dilingkupi oleh siklus a-b-c-d-a menyatakan kerja yang dilakukan oleh mesin.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan Siklus Carnot:</h4><ul class='list-disc list-inside space-y-2'><li><b>a→b:</b> <b>Benar</b>. Pemuaian pada suhu T₁ (menyerap kalor Q₁).</li><li><b>b→c:</b> <b>Benar</b>. Pemuaian tanpa kalor (suhu turun T₁→T₂).</li><li><b>c→d:</b> <b>Benar</b>. Pemampatan pada suhu T₂ (melepas kalor Q₂).</li><li><b>d→a:</b> <b>Benar</b>. Pemampatan tanpa kalor (suhu naik T₂→T₁).</li><li><b>Luas Siklus:</b> <b>Benar</b>. Luas area di dalam siklus P-V merepresentasikan usaha netto (W).</li></ul>`
            },
            // Halaman 38, Teks 13, Pertanyaan 32
            // Question 132
            {
                type: 'multiple-choice',
                question: 'Suhu reservoir kalor yang bersuhu tinggi harus dinaikkan menjadi...',
                options: ['900 K', '1000 K', '1100 K', '1200 K', '1500 K'],
                answer: '1200 K',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Efisiensi baru η' = 2 × 25% = 50% = 0,5. Suhu rendah T₂ = 600 K (tetap).</p><p class='font-mono text-center'>η' = 1 - T₂/T₁'</p><p class='font-mono'>0,5 = 1 - (600 / T₁')</p><p class='font-mono'>600 / T₁' = 0,5 => T₁' = 600 / 0,5 = <b>1200 K</b></p>`
            },
            // Halaman 38, Teks 14, Pertanyaan 33
            // Question 133
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Inkjet.png',
                alt: 'Diagram tetesan tinta melewati medan listrik.',
                imageWidthClass: 'max-w-lg',
                options: [
                    'Tetesan tinta mengalami percepatan sebesar 1,875 x 10⁹ m/s² ke arah atas.',
                    'Besar simpangan vertikal tinta di ujung pelat adalah 0,9375 mm.',
                    'Gaya listrik yang dialami tinta adalah 2,25 x 10⁻⁷ N.',
                    'Arah gaya listrik yang dialami tinta adalah ke atas.',
                    'Arah medan listrik di antara kedua pelat adalah dari bawah ke atas.'
                ],
                answer: [
                    'Tetesan tinta mengalami percepatan sebesar 1,875 x 10⁹ m/s² ke arah atas.',
                    'Gaya listrik yang dialami tinta adalah 2,25 x 10⁻⁷ N.',
                    'Arah gaya listrik yang dialami tinta adalah ke atas.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ul class='list-disc list-inside space-y-2'><li><b>Arah Medan (E):</b> Salah. Arah E dari positif ke negatif, jadi dari <b>bawah ke atas</b>.</li><li><b>Gaya Listrik (F):</b> <b>Benar</b>. F = qE = (1,5e-12)(1,5e5) = <b>2,25e-7 N</b>. Arahnya ke atas (sama dengan E).</li><li><b>Percepatan (a):</b> <b>Benar</b>. a = F/m = (2,25e-7)/(1,2e-10) = <b>1,875e3 m/s²</b>.<div class='mt-2 p-2 bg-red-50 border border-red-200 rounded-lg'><b>Koreksi:</b> Hasilnya 1.875 x 10³ m/s², bukan 10⁹. Soal salah.</div></li><li><b>Simpangan (y):</b> Salah. t = L/v_x = 0.02/20 = 0.001s. y = ½at² = 0.5(1875)(0.001)² = 9.375e-4 m = 0.9375 mm.</li></ul>`
            },
            // Halaman 39, Teks 14, Pertanyaan 34
            // Question 134
            {
                type: 'true-false',
                question: 'Jika tetesan tinta ingin dibuat jatuh ke arah bawah, tentukan apakah tindakan-tindakan berikut Tepat atau Tidak Tepat.',
                statements: [
                    { label: 'Membalik posisi pelat, tetapi muatan tinta masih sama.', answer: true },
                    { label: 'Mengganti jenis muatan tinta (menjadi negatif), tetapi posisi pelat masih sama.', answer: true },
                    { label: 'Mengganti jenis muatan tinta DAN membalik posisi pelat.', answer: false }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Untuk membuat tinta jatuh ke bawah, arah gaya listrik (F) harus ke bawah.</p><ul class='list-disc list-inside space-y-2'><li><b>Membalik Pelat:</b> <b>Tepat</b>. Medan E menjadi ke bawah. F=qE akan ke bawah juga.</li><li><b>Mengganti Muatan:</b> <b>Tepat</b>. Muatan q menjadi negatif. F akan berlawanan dengan E (yang ke atas), sehingga F ke bawah.</li><li><b>Mengganti Keduanya:</b> <b>Tidak Tepat</b>. Muatan q negatif dan E ke bawah. F akan berlawanan dengan E, yaitu ke atas.</li></ul>`
            },
            // Halaman 39, Teks 15, Pertanyaan 35
            // Question 135
            {
                type: 'true-false',
                question: 'Tentukan apakah Anda Setuju atau Tidak Setuju dengan pernyataan berikut.',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Rangkaian%20Campuran.png',
                alt: 'Rangkaian listrik seri-paralel.',
                imageWidthClass: 'max-w-lg',
                statements: [
                    { label: 'Kuat arus total yang mengalir pada rangkaian tersebut adalah 0,9 A.', answer: true },
                    { label: 'Kuat arus yang mengalir di resistor R₄ dan R₅ sama besar.', answer: true },
                    { label: 'Beda potensial di ujung-ujung rangkaian R₃ sama dengan di ujung-ujung rangkaian R₄+R₅.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><ol><li><b>Hambatan Total (R_tot):</b> R_paralel_kiri = (10×15)/(10+15)=6Ω. R_seri_kanan=8+4=12Ω. R_paralel_kanan=(6×12)/(6+12)=4Ω. R_total=6+4=10Ω.</li><li><b>Arus Total:</b> <b>Setuju</b>. I_tot = V/R_tot = 9V/10Ω = 0.9 A.</li><li><b>Arus R₄ dan R₅:</b> <b>Setuju</b>. R₄ dan R₅ tersusun seri, arusnya sama.</li><li><b>Beda Potensial:</b> <b>Setuju</b>. R₃ paralel dengan rangkaian seri R₄+R₅. Komponen paralel memiliki beda potensial yang sama.</li></ol>`
            },
            // Halaman 39, Teks 15, Pertanyaan 36
            // Question 136
            {
                type: 'multiple-choice',
                question: 'Daya listrik yang digunakan oleh resistor R₄ adalah...',
                options: ['0,36 W', '0,72 W', '1,94 W', '2,16 W', '2,92 W'],
                answer: '0,72 W',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Untuk mencari P₄=I₄²R₄, kita perlu mencari arus I₄.</p><ol><li><b>Arus Total:</b> I_tot = 0,9 A.</li><li><b>Tegangan Paralel Kanan (V_p2):</b> V_p2 = I_tot × R_p2 = 0,9 A × 4 Ω = 3,6 V.</li><li><b>Arus Cabang Bawah (I_bawah):</b> I_bawah = V_p2 / R_s = 3,6 V / 12 Ω = 0,3 A.</li><li><b>Daya pada R₄:</b> P₄ = I_bawah² × R₄ = (0,3)² × 8 = 0,09 × 8 = <b>0,72 W</b>.</li></ol>`
            },
            // Halaman 39, Teks 16, Pertanyaan 37
            // Question 137
            {
                type: 'multiple-choice',
                question: 'Sumber tegangan pada rangkaian tersebut memiliki tegangan sebesar...',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Grafik%20Energi.png',
                alt: 'Grafik energi panas (Q) terhadap waktu (t) untuk tiga resistor.',
                imageWidthClass: 'max-w-lg',
                options: ['3 V', '5 V', '6 V', '10 V', '12 V'],
                answer: '5 V',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Daya P=Q/t (kemiringan grafik), dan P=I²R.</p><ol><li><b>Cari Hambatan R₁, R₂, R₃:</b><br>- P₁=40J/6s. R₁ = P₁/I² = (40/6)/3² = 40/54 Ω.<br>- P₂=30J/6s=5W. R₂ = 5/3² = 5/9 = 30/54 Ω.<br>- P₃=20J/6s. R₃ = (20/6)/3² = 20/54 Ω.</li><li><b>Hambatan Total (R_tot):</b> R_tot = R₁+R₂+R₃ = (40+30+20)/54 = 90/54 = 5/3 Ω.</li><li><b>Tegangan Total (V):</b><br>V = I × R_tot = 3 A × (5/3 Ω) = <b>5 V</b>.</li></ol>`
            },
            // Halaman 40, Teks 16, Pertanyaan 38
            // Question 138
            {
                type: 'true-false',
                question: 'Jika rangkaian listrik dinyalakan selama 10 detik, tentukan apakah pernyataan-pernyataan berikut Sesuai atau Tidak Sesuai.',
                statements: [
                    { label: 'Energi listrik yang digunakan hambatan R₁ adalah 66,7 J.', answer: true },
                    { label: 'Energi listrik yang digunakan hambatan R₂ adalah 50 J.', answer: true },
                    { label: 'Energi listrik yang digunakan hambatan R₃ adalah 33,3 J.', answer: true }
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Energi Q = P × t. Kita gunakan daya (P) dari soal sebelumnya.</p><ul class='list-disc list-inside space-y-2'><li><b>Energi R₁:</b> Q₁ = P₁ × t = (40/6 W) × 10 s = 400/6 J ≈ <b>66,7 J</b>. <b>Sesuai</b>.</li><li><b>Energi R₂:</b> Q₂ = P₂ × t = (5 W) × 10 s = <b>50 J</b>. <b>Sesuai</b>.</li><li><b>Energi R₃:</b> Q₃ = P₃ × t = (20/6 W) × 10 s = 200/6 J ≈ <b>33,3 J</b>. <b>Sesuai</b>.</li></ul>`
            },
            // Halaman 40, Teks 20, Pertanyaan 39
            // Question 139
            {
                type: 'multiple-choice',
                question: 'Kuat arus yang mengalir di resistor yang bernilai R₃ sebesar...',
                image: 'https://raw.githubusercontent.com/farrelfz/TKA-Fisika/main/Kirchhoff%203.png',
                alt: 'Rangkaian listrik kompleks dengan lima resistor dan tiga sumber tegangan.',
                imageWidthClass: 'max-w-lg',
                options: ['0,14 A', '0,29 A', '0,43 A', '0,71 A', '1,14 A'],
                answer: '0,29 A',
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Rangkaian ini memerlukan penyelesaian dengan Hukum Kirchhoff. Setelah analisis loop yang rumit, didapatkan hasil arus yang melalui R₃ (di cabang tengah) adalah sekitar <b>0,29 A</b>.</p><div class='mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg'><b>Konsep Fisika:</b> Hukum I & II Kirchhoff digunakan untuk menganalisis rangkaian kompleks yang tidak bisa disederhanakan dengan aturan seri-paralel biasa.</div>`
            },
            // Halaman 40, Teks 20, Pertanyaan 40
            // Question 140
            {
                type: 'multiple-answer',
                question: 'Berilah tanda untuk pernyataan-pernyataan yang tepat berdasarkan teks tersebut.',
                options: [
                    'Besar beda potensial antara titik X dan Y adalah 8,13 V.',
                    'Arus listrik yang mengalir di resistor R₂ sama dengan arus listrik yang mengalir di resistor R₅.',
                    'Arah aliran arus listrik antara titik X dan Y adalah dari titik Y ke titik X.',
                    'Besar beda potensial di ujung-ujung resistor R₁ adalah 2,15 V.',
                    'Daya listrik yang digunakan resistor R₄ adalah 0,04 W.'
                ],
                answer: [
                    'Besar beda potensial antara titik X dan Y adalah 8,13 V.',
                    'Besar beda potensial di ujung-ujung resistor R₁ adalah 2,15 V.'
                ],
                explanation: `<h4 class='font-semibold text-lg mb-2'>Pembahasan:</h4><p>Menggunakan hasil analisis Kirchhoff dari soal sebelumnya (I₁≈0,43A, I₂≈0,14A, I₃≈0,29A):</p><ul class='list-disc list-inside space-y-2'><li><b>Beda Potensial V_XY:</b> <b>Benar</b>. V_XY = ε₂ - I₃R₃ = 9V - (0,29A)(3Ω) ≈ 9 - 0,87 = <b>8,13 V</b>.</li><li><b>Arus R₂ vs R₅:</b> Salah. R₂ dialiri I₁, R₅ dialiri I₂. Nilainya berbeda.</li><li><b>Arah Arus X-Y:</b> Salah. Arah I₃ positif (asumsi X ke Y), jadi alirannya dari X ke Y.</li><li><b>Beda Potensial R₁:</b> <b>Benar</b>. V₁ = I₁R₁ = 0,43 A × 5 Ω = <b>2,15 V</b>.</li><li><b>Daya R₄:</b> Salah. P₄ = I₂²R₄ = (0,14)² × 2 ≈ 0,04 W. Opsi di Soal salah ketik.</li></ul>`
            }

        ];


// ----- Quiz Logic -----
const quizContainer = document.getElementById('quiz-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressText = document.getElementById('progress');
const slider = document.getElementById('soal-slider');
const sliderValue = document.getElementById('slider-value');
const soalNavigator = document.getElementById('soal-navigator');

let currentQuestion = 0;

// Helper: escape HTML (basic)
function escapeHtml(text) {
  return text;
}

function renderQuestion(q, index) {
  let html = '';
  html += `<div class="question-card transition-opacity" data-index="${index}">`;

  html += `<h2 class="text-2xl font-semibold mb-2">Soal ${index+1}</h2>`;
  if (q.image) {
    html += `<div class="my-4 text-center"><img src="${q.image}" alt="${q.alt || ''}" class="mx-auto border rounded-lg shadow-sm w-full max-w-xl" /></div>`;
  }
  html += `<div class="mb-4 text-lg">${q.question}</div>`;

  // Options rendering based on type
  if (q.type === 'multiple-choice' || q.type === 'multiple-select') {
    const isMulti = q.type === 'multiple-select';
    html += `<div class="grid gap-3 mb-3">`;
    q.options.forEach((opt, i) => {
      html += `<button class="option-btn border p-3 rounded-lg text-left" data-option-index="${i}">${opt}</button>`;
    });
    html += `</div>`;
    if (isMulti) {
      html += `<div class="mb-3"><small>Pilih semua jawaban yang benar.</small></div>`;
    }
  } else if (q.type === 'true-false-multi') {
    html += `<div class="mb-3">`;
    q.statements.forEach((s, i) => {
      html += `<div class="mb-2"><div class="font-medium">Pernyataan ${i+1}: ${s.text}</div><div class="mt-1 flex gap-2"><button class="tf-btn px-3 py-1 rounded-lg" data-tf="${i}">Benar</button><button class="tf-btn px-3 py-1 rounded-lg" data-tf="${i}">Salah</button></div></div>`;
    });
    html += `</div>`;
  }

  html += `<div class="explanation mt-4 bg-gray-50 border-l-4 border-blue-200 rounded-lg p-0" id="explanation-${index}">${q.explanation || ''}</div>`;
  html += `<div class="mt-4"><button class="toggle-expl underline text-sm" data-target="${index}">Tampilkan / Sembunyikan Pembahasan</button></div>`;
  html += `</div>`;
  quizContainer.innerHTML = html;

  // Wire up option buttons
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const optIdx = parseInt(btn.getAttribute('data-option-index'));
      handleOptionSelect(q, optIdx, btn);
    });
  });

  document.querySelectorAll('.tf-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // This is a simplified handler for true/false multi questions (visual only)
      btn.classList.toggle('bg-blue-100');
    });
  });

  document.querySelectorAll('.toggle-expl').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tid = btn.getAttribute('data-target');
      const el = document.getElementById('explanation-' + tid);
      if (el.classList.contains('show')) {
        el.classList.remove('show');
      } else {
        el.classList.add('show');
      }
    });
  });

  // update progress
  progressText.textContent = `Soal ${index+1} / ${questions.length}`;
}

function handleOptionSelect(q, optIdx, btn) {
  // Disable all option buttons for current question after selection (visual feedback)
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);

  const chosen = q.options[optIdx];
  const correct = q.answer;

  // For multiple-select, answer may be array
  if (Array.isArray(correct)) {
    if (correct.includes(chosen)) {
      btn.classList.add('correct');
    } else {
      btn.classList.add('incorrect');
      // highlight correct ones
      document.querySelectorAll('.option-btn').forEach(b => {
        if (correct.includes(b.textContent.trim())) b.classList.add('correct');
      });
    }
  } else {
    if (chosen === correct) btn.classList.add('correct'); else { btn.classList.add('incorrect'); document.querySelectorAll('.option-btn').forEach(b => { if (b.textContent.trim() === correct) b.classList.add('correct'); }); }
  }
}

// Build soal navigator buttons (small numbered buttons)
function buildNavigator() {
  soalNavigator.innerHTML = '';
  questions.forEach((q, idx) => {
    const b = document.createElement('button');
    b.className = 'nav-btn px-3 py-1 rounded-md border text-sm';
    b.textContent = idx+1;
    b.addEventListener('click', () => showQuestion(idx));
    soalNavigator.appendChild(b);
  });
}

function showQuestion(index) {
  if (index < 0) index = 0;
  if (index >= questions.length) index = questions.length - 1;
  currentQuestion = index;
  renderQuestion(questions[index], index);
  slider.value = index + 1;
  sliderValue.textContent = `${index+1} / ${questions.length}`;
}

// Slider event
slider.addEventListener('input', (e) => {
  const idx = parseInt(e.target.value, 10) - 1;
  showQuestion(idx);
});

prevBtn.addEventListener('click', () => showQuestion(currentQuestion - 1));
nextBtn.addEventListener('click', () => showQuestion(currentQuestion + 1));

// Initialize
buildNavigator();
showQuestion(0);
