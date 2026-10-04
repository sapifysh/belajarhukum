import { Topic } from './hukumIslamData';

export const HUKUM_DAGANG_METADATA = {
  courseCode: 'HKO60015',
  credits: '4 SKS',
  faculty: 'Fakultas Hukum',
  syllabus: 'Silabus Substantif Topik 1 – 17',
  lecturer: 'Fakultas Hukum',
  format: 'Panduan Belajar Komprehensif Hukum Dagang',
  coverage: 'Topik 01 – 17: Hubungan KUHD-BW, Badan Usaha, Bentuk Perusahaan, L/C, hingga Pembahasan Soal',
  references: [
    'Kitab Undang-Undang Hukum Dagang (KUHD / Wetboek van Koophandel)',
    'Kitab Undang-Undang Hukum Perdata (KUHPerdata / Burgerlijk Wetboek)',
    'UU No. 3 Tahun 1982 tentang Wajib Daftar Perusahaan',
    'UU No. 40 Tahun 2007 tentang Perseroan Terbatas',
    'Keputusan Menperindag No. 23/MPP/KEP/98 tentang Lembaga Usaha Dagang',
    'Uniform Customs and Practice for Documentary Credits (UCP 600)',
    'Rangkuman Resmi Materi Kuliah & Pembahasan Soal Hukum Dagang',
  ],
};

export const DAGANG_TOPICS_DATA: Topic[] = [
  // 01 — HUBUNGAN HUKUM DAGANG DENGAN BW
  {
    id: 1,
    numberStr: 'TOPIK 01',
    title: 'Hubungan Hukum Dagang dengan Burgerlijk Wetboek (BW)',
    shortDesc: 'Asas Lex Specialis Derogat Legi Generali dalam Pasal 1 KUHD, kedudukan Hukum Dagang sebagai aturan khusus dan BW sebagai aturan umum perdata.',
    summaryQuote: 'Pasal 1 KUHD menegaskan asas "Lex specialis derogat legi generali", yaitu peraturan khusus (Hukum Dagang) mengesampingkan peraturan yang umum (BW).',
    sections: [
      {
        id: 'asas-lex-specialis',
        title: 'A. Kedudukan Yuridis Pasal 1 KUHD',
        content: [
          'Hukum Dagang pada hakikatnya merupakan bagian khusus dari Hukum Perdata materiel. Hubungan antara Kitab Undang-Undang Hukum Dagang (KUHD) dengan Burgerlijk Wetboek (BW / KUHPerdata) diletakkan secara tegas dalam Pasal 1 KUHD.',
          'Pasal 1 KUHD berbunyi bahwa ketentuan-ketentuan KUHPerdata berlaku juga bagi perbuatan-perbuatan yang diatur dalam KUHD, sekadar dalam KUHD tidak diatur secara khusus menyimpang.',
        ],
        highlightBox: {
          title: 'ASAS UTAMA: LEX SPECIALIS DEROGAT LEGI GENERALI',
          text: 'Peraturan khusus mengesampingkan peraturan yang umum. Apabila suatu perbuatan hukum atau perjanjian telah diatur ketentuannya secara spesifik di dalam KUHD, maka ketentuan khusus KUHD tersebut yang digunakan, dan ketentuan umum dalam BW dikesampingkan.',
        },
      },
      {
        id: 'relasi-kuhd-bw',
        title: 'B. Hubungan Harmonisasi Aturan Khusus vs Aturan Umum',
        content: [
          'Penerapan asas ini menciptakan pembagian peran yang sistematis antara KUHD dan BW dalam praktik perniagaan:',
        ],
        comparisonBoxes: [
          {
            title: 'Hukum Dagang (KUHD)',
            description: 'Berperan sebagai ATURAN KHUSUS (Lex Specialis)',
            items: [
              'Mengatur perbuatan-perbuatan perniagaan dan badan usaha secara spesifik.',
              'Mengatur pranata perniagaan khusus: bursa, makelar, komisioner, persekutuan firma, CV, surat berharga, asuransi, dan pengangkutan.',
              'Jika terdapat pengaturan tersendiri dalam KUHD, aturan KUHD yang mengikat para pihak.',
            ],
          },
          {
            title: 'Hukum Perdata (BW / KUHPerdata)',
            description: 'Berperan sebagai ATURAN UMUM (Lex Generalis)',
            items: [
              'Buku III BW mengatur asas-asas umum hukum perikatan dan perjanjian (Pasal 1313, 1320, 1338 BW).',
              'Menjadi landasan dasar bagi semua perikatan dagang sepanjang tidak disimpangi oleh KUHD.',
              'Ketentuan BW tetap berlaku mengisi kekosongan hukum apabila KUHD tidak mengaturnya secara khusus.',
            ],
          },
        ],
        keyPoints: [
          'Perjanjian dagang tetap harus memenuhi syarat sah perjanjian menurut Pasal 1320 BW (kesepakatan, kecakapan, objek tertentu, dan sebab yang halal).',
          'Asas kebebasan berkontrak (Pasal 1338 ayat 1 BW) menjadi jiwa bagi lalu lintas perdagangan bebas.',
          'Prinsip ini menjamin kepastian hukum bagi pelaku usaha dalam menjalankan transaksi bisnis modern.',
        ],
      },
    ],
  },

  // 02 — PERUBAHAN KUHD
  {
    id: 2,
    numberStr: 'TOPIK 02',
    title: 'Perubahan dan Reformasi KUHD',
    shortDesc: 'Pencabutan Pasal 2–5 KUHD pada 17 Juli 1938, evolusi konsep dari "pedagang" ke "perusahaan", dan perluasan lingkup perniagaan.',
    summaryQuote: 'Istilah "perdagangan" digantikan oleh "perusahaan" karena perdagangan lebih sempit; perdagangan adalah salah satu bagian dari kegiatan perusahaan.',
    sections: [
      {
        id: 'pencabutan-pasal-kuhd',
        title: 'A. Pencabutan Pasal 2–5 KUHD (17 Juli 1938)',
        content: [
          'Dalam sejarah perkembangannya, KUHD peninggalan kolonial mengalami perubahan fundamental. Pada tanggal 17 Juli 1938 (berdasarkan Stb. No. 276 Tahun 1938), Pasal 2 sampai dengan Pasal 5 KUHD secara resmi dicabut dan dihapus.',
          'Alasan-alasan mendasar pencabutan pasal-pasal tersebut meliputi:',
        ],
        keyPoints: [
          'Pasal 2 KUHD: Istilah "Pedagang" dipandang sudah tidak relevan lagi untuk menggambarkan subjek hukum dagang modern. Oleh karena itu, konsep subjek hukum diganti menjadi "Perusahaan".',
          'Pasal 3 KUHD: Definisi perniagaan sebelumnya hanya dibatasi pada kegiatan "membeli barang untuk dijual kembali". Pada era modern, kegiatan perniagaan telah berkembang luas dan tidak hanya itu. Selain itu, definisi objek barang dalam pasal 3 lama hanya ditujukan untuk barang bergerak.',
          'Pasal 4 KUHD: Menyebutkan perbuatan perniagaan dilakukan oleh komisioner, makelar, kasir, dan lain-lain. Namun di Pasal 2 dinyatakan pelaku perdagangan hanyalah "pedagang". Hal ini menimbulkan pertentangan/konflik norma hukum dalam KUHD.',
          'Pasal 5 KUHD: Konsekuensi logis dari ketidaksinkronan rumusan perbuatan perniagaan yang kaku.',
        ],
      },
      {
        id: 'pedagang-vs-perusahaan',
        title: 'B. Alasan Penggantian Istilah Perdagangan Menjadi Perusahaan',
        content: [
          'Alasan digantikannya istilah "perdagangan" dengan "perusahaan" berakar pada luasnya cakupan kegiatan ekonomi:',
          'Istilah perdagangan bersifat jauh lebih sempit daripada perusahaan. Perdagangan (jual-beli untuk mencari untung) hanyalah salah satu dari aneka kegiatan yang diselenggarakan oleh suatu perusahaan.',
          'Perusahaan tidak hanya membeli barang lalu menjualnya kembali, melainkan juga mencakup kegiatan produksi sendiri, pengolahan bahan mentah, penyediaan jasa, pengangkutan, manufaktur, dan industri kreatif.',
        ],
        table: {
          headers: ['Aspek Pembeda', 'Konsep Lama: Pedagang / Perniagaan', 'Konsep Baru: Perusahaan'],
          rows: [
            ['Subjek Hukum', 'Orang perorangan yang melakukan perbuatan perniagaan sebagai pekerjaan sehari-hari (Pasal 2).', 'Organisasi atau perorangan yang menjalankan usaha terus menerus dan bertindak keluar mencari laba.'],
            ['Ruang Lingkup Kegiatan', 'Sempit: hanya perbuatan membeli barang untuk dijual kembali (Pasal 3).', 'Luas: memproduksi sendiri, manufaktur, distribusi, penyedia jasa, maupun perdagangan.'],
            ['Objek Barang', 'Terbatas hanya pada barang bergerak.', 'Mencakup barang bergerak, barang tidak bergerak, hak kekayaan intelektual, dan jasa.'],
            ['Status Pelaku', 'Hanya perseorangan pedagang.', 'Perseorangan (natuurlijk persoon) maupun badan usaha / badan hukum (rechtspersoon).'],
          ],
        },
      },
    ],
  },

  // 03 — SUBJEK HUKUM DAGANG
  {
    id: 3,
    numberStr: 'TOPIK 03',
    title: 'Subjek Hukum Dagang',
    shortDesc: 'Klasifikasi subjek hukum dagang: Manusia perorangan, Usaha Dagang, Badan Usaha tidak berbadan hukum, dan Badan Usaha berbadan hukum.',
    summaryQuote: 'Subjek hukum dagang adalah perusahaan, baik berwujud orang perorangan (natuurlijk persoon) maupun badan hukum (rechtspersoon).',
    sections: [
      {
        id: 'klasifikasi-subjek',
        title: 'A. Klasifikasi Subjek Hukum Dagang',
        content: [
          'Berdasarkan sumber materi resmi, subjek hukum dagang terbagi ke dalam tiga kelompok utama:',
        ],
        keyPoints: [
          '1. Perseorangan (Manusia / Natuurlijk Persoon): Setiap individu manusia yang cakap bertindak menurut hukum untuk menjalankan kegiatan usaha atau perbuatan perniagaan.',
          '2. Usaha Dagang (UD): Bentuk usaha perorangan yang memiliki ciri khas mutlak, yaitu DIMILIKI OLEH 1 ORANG.',
          '3. Badan Usaha: Organisasi usaha yang didirikan untuk menjalankan kegiatan ekonomi mencari keuntungan, yang terbagi menjadi dua klasifikasi besar.',
        ],
      },
      {
        id: 'tabel-badan-usaha',
        title: 'B. Pembagian Badan Usaha: Berbadan Hukum vs Tidak Berbadan Hukum',
        content: [
          'Badan usaha dalam lalu lintas hukum dagang dibedakan secara tegas berdasarkan ada atau tidaknya status badan hukum:',
        ],
        table: {
          headers: ['Kategori Badan Usaha', 'Bentuk / Contoh Badan Usaha', 'Karakteristik Yuridis'],
          rows: [
            [
              '1. Badan Usaha Tidak Berbadan Hukum',
              'CV (Commanditaire Vennootschap), Firma (Persekutuan Firma)',
              'Menjalankan perusahaan; tidak memiliki pemisahan mutlak antara kekayaan badan usaha dengan harta pribadi pendiri/pengurus; tanggung jawab dapat menjangkau harta pribadi.',
            ],
            [
              '2. Badan Usaha Berbadan Hukum',
              'PT (Perseroan Terbatas), BUMN, Yayasan',
              'Memiliki status badan hukum mandiri (rechtspersoon); memiliki kekayaan terpisah dengan pendiri; tanggung jawab pemilik/pemegang saham terbatas sebesar modal yang disetor.',
            ],
          ],
        },
      },
    ],
  },

  // 04 — BADAN USAHA DAN BADAN HUKUM
  {
    id: 4,
    numberStr: 'TOPIK 04',
    title: 'Badan Usaha dan Badan Hukum',
    shortDesc: 'Pengertian badan usaha vs badan hukum, 3 syarat material, serta syarat formil pengakuan akta otentik.',
    summaryQuote: 'Badan hukum adalah organisasi yang didirikan dengan akta otentik dan memiliki harta tersendiri serta mempunyai hak dan kewajiban mandiri.',
    sections: [
      {
        id: 'definisi-bu-bh',
        title: 'A. Pengertian Badan Usaha vs Badan Hukum',
        content: [
          'Dalam hukum dagang, badan usaha dan badan hukum memiliki kedudukan yuridis yang berbeda secara signifikan:',
        ],
        comparisonBoxes: [
          {
            title: 'Badan Usaha',
            description: 'Organisasi ekonomi berorientasi laba',
            items: [
              'Organisasi usaha yang didirikan oleh lebih dari satu individu untuk melaksanakan tujuan usaha dalam rangka meraih keuntungan.',
              'Fokus utamanya adalah pada kesatuan teknis dan ekonomis kegiatan usaha.',
              'Belum tentu merupakan subjek hukum yang mandiri dan terpisah dari pribadi para pendirinya.',
            ],
          },
          {
            title: 'Badan Hukum (Rechtspersoon)',
            description: 'Subjek hukum mandiri ciptaan undang-undang',
            items: [
              'Organisasi yang didirikan dengan akta otentik dan memiliki harta tersendiri serta mempunyai hak dan kewajiban layaknya manusia.',
              'Dapat bertindak sendiri di dalam maupun di luar pengadilan melalui pengurusnya.',
              'Mempunyai status personalitas hukum yang diakui secara sah oleh negara.',
            ],
          },
        ],
      },
      {
        id: 'syarat-badan-hukum',
        title: 'B. Syarat Berdirinya Badan Hukum',
        content: [
          'Agar suatu organisasi usaha dapat diakui sah memiliki status sebagai Badan Hukum, harus dipenuhi dua kelompok syarat kumulatif:',
        ],
        table: {
          headers: ['Kelompok Syarat', 'Uraian Persyaratan Menurut Sumber Materi'],
          rows: [
            [
              'Syarat Material (3 Unsur)',
              '1. Ada harta kekayaan yang terpisah\n2. Ada tujuan bersama\n3. Ada struktur pengurus',
            ],
            [
              'Syarat Formiil',
              'Adanya pengakuan berupa akta otentik (akta notaris dan pengesahan pemerintah).',
            ],
          ],
        },
        keyPoints: [
          'Harta kekayaan terpisah menjamin bahwa utang badan hukum hanya dilunasi dari aset badan hukum itu sendiri, bukan disita dari harta pribadi pemegang saham/pengurus.',
          'Tujuan bersama menjadi landasan operasional agar kegiatan tidak melenceng dari anggaran dasar.',
          'Struktur pengurus bertindak sebagai organ yang mewakili badan hukum dalam melakukan perbuatan perdata.',
        ],
      },
    ],
  },

  // 05 — PENGERTIAN PERUSAHAAN
  {
    id: 5,
    numberStr: 'TOPIK 05',
    title: 'Pengertian Perusahaan (UU No. 3 Tahun 1982)',
    shortDesc: 'Definisi resmi yuridis perusahaan berdasarkan UU Wajib Daftar Perusahaan dan 7 unsur kumulatif pembentuknya.',
    summaryQuote: 'Setiap bentuk usaha yang menjalankan setiap jenis usaha yang bersifat tetap dan terus menerus, didirikan dan bekerja serta berkedudukan di NKRI, untuk memperoleh laba.',
    sections: [
      {
        id: 'definisi-uu-3-1982',
        title: 'A. Definisi Yuridis UU No. 3 Tahun 1982',
        content: [
          'Rujukan resmi hukum positif mengenai pengertian perusahaan di Indonesia diatur dalam Undang-Undang Nomor 3 Tahun 1982 tentang Wajib Daftar Perusahaan.',
          'Pasal 1 huruf b UU No. 3 Tahun 1982 merumuskan perusahaan sebagai:',
        ],
        highlightBox: {
          title: 'DEFINISI RESMI PERUSAHAAN',
          text: '"Setiap bentuk usaha yang menjalankan setiap jenis usaha yang bersifat tetap dan terus menerus, didirikan dan bekerja serta berkedudukan di NKRI, untuk memperoleh laba."',
        },
      },
      {
        id: 'tujuh-unsur-perusahaan',
        title: 'B. Tujuh Unsur Kumulatif Perusahaan',
        content: [
          'Dari rumusan pasal tersebut, materi resmi mengkristalisasikan 7 elemen mutlak yang harus ada agar suatu aktivitas dikualifikasikan sebagai perusahaan:',
        ],
        keyPoints: [
          '1. Setiap bentuk usaha: Merujuk pada wadah atau organisasi persekutuan atau badan hukum yang menaungi kegiatan (misal: PT, CV, Firma, UD).',
          '2. Menjalankan jenis usaha: Melakukan aktivitas ekonomi nyata di bidang perniagaan, jasa, industri, ekstraktif, agraris, atau manufaktur.',
          '3. Bersifat tetap: Kegiatan usaha tidak bersifat insidental atau sekali selesai, melainkan memiliki kontinuitas dan kepastian operasional.',
          '4. Terus menerus: Berkelanjutan dalam kurun waktu tertentu tanpa henti secara reguler sebagai mata pencaharian.',
          '5. Didirikan dan bekerja: Memiliki proses pendirian riil serta melakukan tindakan operasional kerja nyata.',
          '6. Berkedudukan di wilayah NKRI: Memiliki tempat kedudukan atau domisili hukum di dalam wilayah Negara Kesatuan Republik Indonesia.',
          '7. Untuk memperoleh laba (keuntungan): Motif utamanya adalah motif ekonomi komersial (gain/profit seeking).',
        ],
      },
    ],
  },

  // 06 — RUANG LINGKUP PERUSAHAAN
  {
    id: 6,
    numberStr: 'TOPIK 06',
    title: 'Ruang Lingkup Perusahaan',
    shortDesc: 'Dua pilar ruang lingkup perusahaan: Bentuk Usaha sebagai wadah penggerak dan Kegiatan Usaha sebagai aktivitas ekonomi peraih laba.',
    summaryQuote: 'Ruang lingkup perusahaan mencakup Bentuk Usaha sebagai wadah organisasi dan Kegiatan Usaha sebagai substansi aktivitas ekonomi.',
    sections: [
      {
        id: 'dua-pilar-ruang-lingkup',
        title: 'A. Bentuk Usaha vs Kegiatan Usaha',
        content: [
          'Berdasarkan sumber materi, ruang lingkup hukum perusahaan dibagi secara tegas ke dalam dua pilar fundamental:',
        ],
        comparisonBoxes: [
          {
            title: '1. Bentuk Usaha',
            description: 'Wadah organisasi penggerak usaha',
            items: [
              'Adalah organisasi usaha yang menjadi wadah penggerak setiap jenis usaha.',
              'Merupakan kerangka hukum (legal vessel) tempat bernaungnya modal, pengurus, dan tanggung jawab hukum.',
              'Contoh: Usaha Dagang (perorangan), Maatschap, Firma, CV, atau Perseroan Terbatas (PT).',
            ],
          },
          {
            title: '2. Kegiatan Usaha',
            description: 'Aktivitas riil di bidang perekonomian',
            items: [
              'Adalah setiap jenis usaha di bidang perekonomian dengan tujuan memperoleh laba.',
              'Merupakan aktivitas operasional riil sehari-hari yang dijalankan oleh bentuk usaha tersebut.',
              'Contoh: perdagangan retail, perhotelan, logistik, pengangkutan, manufaktur garmen, ekspor impor.',
            ],
          },
        ],
        keyPoints: [
          'Bentuk Usaha menjawab pertanyaan "SIAPA wadah organisasinya?"',
          'Kegiatan Usaha menjawab pertanyaan "APA aktivitas ekonominya?"',
          'Keduanya saling berkelindan: tanpa bentuk usaha, kegiatan usaha tidak memiliki kepastian pertanggungjawaban hukum; tanpa kegiatan usaha, bentuk usaha hanyalah badan kosong.',
        ],
      },
    ],
  },

  // 07 — ASAS-ASAS HUKUM PERUSAHAAN
  {
    id: 7,
    numberStr: 'TOPIK 07',
    title: 'Asas-Asas Hukum Perusahaan',
    shortDesc: 'Tiga asas utama: Asas Perjanjian (kontraktual), Asas CSR (tanggung jawab sosial), dan Asas Corporate Separate Legal Personality.',
    summaryQuote: 'Tiga asas pilar hukum perusahaan: Asas Perjanjian, Asas Tanggung Jawab Sosial (CSR), dan Asas Corporate Separate Legal Personality.',
    sections: [
      {
        id: 'tiga-asas-perusahaan',
        title: 'A. Tiga Asas Pokok Hukum Perusahaan',
        content: [
          'Dalam menggerakkan roda operasional dan tata kelola badan usaha, berlaku tiga asas pokok hukum perusahaan sebagaimana tertuang dalam materi:',
        ],
        keyPoints: [
          '1. Asas Perjanjian: Bersifat hubungan kontraktual, artinya mengikat para pihak yang menyepakatinya. Pendirian persekutuan usaha, hubungan internal antar sekutu, serta perikatan bisnis eksternal dengan mitra bersumber dari ikatan perjanjian yang melahirkan hak dan kewajiban mengikat.',
          '2. Asas Corporate Social Responsibility (Tanggung Jawab Sosial) / CSR: Perusahaan harus memberikan manfaat sosial pada masyarakat di sekitarnya. Perusahaan tidak semata-mata mengejar keuntungan finansial pemilik modal, tetapi wajib bertanggung jawab terhadap kelestarian lingkungan dan kesejahteraan sosial komunitas setempat.',
          '3. Asas Corporate Separate Legal Personality: Kekayaan perusahaan terpisah dengan kekayaan pendiri. Asas ini merupakan perisai pemisah (corporate veil) yang melindungi harta privat para pendiri dari kewajiban dan tagihan utang entitas perusahaan berbadan hukum.',
        ],
      },
      {
        id: 'makna-yuridis-asas',
        title: 'B. Implikasi Yuridis Pemisahan Harta dan Tanggung Jawab',
        content: [
          'Penerapan Asas Corporate Separate Legal Personality membedakan secara fundamental antara badan usaha berbadan hukum dengan yang bukan badan hukum:',
          'Pada badan usaha tidak berbadan hukum (seperti UD, Firma, dan sekutu komplementer CV), asas pemisahan harta ini tidak berlaku penuh, sehingga kerugian perusahaan dapat ditarik hingga ke harta pribadi pendirinya.',
          'Sebaliknya, pada badan hukum (seperti PT), asas ini berlaku penuh sehingga pemegang saham hanya bertanggung jawab sebatas nilai saham/modal yang disetorkannya.',
        ],
      },
    ],
  },

  // 08 — JUAL BELI DAN PERNIAGAAN
  {
    id: 8,
    numberStr: 'TOPIK 08',
    title: 'Jual Beli dan Perniagaan',
    shortDesc: 'Pengertian Pasal 1457 BW, pengertian perniagaan, 6 kekhususan jual beli perniagaan, dan komparasi dengan jual beli biasa.',
    summaryQuote: 'Jual beli perniagaan adalah perbuatan perusahaan yang dilakukan untuk dijual kembali dengan sarana pengangkutan dan alat pembayaran non-tunai standar.',
    sections: [
      {
        id: 'pengertian-jb-perniagaan',
        title: 'A. Pengertian Jual Beli (Pasal 1457 BW) dan Perniagaan',
        content: [
          'Hukum jual beli dalam perniagaan berakar pada ketentuan hukum perdata umum dengan penyesuaian kebutuhan komersial:',
        ],
        comparisonBoxes: [
          {
            title: 'Pengertian Jual Beli (Pasal 1457 BW)',
            description: 'Persetujuan timbal balik penyerahan barang dan pembayaran harga',
            items: [
              'Jual beli adalah suatu persetujuan dengan mana pihak yang satu mengikatkan dirinya untuk menyerahkan suatu barang, dan pihak yang lain untuk membayar harga yang dijanjikan.',
              'Kewajiban Penjual: Menyerahkan hak milik atas barang yang dijual.',
              'Kewajiban Pembeli: Membayar harga pembelian yang telah disepakati.',
              'Sifatnya konsensuil: lahir seketika tercapai sepakat mengenai barang dan harga.',
            ],
          },
          {
            title: 'Pengertian Perniagaan',
            description: 'Perbuatan membeli barang untuk dijual kembali',
            items: [
              'Perbuatan membeli barang untuk dijual kembali dan beberapa perbuatan lain yang dimasukkan dalam perbuatan perniagaan.',
              'Tujuan intinya adalah menarik selisih laba (spekulasi perniagaan).',
              'Menjadi jembatan antara produsen pembuat barang dengan konsumen pemakai.',
            ],
          },
        ],
      },
      {
        id: 'enam-kekhususan-jbp',
        title: 'B. Enam Kekhususan Jual Beli Perniagaan',
        content: [
          'Materi resmi merumuskan 6 karakteristik khusus yang membedakan jual beli perniagaan dari jual beli perdata biasa:',
        ],
        keyPoints: [
          '1. Jual beli perniagaan merupakan salah satu perbuatan perusahaan.',
          '2. Salah satu atau kedua belah pihak adalah perusahaan.',
          '3. Setiap perbuatan yang dilakukan bukan untuk kepentingan sendiri, melainkan untuk dijual kembali atau kepentingan perusahaannya.',
          '4. Pengangkutan merupakan sarana yang sangat diperlukan (untuk memindahkan barang dari produsen/gudang ke pembeli).',
          '5. Umumnya pembayaran tidak dilakukan secara tunai melainkan memakai alat pembayaran (bilyet giro, cek, wesel, L/C, transfer perbankan).',
          '6. Menggunakan syarat-syarat yang standart (standard terms / klausula baku perdagangan seperti LOCO, Franco, FOB, CIF).',
        ],
        table: {
          headers: ['Aspek', 'Jual Beli Biasa (Perdata)', 'Jual Beli Perniagaan (Komersial)'],
          rows: [
            ['Pihak yang Terlibat', 'Umumnya individu konsumen perorangan.', 'Salah satu atau kedua belah pihak adalah perusahaan.'],
            ['Tujuan Pembelian', 'Untuk konsumsi atau kepentingan pribadi.', 'Untuk dijual kembali atau menunjang proses produksi perusahaan.'],
            ['Kebutuhan Pengangkutan', 'Seringkali langsung diserahkan di tempat.', 'Pengangkutan lintas daerah/negara menjadi sarana mutlak.'],
            ['Metode Pembayaran', 'Umumnya pembayaran tunai seketika.', 'Menggunakan instrumen pembayaran giral / komersial (L/C, bilyet giro, perbankan).'],
            ['Klausula Kontrak', 'Tawar menawar bebas secara kasual.', 'Menggunakan syarat-syarat standar / klausula baku dagang.'],
          ],
        },
      },
    ],
  },

  // 09 — BENTUK-BENTUK PERUSAHAAN
  {
    id: 9,
    numberStr: 'TOPIK 09',
    title: 'Bentuk-Bentuk Perusahaan',
    shortDesc: 'Tinjauan menyeluruh 4 bentuk badan usaha dalam KUHD dan BW: Perusahaan Dagang, Maatschap, Persekutuan Firma, dan CV.',
    summaryQuote: 'Empat bentuk perusahaan utama: Perusahaan Dagang (perorangan), Perseroan/Maatschap, Persekutuan Firma, dan Commanditaire Vennootschap (CV).',
    sections: [
      {
        id: 'ikhtisar-bentuk-perusahaan',
        title: 'A. Ikhtisar Empat Bentuk Perusahaan',
        content: [
          'Dalam lalu lintas perniagaan di Indonesia yang bersumber pada hukum perdata dan dagang, dikenal empat bentuk perusahaan yang dibahas secara mendalam:',
        ],
        table: {
          headers: ['Bentuk Perusahaan', 'Dasar Hukum Rujukan', 'Jumlah Pemilik / Sekutu', 'Sifat Tanggung Jawab'],
          rows: [
            ['1. Perusahaan Dagang (UD)', 'Kemenperindag 23/MPP/KEP/98', '1 orang pengusaha', 'Tidak ada pemisahan kekayaan; tanggung jawab pribadi sepenuhnya.'],
            ['2. Perseroan (Maatschap)', 'Pasal 1618–1652 Buku III BW', '2 orang atau lebih', 'Berdasarkan inbreng; pihak ketiga hanya menuntut sekutu terkait kecuali ada kuasa.'],
            ['3. Persekutuan Firma', 'Pasal 16–35 KUHD', '2 orang atau lebih dengan nama bersama', 'Tanggung jawab renteng untuk seluruhnya atas segala perikatan (Pasal 18 KUHD).'],
            ['4. CV (Commanditaire Vennootschap)', 'Pasal 19–21 KUHD', 'Sekutu Aktif + Sekutu Pasif', 'Sekutu aktif tanggung jawab pribadi; sekutu komanditer terbatas modal yang disetor.'],
          ],
        },
      },
    ],
  },

  // 10 — PERUSAHAAN DAGANG
  {
    id: 10,
    numberStr: 'TOPIK 10',
    title: 'Perusahaan Dagang (Usaha Dagang / UD)',
    shortDesc: 'Regulasi Kepmenperindag No. 23/1998, bentuk usaha perorangan, 6 ciri utama, perizinan, dan kewajiban perpajakan.',
    summaryQuote: 'Perusahaan Dagang adalah bentuk perusahaan perorangan yang dilakukan oleh satu orang pengusaha, bukan badan hukum, dan risiko menjadi tanggungan sendiri.',
    sections: [
      {
        id: 'regulasi-ciri-ud',
        title: 'A. Karakteristik Yuridis Perusahaan Dagang',
        content: [
          'Perusahaan Dagang (sering disebut Usaha Dagang / UD) mengacu pada Keputusan Menteri Perindustrian dan Perdagangan No. 23/MPP/KEP/98 tentang Lembaga Usaha Dagang.',
          'Perusahaan Dagang merupakan bentuk perusahaan perorangan yang dilakukan oleh SATU ORANG PENGUSAHA.',
        ],
        keyPoints: [
          '1. Modal milik 1 orang saja: Seluruh sumber permodalan berasal dari kekayaan pribadi pemilik tunggal.',
          '2. Didirikan atas kehendak seorang pengusaha: Berdiri murni atas inisiatif dan kehendak mandiri satu individu tanpa perlu kesepakatan mitra.',
          '3. Bukan badan hukum dan tidak termasuk persekutuan/perkumpulan: Konsekuensi yuridisnya adalah TIDAK ADA PEMISAHAN KEKAYAAN antara harta usaha dan harta pribadi.',
          '4. Risiko untung dan rugi menjadi tanggungan sendiri: Segala keuntungan dinikmati sendiri, dan bila bangkrut/berutang seluruh harta pribadi menjadi jaminan pelunasan.',
          '5. Tidak melalui proses pendirian perusahaan sebagaimana mestinya: Cukup mengurus surat izin usaha dari kantor perdagangan setempat (namun didaftarkan di kepaniteraan pengadilan negeri setempat).',
          '6. Wajib membuat catatan keuangan: Termasuk memiliki kewajiban kepatuhan terhadap pembayaran pajak dan retribusi daerah.',
        ],
      },
    ],
  },

  // 11 — PERSEROAN / MAATSCHAP
  {
    id: 11,
    numberStr: 'TOPIK 11',
    title: 'Perseroan Perdata (Maatschap)',
    shortDesc: 'Pasal 1618–1652 Buku III BW, pendirian lisan, inbreng, pembagian untung seimbang, hubungan pihak ketiga (Ps 1636), dan pembubaran (Ps 1646, 1651).',
    summaryQuote: 'Suatu persetujuan 2 orang atau lebih mengikatkan diri memasukkan sesuatu (inbreng) ke dalam persekutuan dengan maksud membagi keuntungan.',
    sections: [
      {
        id: 'pengertian-maatschap',
        title: 'A. Pengertian dan Dasar Hukum Perseroan (Maatschap)',
        content: [
          'Perseroan perdata (Maatschap) diatur secara terperinci dalam Pasal 1618 hingga Pasal 1652 Buku III BW.',
          'Maatschap merupakan suatu bentuk perjanjian bernama. Definisinya adalah suatu persetujuan di mana dua orang atau lebih mengikatkan dirinya untuk memasukkan sesuatu (inbreng) ke dalam persekutuan dengan maksud membagi keuntungan yang diperoleh karenanya.',
        ],
        keyPoints: [
          'Pendirian Cukup Secara Lisan: Untuk mendirikan perseroan cukup secara lisan. Akta pendirian tertulis atau akta notaris TIDAK DIMINTA oleh undang-undang (bersifat konsensuil murni).',
          'Tujuan Menjalankan Pekerjaan Bersama: Perseroan memiliki tujuan antara lain menjalankan bersama-sama suatu pekerjaan profesi bebas (Contoh: persekutuan profesi Pengacara / Advokat, Notaris, Dokter, atau Akuntan).',
          'Pembagian Keuntungan (Pasal 1633 BW): Bagian masing-masing sekutu adalah seimbang sesuai dengan inbreng (pemasukan modal/tenaga) yang dimasukkan.',
        ],
      },
      {
        id: 'hubungan-pihak-ketiga',
        title: 'B. Hubungan dengan Pihak Ketiga (Pasal 1636 BW)',
        content: [
          'Mengenai perikatan eksternal dengan pihak ketiga, berlaku ketentuan ketat menurut Pasal 1636 BW:',
          'Ketika ada 1 persero melakukan perikatan dengan pihak ketiga, apabila timbul kerugian, maka pihak ketiga HANYA BISA MENUNTUT KEPADA 1 SEKUTU TADI.',
          'Beda halnya apabila sekutu lain telah memberikan surat kuasa. Jika ada kuasa dari sekutu lain, maka apabila terjadi kerugian, pihak ketiga baru dapat menuntut kepada seluruh sekutu perseroan.',
        ],
      },
      {
        id: 'berakhirnya-maatschap',
        title: 'C. Berakhirnya Perseroan Menurut Pasal 1646 & 1651 BW',
        content: [
          'Pasal 1646 BW merumuskan empat sebab berakhirnya persekutuan perdata:',
        ],
        keyPoints: [
          '1. Lewatnya waktu untuk mana perseroan telah diadakan (masa perjanjian habis).',
          '2. Musnahnya barang yang menjadi pokok perseroan atau selesainya usaha pokok.',
          '3. Atas kehendak bersama dari beberapa atau seluruh sekutu untuk membubarkan diri.',
          '4. Berdasarkan Pasal 1651 BW: Apabila ada anggota yang meninggal dunia, perseroan dapat terus berjalan jika diperjanjikan bahwa kedudukan orang yang meninggal digantikan oleh ahli warisnya.',
          'Pemisahan dan Pembagian Harta: Jika perseroan berakhir, maka diadakanlah pemisahan dan pembagian harta bersama (likuidasi aset) kepada masing-masing sekutu.',
        ],
      },
    ],
  },

  // 12 — PERSEKUTUAN FIRMA
  {
    id: 12,
    numberStr: 'TOPIK 12',
    title: 'Persekutuan Firma (Fa)',
    shortDesc: 'Definisi firma, 3 unsur mutlak Prof. Sukardono, pendirian konsensuil vs pendaftaran PN (Ps 23, 26), tanggung jawab renteng (Ps 18), dan pembubaran (Ps 31).',
    summaryQuote: 'Persekutuan perdata yang didirikan untuk menjalankan perusahaan dengan nama bersama, di mana tiap sekutu bertanggung jawab renteng untuk seluruhnya.',
    sections: [
      {
        id: 'definisi-unsur-firma',
        title: 'A. Pengertian dan Tiga Unsur Mutlak Prof. Sukardono',
        content: [
          'Persekutuan Firma adalah setiap persekutuan perdata yang didirikan untuk menjalankan perusahaan dengan nama bersama (Pasal 16 KUHD).',
          'Dalam hubungan dengan pihak ketiga, perbuatan persero mengikat seluruh persero dalam menjalankan perusahaan.',
          'Menurut Prof. Sukardono, terdapat 3 UNSUR MUTLAK dalam Firma:',
        ],
        keyPoints: [
          '1. Menjalankan perusahaan (adanya kontinuitas aktivitas usaha mencari laba).',
          '2. Dengan pemakaian firma / nama bersama (satu nama yang dipakai bersama oleh sekutu untuk berniaga).',
          '3. Pertanggungjawaban tiap-tiap sekutu untuk seluruhnya mengenai perikatan dengan firma (tanggung jawab renteng / hoofdelijk voor het geheel).',
        ],
      },
      {
        id: 'pendirian-inkonsistensi',
        title: 'B. Cara Pendirian dan Inkonsistensi Regulasi KUHD',
        content: [
          'Mengenai pendirian Firma, materi resmi mengidentifikasi adanya ketidakkonsistenan yuridis dalam KUHD:',
          '1. Pada prinsipnya, seperti halnya perseroan perdata, pendirian firma CUKUP DENGAN PERJANJIAN KONSENSUIL. Syarat tertulis tidak diminta oleh KUHD secara mutlak; akta tertulis hanya berfungsi membuktikan kedudukan anggota firma.',
          '2. Namun demikian, ditemukan inkonsistensi norma:',
        ],
        keyPoints: [
          'Pasal 23 KUHD: Mensyaratkan pendaftaran akta pendirian firma di Kepaniteraan Pengadilan Negeri di daerah hukum kedudukan firma tersebut.',
          'Pasal 26 KUHD: Menentukan isi yang wajib dimuat di dalam akta pendirian tersebut.',
          'Pasal 28 & 29 KUHD: Mengharuskan pengumuman dalam Berita Negara agar pihak ketiga mengetahui batas kewenangan sekutu.',
        ],
      },
      {
        id: 'tanggung-jawab-pembubaran',
        title: 'C. Hak Bertindak Keluar, Tanggung Jawab Renteng, dan Pembubaran',
        content: [
          'Karakteristik operasional dan pertanggungjawaban anggota firma diatur secara tegas:',
        ],
        keyPoints: [
          'Hak Bertindak Keluar: Setiap anggota firma berhak untuk bertindak keluar atas nama perseroan. Segala perjanjian yang diadakan oleh seorang anggota mengikat anggota-anggota lain.',
          'Tanggung Jawab Renteng (Pasal 18 KUHD): Tiap-tiap persero bertanggung jawab renteng untuk seluruhnya atas segala perikatan firma ("tiap-tiap persero bertanggung jawab secara pribadi untuk keseluruhan kewajiban firma"). Harta pribadi sekutu dapat disita untuk membayar utang firma.',
          'Pembubaran (Pasal 31 KUHD): Pembubaran firma harus dilakukan dengan akta otentik, didaftarkan pada Pengadilan Negeri, dan diumumkan dalam Berita Negara Republik Indonesia. Apabila pembubaran tidak dibuat dengan akta otentik dan tidak didaftarkan/diumumkan, maka sifatnya HANYA BERLAKU INTERNAL antar para sekutu dan tidak dapat dijadikan dalih terhadap pihak ketiga.',
        ],
      },
    ],
  },

  // 13 — COMMANDITAIRE VENNOOTSCHAP (CV)
  {
    id: 13,
    numberStr: 'TOPIK 13',
    title: 'Commanditaire Vennootschap (CV)',
    shortDesc: 'Persekutuan komanditer, perbandingan sekutu komplementer (aktif) vs komanditer (pasif), dan akibat hukum keterlibatan sekutu komanditer.',
    summaryQuote: 'Sekutu komanditer tidak boleh melakukan pengurusan; pelanggaran larangan ini otomatis mengubah kedudukannya menjadi sekutu komplementer dengan tanggung jawab pribadi.',
    sections: [
      {
        id: 'dua-jenis-sekutu',
        title: 'A. Dua Jenis Sekutu dalam CV',
        content: [
          'Commanditaire Vennootschap (CV) adalah persekutuan perdata yang terbentuk antara satu atau lebih sekutu yang bertanggung jawab renteng dengan satu atau lebih sekutu pelepas uang (komanditer).',
          'Terdapat dua posisi sekutu yang berbeda secara kontras dalam CV:',
        ],
        table: {
          headers: ['Aspek Pembeda', 'Sekutu Komplementer (Aktif)', 'Sekutu Komanditer (Pasif / Pelepas Uang)'],
          rows: [
            ['Peran / Posisi', 'Menjalankan pengurusan perusahaan (direktur operasional).', 'Hanya menyetor modal usaha (sleeping partner).'],
            ['Kewenangan Manajerial', 'Berwenang mengurus, membuat kontrak, dan bertindak keluar mewakili CV.', 'DILARANG KERAS melakukan pengurusan perusahaan.'],
            ['Setoran Modal', 'Menyetor modal dan/atau keahlian / tenaga.', 'Hanya menyetor modal (uang / barang).'],
            ['Tanggung Jawab Hukum', 'Tanggung jawab renteng hingga pada HARTA PRIBADI (unlimited liability).', 'Tanggung jawab TERBATAS HANYA SEBATAS MODAL yang disetorkan (limited liability).'],
          ],
        },
      },
      {
        id: 'sanksi-komanditer-mengurus',
        title: 'B. Larangan Pengurusan bagi Sekutu Komanditer',
        content: [
          'Undang-undang melarang sekutu komanditer bertindak keluar atau mengurus jalannya perusahaan:',
        ],
        highlightBox: {
          title: 'AKIBAT HUKUM PELANGGARAN PENGURUSAN OLEH SEKUTU KOMANDITER',
          text: 'Sekutu komanditer tidak boleh melakukan pengurusan perusahaan. Apabila larangan ini dilanggar, maka SECARA OTOMATIS MERUBAH POSISINYA MENJADI SEKUTU KOMPLEMENTER. Konsekuensinya, ketika terjadi kerugian atau kewajiban utang, tanggung jawabnya mengikat hingga pada harta pribadi!',
        },
      },
    ],
  },

  // 14 — PERANTARA DAGANG
  {
    id: 14,
    numberStr: 'TOPIK 14',
    title: 'Perantara Dagang (Makelar & Komisioner)',
    shortDesc: 'Konsep perantara dagang, regulasi Makelar (Ps 62–73 KUHD), regulasi Komisioner (Ps 76–86 KUHD), dan tabel perbandingan komparatif.',
    summaryQuote: 'Perantara dagang adalah penghubung antara principal dengan pihak ketiga dalam kegiatan perniagaan/perdagangan.',
    sections: [
      {
        id: 'pengertian-perantara',
        title: 'A. Konsep Perantara Dagang',
        content: [
          'Dalam lalu lintas perdagangan yang kompleks, para pelaku usaha seringkali memanfaatkan jasa pihak ketiga yang bertindak menjembatani transaksi.',
          'Perantara dagang didefinisikan sebagai penghubung antara prinsipal (pemberi kuasa) dengan pihak ketiga dalam kegiatan perniagaan / perdagangan.',
          'KUHD mengatur dua bentuk perantara dagang yang sangat penting, yaitu Makelar dan Komisioner.',
        ],
      },
      {
        id: 'makelar-dan-komisioner',
        title: 'B. Makelar vs Komisioner Menurut KUHD',
        content: [
          'Masing-masing perantara memiliki karakteristik, status pengangkatan, dan konsekuensi pertanggungjawaban yang berbeda:',
        ],
        comparisonBoxes: [
          {
            title: 'Makelar (Pasal 62–73 KUHD)',
            description: 'Pedagang perantara resmi yang diangkat dan disumpah',
            items: [
              'Adalah seorang pedagang perantara yang diangkat oleh Presiden atau oleh pejabat yang oleh Presiden telah dinyatakan berwenang untuk itu.',
              'Harus bersumpah di hadapan Pengadilan Negeri sebelum menjalankan tugas.',
              'Bertugas menutup persetujuan jual beli atas perintah dan ATAS NAMA ORANG-ORANG (PRINSIPAL) dengan siapa ia tidak mempunyai hubungan kerja yang tetap.',
              'Risiko transaksi ditanggung langsung oleh PRINSIPAL.',
              'Mempunyai hak berupa KOMISI (upah makelar / provisi) dan HAK RETENSI.',
            ],
          },
          {
            title: 'Komisioner (Pasal 76–86 KUHD)',
            description: 'Pengusaha yang bertindak atas nama firma sendiri',
            items: [
              'Adalah pengusaha yang menyelenggarakan perusahaannya dengan melakukan perbuatan menutup persetujuan ATAS NAMA FIRMA DIA SENDIRI, tetapi atas kuasa dan tanggungan orang lain (komiten).',
              'Pengangkatan dan sumpah resmi TIDAK ADA (cukup perikatan komersial biasa).',
              'Pihak ketiga tidak mengetahui siapa komiten di baliknya.',
              'Risiko transaksi pada pihak ketiga DITANGGUNG OLEH KOMISIONER.',
              'Mempunyai hak berupa KOMISI, HAK RETENSI, dan HAK PRIVILEGE (hak istimewa pelunasan).',
            ],
          },
        ],
      },
      {
        id: 'tabel-perbedaan-perantara',
        title: 'C. Tabel Perbandingan Makelar vs Komisioner',
        content: [
          'Berdasarkan sumber materi halaman 6, perbandingan kedua perantara dagang ini dapat dirangkum secara ringkas:',
        ],
        table: {
          headers: ['Aspek Pembeda', 'Makelar', 'Komisioner'],
          rows: [
            ['1. Pengangkatan', 'Diangkat resmi oleh Presiden/pejabat yang berwenang dan disumpah di PN.', 'Pengangkatan resmi tidak ada.'],
            ['2. Tanggungan Resiko', 'Resiko ditanggung oleh Prinsipal.', 'Resiko ditanggung oleh Komisioner.'],
            ['3. Hak-Hak Yuridis', 'Hak berupa Komisi dan Hak Retensi.', 'Hak berupa Komisi, Hak Retensi, dan Privilege (Hak Istimewa).'],
            ['4. Cara Bertindak', 'Bertindak atas nama Prinsipal.', 'Bertindak atas nama firma dia sendiri (nama sendiri).'],
          ],
        },
      },
    ],
  },

  // 15 — JUAL BELI PERUSAHAAN DAN L/C
  {
    id: 15,
    numberStr: 'TOPIK 15',
    title: 'Jual Beli Perusahaan & Mekanisme Letter of Credit (L/C)',
    shortDesc: 'Definisi jual beli perusahaan, 5 tahapan prosedural penerbitan L/C, dan berlakunya Article 2 UCP 600.',
    summaryQuote: 'Jual beli perusahaan adalah perjanjian jual beli dalam dunia perniagaan antara pihak yang melakukan perniagaan sebagai pekerjaan sehari-hari.',
    sections: [
      {
        id: 'pengertian-jbp',
        title: 'A. Pengertian Jual Beli Perusahaan',
        content: [
          'Materi resmi mendefinisikan Jual Beli Perusahaan sebagai:',
          'Perjanjian jual beli yang terjadi dalam dunia perniagaan, yaitu antara orang-orang yang telah melakukan perniagaan sebagai pekerjaan sehari-hari.',
          'Transaksi ini biasanya melibatkan volume besar, nilai nominal tinggi, dan pergerakan barang lintas batas yang memerlukan jaminan kepastian pembayaran serta kepastian penyerahan dokumen.',
        ],
      },
      {
        id: 'mekanisme-lc',
        title: 'B. Mekanisme Pembayaran Melalui Letter of Credit (L/C)',
        content: [
          'Dalam transaksi perdagangan, terutama ekspor-impor, mekanisme pembayaran yang paling aman menggunakan Letter of Credit (L/C).',
          'Prosedur penerbitan L/C berjalan menurut 5 tahapan berurutan:',
        ],
        keyPoints: [
          'Tahap 1: Penjual (Eksportir) dan pembeli (Importir) menyepakati kontrak jual beli barang (sales contract).',
          'Tahap 2: Dalam klausula kontrak tersebut, penjual secara eksplisit menyebutkan bahwa pembayaran dilakukan menggunakan L/C.',
          'Tahap 3: Jika pembeli setuju, maka pembeli akan menghubungi bank-nya (Bank Pembeli / Issuing Bank) dan memohon bank tersebut menerbitkan L/C untuk penjual.',
          'Tahap 4: Jika bank pembeli setuju menerbitkan L/C untuk kepentingan penjual, maka L/C dibuka dan diteruskan kepada bank penjual.',
          'Tahap 5: Dengan terbit dan berlakunya L/C tersebut, maka secara internasional berlaku aturan baku Article 2 UCP 600 (Uniform Customs and Practice for Documentary Credits).',
        ],
        highlightBox: {
          title: 'PRINSIP INDEPENDENSI L/C (ARTICLE 2 UCP 600)',
          text: 'Berdasarkan UCP 600, L/C merupakan janji pembayaran bank yang bersifat terpisah dan independen dari kontrak dasar jual beli barang. Bank berurusan dengan dokumen-dokumen yang diajukan (bill of lading, invoice, sertifikat asuransi), bukan berurusan dengan fisik barang dagangan.',
        },
      },
    ],
  },

  // 16 — SYARAT PENYERAHAN BARANG
  {
    id: 16,
    numberStr: 'TOPIK 16',
    title: 'Syarat Penyerahan Barang (LOCO, FRANCO, F.O.B, C.I.F)',
    shortDesc: 'Klausula baku penyerahan barang dalam perdagangan: syarat LOCO, FRANCO, F.O.B, dan C.I.F beserta distribusi biaya dan risiko.',
    summaryQuote: 'Empat syarat penyerahan standar perdagangan: LOCO (gudang penjual), FRANCO (gudang pembeli), F.O.B (di atas kapal), dan C.I.F (biaya, asuransi, tambang).',
    sections: [
      {
        id: 'empat-syarat-penyerahan',
        title: 'A. Empat Syarat Standar Penyerahan Barang Dagang',
        content: [
          'Dalam jual beli perniagaan, penentuan titik penyerahan barang (delivery point) sangat penting untuk menentukan kapan hak beralih, siapa yang membayar ongkos angkut, dan siapa yang menanggung risiko kerusakan:',
        ],
        keyPoints: [
          '1. Syarat LOCO: Pembeli datang ke tempat penjual, membeli, dan menerima penyerahan barang di tempat penjual di mana barang yang dibeli itu disimpan. Pembeli menanggung semua biaya pengangkutan dari gudang penjual sampai dengan gudang pembeli.',
          '2. Syarat FRANCO: Merupakan kebalikan dari LOCO. Penjual yang harus menyerahkan barang ke tempat pembeli (gudang pembeli). Seluruh biaya pengangkutan dan risiko pengiriman ditanggung oleh penjual hingga barang tiba di tujuan.',
          '3. Syarat F.O.B (Free On Board): Penjual menyerahkan barang di atas kapal yang disediakan oleh pembeli di pelabuhan muat. Pembeli dibebaskan dari tanggung jawab atas barang sampai barang berada di atas kapal. Setelah barang melintasi pagar kapal/berada di atas kapal, risiko dan biaya perjalanan laut beralih kepada pembeli.',
          '4. Syarat C.I.F (Cost, Insurance, and Freight): Syarat penyerahan di mana penjual bertanggung jawab membayar harga barang (cost), biaya pengiriman/tambang laut (freight), dan asuransi kerugian barang (insurance) yang dikirim atau dijual sampai ke pelabuhan tujuan/gudang pembeli.',
        ],
      },
      {
        id: 'tabel-perbandingan-syarat',
        title: 'B. Tabel Komparasi Syarat Penyerahan Barang',
        content: [
          'Ringkasan komparatif keempat klausula syarat penyerahan barang menurut sumber materi resmi:',
        ],
        table: {
          headers: ['Istilah / Term', 'Pihak yang Menyerahkan', 'Lokasi Penyerahan', 'Tanggungan Biaya & Resiko'],
          rows: [
            ['LOCO', 'Pembeli mengambil sendiri ke penjual.', 'Di tempat/gudang penjual.', 'Pembeli menanggung semua biaya dari gudang penjual ke gudang pembeli.'],
            ['FRANCO', 'Penjual mengantar barang.', 'Di tempat/gudang pembeli.', 'Penjual menanggung seluruh biaya dan resiko hingga barang tiba di pembeli.'],
            ['F.O.B (Free On Board)', 'Penjual menyerahkan di atas kapal.', 'Di atas kapal pembeli di pelabuhan muat.', 'Penjual menanggung hingga barang di atas kapal; setelah itu resiko milik pembeli.'],
            ['C.I.F (Cost, Insurance, Freight)', 'Penjual menanggung pengiriman.', 'Pelabuhan/gudang tujuan pembeli.', 'Penjual menanggung biaya barang, ongkos angkut (freight), dan premi asuransi kerugian.'],
          ],
        },
      },
    ],
  },

  // 17 — PEMBAHASAN SOAL & STUDI KASUS YURIDIS
  {
    id: 17,
    numberStr: 'TOPIK 17',
    title: 'Pembahasan Soal & Studi Yuridis Resmi',
    shortDesc: 'Kajian mendalam Asas Konkordansi, sejarah kodifikasi KUHD, 4 sumber hukum dagang, objek hukum dagang, serta tanya jawab ujian komprehensif.',
    summaryQuote: 'Kajian sejarah kodifikasi KUHD, asas konkordansi Belanda-Indonesia, sumber hukum dagang, dan analisis kasus perniagaan dari materi resmi.',
    sections: [
      {
        id: 'sejarah-konkordansi',
        title: 'A. Sejarah Perkembangan dan Asas Konkordansi KUHD',
        content: [
          'Bagian Pembahasan Soal dalam sumber materi mengupas sejarah berlakunya Hukum Dagang di Indonesia:',
          '1. Berdasarkan Asas Konkordansi (concordantie-beginsel), peraturan hukum Pemerintah Kolonial Belanda diberlakukan di Hindia Belanda (Indonesia).',
          '2. Sejarah Kodifikasi KUHD di Indonesia:',
        ],
        keyPoints: [
          'Diberlakukan di Indonesia pada tahun 1847 (atau diundangkan 1848/1849) berdasarkan asas konkordansi.',
          'Alur Konkordansi: Code de Commerce (CC) Prancis 1807 → Wetboek van Koophandel (WvK) Belanda 1839 → Kitab Undang-Undang Hukum Dagang (KUHD) Indonesia 1847/1849.',
          'Struktur Awal: Awalnya KUHD terdiri dari 3 Buku, yaitu: (1) Tentang Dagang pada Umumnya, (2) Tentang Hak dan Kewajiban yang Terbit dari Pelayaran, dan (3) Tentang Kepailitan.',
          'Tahun 1906: Buku ke-3 tentang Kepailitan dicabut dan dihapus dari KUHD, kemudian diatur tersendiri dalam Faillissements-verordening (Peraturan Kepailitan tersendiri). Sehingga KUHD kini hanya terdiri dari 2 Buku.',
          'Tahun 1938: Pasal 2 sampai Pasal 5 WvK dicabut berdasarkan Staatsblad No. 276 Tahun 1938.',
        ],
      },
      {
        id: 'sumber-hukum-dagang',
        title: 'B. Sumber-Sumber Hukum Dagang di Indonesia',
        content: [
          'Materi resmi membagi sumber hukum dagang di Indonesia ke dalam empat pilar rujukan:',
        ],
        keyPoints: [
          '1. Hukum Tertulis yang Dikodifikasi: Seperti KUHD (Kitab Undang-Undang Hukum Dagang), KUHPerdata / BW (Buku III tentang Perikatan), serta undang-undang tersendiri seperti UU No. 40 Tahun 2007 tentang Perseroan Terbatas, UU No. 3 Tahun 1982 tentang WDP, UU Kepailitan, dll.',
          '2. Yurisprudensi: Yaitu putusan-putusan hakim pengadilan terdahulu yang berkekuatan hukum tetap yang menciptakan norma hukum baru dalam praktik perniagaan.',
          '3. Perjanjian: Merupakan sumber hukum dagang yang PALING UTAMA, karena transaksi bisnis lahir dan mengikat para pihak berdasarkan klausula kesepakatan kontrak mereka (Pasal 1338 BW).',
          '4. Doktrin: Ajaran atau pendapat para sarjana hukum terkemuka yang menjadi rujukan dalam menafsirkan aturan hukum dagang.',
        ],
      },
      {
        id: 'objek-hukum-dagang',
        title: 'C. Objek Hukum Dagang',
        content: [
          'Apakah perbedaan antara Objek Hukum Perdata dengan Objek Hukum Dagang?',
        ],
        highlightBox: {
          title: 'DEFINISI OBJEK HUKUM DAGANG MENURUT SUMBER RESMI',
          text: 'Objek hukum dagang sama dengan objek hukum perdata, yaitu segala benda dan atau hak yang dapat dimiliki oleh subjek hukum. Bedanya adalah objek hukum dagang HARUS DAPAT DIPERDAGANGKAN ATAU DIUSAHAKAN UNTUK MENCARI KEUNTUNGAN (komersial).',
        },
      },
    ],
  },
];
