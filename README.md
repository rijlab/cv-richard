# CV & Portfolio (React + Vite)

## Menjalankan

```bash
npm install      # sekali saja
npm run dev      # buka http://localhost:5173
npm run build    # hasil siap upload ada di folder dist/
```

Hasil build memakai path relatif, jadi bisa langsung dibuka lewat XAMPP di
`http://localhost/cv/dist/` atau di-upload ke hosting mana pun (Netlify, Vercel, GitHub Pages, cPanel).

## Mengisi konten

Semua teks, foto, dan link ada di **`src/data/profile.js`**. Anda tidak perlu menyentuh komponen.

| Yang ingin diubah | Kolom di `profile.js` |
|---|---|
| Nama, jabatan, intro, email, telepon | `profile` |
| Foto profil (rasio 4:5) | `profile.photo` |
| File CV untuk diunduh | `profile.cvFile` |
| Media sosial | `profile.socials` |
| Tentang & angka statistik | `about` |
| Riwayat kerja / pendidikan / sertifikat | `experience`, `education`, `certifications` |
| Keahlian | `skills` |
| Karya portfolio | `projects` |

### Foto

1. Taruh file di `public/images/` (foto karya di `public/images/projects/`).
2. Tulis path-nya **tanpa** garis miring di depan:

```js
photo: 'images/profil.jpg',
cover: 'images/projects/dashboard-cover.jpg',
gallery: ['images/projects/dashboard-1.jpg', 'images/projects/dashboard-2.jpg'],
```

Kolom foto yang kosong tampil sebagai kotak placeholder, jadi layout tetap rapi sebelum foto diisi.
Ukuran yang disarankan: profil 800×1000 px, cover karya 1200×900 px (JPG/WebP, di bawah 300 KB).

### Link & embed karya

```js
links: [
  { label: 'Lihat Live', url: 'https://contoh.com' },
  { label: 'Source Code', url: 'https://github.com/username/repo' },
],
embed: 'https://www.youtube.com/watch?v=xxxxxxxxxxx',
```

- Link dengan `url` kosong otomatis disembunyikan.
- `embed` menerima link YouTube, Vimeo, Figma, atau Google Drive (file harus dibagikan "Siapa saja yang memiliki link"). Link biasa otomatis diubah ke format embed dan tampil saat kartu karya diklik.
- Tombol filter dibuat otomatis dari kolom `category`.
