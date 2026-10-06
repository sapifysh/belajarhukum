import { Topic } from './hukumIslamData';

export const HUKUM_PTUN_METADATA = {
  courseCode: 'HKO60024',
  credits: '3 SKS',
  faculty: 'Fakultas Hukum',
  syllabus: 'Silabus Komprehensif Topik 1 – 34',
  lecturer: 'Amelia Ayu Paramitha, S.H., M.H.',
  format: 'Panduan Belajar Komprehensif Hukum Acara PTUN',
  coverage: 'Topik 01 – 34 & Latihan Soal Komprehensif (Berdasarkan HAPTUN Amelia.pptx)',
  references: [
    'Bahan Perkuliahan Hukum Acara PTUN — Amelia Ayu Paramitha, S.H., M.H.',
    'UU No. 5 Tahun 1986 jo. UU No. 9 Tahun 2004 jo. UU No. 51 Tahun 2009 tentang Peradilan Tata Usaha Negara',
    'UU No. 30 Tahun 2014 tentang Administrasi Pemerintahan',
    'Peraturan Mahkamah Agung (PERMA) No. 6 Tahun 2018 tentang Pedoman Penyelesaian Sengketa Administrasi Pemerintahan Setelah Terjadinya Upaya Administratif',
    'Peraturan Mahkamah Agung (PERMA) No. 1 Tahun 2019 jo. No. 7 Tahun 2022 tentang Administrasi Perkara dan Persidangan di Pengadilan Secara Elektronik (e-Court)',
  ],
};

export const PTUN_TOPICS_DATA: Topic[] = [
  // 01 — LATAR BELAKANG DAN URGENSI PERADILAN ADMINISTRASI
  {
    id: 1,
    numberStr: 'TOPIK 01',
    title: 'Latar Belakang dan Urgensi Peradilan Administrasi',
    shortDesc: 'Wewenang pemerintahan, konsepsi welfare state, potensi benturan penguasa vs warga, pelembagaan judicial control, serta maksud dan tujuan dibentuknya PTUN.',
    summaryQuote: 'Peradilan Tata Usaha Negara dibentuk untuk melembagakan kontrol yuridis (judicial control) terhadap tindakan pemerintahan guna mencegah maladministrasi dan penyalahgunaan wewenang (abuse of power).',
    sections: [
      {
        id: 'urgensi-dan-welfare-state',
        title: 'A. Kewenangan Pemerintahan dalam Konsepsi Negara Hukum Kesejahteraan (Welfare State)',
        content: [
          'Dalam konsep negara hukum materiil atau negara kesejahteraan (welfare state / verzorgingsstaat), pemerintah tidak lagi semata-mata bertindak sebagai penjaga malam (nachtwakersstaat) yang pasif. Pemerintah diberi mandat luas dan kewenangan aktif untuk menyelenggarakan kesejahteraan umum (bestuurszorg).',
          'Kewenangan luas tersebut memberikan otoritas kepada badan atau pejabat administrasi negara untuk melakukan tindakan-tindakan pemerintahan (bestuurshandeling), baik yang bersifat menetapkan kebijakan (regeling), mengeluarkan ketetapan konkret (beschikking), maupun melakukan tindakan faktual (feitelijke handeling).',
        ],
        keyPoints: [
          'Potensi Benturan Kepentingan: Perluasan wewenang pemerintahan membuka peluang terjadinya gesekan atau sengketa antara kepentingan warga masyarakat dengan kebijakan atau tindakan penguasa.',
          'Pencegahan Maladministrasi: Dibutuhkan mekanisme hukum untuk mengoreksi tindakan birokrasi yang menyimpang dari prosedur hukum positif.',
          'Pencegahan Penyalahgunaan Wewenang (Abuse of Power): Mencegah terjadinya tindakan sewenang-wenang (willekeur) dan penggunaan wewenang di luar tujuan yang ditentukan undang-undang (détournement de pouvoir).',
          'Pelembagaan Kontrol Yudisial: Peradilan administrasi hadir sebagai instrumen kontrol yuridis (judicial control) yang independen, imparsial, dan memiliki kekuatan eksekutorial mengikat.',
        ],
      },
      {
        id: 'maksud-dan-tujuan-ptun',
        title: 'B. Maksud dan Tujuan Dibentuknya PTUN',
        content: [
          'Pembentukan Peradilan Tata Usaha Negara di Indonesia tidak hanya bersandar pada alasan teknis operasional perkara, melainkan memiliki empat dimensi fundamental:',
        ],
        table: {
          headers: ['Dimensi Fundamental', 'Maksud & Tujuan Yuridis', 'Implementasi dalam Penegakan Hukum'],
          rows: [
            [
              '1. Dimensi Politis',
              'Kontrol demokratis terhadap kekuasaan eksekutif.',
              'Mencegah otoritarianisme birokrasi dan memastikan pemerintahan dijalankan atas dasar hukum, bukan kehendak sepihak pejabat.'
            ],
            [
              '2. Dimensi Sosiologis',
              'Penyelesaian sengketa penguasa dan warga secara berimbang.',
              'Menjamin keadilan substantif bagi masyarakat pencari keadilan dan memulihkan hak-hak warga yang dirugikan oleh aparat negara.'
            ],
            [
              '3. Dimensi Normatif',
              'Penegakan asas legalitas dalam administrasi negara.',
              'Menjadi instrumen penguji keabsahan tindakan pemerintah berdasarkan peraturan perundang-undangan dan AUPB.'
            ],
            [
              '4. Dimensi Filosofis',
              'Harmonisasi perlindungan hak asasi dan ketertiban umum.',
              'Menyeimbangkan antara penghormatan atas hak asasi individu dengan efektivitas penyelenggaraan kepentingan umum.'
            ]
          ]
        },
      },
    ],
  },

  // 02 — PENGERTIAN HUKUM ACARA PTUN
  {
    id: 2,
    numberStr: 'TOPIK 02',
    title: 'Pengertian Hukum Acara PTUN',
    shortDesc: 'Rangkaian norma hukum formil yang mengatur para pihak, objek sengketa, tata cara litigasi, serta relasi integratif antara HTUN, PTUN, KTUN, dan Hukum Acara PTUN.',
    summaryQuote: 'Hukum Acara PTUN adalah keseluruhan norma hukum formil yang mengatur tata cara penyelesaian sengketa tata usaha negara di hadapan peradilan administrasi.',
    sections: [
      {
        id: 'definisi-hukum-acara-ptun',
        title: 'A. Ruang Lingkup Hukum Acara PTUN',
        content: [
          'Hukum Acara Peradilan Tata Usaha Negara (Hukum Acara PTUN) merupakan hukum formal administrasi negara yang mengatur secara komprehensif tata cara penegakan hukum materiel.',
          'Hukum Acara PTUN mencakup serangkaian norma yang mengatur empat pilar utama litigasi administrasi:',
        ],
        keyPoints: [
          '1. Para Pihak yang Bersengketa (Subjek): Mengatur siapa yang memiliki hak hukum untuk menggugat (Penggugat) dan badan/pejabat mana yang dapat ditarik sebagai Tergugat, serta kedudukan pihak ketiga (Intervensi).',
          '2. Objek Sengketa (Objek): Mengatur batasan yuridis apa saja yang dapat dijadikan pokok gugatan, yaitu Keputusan Tata Usaha Negara (KTUN) dan Tindakan Pemerintahan.',
          '3. Tata Cara Berperkara (Hukum Acara / Litigasi): Mengatur tahapan pemeriksaan perkara sejak pendaftaran gugatan, dismissal, pemeriksaan persiapan, pembuktian, hingga pengucapan putusan.',
          '4. Upaya Hukum (Legal Remedies): Mengatur mekanisme keberatan internal peradilan (verzet), upaya hukum biasa (banding, kasasi), serta upaya hukum luar biasa (peninjauan kembali).',
        ],
      },
      {
        id: 'relasi-htun-ptun-ktun',
        title: 'B. Relasi Integratif: HTUN, PTUN, KTUN, dan Hukum Acara PTUN',
        content: [
          'Keempat konsep dasar ini membentuk satu ekosistem hukum administrasi negara yang tidak terpisahkan:',
        ],
        table: {
          headers: ['Istilah Hukum', 'Kedudukan Yuridis', 'Peran & Hubungan Fungsional'],
          rows: [
            ['HTUN (Hukum Tata Usaha Negara)', 'Hukum Materiel', 'Mengatur kewenangan, tugas, hak, dan kewajiban pejabat administrasi pemerintahan dalam menyelenggarakan negara.'],
            ['KTUN (Keputusan Tata Usaha Negara)', 'Objek Sengketa', 'Produk hukum konkret penetapan tertulis pejabat TUN yang berpotensi melanggar norma HTUN dan merugikan warga.'],
            ['PTUN (Pengadilan Tata Usaha Negara)', 'Lembaga / Organ Yudisial', 'Badan peradilan pelaksana kekuasaan kehakiman di bawah Mahkamah Agung yang berwenang memeriksa dan memutus sengketa TUN.'],
            ['Hukum Acara PTUN', 'Hukum Formil', 'Instrumen prosedural yang menggerakkan PTUN untuk menguji dan membatalkan KTUN yang melanggar norma HTUN materiil.']
          ]
        },
      },
    ],
  },

  // 03 — KEDUDUKAN DAN STRUKTUR PERATUN
  {
    id: 3,
    numberStr: 'TOPIK 03',
    title: 'Kedudukan dan Struktur Organisasi Peratun',
    shortDesc: 'Struktur hierarki peradilan administrasi negara di Indonesia dari Pengadilan Pertama, Pengadilan Tinggi, hingga Mahkamah Agung dalam sistem satu atap.',
    summaryQuote: 'Kekuasaan kehakiman di lingkungan Peradilan Tata Usaha Negara berpuncak pada Mahkamah Agung sebagai pengadilan negara tertinggi dalam sistem satu atap (one roof system).',
    sections: [
      {
        id: 'hierarki-struktur-peratun',
        title: 'A. Bagan Hierarki Peradilan Tata Usaha Negara',
        content: [
          'Berdasarkan Undang-Undang Pokok Kekuasaan Kehakiman dan UU Peratun, struktur organisasi peradilan tata usaha negara tersusun secara hierarkis:',
        ],
        highlightBox: {
          title: 'HIERARKI TIGA TINGKATAN PERADILAN ADMINISTRASI',
          text: 'MAHKAMAH AGUNG (Puncak Kasasi & Peninjauan Kembali)\n       ↓\nPENGADILAN TINGGI TATA USAHA NEGARA (PTTUN — Tingkat Banding & Sengketa Administratif Khusus)\n       ↓\nPENGADILAN TATA USAHA NEGARA (PTUN — Tingkat Pertama di Kabupaten/Kota)',
        },
        keyPoints: [
          'Pengadilan Tata Usaha Negara (PTUN): Berkedudukan di ibu kota kabupaten/kota dengan daerah hukum meliputi wilayah kabupaten/kota bersangkutan. Berfungsi sebagai pengadilan tingkat pertama yang memeriksa fakta dan hukum.',
          'Pengadilan Tinggi Tata Usaha Negara (PTTUN): Berkedudukan di ibu kota provinsi dengan daerah hukum meliputi wilayah satu atau beberapa provinsi. Berfungsi memeriksa perkara banding dan sengketa kewenangan tertentu.',
          'Mahkamah Agung (MA): Pengadilan kasasi tertinggi yang menjaga kesatuan penerapan hukum (rechtseenheid) dan membawahi pembinaan organisasi, administrasi, dan finansial seluruh badan peradilan.',
        ],
      },
      {
        id: 'perlindungan-ganda',
        title: 'B. Fungsi Perlindungan Hak Individu dan Kepentingan Masyarakat',
        content: [
          'Eksistensi struktur Peratun menjalankan fungsi perlindungan ganda (dual protection):',
          '1. Perlindungan Hak-Hak Perseorangan: Memberikan akses keadilan bagi individu warga negara yang hak keperdataannya dilanggar oleh keputusan pejabat yang sewenang-wenang.',
          '2. Perlindungan Kepentingan Umum: Memastikan bahwa kebijakan publik dan pelaksanaan urusan pemerintahan tidak melenceng dari batas-batas kepentingan masyarakat luas.',
        ],
      },
    ],
  },

  // 04 — SUBJEK SENGKETA TUN
  {
    id: 4,
    numberStr: 'TOPIK 04',
    title: 'Subjek Sengketa Tata Usaha Negara',
    shortDesc: 'Analisis mendalam kedudukan Penggugat, Tergugat (prinsip "yang digugat adalah jabatannya, bukan pribadi orangnya"), serta Pihak Ketiga (Intervensi).',
    summaryQuote: 'Dalam sengketa TUN, yang ditarik sebagai Tergugat adalah jabatannya, bukan pribadi orangnya.',
    sections: [
      {
        id: 'penggugat-dan-tergugat',
        title: 'A. Penggugat dan Tergugat dalam Sengketa TUN',
        content: [
          'Subjek yang memiliki kedudukan hukum (legal standing) untuk berhadapan di PTUN diatur secara limitatif:',
        ],
        comparisonBoxes: [
          {
            title: '1. PENGGUGAT',
            description: 'Pihak yang dirugikan kepentingannya',
            items: [
              'Orang Perorangan (natuurlijk persoon): Manusia pribadi yang cakap hukum.',
              'Badan Hukum Perdata (rechtspersoon): PT, Koperasi, Yayasan, organisasi masyarakat berbadan hukum.',
              'Syarat Kunci: Kepentingan hukumnya terkena dampak langsung dan dirugikan oleh KTUN atau tindakan pemerintahan yang disengketakan.',
            ],
          },
          {
            title: '2. TERGUGAT',
            description: 'Badan atau Pejabat TUN (Pasal 1 angka 12 UU 51/2009)',
            items: [
              'Badan atau Pejabat TUN yang mengeluarkan keputusan berdasarkan wewenang yang ada padanya atau yang dilimpahkan kepadanya.',
              'Memperoleh wewenang melalui atribusi, delegasi, atau mandat.',
              'PRINSIP FUNDAMENTAL: Yang digugat adalah JABATANNYA, bukan pribadi orangnya.',
            ],
          },
        ],
        highlightBox: {
          title: 'CATATAN YURIDIS UTAMA: JABATAN VS PRIBADI',
          text: 'Gugatan di PTUN diajukan terhadap institusi/fungsi jabatan publik (misal: "Bupati Malang", "Kepala Kantor Pertanahan Kota X"), BUKAN terhadap figur manusia pribadi pejabat tersebut. Apabila terjadi pergantian pejabat selama proses persidangan, gugatan tetap sah berjalan dan mengikat pejabat baru penggantinya.',
        },
      },
      {
        id: 'pihak-ketiga-intervensi',
        title: 'B. Pihak Ketiga dan Masuknya Pihak Ketiga (Intervensi)',
        content: [
          'Dalam sengketa TUN, pihak ketiga yang kepentingannya terpengaruh oleh pembatalan KTUN dapat masuk ke dalam proses persidangan (Pasal 83 UU Peratun jo. Perma No. 6 Tahun 2018):',
        ],
        keyPoints: [
          'Tussenkomst (Menengahi): Pihak ketiga masuk atas kehendak sendiri untuk membela kepentingannya sendiri yang bertentangan dengan pihak Penggugat maupun Tergugat.',
          'Voeging (Menggabungkan Diri): Pihak ketiga masuk untuk membela kepentingannya dengan cara bergabung dan mendukung salah satu pihak (mendukung Penggugat atau mendukung Tergugat).',
          'Inisiatif Hakim: Majelis hakim yang memeriksa perkara juga berwenang memerintahkan pihak ketiga untuk hadir dan didengar keterangannya selama sengketa berlangsung.',
        ],
      },
    ],
  },

  // 05 — WEWENANG BADAN / PEJABAT TUN
  {
    id: 5,
    numberStr: 'TOPIK 05',
    title: 'Wewenang Badan atau Pejabat TUN',
    shortDesc: 'Pengertian Badan/Pejabat TUN menurut Pasal 1 angka 8 UU 51/2009 serta perbandingan komparatif sumber kewenangan: Atribusi, Delegasi, dan Mandat.',
    summaryQuote: 'Kewenangan Badan/Pejabat TUN bersumber dari tiga jalur: Atribusi (pemberian baru oleh UU), Delegasi (pelimpahan wewenang & tanggung jawab), dan Mandat (pelimpahan tugas tanpa pengalihan tanggung jawab).',
    sections: [
      {
        id: 'pengertian-badan-pejabat',
        title: 'A. Pengertian Yuridis Badan atau Pejabat TUN',
        content: [
          'Berdasarkan Pasal 1 angka 8 UU No. 51 Tahun 2009, Badan atau Pejabat Tata Usaha Negara adalah:',
          '"Badan atau Pejabat yang melaksanakan urusan pemerintahan berdasarkan peraturan perundang-undangan yang berlaku."',
          'Unsur kunci dari pengertian ini adalah fungsi yang dijalankan (kriteria fungsional): badan atau entitas apa pun (bahkan swasta sekalipun) yang diberikan mandat untuk menyelenggarakan urusan pemerintahan dikualifikasikan sebagai Badan/Pejabat TUN.',
        ],
      },
      {
        id: 'tiga-sumber-kewenangan',
        title: 'B. Komparasi Tiga Sumber Wewenang Pemerintahan',
        content: [
          'Bahan ajar perkuliahan membedakan secara tegas tiga sumber lahirnya kewenangan bertindak bagi pejabat TUN:',
        ],
        table: {
          headers: ['Aspek Pembeda', 'ATRIBUSI', 'DELEGASI', 'MANDAT'],
          rows: [
            ['Dasar Pemberian', 'Diberikan langsung oleh peraturan perundang-undangan (UUD 1945 atau Undang-Undang).', 'Dilimpahkan dari badan/pejabat TUN yang lebih tinggi kepada yang lebih rendah.', 'Penugasan dari atasan kepada bawahan untuk bertindak atas nama pemberi mandat.'],
            ['Sifat Pelimpahan', 'Kewenangan baru yang murni lahir dari undang-undang.', 'Pelimpahan wewenang; umumnya bersifat permanen.', 'Bukan pelimpahan wewenang; penugasan bersifat sementara.'],
            ['Tanggung Jawab & Tanggung Gugat', 'Berada penuh pada penerima atribusi.', 'Beralih sepenuhnya kepada penerima delegasi (delegataris).', 'TIDAK BERALIH; tanggung jawab tetap berada pada pemberi mandat (mandans).'],
            ['Kedudukan Tergugat di PTUN', 'Pejabat penerima atribusi digugat langsung.', 'Pejabat penerima delegasi yang menandatangani KTUN menjadi Tergugat.', 'Pemberi mandat yang tetap menjadi subjek penanggung jawab hukum.']
          ]
        },
      },
    ],
  },

  // 06 — TINDAKAN HUKUM TATA USAHA NEGARA
  {
    id: 6,
    numberStr: 'TOPIK 06',
    title: 'Tindakan Hukum Tata Usaha Negara',
    shortDesc: 'Konsep dasar rechtshandeling publik, tindakan sepihak berlandaskan asas legalitas, serta akibat hukum yang mengikat subjek hukum.',
    summaryQuote: 'Tindakan hukum TUN adalah perbuatan sepihak bersumber hukum publik yang dilakukan badan/pejabat TUN dan menimbulkan akibat hukum yang mengikat.',
    sections: [
      {
        id: 'esensi-tindakan-hukum',
        title: 'A. Karakteristik Tindakan Hukum Administrasi Pemerintahan',
        content: [
          'Tindakan Hukum Tata Usaha Negara (bestuursrechtshandeling) memiliki karakteristik khusus yang membedakannya dari tindakan hukum keperdataan biasa:',
        ],
        keyPoints: [
          '1. Perbuatan Hukum Bersifat Sepihak (Eenzijdige Rechtshandeling): Lahir atas dasar wewenang penguasa tanpa memerlukan persetujuan dari pihak yang dituju.',
          '2. Berkarakter Hukum Publik: Bersumber pada hukum publik dan dijalankan dalam rangka pelaksanaan fungsi kekuasaan eksekutif / urusan pemerintahan.',
          '3. Berdasarkan Peraturan Perundang-undangan: Wajib bertumpu secara ketat pada asas legalitas (het beginsel van wetmatigheid van bestuur).',
          '4. Menimbulkan Akibat Hukum Nyata: Mengubah tatanan hukum dengan cara melahirkan hak baru, membebankan kewajiban, mencabut status, atau membatalkan izin tertentu.',
        ],
      },
    ],
  },

  // 07 — OBJEK SENGKETA PTUN
  {
    id: 7,
    numberStr: 'TOPIK 07',
    title: 'Objek Sengketa PTUN: Keputusan Tata Usaha Negara (KTUN)',
    shortDesc: 'Uraian 8 unsur kumulatif KTUN Pasal 1 angka 9 UU 51/2009, penjelasan konkret, individual, final, serta akibat hukum bagi subjek hukum.',
    summaryQuote: 'Pasal 1 angka 9 UU No. 51 Tahun 2009 menetapkan 8 unsur kumulatif pembentuk KTUN yang dapat disengketakan di hadapan PTUN.',
    sections: [
      {
        id: 'delapan-unsur-ktun',
        title: 'A. Delapan Unsur Kumulatif KTUN (Pasal 1 angka 9 UU 51/2009)',
        content: [
          'KTUN dirumuskan secara komprehensif sebagai suatu penetapan tertulis yang dikeluarkan oleh badan atau pejabat tata usaha negara yang berisi tindakan hukum tata usaha negara yang berdasarkan peraturan perundang-undangan yang berlaku, yang bersifat konkret, individual, dan final, yang menimbulkan akibat hukum bagi seseorang atau badan hukum perdata.',
        ],
        highlightBox: {
          title: 'CHECKLIST 8 UNSUR KUMULATIF KTUN',
          text: '1. PENETAPAN TERTULIS: Berwujud memo, surat keputusan, atau tulisan resmi lainnya yang memuat maksud dan isi yang jelas.\n2. BADAN ATAU PEJABAT TUN: Diterbitkan oleh organ yang menjalankan urusan pemerintahan.\n3. TINDAKAN HUKUM TUN: Berisi perbuatan hukum dalam ranah hukum administrasi publik.\n4. DASAR PERATURAN PERUNDANG-UNDANGAN: Bersandar pada atribusi, delegasi, atau mandat peraturan yang berlaku.\n5. KONKRET: Objek perbuatan hukumnya nyata, berwujud tertentu, dan tidak abstrak.\n6. INDIVIDUAL: Ditujukan kepada subjek yang tertentu dan tidak untuk umum/khalayak ramai.\n7. FINAL: Definitif, sudah matang, dan tidak lagi memerlukan persetujuan instansi atasan.\n8. MENIMBULKAN AKIBAT HUKUM: Melahirkan hak baru, mengubah kedudukan, atau menimbulkan kerugian hak bagi pihak lain.',
        },
      },
      {
        id: 'penjelasan-kif',
        title: 'B. Analisis Mendalam Unsur Konkret, Individual, dan Final',
        content: [
          'Tiga unsur sifat ketetapan (konkret, individual, final) merupakan pembeda utama KTUN dari peraturan umum (regeling):',
        ],
        table: {
          headers: ['Sifat Yuridis', 'Makna Hakiki', 'Contoh Konkret dalam Praktik'],
          rows: [
            ['KONKRET', 'Objeknya berwujud nyata dan spesifik, bukan norma umum abstrak yang masih memerlukan penafsiran.', 'SK Pencabutan Izin Mendirikan Bangunan (IMB) untuk gedung di Jalan Thamrin No. 10 Jakarta.'],
            ['INDIVIDUAL', 'Ketetapan tidak ditujukan untuk seluruh penduduk umum, melainkan kepada subjek hukum yang disebutkan namanya, identitasnya, atau NIP-nya.', 'SK Pemberhentian dengan Hormat PNS atas nama "Ahmad Zaelani, NIP 1985xxxx".'],
            ['FINAL', 'Keputusan tersebut telah definitif, berlaku seketika, dan tidak lagi memerlukan persetujuan rekomendasi dari instansi lain.', 'Izin Lokasi yang telah ditandatangani definitif oleh Walikota dan telah diserahkan kepada pemohon.']
          ]
        },
      },
    ],
  },

  // 08 — MEMO / NOTA DINAS SEBAGAI OBJEK GUGATAN
  {
    id: 8,
    numberStr: 'TOPIK 08',
    title: 'Memo / Nota Dinas sebagai Objek Gugatan',
    shortDesc: 'Lima parameter yuridis kelayakan memo dinas sebagai objek sengketa PTUN dan pergeseran dari formalitas naskah menuju substansi akibat hukum.',
    summaryQuote: 'Memo atau nota dinas dapat digugat di PTUN sepanjang secara materiil memenuhi unsur konkret, individual, final, dan menimbulkan akibat hukum.',
    sections: [
      {
        id: 'parameter-memo-dinas',
        title: 'A. Parameter Pengujian: "Apakah Memo / Nota Dinas Dapat Digugat?"',
        content: [
          'Dalam praktik birokrasi, pejabat seringkali mengeluarkan tindakan tidak dalam format resmi "Surat Keputusan (SK)", melainkan dalam bentuk memo dinas, nota dinas, atau surat edaran internal.',
          'Bahan ajar materi perkuliahan menetapkan 5 parameter kumulatif untuk menguji apakah memo dinas sah menjadi objek sengketa:',
        ],
        highlightBox: {
          title: 'APAKAH MEMO / NOTA DINAS DAPAT DIGUGAT? (5 PARAMETER YURIDIS)',
          text: '1. JELAS BADAN ATAU PEJABAT TUN YANG MENGELUARKAN: Teridentifikasi secara pasti institusi dan jabatan pejabat penandatangan memo.\n2. JELAS MAKSUD DAN ISI TULISAN: Memuat instruksi, penetapan, atau kehendak hukum yang tegas dan tidak ambigu.\n3. JELAS KEPADA SIAPA DITUJUKAN: Menyebutkan subjek sasaran memo secara individual atau kelompok tertentu.\n4. BERSIFAT INDIVIDUAL, KONKRET, DAN FINAL: Mengatur peristiwa nyata yang telah matang dan definitif.\n5. MENIMBULKAN AKIBAT HUKUM: Nyata-nyata merugikan hak atau status hukum seseorang atau badan hukum perdata.',
        },
        keyPoints: [
          'Substansi Mengalahkan Formalitas Bentuk: Hakim PTUN menganut prinsip substansi di atas formalitas naskah dinas. Sekalipun diberi judul "Nota Dinas" atau "Memo", jika substansinya mencabut hak warga, maka sah digugat sebagai KTUN.',
        ],
      },
    ],
  },

  // 09 — PERLUASAN PENGERTIAN KTUN
  {
    id: 9,
    numberStr: 'TOPIK 09',
    title: 'Perluasan Pengertian KTUN: Fiktif Negatif & Fiktif Positif',
    shortDesc: 'Pasal 3 UU Peratun mengenai Keputusan Fiktif Negatif dan transformasinya menuju Fiktif Positif dalam hukum administrasi modern.',
    summaryQuote: 'Sikap diam pejabat TUN yang tidak memutus permohonan warga dalam tenggang waktu tertentu dipersamakan dengan keputusan penolakan (Fiktif Negatif Pasal 3 UU Peratun).',
    sections: [
      {
        id: 'fiktif-negatif-pasal-3',
        title: 'A. Keputusan Fiktif Negatif (Pasal 3 UU Peratun)',
        content: [
          'Pasal 3 UU No. 5 Tahun 1986 mengatur perlindungan hukum terhadap sikap pasif atau diamnya pejabat administrasi:',
        ],
        keyPoints: [
          'Ayat (1): Apabila Badan atau Pejabat TUN tidak mengeluarkan keputusan yang dimohonkan kepadanya, sedangkan hal itu menjadi kewajibannya, maka hal tersebut dipersamakan dengan KTUN.',
          'Ayat (2): Jika dalam peraturan perundang-undangan yang menjadi dasar telah ditentukan jangka waktu penanganan permohonan, dan jangka waktu tersebut telah lewat tanpa ada keputusan, maka Badan/Pejabat TUN dianggap telah MENOLAK permohonan tersebut (Keputusan Fiktif Negatif).',
          'Ayat (3): Apabila peraturan dasarnya TIDAK MENENTUKAN jangka waktu, maka setelah lewat waktu 4 (empat) bulan sejak diterimanya permohonan, pejabat TUN bersangkutan dianggap telah mengeluarkan penolakan.',
        ],
      },
      {
        id: 'fiktif-positif',
        title: 'B. Perkembangan Konsep Fiktif Positif',
        content: [
          'Dalam perkembangan hukum administrasi modern (UU No. 30 Tahun 2014 tentang Administrasi Pemerintahan Pasal 53):',
          'Apabila pejabat administrasi berdiam diri melampaui batas waktu kewajiban memutuskan (maksimal 10 hari kerja jika tidak diatur khusus), maka permohonan warga DIANGGAP DIKABULKAN SECARA HUKUM (Fiktif Positif). Pemohon dapat mengajukan permohonan ke PTUN untuk memperoleh putusan penerimaan atas permohonannya.',
        ],
      },
    ],
  },

  // 10 — KEPUTUSAN YANG BUKAN OBJEK SENGKETA
  {
    id: 10,
    numberStr: 'TOPIK 10',
    title: 'Keputusan yang Dikecualikan dari Objek Sengketa',
    shortDesc: 'Pengecualian limitatif Pasal 2 dan Pasal 49 UU Peratun serta formula matematika yuridis kelayakan objek gugatan sengketa TUN.',
    summaryQuote: 'Tidak semua keputusan dapat digugat di PTUN; terdapat pembatasan tegas menurut Pasal 2 dan Pasal 49 UU Peratun.',
    sections: [
      {
        id: 'pengecualian-pasal-2-dan-49',
        title: 'A. Rincian Pengecualian Pasal 2 dan Pasal 49 UU Peratun',
        content: [
          'Undang-undang memberikan batasan ketat bahwa keputusan-keputusan berikut TIDAK DAPAT DIGUGAT di PTUN:',
        ],
        table: {
          headers: ['Dasar Hukum', 'Kategori Keputusan yang Dikecualikan', 'Alasan Yuridis Pengecualian'],
          rows: [
            ['Pasal 2 huruf a', 'KTUN yang merupakan perbuatan hukum perdata.', 'Merupakan ranah kompetensi Pengadilan Negeri (perikatan perdata/kontrak).'],
            ['Pasal 2 huruf b', 'KTUN yang merupakan pengaturan yang bersifat umum (regeling).', 'Bukan penetapan individual konkret; pengujiannya melalui Hak Uji Materiil di MA.'],
            ['Pasal 2 huruf c', 'KTUN yang masih memerlukan persetujuan.', 'Belum bersifat final (masih berupa konsep atau draf antara).'],
            ['Pasal 2 huruf d', 'KTUN berdasarkan ketentuan KUHP/KUHAP atau hukum pidana.', 'Merupakan tindakan penegakan hukum pidana (ranah Praperadilan di PN).'],
            ['Pasal 2 huruf e', 'KTUN atas dasar hasil pemeriksaan badan peradilan.', 'Tindakan eksekusi atau tindak lanjut putusan pengadilan lain.'],
            ['Pasal 2 huruf f', 'KTUN mengenai tata usaha Tentara Nasional Indonesia (TNI).', 'Tunduk pada kekhususan peradilan militer.'],
            ['Pasal 2 huruf g', 'Keputusan KPU/KPUD mengenai hasil pemilihan umum.', 'Tunduk pada mekanisme khusus sengketa pemilu di Bawaslu dan Mahkamah Konstitusi.'],
            ['Pasal 49', 'Keputusan dalam keadaan perang, bahaya, bencana, atau mendesak.', 'Diterbitkan dalam kondisi darurat keselamatan negara demi kepentingan umum.']
          ]
        },
      },
      {
        id: 'formula-yuridis-objek',
        title: 'B. Formula Yuridis Kelayakan Objek Gugatan PTUN',
        content: [
          'Bahan ajar materi perkuliahan merumuskan formula baku pengujian objek gugatan:',
        ],
        highlightBox: {
          title: 'FORMULA MATEMATIKA YURIDIS OBJEK GUGATAN PTUN',
          text: 'OBJEK SAH GUGATAN PTUN =\n(Pasal 1 angka 9 + Pasal 3 UU Peratun)\n              MINUS\n(Pasal 2 + Pasal 49 UU Peratun)',
        },
      },
    ],
  },

  // 11 — CONTOH SENGKETA TUN
  {
    id: 11,
    numberStr: 'TOPIK 11',
    title: 'Tipologi dan Contoh Kasus Nyata Sengketa TUN',
    shortDesc: 'Studi kasus faktual: pemecatan PNS, mutasi, seleksi CASN, pencabutan izin, sertifikat tanah ganda BPN, penggusuran, serta entitas swasta pemegang fungsi publik.',
    summaryQuote: 'Sengketa TUN mencakup ranah kepegawaian, agraria, perizinan berusaha, tata ruang lingkungan, hingga tindakan entitas swasta pengemban fungsi publik.',
    sections: [
      {
        id: 'ragam-contoh-kasus',
        title: 'A. Inventarisasi Kasus Faktual dari Bahan Perkuliahan',
        content: [
          'Berikut adalah contoh-contoh sengketa TUN yang sering terjadi dalam praktik peradilan:',
        ],
        keyPoints: [
          '1. Sengketa Kepegawaian (PNS Diberhentikan): PNS dipecat secara sepihak tanpa melalui prosedur pemeriksaan disiplin PP No. 94 Tahun 2021.',
          '2. Mutasi Kepegawaian yang Merugikan: Pemindahan PNS ke daerah terpencil tanpa pertimbangan objektif kualifikasi dan kepangkatan.',
          '3. Seleksi Penerimaan CASN: Gugatan peserta seleksi CPNS/PPPK atas keputusan panitia seleksi daerah yang menggugurkan kelulusan secara tidak transparan.',
          '4. Pencabutan Izin Usaha / IMB: Tindakan Kepala Daerah mencabut izin operasional pabrik atau izin mendirikan bangunan tanpa dasar hukum yang sah.',
          '5. Sertifikat Ganda Badan Pertanahan Nasional (BPN): BPN menerbitkan Sertifikat Hak Milik baru di atas bidang tanah yang telah bersertifikat sah atas nama orang lain.',
          '6. Penggusuran Bangunan Warga oleh Satpol PP: Tindakan eksekusi penggusuran fisik bangunan pemukiman tanpa didahului surat peringatan resmi dan kompensasi.',
          '7. Swasta Pelaksana Fungsi Pemerintahan: Pihak swasta yang diserahi wewenang mengelola sertifikasi profesi atau penyelenggaraan layanan publik mandatory oleh undang-undang; keputusan penolakannya dapat diuji di hadapan PTUN.',
        ],
      },
    ],
  },

  // 12 — GUGATAN DI PTUN
  {
    id: 12,
    numberStr: 'TOPIK 12',
    title: 'Struktur Surat Gugatan di PTUN',
    shortDesc: 'Panduan penyusunan surat gugatan TUN praktis mencakup 8 komponen esensial dari identitas, objek, kewenangan, upaya administratif, hingga petitum.',
    summaryQuote: 'Surat gugatan di PTUN wajib memuat 8 elemen fundamental agar tidak cacat formalitas dan lolos tahap dismissal.',
    sections: [
      {
        id: 'delapan-komponen-gugatan',
        title: 'A. Delapan Komponen Esensial Surat Gugatan',
        content: [
          'Dalam menyusun surat gugatan PTUN yang profesional, praktisi hukum wajib menuangkan 8 bagian sistematis:',
        ],
        table: {
          headers: ['No', 'Komponen Surat Gugatan', 'Fungsi & Kedudukan Yuridis'],
          rows: [
            ['1', 'Identitas Para Pihak', 'Memenuhi syarat formal Pasal 56 UU Peratun mengenai Penggugat dan Tergugat.'],
            ['2', 'Objek Sengketa', 'Menyebutkan secara presisi KTUN atau tindakan pemerintahan yang digugat.'],
            ['3', 'Kewenangan Pengadilan', 'Menegaskan kompetensi absolut dan kompetensi relatif PTUN yang dituju.'],
            ['4', 'Upaya Administratif', 'Membuktikan telah dilaluinya prosedur keberatan dan/atau banding administratif.'],
            ['5', 'Tenggang Waktu Gugatan', 'Membuktikan gugatan diajukan masih dalam batas 90 hari sejak penetapan upaya administratif.'],
            ['6', 'Kepentingan Penggugat', 'Menguraikan hak hukum penggugat yang dirugikan secara kausal oleh objek sengketa.'],
            ['7', 'Posita (Fundamentum Petendi)', 'Uraian kronologis fakta, pelanggaran undang-undang, dan penyalahgunaan AUPB.'],
            ['8', 'Petitum', 'Tuntutan pembatalan KTUN, penerbitan keputusan baru, ganti rugi, atau rehabilitasi.']
          ]
        },
      },
    ],
  },

  // 13 — IDENTITAS PARA PIHAK
  {
    id: 13,
    numberStr: 'TOPIK 13',
    title: 'Identitas Para Pihak dalam Surat Gugatan',
    shortDesc: 'Ketentuan Pasal 56 UU Peratun mengenai data formal penggugat, tergugat, surat kuasa khusus, dan kewajiban melampirkan salinan KTUN.',
    summaryQuote: 'Pasal 56 UU Peratun mewajibkan pemenuhan identitas lengkap para pihak dan surat kuasa khusus agar gugatan tidak dinyatakan kabur.',
    sections: [
      {
        id: 'ketentuan-pasal-56',
        title: 'A. Format Identitas Berdasarkan Pasal 56 UU Peratun',
        content: [
          'Surat gugatan harus memuat identitas para pihak dengan spesifikasi baku:',
        ],
        keyPoints: [
          'Identitas Penggugat: Nama lengkap, kewarganegaraan, tempat tinggal / domisili hukum, pekerjaan atau jabatan, serta data identitas kuasa hukum apabila diwakili oleh advokat.',
          'Identitas Tergugat: Nama jabatan resmi instansi pemerintahan yang bersangkutan dan tempat kedudukan resmi kantor instansi tersebut.',
          'Surat Kuasa Khusus: Apabila gugatan diajukan melalui kuasa hukum, wajib dilampirkan Surat Kuasa Khusus asli yang mencantumkan secara spesifik objek sengketa dan kewenangan beracara di PTUN.',
          'Lampiran Salinan KTUN: Penggugat sedapat mungkin menyertakan salinan fisik atau digital dari keputusan TUN yang menjadi objek sengketa.',
        ],
      },
    ],
  },

  // 14 — OBJEK GUGATAN DALAM SURAT GUGATAN
  {
    id: 14,
    numberStr: 'TOPIK 14',
    title: 'Perumusan Objek Sengketa dalam Surat Gugatan',
    shortDesc: 'Teknik merumuskan objek KTUN tertulis vs tindakan faktual pemerintahan serta kaidah penulisan ringkas objek dan perincian di posita.',
    summaryQuote: 'Objek sengketa wajib dirumuskan secara ringkas dan presisi pada bagian objek; uraian kronologi dan latar belakang wajib ditempatkan di Posita.',
    sections: [
      {
        id: 'contoh-perumusan-objek',
        title: 'A. Contoh Rumusan Objek Gugatan: KTUN Tertulis vs Tindakan Faktual',
        content: [
          'Perumusan objek gugatan dibedakan berdasarkan jenis perbuatan pemerintahan yang digugat:',
        ],
        comparisonBoxes: [
          {
            title: 'Contoh Objek: KTUN Tertulis',
            description: 'Ketetapan formal naskah dinas',
            items: [
              'Contoh Rumusan: "Surat Keputusan Bupati Malang Nomor: 123/2024 Tanggal 10 Januari 2024 tentang Pemberhentian Penggugat sebagai Pegawai Negeri Sipil."',
              'Wajib mencantumkan: Nomor SK, Tanggal Penerbitan, Instansi Penerbit, dan Perihal Keputusan secara lengkap.',
            ],
          },
          {
            title: 'Contoh Objek: Tindakan Faktual',
            description: 'Perbuatan materiil aparat tanpa SK tertulis',
            items: [
              'Contoh Rumusan: "Tindakan faktual Satuan Polisi Pamong Praja (Satpol PP) Pemerintah Kota X berupa penyegelan dan pemasangan garis pembatas pada bangunan toko milik Penggugat pada tanggal 5 Februari 2024."',
              'Wajib mencantumkan: Hari, tanggal, lokasi, bentuk tindakan fisik, dan satuan aparat pelaksana.',
            ],
          },
        ],
      },
    ],
  },

  // 15 — KEWENANGAN PENGADILAN YANG DITUJU
  {
    id: 15,
    numberStr: 'TOPIK 15',
    title: 'Kewenangan Pengadilan yang Dituju (Kompetensi)',
    shortDesc: 'Analisis Pasal 47 & 54 UU Peratun jo. Pasal 87 UU AP mengenai perbedaan mendasar antara Kompetensi Absolut dan Kompetensi Relatif.',
    summaryQuote: 'Kompetensi absolut menentukan jenis materi perkara yang menjadi kewenangan PTUN, sedangkan kompetensi relatif menentukan wilayah hukum PTUN mana yang berwenang.',
    sections: [
      {
        id: 'kompetensi-absolut-vs-relatif',
        title: 'A. Perbandingan Kompetensi Absolut vs Kompetensi Relatif',
        content: [
          'Sebelum memeriksa pokok perkara, pengadilan wajib menilai kewenangannya memeriksa sengketa:',
        ],
        table: {
          headers: ['Aspek Pembeda', 'KOMPETENSI ABSOLUT', 'KOMPETENSI RELATIF'],
          rows: [
            ['Dasar Batasan', 'Berdasarkan jenis / materi perkara atau cabang peradilan (materie van het geschil).', 'Berdasarkan batas wilayah hukum geografis pengadilan (rechtsgebied / kompetensi teritorial).'],
            ['Pertanyaan Kunci', '"Apakah sengketa ini sengketa administrasi (PTUN) atau sengketa perdata/pidana?"', '"PTUN di kota/wilayah mana yang berwenang memeriksa Tergugat ini?"'],
            ['Asas Umum Wilayah', 'Berlaku nasional untuk seluruh lingkungan Peratun.', 'Asas Actor Sequitur Forum Rei (gugatan diajukan di PTUN tempat kedudukan Tergugat, Pasal 54 ayat 1).'],
            ['Akibat Hukum Pelanggaran', 'Dapat diajukan eksepsi kapan saja dan hakim secara jabatan (ex officio) wajib menyatakan tidak berwenang.', 'Wajib diajukan sebagai eksepsi formal pada sidang pertama sebelum jawaban pokok perkara.']
          ]
        },
      },
    ],
  },

  // 16 — UPAYA ADMINISTRATIF
  {
    id: 16,
    numberStr: 'TOPIK 16',
    title: 'Upaya Administratif (Keberatan & Banding Administratif)',
    shortDesc: 'Dasar hukum Pasal 75 UU Administrasi Pemerintahan jo. Perma No. 6 Tahun 2018 mengenai keharusan menuntaskan upaya administratif sebelum ke PTUN.',
    summaryQuote: 'Gugatan ke PTUN hanya dapat diajukan setelah penggugat menempuh dan menuntaskan seluruh tahapan upaya administratif yang tersedia.',
    sections: [
      {
        id: 'skema-upaya-administratif',
        title: 'A. Alur Prosedural Bertingkat Upaya Administratif',
        content: [
          'Berdasarkan Pasal 75 UU No. 30 Tahun 2014 jo. Perma No. 6 Tahun 2018, warga yang dirugikan oleh KTUN wajib menempuh upaya administratif sebelum melangkah ke peradilan:',
        ],
        progressionSteps: [
          { step: '01', label: 'PENERBITAN KTUN', desc: 'Badan atau Pejabat TUN menerbitkan keputusan yang dirasakan merugikan hak warga.', legalBasis: 'Pasal 1 angka 9 UU 51/2009' },
          { step: '02', label: 'KEBERATAN', desc: 'Diajukan langsung kepada Pejabat TUN yang menerbitkan keputusan dalam tenggang waktu 21 hari kerja.', legalBasis: 'Pasal 75 & 77 UU 30/2014' },
          { step: '03', label: 'BANDING ADMINISTRATIF', desc: 'Jika keberatan ditolak, diajukan kepada Atasan Pejabat atau Badan Banding khusus dalam 10 hari kerja.', legalBasis: 'Pasal 76 & 78 UU 30/2014' },
          { step: '04', label: 'GUGATAN KE PTUN', desc: 'Bila banding administratif ditolak atau tidak diputus, gugatan resmi baru dapat didaftarkan ke PTUN.', legalBasis: 'Perma No. 6 Tahun 2018' },
        ],
      },
      {
        id: 'syarat-dokumen-upaya',
        title: 'B. Kelengkapan Berkas Dokumen Keberatan dan Banding',
        content: [
          'Bahan perkuliahan merinci berkas dokumen yang wajib disiapkan:',
          '1. Dokumen Keberatan: Surat kuasa khusus, surat keberatan resmi, dalil argumentasi hukum pembatalan, petitum permintaan pencabutan, alat bukti pendukung, serta tanda tangan pemohon/kuasa.',
          '2. Dokumen Banding Administratif: Surat kuasa khusus, surat permohonan banding, uraian tanggapan atas penolakan keberatan pertama, bukti-bukti tambahan, serta tanda tangan pemohon.',
        ],
      },
    ],
  },

  // 17 — TENGGANG WAKTU GUGATAN
  {
    id: 17,
    numberStr: 'TOPIK 17',
    title: 'Tenggang Waktu Mengajukan Gugatan (90 Hari)',
    shortDesc: 'Kerangka yuridis Pasal 55 UU PTUN jo. Pasal 5 Perma No. 6 Tahun 2018 mengenai batas kedaluwarsa 90 hari kalender dan titik awal perhitungannya.',
    summaryQuote: 'Gugatan hanya dapat diajukan dalam tenggang waktu 90 (sembilan puluh) hari sejak diterimanya keputusan upaya administratif terakhir.',
    sections: [
      {
        id: 'kerangka-sembilan-puluh-hari',
        title: 'A. Aturan Batas Waktu 90 Hari Kalender',
        content: [
          'Kepastian hukum dalam tata kelola pemerintahan menuntut adanya pembatasan waktu pengujian keputusan pejabat:',
        ],
        highlightBox: {
          title: 'PASAL 55 UU PTUN JO. PASAL 5 PERMA NO. 6 TAHUN 2018',
          text: 'Gugatan dapat diajukan hanya dalam tenggang waktu 90 (sembilan puluh) hari terhitung sejak saat diterimanya keputusan upaya administratif terakhir (atau sejak pengumuman bagi pihak ketiga yang berkepentingan).',
        },
        keyPoints: [
          'Titik Awal Perhitungan (Dies a Quo): Dihitung sejak hari diterimanya surat penolakan banding administratif oleh penggugat, atau sejak berakhirnya batas waktu pejabat memutus upaya administratif.',
          'Sanksi Kedaluwarsa (Verjaring): Apabila gugatan diajukan pada hari ke-91 atau lebih, gugatan dinyatakan lewat waktu dan majelis hakim wajib menjatuhkan putusan gugatan tidak dapat diterima (Niet Ontvankelijke Verklaard / NO).',
        ],
      },
    ],
  },

  // 18 — KEPENTINGAN PENGGUGAT YANG DIRUGIKAN
  {
    id: 18,
    numberStr: 'TOPIK 18',
    title: 'Kepentingan Penggugat yang Dirugikan (Legal Standing)',
    shortDesc: 'Syarat kedudukan hukum (point d’intérêt, point d’action) menurut Pasal 53 UU Peratun, pembuktian kerugian langsung dan kausalitas.',
    summaryQuote: 'Tidak setiap warga dapat menggugat; penggugat wajib membuktikan hubungan kausal bahwa kepentingannya dirugikan secara langsung oleh KTUN objek sengketa.',
    sections: [
      {
        id: 'legal-standing-penggugat',
        title: 'A. Asas "Point d’Intérêt, Point d’Action"',
        content: [
          'Hukum acara PTUN menganut doktrin ketat: "Ada kepentingan, baru ada hak menggugat" (Pasal 53 ayat 1 UU Peratun):',
        ],
        keyPoints: [
          '1. Kepentingan Hukum yang Nyata (Direct Interest): Kepentingan tersebut bukan bersifat perkiraan atau hipotesis di masa depan, melainkan kerugian aktual yang sedang atau pasti diderita.',
          '2. Hubungan Kausalitas Langsung: Kerugian yang dialami penggugat timbul sebagai akibat langsung dari diterbitkannya KTUN atau dilakukannya tindakan pemerintahan tergugat.',
          '3. Bukti Penguasaan / Status Hak: Penggugat wajib melampirkan bukti kepemilikan hak atas tanah, SK pengangkatan PNS, atau surat izin usaha yang terkena dampak langsung pembatalan.',
        ],
      },
    ],
  },

  // 19 — ALASAN GUGATAN
  {
    id: 19,
    numberStr: 'TOPIK 19',
    title: 'Alasan-Alasan Mengajukan Gugatan di PTUN',
    shortDesc: 'Tiga batu uji yuridis pembatalan KTUN berdasarkan Pasal 53 ayat (2) UU Peratun dan Pasal 87 UU Administrasi Pemerintahan.',
    summaryQuote: 'Tiga alasan pembatalan KTUN: bertentangan dengan peraturan perundang-undangan, penyalahgunaan wewenang (détournement de pouvoir), dan pelanggaran AUPB.',
    sections: [
      {
        id: 'tiga-batu-uji-gugatan',
        title: 'A. Tiga Alasan Pengujian Keabsahan Tindakan Pemerintahan',
        content: [
          'Berdasarkan Pasal 53 ayat (2) UU Peratun jo. Pasal 87 UU Administrasi Pemerintahan, gugatan diajukan atas dasar 3 alasan hukum pokok:',
        ],
        table: {
          headers: ['Batu Uji Yuridis', 'Makna Pelanggaran Hukum', 'Indikator Praktis di Pengadilan'],
          rows: [
            [
              '1. Bertentangan dengan Peraturan Perundang-undangan',
              'Melanggar ketentuan hukum tertulis yang berlaku.',
              'Pelanggaran syarat wewenang, pelanggaran prosedur formal penerbitan, atau pelanggaran substansi materi pengaturan.'
            ],
            [
              '2. Penyalahgunaan Wewenang (Détournement de Pouvoir)',
              'Pejabat menggunakan wewenangnya untuk tujuan lain di luar tujuan yang diberikan undang-undang.',
              'Menggunakan wewenang perizinan untuk kepentingan persaingan bisnis pribadi, motif balas dendam politik, atau pemerasan.'
            ],
            [
              '3. Pelanggaran Asas-Asas Umum Pemerintahan yang Baik (AUPB)',
              'Melanggar prinsip moralitas dan kepatutan penyelenggaraan negara.',
              'Melanggar asas kepastian hukum, asas kecermatan, asas keterbukaan, asas tidak berpihak, dan asas proporsionalitas.'
            ]
          ]
        },
      },
    ],
  },

  // 20 — POSITA / FUNDAMENTUM PETENDI
  {
    id: 20,
    numberStr: 'TOPIK 20',
    title: 'Posita / Fundamentum Petendi Surat Gugatan',
    shortDesc: 'Teknik penyusunan dalil gugatan secara cermat, jelas, teliti, dan kronologis yang menghubungkan fakta riil dengan pelanggaran norma hukum.',
    summaryQuote: 'Posita wajib disusun secara cermat, jelas, teliti, dan kronologis agar menjadi fondasi yang kokoh bagi tuntutan (Petitum).',
    sections: [
      {
        id: 'kaidah-emas-posita',
        title: 'A. Empat Kaidah Emas Penyusunan Posita',
        content: [
          'Posita (Fundamentum Petendi) adalah jantung dari surat gugatan yang memuat dalil-dalil fakta dan dalil-dalil hukum:',
        ],
        highlightBox: {
          title: 'PRINSIP PENYUSUNAN POSITA DOKTRIN PERATUN',
          text: '1. CERMAT: Mengidentifikasi pasal-pasal undang-undang dan asas AUPB yang dilanggar secara tepat tanpa salah kutip.\n2. JELAS: Bahasa hukum lugas, tidak berbelit-belit, dan tidak mengandung pertentangan dalil antar alinea.\n3. TELITI: Memuat perincian tanggal, nomor surat, nama pihak, dokumen bukti, dan kerugian materiil/immateriil.\n4. KRONOLOGIS: Disusun urut dari awal mula peristiwa permohonan, terbitnya KTUN, upaya keberatan, penolakan banding, hingga gugatan didaftarkan.',
        },
      },
    ],
  },

  // 21 — PETITUM
  {
    id: 21,
    numberStr: 'TOPIK 21',
    title: 'Petitum Surat Gugatan: Tuntutan Pokok dan Tambahan',
    shortDesc: 'Uraian tuntutan pembatalan KTUN, penerbitan keputusan baru, tuntutan ganti rugi, rehabilitasi nama baik PNS, serta skema alur Posita ke Petitum.',
    summaryQuote: 'Petitum adalah kesimpulan tuntutan yang ditarik secara logis dari posita; ketidaksesuaian antara posita dan petitum berakibat gugatan obscuur libel.',
    sections: [
      {
        id: 'struktur-tuntutan-petitum',
        title: 'A. Tuntutan Pokok (Primair) dan Tuntutan Tambahan',
        content: [
          'Petitum dalam sengketa TUN mencakup beberapa jenis amar putusan yang dimohonkan kepada majelis hakim:',
        ],
        keyPoints: [
          'Tuntutan Pokok: Mengabulkan gugatan Penggugat untuk seluruhnya, menyatakan batal atau tidak sah KTUN objek sengketa, dan mewajibkan Tergugat untuk mencabut KTUN bersangkutan.',
          'Tuntutan Menerbitkan KTUN Baru: Memerintahkan Tergugat untuk memproses dan menerbitkan keputusan tata usaha negara baru sebagaimana dimohonkan oleh Penggugat.',
          'Tuntutan Tambahan Ganti Rugi: Tuntutan ganti rugi sejumlah uang atas kerugian materiel yang diderita akibat berlakunya KTUN (Pasal 120 UU Peratun).',
          'Tuntutan Tambahan Rehabilitasi: Khusus sengketa kepegawaian, menuntut pemulihan hak-hak penggugat dalam kemampuan, kedudukan, harkat, dan martabatnya sebagai PNS seperti semula (Pasal 121 UU Peratun).',
        ],
        highlightBox: {
          title: 'SKEMA KORELASI LOGIS YURIDIS',
          text: 'FAKTA MATERIEL (POSITA)\n       ↓\nPELANGGARAN HUKUM / AUPB (LEGAL VIOLATION)\n       ↓\nAKIBAT KERUGIAN HAK (LEGAL CONSEQUENCE)\n       ↓\nTUNTUTAN PEMBATALAN & PEMULIHAN (PETITUM)',
        },
      },
    ],
  },

  // 22 — TAHAPAN PENDAFTARAN GUGATAN (e-Court)
  {
    id: 22,
    numberStr: 'TOPIK 22',
    title: 'Tahapan Pendaftaran Gugatan secara Elektronik (e-Court)',
    shortDesc: 'Alur pendaftaran perkara modern berbasis Perma e-Court: 6 tahapan pendaftaran, pembayaran virtual account, verifikasi berkas, hingga registrasi SIPP.',
    summaryQuote: 'Administrasi perkara di PTUN saat ini diselenggarakan secara terintegrasi melalui sistem e-Court Mahkamah Agung.',
    sections: [
      {
        id: 'enam-tahap-ecourt',
        title: 'A. Prosedural Enam Tahap Pendaftaran Gugatan Melalui e-Court',
        content: [
          'Bahan perkuliahan memaparkan tata cara pendaftaran perkara secara digital melalui portal resmi Mahkamah Agung:',
        ],
        progressionSteps: [
          { step: '01', label: 'PENDAFTARAN PERKARA (e-Filing)', desc: 'Penggugat / Kuasa mengunggah surat gugatan bertandatangan digital, surat kuasa khusus, dan bukti KTP/SK ke sistem e-Court.', legalBasis: 'Perma No. 7 Tahun 2022' },
          { step: '02', label: 'PEMBAYARAN BIAYA PERKARA (e-Payment)', desc: 'Sistem menerbitkan e-SKUM dengan nomor Virtual Account bank; pembayaran panjar biaya perkara dilakukan secara elektronik.', legalBasis: 'Pasal 5 Perma 1/2019' },
          { step: '03', label: 'PEMERIKSAAN KELENGKAPAN BERKAS', desc: 'Meja I / Petugas Pelayanan Terpadu Satu Pintu (PTSP) melakukan verifikasi dokumen kelengkapan berkas perkara.', legalBasis: 'SOP PTSP PTUN' },
          { step: '04', label: 'VERIFIKASI PANITERA MUDA PERKARA', desc: 'Panitera Muda Perkara memeriksa validitas yuridis kelengkapan administrasi sebelum registrasi resmi.', legalBasis: 'Buku II MA RI' },
          { step: '05', label: 'PENCATATAN REGISTER INDUK', desc: 'Perkara resmi dicatat dalam Buku Register Induk Perkara Gugatan dan memperoleh Nomor Register Perkara.', legalBasis: 'Register Induk PTUN' },
          { step: '06', label: 'INPUT POSITA & PETITUM KE SIPP', desc: 'Petugas menginput ringkasan posita, petitum, dan data para pihak ke Sistem Informasi Penelusuran Perkara (SIPP).', legalBasis: 'Transparansi Peradilan MA' },
        ],
      },
    ],
  },

  // 23 — DISMISSAL PROSES
  {
    id: 23,
    numberStr: 'TOPIK 23',
    title: 'Proses Dismissal (Rapat Permusyawaratan)',
    shortDesc: 'Penyaringan perkara oleh Ketua Pengadilan menurut Pasal 62 UU Peratun, lima alasan penetapan dismissal, dan mekanisme perlawanan (verzet).',
    summaryQuote: 'Dismissal proses adalah mekanisme filter awal oleh Ketua PTUN dalam rapat permusyawaratan tertutup untuk menyaring gugatan yang tidak layak diperiksa.',
    sections: [
      {
        id: 'lima-alasan-dismissal',
        title: 'A. Lima Dasar Penetapan Lolos / Tidak Lolos Dismissal',
        content: [
          'Dalam rapat permusyawaratan tertutup, Ketua Pengadilan berwenang memutus dengan penetapan bahwa gugatan tidak dapat diterima atau tidak berdasar dengan alasan:',
        ],
        keyPoints: [
          '1. Pokok gugatan nyata-nyata tidak termasuk dalam wewenang pengadilan (cacat kompetensi absolut).',
          '2. Syarat-syarat gugatan sebagaimana dimaksud dalam Pasal 56 tidak dipenuhi oleh penggugat sekalipun telah diberitahukan.',
          '3. Gugatan tersebut tidak didasarkan pada alasan-alasan yang layak.',
          '4. Apa yang dituntut dalam gugatan sebenarnya sudah dipenuhi oleh KTUN yang bersangkutan.',
          '5. Gugatan diajukan sebelum waktunya atau telah lewat waktu (kedaluwarsa 90 hari).',
        ],
        highlightBox: {
          title: 'POHON KEPUTUSAN PROSES DISMISSAL',
          text: 'GUGATAN DIDAFTARKAN\n       ↓\nRAPAT PERMUSYAWARATAN KETUA PTUN (DISMISSAL PROSES)\n       ↓\n[A] LOLOS DISMISSAL → Dilanjutkan ke Pemeriksaan Persiapan (Pasal 63)\n[B] TIDAK LOLOS (PENETAPAN DISMISSAL) → Penggugat dapat mengajukan UPAYA PERLAWANAN (VERZET) dalam 14 hari',
        },
      },
    ],
  },

  // 24 — PEMERIKSAAN PERSIAPAN
  {
    id: 24,
    numberStr: 'TOPIK 24',
    title: 'Pemeriksaan Persiapan (Pasal 63 UU Peratun)',
    shortDesc: 'Sidang tertutup penyempurnaan gugatan, asas ongelijkheidscompensatie, bimbingan hakim, penjelasan pejabat, serta 10 aspek verifikasi mendalam.',
    summaryQuote: 'Pemeriksaan persiapan diselenggarakan secara tertutup untuk mengimbangi ketimpangan kedudukan antara warga masyarakat dan penguasa (ongelijkheidscompensatie).',
    sections: [
      {
        id: 'esensi-pasal-63',
        title: 'A. Karakteristik Sidang Pemeriksaan Persiapan',
        content: [
          'Setelah gugatan lolos dismissal, perkara wajib masuk ke tahap pemeriksaan persiapan sebelum disidangkan secara terbuka:',
        ],
        keyPoints: [
          'Sifat Sidang Tertutup untuk Umum: Pemeriksaan persiapan berlangsung dalam ruang sidang tertutup demi menjaga rahasia para pihak dan keluwesan koreksi.',
          'Asas Kompensasi Ketimpangan (Ongelijkheidscompensatie): Karena posisi warga negara berhadapan dengan aparatur negara yang menguasai data dan dokumen, hakim berperan aktif memberi petunjuk perbaikan gugatan kepada Penggugat.',
          'Wewenang Meminta Penjelasan Pejabat: Hakim berwenang memanggil dan meminta penjelasan resmi kepada Badan atau Pejabat TUN terkait duduk perkara yang sebenarnya.',
          'Tenggang Waktu 30 Hari: Penggugat diberi batas waktu maksimal 30 hari untuk menyempurnakan gugatannya. Apabila dalam tenggang waktu tersebut penggugat tidak menyempurnakan gugatan, hakim menjatuhkan putusan bahwa gugatan tidak dapat diterima.',
        ],
      },
      {
        id: 'sepuluh-aspek-koreksi',
        title: 'B. Sepuluh Aspek Verifikasi Mendalam oleh Majelis Hakim',
        content: [
          'Bahan perkuliahan merinci 10 materi yang dibedah dalam pemeriksaan persiapan:',
          '1. Formalitas Surat Gugatan (keabsahan meterai dan tanda tangan).',
          '2. Kejelasan Identitas Para Pihak (legal status penggugat dan jabatan tergugat).',
          '3. Ketepatan Penunjukan Objek Sengketa (nomor, tanggal, dan materi KTUN).',
          '4. Kerapian dan Kelengkapan Kronologi Peristiwa.',
          '5. Kekuatan Argumentasi Fundamentum Petendi (Posita).',
          '6. Pembuktian Legal Standing Kepentingan Penggugat.',
          '7. Uji Kompetensi Absolut dan Relatif Pengadilan.',
          '8. Uji Kedaluwarsa Tenggang Waktu 90 Hari.',
          '9. Ketepatan Dasar Alasan Hukum dan Pasal Peraturan yang Dilanggar.',
          '10. Keselarasan Rumusan Tuntutan (Petitum) dengan Posita.',
        ],
      },
    ],
  },

  // 25 — JENIS PEMERIKSAAN
  {
    id: 25,
    numberStr: 'TOPIK 25',
    title: 'Jenis-Jenis Pemeriksaan Perkara di PTUN',
    shortDesc: 'Tabel komparasi komprehensif membandingkan Acara Biasa, Acara Cepat, dan Acara Singkat dari segi tujuan, susunan hakim, dan batasan waktu.',
    summaryQuote: 'Hukum acara PTUN mengenal tiga varian pemeriksaan: Acara Biasa (standar), Acara Cepat (urgensi tinggi), dan Acara Singkat (khusus verzet dismissal).',
    sections: [
      {
        id: 'tabel-tiga-acara',
        title: 'A. Tabel Komparasi: Acara Biasa, Acara Cepat, dan Acara Singkat',
        content: [
          'Ketiga jenis acara memiliki karakteristik dan syarat penggunaan yang sangat berbeda:',
        ],
        table: {
          headers: ['Aspek Pembeda', 'ACARA BIASA', 'ACARA CEPAT', 'ACARA SINGKAT'],
          rows: [
            ['Tujuan Utama', 'Pemeriksaan sengketa tata usaha negara secara reguler dan menyeluruh.', 'Menangani perkara yang memiliki urgensi kepentingan sangat mendesak.', 'Memeriksa perlawanan (verzet) terhadap penetapan dismissal Ketua Pengadilan.'],
            ['Susunan Majelis', 'Majelis Hakim (3 orang Hakim).', 'Hakim Tunggal.', 'Majelis Hakim (3 orang Hakim).'],
            ['Pemeriksaan Persiapan', 'Wajib dilaksanakan (Pasal 63).', 'TIDAK ADA pemeriksaan persiapan.', 'TIDAK ADA pemeriksaan persiapan.'],
            ['Tenggang Waktu Putusan', 'Mengikuti jadwal kalender persidangan reguler.', 'Putusan permohonan cepat dalam 14 hari; sidang dalam 7 hari.', 'Pemeriksaan tertutup; putusan diucapkan dalam sidang terbuka.'],
            ['Sifat Putusan', 'Dapat diajukan Banding dan Kasasi.', 'Dapat diajukan upaya hukum banding.', 'Final dan mengikat (tidak ada banding/kasasi atas putusan perlawanan).']
          ]
        },
      },
    ],
  },

  // 26 — ACARA SINGKAT
  {
    id: 26,
    numberStr: 'TOPIK 26',
    title: 'Acara Singkat (Pemeriksaan Perlawanan / Verzet)',
    shortDesc: 'Mekanisme Pasal 62 ayat (3)–(6) UU Peratun: tenggang waktu 14 hari perlawanan dismissal, sidang tertutup, pengucapan terbuka, serta sifat putusan final.',
    summaryQuote: 'Acara singkat diselenggarakan semata-mata untuk mengadili perlawanan terhadap penetapan dismissal dalam tenggang waktu 14 hari.',
    sections: [
      {
        id: 'prosedur-acara-singkat',
        title: 'A. Prosedur dan Akibat Hukum Putusan Perlawanan',
        content: [
          'Acara singkat diatur secara spesifik dalam Pasal 62 ayat (3) sampai ayat (6) UU Peratun:',
        ],
        keyPoints: [
          'Batas Waktu Pengajuan 14 Hari: Terhadap penetapan dismissal Ketua Pengadilan, Penggugat berhak mengajukan perlawanan (verzet) dalam tenggang waktu 14 hari sejak penetapan diucapkan atau diberitahukan secara sah.',
          'Pemeriksaan Tertutup dan Pengucapan Terbuka: Pemeriksaan materi alasan perlawanan dilakukan dalam sidang tertutup, namun pembacaan putusan perlawanan wajib dilakukan dalam sidang terbuka untuk umum.',
          'Apabila Perlawanan Dikabulkan: Penetapan dismissal dinyatakan gugur, dan gugatan pokok langsung diperiksa oleh majelis hakim dengan Acara Biasa dimulai dari tahap pemeriksaan persiapan.',
          'Apabila Perlawanan Ditolak: Penetapan dismissal dikuatkan, perkara ditutup definitif, dan terhadap putusan penolakan perlawanan tersebut TIDAK DAPAT DIAJUKAN UPAYA HUKUM APA PUN (final).',
        ],
      },
    ],
  },

  // 27 — ACARA CEPAT
  {
    id: 27,
    numberStr: 'TOPIK 27',
    title: 'Acara Cepat (Pemeriksaan Sangat Mendesak)',
    shortDesc: 'Syarat urgensi Pasal 98–99 UU Peratun, putusan penetapan 14 hari, sidang Hakim Tunggal dalam 7 hari, serta peniadaan pemeriksaan persiapan.',
    summaryQuote: 'Acara cepat diperuntukkan bagi sengketa dengan kepentingan penggugat yang sangat mendesak sehingga tidak dapat ditunda melalui persidangan biasa.',
    sections: [
      {
        id: 'syarat-dan-alur-acara-cepat',
        title: 'A. Syarat dan Mekanisme Acara Cepat',
        content: [
          'Penerapan acara cepat diatur ketat dalam Pasal 98 dan Pasal 99 UU Peratun:',
        ],
        keyPoints: [
          'Syarat Urgensi Ekstrem: Penggugat mengajukan permohonan acara cepat yang disertai alasan kuat bahwa penundaan pemeriksaan akan menimbulkan kerugian fatal yang tidak dapat dipulihkan.',
          'Penetapan Ketua Pengadilan dalam 14 Hari: Ketua PTUN mengeluarkan penetapan dalam waktu 14 hari apakah mengabulkan atau menolak permohonan acara cepat.',
          'Pemeriksaan oleh Hakim Tunggal: Jika dikabulkan, Ketua Pengadilan menunjuk Hakim Tunggal dan menetapkan hari sidang dalam waktu 7 hari sejak penetapan dikeluarkan.',
          'Peniadaan Pemeriksaan Persiapan: Acara cepat memangkas birokrasi peradilan dengan meniadakan tahap pemeriksaan persiapan sehingga langsung masuk pembacaan gugatan dan jawaban dalam tempo 14 hari.',
          'Dapat Dikembalikan ke Acara Biasa: Apabila dalam proses pembuktian terbukti alasan mendesak tersebut mengada-ada, hakim berwenang mengalihkan kembali pemeriksaan ke Acara Biasa.',
        ],
      },
    ],
  },

  // 28 — ACARA BIASA
  {
    id: 28,
    numberStr: 'TOPIK 28',
    title: 'Acara Biasa (Alur Persidangan Lengkap)',
    shortDesc: 'Peta alur kronologis persidangan biasa: Pendaftaran, Dismissal, Pemeriksaan Persiapan, Sidang Terbuka, Gugatan, Jawaban, Replik, Duplik, Pembuktian, hingga Putusan.',
    summaryQuote: 'Acara biasa menempuh 13 tahapan persidangan terstruktur demi menjamin pemeriksaan sengketa secara komprehensif dan adil.',
    sections: [
      {
        id: 'urutan-tiga-belas-tahap',
        title: 'A. Urutan Kronologis Tahapan Persidangan Acara Biasa',
        content: [
          'Pemeriksaan acara biasa berjalan menurut tahapan baku yang tidak boleh dilompati:',
        ],
        progressionSteps: [
          { step: '01', label: 'PENDAFTARAN PERKARA', desc: 'Penggugat mendaftarkan gugatan melalui e-Court / PTSP.', legalBasis: 'Pasal 56 UU Peratun' },
          { step: '02', label: 'DISMISSAL PROSES', desc: 'Rapat permusyawaratan penyaringan oleh Ketua Pengadilan.', legalBasis: 'Pasal 62 UU Peratun' },
          { step: '03', label: 'PEMERIKSAAN PERSIAPAN', desc: 'Sidang tertutup perbaikan gugatan maksimal 30 hari.', legalBasis: 'Pasal 63 UU Peratun' },
          { step: '04', label: 'SIDANG TERBUKA PERTAMA', desc: 'Sidang perdana terbuka untuk umum dinyatakan dibuka.', legalBasis: 'Pasal 70 UU Peratun' },
          { step: '05', label: 'PEMBACAAN GUGATAN', desc: 'Pembacaan surat gugatan penggugat di hadapan para pihak.', legalBasis: 'Pasal 74 UU Peratun' },
          { step: '06', label: 'JAWABAN TERGUGAT', desc: 'Tergugat menyampaikan jawaban tertulis beserta eksepsi.', legalBasis: 'Pasal 74 UU Peratun' },
          { step: '07', label: 'REPLIK PENGGUGAT', desc: 'Penggugat menanggapi jawaban dan membantah eksepsi.', legalBasis: 'Pasal 75 UU Peratun' },
          { step: '08', label: 'DUPLIK TERGUGAT', desc: 'Tergugat menegaskan kembali bantahan atas dalil replik.', legalBasis: 'Pasal 75 UU Peratun' },
          { step: '09', label: 'PEMBUKTIAN', desc: 'Pemeriksaan alat bukti surat, saksi, ahli, dan pengakuan.', legalBasis: 'Pasal 100 UU Peratun' },
          { step: '10', label: 'INTERVENSI (JIKA ADA)', desc: 'Pemeriksaan kedudukan pihak ketiga yang masuk perkara.', legalBasis: 'Pasal 83 UU Peratun' },
          { step: '11', label: 'KESIMPULAN PARA PIHAK', desc: 'Penyampaian kesimpulan akhir analisis fakta persidangan.', legalBasis: 'Praktik Peratun' },
          { step: '12', label: 'MUSYAWARAH MAJELIS', desc: 'Majelis hakim bermusyawarah menyusun pertimbangan putusan.', legalBasis: 'Pasal 97 UU Peratun' },
          { step: '13', label: 'PENGUCAPAN PUTUSAN', desc: 'Pembacaan putusan akhir dalam sidang terbuka untuk umum.', legalBasis: 'Pasal 108 UU Peratun' },
        ],
      },
    ],
  },

  // 29 — INTERVENSI PIHAK KETIGA
  {
    id: 29,
    numberStr: 'TOPIK 29',
    title: 'Intervensi Pihak Ketiga dalam Persidangan',
    shortDesc: 'Penerapan Pasal 83 UU Peratun: syarat formil masuknya pihak ketiga, perbandingan Tussenkomst dan Voeging, serta pemeriksaan kepentingannya.',
    summaryQuote: 'Pihak ketiga yang kepentingannya terpengaruh sengketa TUN dapat mengintervensi persidangan melalui bentuk tussenkomst atau voeging.',
    sections: [
      {
        id: 'tussenkomst-dan-voeging',
        title: 'A. Perbedaan Mandiri: Tussenkomst vs Voeging',
        content: [
          'Pasal 83 UU Peratun memfasilitasi perlindungan hak pihak ketiga yang terkait dengan KTUN yang disengketakan:',
        ],
        comparisonBoxes: [
          {
            title: 'TUSSENKOMST (Menengahi)',
            description: 'Membela hak dan kepentingan sendiri',
            items: [
              'Pihak ketiga masuk menempatkan diri sebagai pihak yang berdiri sendiri.',
              'Tuntutannya bertentangan baik dengan tuntutan Penggugat maupun dalil Tergugat.',
              'Contoh: Dalam sengketa izin tambang antara Warga vs Bupati, perusahaan pemilik izin lama masuk menuntut hak konsesinya sendiri.',
            ],
          },
          {
            title: 'VOEGING (Menyertai / Menggabungkan Diri)',
            description: 'Mendukung salah satu pihak yang bersengketa',
            items: [
              'Pihak ketiga masuk menggabungkan diri ke salah satu kubu yang telah ada.',
              'Memperkuat dalil Penggugat atau memperkuat posisi Tergugat demi mengamankan kepentingannya.',
              'Contoh: Pembeli tanah bersertifikat masuk menggabungkan diri dengan Tergugat (BPN) untuk mempertahankan sertifikat yang digugat pihak lain.',
            ],
          },
        ],
      },
    ],
  },

  // 30 — PEMBUKTIAN
  {
    id: 30,
    numberStr: 'TOPIK 30',
    title: 'Hukum Pembuktian di PTUN',
    shortDesc: 'Lima alat bukti sah Pasal 100 UU Peratun, prinsip pembuktian bebas yang dibatasi (vrije bewijsleer), peran aktif hakim (dominus litis), dan beban pembuktian.',
    summaryQuote: 'Alat bukti utama dalam sengketa TUN adalah surat atau tulisan resmi; hakim bersikap aktif (dominus litis) memimpin jalannya pembuktian.',
    sections: [
      {
        id: 'lima-alat-bukti-sah',
        title: 'A. Lima Alat Bukti Sah Menurut Pasal 100 UU Peratun',
        content: [
          'Hukum acara peradilan tata usaha negara menetapkan alat bukti yang sah secara limitatif:',
        ],
        table: {
          headers: ['No', 'Jenis Alat Bukti Sah', 'Karakteristik & Nilai Pembuktian di PTUN'],
          rows: [
            ['1', 'Surat atau Tulisan', 'Alat bukti primer (paling utama). Terdiri dari akta otentik (nilai bukti sempurna), akta di bawah tangan, dan surat dinas resmi.'],
            ['2', 'Keterangan Ahli', 'Pendapat ilmiah independen dari akademisi atau profesional yang memiliki keahlian khusus di bidang sengketa.'],
            ['3', 'Keterangan Saksi', 'Keterangan orang ketiga mengenai peristiwa nyata yang ia dengar, lihat, atau alami sendiri secara langsung.'],
            ['4', 'Pengakuan Para Pihak', 'Pernyataan membenarkan dalil lawan, namun tidak mengikat mutlak majelis hakim dalam sengketa hukum publik.'],
            ['5', 'Pengetahuan Hakim', 'Fakta notoir (hal yang sudah diketahui umum) dan fakta yang diperoleh hakim selama proses persidangan.']
          ]
        },
      },
      {
        id: 'beban-pembuktian-hakim-aktif',
        title: 'B. Asas Pembuktian Bebas yang Dibatasi dan Asas Dominus Litis',
        content: [
          'Berbeda dengan hukum acara perdata murni yang menempatkan hakim pasif, di PTUN berlaku:',
          '1. Asas Hakim Aktif (Dominus Litis): Hakim berwenang menentukan fakta apa yang harus dibuktikan, menentukan beban pembuktian kepada siapa, dan memerintahkan pejabat menyerahkan dokumen rahasia negara.',
          '2. Asas Pembuktian Bebas yang Dibatasi (Pasal 107 UU Peratun): Hakim menentukan sendiri bobot pembuktian dengan sekurang-kurangnya 2 (dua) alat bukti yang sah dan keyakinan hakim.',
        ],
      },
    ],
  },

  // 31 — JAWABAN TERGUGAT
  {
    id: 31,
    numberStr: 'TOPIK 31',
    title: 'Jawaban Tergugat dan Eksepsi',
    shortDesc: 'Fungsi jawaban badan/pejabat TUN, sistematika eksepsi absolut/relatif, kedaluwarsa, gugatan kabur (obscuur libel), serta sangkalan pokok perkara.',
    summaryQuote: 'Jawaban Tergugat memuat tanggapan formal berupa eksepsi dan bantahan materiil pokok perkara disertai dasar wewenang penerbitan KTUN.',
    sections: [
      {
        id: 'sistematika-jawaban',
        title: 'A. Sistematika Jawaban Tergugat di Persidangan',
        content: [
          'Dalam menanggapi gugatan Penggugat, Tergugat menyusun surat jawaban yang terbagi menjadi dua bagian besar:',
        ],
        keyPoints: [
          '1. Bagian Eksepsi (Tangkisan Formal): Keberatan yang tidak menyangkut pokok perkara, antara lain:',
          '   - Eksepsi Kewenangan Absolut: Pengadilan Negeri atau MA yang berwenang, bukan PTUN.',
          '   - Eksepsi Kewenangan Relatif: PTUN daerah lain yang berwenang memeriksa Tergugat.',
          '   - Eksepsi Gugatan Kedaluwarsa (Verjaring): Telah lewat batas waktu 90 hari.',
          '   - Eksepsi Obscuur Libel: Gugatan kabur, tidak jelas posita dan petitumnya.',
          '   - Eksepsi Diskualifikasi: Penggugat tidak memiliki kepentingan atau legal standing.',
          '2. Bagian Pokok Perkara (Verweer ten Principale): Bantahan terhadap dalil-dalil substansi penggugat, menjelaskan bahwa penerbitan KTUN telah sesuai wewenang, prosedur, materi, dan AUPB.',
        ],
        highlightBox: {
          title: 'CATATAN PENTING BAHAN PERKULIAHAN',
          text: 'Apabila dalam bahan ajar terdapat slip penyebutan instansi peradilan lain, pemaknaan substantif tetap diletakkan secara konsisten dalam kerangka hukum acara peradilan tata usaha negara.',
        },
      },
    ],
  },

  // 32 — REPLIK DAN DUPLIK
  {
    id: 32,
    numberStr: 'TOPIK 32',
    title: 'Replik Penggugat dan Duplik Tergugat',
    shortDesc: 'Fungsi dialektika replik dan duplik dalam persidangan biasa maupun e-Court, pengikatan dalil sengketa, dan persiapan tahap pembuktian.',
    summaryQuote: 'Replik dan duplik menjadi sarana pertukaran dalil terakhir guna mematangkan sengketa sebelum masuk ke ranah pembuktian.',
    sections: [
      {
        id: 'peran-replik-duplik',
        title: 'A. Fungsi Replik dan Duplik dalam Pemeriksaan Perkara',
        content: [
          'Tahap replik dan duplik menyempurnakan dialektika para pihak:',
        ],
        comparisonBoxes: [
          {
            title: 'REPLIK PENGGUGAT',
            description: 'Tanggapan atas jawaban Tergugat',
            items: [
              'Penggugat menanggapi dan melumpuhkan eksepsi yang diajukan oleh Tergugat.',
              'Mempertegas kebenaran dalil posita dengan bukti pendahuluan.',
              'Membantah dalil Tergugat yang menyatakan KTUN diterbitkan sesuai AUPB.',
            ],
          },
          {
            title: 'DUPLIK TERGUGAT',
            description: 'Tanggapan Tergugat atas Replik Penggugat',
            items: [
              'Tergugat menegaskan kembali eksepsi formalnya dan menolak dalil replik.',
              'Menutup pertukaran surat menyurat dan memohon majelis hakim melanjutkan ke tahap pembuktian.',
              'Dalam sistem e-Court, pertukaran replik dan duplik diunggah langsung melalui portal persidangan elektronik.',
            ],
          },
        ],
      },
    ],
  },

  // 33 — PUTUSAN
  {
    id: 33,
    numberStr: 'TOPIK 33',
    title: 'Putusan Pengadilan Tata Usaha Negara',
    shortDesc: 'Empat jenis amar putusan akhir menurut Pasal 97 UU Peratun (Gugur, Tidak Diterima/NO, Ditolak, Dikabulkan), isi putusan, dan akibat eksekusi.',
    summaryQuote: 'Pasal 97 UU Peratun mengatur empat jenis putusan akhir: Gugatan Gugur, Tidak Diterima (NO), Ditolak, atau Dikabulkan.',
    sections: [
      {
        id: 'empat-jenis-putusan',
        title: 'A. Empat Jenis Amar Putusan Akhir (Pasal 97 UU Peratun)',
        content: [
          'Setelah musyawarah majelis hakim selesai, pengadilan menjatuhkan salah satu dari empat varian putusan:',
        ],
        table: {
          headers: ['Jenis Putusan', 'Kondisi Fakta Terjadinya', 'Akibat Hukum Terhadap Objek Sengketa'],
          rows: [
            ['1. Gugatan Gugur', 'Penggugat atau kuasanya tidak hadir pada sidang yang ditentukan tanpa alasan sah sekalipun telah dipanggil secara patut.', 'Pemeriksaan dihentikan; sengketa dianggap selesai tanpa memeriksa pokok perkara.'],
            ['2. Gugatan Tidak Diterima (NO)', 'Gugatan cacat formalitas: tidak memenuhi syarat Pasal 56, salah alamat pengadilan, belum lewat upaya administratif, atau kedaluwarsa.', 'Pokok perkara tidak diperiksa; KTUN tetap sah berlaku; penggugat dapat memperbaiki gugatan baru bila belum kedaluwarsa.'],
            ['3. Gugatan Ditolak', 'Gugatan memenuhi syarat formal, namun setelah pembuktian dalil-dalil penggugat tidak terbukti dan KTUN terbukti sah menurut hukum.', 'KTUN tetap berkekuatan hukum penuh dan mengikat; gugatan penggugat dimentahkan.'],
            ['4. Gugatan Dikabulkan', 'Dalil-dalil penggugat terbukti sah dan meyakinkan bahwa KTUN melanggar perundang-undangan atau AUPB.', 'KTUN dinyatakan batal atau tidak sah; Tergugat diwajibkan mencabut KTUN atau menerbitkan KTUN baru serta ganti rugi/rehabilitasi.']
          ]
        },
      },
      {
        id: 'isi-dan-eksekusi',
        title: 'B. Sistematika Isi Putusan dan Pelaksanaan Eksekusi',
        content: [
          'Putusan PTUN wajib memuat kepala putusan "Demi Keadilan Berdasarkan Ketuhanan Yang Maha Esa", identitas lengkap, pertimbangan hukum (ratio decidendi), dan amar putusan.',
          'Pelaksanaan putusan yang telah berkekuatan hukum tetap (inkracht van gewijsde) bersifat wajib ditaati oleh Badan/Pejabat TUN. Jika pejabat tidak melaksanakan putusan, dikenakan sanksi administratif dan pengumuman di media massa.',
        ],
      },
    ],
  },

  // 34 — UPAYA HUKUM
  {
    id: 34,
    numberStr: 'TOPIK 34',
    title: 'Upaya Hukum Terhadap Putusan Pengadilan TUN',
    shortDesc: 'Upaya hukum biasa (Perlawanan, Banding ke PTTUN, Kasasi ke MA) dan upaya hukum luar biasa (Peninjauan Kembali / PK) serta tenggang waktunya.',
    summaryQuote: 'Pihak yang tidak puas terhadap putusan peradilan tingkat pertama berhak mengajukan upaya hukum banding ke PTTUN, kasasi ke MA, dan Peninjauan Kembali.',
    sections: [
      {
        id: 'upaya-hukum-biasa-luar-biasa',
        title: 'A. Klasifikasi dan Tenggang Waktu Upaya Hukum',
        content: [
          'Bahan perkuliahan membagi upaya hukum dalam sengketa TUN menjadi dua kelompok:',
        ],
        table: {
          headers: ['Tingkatan Upaya Hukum', 'Lembaga yang Berwenang', 'Tenggang Waktu Pengajuan', 'Alasan Pengajuan'],
          rows: [
            ['Perlawanan (Verzet)', 'PTUN (Majelis Hakim pemeriksa perlawanan)', '14 hari sejak penetapan dismissal diucapkan/diberitahukan.', 'Menolak penetapan dismissal Ketua Pengadilan yang menggugurkan gugatan.'],
            ['Banding', 'Pengadilan Tinggi Tata Usaha Negara (PTTUN)', '14 hari setelah putusan PTUN diberitahukan secara sah.', 'Pemeriksaan ulang fakta dan hukum karena merasa putusan tingkat pertama keliru.'],
            ['Kasasi', 'Mahkamah Agung (MA)', '14 hari setelah putusan banding PTTUN diberitahukan.', 'Uji penerapan hukum (judex juris): apakah ada kelalaian hukum, pelanggaran batas wewenang, atau salah menerapkan hukum.'],
            ['Peninjauan Kembali (PK)', 'Mahkamah Agung (MA)', '180 hari sejak ditemukannya novum atau putusan inkracht.', 'Upaya hukum luar biasa karena adanya bukti baru (novum) yang menentukan atau kekhilafan hakim yang nyata.']
          ]
        },
      },
    ],
  },
];
