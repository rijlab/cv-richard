/*
  ============================================================
  SEMUA ISI WEBSITE ADA DI FILE INI
  ============================================================
  - Ganti teks contoh dengan data Anda.
  - Foto: taruh file di folder  public/images/  lalu isi path-nya
    TANPA garis miring di depan, contoh:  "images/profil.jpg"
  - Kolom foto yang dibiarkan kosong ("") akan tampil sebagai
    kotak placeholder, jadi layout tetap rapi.
  - Link yang dibiarkan kosong ("") otomatis disembunyikan.
  - Bagian bertanda  // CONTOH  masih berisi data contoh, silakan ganti.
*/

export const profile = {
  name: 'Richard Jeremy',
  role: 'Business Analyst',
  location: 'Jakarta, Indonesia', // CONTOH
  available: true, // false = sembunyikan badge "Terbuka untuk proyek"
  intro:
    'Saya menjembatani kebutuhan bisnis dengan solusi teknologi: menggali kebutuhan stakeholder, memetakan proses, dan menerjemahkannya menjadi requirement yang jelas untuk tim.',
  photo: '', // contoh: 'images/profil.jpg'  (rasio 4:5 paling pas)
  cvFile: '', // contoh: 'files/cv.pdf'  (taruh file di public/files/)
  email: 'nama@email.com', // CONTOH
  phone: '', // contoh: '+62 812 0000 0000'
  socials: [
    // icon yang tersedia: linkedin, github, instagram, dribbble, behance, youtube, x, globe
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/richardjer' },
    { label: 'GitHub', icon: 'github', url: '' },
    { label: 'Instagram', icon: 'instagram', url: '' },
  ],
}

export const about = {
  // CONTOH
  paragraphs: [
    'Halo, saya Richard. Saya lulusan S1 Sistem Informasi dari Binus University dan bekerja sebagai Business Analyst.',
    'Saya senang mengurai masalah bisnis yang rumit menjadi langkah yang terukur: mulai dari wawancara stakeholder, analisis data, hingga menyusun dokumen kebutuhan dan memastikan solusi yang dibangun benar-benar menjawab masalahnya.',
  ],
  stats: [
    { value: '3.50', label: 'IPK S1 Sistem Informasi' },
    { value: '0+', label: 'Tahun pengalaman' }, // CONTOH
    { value: '0+', label: 'Proyek selesai' }, // CONTOH
  ],
}

// CONTOH — ganti dengan riwayat kerja Anda
export const experience = [
  {
    role: 'Business Analyst',
    company: 'Nama Perusahaan',
    period: '20XX — Sekarang',
    location: 'Jakarta',
    description:
      'Menggali kebutuhan bisnis dari stakeholder, menyusun BRD/FSD, dan menjadi penghubung antara tim bisnis dan tim pengembang.',
    highlights: ['Pencapaian utama Anda di sini', 'Pencapaian lain yang terukur'],
  },
]

export const education = [
  {
    degree: 'S1 Sistem Informasi',
    school: 'Binus University',
    period: '', // contoh: '2019 — 2023'
    description: 'IPK 3.50',
  },
]

// CONTOH
export const skills = [
  { group: 'Analisis Bisnis', items: ['Requirement Gathering', 'BRD & FSD', 'User Story', 'Business Process Modeling (BPMN)', 'Gap Analysis'] },
  { group: 'Data', items: ['SQL', 'Excel', 'Power BI', 'Tableau'] },
  { group: 'Tools', items: ['Jira', 'Confluence', 'Figma', 'Draw.io', 'Microsoft Visio'] },
  { group: 'Bahasa', items: ['Indonesia', 'Inggris'] },
]

// CONTOH
export const certifications = [
  { title: 'Nama Sertifikat', issuer: 'Penerbit', year: '20XX', url: '' },
]

/*
  PORTFOLIO
  - cover   : gambar utama di kartu (rasio 4:3 paling pas)
  - gallery : foto tambahan yang tampil saat kartu diklik
  - embed   : opsional, link YouTube / Vimeo / Figma / Google Drive preview
              (link YouTube biasa otomatis diubah jadi embed)
  - links   : tombol ke karya Anda (dashboard, dokumen, studi kasus, dll.)
  - category: dipakai untuk tombol filter
*/
// CONTOH — ganti dengan karya Anda
export const projects = [
  {
    title: 'Dashboard KPI Penjualan',
    category: 'Dashboard',
    year: '20XX',
    summary: 'Dashboard untuk memantau KPI penjualan per cabang.',
    description:
      'Ceritakan masalah bisnisnya, peran Anda, cara Anda menganalisis, dan hasil yang dicapai.',
    cover: '', // 'images/projects/dashboard-cover.jpg'
    gallery: [], // ['images/projects/dashboard-1.jpg']
    embed: '',
    tags: ['Power BI', 'SQL'],
    links: [{ label: 'Lihat Dashboard', url: '' }],
  },
  {
    title: 'Pemetaan Proses Bisnis',
    category: 'Process Analysis',
    year: '20XX',
    summary: 'Pemetaan proses as-is dan to-be untuk efisiensi operasional.',
    description: 'Jelaskan proses yang dianalisis, temuan utama, dan rekomendasi Anda.',
    cover: '',
    gallery: [],
    embed: '',
    tags: ['BPMN', 'Gap Analysis'],
    links: [{ label: 'Lihat Dokumen', url: '' }],
  },
  {
    title: 'Dokumen Kebutuhan Sistem',
    category: 'Requirement',
    year: '20XX',
    summary: 'BRD dan user story untuk pengembangan aplikasi internal.',
    description: 'Jelaskan konteks proyek, stakeholder yang terlibat, dan dampak dokumennya.',
    cover: '',
    gallery: [],
    embed: '',
    tags: ['BRD', 'User Story', 'Jira'],
    links: [],
  },
]
