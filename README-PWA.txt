ORBIT PERSONAL v2.3.0 — PAKET PWA

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
3. Di repo GitHub orbit-personal, unggah/ganti index.html, manifest.webmanifest, dan sw.js di root. Unggah folder icons hanya jika diminta atau jika ikon yang ada belum sama; jangan hapus file ikon yang dipakai manifest.
4. Commit perubahan, lalu tunggu GitHub Pages selesai menerbitkan pembaruan.
5. Buka situs GitHub Pages dan lakukan hard refresh (Ctrl+Shift+R). Jika PWA masih menampilkan versi lama, tutup jendela aplikasi dan buka ulang setelah beberapa saat agar service worker baru aktif.
6. Periksa data tugas/catatan/proyek masih ada. Jangan gunakan Reset data dan jangan impor cadangan kecuali memang diperlukan.

PENTING
- Pembaruan ini mempertahankan localStorage key `orbitdesk.workspace.v1` dan format backup/import JSON.
- Data localStorage tersimpan di browser/profil perangkat yang sama; jangan hapus data situs/browser saat memperbarui.
- Sebaiknya lakukan ekspor JSON sebelum setiap pembaruan besar.
