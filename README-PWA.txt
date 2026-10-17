ORBIT PERSONAL v2.2.1 — PAKET PWA

ISI PAKET
- index.html: aplikasi Orbit Personal
- manifest.webmanifest: metadata pemasangan aplikasi
- sw.js: service worker untuk cache offline dan pembaruan
- icons/icon-192.png dan icons/icon-512.png: ikon aplikasi

PENTING: ZIP INI TIDAK BISA DIPASANG LANGSUNG DARI FILE LOKAL
Untuk pemasangan PWA di Chromebook, seluruh isi folder perlu di-host melalui HTTPS. File HTML tunggal tetap bisa dibuka langsung, tetapi tombol instalasi dan service worker memerlukan HTTPS (kecuali localhost untuk pengembangan).

CARA MEMASANG DI CHROMEBOOK
1. Ekstrak ZIP dan unggah isi folder (pastikan index.html, manifest.webmanifest, sw.js, dan folder icons berada pada direktori yang sama) ke hosting statis dengan HTTPS, misalnya Cloudflare Pages atau GitHub Pages.
2. Buka URL HTTPS yang mengarah ke index.html melalui Google Chrome.
3. Tunggu halaman selesai dimuat. Service worker akan mendaftarkan cache inti secara otomatis.
4. Buka Pengaturan > Umum > Instal Orbit, atau gunakan menu Chrome (⋮) > Instal aplikasi jika tersedia.
5. Setelah terpasang, Orbit dapat dibuka dari launcher dalam jendela aplikasi.

OFFLINE DAN DATA
- Buka aplikasi sekali saat online sebelum mencoba penggunaan offline.
- Aplikasi menyimpan data pada localStorage di profil browser/perangkat tersebut; tidak ada akun atau sinkronisasi cloud.
- Ekspor cadangan JSON dari Pengaturan > Data & privasi secara rutin. Impor akan menggantikan data saat ini; ekspor cadangan terlebih dahulu.
- Setelah pembaruan aplikasi, buka kembali saat online sekali agar service worker mengambil versi baru.

KEAMANAN DATA
Paket ini tidak mengirim tugas, catatan, proyek, atau kebiasaan ke server. Hosting hanya mengirimkan berkas aplikasi statis. Perubahan data terjadi di browser masing-masing pengguna.
