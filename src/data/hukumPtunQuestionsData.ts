import { PracticeQuestion } from './practiceQuestionsData';

export const PTUN_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  // 1-5: The 5 Original Questions & Official Kunci Jawaban from the Source PDF (pages 22-24)
  {
    id: 'ptun-soal-01',
    topicId: 1,
    topicTitle: 'Pengantar Hukum Acara PTUN',
    type: 'conceptual',
    typeLabel: 'Soal Resmi PDF #1',
    question: 'Mengapa Keputusan Tata Usaha Negara (KTUN) dapat menjadi objek sengketa di Peradilan Tata Usaha Negara (PTUN)?',
    options: [
      'Karena KTUN merupakan ketetapan sepihak yang otomatis berstatus tindak pidana jabatan',
      'Karena KTUN adalah penetapan tertulis dari pejabat TUN yang bersifat konkret, individual, final serta dapat merugikan seseorang atau badan hukum perdata sehingga dapat diuji keabsahannya di PTUN',
      'Karena KTUN selalu memuat norma hukum umum abstrak yang harus diuji materiil oleh Mahkamah Agung',
      'Karena KTUN merupakan perjanjian perdata antara pemerintah dan warga masyarakat yang menimbulkan wanprestasi'
    ],
    correctIndex: 1,
    explanation: 'KUNCI JAWABAN RESMI PDF: HTUN adalah hukum yang mengatur penyelenggaraan administrasi pemerintahan. PTUN adalah lembaga peradilan yang menyelesaikan sengketa antara warga atau badan hukum dengan pejabat TUN. KTUN adalah penetapan tertulis yang dikeluarkan pejabat TUN yang bersifat konkret, individual, dan final serta menimbulkan akibat hukum. KTUN menjadi objek sengketa karena dapat merugikan seseorang atau badan hukum sehingga dapat diuji keabsahannya di PTUN.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 22 & 23, Soal #1)'
  },
  {
    id: 'ptun-soal-02',
    topicId: 2,
    topicTitle: 'Kompetensi PTUN',
    type: 'conceptual',
    typeLabel: 'Soal Resmi PDF #2',
    question: 'Apakah perbedaan mendasar antara kompetensi absolut dan kompetensi relatif dalam Peradilan Tata Usaha Negara?',
    options: [
      'Kompetensi absolut didasarkan pada nilai ganti rugi uang, sedangkan kompetensi relatif didasarkan pada jabatan tergugat',
      'Kompetensi absolut adalah kewenangan pengadilan tingkat pertama, sedangkan kompetensi relatif adalah wewenang pengadilan banding',
      'Kompetensi absolut adalah kewenangan pengadilan berdasarkan jenis atau materi perkara (menentukan sengketa KTUN diperiksa PTUN), sedangkan kompetensi relatif adalah kewenangan berdasarkan batas wilayah hukum (menentukan PTUN mana yang berwenang)',
      'Kompetensi absolut hanya berlaku bagi perkara kepegawaian, sedangkan kompetensi relatif berlaku untuk sengketa perizinan'
    ],
    correctIndex: 2,
    explanation: 'KUNCI JAWABAN RESMI PDF: Kompetensi absolut adalah kewenangan pengadilan berdasarkan jenis atau materi perkara. Kompetensi relatif adalah kewenangan pengadilan berdasarkan wilayah hukum. Dalam PTUN, kompetensi absolut menentukan bahwa sengketa KTUN diperiksa oleh PTUN, sedangkan kompetensi relatif menentukan PTUN mana yang berwenang berdasarkan wilayah.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 22 & 23, Soal #2)'
  },
  {
    id: 'ptun-soal-03',
    topicId: 3,
    topicTitle: 'Gugatan PTUN',
    type: 'conceptual',
    typeLabel: 'Soal Resmi PDF #3',
    question: 'Berdasarkan Pasal 53 ayat (2) UU Peratun, alasan-alasan apa sajakah yang dapat digunakan oleh penggugat untuk mengajukan gugatan pembatalan KTUN?',
    options: [
      'Wanprestasi, perbuatan melawan hukum perdata, dan kealpaan administratif',
      'Bertentangan dengan peraturan perundang-undangan, penyalahgunaan wewenang (détournement de pouvoir), dan tindakan sewenang-wenang (willekeur / melanggar AAUPB)',
      'Tergugat tidak menghadiri mediasi, keterlambatan tanggapan lebih dari 30 hari, dan kerugian materiel di atas 100 juta rupiah',
      'Pelanggaran kode etik pejabat, pertentangan dengan hukum pidana, dan ketidakpuasan politik'
    ],
    correctIndex: 1,
    explanation: 'KUNCI JAWABAN RESMI PDF: Alasan yang dapat digunakan adalah: (1) Bertentangan dengan peraturan perundang-undangan: KTUN yang dikeluarkan tidak sesuai atau melanggar hukum yang berlaku; (2) Penyalahgunaan wewenang (detournement de pouvoir): Pejabat menggunakan kewenangannya untuk tujuan yang tidak sesuai dengan maksud pemberian wewenang tersebut; (3) Tindakan sewenang-wenang (willekeur): Keputusan diambil tanpa pertimbangan yang wajar atau melanggar Asas-Asas Umum Pemerintahan yang Baik (AAUPB).',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 22 & 23, Soal #3)'
  },
  {
    id: 'ptun-soal-04',
    topicId: 5,
    topicTitle: 'Pemeriksaan Gugatan',
    type: 'conceptual',
    typeLabel: 'Soal Resmi PDF #4',
    question: 'Jelaskan tujuan diselenggarakannya proses dismissal dan pemeriksaan persiapan dalam hukum acara PTUN!',
    options: [
      'Dismissal untuk memutus pokok perkara secara inkracht, pemeriksaan persiapan untuk mengeksekusi ganti rugi',
      'Dismissal bertujuan menilai apakah gugatan memenuhi syarat untuk diproses atau tidak, sedangkan pemeriksaan persiapan bertujuan memperbaiki dan melengkapi gugatan serta mematangkan perkara sebelum sidang terbuka untuk umum',
      'Dismissal untuk mediasi perdamaian para pihak, sedangkan pemeriksaan persiapan untuk mendengarkan saksi ahli secara tertutup',
      'Dismissal untuk menguji kompetensi relatif Tergugat, sedangkan pemeriksaan persiapan untuk menentukan panjar biaya perkara'
    ],
    correctIndex: 1,
    explanation: 'KUNCI JAWABAN RESMI PDF: Dismissal bertujuan menilai apakah gugatan memenuhi syarat untuk diproses atau tidak. Pemeriksaan persiapan bertujuan memperbaiki dan melengkapi gugatan serta mematangkan perkara sebelum sidang terbuka untuk umum.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 22 & 23, Soal #4)'
  },
  {
    id: 'ptun-soal-05',
    topicId: 6,
    topicTitle: 'Tahapan Persidangan & Jenis Acara',
    type: 'conceptual',
    typeLabel: 'Soal Resmi PDF #5',
    question: 'Sebutkan dan jelaskan secara singkat tiga jenis acara yang berlaku di Peradilan Tata Usaha Negara!',
    options: [
      'Acara Pidana, Acara Perdata, dan Acara Tata Usaha Negara Khusus',
      'Acara Tingkat Pertama, Acara Banding Administratif, dan Acara Peninjauan Kembali',
      'Acara Biasa (prosedur persidangan normal dengan tahapan lengkap), Acara Cepat (digunakan jika ada kepentingan mendesak dan diperiksa hakim tunggal), dan Acara Singkat (digunakan untuk memeriksa perlawanan terhadap penetapan dismissal)',
      'Acara Mediasi Tertutup, Acara Pembuktian Terbuka, dan Acara Eksekusi Putusan'
    ],
    correctIndex: 2,
    explanation: 'KUNCI JAWABAN RESMI PDF: Jenis acara dalam PTUN adalah: (1) Acara Biasa: prosedur persidangan normal dengan tahapan lengkap; (2) Acara Cepat: digunakan jika ada kepentingan mendesak dan diperiksa oleh hakim tunggal; (3) Acara Singkat: digunakan untuk memeriksa perlawanan terhadap penetapan dismissal.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 22, 23 & 24, Soal #5)'
  },

  // 6-30: Comprehensive Substantive Questions strictly from PDF
  // TOPIK 1: PENGANTAR
  {
    id: 'ptun-soal-06',
    topicId: 1,
    topicTitle: 'Pengantar Hukum Acara PTUN',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Tujuan utama pembentukan lembaga Peradilan Tata Usaha Negara (PTUN) adalah untuk melakukan judicial control. Apakah makna dari judicial control tersebut?',
    options: [
      'Mengawasi pembuatan undang-undang di lembaga legislatif agar tidak bertentangan dengan UUD 1945',
      'Mengontrol secara yuridis tindakan pemerintahan yang dinilai melanggar ketentuan administrasi (maladministrasi) ataupun perbuatan bertentangan dengan hukum (abuse of power)',
      'Memberikan izin eksekutif kepada pejabat pemerintah untuk melakukan tindakan penggusuran',
      'Menjatuhkan hukuman pidana kurungan kepada aparatur sipil negara yang tidak disiplin'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 2, pembentukan PTUN bertujuan mengontrol secara yuridis (judicial control) tindakan pemerintahan yang dinilai melanggar ketentuan administrasi (maladministrasi) ataupun perbuatan yang bertentangan dengan hukum (abuse of power).',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 2, Bagian 1.b Latar Belakang)'
  },
  {
    id: 'ptun-soal-07',
    topicId: 1,
    topicTitle: 'Pengantar Hukum Acara PTUN',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Regulasi manakah yang merupakan undang-undang perubahan kedua atas UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara?',
    options: [
      'Undang-Undang No. 9 Tahun 2004',
      'Undang-Undang No. 30 Tahun 2014',
      'Undang-Undang No. 51 Tahun 2009',
      'Undang-Undang No. 14 Tahun 2002'
    ],
    correctIndex: 2,
    explanation: 'Berdasarkan PDF Halaman 2–3, eksistensi PTUN diatur dalam UU No. 5 Tahun 1986, diubah pertama dengan UU No. 9 Tahun 2004, dan terakhir diubah dengan UU No. 51 Tahun 2009 yang menyempurnakan lembaga PTUN profesional dalam menjalankan fungsi kontrol yudisial.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 2-3, Bagian 1.b)'
  },
  {
    id: 'ptun-soal-08',
    topicId: 1,
    topicTitle: 'Pengantar Hukum Acara PTUN',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Menurut Yahya Harahap sebagaimana dikutip dalam sumber, apakah yang dimaksud dengan "diversity jurisdiction" dalam kaitannya dengan kompetensi absolut?',
    options: [
      'Wewenang pengadilan untuk memeriksa perkara warga negara asing di Indonesia',
      'Kewenangan bahwa tiap-tiap lingkungan peradilan mempunyai wewenang tertentu untuk mengadili suatu perkara berdasarkan materi pokok perkaranya',
      'Kebebasan hakim untuk memilih hukum adat atau hukum positif dalam memutus sengketa',
      'Kewenangan pengadilan tata usaha negara untuk memutus sengketa perdata ganti rugi'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 3, kewenangan absolut menurut Yahya Harahap didasarkan pada lingkungan kewenangan di mana tiap-tiap lingkungan mempunyai wewenang tertentu untuk mengadili suatu perkara (diversity jurisdiction) yang menciptakan yurisdiksi absolut sesuai subject matter of jurisdiction.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 3, Bagian 2 Kompetensi Absolut dan Relatif)'
  },

  // TOPIK 2: KOMPETENSI PTUN & SUBYEK GUGATAN
  {
    id: 'ptun-soal-09',
    topicId: 2,
    topicTitle: 'Kompetensi PTUN',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Bagaimanakah perluasan kompetensi absolut PTUN setelah berlakunya UU No. 30 Tahun 2014 tentang Administrasi Pemerintahan (UU AP)?',
    options: [
      'PTUN hanya berwenang memeriksa sengketa pemilu dan tindak pidana pilkada',
      'Kompetensi absolut PTUN diperluas mencakup sengketa tindakan faktual pejabat, permohonan keputusan fiktif positif (diam), dan pengujian penyalahgunaan wewenang',
      'PTUN dilarang memeriksa sengketa kepegawaian dan dialihkan sepenuhnya ke pengadilan negeri',
      'Kompetensi absolut PTUN dihapuskan dan digabungkan ke Peradilan Umum'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 4, setelah UU No. 30 Tahun 2014 tentang Administrasi Pemerintahan (UU AP), kompetensi absolut PTUN diperluas secara signifikan mencakup sengketa tindakan faktual pejabat, keputusan fiktif positif (diam), dan penyalahgunaan wewenang.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 4, Bagian 2)'
  },
  {
    id: 'ptun-soal-10',
    topicId: 2,
    topicTitle: 'Kompetensi PTUN',
    type: 'scenario',
    typeLabel: 'Studi Kasus',
    question: 'Budi mengajukan permohonan izin lingkungan ke Dinas Lingkungan Hidup. Hingga batas waktu hukum terlampaui, dinas tidak memberi jawaban (bersikap diam). Berdasarkan konsep UU Administrasi Pemerintahan, bagaimanakah status hukum sikap diam pejabat tersebut?',
    options: [
      'Dianggap sebagai penolakan permohonan secara otomatis (fiktif negatif)',
      'Dianggap permohonan tersebut dikabulkan (fiktif positif) dan pemohon berhak memohon penetapan penerbitan ke PTUN',
      'Menjadi tindak pidana korupsi yang langsung dilimpahkan ke Pengadilan Tipikor',
      'Permohonan batal demi hukum dan harus diulang dari awal'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 4 dan Halaman 15, dalam konsep UUAP, sikap diam pejabat dianggap sebagai persetujuan (fiktif positif), berbeda dengan paradigma UU Peratun lama yang menganggap sikap diam sebagai penolakan.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 4 & Halaman 15)'
  },
  {
    id: 'ptun-soal-11',
    topicId: 2,
    topicTitle: 'Kompetensi PTUN',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Dalam intervensi pihak ketiga pada persidangan PTUN, apakah perbedaan antara Voeging dan Tussenkomst?',
    options: [
      'Voeging diajukan oleh jaksa, sedangkan Tussenkomst diajukan oleh Tergugat',
      'Voeging adalah intervensi bergabung memihak Penggugat atau Tergugat karena kesamaan kepentingan hukum, sedangkan Tussenkomst adalah intervensi penengah yang masuk atas inisiatif sendiri untuk membela kepentingannya secara mandiri',
      'Voeging diajukan setelah putusan akhir, sedangkan Tussenkomst diajukan saat pemeriksaan persiapan',
      'Voeging berlaku dalam acara cepat, sedangkan Tussenkomst hanya dalam acara singkat'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 4, intervensi pihak ketiga terdiri atas: (1) Voeging (intervensi bergabung): pihak ketiga bergabung dengan penggugat atau tergugat karena memiliki kepentingan hukum yang sama; (2) Tussenkomst (intervensi penengah): pihak ketiga masuk dengan inisiatif sendiri karena kepentingannya tersentuh oleh sengketa, menjadi pihak mandiri.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 4, Bagian Subyek Gugatan)'
  },
  {
    id: 'ptun-soal-12',
    topicId: 2,
    topicTitle: 'Kompetensi PTUN',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Kapan batas waktu paling lambat bagi pihak ketiga untuk mengajukan permohonan intervensi dalam proses persidangan di PTUN?',
    options: [
      'Paling lambat 14 hari sebelum dismissal diucapkan',
      'Sebelum tahap pembuktian atau selambat-lambatnya sebelum putusan akhir',
      'Hanya pada saat pemeriksaan persiapan berlangsung',
      'Setelah putusan akhir berkekuatan hukum tetap (inkracht)'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 4, waktu pengajuan permohonan intervensi pihak ketiga diajukan sebelum pembuktian atau selambat-lambatnya sebelum putusan akhir.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 4, Bagian Subyek Gugatan butir ii)'
  },

  // TOPIK 3: GUGATAN & OBJEK SENGKETA
  {
    id: 'ptun-soal-13',
    topicId: 3,
    topicTitle: 'Gugatan PTUN',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Berapakah tenggang waktu pengajuan gugatan ke PTUN sejak diterimanya atau diumumkannya KTUN yang merugikan penggugat?',
    options: [
      '14 hari kerja',
      '30 hari kalender',
      '90 hari sejak keputusan diterima atau diumumkan',
      '1 tahun sejak diterbitkan'
    ],
    correctIndex: 2,
    explanation: 'Berdasarkan PDF Halaman 7, surat gugatan harus memuat uraian bahwa gugatan diajukan masih dalam batas waktu 90 hari sejak keputusan diterima atau diumumkan.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 7, Bagian 3.b Isi Gugatan butir iii)'
  },
  {
    id: 'ptun-soal-14',
    topicId: 3,
    topicTitle: 'Gugatan PTUN',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Apakah yang dimaksud dengan sifat "Konkret, Individual, dan Final" dalam unsur Keputusan Tata Usaha Negara (KTUN) menurut Pasal 1 angka 9 UU Peratun?',
    options: [
      'Konkret berarti ada sanksi pidana, individual berarti hanya pejabat tertentu, final berarti tidak dapat diajukan kasasi',
      'Konkret berarti objek nyata dan berwujud, individual berarti ditujukan kepada orang/badan hukum tertentu, dan final berarti definitif serta tidak memerlukan persetujuan instansi atasan lagi',
      'Konkret berarti tertulis di atas kertas segel, individual berarti rahasia, final berarti diputus oleh presiden',
      'Konkret berarti disetujui DPR, individual berarti berlaku untuk seluruh rakyat, final berarti berlaku selamanya'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 5, unsur KTUN meliputi: Bersifat Konkret (nyata dan berwujud walaupun bentuknya elektronik), Individual (ditujukan kepada individu atau badan hukum tertentu), dan Final (keputusan tersebut bersifat akhir dan tidak memerlukan persetujuan lebih lanjut).',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 5, Bagian Obyek Gugatan)'
  },
  {
    id: 'ptun-soal-15',
    topicId: 3,
    topicTitle: 'Gugatan PTUN',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Manakah di antara keputusan berikut ini yang BUKAN merupakan objek sengketa PTUN berdasarkan Pasal 2 UU No. 9 Tahun 2004?',
    options: [
      'Surat Keputusan Pemberhentian Dengan Hormat Tidak Atas Permintaan Sendiri seorang PNS',
      'Surat Keputusan Pembatalan Sertipikat Hak Milik Tanah oleh Kepala Kantor Pertanahan',
      'Keputusan yang menyangkut perbuatan hukum perdata seperti perjanjian jual beli antara instansi pemerintah dan perseorangan',
      'Surat Keputusan Penolakan Izin Usaha Pertambangan oleh Gubernur'
    ],
    correctIndex: 2,
    explanation: 'Berdasarkan PDF Halaman 6, Pasal 2 UU No. 9 Tahun 2004 mengecualikan perbuatan hukum perdata (keputusan yang menyangkut ranah hukum perdata, seperti perjanjian jual beli antara instansi pemerintah dan perseorangan) dari objek sengketa PTUN.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 6, Bagian Pengecualian Objek Sengketa butir iii)'
  },
  {
    id: 'ptun-soal-16',
    topicId: 3,
    topicTitle: 'Gugatan PTUN',
    type: 'scenario',
    typeLabel: 'Studi Kasus',
    question: 'Walikota menerbitkan Peraturan Daerah (Perda) tentang penataan pedagang kaki lima yang berlaku bagi seluruh warga kota. Seorang pedagang merasa dirugikan dan menggugat Perda tersebut ke PTUN. Apakah gugatan tersebut dapat diterima oleh PTUN?',
    options: [
      'Diterima, karena Walikota adalah Pejabat Tata Usaha Negara di daerah',
      'Tidak dapat diterima, karena pengaturan bersifat umum (regeling) memuat norma hukum yang berlaku secara umum dan dikecualikan dari objek sengketa PTUN menurut Pasal 2 UU 9/2004',
      'Diterima, asalkan diajukan sebelum batas waktu 14 hari',
      'Diterima, asalkan ada permohonan penundaan pelaksanaan Perda'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 6, Pasal 2 butir iv UU 9/2004 menegaskan bahwa pengaturan bersifat umum (keputusan yang memuat norma hukum yang berlaku secara umum / peraturan perundang-undangan, bukan bersifat konkret dan individual) dikecualikan dari objek sengketa di PTUN.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 6, Bagian Pengecualian butir iv)'
  },

  // TOPIK 4: PENGAJUAN GUGATAN & UPAYA ADMINISTRATIF
  {
    id: 'ptun-soal-17',
    topicId: 4,
    topicTitle: 'Pengajuan Gugatan & Upaya Administratif',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Apakah perbedaan mendasar antara pengujian sengketa dalam upaya administratif internal dengan pengujian peradilan administrasi murni (PTUN)?',
    options: [
      'Upaya administratif hanya menguji rechtmatigheid, sedangkan PTUN menguji doelmatigheid',
      'Upaya administratif mencakup pengujian rechtmatigheid (hukum) dan doelmatigheid (kebijakan/manfaat) secara ex nunc, sedangkan peradilan administrasi murni hanya menguji aspek rechtmatigheid (keabsahan hukum) atas fakta saat keputusan diambil',
      'Upaya administratif diputus oleh hakim agung, sedangkan PTUN diputus oleh pejabat dinas',
      'Upaya administratif mengharuskan sanksi kurungan pidana, sedangkan PTUN hanya denda perdata'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 10–11, upaya administratif mencakup pengujian doelmatigheid (efektivitas, efisiensi, kemanfaatan umum) dan rechtmatigheid (kesesuaian hukum) sehingga keputusan dapat diubah/diganti (ex nunc). Sebaliknya, peradilan administrasi murni menurut Rochmat Soemitro hanya menguji aspek rechtmatigheid (aspek hukum murni).',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 10-11, Bagian Ciri Utama Upaya Administratif)'
  },
  {
    id: 'ptun-soal-18',
    topicId: 4,
    topicTitle: 'Pengajuan Gugatan & Upaya Administratif',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Dalam sejarah hukum Indonesia masa kolonial Hindia Belanda, cikal bakal peradilan administrasi bermula dari lembaga quasi peradilan pajak yang bernama:',
    options: [
      'Landraad voor Bestuurszaken',
      'Raad van Beroep voor Belastingzaken (Majelis Pertimbangan Pajak / MPP)',
      'Hoge Raad der Nederlanden',
      'Weeskamer voor Belasting'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 9, pada masa kolonial Hindia Belanda, sengketa administrasi ditangani lembaga quasi peradilan administrasi bernama Raad van Beroep voor Belastingzaken atau Majelis Pertimbangan Pajak (MPP), yang kemudian bertransformasi menjadi BPSP dan akhirnya Pengadilan Pajak.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 9, Bagian 4.a.i)'
  },
  {
    id: 'ptun-soal-19',
    topicId: 4,
    topicTitle: 'Pengajuan Gugatan & Upaya Administratif',
    type: 'scenario',
    typeLabel: 'Studi Kasus',
    question: 'Dalam Putusan PTUN Bandung Nomor 104/G/2014/PTUN-BDG yang dibahas dalam sumber, apakah pokok sengketa yang diajukan Penggugat?',
    options: [
      'Gugatan ganti rugi pembebasan tanah proyek jalan tol Jawa Barat',
      'Gugatan terhadap SK Gubernur Jawa Barat Nomor 888/Kep.830-BKD/2014 tentang pemberhentian tidak dengan hormat sebagai PNS karena tindak pidana korupsi setelah menempuh seluruh upaya administratif',
      'Gugatan pembatalan izin lingkungan pendirian pabrik semen',
      'Gugatan sengketa pemilihan kepala daerah serentak'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 11, Putusan PTUN Bandung No. 104/G/2014/PTUN-BDG berkaitan dengan gugatan terhadap SK Gubernur Jawa Barat No. 888/Kep.830-BKD/2014 tentang pemberhentian tidak hormat sebagai PNS karena tindak pidana korupsi, di mana penggugat telah menempuh seluruh upaya administratif sebelum ke PTUN.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 11, Bagian Contoh Upaya Administratif)'
  },

  // TOPIK 5: PEMERIKSAAN GUGATAN (DISMISSAL & PERSIAPAN)
  {
    id: 'ptun-soal-20',
    topicId: 5,
    topicTitle: 'Pemeriksaan Gugatan',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Siapakah pejabat peradilan yang berwenang memimpin dan mengeluarkan penetapan dalam proses dismissal menurut Pasal 62 UU Peratun?',
    options: [
      'Majelis Hakim pemeriksa perkara',
      'Panitera Pengadilan Tata Usaha Negara',
      'Ketua Pengadilan Tata Usaha Negara (didampingi Panitera/Wakil Panitera)',
      'Hakim Pengawas Bidang Mahkamah Agung'
    ],
    correctIndex: 2,
    explanation: 'Berdasarkan PDF Halaman 11–13, proses dismissal dilakukan oleh Ketua Pengadilan untuk memutuskan dalam suatu penetapan bahwa gugatan diterima atau tidak, berdasar atau tidak, dan majelis hakim belum dibentuk pada saat itu.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 11-13, Bagian 5.a Dismissal Proses)'
  },
  {
    id: 'ptun-soal-21',
    topicId: 5,
    topicTitle: 'Pemeriksaan Gugatan',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Berapakah tenggang waktu bagi penggugat untuk mengajukan perlawanan (verzet) terhadap penetapan dismissal Ketua Pengadilan?',
    options: [
      '7 hari sejak gugatan didaftarkan',
      '14 hari terhitung sejak Ketua Pengadilan mengucapkan penetapan di hadapan para pihak atau sejak pemberitahuan penetapan diterima',
      '30 hari sejak pemeriksaan persiapan dimulai',
      '90 hari sejak KTUN diterbitkan'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 12, jika gugatan dinyatakan tidak lolos dismissal, penggugat berhak mengajukan perlawanan (verzet) dalam waktu 14 (empat belas) hari terhitung sejak Ketua Pengadilan mengucapkan penetapan di hadapan kedua belah pihak atau sejak pemberitahuan penetapan.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 12, Bagian Dismissal Proses)'
  },
  {
    id: 'ptun-soal-22',
    topicId: 5,
    topicTitle: 'Pemeriksaan Gugatan',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Apabila perlawanan (verzet) atas penetapan dismissal DITOLAK oleh Majelis Hakim yang memeriksanya, upaya hukum apakah yang dapat ditempuh oleh Penggugat?',
    options: [
      'Mengajukan permohonan banding ke Pengadilan Tinggi Tata Usaha Negara',
      'Mengajukan kasasi langsung ke Mahkamah Agung',
      'Tidak tersedia upaya hukum apapun (baik biasa maupun luar biasa), putusan bersifat final; satu-satunya cara adalah mengajukan gugatan baru jika tenggang waktu masih ada',
      'Mengajukan peninjauan kembali ke Mahkamah Konstitusi'
    ],
    correctIndex: 2,
    explanation: 'Berdasarkan PDF Halaman 12, apabila verzet ditolak oleh Majelis Hakim, maka tidak ada lagi upaya hukum yang dapat ditempuh penggugat. Terhadap putusan perlawanan dismissal tidak tersedia upaya hukum apapun (panitera wajib membuat akta penolakan banding). Satu-satunya kemungkinan adalah mengajukan gugatan baru.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 12, Bagian Dismissal Proses)'
  },
  {
    id: 'ptun-soal-23',
    topicId: 5,
    topicTitle: 'Pemeriksaan Gugatan',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Apakah yang melatarbelakangi diterapkannya asas kompensasi (ongelijkheidscompensatie) dalam tahap pemeriksaan persiapan di PTUN?',
    options: [
      'Kewajiban pemerintah memberikan uang ganti rugi kepada hakim peradilan',
      'Asumsi ketidakseimbangan kedudukan di mana warga negara berkedudukan lebih lemah dibanding pejabat pemegang kekuasaan publik, sehingga hakim wajib aktif membantu penyempurnaan gugatan',
      'Kewajiban penggugat membayar kompensasi panjar perkara dua kali lipat',
      'Penyeimbangan jumlah perkara perdata dengan perkara pidana di pengadilan'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 14, ketidakseimbangan terjadi karena penggugat sebagai orang/badan hukum perdata berada pada posisi lebih lemah dibandingkan tergugat pemegang kekuasaan publik. Untuk menyeimbangkannya diterapkan asas kompensasi (ongelijkheidscompensatie) dengan memberikan kemudahan kepada penggugat melalui bimbingan perbaikan gugatan oleh hakim.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 14, Bagian Pemeriksaan Persiapan)'
  },
  {
    id: 'ptun-soal-24',
    topicId: 5,
    topicTitle: 'Pemeriksaan Gugatan',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Berapakah tenggang waktu pemeriksaan persiapan menurut Pasal 63 ayat (2) huruf (a) UU Peratun, dan apa akibatnya jika penggugat tidak memenuhi perbaikan karena kelalaiannya?',
    options: [
      '14 hari; perkara otomatis diputus verstek',
      '30 hari; jika penggugat tidak hadir atau tidak mengikuti saran hakim melebihi batas waktu tersebut, Majelis Hakim dapat memutuskan gugatan tidak dapat diterima',
      '60 hari; berkas perkara dialihkan ke Kejaksaan Negeri',
      '90 hari; gugatan dianggap dikabulkan seluruhnya'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 15, tenggang waktu pemeriksaan persiapan adalah 30 hari sejak pemeriksaan pertama. Jika penggugat tidak hadir atau tidak mengikuti saran hakim sehingga melebihi 30 hari, Majelis Hakim dapat memutuskan gugatan tidak dapat diterima sesuai Pasal 63 ayat (3) UU Peratun.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 15, Bagian Pemeriksaan Persiapan)'
  },

  // TOPIK 6: TAHAPAN PERSIDANGAN & JENIS ACARA
  {
    id: 'ptun-soal-25',
    topicId: 6,
    topicTitle: 'Tahapan Persidangan & Jenis Acara',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Berdasarkan Surat Tuada Ulditun tanggal 14 Oktober 1993, bagaimanakah sifat persidangan pemeriksaan gugatan perlawanan (verzet) dengan Acara Singkat?',
    options: [
      'Sidang dilakukan terbuka untuk umum sejak awal hingga akhir putusan',
      'Pemeriksaan gugatan perlawanan dilakukan secara tertutup, akan tetapi pengucapan putusannya harus diucapkan dalam sidang terbuka untuk umum',
      'Pemeriksaan dilakukan secara tertulis tanpa persidangan sama sekali',
      'Sidang dilakukan tertutup sepenuhnya termasuk pengucapan putusannya'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 16–17 butir iv, pemeriksaan gugatan perlawanan dilakukan secara tertutup, akan tetapi pengucapan putusannya harus diucapkan dalam sidang terbuka untuk umum.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 16-17, Bagian 6.a Acara Singkat)'
  },
  {
    id: 'ptun-soal-26',
    topicId: 6,
    topicTitle: 'Tahapan Persidangan & Jenis Acara',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Dalam pemeriksaan Acara Cepat (Pasal 98 UU Peratun), siapakah yang memeriksa perkara dan berapakah tenggang waktu jawaban serta pembuktian?',
    options: [
      'Diperiksa oleh Majelis Hakim 3 orang; tenggang waktu 30 hari',
      'Diperiksa oleh Hakim Tunggal yang ditunjuk Ketua PTUN; tenggang waktu jawaban dan pembuktian masing-masing pihak tidak lebih dari 14 hari',
      'Diperiksa oleh Panitera Pengganti; tenggang waktu 7 hari',
      'Diperiksa oleh Hakim Ad Hoc; tenggang waktu 60 hari'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 17, jika permohonan Acara Cepat dikabulkan, Ketua PTUN menunjuk hakim tunggal. Dalam pemeriksaan perkara, tenggang waktu jawaban dan pembuktian masing-masing pihak tidak lebih dari 14 hari.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 17, Bagian 6.b Acara Cepat)'
  },
  {
    id: 'ptun-soal-27',
    topicId: 6,
    topicTitle: 'Tahapan Persidangan & Jenis Acara',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Dalam persidangan Acara Biasa PTUN, apabila salah satu pihak tidak hadir dalam sidang dan sidang harus ditunda, berapakah batas waktu maksimal penundaan sidang berikutnya?',
    options: [
      'Tidak boleh lebih dari 6 hari',
      'Tidak boleh lebih dari 14 hari',
      'Tidak boleh lebih dari 30 hari',
      'Bebas ditentukan oleh panitera'
    ],
    correctIndex: 0,
    explanation: 'Berdasarkan PDF Halaman 18, jika dalam persidangan tersebut ada pihak yang tidak hadir, maka penundaan sidang selanjutnya tidak boleh lebih dari 6 hari.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 18, Bagian 6.c Acara Biasa)'
  },

  // TOPIK 7: JAWABAN GUGATAN
  {
    id: 'ptun-soal-28',
    topicId: 7,
    topicTitle: 'Jawaban Gugatan Tergugat',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Apakah yang dimaksud dengan Eksepsi dalam struktur surat jawaban Tergugat di PTUN?',
    options: [
      'Tuntutan ganti rugi materiil terhadap kerugian kas negara',
      'Keberatan atau bantahan terhadap gugatan yang tidak menyentuh pokok perkara, melainkan menyangkut kewenangan absolut, kewenangan relatif, tenggang waktu daluwarsa, atau cacat prosedural lain',
      'Pengakuan Tergugat atas seluruh dalil yang diajukan Penggugat',
      'Permohonan banding ke tingkat pengadilan tinggi administrasi'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 19, Eksepsi adalah keberatan atau bantahan terhadap gugatan yang tidak menyentuh pokok perkara, seperti kewenangan absolut atau relatif pengadilan, atau hal-hal prosedural lain.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 19, Bagian 7.a.ii Menyusun Struktur Jawaban)'
  },

  // TOPIK 8: REPLIK
  {
    id: 'ptun-soal-29',
    topicId: 8,
    topicTitle: 'Replik Penggugat',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Apakah hak istimewa yang dimiliki Penggugat saat menyampaikan Replik menurut hukum acara peradilan tata usaha negara?',
    options: [
      'Penggugat berhak mencabut wewenang hakim tunggal',
      'Penggugat dapat mengubah alasan yang mendasari gugatannya, asal disertai alasan yang cukup serta tidak merugikan kepentingan Tergugat',
      'Penggugat dapat mengubah petitum pembatalan menjadi tuntutan pidana penjara',
      'Penggugat berhak melarang Tergugat mengajukan duplik'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 19, dalam mengajukan replik, Penggugat dapat mengubah alasan yang mendasari gugatannya, asal disertai dengan alasan yang cukup serta tidak merugikan kepentingan Tergugat.',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 19, Bagian 8 Replik)'
  },
  {
    id: 'ptun-soal-30',
    topicId: 8,
    topicTitle: 'Replik Penggugat',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Manakah di bawah ini yang merupakan empat komponen isi/inti surat Replik Penggugat di PTUN?',
    options: [
      'Somasi, mediasi, musyawarah, dan eksekusi',
      'Bantahan atas Eksepsi, Bantahan atas Pokok Perkara, Penguatan Dalil (doktrin, ahli, kebiasaan), dan Petitum (permohonan menolak eksepsi & jawaban Tergugat serta mengabulkan gugatan)',
      'Identitas saksi, bukti visum, laporan polisi, dan tuntutan ganti rugi',
      'Surat kuasa, panjar biaya, berita acara sumpah, dan putusan sela'
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan PDF Halaman 20, isi/inti Replik terdiri atas: (i) Bantahan atas Eksepsi, (ii) Bantahan atas Pokok Perkara, (iii) Penguatan Dalil (bukti atau referensi tambahan seperti doktrin, ahli, kebiasaan), dan (iv) Petitum (permohonan menolak seluruh eksepsi dan jawaban Tergugat serta mengabulkan seluruh gugatan Penggugat).',
    referenceSource: 'Panduan Belajar UTS PTUN (Halaman 20, Bagian 8 butir i–iv)'
  }
];
