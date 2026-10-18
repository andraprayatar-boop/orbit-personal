ORBIT PERSONAL v2.10.2 — PAKET PWA

Isi paket:
- index.html: aplikasi Orbit Personal yang sudah diperbarui
- manifest.webmanifest: metadata instalasi PWA
- sw.js: service worker untuk cache/offline (cache versi diperbarui)
- icons/: ikon aplikasi

PEMBARUAN v2.3.0
- Menu klik kanan kontekstual untuk tugas, subtugas checklist, proyek, catatan, Inbox, habit, dan goals. Kolom teks tetap memakai menu klik kanan browser.
- Penghapusan proyek ditambahkan. Tugas dalam proyek yang dihapus dipertahankan sebagai tugas tanpa proyek.
- Kartu Inbox ditambahkan di bawah Fokus Hari Ini pada dashboard tanpa merombak susunan dashboard yang lain.
- Palet mode terang dibuat lebih hangat dan konsisten dengan aksen ungu Orbit.
- Nama tampilan dan foto profil dapat diubah melalui Pengaturan > Umum; foto diperkecil saat disimpan agar tetap ringan.
- Identitas profil termasuk dalam penyimpanan lokal dan backup JSON.

CARA MEMPERBARUI GITHUB PAGES
1. Sebelum mengganti file, buka Orbit yang sekarang dan pilih Pengaturan > Data & privasi > Ekspor cadangan. Simpan file JSON di tempat aman.
2. Ekstrak ZIP ini. Pastikan index.html berada langsung di root repo, bukan di dalam folder Orbit-Personal-PWA-Final.
3. Di repo GitHub orbit-personal, unggah/ganti seluruh isi paket: index.html, manifest.webmanifest, sw.js, dan folder icons beserta kedua PNG di dalamnya. Semua file harus berada di lokasi relatif yang sama di root repo; jangan mengunggah ZIP sebagai satu file.
4. Commit perubahan, lalu tunggu GitHub Pages selesai menerbitkan pembaruan.
5. Buka situs GitHub Pages dan lakukan hard refresh (Ctrl+Shift+R). Jika PWA masih menampilkan versi lama, tutup jendela aplikasi dan buka ulang setelah beberapa saat agar service worker baru aktif.
6. Periksa data tugas/catatan/proyek masih ada. Jangan gunakan Reset data dan jangan impor cadangan kecuali memang diperlukan.

PENTING
- Pembaruan ini mempertahankan localStorage key `orbitdesk.workspace.v1` dan format backup/import JSON.
- Data localStorage tersimpan di browser/profil perangkat yang sama; jangan hapus data situs/browser saat memperbarui.
- Sebaiknya lakukan ekspor JSON sebelum setiap pembaruan besar.


Update v2.4.0: gunakan seluruh isi paket ini di root repository, termasuk folder icons. Cache service worker telah dinaikkan agar aset baru diambil. Sebelum mengganti file, ekspor cadangan JSON dari aplikasi lama.


PEMBARUAN v2.5.0 (FINISHING)
- Label hari pada grafik produktivitas diperjelas. Arahkan kursor ke batang grafik untuk melihat tanggal, jumlah, dan daftar tugas yang tercatat selesai; tooltip juga tersedia saat fokus keyboard.
- Ikon aplikasi PWA diganti ke ikon Orbit minimal violet yang disepakati (tanpa latar putih), ukuran 192 dan 512 piksel.
- Checklist subtugas dibuat tanpa blok tebal, teks lebih besar dan kontras, serta tetap bisa dicentang.
- Cache service worker dinaikkan ke v2.5.0 agar aset ikon dan aplikasi baru diperbarui.


PEMBARUAN v2.9.0 — GRAFIK PRODUKTIVITAS
- Diagram selalu menampilkan tujuh hari secara kronologis, dengan tinggi batang sesuai jumlah tugas yang selesai pada tiap tanggal.
- Garis tren dan titik tetap dipertahankan; hanya elemen dekoratif yang dibuat tidak menghalangi interaksi hover.
- Hover/fokus keyboard menampilkan tanggal, jumlah, dan daftar tugas selesai; hari tanpa penyelesaian tetap dapat diarahkan kursor.
- Panel Produktivitas, latar kartu, dan outline kartu tetap dipertahankan.
- Cache service worker dinaikkan ke v2.9.0. localStorage dan format backup JSON tidak diubah.


PEMBARUAN v2.10.2
- Grafik produktivitas: outline kotak yang tidak sengaja muncul pada area hover dihilangkan. Tinggi batang mengikuti jumlah tugas selesai secara proporsional; garis tren, titik, label hari, tooltip, latar panel, dan garis tepi panel tetap dipertahankan. Area sorot mouse/keyboard tidak lagi membentuk kotak transparan besar.
- Ikon shortcut dipulihkan ke aset Orbit ungu-violet dari desain terdahulu, tanpa kotak putih di belakang ikon; ikon merek di dalam aplikasi memakai latar ungu-violet pekat.
- Panel Produktivitas, warna latar, dan garis tepi panel dipertahankan.
- Cache service worker dinaikkan ke v2.10.2 agar pembaruan diterapkan.
- Penyimpanan lokal tetap memakai orbitdesk.workspace.v1.
