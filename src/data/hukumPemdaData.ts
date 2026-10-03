import { Topic } from './hukumIslamData';

export const HUKUM_PEMDA_METADATA = {
  courseCode: 'HKO62521',
  credits: '2 SKS',
  faculty: 'Fakultas Hukum Universitas Brawijaya (FH UB)',
  syllabus: 'RPS Sub-CPMK 1 – 7',
  lecturer: 'M. Dahlan, S.H., M.H.',
  format: 'Modul Ujian UTS',
  coverage: 'Pertemuan 1 – 7 (Persiapan UTS Komprehensif)',
};

export const PEMDA_TOPICS_DATA: Topic[] = [
  {
    id: 1,
    numberStr: 'PERTEMUAN 01',
    title: 'Bentuk Negara Kesatuan & Pemerintahan Daerah',
    shortDesc: 'Konsep dasar letak kedaulatan, varian negara kesatuan, jangkar konstitusional UUD 1945, serta yurisprudensi MK.',
    summaryQuote: 'Pembeda utama bentuk negara bukan terletak pada luas kewenangan daerah, melainkan dari mana kewenangan itu berasal: derivatif ataukah orisinal.',
    sections: [
      {
        id: 'konsep-dasar-bentuk-negara',
        title: '1. Konsep Dasar Bentuk Negara & Letak Kedaulatan',
        content: [
          'Dalam diskursus hukum tata negara, pembeda utama bentuk negara bukan semata-mata diukur dari seberapa luas kewenangan yang dinikmati oleh daerah, melainkan berakar pada dari mana sumber kewenangan itu berasal (letak kedaulatan).',
          'Terdapat tiga bentuk negara utama dengan karakteristik yuridis yang saling bertolak belakang:'
        ],
        table: {
          headers: ['Bentuk Negara', 'Kedaulatan & Sumber Kewenangan', 'Karakteristik Utama'],
          rows: [
            [
              'Negara Kesatuan (Eenheidsstaat)',
              'Kedaulatan Tunggal berada pada Pemerintah Pusat. Kewenangan daerah bersifat DERIVATIF (diberikan/diturunkan oleh undang-undang pusat).',
              'Satu konstitusi, satu kepala negara, satu lembaga legislatif tertinggi nasional. Kewenangan daerah sewaktu-waktu dapat digeser atau ditarik kembali oleh pembentuk UU pusat.'
            ],
            [
              'Negara Federal (Bondsstaat)',
              'Kedaulatan terbagi secara konstitusional antara pemerintah federal dan negara-negara bagian. Kewenangan negara bagian bersifat ORISINAL.',
              'Negara bagian memiliki konstitusi sendiri (pouvoir constituant); batas kewenangan dijamin langsung oleh konstitusi federal dan tidak dapat ditarik sepihak oleh federal.'
            ],
            [
              'Konfederasi (Statenbond)',
              'Kedaulatan tetap berada penuh pada masing-masing negara anggota berdasarkan perjanjian internasional.',
              'Perserikatan antar-negara berdaulat penuh; badan bersama yang dibentuk hanya memiliki kewenangan delegasi sementara yang terbatas.'
            ]
          ]
        }
      },
      {
        id: 'varian-kesatuan-dan-jangkar',
        title: '2. Varian Negara Kesatuan & Jangkar Konstitusional Indonesia',
        content: [
          'Negara kesatuan memiliki dua varian operasional:',
          '• Kesatuan Sentralistik: Seluruh urusan pemerintahan diselenggarakan langsung oleh pemerintah pusat melalui aparat birokrasi vertikal. Daerah hanya diposisikan sebagai wilayah administratif belaka (local state government), sebagaimana dipraktikkan pada era UU No. 5 Tahun 1974.',
          '• Kesatuan Desentralistik: Sebagian urusan pemerintahan diserahkan kepada daerah otonom (local self-government) yang berstatus sebagai badan hukum publik mandiri, seperti praktik Indonesia pasca-reformasi.',
          '',
          'Jangkar Konstitusional dalam UUD NRI 1945:',
          '1. Pasal 1 ayat (1): "Negara Indonesia ialah Negara Kesatuan, yang berbentuk Republik."',
          '2. Pasal 37 ayat (5): Bentuk Negara Kesatuan Republik Indonesia merupakan klausul abadi (eternity clause / unamendable provision) yang secara yuridis tidak dapat diubah.',
          '3. Pasal 18 ayat (1): Pilihan frasa "DIBAGI ATAS" (bukan "terdiri atas") secara doktrinal menegaskan bahwa daerah otonom lahir dari pembagian wilayah oleh kekuasaan pusat, bukan kumpulan daerah berdaulat yang menggabungkan diri.'
        ],
        keyPoints: [
          'Kewenangan Derivatif: Otonomi bersumber dari UU pusat, tidak ada konsep kedaulatan daerah.',
          'Supremasi Hukum Pusat: Peraturan Daerah (Perda) tidak boleh bertentangan dengan peraturan perundang-undangan yang lebih tinggi (asas lex superior derogat legi inferiori).',
          'Pengawasan Pusat: Pemerintah pusat memiliki kewenangan pembinaan dan pengawasan (binwas) baik preventif maupun represif (Pasal 373–378 UU 23/2014).',
          'Keutuhan Wilayah: Dalam negara kesatuan tidak diakui hak untuk memisahkan diri dari kedaulatan negara (no right of secession).'
        ],
        highlightBox: {
          title: 'Frasa "Dibagi Atas" vs "Terdiri Atas"',
          text: 'Frasa "dibagi atas" dalam Pasal 18 ayat (1) UUD 1945 adalah bukti yuridis bahwa Indonesia adalah Negara Kesatuan. Pusat membagi wilayahnya kepada daerah. Sebaliknya, frasa "terdiri atas" adalah ciri khas negara federal di mana negara-negara bagian yang berdaulat menggabungkan diri ke dalam federasi.'
        }
      },
      {
        id: 'yurisprudensi-mk-pertemuan-1',
        title: '3. Yurisprudensi Mahkamah Konstitusi & Catatan Indonesianis',
        content: [
          'Yurisprudensi Penting Mahkamah Konstitusi:',
          '• Putusan MK No. 137/PUU-XIII/2015 & No. 56/PUU-XIV/2016 (Pengawasan Perda): MK membatalkan kewenangan Mendagri dan Gubernur untuk membatalkan Perda Kabupaten/Kota dan Provinsi secara sepihak. MK menegaskan bahwa executive review terhadap Perda melanggar prinsip pemisahan kekuasaan (separation of powers). Akibat putusan ini, pengujian represif terhadap Perda kini murni menjadi ranah kewenangan judicial review di Mahkamah Agung (MA).',
          '• Putusan MK No. 35/PUU-X/2012 (Hutan Adat): Mahkamah Konstitusi menegaskan bahwa "Hutan adat adalah hutan hak, bukan hutan negara." Hal ini membuktikan bahwa negara kesatuan Indonesia mengakui pluralisme hukum dan keberadaan kesatuan masyarakat hukum adat (Pasal 18B ayat 2).',
          '',
          'Catatan Kritis Indonesianis (Simon Butt & Tim Lindsey):',
          'Desentralisasi pasca-1998 merupakan jawaban kompromi politik atas trauma mendalam terhadap sentralisme otoriter Orde Baru serta respons membendung ancaman disintegrasi bangsa. Namun, kelemahan mendasarnya adalah kerangka hukum regulasi daerah berubah terlalu cepat dan tidak stabil, serta terjadi dualisme sengketa norma hukum yang terbelah antara MK (menguji UU) dan MA (menguji Perda/peraturan di bawah UU).'
        ]
      }
    ]
  },
  {
    id: 2,
    numberStr: 'PERTEMUAN 02',
    title: 'Asas Desentralisasi, Dekonsentrasi & Tugas Pembantuan',
    shortDesc: 'Landasan teoretis Brian C. Smith, matriks komparasi yuridis tiga asas, kedudukan ganda gubernur, dan Putusan MK Cipta Kerja.',
    summaryQuote: 'Desentralisasi adalah penyerahan urusan beralih menjadi urusan rumah tangga daerah, Dekonsentrasi adalah pelimpahan wewenang pusat ke instansi vertikal/GWPP, dan Tugas Pembantuan adalah penugasan teknis pelaksanaan.',
    sections: [
      {
        id: 'landasan-teoretis-asas',
        title: '1. Landasan Teoretis & Konstitusional Asas Penyelenggaraan',
        content: [
          'Menurut pakar hukum tata pemerintahan Brian C. Smith, terdapat dua alasan klasik yang melandasi pentingnya penerapan desentralisasi:',
          '1. Alasan Politik: Mendorong tumbuhnya demokrasi lokal, menyediakan wahana pendidikan politik warga, serta menciptakan mekanisme checks and balances vertikal antara pusat dan daerah.',
          '2. Alasan Administratif: Meningkatkan efisiensi dan efektivitas penyelenggaraan pelayanan publik, serta responsivitas dan kepekaan birokrasi terhadap kebutuhan riil masyarakat lokal.',
          '',
          'Konstruksi Konstitusional UUD NRI 1945:',
          'Pasal 18 ayat (2) dan Pasal 18A UUD 1945 secara tekstual hanya menyebut Otonomi (Desentralisasi) dan Tugas Pembantuan (Medebewind).',
          'Asas Dekonsentrasi tidak tercantum secara eksplisit dalam Pasal 18 UUD 1945, melainkan lahir dari undang-undang organik sebagai derivasi dari kekuasaan Presiden selaku pemegang kekuasaan pemerintahan negara berdasarkan Pasal 4 ayat (1) UUD 1945.'
        ]
      },
      {
        id: 'matriks-tiga-asas',
        title: '2. Matriks Pembanding Tiga Asas Utama (Pasal 1 UU 23/2014)',
        content: [
          'Pasal 1 UU No. 23 Tahun 2014 merumuskan definisi dan batasan tegas antara Desentralisasi, Dekonsentrasi, dan Tugas Pembantuan:'
        ],
        table: {
          headers: ['Aspek Pembeda', 'Desentralisasi (Angka 8)', 'Dekonsentrasi (Angka 9)', 'Tugas Pembantuan / Medebewind (Angka 11)'],
          rows: [
            ['Sifat Perbuatan', 'Penyerahan (Overdracht) urusan pemerintahan.', 'Pelimpahan (Delegatie/Mandaat) wewenang kekuasaan.', 'Penugasan (Medebewind) pelaksanaan teknis urusan.'],
            ['Pemilik Urusan', 'Beralih sepenuhnya menjadi Urusan Rumah Tangga Daerah.', 'Tetap milik sah Pemerintah Pusat.', 'Tetap milik sah Pemberi Tugas (Pusat atau Provinsi).'],
            ['Penerima & Pelaksana', 'Daerah Otonom (dilaksanakan oleh Kepala Daerah & DPRD beserta Perangkat Daerah).', 'Gubernur selaku Wakil Pemerintah Pusat (GWPP) & Instansi Vertikal kementerian di daerah.', 'Daerah Otonom atau Desa (Perangkat Daerah/Aparatur Desa penerima penugasan).'],
            ['Sumber Pembiayaan', 'APBD (didukung PAD dan Transfer ke Daerah / TKD).', 'APBN secara penuh.', 'APBN atau APBD instansi pemberi tugas.'],
            ['Pertanggungjawaban', 'Kepala Daerah bertanggung jawab kepada DPRD dan rakyat daerah.', 'Kepada Presiden melalui Menteri Dalam Negeri.', 'Laporan teknis pertanggungjawaban kepada pemberi tugas.'],
            ['Produk Hukum yang Dihasilkan', 'Peraturan Daerah (Perda) dan Peraturan Kepala Daerah (Perkada).', 'Keputusan Pejabat Pusat / Keputusan Gubernur sebagai wakil pusat.', 'Peraturan Pelaksanaan administratif teknis (bukan Perda mandiri).']
          ]
        }
      },
      {
        id: 'kedudukan-ganda-gubernur',
        title: '3. Kedudukan Ganda Gubernur & Dinamika Hukum',
        content: [
          'Kedudukan Ganda Gubernur / Gubernur Berkepala Dua (Pasal 91 UU 23/2014 jo. PP No. 33 Tahun 2018):',
          'Dalam sistem ketatanegaraan Indonesia, Gubernur mengemban status ganda:',
          '1. Sebagai Kepala Daerah Otonom: Memimpin daerah otonom provinsi, dipilih secara demokratis oleh rakyat, memimpin urusan desentralisasi provinsi, dan menyampaikan Laporan Keterangan Pertanggungjawaban (LKPJ) kepada DPRD Provinsi.',
          '2. Sebagai Wakil Pemerintah Pusat di Wilayah Provinsi (GWPP): Bertindak sebagai perpanjangan tangan Presiden untuk membina, mengawasi, dan mengoordinasikan bupati/walikota di wilayahnya; seluruh operasional GWPP dibiayai oleh APBN, dan bertanggung jawab langsung kepada Presiden melalui Mendagri.',
          '',
          'Tipologi Desentralisasi Menurut Dennis A. Rondinelli:',
          '• Dekonsentrasi: Pergeseran beban kerja administratif dari kementerian pusat ke kantor wilayah di daerah tanpa otonomi politik.',
          '• Delegasi: Pelimpahan fungsi pengambilan keputusan kepada badan semi-otonom atau otoritas khusus.',
          '• Devolusi: Penyerahan penuh wewenang dan sumber daya kepada daerah otonom yang mandiri secara politik dan hukum (inilah konsep Desentralisasi dalam hukum Indonesia).',
          '• Privatisasi: Pelepasan tanggung jawab pengelolaan urusan publik kepada sektor swasta.',
          '',
          'Putusan MK No. 91/PUU-XVIII/2020 (UU Cipta Kerja & Resentralisasi Perizinan):',
          'MK menggarisbawahi prinsip meaningful participation (hak publik untuk didengar, dipertimbangkan, dan mendapatkan penjelasan). Penarikan kembali kewenangan perizinan dari daerah ke pusat tidak boleh dilakukan sepihak melainkan harus transparan dan akuntabel.',
          '',
          'Debat Kritis Indonesianis:',
          'Vedi R. Hadiz mengkritik bahwa desentralisasi di Indonesia berisiko mendistribusikan kekuasaan korup kepada aliansi predatoris lokal (oligarki birokrat, pengusaha hitam, dan politisi lokal). Sebaliknya, Edward Aspinall berpendapat bahwa desentralisasi tetap berhasil membuka ruang partisipasi dan akuntabilitas publik yang nyata di akar rumput.'
        ]
      }
    ]
  },
  {
    id: 3,
    numberStr: 'PERTEMUAN 03',
    title: 'Desentralisasi Asimetris (Khusus & Istimewa)',
    shortDesc: 'Konsep simetris vs asimetris, tiga dimensi desentralisasi, dua pintu konstitusional Pasal 18A dan 18B, serta lima wujud asimetri daerah di Indonesia.',
    summaryQuote: 'Desentralisasi asimetris adalah perlakuan hukum khusus dan berlainan bagi daerah tertentu atas dasar latar belakang historis, resolusi konflik, kebudayaan, atau fungsi strategis nasional.',
    sections: [
      {
        id: 'konsep-desentralisasi-asimetris',
        title: '1. Konsep, Tiga Dimensi, dan Dua Pintu Konstitusional',
        content: [
          'Dalam praktik ketatanegaraan dikenal dua kutub pola desentralisasi:',
          '• Desentralisasi Simetris: Semua daerah otonom diberikan porsi kewenangan, kelembagaan birokrasi, dan formula keuangan yang seragam dan baku. UU No. 23 Tahun 2014 berlaku sebagai lex generalis bagi daerah-daerah simetris.',
          '• Desentralisasi Asimetris: Pemberian perlakuan hukum, wewenang, atau format kelembagaan yang berbeda (khusus/istimewa) bagi daerah tertentu berdasarkan alasan sejarah perjuangan, resolusi konflik politik, keistimewaan adat-budaya, atau fungsi strategis nasional.',
          '',
          'Tiga Dimensi Desentralisasi:',
          '1. Dimensi Politik: Berkaitan dengan sistem suksesi kepemimpinan lokal (misal: pilkada langsung vs penetapan) dan kewenangan pembentukan regulasi daerah.',
          '2. Dimensi Administratif: Pengaturan pembagian urusan konkuren, kelembagaan birokrasi perangkat daerah, dan manajemen kepegawaian aparatur sipil.',
          '3. Dimensi Fiskal: Kemandirian pemungutan Pendapatan Asli Daerah (PAD), alokasi Transfer ke Daerah (TKD), serta keleluasaan merancang anggaran APBD.',
          '',
          'Dua Pintu Konstitusional Pengakuan Asimetri dalam UUD NRI 1945:',
          '• Pintu Pertama — Pasal 18A ayat (1): Menegaskan bahwa hubungan antara pusat dan daerah harus "memperhatikan kekhususan dan keragaman daerah".',
          '• Pintu Kedua — Pasal 18B ayat (1): "Negara mengakui dan menghormati satuan-satuan pemerintahan daerah yang bersifat khusus atau bersifat istimewa yang diatur dengan undang-undang."',
          '• Pasal 18B ayat (2): Mengakui dan menghormati kesatuan-kesatuan masyarakat hukum adat beserta hak-hak tradisionalnya sepanjang masih hidup dan sesuai perkembangan masyarakat.'
        ]
      },
      {
        id: 'lima-wujud-asimetri',
        title: '2. Lima Wujud Daerah Asimetris di Indonesia',
        content: [
          'Hingga saat ini, Indonesia memiliki lima entitas daerah yang diatur secara asimetris dengan undang-undang khusus (lex specialis):'
        ],
        table: {
          headers: ['Daerah Asimetris', 'Dasar Hukum Utama', 'Wujud Kekhususan / Keistimewaan Utama'],
          rows: [
            [
              'Aceh',
              'UU No. 11 Tahun 2006 tentang Pemerintahan Aceh (UUPA)',
              'Diperbolehkannya pendirian partai politik lokal (parlok), penerapan Syariat Islam bagi muslim dengan peradilan Mahkamah Syar\'iyah dan hukum Qanun, pengakuan lembaga adat Wali Nanggroe, serta alokasi Dana Otonomi Khusus (Dana Otsus).'
            ],
            [
              'Papua (6 Provinsi: Papua, Papua Barat, Papua Selatan, Papua Tengah, Papua Pegunungan, Papua Barat Daya)',
              'UU No. 21 Tahun 2001 jo. UU No. 2 Tahun 2021 tentang Otonomi Khusus Papua',
              'Keberadaan Majelis Rakyat Papua (MRP) sebagai representasi kultural adat, agama, dan perempuan; syarat mutlak Orang Asli Papua (OAP) bagi calon Gubernur dan Wakil Gubernur; produk hukum Perdasus dan Perdasi; serta alokasi Dana Otsus.'
            ],
            [
              'Daerah Istimewa Yogyakarta (DIY)',
              'UU No. 13 Tahun 2012 tentang Keistimewaan DIY',
              'Mekanisme pengisian jabatan Gubernur melalui penetapan Sultan Hamengku Buwono dan Wakil Gubernur melalui penetapan Adipati Paku Alam (tanpa pilkada langsung); kelembagaan Kasultanan dan Kadipaten; kewenangan tata ruang tanah kasultanan; dan alokasi Dana Keistimewaan.'
            ],
            [
              'Daerah Khusus Ibukota (DKI) Jakarta / Provinsi Daerah Khusus Jakarta (DKJ)',
              'UU No. 29 Tahun 2007 jo. UU No. 2 Tahun 2024 tentang Provinsi DKJ',
              'Otonomi tunggal hanya diletakkan di tingkat Provinsi; Kota/Kabupaten Administrasi tidak berstatus daerah otonom (tidak memiliki DPRD dan walikota/bupati diangkat oleh Gubernur); serta fungsi strategis sebagai Pusat Perekonomian Nasional dan Kawasan Aglomerasi Jabodetabekjur.'
            ],
            [
              'Bali',
              'UU No. 15 Tahun 2023 tentang Provinsi Bali',
              'Pengakuan yuridis terhadap kedudukan Desa Adat, perlindungan ekosistem dan kebudayaan Bali, serta mandat pengelolaan lingkungan dan pariwisata yang bertumpu pada kearifan lokal falsafah Tri Hita Karana dan Sad Kerthi.'
            ]
          ]
        },
        highlightBox: {
          title: 'Asas Lex Specialis Derogat Legi Generali',
          text: 'Bagi lima daerah asimetris ini, undang-undang kekhususan/keistimewaan masing-masing berlaku sebagai lex specialis yang mengesampingkan ketentuan umum dalam UU No. 23 Tahun 2014 (lex generalis) sepanjang diatur secara khusus.'
        }
      }
    ]
  },
  {
    id: 4,
    numberStr: 'PERTEMUAN 04',
    title: 'Penyelenggaraan Pemda Sebelum Amandemen UUD 1945',
    shortDesc: 'Tekstur asli Pasal 18, dinamika pendulum sentralisasi-desentralisasi (1945–1999), komparasi UU 1/1957 vs UU 5/1974, dan koreksi reformasi.',
    summaryQuote: 'Ketiadaan detail dalam Pasal 18 asli UUD 1945 menyebabkan politik hukum pemerintahan daerah berayun bebas laksana pendulum antara puncak desentralisasi (UU 1/1957) hingga ekstrem sentralisme (UU 5/1974).',
    sections: [
      {
        id: 'tekstur-pasal-18-asli',
        title: '1. Tekstur Pasal 18 UUD 1945 Naskah Asli & Penjelasannya',
        content: [
          'Sebelum diamandemen pada tahun 2000, Pasal 18 UUD 1945 hanya terdiri dari satu kalimat ringkas:',
          '"Pembagian daerah Indonesia atas daerah besar dan kecil, dengan bentuk susunan pemerintahannya ditetapkan dengan undang-undang, dengan memandang dan mengingati dasar permusyawaratan dalam sistem pemerintahan negara, dan hak-hak asal-usul dalam daerah-daerah yang bersifat istimewa."',
          '',
          'Tiga Catatan Kunci Penjelasan Pasal 18 Asli:',
          '1. Membedakan daerah otonom (streek dan locale rechtsgemeenschappen) dari daerah yang semata-mata bersifat administratif (administratieve gewesten).',
          '2. Menghormati dan mengakui keberadaan daerah istimewa (zelfbesturende landschappen dan volksgemeenschappen seperti desa di Jawa, nagari di Minangkabau, marga di Palembang, kuria di Tapanuli).',
          '3. Pasal 18 naskah asli sama sekali tidak menyebutkan berapa jumlah tingkatan daerah otonom dan tidak mewajibkan pemilihan kepala daerah secara langsung. Ketiadaan batasan norma ini memberikan cek kosong kepada pembentuk UU sehingga politik hukum pemda berayun tajam (pendulum effect).'
        ]
      },
      {
        id: 'garis-waktu-pendulum',
        title: '2. Garis Waktu & Pendulum Politik Hukum Pemda (1945–1999)',
        content: [
          'Sejarah regulasi pemerintahan daerah di Indonesia pra-amandemen memperlihatkan tarikan tarik-menarik antara sentralisasi dan desentralisasi:'
        ],
        table: {
          headers: ['Undang-Undang', 'Konteks Politik Ketatanegaraan', 'Karakter Pokok Penyelenggaraan Otonomi Daerah'],
          rows: [
            [
              'UU No. 1 Tahun 1945',
              'Awal Kemerdekaan & Konsolidasi Negara',
              'Desentralisasi darurat. Komite Nasional Daerah (KND) berfungsi sebagai badan legislatif daerah, sedangkan kepala daerah berkedudukan sebagai aparat/pejabat pusat.'
            ],
            [
              'UU No. 22 Tahun 1948',
              'Masa Revolusi Kemerdekaan',
              'Sangat desentralistik. Mengenal tiga tingkatan daerah otonom (Provinsi, Kabupaten/Kota Besar, Desa/Kota Kecil). Kepala daerah dipilih oleh DPRD dan disahkan oleh pusat.'
            ],
            [
              'UU No. 1 Tahun 1957',
              'Era Demokrasi Parlementer',
              'PUNCAK DESENTRALISASI. Mengadopsi otonomi seluas-luasnya dengan metode residu terbalik; kepala daerah murni organ daerah yang dipilih dan bertanggung jawab penuh kepada DPRD (tanpa hierarki ke pusat).'
            ],
            [
              'Penpres No. 6/1959 & UU No. 18 Tahun 1965',
              'Era Demokrasi Terpimpin (Dekrit Presiden 1959)',
              'Berbalik ke arah EKSTREM SENTRALISTIK. Kepala daerah diangkat oleh pusat sebagai pegawai pusat/alat revolusi; anggota DPRD-GR ditunjuk oleh penguasa.'
            ],
            [
              'UU No. 5 Tahun 1974',
              'Era Orde Baru',
              'Menganut konsep otonomi "Nyata dan Bertanggung Jawab". Terjadi dualisme wilayah administratif dan daerah otonom; dominasi mutlak asas dekonsentrasi; kepala daerah difungsikan sebagai penguasa tunggal dan alat pusat.'
            ],
            [
              'UU No. 5 Tahun 1979',
              'Era Orde Baru (Pemerintahan Desa)',
              'Penyeragaman paksa struktur pemerintahan desa di seluruh pelosok Indonesia dengan menjiplak model desa Jawa; menghapus eksistensi satuan masyarakat adat tradisional (nagari, marga, dll).'
            ],
            [
              'UU No. 22 Tahun 1999',
              'Awal Era Reformasi',
              '"Big Bang Decentralisation". Otonomi luas diletakkan di tingkat Kabupaten/Kota untuk meredam separatisme provinsi; kepala daerah dipilih dan bertanggung jawab penuh kepada DPRD (bupati/walikota dapat dimakzulkan oleh DPRD).'
            ]
          ]
        }
      },
      {
        id: 'komparasi-kutub-uu',
        title: '3. Komparasi Kutub UU 1/1957 vs UU 5/1974 & Yurisprudensi MK',
        content: [
          'Perbandingan Dua Kutub Ekstrem Regulasi Pemda:'
        ],
        comparisonBoxes: [
          {
            title: 'UU 1/1957 (Open End Arrangement)',
            description: 'Kutub Desentralisasi Maksimal era Parlementer:',
            items: [
              'Memakai Metode Residu: Urusan pusat dirinci secara terbatas, sisanya otomatis menjadi kewenangan daerah otonom.',
              'Kepala daerah adalah organ murni daerah otonom, dipilih langsung oleh DPRD dan bertanggung jawab penuh ke DPRD.',
              'Pusat tidak memiliki kewenangan intervensi administratif terhadap jalannya pemerintahan lokal.'
            ]
          },
          {
            title: 'UU 5/1974 (Ultra Vires System)',
            description: 'Kutub Sentralisme Hegemonik era Orde Baru:',
            items: [
              'Memakai Sistem Penyerahan Bertahap: Daerah otonom hanya berhak menerima urusan apabila dinilai telah "mampu" oleh pemerintah pusat.',
              'Kepala daerah berkedudukan ganda sebagai penguasa tunggal dan alat pemerintah pusat di daerah.',
              'Asas dekonsentrasi mendominasi dan melumpuhkan inisiatif otonomi masyarakat lokal.'
            ]
          }
        ],
        highlightBox: {
          title: 'Tiga Warisan Kelam Orde Baru yang Dikoreksi Reformasi',
          text: '(1) Otonomi semu (kewenangan tanpa kemandirian); (2) Kepala daerah dijadikan alat hegemoni pusat; (3) Penyeragaman paksa struktur desa yang merusak kearifan adat. Selain itu, Putusan MK No. 072-073/PUU-II/2004 menegaskan bahwa frasa "dipilih secara demokratis" (Pasal 18 ayat 4) memberi fleksibilitas kepada pembuat UU untuk memilih model pilkada langsung atau perwakilan via DPRD.'
        }
      }
    ]
  },
  {
    id: 5,
    numberStr: 'PERTEMUAN 05',
    title: 'Penyelenggaraan Pemda Setelah Amandemen UUD 1945',
    shortDesc: 'Tujuh norma kunci Perubahan Kedua UUD 1945, evolusi UU pasca-amandemen (UU 32/2004, UU 23/2014, UU HKPD), dan putusan landmark MK.',
    summaryQuote: 'Amandemen Kedua UUD 1945 mengunci tiang-tiang otonomi daerah: DPRD dipilih via Pemilu, kepala daerah dipilih secara demokratis, dan otonomi seluas-luasnya ditegakkan dengan metode residu terbalik.',
    sections: [
      {
        id: 'tujuh-norma-kunci',
        title: '1. Tujuh Norma Kunci Hasil Perubahan Kedua UUD 1945 (Tahun 2000)',
        content: [
          'Pada Perubahan Kedua Konstitusi (tahun 2000), MPR merombak tatanan pemerintahan daerah dengan memperluas Pasal 18 menjadi tiga pasal utuh (Pasal 18, Pasal 18A, dan Pasal 18B) yang memuat 10 ayat.',
          'Tujuh norma kunci dalam Pasal 18 hasil amandemen adalah sebagai berikut:',
          '1. Pasal 18 ayat (1): Pembagian hierarki wilayah negara kesatuan ke dalam Provinsi, dan Provinsi dibagi atas Kabupaten dan Kota dengan frasa penegasan "dibagi atas".',
          '2. Pasal 18 ayat (2): Pemerintah daerah provinsi, kabupaten, dan kota mengatur dan mengurus sendiri urusan pemerintahan menurut asas otonomi dan tugas pembantuan.',
          '3. Pasal 18 ayat (3): Lembaga perwakilan rakyat daerah (DPRD) wajib ada di setiap daerah otonom dan anggota-anggotanya dipilih melalui Pemilihan Umum (bukan penunjukan).',
          '4. Pasal 18 ayat (4): Kepala Daerah (Gubernur, Bupati, Walikota) masing-masing sebagai kepala pemerintah daerah "dipilih secara demokratis".',
          '5. Pasal 18 ayat (5): Pemerintahan daerah menjalankan otonomi seluas-luasnya, kecuali urusan pemerintahan yang oleh undang-undang ditentukan sebagai urusan Pemerintah Pusat (adopsi resmi Metode Residu Terbalik).',
          '6. Pasal 18 ayat (6): Pemerintahan daerah berhak menetapkan Peraturan Daerah (Perda) dan peraturan-peraturan lain untuk melaksanakan otonomi dan tugas pembantuan.',
          '7. Pasal 18 ayat (7): Susunan dan tata cara penyelenggaraan pemerintahan daerah diatur lebih lanjut dalam undang-undang.'
        ]
      },
      {
        id: 'evolusi-perundang-undangan-pasca-amandemen',
        title: '2. Evolusi Peraturan Perundang-Undangan Pasca-Amandemen',
        content: [
          'Pasca-amandemen UUD 1945, undang-undang pemerintahan daerah terus mengalami penyempurnaan:',
          '• UU No. 22 Tahun 1999 → UU No. 32 Tahun 2004: Memperkenalkan mekanisme Pilkada Langsung untuk pertama kalinya dalam sejarah Indonesia; menguatkan kembali posisi Gubernur sebagai wakil pemerintah pusat di wilayah; serta melepaskan ketergantungan mutlak kepala daerah dari ancaman pemakzulan subjektif oleh DPRD (pertanggungjawaban kini berupa LKPJ).',
          '• UU No. 12 Tahun 2008: Merupakan revisi kedua UU 32/2004 sebagai tindak lanjut atas Putusan MK No. 5/PUU-V/2007 yang membuka hak bagi calon perseorangan (calon independen) untuk maju dalam Pilkada tanpa harus diusung partai politik.',
          '• UU No. 23 Tahun 2014 (Berlaku Sekarang): Melakukan reformasi mendasar dengan merinci pembagian urusan konkuren secara rigid dalam Lampiran UU (matriks kewenangan); memperkuat fungsi pembinaan dan pengawasan (binwas) pusat; serta menata ulang mekanisme pembuatan dan pembatalan Perda.',
          '• UU No. 1 Tahun 2022 tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintahan Daerah (UU HKPD): Menggantikan UU 33/2004 dan UU 28/2009. Menata ulang desentralisasi fiskal melalui optimalisasi porsi pajak dan retribusi daerah, penyederhanaan jenis pajak, serta penguatan skema Transfer ke Daerah (TKD) berbasis kinerja pelayanan.'
        ]
      },
      {
        id: 'penafsiran-terbaru-mk',
        title: '3. Penafsiran Konstitusional Terbaru Mahkamah Konstitusi',
        content: [
          'Dua Putusan Landmark Mahkamah Konstitusi yang membentuk arah pemda kontemporer:'
        ],
        comparisonBoxes: [
          {
            title: 'Putusan MK No. 135/PUU-XXII/2024',
            description: 'Pemisahan Rezim Pemilu Nasional & Pemilu Daerah:',
            items: [
              'Mahkamah memutuskan perlunya pemisahan jadwal waktu penyelenggaraan antara Pemilu Nasional (Presiden, DPR, DPD) dan Pemilu Lokal/Daerah (DPRD Provinsi/Kab/Kota & Kepala Daerah).',
              'Diberikan jeda waktu tertentu antara kedua pemilu agar diskursus dan isu pembangunan daerah tidak tenggelam oleh hegemoni isu politik nasional (efek coattail).'
            ]
          },
          {
            title: 'Putusan MK No. 195/PUU-XXIV/2026',
            description: 'Uji Konstitusionalitas Mekanisme Pilkada:',
            items: [
              'Permohonan pengujian yang meminta penegasan bahwa pemilihan kepala daerah wajib dilakukan secara langsung dinyatakan Tidak Dapat Diterima (Niet Ontvankelijke Verklaard / NO).',
              'Mahkamah menegaskan pemohon tidak memiliki kerugian hak konstitusional aktual. Mekanisme teknis pilkada (langsung atau via perwakilan) adalah kebijakan hukum terbuka (open legal policy) pembentuk UU berdasar frasa "dipilih secara demokratis" (Pasal 18 ayat 4).'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    numberStr: 'PERTEMUAN 06',
    title: 'Urusan Pemerintahan Daerah',
    shortDesc: 'Klasifikasi tiga urusan pemerintahan (Absolut, Konkuren, Umum), rincian urusan konkuren dan SPM, serta 3 kriteria pembagian kewenangan.',
    summaryQuote: 'Hukum Pemerintahan Daerah berporos pada pertanyaan fundamental: siapa berwenang mengerjakan apa. Urusan konkuren diserahkan kepada daerah berdasarkan kriteria eksternalitas, akuntabilitas, dan efisiensi.',
    sections: [
      {
        id: 'klasifikasi-tiga-urusan',
        title: '1. Klasifikasi Tiga Urusan Pemerintahan (Pasal 9 UU 23/2014)',
        content: [
          'Pasal 9 UU No. 23 Tahun 2014 membagi urusan pemerintahan menjadi tiga klaster kewenangan yang tegas:'
        ],
        table: {
          headers: ['Jenis Urusan', 'Definisi & Pembidangan', 'Pelaksana & Sumber Pembiayaan'],
          rows: [
            [
              'Urusan Pemerintahan Absolut (Pasal 10)',
              'Urusan yang sepenuhnya menjadi kewenangan mutlak Pemerintah Pusat. Terdiri dari 6 bidang spesifik: (1) Politik Luar Negeri; (2) Pertahanan; (3) Keamanan; (4) Yustisi/Peradilan; (5) Moneter dan Fiskal Nasional; (6) Agama.',
              'Dilaksanakan sendiri oleh Pemerintah Pusat atau dilimpahkan melalui asas Dekonsentrasi / ditugaskan via Tugas Pembantuan. Perda yang mengatur urusan ini batal demi hukum karena melampaui batas kewenangan (ultra vires).'
            ],
            [
              'Urusan Pemerintahan Konkuren (Pasal 11–12)',
              'Urusan pemerintahan yang dibagi antara Pemerintah Pusat, Daerah Provinsi, dan Daerah Kabupaten/Kota. Merupakan pilar utama dan dasar pelaksanaan Otonomi Daerah.',
              'Diserahkan kepada daerah otonom untuk menjadi urusan rumah tangga daerah. Dibagi menjadi Urusan Wajib (Pelayanan Dasar & Non-Pelayanan Dasar) dan Urusan Pilihan. Dibiayai dari APBD.'
            ],
            [
              'Urusan Pemerintahan Umum (Pasal 25)',
              'Kewenangan Presiden selaku Kepala Pemerintahan yang mencakup pemeliharaan wawasan kebangsaan, ketahanan ideologi Pancasila, persatuan nasional, kerukunan antarumat, dan penanganan konflik sosial.',
              'Dilaksanakan di daerah oleh Gubernur dan Bupati/Walikota selaku wakil kekuasaan umum. Dibiayai penuh dari APBN (bukan beban APBD).'
            ]
          ]
        }
      },
      {
        id: 'rincian-urusan-konkuren',
        title: '2. Rincian Urusan Konkuren (Pasal 11–12 UU 23/2014)',
        content: [
          'Urusan Konkuren yang diserahkan ke daerah dikelompokkan ke dalam tiga kategori:',
          '',
          'A. Urusan Wajib Pelayanan Dasar (6 Bidang) — Wajib dipenuhi dengan Standar Pelayanan Minimal (SPM):',
          '1. Pendidikan',
          '2. Kesehatan',
          '3. Pekerjaan Umum dan Penataan Ruang',
          '4. Perumahan Rakyat dan Kawasan Permukiman',
          '5. Ketenteraman, Ketertiban Umum, dan Pelindungan Masyarakat',
          '6. Sosial',
          '',
          'B. Urusan Wajib Non-Pelayanan Dasar (18 Bidang):',
          'Mencakup tenaga kerja, lingkungan hidup, pertanahan, perhubungan, komunikasi dan informatika, penanaman modal, kepemudaan dan olahraga, administrasi kependudukan dan pencatatan sipil, perpustakaan, kearsipan, dll.',
          '',
          'C. Urusan Pilihan (8 Bidang Berdasarkan Potensi Unggulan Daerah):',
          'Urusan yang wajib diselenggarakan oleh daerah sesuai dengan potensi unggulan dan keunikan geografis masing-masing, meliputi: (1) Kelautan dan perikanan; (2) Pariwisata; (3) Pertanian; (4) Kehutanan; (5) Energi dan sumber daya mineral (ESDM); (6) Perdagangan; (7) Perindustrian; (8) Transmigrasi.'
        ]
      },
      {
        id: 'tiga-kriteria-pembagian-kewenangan',
        title: '3. Tiga Kriteria Pembagian Urusan Konkuren (Pasal 13 UU 23/2014)',
        content: [
          'Dalam menentukan apakah suatu urusan konkuren menjadi kewenangan Pusat, Provinsi, atau Kabupaten/Kota, Pasal 13 UU 23/2014 menggunakan tiga kriteria kumulatif:',
          '1. Kriteria Eksternalitas: Ditentukan berdasarkan jangkauan atau luas dampak dari penyelenggaraan urusan tersebut. Jika dampaknya bersifat lokal dalam satu kabupaten/kota, maka menjadi kewenangan Kabupaten/Kota; jika lintas kabupaten/kota, menjadi kewenangan Provinsi; dan jika lintas provinsi atau berskala nasional, menjadi kewenangan Pusat.',
          '2. Kriteria Akuntabilitas: Penyelenggaraan urusan diletakkan pada tingkatan pemerintahan yang paling dekat dengan dampak yang ditimbulkan, sehingga akuntabilitas pengawasan publik lebih terjamin.',
          '3. Kriteria Efisiensi: Penyelenggaraan urusan dinilai berdasarkan daya guna tertinggi (skala ekonomi yang besar atau membutuhkan teknologi tinggi ditangani oleh tingkatan pemerintahan yang lebih tinggi).',
          '',
          'Instrumen Pengikat Kebebasan Daerah:',
          'Meskipun urusan diserahkan ke daerah, daerah tidak boleh bertindak sekehendak hati karena dibatasi oleh:',
          '• NSPK (Norma, Standar, Prosedur, dan Kriteria) yang ditetapkan oleh kementerian terkait.',
          '• SPM (Standar Pelayanan Minimal) sebagaimana diatur dalam PP No. 2 Tahun 2018 untuk menjamin standar kualitas hidup warga negara.',
          '',
          'Yurisprudensi Putusan MK No. 30 & 31/PUU-XIV/2016 (Pengelolaan SMA/SMK):',
          'Mahkamah Konstitusi menyatakan pengalihan kewenangan pengelolaan pendidikan menengah (SMA/SMK) dari Kabupaten/Kota ke Provinsi adalah konstitusional karena selaras dengan kriteria efisiensi dan eksternalitas.'
        ]
      }
    ]
  },
  {
    id: 7,
    numberStr: 'PERTEMUAN 07',
    title: 'Penataan Daerah (Pembentukan & Penyesuaian)',
    shortDesc: 'Jalur pembentukan dan penyesuaian daerah, tiga lapis syarat kumulatif DOB, mekanisme inovatif Daerah Persiapan, moratorium DOB, dan pemekaran Papua.',
    summaryQuote: 'Pembentukan daerah baru tidak lagi langsung menghasilkan daerah otonom definitif, melainkan wajib melalui fase transisi Daerah Persiapan selama maksimal 3 tahun demi memastikan kelayakan dan kapasitas kemandirian.',
    sections: [
      {
        id: 'konsep-penataan-daerah',
        title: '1. Konsep dan Tujuan Penataan Daerah (Pasal 31–32 UU 23/2014)',
        content: [
          'Penataan Daerah bertujuan untuk mewujudkan efektivitas penyelenggaraan pemerintahan daerah, mempercepat peningkatan kesejahteraan masyarakat, meningkatkan kualitas pelayanan publik, meningkatkan kualitas tata kelola pemerintahan, serta meningkatkan daya saing daerah dan nasional.',
          'Penataan Daerah ditempuh melalui dua jalur utama:'
        ],
        comparisonBoxes: [
          {
            title: 'Jalur 1: Pembentukan Daerah (Pasal 33)',
            description: 'Penetapan status daerah otonom baru:',
            items: [
              'Pemekaran Daerah: Pemecahan daerah provinsi, kabupaten, atau kota yang sudah ada menjadi dua daerah atau lebih; atau penggabungan bagian daerah yang bersanding menjadi satu daerah baru.',
              'Penggabungan Daerah: Penggabungan dua daerah otonom atau lebih yang bersanding menjadi satu daerah baru karena dinilai tidak mampu lagi menyelenggarakan otonomi daerah.'
            ]
          },
          {
            title: 'Jalur 2: Penyesuaian & Penghapusan (Pasal 45–46)',
            description: 'Penataan administratif dan evaluasi kelayakan:',
            items: [
              'Penyesuaian Daerah: Perubahan batas wilayah, perubahan nama daerah, pemberian nama atau pemindahan ibu kota daerah (cukup ditetapkan dengan Peraturan Pemerintah / PP).',
              'Penghapusan Daerah: Tindakan menggabungkan kembali daerah otonom yang gagal menyelenggarakan otonomi setelah dievaluasi ke daerah induk asalnya.'
            ]
          }
        ]
      },
      {
        id: 'tiga-lapis-persyaratan-dob',
        title: '2. Tiga Lapis Persyaratan Pembentukan Daerah Baru (Pasal 34–37)',
        content: [
          'Untuk membentuk Daerah Otonom Baru (DOB), seluruh persyaratan dalam tiga lapis di bawah ini bersifat KUMULATIF (wajib terpenuhi seluruhnya tanpa kecuali):'
        ],
        table: {
          headers: ['Lapis Persyaratan', 'Komponen & Rincian Parameter Penilaian'],
          rows: [
            [
              '1. Persyaratan Dasar Kewilayahan',
              'Meliputi: luas wilayah minimal, jumlah penduduk minimal, batas wilayah yang jelas dibuktikan peta dasar, cakupan wilayah minimal (pembentukan Kabupaten/Kota minimal mencakup 5 Kecamatan; pembentukan Provinsi minimal mencakup 5 Kabupaten/Kota), serta batas usia minimal daerah induk (Provinsi minimal 10 tahun, Kabupaten/Kota minimal 7 tahun, Kecamatan minimal 5 tahun).'
            ],
            [
              '2. Persyaratan Dasar Kapasitas Daerah',
              'Merupakan kemampuan daerah untuk berkembang yang diuji dan dinilai oleh tim independen Pemerintah Pusat melalui 7 parameter: geografi, demografi, keamanan, sosial-politik-adat, potensi ekonomi, keuangan daerah, dan kemampuan penyelenggaraan birokrasi pemerintahan.'
            ],
            [
              '3. Persyaratan Administratif',
              'Merupakan persetujuan politik formal yang wajib dipenuhi: Keputusan musyawarah DPRD Kabupaten/Kota dan persetujuan Bupati/Walikota, serta Keputusan DPRD Provinsi dan persetujuan Gubernur daerah induk.'
            ]
          ]
        }
      },
      {
        id: 'mekanisme-daerah-persiapan',
        title: '3. Inovasi "Daerah Persiapan" & Dinamika Pemekaran Papua',
        content: [
          'Mekanisme Inovatif Daerah Persiapan (Pasal 33–41 UU 23/2014):',
          'Berbeda dengan regulasi lama era UU 22/1999 dan UU 32/2004 yang langsung melahirkan daerah otonom definitif, UU 23/2014 mewajibkan tahapan pembentukan Daerah Persiapan terlebih dahulu:',
          '• Daerah Persiapan dibentuk melalui Peraturan Pemerintah (PP) untuk jangka waktu paling lama 3 tahun.',
          '• Daerah Persiapan dipimpin oleh Penjabat (Pj) Kepala Daerah yang diangkat dari ASN dan tidak memiliki DPRD.',
          '• Pemerintah Pusat melakukan evaluasi berkala. Jika dinilai layak dan lulus evaluasi, Daerah Persiapan ditingkatkan statusnya menjadi daerah otonom definitif melalui Undang-Undang. Namun jika gagal, statusnya dicabut dan wilayahnya dikembalikan ke daerah induk.',
          '',
          'Praktik Moratorium DOB:',
          'Sejak tahun 2014 hingga kini, Pemerintah Pusat secara resmi memberlakukan moratorium (penghentian sementara) pemekaran DOB karena mempertimbangkan beban berat kapasitas fiskal APBN dan banyaknya DOB era sebelumnya yang gagal mandiri.',
          '',
          'Pengecualian Pemekaran 4 Provinsi di Papua (Tahun 2022):',
          'Pada tahun 2022, Pemerintah dan DPR melakukan pemekaran 4 provinsi baru di Papua (Papua Selatan, Papua Tengah, Papua Pegunungan via UU No. 14, 15, 16 Tahun 2022 serta Papua Barat Daya via UU No. 29 Tahun 2022).',
          'Pemekaran ini dilakukan secara afirmatif langsung melalui Undang-Undang tanpa melalui mekanisme Daerah Persiapan sebagai wujud kebijakan politik hukum khusus (affirmative action) dan resolusi percepatan pembangunan kesejahteraan Papua.',
          '',
          'Putusan MK No. 018/PUU-I/2003 (Pemekaran Irian Jaya Barat):',
          'MK menyatakan UU pembentukan daerah yang bertentangan dengan UU Otsus adalah inkonstitusional. Namun demi kepastian hukum (doktrin prospective overruling), Provinsi Irian Jaya Barat (Papua Barat) yang secara faktual sudah nyata berjalan tetap diakui eksistensinya dan tidak dibubarkan.'
        ],
        highlightBox: {
          title: 'Checklist Persiapan Menghadapi UTS FH UB',
          text: 'Pahami perbedaan mendasar frasa "dibagi atas" vs "terdiri atas" (Pasal 18 ayat 1); kuasai matriks perbedaan Desentralisasi, Dekonsentrasi, Medebewind beserta sumber anggaran; kuasai pembagian urusan konkuren dan 6 urusan wajib pelayanan dasar (SPM); serta gunakan minimal satu Putusan MK (Putusan 137/2015 pengawasan Perda atau Putusan 30/2016 SMA/SMK) sebagai pisau analisis yuridis.'
        }
      }
    ]
  }
];
