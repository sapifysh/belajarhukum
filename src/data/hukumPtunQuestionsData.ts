import { PracticeQuestion } from './practiceQuestionsData';

export const PTUN_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  // 1. Latar Belakang & Urgensi PTUN
  {
    id: 'ptun-amelia-01',
    topicId: 1,
    topicTitle: 'Topik 01: Latar Belakang dan Urgensi Peradilan Administrasi',
    type: 'conceptual',
    typeLabel: 'Konseptual Welfare State',
    question: 'Mengapa dalam konsepsi negara hukum materiil (welfare state) potensi benturan antara pemerintah dan warga negara semakin meningkat sehingga mendesak dibentuknya PTUN?',
    options: [
      'Karena pemerintah bertindak pasif sebagai negara penjaga malam semata',
      'Karena pemerintah diberikan kewenangan luas dan aktif menyelenggarakan kesejahteraan umum (bestuurszorg) yang berpotensi bersinggungan dengan hak-hak warga',
      'Karena pemerintah diwajibkan menyerahkan seluruh aset publik kepada badan usaha swasta',
      'Karena peradilan umum tidak lagi diakui keberadaannya dalam UUD 1945'
    ],
    correctIndex: 1,
    explanation: 'Dalam negara hukum kesejahteraan (welfare state), pemerintah mengemban tugas bestuurszorg (menyelenggarakan kesejahteraan umum) dengan wewenang luas. Luasnya campur tangan birokrasi berpotensi menimbulkan gesekan, maladministrasi, atau penyalahgunaan wewenang (abuse of power), sehingga mutlak dilembagakan kontrol yuridis (judicial control) melalui PTUN.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 01: Latar Belakang & Urgensi)'
  },
  {
    id: 'ptun-amelia-02',
    topicId: 1,
    topicTitle: 'Topik 01: Latar Belakang dan Urgensi Peradilan Administrasi',
    type: 'conceptual',
    typeLabel: 'Tujuan Dibentuknya PTUN',
    question: 'Apakah tujuan normatif dari dibentuknya Peradilan Tata Usaha Negara menurut bahan perkuliahan?',
    options: [
      'Untuk menggantikan fungsi badan legislatif dalam membentuk undang-undang',
      'Sebagai instrumen kontrol yuridis dalam menegakkan asas legalitas dan AUPB terhadap tindakan pemerintah',
      'Untuk menjatuhkan pidana penjara kepada pejabat administrasi negara yang melanggar kode etik',
      'Untuk mengalihkan kewenangan perdata pemerintah ke pengadilan agama'
    ],
    correctIndex: 1,
    explanation: 'Secara normatif, maksud dan tujuan dibentuknya PTUN adalah menegakkan asas legalitas dalam administrasi negara serta menjadi instrumen penguji keabsahan tindakan pemerintah berdasarkan peraturan perundang-undangan dan Asas-Asas Umum Pemerintahan yang Baik (AUPB).',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 01)'
  },

  // 2. Pengertian Hukum Acara PTUN
  {
    id: 'ptun-amelia-03',
    topicId: 2,
    topicTitle: 'Topik 02: Pengertian Hukum Acara PTUN',
    type: 'conceptual',
    typeLabel: 'Relasi HTUN, PTUN, KTUN',
    question: 'Bagaimanakah relasi fungsional antara Hukum Tata Usaha Negara (HTUN) materiil dengan Hukum Acara PTUN?',
    options: [
      'HTUN materiil mengatur sanksi pidana, sedangkan Hukum Acara PTUN mengatur pembuktian perdata',
      'HTUN materiil mengatur norma substansi kewenangan pemerintahan, sedangkan Hukum Acara PTUN mengatur hukum formil prosedural untuk menegakkan HTUN melalui pengujian KTUN di pengadilan',
      'Hukum Acara PTUN hanya berlaku apabila ada instruksi khusus dari Mahkamah Konstitusi',
      'Kedua hukum tersebut memiliki objek dan subjek yang berdiri sendiri tanpa keterkaitan'
    ],
    correctIndex: 1,
    explanation: 'HTUN materiil mengatur substansi wewenang, hak, dan kewajiban pejabat administrasi pemerintahan. Hukum Acara PTUN merupakan hukum formil yang mengatur tata cara penegakan norma materiil tersebut di hadapan pengadilan ketika terjadi sengketa atas penerbitan KTUN.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 02: Pengertian Hukum Acara PTUN)'
  },

  // 3. Kedudukan dan Struktur Peratun
  {
    id: 'ptun-amelia-04',
    topicId: 3,
    topicTitle: 'Topik 03: Kedudukan dan Struktur Peratun',
    type: 'conceptual',
    typeLabel: 'Hierarki Peratun',
    question: 'Bagaimanakah struktur hierarki lingkungan Peradilan Tata Usaha Negara di Indonesia dalam sistem satu atap kekuasaan kehakiman?',
    options: [
      'Pengadilan Negeri → Pengadilan Tinggi → Mahkamah Konstitusi',
      'PTUN (Tingkat Pertama) → PTTUN (Tingkat Banding) → Mahkamah Agung (Puncak Kasasi & PK)',
      'PTTUN (Tingkat Pertama) → PTUN (Tingkat Banding) → Kementerian Hukum dan HAM',
      'Badan Pertanahan Nasional → Pengadilan Pajak → Mahkamah Agung'
    ],
    correctIndex: 1,
    explanation: 'Struktur hierarki peradilan administrasi negara di Indonesia terdiri dari PTUN di tingkat pertama (kabupaten/kota), PTTUN di tingkat banding (provinsi), dan berpuncak pada Mahkamah Agung (MA) sebagai pengadilan kasasi dan peninjauan kembali dalam sistem peradilan satu atap.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 03: Kedudukan & Struktur)'
  },

  // 4. Subjek Sengketa TUN
  {
    id: 'ptun-amelia-05',
    topicId: 4,
    topicTitle: 'Topik 04: Subjek Sengketa TUN',
    type: 'conceptual',
    typeLabel: 'Prinsip Tergugat',
    question: 'Berdasarkan materi resmi, apakah prinsip fundamental dalam menentukan pihak Tergugat dalam sengketa tata usaha negara?',
    options: [
      'Yang digugat adalah pribadi orangnya beserta seluruh harta kekayaan keluarganya',
      'Yang digugat adalah jabatannya, bukan pribadi orangnya',
      'Tergugat harus selalu Presiden Republik Indonesia sebagai kepala pemerintahan tertinggi',
      'Tergugat tidak perlu disebutkan jabatannya, cukup nama instansi pusatnya saja'
    ],
    correctIndex: 1,
    explanation: 'PRINSIP UTAMA: "Yang digugat adalah jabatannya, bukan pribadi orangnya." Gugatan ditujukan kepada fungsi/institusi jabatan publik yang menerbitkan KTUN. Apabila terjadi mutasi atau pergantian pejabat, gugatan tetap berjalan sah mengikat pejabat baru pemegang jabatan tersebut.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 04: Subjek Sengketa TUN)'
  },
  {
    id: 'ptun-amelia-06',
    topicId: 4,
    topicTitle: 'Topik 04: Subjek Sengketa TUN',
    type: 'scenario',
    typeLabel: 'Intervensi Pihak Ketiga',
    question: 'Dalam sengketa pembatalan izin tambang antara warga desa melawan Bupati, PT Sejahtera (pemegang izin tambang) mengajukan permohonan masuk ke persidangan untuk mendukung posisi Bupati. Bentuk intervensi apakah yang dilakukan PT Sejahtera?',
    options: [
      'Tussenkomst (menengahi membela hak sendiri yang bertentangan dengan kedua pihak)',
      'Voeging (menggabungkan diri untuk menyertai dan mendukung salah satu pihak)',
      'Eksaminasi Publik (pengujian akademis berkas perkara)',
      'Rekonvensi (gugatan balik Tergugat kepada Penggugat)'
    ],
    correctIndex: 1,
    explanation: 'Voeging adalah bentuk intervensi pihak ketiga yang masuk ke persidangan untuk membela kepentingannya dengan cara bergabung dan mendukung salah satu pihak (dalam hal ini mendukung Tergugat agar izin tambang tidak dibatalkan).',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 04 & 29: Intervensi Pihak Ketiga)'
  },

  // 5. Wewenang Badan / Pejabat TUN
  {
    id: 'ptun-amelia-07',
    topicId: 5,
    topicTitle: 'Topik 05: Wewenang Badan / Pejabat TUN',
    type: 'conceptual',
    typeLabel: 'Sumber Wewenang Mandat',
    question: 'Bagaimanakah peralihan tanggung jawab dan tanggung gugat dalam pelaksanaan kewenangan melalui jalur MANDAT?',
    options: [
      'Tanggung jawab dan tanggung gugat beralih sepenuhnya secara permanen kepada penerima mandat',
      'Tanggung jawab dan tanggung gugat TIDAK BERALIH, melainkan tetap berada pada pemberi mandat (mandans)',
      'Tanggung jawab dihapuskan oleh undang-undang karena sifatnya sukarela',
      'Tanggung jawab beralih kepada ketua pengadilan setempat'
    ],
    correctIndex: 1,
    explanation: 'Pada MANDAT, yang terjadi hanyalah penugasan pelaksanaan tugas atas nama pemberi mandat, bukan pelimpahan wewenang. Akibatnya, tanggung jawab dan tanggung gugat yuridis tetap berada pada pihak pemberi mandat (mandans). Berbeda dengan DELEGASI di mana tanggung jawab beralih kepada penerima delegasi.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 05: Wewenang Badan/Pejabat TUN)'
  },
  {
    id: 'ptun-amelia-08',
    topicId: 5,
    topicTitle: 'Topik 05: Wewenang Badan / Pejabat TUN',
    type: 'conceptual',
    typeLabel: 'Atribusi Wewenang',
    question: 'Apakah yang dimaksud dengan perolehan wewenang secara ATRIBUSI menurut hukum administrasi?',
    options: [
      'Pelimpahan wewenang sementara dari atasan ke bawahan',
      'Pemberian wewenang baru secara langsung oleh peraturan perundang-undangan (UUD 1945 atau Undang-Undang)',
      'Pengambilalihan kewenangan secara paksa dalam keadaan perang',
      'Penugasan teknis operasional tanpa dasar hukum tertulis'
    ],
    correctIndex: 1,
    explanation: 'Atribusi adalah perolehan wewenang baru yang diberikan secara langsung oleh peraturan perundang-undangan (UUD 1945 atau undang-undang) kepada badan atau pejabat pemerintahan tertentu.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 05)'
  },

  // 6. Tindakan Hukum TUN
  {
    id: 'ptun-amelia-09',
    topicId: 6,
    topicTitle: 'Topik 06: Tindakan Hukum Tata Usaha Negara',
    type: 'conceptual',
    typeLabel: 'Sifat Tindakan Hukum',
    question: 'Mengapa tindakan hukum tata usaha negara dikualifikasikan sebagai perbuatan sepihak (eenzijdige rechtshandeling)?',
    options: [
      'Karena harus selalu ditandatangani oleh satu orang pejabat saja',
      'Karena lahir atas dasar kewenangan publik penguasa dan berlaku mengikat tanpa memerlukan persetujuan dari pihak yang dituju',
      'Karena tidak boleh ada saksi yang mengetahui terbitnya keputusan tersebut',
      'Karena hanya dapat menimbulkan kerugian bagi satu orang saja'
    ],
    correctIndex: 1,
    explanation: 'Tindakan hukum TUN bersifat sepihak (eenzijdige rechtshandeling) karena bersumber dari hukum publik di mana penguasa menetapkan status hukum atau kewajiban bagi warga negara berdasarkan wewenang undang-undang tanpa membutuhkan persetujuan pihak yang bersangkutan.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 06: Tindakan Hukum TUN)'
  },

  // 7. Objek Sengketa PTUN
  {
    id: 'ptun-amelia-10',
    topicId: 7,
    topicTitle: 'Topik 07: Objek Sengketa PTUN',
    type: 'conceptual',
    typeLabel: 'Unsur Konkret, Individual, Final',
    question: 'Apakah yang dimaksud dengan unsur "FINAL" dalam Pasal 1 angka 9 UU No. 51 Tahun 2009 tentang KTUN?',
    options: [
      'Keputusan tersebut tidak boleh digugat sama sekali oleh siapa pun',
      'Keputusan tersebut sudah definitif, tidak memerlukan persetujuan dari instansi atasan lagi, dan telah menimbulkan akibat hukum',
      'Keputusan tersebut merupakan putusan kasasi Mahkamah Agung',
      'Keputusan tersebut hanya berlaku selama satu tahun kalender'
    ],
    correctIndex: 1,
    explanation: 'Unsur "Final" bermakna bahwa keputusan tata usaha negara tersebut sudah definitif, telah matang (ripe for review), tidak lagi memerlukan persetujuan atau pengesahan lanjutan dari instansi atasan, dan sudah dapat menimbulkan akibat hukum seketika.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 07: Objek Sengketa PTUN)'
  },
  {
    id: 'ptun-amelia-11',
    topicId: 7,
    topicTitle: 'Topik 07: Objek Sengketa PTUN',
    type: 'scenario',
    typeLabel: 'Unsur Individual',
    question: 'Walikota menerbitkan Peraturan Walikota yang menetapkan tarif parkir baru untuk seluruh pengguna jalan di wilayah kota. Mengapa Peraturan Walikota tersebut BUKAN merupakan KTUN?',
    options: [
      'Karena walikota bukan merupakan pejabat tata usaha negara',
      'Karena peraturan tersebut bersifat umum abstrak (regeling) dan tidak bersifat individual bagi subjek tertentu',
      'Karena belum disahkan oleh gubernur',
      'Karena tarif parkir merupakan urusan hukum pidana'
    ],
    correctIndex: 1,
    explanation: 'Peraturan Walikota adalah regeling (pengaturan umum yang berlaku bagi siapa saja yang menggunakan jalan), bukan beschikking/KTUN yang bersifat individual (ditujukan kepada subjek hukum tertentu yang ditunjuk secara spesifik). Pengujiannya masuk ranah Hak Uji Materiil di MA.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 07)'
  },

  // 8. Memo / Nota Dinas
  {
    id: 'ptun-amelia-12',
    topicId: 8,
    topicTitle: 'Topik 08: Memo / Nota Dinas sebagai Objek Gugatan',
    type: 'conceptual',
    typeLabel: 'Parameter Memo Dinas',
    question: 'Apakah memo atau nota dinas dapat dijadikan objek sengketa di PTUN menurut bahan perkuliahan?',
    options: [
      'Sama sekali tidak bisa karena bukan berbentuk Surat Keputusan (SK) resmi',
      'Dapat digugat sepanjang memenuhi 5 parameter yuridis (jelas pejabat penerbit, isi, tujuan, konkret-individual-final, dan menimbulkan akibat hukum)',
      'Hanya bisa digugat apabila disetujui secara tertulis oleh Menteri Kehakiman',
      'Hanya bisa digugat di peradilan umum sebagai sengketa perdata'
    ],
    correctIndex: 1,
    explanation: 'Hakim PTUN berpegang pada prinsip substansi di atas formalitas naskah dinas. Suatu memo atau nota dinas dapat digugat sebagai KTUN jika memenuhi 5 parameter: jelas badan/pejabat yang mengeluarkan, jelas maksud dan isinya, jelas subjek yang dituju, bersifat individual-konkret-final, dan menimbulkan akibat hukum nyata bagi penggugat.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 08: Memo/Nota Dinas)'
  },

  // 9. Perluasan Pengertian KTUN
  {
    id: 'ptun-amelia-13',
    topicId: 9,
    topicTitle: 'Topik 09: Perluasan Pengertian KTUN',
    type: 'scenario',
    typeLabel: 'Fiktif Negatif Pasal 3',
    question: 'Seorang warga mengajukan permohonan sertifikat hak milik ke Kantor Pertanahan. Peraturan perundang-undangan dasar tidak menentukan jangka waktu pemutusan. Berapa lamakah warga harus menunggu sebelum sikap diam pejabat tersebut dianggap sebagai penolakan (Fiktif Negatif)?',
    options: [
      '14 hari kerja sejak permohonan diajukan',
      '4 (empat) bulan sejak permohonan diterima lengkap oleh kantor pertanahan',
      '1 tahun sejak diterimanya surat bukti tanda terima berkas',
      '30 hari kalender tanpa syarat'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan Pasal 3 ayat (3) UU Peratun, apabila peraturan dasarnya tidak menentukan jangka waktu, maka setelah lewat waktu 4 (empat) bulan sejak diterimanya permohonan tanpa adanya keputusan dari badan/pejabat TUN, hal itu dipersamakan dengan keputusan penolakan (Fiktif Negatif).',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 09: Perluasan KTUN)'
  },

  // 10. Keputusan yang Bukan Objek Sengketa
  {
    id: 'ptun-amelia-14',
    topicId: 10,
    topicTitle: 'Topik 10: Keputusan yang Bukan Objek Sengketa',
    type: 'conceptual',
    typeLabel: 'Pengecualian Pasal 2 & 49',
    question: 'Berdasarkan Pasal 2 dan Pasal 49 UU Peratun, manakah keputusan berikut yang TIDAK DAPAT digugat di PTUN?',
    options: [
      'Surat Keputusan Bupati tentang pemberhentian pegawai negeri sipil',
      'Surat Keputusan yang dikeluarkan dalam keadaan perang, bahaya, atau bencana alam untuk kepentingan umum',
      'Keputusan pencabutan izin trayek angkutan umum',
      'Penolakan permohonan izin mendirikan bangunan'
    ],
    correctIndex: 1,
    explanation: 'Pasal 49 UU Peratun secara tegas mengecualikan keputusan yang dikeluarkan dalam keadaan perang, keadaan bahaya, keadaan bencana alam, atau keadaan mendesak untuk kepentingan umum berdasarkan peraturan perundang-undangan dari yurisdiksi PTUN.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 10: Pengecualian Objek)'
  },
  {
    id: 'ptun-amelia-15',
    topicId: 10,
    topicTitle: 'Topik 10: Keputusan yang Bukan Objek Sengketa',
    type: 'conceptual',
    typeLabel: 'Formula Objek Sengketa',
    question: 'Apakah formula matematika yuridis kelayakan objek sengketa PTUN yang dirumuskan dalam materi perkuliahan?',
    options: [
      'Objek = (Pasal 53 + Pasal 55) dibagi Pasal 56',
      'Objek = (Pasal 1 angka 9 + Pasal 3) MINUS (Pasal 2 + Pasal 49)',
      'Objek = KUHPerdata dikurangi KUHPidana',
      'Objek = UU PTUN ditambah UU Ormas'
    ],
    correctIndex: 1,
    explanation: 'Bahan ajar materi perkuliahan merumuskan formula baku: Objek sah gugatan PTUN = (Pasal 1 angka 9 + Pasal 3) MINUS (Pasal 2 + Pasal 49).',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 10)'
  },

  // 11. Contoh Sengketa TUN
  {
    id: 'ptun-amelia-16',
    topicId: 11,
    topicTitle: 'Topik 11: Tipologi dan Contoh Sengketa TUN',
    type: 'scenario',
    typeLabel: 'Entitas Swasta Fungsi Publik',
    question: 'Sebuah lembaga sertifikasi swasta ditunjuk resmi oleh undang-undang untuk menyelenggarakan uji kompetensi dan penerbitan lisensi profesi publik. Jika lembaga tersebut menolak menerbitkan lisensi peserta tanpa dasar hukum, apakah keputusannya dapat digugat ke PTUN?',
    options: [
      'Tidak bisa karena badan tersebut berbadan hukum privat/swasta',
      'Bisa, karena badan swasta tersebut sedang melaksanakan urusan pemerintahan berdasarkan mandat peraturan perundang-undangan (Pasal 1 angka 8 UU 51/2009)',
      'Hanya bisa dilaporkan ke kepolisian sebagai tindak pidana penipuan',
      'Harus diselesaikan melalui arbitrase internasional'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan kriteria fungsional Pasal 1 angka 8 UU No. 51 Tahun 2009, Badan/Pejabat TUN mencakup entitas swasta yang diserahi tugas melaksanakan urusan pemerintahan. Keputusan atau penolakannya dikualifikasikan sebagai KTUN yang dapat diuji di PTUN.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 11: Contoh Sengketa TUN)'
  },

  // 12. Struktur Surat Gugatan
  {
    id: 'ptun-amelia-17',
    topicId: 12,
    topicTitle: 'Topik 12: Struktur Surat Gugatan di PTUN',
    type: 'conceptual',
    typeLabel: 'Komponen Surat Gugatan',
    question: 'Manakah urutan sistematika penyusunan surat gugatan TUN yang benar menurut panduan perkuliahan?',
    options: [
      'Petitum → Posita → Replik → Identitas Para Pihak',
      'Identitas Para Pihak → Objek Sengketa → Kewenangan Pengadilan → Upaya Administratif → Tenggang Waktu → Kepentingan Penggugat → Posita → Petitum',
      'Upaya Administratif → Putusan Sela → Eksepsi → Petitum',
      'Surat Kuasa → Berita Acara Sidang → Posita → Petitum'
    ],
    correctIndex: 1,
    explanation: 'Sistematika lengkap surat gugatan di PTUN memuat 8 elemen berurutan: Identitas Para Pihak, Objek Sengketa, Kewenangan Pengadilan, Upaya Administratif, Tenggang Waktu, Kepentingan Penggugat yang Dirugikan, Posita (Fundamentum Petendi), dan Petitum.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 12: Gugatan di PTUN)'
  },

  // 13. Identitas Para Pihak
  {
    id: 'ptun-amelia-18',
    topicId: 13,
    topicTitle: 'Topik 13: Identitas Para Pihak',
    type: 'conceptual',
    typeLabel: 'Pasal 56 UU Peratun',
    question: 'Apakah persyaratan formal yang wajib dicantumkan mengenai identitas Tergugat menurut Pasal 56 UU Peratun?',
    options: [
      'Nama lengkap pribadi pejabat, agama, status pernikahan, dan nama anak-anaknya',
      'Nama jabatan resmi dan tempat kedudukan instansi Tergugat',
      'Nomor rekening bank dinas Tergugat',
      'Izin tertulis dari atasan Tergugat untuk digugat'
    ],
    correctIndex: 1,
    explanation: 'Sesuai Pasal 56 UU Peratun, identitas Tergugat wajib mencantumkan nama jabatan resmi (misal: "Bupati Malang", "Kepala Dinas Tenaga Kerja Provinsi Jawa Timur") dan tempat kedudukan resmi instansi Tergugat.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 13: Identitas Para Pihak)'
  },

  // 14. Objek Gugatan dalam Surat Gugatan
  {
    id: 'ptun-amelia-19',
    topicId: 14,
    topicTitle: 'Topik 14: Objek Gugatan dalam Surat Gugatan',
    type: 'conceptual',
    typeLabel: 'Kaidah Penulisan Objek',
    question: 'Bagaimanakah kaidah praktis penulisan objek sengketa pada bagian "Objek Gugatan" dalam surat gugatan PTUN?',
    options: [
      'Harus menceritakan seluruh kronologi perselisihan sejak awal peristiwa secara detail',
      'Harus ditulis secara singkat, padat, dan presisi (nomor, tanggal, perihal SK); sedangkan uraian kronologi detail wajib ditempatkan pada Posita',
      'Cukup ditulis kata "Surat Keputusan Tergugat" tanpa menyebutkan nomor dan tanggal',
      'Harus mencantumkan kutipan undang-undang yang dilanggar'
    ],
    correctIndex: 1,
    explanation: 'Pada bagian Objek Gugatan, objek sengketa dirumuskan secara singkat, jelas, dan spesifik (nomor SK, tanggal terbit, instansi penerbit, perihal). Kronologi sejarah sengketa dan latar belakang fakta ditempatkan di bagian Posita (Fundamentum Petendi).',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 14: Objek Gugatan)'
  },

  // 15. Kewenangan Pengadilan yang Dituju
  {
    id: 'ptun-amelia-20',
    topicId: 15,
    topicTitle: 'Topik 15: Kewenangan Pengadilan yang Dituju',
    type: 'scenario',
    typeLabel: 'Kompetensi Relatif',
    question: 'Seorang warga beralamat di Surabaya menggugat Surat Keputusan yang diterbitkan oleh Walikota Malang. Berdasarkan asas umum kompetensi relatif (Pasal 54 ayat 1 UU Peratun), pengadilan manakah yang berwenang mengadili perkara tersebut?',
    options: [
      'PTUN Surabaya, karena tempat tinggal Penggugat berada di Surabaya',
      'PTUN Surabaya yang wilayah hukumnya membawahi Kota Malang (tempat kedudukan Tergugat)',
      'Pengadilan Negeri Malang karena menyangkut pejabat daerah',
      'Mahkamah Agung langsung di Jakarta'
    ],
    correctIndex: 1,
    explanation: 'Kompetensi relatif menganut asas Actor Sequitur Forum Rei (Pasal 54 ayat 1 UU Peratun): gugatan diajukan ke pengadilan yang wilayah hukumnya meliputi tempat kedudukan Tergugat (dalam hal ini PTUN Surabaya yang membawahi wilayah kedudukan Walikota Malang).',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 15: Kewenangan Pengadilan)'
  },

  // 16. Upaya Administratif
  {
    id: 'ptun-amelia-21',
    topicId: 16,
    topicTitle: 'Topik 16: Upaya Administratif',
    type: 'conceptual',
    typeLabel: 'Tingkatan Upaya Administratif',
    question: 'Berdasarkan Pasal 75 UU No. 30 Tahun 2014 jo. Perma No. 6 Tahun 2018, bagaimanakah tahapan upaya administratif yang wajib ditempuh sebelum mendaftarkan gugatan ke PTUN?',
    options: [
      'Langsung mendaftar ke PTUN tanpa perlu mengajukan keberatan',
      'Upaya Administratif melalui KEBERATAN kepada pejabat penerbit keputusan, lalu BANDING ADMINISTRATIF kepada atasan pejabat/badan banding, baru kemudian GUGATAN ke PTUN',
      'Mediasi di kepolisian, lalu ke Pengadilan Tinggi, baru ke PTUN',
      'Musyawarah adat desa sebelum mendaftarkan gugatan'
    ],
    correctIndex: 1,
    explanation: 'Pasal 75 UU AP jo. Perma 6/2018 mewajibkan prosedur bertingkat: pengajuan Keberatan kepada pejabat penerbit KTUN; jika ditolak, dilanjutkan Banding Administratif kepada atasan pejabat/badan banding khusus; jika tetap ditolak, barulah dibuka pintu gugatan ke PTUN.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 16: Upaya Administratif)'
  },

  // 17. Tenggang Waktu Gugatan
  {
    id: 'ptun-amelia-22',
    topicId: 17,
    topicTitle: 'Topik 17: Tenggang Waktu Gugatan',
    type: 'scenario',
    typeLabel: 'Kedaluwarsa 90 Hari',
    question: 'Penggugat menerima surat keputusan penolakan banding administratif pada tanggal 1 Februari 2024. Penggugat baru mendaftarkan gugatannya ke PTUN pada hari ke-95. Apakah putusan yang dijatuhkan oleh majelis hakim?',
    options: [
      'Gugatan dikabulkan karena ada iktikad baik dari penggugat',
      'Gugatan dinyatakan Tidak Dapat Diterima (Niet Ontvankelijke Verklaard / NO) karena telah lewat waktu (kedaluwarsa 90 hari)',
      'Gugatan dialihkan menjadi sengketa perdata biasa',
      'Tergugat diwajibkan membayar uang paksa (dwangsom)'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan Pasal 55 UU Peratun jo. Pasal 5 Perma No. 6 Tahun 2018, tenggang waktu mengajukan gugatan adalah 90 hari kalender sejak diterimanya keputusan upaya administratif terakhir. Pendaftaran pada hari ke-95 mengakibatkan gugatan kedaluwarsa dan wajib diputus NO.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 17: Tenggang Waktu Gugatan)'
  },

  // 18. Kepentingan Penggugat yang Dirugikan
  {
    id: 'ptun-amelia-23',
    topicId: 18,
    topicTitle: 'Topik 18: Kepentingan Penggugat yang Dirugikan',
    type: 'conceptual',
    typeLabel: 'Legal Standing Penggugat',
    question: 'Apakah makna dari doktrin "Point d’intérêt, point d’action" dalam hukum acara PTUN?',
    options: [
      'Setiap warga negara berhak menggugat semua keputusan pemerintah tanpa syarat',
      'Hanya pihak yang memiliki kepentingan hukum nyata yang terkena kerugian langsung yang berhak mengajukan gugatan ke PTUN',
      'Penggugat wajib menyetorkan sejumlah uang jaminan kepentingan ke kas negara',
      'Gugatan hanya dapat diajukan jika didukung oleh minimal 100 orang'
    ],
    correctIndex: 1,
    explanation: '"Point d’intérêt, point d’action" (ada kepentingan, baru ada hak menuntut) menegaskan syarat legal standing menurut Pasal 53 UU Peratun: penggugat harus dapat membuktikan bahwa hak atau kepentingannya dirugikan secara langsung oleh KTUN yang disengketakan.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 18: Kepentingan Penggugat)'
  },

  // 19. Alasan Gugatan
  {
    id: 'ptun-amelia-24',
    topicId: 19,
    topicTitle: 'Topik 19: Alasan-Alasan Gugatan',
    type: 'conceptual',
    typeLabel: 'Détournement de Pouvoir',
    question: 'Apakah yang dimaksud dengan alasan gugatan "Penyalahgunaan Wewenang" (Détournement de Pouvoir)?',
    options: [
      'Pejabat mengeluarkan keputusan tanpa memiliki nomor registrasi dinas',
      'Pejabat menggunakan wewenangnya untuk tujuan yang berbeda dari tujuan yang diberikan oleh peraturan perundang-undangan yang mendasarinya',
      'Pejabat memutus perkara pidana di kantor kejaksaan',
      'Pejabat terlambat masuk kantor saat jam dinas'
    ],
    correctIndex: 1,
    explanation: 'Penyalahgunaan wewenang (détournement de pouvoir) terjadi manakala seorang pejabat TUN menggunakan wewenang jabatannya untuk tujuan lain yang menyimpang dari tujuan pemberian wewenang tersebut oleh undang-undang, misalnya untuk motif pribadi atau kelompok.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 19: Alasan Gugatan)'
  },

  // 20. Posita
  {
    id: 'ptun-amelia-25',
    topicId: 20,
    topicTitle: 'Topik 20: Posita (Fundamentum Petendi)',
    type: 'conceptual',
    typeLabel: 'Kaidah Penyusunan Posita',
    question: 'Apakah empat prinsip utama yang wajib dipedomani dalam menyusun Posita menurut bahan ajar perkuliahan?',
    options: [
      'Singkat, Padat, Cepat, dan Murah',
      'Cermat, Jelas, Teliti, dan Kronologis',
      'Abstrak, Umum, Rahasia, dan Sepihak',
      'Tegas, Keras, Subjektif, dan Emosional'
    ],
    correctIndex: 1,
    explanation: 'Posita surat gugatan wajib disusun secara: CERMAT (tepat mengidentifikasi pasal dan AUPB), JELAS (bahasa hukum lugas tidak ambigu), TELITI (memuat detail tanggal, nomor surat, bukti), dan KRONOLOGIS (urut urutan peristiwanya).',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 20: Posita)'
  },

  // 21. Petitum
  {
    id: 'ptun-amelia-26',
    topicId: 21,
    topicTitle: 'Topik 21: Petitum Surat Gugatan',
    type: 'scenario',
    typeLabel: 'Tuntutan Rehabilitasi',
    question: 'Seorang PNS yang diberhentikan secara sewenang-wenang mengajukan gugatan ke PTUN. Selain menuntut pembatalan SK pemberhentian, tuntutan apakah yang dapat dimohonkan secara khusus berdasarkan Pasal 121 UU Peratun?',
    options: [
      'Tuntutan agar bupati dijatuhi hukuman kurungan',
      'Tuntutan rehabilitasi untuk memulihkan hak-hak dalam kemampuan, kedudukan, harkat, dan martabatnya sebagai PNS seperti semula',
      'Tuntutan penyerahan mobil dinas bupati kepada penggugat',
      'Tuntutan pembubaran badan kepegawaian daerah'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan Pasal 121 UU Peratun, dalam sengketa kepegawaian, penggugat dapat menuntut rehabilitasi, yaitu pemulihan hak-hak penggugat dalam kemampuan, kedudukan, harkat, dan martabatnya sebagai pegawai negeri seperti keadaan semula sebelum keputusan diterbitkan.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 21: Petitum)'
  },

  // 22. e-Court
  {
    id: 'ptun-amelia-27',
    topicId: 22,
    topicTitle: 'Topik 22: Tahapan Pendaftaran Gugatan (e-Court)',
    type: 'conceptual',
    typeLabel: 'Prosedur e-Court',
    question: 'Apakah fungsi diterbitkannya e-SKUM dengan nomor Virtual Account dalam pendaftaran perkara melalui sistem e-Court?',
    options: [
      'Untuk melakukan verifikasi nomor pokok wajib pajak penggugat',
      'Sebagai sarana pembayaran panjar biaya perkara secara elektronik (e-Payment) sebelum verifikasi dan registrasi perkara',
      'Sebagai tanda bukti sah putusan akhir perkara telah dijatuhkan',
      'Sebagai surat izin penundaan sidang terbuka'
    ],
    correctIndex: 1,
    explanation: 'e-SKUM (Surat Kuasa Untuk Membayar elektronik) memuat taksiran panjar biaya perkara dan nomor Virtual Account perbankan untuk pembayaran elektronik (e-Payment). Setelah pembayaran terkonfirmasi sistem, berkas diproses ke Meja I dan Panitera Muda untuk registrasi resmi.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 22: e-Court)'
  },

  // 23. Dismissal Proses
  {
    id: 'ptun-amelia-28',
    topicId: 23,
    topicTitle: 'Topik 23: Proses Dismissal',
    type: 'conceptual',
    typeLabel: 'Wewenang Dismissal Ketua PTUN',
    question: 'Siapakah pejabat peradilan yang berwenang memimpin proses dismissal dan dalam forum apakah pemeriksaan tersebut diselenggarakan menurut Pasal 62 UU Peratun?',
    options: [
      'Majelis Hakim dalam sidang terbuka untuk umum',
      'Ketua Pengadilan Tata Usaha Negara dalam Rapat Permusyawaratan tertutup',
      'Panitera Sekretaris di ruang mediasi terbuka',
      'Ketua Mahkamah Agung di Jakarta'
    ],
    correctIndex: 1,
    explanation: 'Dismissal proses adalah wewenang Ketua PTUN (atau hakim yang ditunjuk sebagai rapporteur) yang dilaksanakan dalam Rapat Permusyawaratan tertutup untuk menyaring gugatan sebelum masuk ke persidangan terbuka.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 23: Dismissal Proses)'
  },

  // 24. Pemeriksaan Persiapan
  {
    id: 'ptun-amelia-29',
    topicId: 24,
    topicTitle: 'Topik 24: Pemeriksaan Persiapan',
    type: 'conceptual',
    typeLabel: 'Pasal 63 UU Peratun',
    question: 'Berapa harikah batas waktu maksimal yang diberikan hakim kepada Penggugat untuk menyempurnakan gugatan dalam tahap Pemeriksaan Persiapan?',
    options: [
      '14 hari kerja sejak sidang dibuka',
      '30 (tiga puluh) hari kalender sejak petunjuk perbaikan diberikan',
      '90 hari kalender mengikuti batas kedaluwarsa gugatan',
      '7 hari kalender tanpa perpanjangan'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan Pasal 63 ayat (3) UU Peratun, penggugat diberi batas waktu maksimal 30 (tiga puluh) hari untuk menyempurnakan gugatannya. Jika batas waktu 30 hari lewat tanpa perbaikan, hakim memutus gugatan tidak dapat diterima.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 24: Pemeriksaan Persiapan)'
  },

  // 25 & 26. Acara Singkat (Verzet)
  {
    id: 'ptun-amelia-30',
    topicId: 26,
    topicTitle: 'Topik 26: Acara Singkat (Pemeriksaan Perlawanan)',
    type: 'conceptual',
    typeLabel: 'Sifat Putusan Perlawanan',
    question: 'Jika perlawanan (verzet) Penggugat terhadap penetapan dismissal DITOLAK oleh pengadilan dalam acara singkat, apakah upaya hukum lanjutan yang dapat diajukan?',
    options: [
      'Dapat diajukan banding ke Pengadilan Tinggi Tata Usaha Negara dalam 14 hari',
      'Dapat diajukan kasasi langsung ke Mahkamah Agung',
      'TIDAK DAPAT diajukan upaya hukum apa pun karena putusan penolakan perlawanan bersifat final dan mengikat',
      'Dapat meminta fatwa hukum kepada Kementerian Hukum dan HAM'
    ],
    correctIndex: 2,
    explanation: 'Pasal 62 ayat (6) UU Peratun menegaskan bahwa terhadap putusan pengadilan yang menolak perlawanan (verzet) tidak dapat digunakan upaya hukum apa pun (bersifat final dan mengikat). Perkara resmi tertutup.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 26: Acara Singkat)'
  },

  // 27. Acara Cepat
  {
    id: 'ptun-amelia-31',
    topicId: 27,
    topicTitle: 'Topik 27: Acara Cepat',
    type: 'conceptual',
    typeLabel: 'Susunan Hakim Acara Cepat',
    question: 'Bagaimanakah susunan hakim yang memeriksa perkara dalam Acara Cepat menurut Pasal 99 UU Peratun?',
    options: [
      'Majelis Hakim yang terdiri dari 3 orang hakim',
      'Diperiksa dan diputus oleh Hakim Tunggal',
      'Diperiksa oleh Ketua PTUN bersama panitera tanpa hakim anggota',
      'Diperiksa oleh 5 orang hakim agung'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan Pasal 99 ayat (1) UU Peratun, pemeriksaan dengan acara cepat dilakukan oleh Hakim Tunggal demi efisiensi dan kecepatan penanganan perkara mendesak.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 27: Acara Cepat)'
  },

  // 28. Acara Biasa
  {
    id: 'ptun-amelia-32',
    topicId: 28,
    topicTitle: 'Topik 28: Acara Biasa (Alur Persidangan Lengkap)',
    type: 'conceptual',
    typeLabel: 'Alur Tahapan Persidangan',
    question: 'Dalam persidangan acara biasa, setelah tahap Replik dari Penggugat, tahapan apakah yang langsung menyusul berikutnya?',
    options: [
      'Pembacaan Putusan Akhir',
      'Duplik dari Tergugat',
      'Pemeriksaan Persiapan Ulang',
      'Rapat Permusyawaratan Dismissal'
    ],
    correctIndex: 1,
    explanation: 'Urutan dialektika beracara di PTUN: Pembacaan Gugatan → Jawaban Tergugat → Replik Penggugat → DUPLIK Tergugat → Pembuktian → Kesimpulan → Putusan.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 28: Acara Biasa)'
  },

  // 30. Pembuktian
  {
    id: 'ptun-amelia-33',
    topicId: 30,
    topicTitle: 'Topik 30: Hukum Pembuktian di PTUN',
    type: 'conceptual',
    typeLabel: 'Alat Bukti Primer',
    question: 'Apakah alat bukti yang paling primer (utama) dalam sengketa tata usaha negara menurut ketentuan Pasal 100 UU Peratun?',
    options: [
      'Keterangan Saksi mata',
      'Surat atau Tulisan resmi / naskah dinas',
      'Pengakuan sepihak Tergugat di media massa',
      'Sumpah pemutus (decisoir eed)'
    ],
    correctIndex: 1,
    explanation: 'Karena sengketa TUN adalah sengketa mengenai keabsahan penetapan tertulis dan dokumen birokrasi, maka alat bukti SURAT ATAU TULISAN (akta otentik, surat dinas, register resmi) menempati kedudukan paling utama dalam pembuktian di PTUN.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 30: Pembuktian)'
  },

  // 33. Putusan
  {
    id: 'ptun-amelia-34',
    topicId: 33,
    topicTitle: 'Topik 33: Putusan Pengadilan TUN',
    type: 'conceptual',
    typeLabel: 'Empat Varian Putusan',
    question: 'Apakah empat jenis amar putusan akhir pengadilan tingkat pertama menurut Pasal 97 ayat (7) UU Peratun?',
    options: [
      'Bebas, Lepas dari segala tuntutan hukum, Terbukti bersalah, dan Denda',
      'Gugatan Gugur, Gugatan Tidak Diterima (NO), Gugatan Ditolak, dan Gugatan Dikabulkan',
      'Ganti Rugi, Sita Eksekusi, Kurungan Pengganti, dan Uang Paksa',
      'Penetapan Sementara, Putusan Sela, Putusan Kasasi, dan Peninjauan Kembali'
    ],
    correctIndex: 1,
    explanation: 'Pasal 97 ayat (7) UU Peratun menetapkan secara limitatif 4 jenis putusan akhir pengadilan TUN: 1. Gugatan gugur; 2. Gugatan tidak diterima (Niet Ontvankelijke Verklaard / NO); 3. Gugatan ditolak; 4. Gugatan dikabulkan.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 33: Putusan PTUN)'
  },

  // 34. Upaya Hukum
  {
    id: 'ptun-amelia-35',
    topicId: 34,
    topicTitle: 'Topik 34: Upaya Hukum di PTUN',
    type: 'conceptual',
    typeLabel: 'Tenggang Waktu Banding',
    question: 'Berapa harikah batas waktu pengajuan permohonan pemeriksaan Banding ke Pengadilan Tinggi Tata Usaha Negara (PTTUN) sejak putusan PTUN diberitahukan?',
    options: [
      '14 (empat belas) hari kalender terhitung sejak hari putusan diberitahukan secara sah',
      '30 hari kalender sejak pengucapan putusan',
      '90 hari kalender mengikuti tenggang waktu gugatan pertama',
      '180 hari sejak salinan putusan diunggah ke SIPP'
    ],
    correctIndex: 0,
    explanation: 'Berdasarkan Pasal 123 ayat (1) UU Peratun, permohonan pemeriksaan tingkat banding ke PTTUN diajukan secara tertulis dalam tenggang waktu 14 (empat belas) hari setelah putusan pengadilan diberitahukan secara sah kepada para pihak.',
    referenceSource: 'Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H. (Topik 34: Upaya Hukum)'
  },
];
