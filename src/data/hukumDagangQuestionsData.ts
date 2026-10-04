import { PracticeQuestion } from './practiceQuestionsData';

export const DAGANG_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  // 1. Hubungan KUHD dengan BW
  {
    id: 'dagang-q-01',
    topicId: 1,
    topicTitle: 'Topik 01: Hubungan Hukum Dagang dengan BW',
    type: 'conceptual',
    typeLabel: 'Konseptual Asas',
    question: 'Berdasarkan Pasal 1 KUHD, asas apakah yang mendasari hubungan antara Kitab Undang-Undang Hukum Dagang (KUHD) dengan Burgerlijk Wetboek (BW)?',
    options: [
      'Lex superior derogat legi inferiori (peraturan yang lebih tinggi mengesampingkan yang lebih rendah)',
      'Lex specialis derogat legi generali (peraturan khusus mengesampingkan peraturan yang umum)',
      'Lex posterior derogat legi priori (peraturan yang baru mengesampingkan yang lama)',
      'Asas kepastian hukum dan peradilan cepat biaya ringan',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi resmi (halaman 1): Hubungan Hukum Dagang dengan BW diatur dalam Pasal 1 KUHD dengan asas "Lex specialis derogat legi generali", yaitu peraturan khusus (KUHD) mengesampingkan peraturan yang umum (BW).',
    referenceSource: 'Rangkuman Hukum Dagang · Hubungan KUHD dengan BW (Pasal 1 KUHD)'
  },
  {
    id: 'dagang-q-02',
    topicId: 1,
    topicTitle: 'Topik 01: Hubungan Hukum Dagang dengan BW',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Jika suatu ketentuan perjanjian komersial tidak diatur secara khusus di dalam KUHD, bagaimanakah keberlakuan hukumnya?',
    options: [
      'Perjanjian tersebut dinyatakan batal demi hukum karena tidak diatur KUHD.',
      'Ketentuan umum hukum perdata dalam Buku III BW tetap berlaku sepanjang tidak diatur khusus menyimpang dalam KUHD.',
      'Harus menunggu keluarnya yurisprudensi Mahkamah Agung terlebih dahulu.',
      'Ketentuan hukum pidana ekonomi langsung diberlakukan.',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan Pasal 1 KUHD, ketentuan-ketentuan KUHPerdata (BW) tetap berlaku bagi perbuatan-perbuatan yang diatur dalam KUHD, sekadar dalam KUHD tidak diatur secara khusus menyimpang.',
    referenceSource: 'Rangkuman Hukum Dagang · Pasal 1 KUHD'
  },

  // 2. Perubahan KUHD
  {
    id: 'dagang-q-03',
    topicId: 2,
    topicTitle: 'Topik 02: Perubahan KUHD',
    type: 'conceptual',
    typeLabel: 'Konseptual Reformasi',
    question: 'Mengapa istilah "pedagang" dalam Pasal 2 KUHD dicabut pada tanggal 17 Juli 1938 dan digantikan dengan istilah "perusahaan"?',
    options: [
      'Karena pedagang diwajibkan membayar pajak lebih tinggi daripada perusahaan.',
      'Karena istilah pedagang tidak relevan lagi untuk menggambarkan subjek dagang modern saat ini.',
      'Karena pedagang hanya boleh beranggotakan warga negara Belanda.',
      'Karena pedagang tidak diakui sebagai subjek hukum perdata.',
    ],
    correctIndex: 1,
    explanation: 'Materi resmi halaman 1 menyebutkan bahwa Pasal 2 KUHD dicabut karena istilah "pedagang" tidak relevan untuk menggambarkan subjek dagang saat ini, maka diganti dengan "perusahaan".',
    referenceSource: 'Rangkuman Hukum Dagang · Perubahan KUHD Butir 1'
  },
  {
    id: 'dagang-q-04',
    topicId: 2,
    topicTitle: 'Topik 02: Perubahan KUHD',
    type: 'scenario',
    typeLabel: 'Analisis Yuridis',
    question: 'Apakah alasan utama digantikannya istilah "perdagangan" dengan "perusahaan" dalam hukum dagang?',
    options: [
      'Perdagangan hanya dilakukan oleh badan hukum milik negara.',
      'Perdagangan lebih sempit daripada perusahaan, di mana perdagangan adalah salah satu kegiatan perusahaan.',
      'Perusahaan tidak boleh melakukan transaksi jual beli barang.',
      'Istilah perusahaan hanya berlaku untuk transaksi perbankan dan asuransi.',
    ],
    correctIndex: 1,
    explanation: 'Sesuai materi resmi halaman 1 butir 2: "Alasan digantikannya istilah perdagangan dengan perusahaan, karena perdagangan lebih sempit daripada perusahaan, dimana perdagangan adalah salah satu kegiatan perusahaan."',
    referenceSource: 'Rangkuman Hukum Dagang · Perubahan KUHD Butir 2'
  },
  {
    id: 'dagang-q-05',
    topicId: 2,
    topicTitle: 'Topik 02: Perubahan KUHD',
    type: 'conceptual',
    typeLabel: 'Identifikasi Masalah',
    question: 'Permasalahan apakah yang timbul antara Pasal 4 dan Pasal 2 KUHD lama sebelum dicabut pada tahun 1938?',
    options: [
      'Pasal 4 melarang adanya perantara dagang di Indonesia.',
      'Pasal 4 menyatakan perbuatan perniagaan dilakukan oleh komisioner, makelar, kasir dll, tapi di Pasal 2 pelaku perdagangan hanya pedagang sehingga menimbulkan konflik norma.',
      'Pasal 4 mengatur tentang kepailitan, sedangkan Pasal 2 mengatur tentang hukum laut.',
      'Pasal 4 bertentangan dengan hukum pidana.',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi resmi: Pasal 4 menyatakan perbuatan perniagaan dilakukan oleh komisioner, makelar, kasir dll. Tapi di Pasal 2, pelaku perdagangan hanya pedagang (bisa menimbulkan konflik).',
    referenceSource: 'Rangkuman Hukum Dagang · Perubahan KUHD Pasal 4'
  },

  // 3. Subjek Hukum Dagang
  {
    id: 'dagang-q-06',
    topicId: 3,
    topicTitle: 'Topik 03: Subjek Hukum Dagang',
    type: 'conceptual',
    typeLabel: 'Klasifikasi Subjek',
    question: 'Manakah dari entitas berikut yang diklasifikasikan sebagai Usaha Dagang (UD) menurut materi resmi?',
    options: [
      'Bentuk usaha yang didirikan oleh minimal dua orang persero.',
      'Bentuk usaha perorangan yang memiliki ciri dimiliki oleh 1 orang.',
      'Badan usaha yang memiliki akta otentik dan status badan hukum dari Kemenkumham.',
      'Persekutuan modal yang terbagi atas saham-saham.',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi resmi halaman 1: Usaha Dagang memiliki ciri khas mutlak yaitu "DIMILIKI OLEH 1 ORANG".',
    referenceSource: 'Rangkuman Hukum Dagang · Subjek Hukum Dagang'
  },
  {
    id: 'dagang-q-07',
    topicId: 3,
    topicTitle: 'Topik 03: Subjek Hukum Dagang',
    type: 'conceptual',
    typeLabel: 'Komparasi Badan Usaha',
    question: 'Manakah pengelompokan badan usaha yang benar antara yang TIDAK berbadan hukum dengan yang BERBADAN HUKUM menurut materi?',
    options: [
      'Tidak Berbadan Hukum: PT dan Yayasan; Berbadan Hukum: CV dan Firma.',
      'Tidak Berbadan Hukum: CV dan Firma; Berbadan Hukum: PT, BUMN, dan Yayasan.',
      'Tidak Berbadan Hukum: BUMN dan CV; Berbadan Hukum: Firma dan PT.',
      'Seluruh badan usaha otomatis berstatus badan hukum sejak didaftarkan.',
    ],
    correctIndex: 1,
    explanation: 'Materi resmi halaman 1 membagi: 1. Badan Usaha Tidak Berbadan Hukum: CV, Firma (menjalankan perusahaan); 2. Badan Usaha Berbadan Hukum: PT, BUMN, Yayasan.',
    referenceSource: 'Rangkuman Hukum Dagang · Subjek Hukum Dagang'
  },

  // 4. Badan Usaha dan Badan Hukum
  {
    id: 'dagang-q-08',
    topicId: 4,
    topicTitle: 'Topik 04: Badan Usaha dan Badan Hukum',
    type: 'conceptual',
    typeLabel: 'Definisi Yuridis',
    question: 'Apakah definisi Badan Hukum menurut materi resmi?',
    options: [
      'Organisasi usaha yang didirikan oleh satu orang tanpa izin perniagaan.',
      'Organisasi yang didirikan dengan akta otentik dan memiliki harta tersendiri serta mempunyai hak dan kewajiban.',
      'Setiap perkumpulan orang yang tidak memiliki struktur pengurus.',
      'Perusahaan yang seluruh sahamnya dimiliki oleh pemerintah daerah.',
    ],
    correctIndex: 1,
    explanation: 'Sesuai materi resmi halaman 1: "Badan Hukum adalah organisasi yang didirikan dengan akta otentik dan memiliki harta tersendiri serta mempunyai hak dan kewajiban."',
    referenceSource: 'Rangkuman Hukum Dagang · Badan Hukum'
  },
  {
    id: 'dagang-q-09',
    topicId: 4,
    topicTitle: 'Topik 04: Badan Usaha dan Badan Hukum',
    type: 'mcq',
    typeLabel: 'Syarat Sah',
    question: 'Manakah yang merupakan 3 syarat material bagi berdirinya suatu Badan Hukum menurut materi resmi?',
    options: [
      '1. Modal di atas 10 miliar; 2. Memiliki cabang di luar negeri; 3. Terdaftar di bursa efek.',
      '1. Ada harta kekayaan yang terpisah; 2. Ada tujuan bersama; 3. Ada struktur pengurus.',
      '1. Didirikan oleh satu orang; 2. Tidak memiliki utang; 3. Membayar pajak penghasilan.',
      '1. Lisan; 2. Tanpa akta; 3. Dilakukan insidental.',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi resmi halaman 1: Syarat Material Badan Hukum adalah: 1. Ada harta kekayaan yang terpisah; 2. Ada tujuan bersama; 3. Ada struktur pengurus.',
    referenceSource: 'Rangkuman Hukum Dagang · Syarat Material Badan Hukum'
  },
  {
    id: 'dagang-q-10',
    topicId: 4,
    topicTitle: 'Topik 04: Badan Usaha dan Badan Hukum',
    type: 'conceptual',
    typeLabel: 'Syarat Formiil',
    question: 'Apakah syarat formiil dari suatu Badan Hukum menurut materi resmi?',
    options: [
      'Pendaftaran di kepaniteraan pengadilan negeri setempat secara lisan.',
      'Adanya pengakuan berupa akta otentik.',
      'Adanya pengumuman di surat kabar lokal sebanyak tiga kali berturut-turut.',
      'Persetujuan dari seluruh kreditor perorangan.',
    ],
    correctIndex: 1,
    explanation: 'Materi resmi halaman 1 secara tegas menyatakan: "SYARAT FORMIIL: Adanya pengakuan berupa akta otentik."',
    referenceSource: 'Rangkuman Hukum Dagang · Syarat Formiil Badan Hukum'
  },

  // 5. Pengertian Perusahaan
  {
    id: 'dagang-q-11',
    topicId: 5,
    topicTitle: 'Topik 05: Pengertian Perusahaan',
    type: 'conceptual',
    typeLabel: 'Regulasi Perusahaan',
    question: 'Undang-undang manakah yang dijadikan rujukan resmi pengertian perusahaan dalam materi?',
    options: [
      'UU No. 8 Tahun 1999 tentang Perlindungan Konsumen',
      'UU No. 3 Tahun 1982 tentang Wajib Daftar Perusahaan',
      'UU No. 5 Tahun 1999 tentang Larangan Praktik Monopoli',
      'UU No. 37 Tahun 2004 tentang Kepailitan',
    ],
    correctIndex: 1,
    explanation: 'Materi resmi halaman 1 secara eksplisit mencantumkan: "UU No. 3 Tahun 1982 ttg Wajib Daftar Perusahaan" sebagai dasar pengertian perusahaan.',
    referenceSource: 'Rangkuman Hukum Dagang · Pengertian Perusahaan'
  },
  {
    id: 'dagang-q-12',
    topicId: 5,
    topicTitle: 'Topik 05: Pengertian Perusahaan',
    type: 'scenario',
    typeLabel: 'Unsur Perusahaan',
    question: 'Berdasarkan UU No. 3 Tahun 1982, manakah unsur yang BUKAN merupakan bagian dari definisi perusahaan?',
    options: [
      'Menjalankan jenis usaha yang bersifat tetap dan terus menerus.',
      'Didirikan dan bekerja serta berkedudukan di wilayah NKRI.',
      'Kegiatan usaha bersifat insidental dan sewaktu-waktu semata tanpa mencari laba.',
      'Bertujuan untuk memperoleh laba.',
    ],
    correctIndex: 2,
    explanation: 'Definisi perusahaan menurut UU No. 3/1982 adalah setiap bentuk usaha yang menjalankan setiap jenis usaha yang bersifat tetap dan terus menerus, didirikan dan bekerja serta berkedudukan di NKRI, untuk memperoleh laba. Kegiatan insidental tanpa laba bukan unsur perusahaan.',
    referenceSource: 'Rangkuman Hukum Dagang · UU No. 3 Tahun 1982'
  },

  // 6. Ruang Lingkup Perusahaan
  {
    id: 'dagang-q-13',
    topicId: 6,
    topicTitle: 'Topik 06: Ruang Lingkup Perusahaan',
    type: 'conceptual',
    typeLabel: 'Ruang Lingkup',
    question: 'Apakah yang dimaksud dengan "Bentuk Usaha" dalam ruang lingkup perusahaan?',
    options: [
      'Setiap jenis komoditas yang diperjualbelikan di pasar bursa.',
      'Organisasi usaha yang menjadi wadah penggerak setiap jenis usaha.',
      'Besaran modal dasar yang disetorkan ke kas daerah.',
      'Perjanjian jual beli antara penjual dan pembeli.',
    ],
    correctIndex: 1,
    explanation: 'Materi resmi halaman 2 menyebutkan: "1. BENTUK USAHA: Adalah organisasi usaha yang menjadi wadah penggerak setiap jenis usaha."',
    referenceSource: 'Rangkuman Hukum Dagang · Ruang Lingkup Perusahaan'
  },

  // 7. Asas-Asas Hukum Perusahaan
  {
    id: 'dagang-q-14',
    topicId: 7,
    topicTitle: 'Topik 07: Asas-Asas Hukum Perusahaan',
    type: 'conceptual',
    typeLabel: 'Asas Hukum',
    question: 'Apakah makna dari "Asas Corporate Separate Legal Personality" menurut materi?',
    options: [
      'Perusahaan wajib membayar zakat dan retribusi daerah setiap bulan.',
      'Kekayaan perusahaan terpisah dengan kekayaan pendiri.',
      'Perusahaan harus tunduk pada seluruh perintah pengadilan perdata.',
      'Pendiri perusahaan tidak boleh mendirikan usaha lain.',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi resmi halaman 2: "3. ASAS CORPORATE SEPARATE LEGAL PERSONALITY: Kekayaan perusahaan terpisah dengan kekayaan pendiri."',
    referenceSource: 'Rangkuman Hukum Dagang · Azas-Azas Hukum Perusahaan'
  },
  {
    id: 'dagang-q-15',
    topicId: 7,
    topicTitle: 'Topik 07: Asas-Asas Hukum Perusahaan',
    type: 'mcq',
    typeLabel: 'CSR',
    question: 'Menurut materi resmi, apakah kewajiban perusahaan berdasarkan asas Corporate Social Responsibility (CSR)?',
    options: [
      'Menyerahkan 50% saham kepada pemerintah daerah.',
      'Perusahaan harus memberikan manfaat sosial pada masyarakat di sekitarnya.',
      'Membagi seluruh keuntungan tahunan kepada karyawan.',
      'Menggratiskan seluruh barang dagangan pada saat perayaan hari besar.',
    ],
    correctIndex: 1,
    explanation: 'Materi resmi halaman 2 menyatakan: "2. ASAS CORPORATE SOCIAL RESPONSIBILITY (TANGGUNG JAWAB SOSIAL)/CSR: Perusahaan harus memberikan manfaat sosial pada masy di sekitarnya."',
    referenceSource: 'Rangkuman Hukum Dagang · Azas-Azas Hukum Perusahaan'
  },

  // 8. Jual Beli dan Perniagaan
  {
    id: 'dagang-q-16',
    topicId: 8,
    topicTitle: 'Topik 08: Jual Beli dan Perniagaan',
    type: 'conceptual',
    typeLabel: 'Pasal 1457 BW',
    question: 'Berdasarkan Pasal 1457 BW, apakah dua kewajiban pokok dari para pihak dalam perjanjian jual beli?',
    options: [
      'Penjual mengangkut barang, pembeli mengasuransikan barang.',
      'Pihak yang satu (penjual) mengikatkan diri menyerahkan suatu barang, dan pihak yang lain (pembeli) membayar harga yang dijanjikan.',
      'Penjual menanggung kepailitan, pembeli menanggung retribusi daerah.',
      'Penjual menerbitkan L/C, pembeli memeriksa dokumen di pengadilan.',
    ],
    correctIndex: 1,
    explanation: 'Sesuai Pasal 1457 BW pada materi halaman 2: "Jual beli adalah suatu persetujuan dengan mana pihak yang satu mengikatkan dirinya untuk menyerahkan suatu barang, dan pihak yang lain untuk membayar harga yang dijanjikan."',
    referenceSource: 'Rangkuman Hukum Dagang · Pengertian Jual Beli (Pasal 1457 BW)'
  },
  {
    id: 'dagang-q-17',
    topicId: 8,
    topicTitle: 'Topik 08: Jual Beli dan Perniagaan',
    type: 'mcq',
    typeLabel: 'Kekhususan Perniagaan',
    question: 'Manakah dari pilihan berikut yang BUKAN merupakan salah satu dari 6 kekhususan jual beli perniagaan menurut materi?',
    options: [
      'Jual beli perniagaan merupakan salah satu perbuatan perusahaan.',
      'Pengangkutan merupakan sarana yang sangat diperlukan.',
      'Pembayaran wajib selalu dilakukan secara tunai langsung di tempat penyerahan.',
      'Menggunakan syarat-syarat yang standart.',
    ],
    correctIndex: 2,
    explanation: 'Kekhususan butir 5 menyebutkan: "Umumnya pembayaran tidak dilakukan secara tunai melainkan memakai alat pembayaran." Maka pembayaran wajib tunai adalah salah.',
    referenceSource: 'Rangkuman Hukum Dagang · Kekhususan Jual Beli Perniagaan'
  },

  // 10. Perusahaan Dagang
  {
    id: 'dagang-q-18',
    topicId: 10,
    topicTitle: 'Topik 10: Perusahaan Dagang',
    type: 'conceptual',
    typeLabel: 'Karakteristik UD',
    question: 'Bagaimanakah akibat yuridis dari fakta bahwa Perusahaan Dagang (UD) bukan merupakan badan hukum?',
    options: [
      'Perusahaan dagang tidak boleh melakukan transaksi bernilai di atas 1 juta rupiah.',
      'Tidak ada pemisahan kekayaan antara harta perusahaan dengan harta pribadi pemiliknya.',
      'Perusahaan dagang wajib dipimpin oleh dewan komisaris.',
      'Pemilik dibebaskan dari segala bentuk pajak daerah.',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi halaman 2: Ciri Perusahaan Dagang butir 3: "Bukan badan hukum dan tidak termasuk persekutuan/perkumpulan, dimana konsekuensinya tidak ada pemisahan kekayaan."',
    referenceSource: 'Rangkuman Hukum Dagang · Bentuk-Bentuk Perusahaan: Perusahaan Dagang'
  },

  // 11. Perseroan / Maatschap
  {
    id: 'dagang-q-19',
    topicId: 11,
    topicTitle: 'Topik 11: Perseroan (Maatschap)',
    type: 'conceptual',
    typeLabel: 'Pendirian Maatschap',
    question: 'Bagaimanakah syarat formal pendirian Perseroan Perdata (Maatschap) menurut Pasal 1618–1652 Buku III BW?',
    options: [
      'Wajib didirikan dengan akta notaris dan disahkan oleh menteri kehakiman.',
      'Cukup secara lisan, akta pendirian dan akta notaris tidak diminta oleh undang-undang.',
      'Wajib didaftarkan di bursa efek internasional.',
      'Harus mendapatkan izin khusus dari Presiden Republik Indonesia.',
    ],
    correctIndex: 1,
    explanation: 'Materi resmi halaman 3 menegaskan: "Untuk mendirikan perseroan cukup secara lisan. Berdasarkan sesuatu akta pendirian, akta notaris, tidak diminta oleh UU."',
    referenceSource: 'Rangkuman Hukum Dagang · Perseroan (Matschap)'
  },
  {
    id: 'dagang-q-20',
    topicId: 11,
    topicTitle: 'Topik 11: Perseroan (Maatschap)',
    type: 'scenario',
    typeLabel: 'Pihak Ketiga Maatschap',
    question: 'Berdasarkan Pasal 1636 BW, jika 1 orang sekutu Maatschap mengadakan perikatan dengan pihak ketiga tanpa kuasa dari sekutu lain, siapakah yang dapat dituntut jika timbul kerugian?',
    options: [
      'Pihak ketiga dapat langsung menyita harta seluruh sekutu secara renteng.',
      'Pihak ketiga hanya bisa menuntut kepada 1 sekutu yang bertransaksi tadi.',
      'Negara wajib menanggung kerugian pihak ketiga tersebut.',
      'Perjanjian otomatis batal dan tidak ada yang bertanggung jawab.',
    ],
    correctIndex: 1,
    explanation: 'Materi halaman 3 butir hubungan pihak ketiga: "Ketika ada 1 persero melakukan hubungan dengan pihak ketiga, apabila terdapat kerugian maka pihak ketiga hanya bisa menuntut kepada 1 sekutu tadi, beda halnya apabila sekutu lain telah memberikan kuasa."',
    referenceSource: 'Rangkuman Hukum Dagang · Hubungan dengan Pihak Ketiga (Pasal 1636 BW)'
  },
  {
    id: 'dagang-q-21',
    topicId: 11,
    topicTitle: 'Topik 11: Perseroan (Maatschap)',
    type: 'mcq',
    typeLabel: 'Pasal 1651 BW',
    question: 'Apakah ketentuan Pasal 1651 BW jika ada salah seorang anggota perseroan perdata yang meninggal dunia?',
    options: [
      'Perseroan perdata seketika bubar dan aset diserahkan ke kas negara.',
      'Walaupun ada orang/anggota yang meninggal, posisinya bisa digantikan oleh ahli warisnya (jika diperjanjikan).',
      'Ahli waris wajib membayar ganti rugi kepada sekutu yang masih hidup.',
      'Perseroan otomatis beralih menjadi Perseroan Terbatas (PT).',
    ],
    correctIndex: 1,
    explanation: 'Materi halaman 3 menyebutkan juncto Pasal 1651 BW: "Walaupun ada orang/anggota yang meninggal maka bisa digantikan oleh ahli warisnya."',
    referenceSource: 'Rangkuman Hukum Dagang · Pasal 1651 BW'
  },

  // 12. Persekutuan Firma
  {
    id: 'dagang-q-22',
    topicId: 12,
    topicTitle: 'Topik 12: Persekutuan Firma',
    type: 'conceptual',
    typeLabel: 'Unsur Sukardono',
    question: 'Apakah 3 unsur mutlak dari Persekutuan Firma menurut Prof. Sukardono?',
    options: [
      '1. Modal asing; 2. Pengawasan menteri; 3. Saham atas unjuk.',
      '1. Menjalankan perusahaan; 2. Dengan pemakaian firma (nama bersama); 3. Pertanggungjawaban tiap-tiap sekutu untuk seluruhnya mengenai perikatan dengan firma.',
      '1. Akta notaris; 2. Terdaftar di bursa; 3. Tanggung jawab terbatas.',
      '1. Satu pengusaha; 2. Lisan; 3. Usaha insidental.',
    ],
    correctIndex: 1,
    explanation: 'Materi halaman 3–4 secara tegas menguraikan 3 unsur mutlak Prof. Sukardono: 1. Menjalankan perusahaan; 2. Dengan pemakaian firma (nama bersama); 3. Pertanggungjawaban tiap-tiap sekutu untuk seluruhnya mengenai perikatan dengan firma.',
    referenceSource: 'Rangkuman Hukum Dagang · Tiga Unsur Mutlak Firma'
  },
  {
    id: 'dagang-q-23',
    topicId: 12,
    topicTitle: 'Topik 12: Persekutuan Firma',
    type: 'conceptual',
    typeLabel: 'Pasal 18 KUHD',
    question: 'Bagaimanakah sifat tanggung jawab anggota sekutu firma menurut Pasal 18 KUHD?',
    options: [
      'Tanggung jawab terbatas hanya sebesar saham yang disetor.',
      'Tiap-tiap persero bertanggung jawab renteng untuk seluruhnya atas segala perikatan firma.',
      'Hanya sekutu tertua yang menanggung kerugian firma.',
      'Sekutu hanya menanggung kerugian jika menandatangani akta notaris.',
    ],
    correctIndex: 1,
    explanation: 'Sesuai Pasal 18 KUHD pada materi halaman 4: "Tiap-tiap persero bertanggung jawab renteng untuk seluruh atas segala perikatan."',
    referenceSource: 'Rangkuman Hukum Dagang · Tanggung Jawab Persero Firma'
  },
  {
    id: 'dagang-q-24',
    topicId: 12,
    topicTitle: 'Topik 12: Persekutuan Firma',
    type: 'scenario',
    typeLabel: 'Pembubaran Firma',
    question: 'Berdasarkan Pasal 31 KUHD, apakah akibatnya apabila pembubaran firma tidak dilakukan dengan akta otentik, didaftarkan pada PN, dan diumumkan di Berita Negara?',
    options: [
      'Pembubaran firma tersebut otomatis batal demi hukum dan tidak berlaku bagi siapa pun.',
      'Pembubaran tersebut sifatnya hanya berlaku internal dan tidak mengikat pihak ketiga.',
      'Sekutu firma dijatuhi sanksi pidana kurungan.',
      'Seluruh harta sekutu disita oleh Pengadilan Negeri.',
    ],
    correctIndex: 1,
    explanation: 'Materi halaman 4 butir pembubaran: "Pembubaran dilakukan dengan akta otentik, didaftarkan pada PN dan diumumkan di Berita Negara. Apabila tidak diberi akta otentik sifatnya hanya bersifat internal."',
    referenceSource: 'Rangkuman Hukum Dagang · Pembubaran Firma (Pasal 31 KUHD)'
  },

  // 13. Commanditaire Vennootschap (CV)
  {
    id: 'dagang-q-25',
    topicId: 13,
    topicTitle: 'Topik 13: Commanditaire Vennootschap (CV)',
    type: 'scenario',
    typeLabel: 'Pelanggaran Komanditer',
    question: 'Apakah akibat hukum yang terjadi apabila sekutu komanditer dalam CV ikut melakukan pengurusan perusahaan?',
    options: [
      'Sekutu komanditer tersebut dikeluarkan dari CV tanpa pengembalian modal.',
      'Secara otomatis posisinya berubah menjadi sekutu komplementer, sehingga ketika terjadi kerugian mengikat hingga pada harta pribadi.',
      'CV secara otomatis bubar dan dinyatakan pailit.',
      'Sekutu komanditer mendapatkan gaji ganda dari persekutuan.',
    ],
    correctIndex: 1,
    explanation: 'Materi halaman 4 menegaskan: "Sekutu komanditer tidak boleh melakukan pengurusan, apabila dilanggar maka secara otomatis merubah posisinya menjadi sekutu komplementer, maka ketika terjadi kerugian mengikat hingga pada harta pribadi."',
    referenceSource: 'Rangkuman Hukum Dagang · CV Butir Larangan Pengurusan'
  },

  // 14. Perantara Dagang
  {
    id: 'dagang-q-26',
    topicId: 14,
    topicTitle: 'Topik 14: Perantara Dagang',
    type: 'conceptual',
    typeLabel: 'Makelar vs Komisioner',
    question: 'Manakah dari perbandingan berikut yang BENAR antara Makelar dengan Komisioner menurut materi?',
    options: [
      'Makelar bertindak atas nama firma sendiri; Komisioner bertindak atas nama Presiden.',
      'Pada Makelar risiko ditanggung prinsipal; pada Komisioner risiko ditanggung komisioner.',
      'Makelar memiliki hak privilege; Komisioner tidak memiliki hak retensi.',
      'Komisioner diangkat oleh Presiden dan disumpah; Makelar tidak ada pengangkatan.',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan tabel perbandingan materi halaman 6: Pada Makelar "resiko ditanggung prinsipal", sedangkan pada Komisioner "resiko ditanggung komisioner". Selain itu Makelar diangkat dan disumpah, sedangkan Komisioner bertindak atas nama firma sendiri.',
    referenceSource: 'Rangkuman Hukum Dagang · Perbedaan Makelar dan Komisioner'
  },
  {
    id: 'dagang-q-27',
    topicId: 14,
    topicTitle: 'Topik 14: Perantara Dagang',
    type: 'conceptual',
    typeLabel: 'Hak Komisioner',
    question: 'Apakah tiga hak yuridis yang dimiliki oleh seorang Komisioner menurut materi resmi?',
    options: [
      'Hak suara, hak deviden, dan hak veto.',
      'Hak berupa komisi, retensi, dan privilege (hak istimewa).',
      'Hak royalti, hak cipta, dan hak paten.',
      'Hak eksekusi langsung, hak banding, dan hak kasasi.',
    ],
    correctIndex: 1,
    explanation: 'Materi halaman 6 tabel perbandingan butir 3: Hak Komisioner adalah: "Hak berupa komisi dan retensi dan privilege".',
    referenceSource: 'Rangkuman Hukum Dagang · Hak Komisioner'
  },

  // 15. Jual Beli Perusahaan & L/C
  {
    id: 'dagang-q-28',
    topicId: 15,
    topicTitle: 'Topik 15: Jual Beli Perusahaan & L/C',
    type: 'scenario',
    typeLabel: 'Prosedur L/C',
    question: 'Dalam mekanisme pembayaran melalui Letter of Credit (L/C), jika bank pembeli setuju menerbitkan L/C untuk penjual, aturan internasional apakah yang berlaku menurut materi?',
    options: [
      'Incoterms 2020 Pasal 14',
      'Article 2 UCP 600',
      'Pasal 1338 Kitab Undang-Undang Hukum Perdata',
      'Faillissements-verordening 1906',
    ],
    correctIndex: 1,
    explanation: 'Materi resmi halaman 6 mekanisme L/C butir 4 menyebutkan: "Jika bank-nya pembeli setuju menerbitkan L/C untuk penjual, maka berlaku Article 2 UCP 600."',
    referenceSource: 'Rangkuman Hukum Dagang · Mekanisme Pembayaran L/C'
  },

  // 16. Syarat Penyerahan Barang
  {
    id: 'dagang-q-29',
    topicId: 16,
    topicTitle: 'Topik 16: Syarat Penyerahan Barang',
    type: 'conceptual',
    typeLabel: 'Klausula F.O.B',
    question: 'Apakah yang dimaksud dengan syarat penyerahan F.O.B (Free On Board) menurut materi resmi?',
    options: [
      'Pembeli mengambil sendiri barang di gudang penjual dengan seluruh biaya ditanggung pembeli.',
      'Penjual menyerahkan barang di atas kapal yang disediakan pembeli di pelabuhan; pembeli dibebaskan dari tanggung jawab sampai barang berada di atas kapal.',
      'Penjual menanggung seluruh biaya pengiriman dan asuransi kerugian sampai ke gudang pembeli.',
      'Penjual mengantar barang langsung ke alamat rumah kediaman pembeli.',
    ],
    correctIndex: 1,
    explanation: 'Sesuai materi halaman 6: "Syarat F.O.B: Penjual menyerahkan barang di atas kapal, yang disediakan pembeli di pelabuhan. Pembeli dibebaskan dari tanggung jawab atas barang sampai barang berada di atas kapal."',
    referenceSource: 'Rangkuman Hukum Dagang · Syarat F.O.B'
  },
  {
    id: 'dagang-q-30',
    topicId: 16,
    topicTitle: 'Topik 16: Syarat Penyerahan Barang',
    type: 'conceptual',
    typeLabel: 'LOCO vs FRANCO & C.I.F',
    question: 'Bagaimanakah perbedaan mendasar antara syarat penyerahan LOCO dengan FRANCO menurut materi?',
    options: [
      'LOCO barang diserahkan di atas kapal; FRANCO barang diserahkan di bandar udara.',
      'LOCO pembeli datang ke tempat penjual dan menanggung semua biaya; sedangkan FRANCO kebalikannya yaitu penjual yang harus menyerahkan barang ke tempat pembeli.',
      'LOCO mewajibkan penjual membayar premi asuransi; FRANCO membebaskan pembeli dari segala jenis pembayaran.',
      'LOCO hanya berlaku untuk barang impor; FRANCO hanya berlaku untuk barang agraris.',
    ],
    correctIndex: 1,
    explanation: 'Materi halaman 6 menyebutkan: Pada syarat LOCO pembeli datang ke tempat penjual dan menanggung semua biaya dari gudang penjual ke gudang pembeli. Sedangkan syarat Franco adalah kebalikan dari loco, yaitu penjual yang harus menyerahkan barang ke tempat pembeli.',
    referenceSource: 'Rangkuman Hukum Dagang · Syarat LOCO dan Franco'
  },
];
