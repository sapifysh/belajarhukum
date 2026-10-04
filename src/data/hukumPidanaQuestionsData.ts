import { PracticeQuestion } from './practiceQuestionsData';

export const PIDANA_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  // PERTEMUAN 1
  {
    id: 'pidana-q-01',
    topicId: 1,
    topicTitle: 'Pertemuan 01: Pengantar & Konsep Dasar',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Apakah perbedaan mendasar antara Hukum Acara Pidana dalam arti sempit dengan Sistem Peradilan Pidana (SPP) dalam arti luas?',
    options: [
      'Hukum Acara Pidana hanya berlaku bagi tindak pidana khusus, sedangkan SPP berlaku untuk tindak pidana umum.',
      'Hukum Acara Pidana berfokus pada normatif-operasional pencarian kebenaran hingga eksekusi, sedangkan SPP mencakup interaksi jaringan kelembagaan sistemik sejak pembentukan UU hingga pembinaan di Lapas.',
      'Hukum Acara Pidana merupakan hukum materiil perdata, sedangkan SPP adalah hukum acara pidana militer.',
      'Hukum Acara Pidana diatur oleh Mahkamah Agung, sedangkan SPP diatur oleh kementerian kehakiman.',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi resmi Pertemuan 1: Hukum Acara Pidana (arti sempit) fokus pada normatif-operasional pencarian kebenaran, penyelidikan, penyidikan, penuntutan, persidangan, hingga eksekusi putusan. Sedangkan Sistem Peradilan Pidana (arti luas) mencakup interaksi jaringan kelembagaan secara sistemik sejak pembentukan UU, proses peradilan, hingga pembinaan di Lembaga Pemasyarakatan.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 1'
  },
  {
    id: 'pidana-q-02',
    topicId: 1,
    topicTitle: 'Pertemuan 01: Pengantar & Konsep Dasar',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Manakah dari pilihan berikut yang merupakan 5 fungsi utama Hukum Acara Pidana menurut materi resmi?',
    options: [
      'Represif, Preventif, Kuratif, Rehabilitatif, dan Retributif',
      'Instrumental, Protektif, Epistemik, Institusional, dan Legitimasi',
      'Informatif, Komunikatif, Administratif, Yudisial, dan Eksekutif',
      'Penyidikan, Penuntutan, Pengadilan, Banding, dan Kasasi',
    ],
    correctIndex: 1,
    explanation: 'Materi Pertemuan 1 secara tegas menyebutkan 5 fungsi utama Hukum Acara Pidana: Instrumental, Protektif, Epistemik, Institusional, dan Legitimasi.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 1'
  },

  // PERTEMUAN 2
  {
    id: 'pidana-q-03',
    topicId: 2,
    topicTitle: 'Pertemuan 02: Asas-Asas Utama',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Bagaimanakah penerapan asas In Presentia vs In Absentia dalam hukum acara pidana modern?',
    options: [
      'Terdakwa selalu boleh tidak hadir pada seluruh jenis persidangan pidana tanpa batas.',
      'Prinsip utama adalah kehadiran nyata terdakwa di persidangan (In Presentia), sedangkan persidangan tanpa terdakwa (In Absentia) hanya diperbolehkan secara terbatas pada tindak pidana khusus seperti Tipikor dan Terorisme.',
      'Persidangan hanya boleh digelar tanpa terdakwa apabila ada jaminan uang ganti rugi.',
      'In Absentia merupakan kewajiban bagi seluruh perkara pidana dengan ancaman hukuman di bawah 5 tahun.',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi Pertemuan 2 butir 8: Prinsip utama peradilan adalah kehadiran nyata terdakwa di ruang sidang (In Presentia). Persidangan secara In Absentia hanya diperbolehkan secara terbatas dan ketat pada tindak pidana khusus tertentu, seperti Tindak Pidana Korupsi dan Terorisme.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 2 butir 8'
  },
  {
    id: 'pidana-q-04',
    topicId: 2,
    topicTitle: 'Pertemuan 02: Asas-Asas Utama',
    type: 'scenario',
    typeLabel: 'Penerapan Asas',
    question: 'Penyidik melakukan penggeledahan dan penyitaan dokumen di rumah terlapor tanpa izin Ketua Pengadilan Negeri dan tanpa memenuhi syarat kondisi mendesak. Berdasarkan asas Exclusionary Rule, bagaimanakah status dokumen tersebut di persidangan?',
    options: [
      'Tetap sah digunakan karena pembuktian pidana mencari kebenaran materiil mutlak.',
      'Alat bukti tersebut dinyatakan tidak sah dan dilarang digunakan di persidangan karena diperoleh secara melawan hukum.',
      'Sah asalkan terdakwa kemudian mengakui perbuatannya di hadapan penyidik.',
      'Dokumen dialihkan menjadi bukti perdata di pengadilan niaga.',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan Asas Exclusionary Rule (Pertemuan 2 butir 11 & Pertemuan 9 butir 8): Alat bukti yang diperoleh secara tidak sah atau melawan hukum dinyatakan tidak sah dan tidak dapat digunakan di persidangan.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 2 butir 11'
  },
  {
    id: 'pidana-q-05',
    topicId: 2,
    topicTitle: 'Pertemuan 02: Asas-Asas Utama',
    type: 'conceptual',
    typeLabel: 'Konseptual',
    question: 'Apakah yang dimaksud dengan asas Asas Oportunitas (Dominus Litis) yang dipegang oleh Penuntut Umum?',
    options: [
      'Kewenangan polisi untuk menghentikan persidangan tanpa persetujuan hakim.',
      'Monopoli penuntutan oleh Penuntut Umum/Kejaksaan, termasuk wewenang mengesampingkan perkara demi kepentingan umum (deponering).',
      'Hak eksklusif advokat untuk menentukan pasal dakwaan yang akan diuji di sidang.',
      'Hakim berwenang mengambil alih tugas jaksa penuntut umum dalam penyusunan requisitoir.',
    ],
    correctIndex: 1,
    explanation: 'Materi Pertemuan 2 butir 4 mendefinisikan Asas Oportunitas (Dominus Litis) sebagai monopoli penuntutan oleh Penuntut Umum/Kejaksaan, termasuk wewenang mengesampingkan perkara demi kepentingan umum (deponering).',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 2 butir 4'
  },

  // PERTEMUAN 3
  {
    id: 'pidana-q-06',
    topicId: 3,
    topicTitle: 'Pertemuan 03: Paradigma Baru Reformasi KUHAP',
    type: 'conceptual',
    typeLabel: 'Pembaruan Hukum',
    question: 'Bagaimanakah arah pergeseran filosofis paradigma peradilan pidana dalam UU No. 20 Tahun 2025?',
    options: [
      'Dari Restorative Justice menuju Crime Control Model represif murni.',
      'Dari Crime Control Model (fokus penindakan) menuju Due Process Model (proses hukum adil) dan pemulihan keadaan (Restorative Justice).',
      'Dari sistem pembuktian undang-undang negatif ke sistem pembuktian keyakinan bebas.',
      'Dari peradilan terbuka umum menjadi peradilan tertutup rahasia negara.',
    ],
    correctIndex: 1,
    explanation: 'Materi Pertemuan 3 menegaskan pergeseran paradigma KUHAP Baru: Dari Crime Control Model (fokus penindakan) menuju Due Process Model (proses hukum adil) dan pemulihan keadaan (Restorative Justice).',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 3'
  },
  {
    id: 'pidana-q-07',
    topicId: 3,
    topicTitle: 'Pertemuan 03: Paradigma Baru Reformasi KUHAP',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Apakah kewajiban baru yang diatur secara tegas dalam KUHAP 2025 saat penyidik melakukan pemeriksaan terhadap tersangka guna mencegah intimidasi dan penyiksaan?',
    options: [
      'Wajib disaksikan oleh minimal 5 orang warga sekitar TKP.',
      'Wajib menggunakan Rekaman Kamera Pengawas (CCTV) audio-visual selama pemeriksaan.',
      'Wajib disiarkan secara langsung di media sosial kepolisian.',
      'Wajib didampingi oleh seluruh anggota majelis hakim pengadilan negeri.',
    ],
    correctIndex: 1,
    explanation: 'Materi Pertemuan 3 butir b menyebutkan pembaruan utama: Rekaman Kamera Pengawas (CCTV) wajib merekam pemeriksaan tersangka untuk mencegah intimidasi dan penyiksaan.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 3 butir b'
  },
  {
    id: 'pidana-q-08',
    topicId: 3,
    topicTitle: 'Pertemuan 03: Paradigma Baru Reformasi KUHAP',
    type: 'conceptual',
    typeLabel: 'Pranata Baru',
    question: 'Apakah dua pranata penyelesaian perkara baru yang diakui dalam reformasi UU No. 20 Tahun 2025?',
    options: [
      'Ganti rugi adat dan peradilan militer darurat',
      'Plea Bargain (Pengakuan Bersalah) dan Deferred Prosecution Agreement (DPA) untuk korporasi',
      'Arbitrase perdata dan mediasi perbankan',
      'Eksekusi langsung tanpa vonis dan pembuangan wilayah',
    ],
    correctIndex: 1,
    explanation: 'Materi Pertemuan 3 butir d mengakui pranata penyelesaian perkara baru: Plea Bargain (Pengakuan Bersalah) bagi orang perseorangan dan Deferred Prosecution Agreement (DPA) untuk subjek hukum korporasi.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 3 butir d'
  },

  // PERTEMUAN 4
  {
    id: 'pidana-q-09',
    topicId: 4,
    topicTitle: 'Pertemuan 04: Subjek dan Kelembagaan',
    type: 'conceptual',
    typeLabel: 'Progresi Status',
    question: 'Bagaimanakah urutan progresi status seorang individu dalam penanganan perkara pidana dari awal hingga akhir?',
    options: [
      'Terpidana → Terdakwa → Tersangka',
      'Tersangka (diduga kuat pelaku berdasar min 2 alat bukti) → Terdakwa (dilimpahkan ke pengadilan untuk diadili) → Terpidana (dipidana berdasar putusan inkracht)',
      'Terlapor → Tergugat → Terpidana',
      'Terdakwa → Saksi Mahkota → Tersangka',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi Pertemuan 4: Tersangka adalah orang yang diduga kuat pelaku pidana berdasarkan minimal 2 alat bukti sah; Terdakwa adalah tersangka yang dilimpahkan ke pengadilan untuk diadili; Terpidana adalah orang yang dipidana berdasarkan putusan pengadilan berkekuatan hukum tetap (inkracht).',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 4'
  },
  {
    id: 'pidana-q-10',
    topicId: 4,
    topicTitle: 'Pertemuan 04: Subjek dan Kelembagaan',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Lembaga pendukung manakah yang bertugas memberikan perlindungan fisik, psikologis, identitas rahasia, serta memfasilitasi restitusi bagi saksi dan korban?',
    options: [
      'PPATK',
      'LPSK (Lembaga Perlindungan Saksi dan Korban)',
      'BPKP',
      'Rupbasan',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi Pertemuan 4 dan 5, LPSK bertugas memberikan perlindungan fisik, psikologis, kerahasiaan identitas, bantuan medis/rehabilitasi, serta fasilitasi hak restitusi dan kompensasi bagi saksi dan korban.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 4'
  },

  // PERTEMUAN 5
  {
    id: 'pidana-q-11',
    topicId: 5,
    topicTitle: 'Pertemuan 05: Hak-Hak Para Pihak',
    type: 'conceptual',
    typeLabel: 'Hak Asasi',
    question: 'Apakah yang dimaksud dengan hak diam (privilege against self-incrimination) yang dijamin bagi Tersangka/Terdakwa dalam Pasal 142?',
    options: [
      'Hak tersangka untuk menolak hadir di kantor polisi selama penyelidikan.',
      'Hak tersangka/terdakwa untuk menolak memberikan keterangan yang dapat memberatkan dirinya sendiri atau mengakui kesalahan secara terpaksa.',
      'Hak tersangka untuk merahasiakan identitas KTP dan kartu keluarganya.',
      'Hak terdakwa untuk melarang jaksa membacakan surat dakwaan di muka persidangan.',
    ],
    correctIndex: 1,
    explanation: 'Pasal 142 KUHAP Baru menjamin hak diam (privilege against self-incrimination), yaitu hak tersangka/terdakwa untuk tidak memberikan keterangan atau jawaban yang menjerat atau memberatkan dirinya sendiri tanpa boleh dipaksa atau disiksa.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 5 (Pasal 142)'
  },
  {
    id: 'pidana-q-12',
    topicId: 5,
    topicTitle: 'Pertemuan 05: Hak-Hak Para Pihak',
    type: 'conceptual',
    typeLabel: 'Pemulihan Korban',
    question: 'Apakah perbedaan mendasar antara hak Restitusi dan hak Kompensasi bagi korban tindak pidana (Pasal 143 & 144)?',
    options: [
      'Restitusi dibayarkan berupa barang, sedangkan Kompensasi berupa saham perseroan.',
      'Restitusi adalah ganti rugi yang dibayarkan oleh Pelaku tindak pidana, sedangkan Kompensasi adalah ganti rugi yang dibayarkan oleh Negara.',
      'Restitusi hanya untuk perkara pencurian, sedangkan Kompensasi untuk perkara perdata perbankan.',
      'Restitusi diputuskan oleh kepolisian, sedangkan Kompensasi diputuskan oleh penasihat hukum.',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi Pertemuan 5 (Pasal 143 & 144): Restitusi adalah ganti rugi dari pelaku, sedangkan Kompensasi adalah ganti rugi dari negara.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 5 (Pasal 143 & 144)'
  },
  {
    id: 'pidana-q-13',
    topicId: 5,
    topicTitle: 'Pertemuan 05: Hak-Hak Para Pihak',
    type: 'mcq',
    typeLabel: 'Kelompok Rentan',
    question: 'Berdasarkan Pasal 145–148, perlakuan khusus apakah yang dijamin bagi Tersangka/Terdakwa yang berusia Lanjut Usia (>75 Tahun)?',
    options: [
      'Otomatis dibebaskan dari seluruh proses hukum tanpa pemeriksaan materiil.',
      'Pelayanan kesehatan khusus dan menjadi pertimbangan hakim untuk tidak dijatuhi pidana penjara.',
      'Wajib menjalani hukuman kerja sosial di luar negeri.',
      'Pemeriksaannya tidak boleh dicatat dalam berita acara pemeriksaan (BAP).',
    ],
    correctIndex: 1,
    explanation: 'Materi Pertemuan 5 (Pasal 145–148) mengatur bahwa bagi kelompok lanjut usia (>75 Tahun) berhak atas pelayanan kesehatan khusus dan menjadi pertimbangan hakim untuk tidak dijatuhi pidana penjara.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 5'
  },

  // PERTEMUAN 6
  {
    id: 'pidana-q-14',
    topicId: 6,
    topicTitle: 'Pertemuan 06: Tahapan Penyelidikan & Penyidikan',
    type: 'conceptual',
    typeLabel: 'Prosedur',
    question: 'Apakah tiga peristiwa hukum yang dapat menjadi pemicu dilakukannya Penyelidikan menurut Pasal 13–21 & 165–175?',
    options: [
      'Gugatan perdata, somasi, dan teguran lisan',
      'Laporan, Pengaduan, atau Tertangkap Tangan',
      'Perintah presiden, rekomendasi DPR, dan jajak pendapat publik',
      'Surat tuntutan, replik, dan putusan sela',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi Pertemuan 6 Bagian A: Pemicu penyelidikan adalah Laporan, Pengaduan, atau Tertangkap Tangan.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 6 Bagian A'
  },
  {
    id: 'pidana-q-15',
    topicId: 6,
    topicTitle: 'Pertemuan 06: Tahapan Penyelidikan & Penyidikan',
    type: 'scenario',
    typeLabel: 'Alur Pemberkasan',
    question: 'Dalam alur penyidikan, jika Jaksa Penuntut Umum meneliti berkas perkara hasil penyidikan Tahap I dan mendapati berkas tersebut telah lengkap secara formil dan materiil, kode administrasi resmi apakah yang diterbitkan jaksa?',
    options: [
      'P-19',
      'P-21',
      'SPDP',
      'LHP',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan alur prosedur penyidikan (Pertemuan 6 Bagian B): Penelitian berkas Tahap I oleh Jaksa menghasilkan P-19 jika berkas belum lengkap (dikembalikan disertai petunjuk), atau P-21 jika berkas telah dinyatakan lengkap, disusul Penyerahan Tahap II (Tersangka & Barang Bukti).',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 6 Bagian B'
  },

  // PERTEMUAN 7
  {
    id: 'pidana-q-16',
    topicId: 7,
    topicTitle: 'Pertemuan 07: Mekanisme Upaya Paksa Umum',
    type: 'conceptual',
    typeLabel: 'Tenggang Waktu',
    question: 'Berapa lama batas waktu maksimal dilakukannya tindakan Penangkapan oleh penyidik sebelum diputuskan apakah tersangka ditahan atau dilepaskan?',
    options: [
      'Maksimal 3 hari kerja',
      'Maksimal 1 × 24 jam',
      'Maksimal 2 × 24 jam',
      'Maksimal 7 hari kalender',
    ],
    correctIndex: 1,
    explanation: 'Materi Pertemuan 7 butir 2 menetapkan batas waktu penangkapan: Minimal 2 alat bukti sah; maksimal 1 × 24 jam.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 7 butir 2'
  },
  {
    id: 'pidana-q-17',
    topicId: 7,
    topicTitle: 'Pertemuan 07: Mekanisme Upaya Paksa Umum',
    type: 'conceptual',
    typeLabel: 'Syarat Penahanan',
    question: 'Manakah dari pernyataan berikut yang merupakan Syarat Objektif untuk dapat dilakukannya penahanan terhadap tersangka?',
    options: [
      'Penyidik merasa curiga bahwa tersangka tidak kooperatif saat diperiksa.',
      'Tindak pidana yang disangkakan diancam dengan pidana penjara 5 tahun atau lebih / tindak pidana khusus tertentu.',
      'Adanya desakan demonstrasi dari keluarga korban tindak pidana.',
      'Tersangka tidak mampu membayar uang jaminan penangguhan penahanan.',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi Pertemuan 7 butir 3: Syarat Objektif penahanan adalah ancaman pidana penjara 5 tahun atau lebih atau tindak pidana khusus tertentu. Kekhawatiran melarikan diri, merusak barang bukti, atau mengulangi pidana adalah Syarat Subjektif.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 7 butir 3'
  },
  {
    id: 'pidana-q-18',
    topicId: 7,
    topicTitle: 'Pertemuan 07: Mekanisme Upaya Paksa Umum',
    type: 'scenario',
    typeLabel: 'Upaya Paksa Mendesak',
    question: 'Dalam kondisi mendesak di mana penggeledahan dan penyitaan terpaksa dilakukan terlebih dahulu tanpa izin awal Ketua PN, berapa tenggang waktu maksimal penyidik wajib meminta persetujuan Ketua Pengadilan Negeri pasca-tindakan?',
    options: [
      'Penggeledahan max 1 hari, Penyitaan max 2 hari kerja',
      'Penggeledahan max 2 × 24 jam, Penyitaan max 5 hari kerja',
      'Penggeledahan max 7 hari, Penyitaan max 14 hari kerja',
      'Tidak perlu meminta persetujuan pengadilan sama sekali',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi Pertemuan 7 butir 4: Dalam kondisi mendesak yang dilakukan terlebih dahulu, penyidik wajib meminta persetujuan PN pasca-tindakan (Penggeledahan max 2 × 24 jam, Penyitaan max 5 hari kerja). Jika ditolak PN, bukti batal demi hukum.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 7 butir 4'
  },
  {
    id: 'pidana-q-19',
    topicId: 7,
    topicTitle: 'Pertemuan 07: Mekanisme Upaya Paksa Umum',
    type: 'mcq',
    typeLabel: 'Pilihan Ganda',
    question: 'Dimanakah seluruh benda sitaan hasil penyidikan perkara pidana wajib disimpan secara resmi menurut ketentuan KUHAP Baru?',
    options: [
      'Gudang pribadi penyidik yang menangani perkara',
      'Rupbasan (Rumah Penyimpanan Benda Sitaan Negara)',
      'Kantor kepala desa setempat tempat terjadinya tindak pidana',
      'Bank sentral atas nama penuntut umum',
    ],
    correctIndex: 1,
    explanation: 'Materi Pertemuan 7 butir 5 mengatur bahwa benda sitaan disimpan resmi di Rupbasan dan dilarang digunakan untuk kepentingan pribadi atau operasional aparat.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 7 butir 5'
  },

  // PERTEMUAN 8
  {
    id: 'pidana-q-20',
    topicId: 8,
    topicTitle: 'Pertemuan 08: Pertanggungjawaban Korporasi',
    type: 'conceptual',
    typeLabel: 'Subjek Korporasi',
    question: 'Berdasarkan Pasal 326–327, siapa sajakah pihak yang dapat dimintai pertanggungjawaban dalam tindak pidana korporasi?',
    options: [
      'Hanya pemegang saham minoritas dan buruh harian korporasi',
      'Korporasi dan/atau penanggung jawabnya (pengurus fungsional, pemberi perintah, pemegang kendali, atau beneficial owner)',
      'Hanya advokat yang memberikan legal opinion kepada korporasi',
      'Konsumen yang membeli produk barang dari korporasi tersebut',
    ],
    correctIndex: 1,
    explanation: 'Materi Pertemuan 8 menyebutkan subjek hukum yang dapat dituntut: Korporasi dan/atau penanggung jawabnya (pengurus fungsional, pemberi perintah, pemegang kendali, atau beneficial owner).',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 8'
  },
  {
    id: 'pidana-q-21',
    topicId: 8,
    topicTitle: 'Pertemuan 08: Pertanggungjawaban Korporasi',
    type: 'conceptual',
    typeLabel: 'Instrumen DPA',
    question: 'Apakah yang dimaksud dengan instrumen Deferred Prosecution Agreement (DPA) dalam penyidikan perkara korporasi?',
    options: [
      'Penghapusan seluruh dakwaan korporasi secara rahasia tanpa syarat ganti rugi.',
      'Perjanjian penundaan penuntutan terhadap korporasi yang mendorong pemulihan kerugian/restitusi dan perbaikan kepatuhan.',
      'Perjanjian peleburan korporasi dengan badan usaha milik negara.',
      'Putusan kasasi Mahkamah Agung yang mempailitkan korporasi.',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi Pertemuan 8: DPA (Perjanjian Penundaan Penuntutan) adalah instrumen khusus yang mendorong Restorative Justice (pemulihan/restitusi kerugian) di mana penuntutan pidana ditunda selama korporasi memenuhi kewajiban yang disepakati.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 8'
  },

  // PERTEMUAN 9
  {
    id: 'pidana-q-22',
    topicId: 9,
    topicTitle: 'Pertemuan 09: Sistem Pembuktian & Alat Bukti',
    type: 'conceptual',
    typeLabel: 'Sistem Pembuktian',
    question: 'Sistem pembuktian apakah yang dianut dalam UU No. 20 Tahun 2025 dan apa konsekuensi yuridisnya?',
    options: [
      'Positief wettelijk: Hakim wajib memidana cukup jika ada pengakuan terdakwa saja.',
      'Negatief wettelijk: Hakim hanya boleh menjatuhkan pidana jika terdapat sekurang-kurangnya 2 alat bukti yang sah menurut UU dan hakim memperoleh keyakinan bersalah.',
      'Conviction intime: Pemidanaan semata-mata didasarkan pada keyakinan bebas hakim tanpa butuh alat bukti undang-undang.',
      'Conviction raisonnee: Pembuktian diserahkan sepenuhnya kepada dewan juri masyarakat.',
    ],
    correctIndex: 1,
    explanation: 'Materi Pertemuan 9 menegaskan: KUHAP Baru menganut sistem pembuktian negatief wettelijk dengan alat bukti sah yang diperluas, memerlukan sekurang-kurangnya 2 alat bukti yang sah disertai keyakinan hakim.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 9 (Pasal 235)'
  },
  {
    id: 'pidana-q-23',
    topicId: 9,
    topicTitle: 'Pertemuan 09: Sistem Pembuktian & Alat Bukti',
    type: 'mcq',
    typeLabel: 'Alat Bukti Sah',
    question: 'Manakah dari pilihan berikut yang merupakan perluasan alat bukti sah yang diakui secara eksplisit dalam Pasal 235 KUHAP Baru?',
    options: [
      'Petunjuk dukun dan penerawangan gaib',
      'Bukti Elektronik (Data/dokumen elektronik yang terjamin keotentikannya)',
      'Opini publik di media massa',
      'Hasil pemungutan suara online di internet',
    ],
    correctIndex: 1,
    explanation: 'Pasal 235 butir 6 secara eksplisit mengakui Bukti Elektronik (data/dokumen elektronik yang terjamin keotentikannya) sebagai alat bukti sah yang mandiri.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 9 butir 6'
  },

  // PERTEMUAN 10
  {
    id: 'pidana-q-24',
    topicId: 10,
    topicTitle: 'Pertemuan 10: Peradilan dan Persidangan',
    type: 'conceptual',
    typeLabel: 'Urutan Sidang',
    question: 'Setelah pemeriksaan pembuktian saksi, ahli, surat, bukti elektronik, dan terdakwa selesai dilakukan di sidang Pengadilan Negeri, tahapan persidangan apakah yang selanjutnya berlangsung?',
    options: [
      'Pembacaan putusan sela oleh majelis hakim',
      'Pembacaan Tuntutan Pidana (Requisitoir) oleh Penuntut Umum',
      'Pengajuan nota keberatan (eksepsi) oleh penasihat hukum',
      'Pelimpahan berkas kembali ke penyidik kepolisian',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan tahapan persidangan resmi Pertemuan 10: Setelah Pembuktian (butir d), tahap berikutnya adalah Pembacaan Tuntutan Pidana / Requisitoir oleh Penuntut Umum (butir e), disusul Pledoi, Replik, Duplik, Musyawarah Majelis, dan Pembacaan Putusan.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 10'
  },
  {
    id: 'pidana-q-25',
    topicId: 10,
    topicTitle: 'Pertemuan 10: Peradilan dan Persidangan',
    type: 'conceptual',
    typeLabel: 'Pledoi & Replik',
    question: 'Apakah yang dimaksud dengan Pledoi dan siapakah yang berhak mengajukannya di muka persidangan?',
    options: [
      'Surat gugatan ganti rugi yang dibacakan oleh saksi korban.',
      'Nota pembelaan yang diajukan oleh Terdakwa dan/atau Penasihat Hukumnya untuk menanggapi tuntutan pidana jaksa.',
      'Surat penetapan penahanan lanjutan yang dibacakan oleh panitera pengadilan.',
      'Surat izin penggeledahan darurat yang disahkan oleh ketua pengadilan tinggi.',
    ],
    correctIndex: 1,
    explanation: 'Materi Pertemuan 10 butir f: Pledoi adalah nota pembelaan yang diajukan dan dibacakan oleh Terdakwa dan/atau Penasihat Hukumnya setelah jaksa membacakan surat tuntutan pidana (requisitoir).',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 10 butir f'
  },

  // PERTEMUAN 11
  {
    id: 'pidana-q-26',
    topicId: 11,
    topicTitle: 'Pertemuan 11: Putusan dan Upaya Hukum',
    type: 'conceptual',
    typeLabel: 'Jenis Putusan',
    question: 'Majelis Hakim menyatakan bahwa seluruh fakta perbuatan yang didakwakan oleh Penuntut Umum terbukti secara sah di persidangan, namun perbuatan tersebut ternyata merupakan sengketa wanprestasi perdata dan bukan tindak pidana. Putusan apakah yang wajib dijatuhkan hakim?',
    options: [
      'Putusan Pemidanaan maksimal dengan denda',
      'Putusan Lepas dari Segala Tuntutan Hukum (Ontslag van Alle Rechtsvervolging)',
      'Putusan Bebas (Vrijspraak)',
      'Putusan Gugur demi Hukum',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi Pertemuan 11 butir c: Putusan Lepas dari Segala Tuntutan Hukum (Ontslag van Alle Rechtsvervolging) dijatuhkan jika perbuatan terbukti, tetapi perbuatan tersebut bukan merupakan tindak pidana. Jika perbuatan materiil sama sekali tidak terbukti, barulah dijatuhkan Putusan Bebas (Vrijspraak).',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 11 butir c'
  },
  {
    id: 'pidana-q-27',
    topicId: 11,
    topicTitle: 'Pertemuan 11: Putusan dan Upaya Hukum',
    type: 'conceptual',
    typeLabel: 'Upaya Hukum',
    question: 'Apakah dasar alasan hukum yang dapat digunakan oleh terpidana atau ahli warisnya untuk mengajukan Upaya Hukum Luar Biasa Peninjauan Kembali (PK) ke Mahkamah Agung?',
    options: [
      'Pergantian jaksa penuntut umum di kejaksaan negeri setempat',
      'Adanya novum (bukti baru) atau kekhilafan hakim yang nyata',
      'Ketidakmampuan terpidana membayar denda perkara',
      'Permohonan grasi yang ditolak oleh menteri hukum',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan materi Pertemuan 11: Upaya Hukum Luar Biasa Peninjauan Kembali (PK) diajukan ke Mahkamah Agung berdasarkan adanya novum (bukti baru yang menentukan) atau kekhilafan hakim yang nyata dalam putusan yang telah inkracht.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 11'
  },

  // PERTEMUAN 12
  {
    id: 'pidana-q-28',
    topicId: 12,
    topicTitle: 'Pertemuan 12: Upaya Paksa Khusus',
    type: 'conceptual',
    typeLabel: 'Pemeriksaan Surat',
    question: 'Dalam pelaksanaan upaya paksa Pemeriksaan Surat menurut Pasal 137–139, apabila setelah diperiksa surat di kantor pos/ekspedisi tersebut TIDAK terkait dengan perkara pidana yang disidik, tindakan apakah yang wajib dilakukan penyidik?',
    options: [
      'Surat langsung dimusnahkan agar kerahasiaan penyidikan tetap terjaga.',
      'Diberi cap "telah dibuka oleh Penyidik" dilengkapi tanggal, tanda tangan, identitas Penyidik, lalu ditutup kembali dan dikembalikan paling lama 2 Hari.',
      'Surat disita dan disimpan di Rupbasan selama minimal 1 tahun.',
      'Surat dijual melalui lelang negara untuk kas peradilan.',
    ],
    correctIndex: 1,
    explanation: 'Materi Pertemuan 12 Bagian C secara tegas menyatakan: Jika Tidak Terkait Perkara → Diberi cap "telah dibuka oleh Penyidik" dilengkapi tanggal, tanda tangan, dan identitas Penyidik, lalu ditutup kembali dan dikembalikan paling lama 2 Hari. Penyidik wajib merahasiakan isinya dan membuat Berita Acara tembusan ke PN.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 12 Bagian C'
  },
  {
    id: 'pidana-q-29',
    topicId: 12,
    topicTitle: 'Pertemuan 12: Upaya Paksa Khusus',
    type: 'scenario',
    typeLabel: 'Pemblokiran Mendesak',
    question: 'Penyidik melakukan tindakan pemblokiran rekening bank tanpa izin awal karena adanya potensi dialihkannya harta kekayaan (kondisi mendesak). Berapa lama batas waktu penyidik wajib meminta persetujuan Ketua PN pasca-tindakan, dan berapa lama penetapan persetujuan/penolakan harus dikeluarkan Ketua PN?',
    options: [
      'Penyidik meminta persetujuan max 7 hari kerja, Ketua PN memutus max 14 hari',
      'Penyidik meminta persetujuan paling lama 2 × 24 jam, Ketua PN mengeluarkan penetapan paling lama 2 × 24 jam',
      'Penyidik meminta persetujuan max 1 bulan, Ketua PN memutus max 3 bulan',
      'Tidak ada batasan waktu bagi aparat penegak hukum',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan Pasal 140 ayat (7–8) (Pertemuan 12 Bagian D): Prosedur Ex-Post mewajibkan Penyidik meminta persetujuan Ketua PN paling lama 2 × 24 jam setelah tindakan. Ketua PN mengeluarkan penetapan persetujuan/penolakan paling lama 2 × 24 jam.',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 12 Bagian D'
  },
  {
    id: 'pidana-q-30',
    topicId: 12,
    topicTitle: 'Pertemuan 12: Upaya Paksa Khusus',
    type: 'mcq',
    typeLabel: 'Larangan Keluar Wilayah',
    question: 'Berapakah jangka waktu maksimal berlakunya tindakan Larangan Keluar Wilayah Indonesia (pencegahan ke luar negeri) dan berapa kali perpanjangannya menurut Pasal 141?',
    options: [
      'Paling lama 1 tahun tanpa ada kemungkinan perpanjangan',
      'Paling lama 6 Bulan dan dapat diperpanjang 1 × 6 Bulan',
      'Paling lama 3 bulan dan dapat diperpanjang seumur hidup',
      'Paling lama 2 tahun dan dapat diperpanjang setiap 6 bulan',
    ],
    correctIndex: 1,
    explanation: 'Berdasarkan Pasal 141 (Pertemuan 12 Bagian E & Tabel Ringkasan Halaman 8): Larangan Keluar Wilayah Indonesia berlaku paling lama 6 Bulan dan dapat diperpanjang 1 × 6 Bulan (total batas maksimal 12 bulan).',
    referenceSource: 'Rangkuman Lengkap KUHAP UU 20/2025 · Pertemuan 12 Bagian E'
  },
];
