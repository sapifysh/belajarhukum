export type QuestionType = 'mcq' | 'conceptual' | 'scenario';

export interface PracticeQuestion {
  id: string;
  topicId: number;
  topicTitle: string;
  type: QuestionType;
  typeLabel: string;
  question: string;
  scenarioContext?: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  referenceSource: string;
}

export const PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    id: 'q1',
    topicId: 1,
    topicTitle: 'Topik 01: Alasan Mempelajari Hukum Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Berdasarkan Pasal 29 ayat (1) UUD 1945 dan Sila Pertama Pancasila, bagaimanakah doktrin konstitusional Prof. Hazairin mengenai posisi Hukum Islam di Indonesia?',
    options: [
      'Negara hanya mengakui hukum Islam jika telah diserap ke dalam hukum adat daerah setempat.',
      'Negara tidak boleh membuat aturan yang bertentangan dengan kaidah agama dan wajib memfasilitasi pelaksanaannya.',
      'Hukum Islam harus diterapkan secara mutlak tanpa melalui mekanisme pembentukan perundang-undangan nasional.',
      'Negara memisahkan urusan keagamaan sepenuhnya dari institusi hukum positif kenegaraan.'
    ],
    correctIndex: 1,
    explanation: 'Menurut Prof. Hazairin, berdasarkan Pasal 29 ayat (1) UUD 1945 dan Sila Pertama Pancasila, negara Republik Indonesia tidak boleh membuat aturan yang bertentangan dengan kaidah agama dan wajib memfasilitasi pelaksanaannya bagi para pemeluknya.',
    referenceSource: 'Topik 1: Alasan Konstitusional (Rujukan: Prof. Hazairin)'
  },
  {
    id: 'q2',
    topicId: 1,
    topicTitle: 'Topik 01: Alasan Mempelajari Hukum Islam',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Pada masa kolonial Hindia Belanda, Hukum Islam diajarkan secara wajib di Sekolah Tinggi Hukum (Rechtshogeschool) dengan menggunakan istilah:',
    options: [
      'Adatrecht der Inlanders',
      'Islamic Jurisprudence',
      'Mohammedan Recht',
      'Syariah Positif'
    ],
    correctIndex: 2,
    explanation: 'Pada masa kolonial Belanda, seluruh Sekolah Tinggi Hukum (Rechtshogeschool) mewajibkan mata kuliah Hukum Islam yang dalam nomenklatur kepustakaan kolonial saat itu dikenal sebagai "Mohammedan Recht".',
    referenceSource: 'Topik 1: Alasan Sejarah (Historis)'
  },
  {
    id: 'q3',
    topicId: 1,
    topicTitle: 'Topik 01: Alasan Mempelajari Hukum Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Hukum Islam dipelajari di Fakultas Hukum karena memenuhi tiga kriteria ilmiah filsafat ilmu. Manakah pemenuhan syarat keilmuan yang dimaksud?',
    options: [
      'Ontologis (objek kajian), Epistemologis (metodologi ushul fiqh), dan Aksiologis (tujuan maqasid syariah).',
      'Historis (sejarah), Sosiologis (masyarakat), dan Filosofis (nilai ketuhanan).',
      'Dogmatis (keyakinan), Normatif (aturan tertulis), dan Empiris (data lapangan).',
      'Teologis (rukun iman), Yuridis (aturan positif), dan Pragmatis (kemanfaatan materiil).'
    ],
    correctIndex: 0,
    explanation: 'Alasan Ilmiah (Akademis) menyatakan bahwa Hukum Islam memenuhi syarat keilmuan secara ontologis (kejelasan objek kajian), epistemologis (metodologi penalaran melalui Ushul Fiqh), dan aksiologis (nilai tujuan kemaslahatan melalui Maqasid Syari\'ah).',
    referenceSource: 'Topik 1: Alasan Ilmiah (Akademis)'
  },
  {
    id: 'q4',
    topicId: 1,
    topicTitle: 'Topik 01: Alasan Mempelajari Hukum Islam',
    type: 'scenario',
    typeLabel: 'Studi Kasus / Skenario',
    question: 'Di Indonesia, umat Islam membagi waris dan melangsungkan pernikahan berdasarkan aturan fikih karena kesadaran agama di samping adanya UU Perkawinan dan KHI. Hal ini mencerminkan berlakunya Hukum Islam secara:',
    options: [
      'Hanya berlaku secara yuridis formal karena telah diundangkan negara.',
      'Berlaku secara yuridis normatif (sanksi kemasyarakatan) sekaligus yuridis formal (hukum positif).',
      'Berlaku murni sebagai hukum adat tanpa legitimasi perundang-undangan positif.',
      'Berlaku sementara waktu sampai terbentuk hukum perdata nasional yang unifikatif.'
    ],
    correctIndex: 1,
    explanation: 'Hukum Islam memiliki kekuatan mengikat secara normatif (memiliki sanksi moral/kemasyarakatan) dan sekaligus secara yuridis formal karena telah diserap menjadi hukum positif nasional seperti UU Perkawinan, UU Peradilan Agama, dan KHI.',
    referenceSource: 'Topik 1: Alasan Yuridis Normatif & Formal'
  },
  {
    id: 'q5',
    topicId: 2,
    topicTitle: 'Topik 02: Islam dan Kerangka Dasar Ajaran Islam',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Secara etimologi, kata "Islam" berakar dari rumpun kata bahasa Arab S-L-M (Salm, Silm, Salma) yang mengandung makna utama:',
    options: [
      'Perjuangan, keberanian, dan penaklukan',
      'Damai, selamat, tunduk, sejahtera, dan berserah diri',
      'Keadilan, persamaan hak, dan kesepakatan sosial',
      'Ketaatan mutlak terhadap tradisi leluhur'
    ],
    correctIndex: 1,
    explanation: 'Secara etimologi, kata Islam berasal dari akar kata S-L-M (Salm, Silm, Salma) yang berarti damai, selamat, tunduk, sejahtera, dan berserah diri kepada Allah SWT. Namanya ditentukan langsung oleh Allah dalam QS. Ali Imran: 19 & QS. Al-Ma\'idah: 3.',
    referenceSource: 'Topik 2: Pengertian dan Akar Kata "Islam"'
  },
  {
    id: 'q6',
    topicId: 2,
    topicTitle: 'Topik 02: Islam dan Kerangka Dasar Ajaran Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Ajaran Islam mencakup tiga aspek relasional. Hubungan yang berorientasi mewujudkan kedamaian internal serta ketenangan batin (nafsul muthma\'innah) diklasifikasikan sebagai:',
    options: [
      'Hubungan Vertikal (Hablum minallah)',
      'Hubungan Horizontal (Hablum minannas)',
      'Hubungan Kedalam (Jiwa/Hati)',
      'Hubungan Kosmologis (Hablum ma\'al alam)'
    ],
    correctIndex: 2,
    explanation: 'Tiga aspek utama ajaran Islam adalah: (1) Hubungan Vertikal (Hablum minallah); (2) Hubungan Horizontal (Hablum minannas); dan (3) Hubungan Kedalam (Jiwa/Hati) yang bertujuan mewujudkan kedamaian batin dan ketenangan jiwa (nafsul muthma\'innah).',
    referenceSource: 'Topik 2: Tiga Aspek Utama Ajaran Islam'
  },
  {
    id: 'q7',
    topicId: 2,
    topicTitle: 'Topik 02: Islam dan Kerangka Dasar Ajaran Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Dalam kerangka dasar ajaran Islam, manakah padanan yang TEPAT antara komponen sistem, disiplin keilmuan, dan dimensi pokok bahasannya?',
    options: [
      'Aqidah - Ilmu Fiqh - Mengatur hukum amaliyah perbuatan.',
      'Syariah/Fiqih - Ilmu Tasawuf - Mengatur kesucian jiwa dan ihsan.',
      'Akhlak - Ilmu Kalam - Mengatur sistem teologi dan rukun iman.',
      'Aqidah - Ilmu Kalam/Tauhid - Sistem teologi/keyakinan/iman sebagai fondasi utama ajaran.'
    ],
    correctIndex: 3,
    explanation: 'Trilogi kerangka dasar ajaran Islam adalah: Aqidah dipelajari dalam Ilmu Kalam/Tauhid (teologi/iman); Syariah/Fiqih dipelajari dalam Ilmu Fiqh/Ushul Fiqh (sistem hukum ibadah & muamalah); dan Akhlak dipelajari dalam Ilmu Tasawuf/Etika Islam (sistem moral/ihsan).',
    referenceSource: 'Topik 2: Kerangka Dasar Ajaran Islam (Sistem Ajaran)'
  },
  {
    id: 'q8',
    topicId: 2,
    topicTitle: 'Topik 02: Islam dan Kerangka Dasar Ajaran Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Mengapa ajaran Islam menolak konsep sekularisme yang berkembang di Barat?',
    options: [
      'Karena Islam menolak sains dan melarang pengembangan metode ilmiah eksperimental.',
      'Karena dalam Islam tidak ada lembaga perantara (tawassul) seperti hierarki gereja, dan Islam memadukan dunia-akhirat tanpa dikotomi sakral-sekular.',
      'Karena sekularisme hanya berlaku di negara yang menganut Civil Law System.',
      'Karena sekularisme mewajibkan seluruh aturan hukum merujuk pada kitab suci gereja.'
    ],
    correctIndex: 1,
    explanation: 'Sekularisme lahir dari sejarah kelam dominasi gereja Barat abad pertengahan yang mengekang sains. Islam menolak sekularisme karena dalam Islam tidak ada lembaga perantara (tawassul) antara hamba dan Tuhan sebagaimana hierarki gereja, dan Al-Qur\'an justru mendorong perkembangan sains.',
    referenceSource: 'Topik 2: Analisis Islam Terhadap Sekularisme'
  },
  {
    id: 'q9',
    topicId: 2,
    topicTitle: 'Topik 02: Islam dan Kerangka Dasar Ajaran Islam',
    type: 'scenario',
    typeLabel: 'Studi Kasus / Skenario',
    question: 'Seorang mahasiswa menyimpulkan bahwa hukum Islam kejam hanya dengan melihat tindakan kriminal seorang pelaku yang kebetulan mengaku beragama Islam. Berdasarkan materi, metode studi yang benar untuk mengoreksi pandangan tersebut adalah:',
    options: [
      'Memahami bahwa hukum Islam tidak dapat dipisahkan dari perilaku individu pemeluknya.',
      'Membedakan ajaran Islam yang suci dari perilaku oknum umatnya serta merujuk langsung pada sumber aslinya (Al-Qur\'an dan Sunnah).',
      'Menggunakan kajian orientalis Barat sebagai tolok ukur kebenaran ajaran.',
      'Membatasi kajian Islam hanya pada hukum pidana saja tanpa melihat kerangka aqidah.'
    ],
    correctIndex: 1,
    explanation: 'Metode studi Islam yang benar adalah mempelajari Islam secara komprehensif (kaffah), merujuk langsung pada sumber aslinya (Al-Qur\'an dan Sunnah), mempelajari karya ulama otoritatif, dan membedakan ajaran Islam dari perilaku oknum umatnya.',
    referenceSource: 'Topik 2: Faktor Kesalahpahaman Terhadap Hukum Islam & Cara Mengatasinya'
  },
  {
    id: 'q10',
    topicId: 3,
    topicTitle: 'Topik 03: Istilah Kunci dalam Hukum Islam',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Kata "Hukum" secara etimologi berasal dari akar kata bahasa Arab "Ha-Ka-Ma" yang bermakna:',
    options: [
      'Menghukum, memvonis, dan memberi sanksi pidana',
      'Norma, kaidah, atau aturan yang mengikat serta mencegah kerusakan',
      'Kebiasaan turun-temurun suatu kabilah',
      'Kesepakatan politik antara pemerintah dan rakyat'
    ],
    correctIndex: 1,
    explanation: 'Kata Hukum berasal dari bahasa Arab Ha-Ka-Ma. Kata Hukm berarti norma, kaidah, atau aturan yang mengikat, sedangkan Ahkam adalah bentuk jamak dari hukm.',
    referenceSource: 'Topik 3: Pengertian Hukum, Hukm, dan Ahkam'
  },
  {
    id: 'q11',
    topicId: 3,
    topicTitle: 'Topik 03: Istilah Kunci dalam Hukum Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Dalam Al-Ahkam Al-Khamsah (Hukum Taklifi), suatu perbuatan yang apabila ditinggalkan mendapat pahala, namun apabila dikerjakan tidak berdosa dikategorikan sebagai:',
    options: [
      'Ja\'iz / Mubah',
      'Sunnah / Mandub',
      'Makruh',
      'Haram'
    ],
    correctIndex: 2,
    explanation: 'Makruh adalah ketentuan di mana perbuatan tersebut dianjurkan untuk ditinggalkan; jika ditinggalkan mendapat pahala, dan jika dikerjakan tidak berdosa.',
    referenceSource: 'Topik 3: Hukum Taklifi (Al-Ahkam Al-Khamsah)'
  },
  {
    id: 'q12',
    topicId: 3,
    topicTitle: 'Topik 03: Istilah Kunci dalam Hukum Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Apakah perbedaan mendasar antara "Sebab" dan "\'Illat" dalam kategori Hukum Wadh\'i?',
    options: [
      'Sebab merupakan tanda lahirnya hukum, sedangkan \'Illat bersifat rasionalitas hukum (motif logis pembentukan hukum).',
      'Sebab berada di dalam substansi perbuatan, sedangkan \'Illat berada di luar perbuatan.',
      'Sebab hanya berlaku dalam ibadah murni, sedangkan \'Illat hanya berlaku dalam hukum waris.',
      'Sebab membatalkan hukum, sedangkan \'Illat mengukuhkan keberlakuan hukum.'
    ],
    correctIndex: 0,
    explanation: 'Sebab adalah tanda/alasan lahirnya hukum (seperti kematian melahirkan hukum waris), sedangkan \'Illat bersifat rasionalitas hukum (alasan logis/motif yang melandasi penetapan hukum, seperti memabukkan pada khamr).',
    referenceSource: 'Topik 3: Hukum Wadh\'i (Sebab dan \'Illat)'
  },
  {
    id: 'q13',
    topicId: 3,
    topicTitle: 'Topik 03: Istilah Kunci dalam Hukum Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Manakah pernyataan yang TEPAT mengenai perbedaan antara "Syarat" dan "Rukun"?',
    options: [
      'Syarat adalah rukun yang diwajibkan oleh hadis, sedangkan Rukun ditetapkan oleh Al-Qur\'an.',
      'Syarat adalah hal di luar substansi yang harus dipenuhi sebelum perbuatan dilakukan, sedangkan Rukun merupakan bagian internal substansi perbuatan.',
      'Syarat jika ditinggalkan tidak membatalkan ibadah, sedangkan Rukun jika ditinggalkan membatalkan ibadah.',
      'Syarat berkaitan dengan pidana, sedangkan Rukun berkaitan dengan perdata.'
    ],
    correctIndex: 1,
    explanation: 'Syarat adalah hal luar substansi yang harus dipenuhi sebelum perbuatan dilakukan agar sah (contoh: wudhu sebelum shalat), sedangkan Rukun merupakan bagian internal substansi perbuatan itu sendiri (contoh: ruku\' dan sujud dalam shalat).',
    referenceSource: 'Topik 3: Hukum Wadh\'i (Syarat dan Rukun)'
  },
  {
    id: 'q14',
    topicId: 3,
    topicTitle: 'Topik 03: Istilah Kunci dalam Hukum Islam',
    type: 'scenario',
    typeLabel: 'Studi Kasus / Skenario',
    question: 'Seorang anak dengan sengaja membunuh ayahnya demi segera mendapatkan warisan keluarga. Namun pengadilan memutuskan bahwa ia sama sekali tidak berhak menerima harta warisan. Dalam Hukum Wadh\'i, tindakan pembunuhan tersebut berposisi sebagai:',
    options: [
      'Sebab yang melahirkan hak waris',
      'Syarat sah pembagian harta peninggalan',
      'Mani\' (faktor penghalang) yang menggugurkan hak waris',
      'Rukun yang harus dipenuhi dalam fara\'id'
    ],
    correctIndex: 2,
    explanation: 'Mani\' (Halangan) adalah faktor yang menghalangi timbulnya hukum atau menggugurkan hak hukum. Membunuh pewaris merupakan mani\' yang menghalangi hak waris pelaku.',
    referenceSource: 'Topik 3: Hukum Wadh\'i (Mani\')'
  },
  {
    id: 'q15',
    topicId: 3,
    topicTitle: 'Topik 03: Istilah Kunci dalam Hukum Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Berdasarkan Matriks Perbedaan Syariat dan Fiqh, manakah perbandingan yang BENAR menurut pandangan akademis?',
    options: [
      'Syariat bersifat temporal-situasional (Zhanni), sedangkan Fiqh abadi dan mutlak benar (Qath\'i).',
      'Syariat bersumber dari ijtihad fuqaha, sedangkan Fiqh bersumber murni dari wahyu ilahi.',
      'Syariat hanya satu dan universal, sedangkan Fiqh beraneka ragam (melahirkan banyak madzhab/ikhtilaf).',
      'Syariat terbatas pada hukum amaliyah praktis, sedangkan Fiqh mencakup Aqidah, Syariah, dan Akhlak.'
    ],
    correctIndex: 2,
    explanation: 'Syariat bersumber dari wahyu ilahi (Al-Qur\'an & Sunnah), fundamental, abadi, mutlak benar (Qath\'i), dan hanya satu (universal). Sebaliknya, Fiqh bersumber dari pemikiran akal manusia (Ijtihad), praktis-amaliyah, temporal-situasional bernilai dugaan (Zhanni), dan beraneka ragam (madzhab/ikhtilaf).',
    referenceSource: 'Topik 3: Matriks Perbedaan Syariat dan Fiqh'
  },
  {
    id: 'q16',
    topicId: 3,
    topicTitle: 'Topik 03: Istilah Kunci dalam Hukum Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Bagaimanakah keterkaitan organis antara Syariat dan Fiqh dalam menghadapi perubahan zaman?',
    options: [
      'Syariat adalah fondasi pokok (ushul), sedangkan Fiqh adalah cabang operasional (furu\'); tanpa Fiqh, syariat akan kaku dan tidak dapat beradaptasi.',
      'Fiqh adalah sumber utama yang menggantikan keberlakuan teks Syariat di era modern.',
      'Keduanya berdiri sendiri secara terpisah tanpa saling membutuhkan.',
      'Syariat hanya mengatur zaman kenabian, sedangkan Fiqh mengatur zaman sesudah Khulafaur Rasyidin.'
    ],
    correctIndex: 0,
    explanation: 'Hubungan Syariat dan Fiqh sangat erat dan saling melengkapi. Syariat adalah fondasi pokok (ushul), sedangkan fiqh adalah cabang operasional (furu\'). Tanpa fiqh, syariat akan kaku dan tidak dapat diterapkan dalam konteks perubahan zaman.',
    referenceSource: 'Topik 3: Hubungan Syariat & Fiqh'
  },
  {
    id: 'q17',
    topicId: 4,
    topicTitle: 'Topik 04: Ruang Lingkup, Tujuan, dan Ciri Hukum Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Berbeda dengan sistem Hukum Barat yang membagi publik dan privat secara kaku, Hukum Islam tidak mengenal pemisahan kaku tersebut. Contoh pembuktian yang tepat dari materi adalah:',
    options: [
      'Pernikahan tidak memerlukan saksi ataupun pencatatan administrasi.',
      'Kasus pembunuhan adalah delik pidana/publik, namun sanksi qishash dapat diganti denda (diyat) jika dimaafkan keluarga korban secara privat.',
      'Hukum dagang syariah bebas dari segala bentuk pengawasan otoritas negara.',
      'Sengketa waris wajib diselesaikan oleh pengadilan pidana umum.'
    ],
    correctIndex: 1,
    explanation: 'Dalam Hukum Islam, tidak ada pemisahan kaku publik vs privat. Perkara pembunuhan adalah pidana (publik), namun sanksi pembalasan (qishash) dapat diganti dengan kompensasi harta (denda/diyat) manakala dimaafkan oleh pihak keluarga korban (unsur privat).',
    referenceSource: 'Topik 4: Pembidangan Hukum Islam (Perspektif Barat vs Islam)'
  },
  {
    id: 'q18',
    topicId: 4,
    topicTitle: 'Topik 04: Ruang Lingkup, Tujuan, dan Ciri Hukum Islam',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Dalam pembidangan Hukum Islam lingkup publik, bidang yang secara khusus mengatur hukum tata negara dan administrasi pemerintahan dikenal dengan nama:',
    options: [
      'Jinayah Hudud',
      'Al-Ahkam As-Sulthaniyah',
      'Mukhasamat',
      'Siyar'
    ],
    correctIndex: 1,
    explanation: 'Al-Ahkam As-Sulthaniyah adalah bidang Hukum Islam yang mengatur Hukum Tata Negara dan Penyelenggaraan Pemerintahan. Siyar mengatur Hukum Internasional (perang/damai), Mukhasamat mengatur Hukum Acara, dan Jinayah mengatur Pidana.',
    referenceSource: 'Topik 4: Lingkup Publik (Siyar & Jinayat)'
  },
  {
    id: 'q19',
    topicId: 4,
    topicTitle: 'Topik 04: Ruang Lingkup, Tujuan, dan Ciri Hukum Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Tujuan utama penegakan Hukum Islam (Maqasid Asy-Syari\'ah) secara ringkas terangkum dalam kaidah agung:',
    options: [
      'Al-Adlu wal Inshaf (Keadilan dan Keseimbangan)',
      'Jalbul Mashalih wa Dar\'ul Mafasid (Mewujudkan kemaslahatan dan menolak kemudaratan)',
      'La Dharara wa La Dhirar (Tidak boleh membahayakan diri dan orang lain)',
      'Al-Hurriyyah wal Musawah (Kemerdekaan dan Kesetaraan derajat)'
    ],
    correctIndex: 1,
    explanation: 'Tujuan utama penegakan Hukum Islam adalah mewujudkan kemaslahatan dan menolak kemudaratan (Jalbul Mashalih wa Dar\'ul Mafasid).',
    referenceSource: 'Topik 4: Tujuan Hukum Islam (Maqasid Asy-Syari\'ah)'
  },
  {
    id: 'q20',
    topicId: 4,
    topicTitle: 'Topik 04: Ruang Lingkup, Tujuan, dan Ciri Hukum Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Kebutuhan mutlak yang jika dilanggar akan menghancurkan eksistensi kehidupan manusia disebut kebutuhan Dharuriyyat. Manakah yang termasuk ke dalam 5 pokok maqasidul ahkam tersebut?',
    options: [
      'Hifzh ad-Din, Hifzh an-Nafs, Hifzh al-\'Aql, Hifzh an-Nasl, dan Hifzh al-Mal.',
      'Hifzh al-Lisan, Hifzh al-Waqt, Hifzh al-Ahad, Hifzh al-Bait, dan Hifzh al-Jasad.',
      'Hifzh al-Amal, Hifzh al-Qalb, Hifzh as-Siyasah, Hifzh ad-Daulah, dan Hifzh al-Wathan.',
      'Hifzh al-Hurriyyah, Hifzh al-Haq, Hifzh al-Musawah, Hifzh al-Adl, dan Hifzh al-Ilm.'
    ],
    correctIndex: 0,
    explanation: 'Lima pokok Dharuriyyat (Maqasidul Ahkam) adalah: (1) Memelihara Agama (Hifzh ad-Din); (2) Memelihara Jiwa (Hifzh an-Nafs); (3) Memelihara Akal (Hifzh al-\'Aql); (4) Memelihara Keturunan (Hifzh an-Nasl); dan (5) Memelihara Harta (Hifzh al-Mal).',
    referenceSource: 'Topik 4: 5 Pokok Maqasidul Ahkam (Dharuriyyat)'
  },
  {
    id: 'q21',
    topicId: 4,
    topicTitle: 'Topik 04: Ruang Lingkup, Tujuan, dan Ciri Hukum Islam',
    type: 'scenario',
    typeLabel: 'Studi Kasus / Skenario',
    question: 'Seorang musafir yang melakukan perjalanan jauh diberikan keringanan (rukhshah) untuk menjamak dan mengqashar shalat serta berbuka puasa Ramadan. Dalam tingkatan Maqasid Syari\'ah, ketentuan rukhshah tersebut memenuhi kategori kebutuhan:',
    options: [
      'Kebutuhan Primer (Dharuriyyat)',
      'Kebutuhan Sekunder (Hajjiyyat)',
      'Kebutuhan Tersier (Tahsiniyyat)',
      'Kebutuhan Pelengkap (Kamaliyyat)'
    ],
    correctIndex: 1,
    explanation: 'Kebutuhan Hajjiyyat (sekunder) adalah kebutuhan untuk menunjang kebutuhan primer dan menghilangkan kesukaran (masyaqqah). Contoh konkritnya adalah hukum rukhshah (keringanan shalat dan puasa saat safar), kemerdekaan, dan persamaan hak.',
    referenceSource: 'Topik 4: Kebutuhan Sekunder (Hajjiyyat)'
  },
  {
    id: 'q22',
    topicId: 4,
    topicTitle: 'Topik 04: Ruang Lingkup, Tujuan, dan Ciri Hukum Islam',
    type: 'scenario',
    typeLabel: 'Studi Kasus / Skenario',
    question: 'Ajaran tentang adab makan minum dengan tangan kanan, anjuran memakai pakaian yang bersih dan wangi ketika ke masjid, serta menyelenggarakan walimah termasuk dalam tingkatan:',
    options: [
      'Dharuriyyat, karena jika dilanggar merusak eksistensi agama.',
      'Hajjiyyat, karena bertujuan menghilangkan kesempitan fisik.',
      'Tahsiniyyat, karena berkaitan dengan etika, estetika, dan peningkatan martabat manusia.',
      'Taklifi Wajib, karena bersifat qath\'i dan mengikat mutlak.'
    ],
    correctIndex: 2,
    explanation: 'Kebutuhan Tersier (Tahsiniyyat) adalah kebutuhan yang berkaitan dengan etika, estetika, tata krama, dan peningkatan martabat manusia di hadapan Allah dan masyarakat (contoh: etika makan, kebersihan pakaian, walimah).',
    referenceSource: 'Topik 4: Kebutuhan Tersier (Tahsiniyyat)'
  },
  {
    id: 'q23',
    topicId: 5,
    topicTitle: 'Topik 05: Sumber-Sumber Hukum Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Manakah perbandingan karakteristik yang BENAR antara Surah Makkiyah dan Surah Madaniyah dalam Al-Qur\'an?',
    options: [
      'Makkiyah turun setelah hijrah dan fokus pada muamalah; Madaniyah turun sebelum hijrah dan fokus pada aqidah.',
      'Makkiyah diturunkan sebelum hijrah, ayatnya pendek, fokus pada Aqidah/Akhlak; Madaniyah diturunkan sesudah hijrah, ayatnya panjang, fokus pada muamalah dan tata negara.',
      'Makkiyah seluruhnya bersifat Zhanni; Madaniyah seluruhnya bersifat Qath\'i.',
      'Makkiyah hanya boleh dipelajari ulama mujtahid; Madaniyah untuk masyarakat awam.'
    ],
    correctIndex: 1,
    explanation: 'Surah Makkiyah diturunkan sebelum peristiwa Hijrah Nabi ke Madinah, umumnya berayat pendek dan berfokus pada penanaman Aqidah dan pembinaan Akhlak. Surah Madaniyah diturunkan sesudah Hijrah, berayat panjang, dan fokus pada pembentukan aturan hukum muamalah dan tata negara.',
    referenceSource: 'Topik 5: Al-Qur\'an (Makkiyah vs Madaniyah)'
  },
  {
    id: 'q24',
    topicId: 5,
    topicTitle: 'Topik 05: Sumber-Sumber Hukum Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Ketentuan hukum yang bersifat ibadah murni di mana akal manusia hanya bertugas menerima dan melaksanakannya secara pasti tanpa menggali motif rasionalnya disebut ayat:',
    options: [
      'Ta\'aqquli',
      'Ta\'abbudi',
      'Mutasyabihat',
      'Istihsan'
    ],
    correctIndex: 1,
    explanation: 'Ayat Ta\'abbudi adalah ketentuan ibadah murni/pasti (ghairu ma\'qulatil ma\'na), sedangkan ayat Ta\'aqquli adalah ketentuan muamalah yang dapat dirasionalkan (ma\'qulatil ma\'na) hikmah dan \'illat hukumnya.',
    referenceSource: 'Topik 5: Al-Qur\'an (Ta\'abbudi vs Ta\'aqquli)'
  },
  {
    id: 'q25',
    topicId: 5,
    topicTitle: 'Topik 05: Sumber-Sumber Hukum Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Al-Qur\'an memerintahkan kewajiban mendirikan shalat secara umum, lalu As-Sunnah menjelaskan rincian tata cara, bacaan, dan jumlah rakaatnya. Fungsi Sunnah dalam konteks ini adalah:',
    options: [
      'Bayan At-Taqrir (memperkuat hukum Al-Qur\'an)',
      'Bayan At-Tafsir (merinci dan memperjelas ayat umum)',
      'Bayan At-Takhsis (mengkhususkan ketentuan umum)',
      'Bayan At-Tasyri\' (menetapkan hukum baru yang belum ada di Al-Qur\'an)'
    ],
    correctIndex: 1,
    explanation: 'Bayan At-Tafsir adalah fungsi Sunnah dalam merinci, menafsirkan, atau memperjelas ayat-ayat Al-Qur\'an yang masih bersifat global (mujmal/umum), seperti rincian teknis mendirikan shalat.',
    referenceSource: 'Topik 5: Empat Fungsi Sunnah terhadap Al-Qur\'an'
  },
  {
    id: 'q26',
    topicId: 5,
    topicTitle: 'Topik 05: Sumber-Sumber Hukum Islam',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Hadis yang diriwayatkan oleh sejumlah besar perawi pada setiap tingkatan generasi sanad sehingga menurut akal mustahil mereka bersepakat untuk berdusta diklasifikasikan sebagai Hadis:',
    options: [
      'Mutawatir',
      'Masyhur',
      'Ahad',
      'Hasan'
    ],
    correctIndex: 0,
    explanation: 'Dari segi kuantitas perawi: Hadis Mutawatir diriwayatkan oleh orang banyak pada setiap generasi sanad yang mustahil sepakat berdusta (menghasilkan ilmu qath\'i); Masyhur diriwayatkan 3 orang atau lebih; Ahad diriwayatkan 1 atau 2 orang perawi.',
    referenceSource: 'Topik 5: Klasifikasi Kuantitas Hadis'
  },
  {
    id: 'q27',
    topicId: 5,
    topicTitle: 'Topik 05: Sumber-Sumber Hukum Islam',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Berdasarkan kaidah Ushul Fiqh dan materi yang ada, manakah batasan ruang lingkup Ijtihad yang TEPAT?',
    options: [
      'Ijtihad berlaku bebas untuk seluruh persoalan termasuk merombak rukun iman dan ibadah shalat fardhu.',
      'Ijtihad terbatas pada masalah muamalah/syariah yang dalilnya belum tegas (Zhanni), dan tidak berlaku untuk Aqidah serta Ibadah Murni.',
      'Ijtihad hanya boleh dilakukan oleh khalifah kepala negara secara mutlak.',
      'Ijtihad hanya berlaku pada zaman sahabat Nabi dan telah tertutup sempurna.'
    ],
    correctIndex: 1,
    explanation: 'Bidang Ijtihad terbatas pada masalah muamalah/syariah yang hukumnya belum tegas (Zhanni), dan tidak berlaku untuk Aqidah serta Ibadah Murni yang bersifat qath\'i.',
    referenceSource: 'Topik 5: Pengertian & Bidang Ijtihad'
  },
  {
    id: 'q28',
    topicId: 5,
    topicTitle: 'Topik 05: Sumber-Sumber Hukum Islam',
    type: 'scenario',
    typeLabel: 'Studi Kasus / Skenario',
    question: 'Para ulama menetapkan pengharaman narkotika dan sabu-sabu dengan menyamakannya pada pengharaman Khamr dalam Al-Qur\'an karena adanya kesamaan alasan hukum (\'illat), yaitu sama-sama memabukkan dan merusak akal sehat. Metode ijtihad yang digunakan adalah:',
    options: [
      'Ijma\'',
      'Qiyas',
      'Maslahah Mursalah',
      'Istishab'
    ],
    correctIndex: 1,
    explanation: 'Qiyas adalah metode menyamakan hukum kasus baru dengan kasus lama karena persamaan alasan hukum (\'Illat). Contohnya adalah haramnya narkoba yang dikiaskan pada khamr karena sama-sama memabukkan, serta zakat beras yang dikiaskan pada gandum.',
    referenceSource: 'Topik 5: Metode Ijtihad (Qiyas)'
  },
  {
    id: 'q29',
    topicId: 5,
    topicTitle: 'Topik 05: Sumber-Sumber Hukum Islam',
    type: 'scenario',
    typeLabel: 'Studi Kasus / Skenario',
    question: 'Pemerintah menetapkan kewajiban mencatatkan pernikahan dalam akta nikah resmi negara demi menjamin kepastian hukum hak istri dan anak, padahal tidak ada ayat atau hadis spesifik yang memerintahkannya secara harfiah. Penetapan hukum demi kemaslahatan umum ini berlandaskan metode:',
    options: [
      'Maslahah Mursalah',
      'Istihsan',
      'Istishab',
      '\'Urf'
    ],
    correctIndex: 0,
    explanation: 'Maslahah Mursalah adalah penetapan hukum berdasar kemaslahatan umum yang tidak diatur secara eksplisit oleh dalil spesifik. Contoh: Pencatatan perkawinan dalam lembaran negara dan kodifikasi Al-Qur\'an era Abu Bakar.',
    referenceSource: 'Topik 5: Metode Ijtihad (Maslahah Mursalah)'
  },
  {
    id: 'q30',
    topicId: 5,
    topicTitle: 'Topik 05: Sumber-Sumber Hukum Islam',
    type: 'scenario',
    typeLabel: 'Studi Kasus / Skenario',
    question: 'Masyarakat berbelanja di minimarket modern mengambil barang dan membayar di kasir tanpa mengucapkan lafaz ijab-kabul secara lisan ("saya jual", "saya beli"). Praktik transaksi ini dinilai sah dalam hukum Islam berdasarkan metode:',
    options: [
      'Qiyas jali',
      'Bayan At-Tasyri\'',
      '\'Urf (Adat kebiasaan masyarakat yang tidak bertentangan dengan Al-Qur\'an dan Sunnah)',
      'Hukum Wadh\'i Mani\''
    ],
    correctIndex: 2,
    explanation: '\'Urf adalah adat kebiasaan masyarakat yang tidak bertentangan dengan Al-Qur\'an dan Sunnah. Contoh penerapannya adalah sistem pembayaran sewa atau jual beli eceran tanpa ucapan akad formal lisan.',
    referenceSource: 'Topik 5: Metode Ijtihad (\'Urf)'
  }
];
