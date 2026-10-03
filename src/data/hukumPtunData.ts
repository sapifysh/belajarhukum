import { Topic } from './hukumIslamData';

export const HUKUM_PTUN_METADATA = {
  courseCode: 'HKO60024',
  credits: '2 SKS',
  faculty: 'Fakultas Hukum Universitas Brawijaya (FH UB)',
  syllabus: 'Silabus Substantif Topik 1 – 8',
  lecturer: 'Fakultas Hukum Universitas Brawijaya',
  format: 'Panduan Belajar UTS Komprehensif',
  coverage: 'Topik 01 – 08 & Latihan Soal (Persiapan UTS Komprehensif)',
  references: [
    'Panduan Belajar Hukum Acara PTUN',
    'Ali Abdullah, S.H., M.H. (2015)',
    'Dr. Sri Wahyuni Ermawati, S.H., M.Hum. (2024)',
    'Enrico Simanjuntak, S.H., M.H. (2018)',
    'Sukamto Satoto et al. (2024)',
  ],
};

export const PTUN_TOPICS_DATA: Topic[] = [
  {
    id: 1,
    numberStr: 'TOPIK 01',
    title: 'Pengantar Hukum Acara Peradilan Tata Usaha Negara',
    shortDesc: 'Istilah dan pengertian dasar HTUN, PTUN, KTUN, latar belakang judicial control, regulasi undang-undang, serta ruang lingkup kewenangan.',
    summaryQuote: 'Peradilan Tata Usaha Negara dibentuk untuk mengontrol secara yuridis (judicial control) tindakan pemerintahan dari maladministrasi dan penyalahgunaan wewenang (abuse of power).',
    sections: [
      {
        id: 'istilah-dan-pengertian',
        title: 'A. Istilah dan Pengertian',
        content: [
          'Dalam mempelajari sistem peradilan administrasi negara di Indonesia, terdapat empat istilah kunci yang memiliki batasan yuridis spesifik dan saling terkait:',
        ],
        keyPoints: [
          'Hukum Tata Usaha Negara (HTUN): Aturan hukum yang mengatur penyelenggaraan urusan pemerintahan atau administrasi negara dalam menjalankan fungsi-fungsi pelayanan publik dan pengaturan kemasyarakatan.',
          'Peradilan Tata Usaha Negara (PTUN): Lembaga peradilan yang khusus dibentuk untuk menyelesaikan sengketa administratif, yaitu sengketa antara individu atau badan hukum perdata dengan badan atau pejabat TUN akibat dikeluarkannya KTUN.',
          'Keputusan Tata Usaha Negara (KTUN): Penetapan tertulis yang dikeluarkan oleh Badan atau Pejabat TUN, berisi tindakan hukum TUN berdasarkan peraturan perundang-undangan yang berlaku, bersifat konkret, individual, dan final, serta menimbulkan akibat hukum.',
          'Hukum Acara PTUN: Peraturan hukum formal yang mengatur tata cara mengajukan gugatan, memeriksa, memutus, dan menyelesaikan sengketa tata usaha negara di hadapan pengadilan administrasi.',
        ],
      },
      {
        id: 'latar-belakang-ptun',
        title: 'B. Latar Belakang dan Tujuan Pembentukan PTUN',
        content: [
          'Ide fundamental dibentuknya Peradilan Tata Usaha Negara di Indonesia berakar pada keharusan untuk menyelesaikan sengketa antara pihak pemerintah (penguasa) dengan warga negaranya secara adil dan bermartabat.',
          'Pembentukan lembaga peradilan ini bertujuan menjalankan fungsi kontrol secara yuridis (judicial control) terhadap tindakan-tindakan pemerintahan yang dinilai melanggar ketentuan hukum administrasi (maladministrasi) ataupun perbuatan yang bertentangan dengan hukum dan melampaui batas kewenangan (abuse of power).',
          'Eksistensi PTUN diatur dalam peraturan perundang-undangan khusus yang mengalami evolusi pembaharuan bertahap untuk memperkuat independensi dan profesionalisme lembaga peradilan:',
        ],
        table: {
          headers: ['Regulasi Undang-Undang', 'Status & Signifikansi Yuridis', 'Peran Penguatan'],
          rows: [
            [
              'UU No. 5 Tahun 1986',
              'Undang-Undang Pokok Peradilan Tata Usaha Negara (Fondasi Pertama)',
              'Peletakan dasar pembentukan lingkungan peradilan TUN di bawah Mahkamah Agung sebagai pelaksanaan Pasal 24 UUD 1945.'
            ],
            [
              'UU No. 9 Tahun 2004',
              'Perubahan Pertama atas UU No. 5 Tahun 1986',
              'Penyelarasan dengan prinsip satu atap (one roof system) kekuasaan kehakiman, independensi peradilan, dan penegasan kompetensi relatif.'
            ],
            [
              'UU No. 51 Tahun 2009',
              'Perubahan Kedua atas UU No. 5 Tahun 1986',
              'Penyempurnaan pengawasan, profesionalisme hakim, transparansi peradilan, dan penegasan fungsi kontrol yudisial yang profesional.'
            ]
          ]
        },
        highlightBox: {
          title: 'Esensi Kontrol Yudisial (Judicial Control)',
          text: 'Fungsi utama PTUN adalah memposisikan kekuasaan kehakiman sebagai instrumen pengawas obyektif agar badan atau pejabat administrasi negara senantiasa bertindak dalam koridor hukum (wetmatigheid van bestuur) dan asas-asas umum pemerintahan yang baik (AAUPB).'
        }
      },
      {
        id: 'ruang-lingkup-ptun',
        title: 'C. Ruang Lingkup Peradilan Tata Usaha Negara',
        content: [
          'Berdasarkan Undang-Undang No. 51 Tahun 2009, ruang lingkup PTUN di Indonesia mencakup penyelesaian sengketa antara orang atau badan hukum perdata dengan badan atau pejabat tata usaha negara akibat dikeluarkannya Keputusan Tata Usaha Negara (KTUN) atau tindakan pemerintahan.',
          'Ruang lingkup ini mencakup dua dimensi pokok:',
        ],
        keyPoints: [
          'Penetapan tertulis yang dalam perkembangan mutakhir juga mencakup tindakan faktual aparat administrasi.',
          'Keputusan yang diterbitkan oleh Badan dan/atau Pejabat Tata Usaha Negara di lingkungan eksekutif, legislatif, yudikatif, dan penyelenggara negara lainnya.',
          'Kewenangan memeriksa dan memutus sengketa administrasi pemerintahan baik pada tingkat pusat maupun daerah, termasuk sengketa kepegawaian (status pegawai negeri sipil).'
        ]
      },
      {
        id: 'kompetensi-dasar',
        title: 'D. Pembagian Kompetensi: Absolut vs Relatif',
        content: [
          'Setiap perkara yang diajukan ke peradilan wajib memperhatikan dua macam kompetensi yuridis:',
        ],
        comparisonBoxes: [
          {
            title: 'Kompetensi Absolut (Materi / Pokok Perkara)',
            description: 'Kewenangan peradilan untuk mengadili perkara berdasarkan objek, materi, atau pokok sengketanya (diversity jurisdiction).',
            items: [
              'Menentukan lingkungan peradilan mana yang berwenang: Peradilan Umum, Peradilan Agama, Peradilan Militer, atau PTUN.',
              'Menurut Yahya Harahap, tiap lingkungan memiliki wewenang tertentu sesuai subject matter of jurisdiction.',
              'Masing-masing lingkungan hanya berwenang mengadili sebatas kasus yang dilimpahkan undang-undang kepadanya.'
            ]
          },
          {
            title: 'Kompetensi Relatif (Wilayah Hukum / Daerah Hukum)',
            description: 'Kewenangan peradilan untuk mengadili perkara sesuai batas wilayah atau daerah hukum yang menjadi kewenangannya.',
            items: [
              'Didasarkan pada kedudukan atau tempat tinggal para pihak (penggugat atau tergugat).',
              'Pasal 6 UU 9/2004: PTUN berkedudukan di ibukota kabupaten/kota dengan daerah hukum meliputi kabupaten/kota, atau berkedudukan di ibukota provinsi meliputi wilayah provinsi.',
              'Setelah UU AP No. 30/2014, PTUN tempat kediaman penggugat dapat menjadi alternatif.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    numberStr: 'TOPIK 02',
    title: 'Kompetensi Peradilan Tata Usaha Negara',
    shortDesc: 'Pendalaman kompetensi absolut, perluasan kewenangan pasca UU No. 30 Tahun 2014, kompetensi relatif, serta klasifikasi subyek gugatan (Penggugat, Tergugat, dan Intervensi Pihak Ketiga).',
    summaryQuote: 'Pasca UU Administrasi Pemerintahan, kompetensi absolut PTUN diperluas signifikan hingga mencakup tindakan faktual pejabat, keputusan fiktif positif, dan pengujian penyalahgunaan wewenang.',
    sections: [
      {
        id: 'kompetensi-absolut-ptun',
        title: 'A. Kompetensi Absolut dan Perluasan Wewenang Pasca UU AP',
        content: [
          'Kompetensi absolut PTUN secara tradisional didasarkan pada sengketa tata usaha negara akibat terbitnya KTUN yang merugikan orang atau badan hukum perdata.',
          'Namun setelah diundangkannya UU No. 30 Tahun 2014 tentang Administrasi Pemerintahan (UU AP), yurisdiksi absolut PTUN mengalami perluasan makna yang sangat signifikan:',
        ],
        keyPoints: [
          'Tindakan Faktual Pejabat Pemerintahan: PTUN kini berwenang mengadili perbuatan melanggar hukum oleh badan/pejabat pemerintahan (onrechtmatige overheidsdaad / OOD), yaitu tindakan materiel pejabat tanpa surat keputusan tertulis yang menimbulkan kerugian bagi warga masyarakat.',
          'Keputusan Fiktif Positif: Berbeda dengan asas fiktif negatif dalam UU No. 5 Tahun 1986 (sikap diam pejabat dianggap menolak), UU AP menetapkan bahwa apabila pejabat tidak mengambil keputusan dalam batas waktu yang ditentukan, permohonan pemohon dianggap dikabulkan secara hukum (fiktif positif) dan pemohon dapat mengajukan permohonan penerbitan keputusan ke PTUN.',
          'Pengujian Penyalahgunaan Wewenang: PTUN berwenang menerima, memeriksa, dan memutus permohonan penilaian ada atau tidak adanya unsur penyalahgunaan wewenang (détournement de pouvoir atau melampaui wewenang) yang dilakukan oleh pejabat pemerintahan sebelum adanya proses pidana korupsi.'
        ]
      },
      {
        id: 'kompetensi-relatif-ptun',
        title: 'B. Kompetensi Relatif Peradilan Tata Usaha Negara',
        content: [
          'Kompetensi relatif mengatur pembagian kekuasaan mengadili antar-pengadilan TUN yang sejenis berdasarkan batas wilayah administratif daerah hukumnya.',
          'Pasal 6 UU No. 9 Tahun 2004 menentukan letak kedudukan dan wilayah hukum pengadilan:',
        ],
        table: {
          headers: ['Tingkatan Lembaga', 'Kedudukan Hukum', 'Cakupan Wilayah Yurisdiksi'],
          rows: [
            [
              'Pengadilan Tata Usaha Negara (PTUN)',
              'Berkedudukan di ibukota kabupaten/kota',
              'Daerah hukumnya meliputi wilayah satu kabupaten/kota (atau beberapa kabupaten/kota yang digabungkan).'
            ],
            [
              'Pengadilan Tinggi Tata Usaha Negara (PTTUN)',
              'Berkedudukan di ibukota provinsi',
              'Daerah hukumnya meliputi wilayah satu provinsi (atau beberapa provinsi dalam satu wilayah hukum pengadilan tinggi).'
            ]
          ]
        },
        highlightBox: {
          title: 'Prinsip Alternatif Domisili Penggugat (UU AP)',
          text: 'Meskipun asas umumnya gugatan diajukan ke pengadilan di wilayah tempat kedudukan Tergugat, UU Administrasi Pemerintahan menegaskan bahwa PTUN tempat kediaman Penggugat dapat menjadi alternatif demi memberikan kemudahan akses keadilan bagi masyarakat.'
        }
      },
      {
        id: 'subyek-gugatan',
        title: 'C. Subyek Gugatan dalam Sengketa PTUN',
        content: [
          'Dalam sengketa PTUN, subyek hukum yang dapat terlibat diklasifikasikan ke dalam tiga pihak:',
        ],
        keyPoints: [
          '1. Penggugat: Orang atau badan hukum perdata yang merasa kepentingannya dirugikan akibat dikeluarkannya KTUN atau dilakukannya tindakan administrasi oleh pejabat pemerintahan. Penggugat wajib memiliki legal standing (kepentingan hukum langsung).',
          '2. Tergugat: Badan atau Pejabat Tata Usaha Negara yang mengeluarkan keputusan atau melakukan tindakan yang menjadi objek sengketa. Pejabat ini bertindak atas nama pemerintah dalam kapasitas administratifnya (bukan sebagai pribadi - Sukamto Satoto et al., 2024).',
          '3. Pihak Ketiga: Pihak luar yang kepentingannya terpengaruh oleh hasil putusan sengketa dan dapat masuk ke dalam proses persidangan melalui mekanisme intervensi.'
        ]
      },
      {
        id: 'mekanisme-intervensi',
        title: 'D. Intervensi Pihak Ketiga: Voeging dan Tussenkomst',
        content: [
          'Pihak ketiga yang berkepentingan dapat mengajukan intervensi dalam dua bentuk yuridis:',
        ],
        comparisonBoxes: [
          {
            title: 'Voeging (Intervensi Bergabung)',
            description: 'Pihak ketiga masuk ke dalam persidangan dengan memihak/bergabung pada salah satu pihak (Penggugat atau Tergugat).',
            items: [
              'Memiliki kepentingan hukum yang sejalan atau sama dengan pihak yang didukungnya.',
              'Tidak mengajukan tuntutan mandiri baru, melainkan memperkuat dalil pihak yang dibelanya.',
              'Contoh: Pihak penerima izin bergabung dengan Tergugat (pejabat pemberi izin) untuk mempertahankan izin tersebut.'
            ]
          },
          {
            title: 'Tussenkomst (Intervensi Penengah)',
            description: 'Pihak ketiga masuk ke persidangan atas inisiatif sendiri untuk mempertahankan kepentingannya secara mandiri.',
            items: [
              'Menolak dalil Penggugat sekaligus menolak dalil Tergugat.',
              'Berdiri sendiri sebagai pihak ketiga mandiri yang mengajukan tuntutan/klaim tersendiri.',
              'Contoh: Pihak yang mengklaim hak atas tanah sengketa yang sedang diperebutkan Penggugat dan Tergugat.'
            ]
          }
        ],
        table: {
          headers: ['Tahapan Intervensi', 'Uraian Prosedur Yuridis'],
          rows: [
            ['1. Pengajuan Permohonan', 'Diajukan secara tertulis kepada Ketua PTUN atau Majelis Hakim melalui loket Pelayanan Terpadu Satu Pintu (PTSP).'],
            ['2. Waktu Pengajuan', 'Diajukan selama proses persidangan sebelum tahap pembuktian, atau selambat-lambatnya sebelum putusan akhir dibacakan.'],
            ['3. Pemeriksaan Hakim', 'Majelis Hakim memeriksa permohonan untuk menentukan adanya hubungan hukum langsung dan kepentingan yang layak.'],
            ['4. Putusan Sela / Penetapan', 'Jika dikabulkan, hakim menerbitkan putusan sela/penetapan bahwa pemohon diterima sebagai Pihak Intervensi.'],
            ['5. Pemanggilan', 'Pemanggilan pihak intervensi dilakukan melalui surat tercatat atau sistem elektronik e-Court.']
          ]
        }
      }
    ]
  },
  {
    id: 3,
    numberStr: 'TOPIK 03',
    title: 'Gugatan Peradilan Tata Usaha Negara',
    shortDesc: 'Pengertian gugatan, tiga alasan/dasar pembatalan KTUN, isi surat gugatan, tata cara penyusunan, 8 unsur kumulatif KTUN, serta 6 pengecualian objek sengketa.',
    summaryQuote: 'Gugatan PTUN adalah permohonan tertulis yang menuntut agar KTUN dinyatakan batal atau tidak sah karena bertentangan dengan perundang-undangan, menyalahgunakan wewenang, atau sewenang-wenang.',
    sections: [
      {
        id: 'pengertian-gugatan',
        title: 'A. Pengertian Gugatan di PTUN',
        content: [
          'Gugatan dalam Pengadilan Tata Usaha Negara (PTUN) adalah permohonan tertulis yang berisi tuntutan terhadap Badan atau Pejabat Tata Usaha Negara agar suatu Keputusan Tata Usaha Negara (KTUN) yang dikeluarkannya dinyatakan batal atau tidak sah, dengan atau tanpa disertai tuntutan ganti rugi dan/atau rehabilitasi.',
        ]
      },
      {
        id: 'alasan-gugatan',
        title: 'B. Alasan / Dasar Gugatan (Pasal 53 ayat 2 UU Peratun)',
        content: [
          'Berdasarkan Pasal 53 ayat (2) UU No. 5 Tahun 1986 yang dikembangkan dalam UU No. 51 Tahun 2009, terdapat tiga alasan limitatif yang dapat dijadikan dasar untuk memohon pembatalan KTUN:',
        ],
        keyPoints: [
          '1. Bertentangan dengan Peraturan Perundang-undangan yang Berlaku: KTUN yang diterbitkan melanggar materiil maupun formil norma hukum positif, baik UUD 1945, undang-undang, peraturan pemerintah, maupun peraturan daerah.',
          '2. Penyalahgunaan Wewenang (Détournement de Pouvoir): Pejabat TUN menggunakan wewenang jabatannya untuk tujuan lain yang menyimpang dari maksud dan tujuan diberikannya wewenang tersebut oleh peraturan perundang-undangan.',
          '3. Tindakan Sewenang-wenang (Willekeur): Pejabat TUN menerbitkan keputusan tanpa dasar pertimbangan yang wajar, tidak logis, melampaui batas kewajaran, atau melanggar Asas-Asas Umum Pemerintahan yang Baik (AAUPB).'
        ]
      },
      {
        id: 'isi-gugatan',
        title: 'C. Komponen Isi Surat Gugatan (Syarat Formil)',
        content: [
          'Agar memenuhi syarat formil dan tidak dinyatakan cacat, surat gugatan PTUN wajib memuat 5 komponen esensial:',
        ],
        table: {
          headers: ['Komponen Gugatan', 'Fungsi & Unsur yang Wajib Dimuat'],
          rows: [
            ['1. Identitas Para Pihak', 'Memuat nama lengkap, kewarganegaraan, tempat tinggal, dan pekerjaan Penggugat; serta jabatan resmi dan tempat kedudukan Tergugat.'],
            ['2. Objek Sengketa', 'Penjelasan konkret mengenai KTUN yang digugat (nomor surat keputusan, tanggal penerbitan, pejabat penerbit, dan perihal keputusan).'],
            ['3. Tenggang Waktu', 'Uraian kronologis yang membuktikan bahwa gugatan diajukan masih dalam tenggang waktu 90 hari sejak KTUN diterima atau diumumkan.'],
            ['4. Posita (Fundamentum Petendi)', 'Uraian fakta-fakta kejadian, kronologi hukum, dasar kewenangan, dan dalil-dalil yuridis mengapa KTUN dianggap melanggar hukum.'],
            ['5. Petitum (Tuntutan)', 'Permohonan amar agar majelis hakim menyatakan batal/tidak sah KTUN, mewajibkan Tergugat mencabutnya, serta ganti rugi/rehabilitasi jika ada.']
          ]
        }
      },
      {
        id: 'cara-penyusunan-gugatan',
        title: 'D. Tata Cara Penyusunan dan Pendaftaran Gugatan',
        content: [
          'Penyusunan gugatan mengikuti alur formal sebagai berikut:',
        ],
        keyPoints: [
          'Format Tertulis: Gugatan harus disusun secara tertulis dalam Bahasa Indonesia yang baku dan terang.',
          'Tanda Tangan: Wajib ditandatangani oleh Penggugat sendiri atau advokat/kuasa hukumnya yang sah.',
          'Struktur Sistematis: Dimulai dari alamat pengadilan yang dituju, identitas para pihak, posita (fundamentum petendi), hingga amar yang dimohonkan (petitum).',
          'Permohonan Penundaan (Opsional): Apabila terdapat kepentingan mendesak agar pelaksanaan KTUN dihentikan sementara selama proses sidang berjalan, Penggugat dapat menyertakan permohonan penetapan penundaan pelaksanaan KTUN (skorsing) dalam surat gugatan.',
          'Lampiran Dokumen: Wajib melampirkan fotokopi objek sengketa (jika ada) dan surat kuasa khusus bermeterai apabila diwakili oleh advokat.',
          'Pendaftaran Perkara: Gugatan didaftarkan secara daring melalui sistem e-Court Mahkamah Agung atau datang langsung ke loket PTSP PTUN setempat dengan membayar panjar biaya perkara.'
        ]
      },
      {
        id: 'unsur-ktun',
        title: 'E. Karakteristik & 8 Unsur Kumulatif KTUN (Pasal 1 angka 9)',
        content: [
          'Menurut Pasal 1 angka 9 UU No. 5 Tahun 1986 jo. UU No. 9 Tahun 2004 jo. UU No. 51 Tahun 2009, KTUN didefinisikan sebagai penetapan tertulis yang dikeluarkan oleh Badan atau Pejabat TUN berisi tindakan hukum TUN yang bersifat konkret, individual, dan final, serta menimbulkan akibat hukum bagi seseorang atau badan hukum perdata.',
          'Agar dapat menjadi objek sengketa sah di PTUN, keputusan harus memenuhi delapan unsur kumulatif:',
        ],
        keyPoints: [
          '1. Penetapan Tertulis: Keputusan dituangkan secara tertulis sebagai bentuk dokumen resmi (termasuk dokumen/KTUN elektronik).',
          '2. Dikeluarkan oleh Badan/Pejabat TUN: Pejabat di lingkungan eksekutif, legislatif, yudikatif, dan penyelenggara negara lain yang menjalankan urusan pemerintahan.',
          '3. Berdasarkan Peraturan Perundang-undangan dan AAUPB: Diterbitkan atas dasar atribusi, delegasi, atau mandat hukum publik yang sah.',
          '4. Bersifat Konkret: Objek yang diputuskan nyata, berwujud, dan tidak abstrak (dapat ditentukan apa yang diputuskan).',
          '5. Bersifat Individual: Ditujukan kepada orang, entitas, atau badan hukum tertentu (bukan norma yang berlaku untuk umum).',
          '6. Bersifat Final: Keputusan telah definitif/akhir dan tidak memerlukan persetujuan dari instansi atasan lagi.',
          '7. Menimbulkan Akibat Hukum: Melahirkan hak baru, membebankan kewajiban baru, atau mengubah status/legitimasi hukum seseorang.',
          '8. Berlaku bagi Warga Masyarakat: Berdampak langsung kepada subyek hukum perdata warga masyarakat.'
        ]
      },
      {
        id: 'pengecualian-ktun',
        title: 'F. Pengecualian Objek Sengketa (Pasal 2 UU No. 9 Tahun 2004)',
        content: [
          'Tidak semua tindakan atau keputusan administrasi dapat diajukan ke PTUN. Pasal 2 UU No. 9 Tahun 2004 menetapkan enam pengecualian absolut:',
        ],
        table: {
          headers: ['Jenis Keputusan yang Dikecualikan', 'Dasar Alasan Yuridis Penolakan di PTUN'],
          rows: [
            ['1. Berdasarkan Peraturan Hukum Pidana', 'Keputusan yang diterbitkan atas dasar KUHP atau KUHAP (misal: surat penangkapan/penahanan; masuk ranah Praperadilan).'],
            ['2. Hasil Pemeriksaan Badan Peradilan', 'Keputusan yang diterbitkan berdasarkan putusan pengadilan yang telah berkekuatan hukum tetap (inkracht).'],
            ['3. Perbuatan Hukum Perdata', 'Tindakan yang menyangkut ranah keperdataan, seperti perjanjian sewa-menyewa atau jual-beli antara instansi pemerintah dengan swasta.'],
            ['4. Pengaturan Bersifat Umum (Regeling)', 'Keputusan yang memuat norma hukum umum dan mengikat publik secara umum (uji materiilnya merupakan wewenang MA/MK).'],
            ['5. Masih Memerlukan Persetujuan', 'Keputusan yang belum final karena masih memerlukan persetujuan lanjutan dari instansi atasan atau lembaga lain.'],
            ['6. Dikeluarkan dalam Keadaan Darurat/Perang', 'Keputusan dalam waktu perang, keadaan bahaya, bencana alam, atau keadaan luar biasa yang membahayakan dan mendesak untuk umum.']
          ]
        }
      }
    ]
  },
  {
    id: 4,
    numberStr: 'TOPIK 04',
    title: 'Pengajuan Gugatan & Upaya Administratif',
    shortDesc: 'Upaya administratif sebagai pra-litigasi wajib, komparasi keberatan vs banding administratif, doktrin doelmatigheid vs rechtmatigheid, konteks historis, dan studi kasus Putusan PTUN Bandung No. 104/G/2014.',
    summaryQuote: 'Upaya administratif merupakan prosedur penyelesaian internal di lingkungan pemerintahan sebelum perkara diajukan ke PTUN, dengan lingkup pengujian doelmatigheid dan rechtmatigheid.',
    sections: [
      {
        id: 'upaya-administratif-makna',
        title: 'A. Upaya Administratif (Pra-Litigasi): Makna dan Konteks',
        content: [
          'Perlindungan hukum melalui Peradilan Administrasi (Peratun) diberikan oleh badan kekuasaan kehakiman melalui hakim Peratun berdasarkan hukum acaranya, sedangkan perlindungan hukum oleh badan atau instansi pemerintahan dilakukan melalui upaya administratif berdasarkan hukum acaranya masing-masing.',
          'Meskipun bukan sarana yudisial melainkan penyelesaian internal, upaya administratif tetap dianggap sebagai bagian integral dari sistem Peradilan Administrasi karena berfungsi menjaga keseimbangan antara kepentingan perseorangan dengan kepentingan umum agar tercipta hubungan rukun antara pemerintah dan rakyat berdasarkan Pancasila dan UUD 1945.',
          'Sengketa di Peratun pada umumnya merupakan kelanjutan dari sengketa hukum yang sebelumnya telah diperiksa dalam lingkungan internal pemerintahan. Prosedur ini menjadi ciri pembeda utama PTUN dengan lingkungan peradilan lainnya.'
        ],
        keyPoints: [
          'Dalam literatur hukum administrasi, upaya administratif dikenal dengan istilah: administratieve beroep, quasi rechtspraak (peradilan administrasi semu), eigenlijke administratieve rechtspraak (peradilan administrasi tak murni), pre-trial administrative proceedings, dan administrative tribunals.',
          'Dari segi penerapannya, sanksi administrasi dinilai lebih efektif dibanding sanksi pidana karena dapat dijatuhkan langsung oleh pejabat administrasi tanpa menunggu putusan pengadilan yang berkekuatan hukum tetap.'
        ]
      },
      {
        id: 'keberatan-vs-banding',
        title: 'B. Perbandingan: Keberatan vs Banding Administratif',
        content: [
          'Berdasarkan Penjelasan Pasal 48 UU Peratun dan Pasal 1 angka 16 UU Administrasi Pemerintahan, upaya administratif dilakukan secara berjenjang:',
        ],
        comparisonBoxes: [
          {
            title: 'Keberatan (Bezwaar)',
            description: 'Penyelesaian sengketa yang diajukan langsung kepada Badan atau Pejabat TUN yang menerbitkan keputusan.',
            items: [
              'Ditangani langsung oleh instansi atau pejabat pembuat KTUN pertama.',
              'Memberikan kesempatan kepada pejabat penerbit untuk mengkoreksi sendiri kekeliruannya.',
              'Diuji dari aspek rechtmatigheid (hukum) maupun doelmatigheid (kebijakan/kemanfaatan).',
              'UU AP: Jika tidak ditanggapi dalam 10 hari kerja, permohonan dianggap dikabulkan.'
            ]
          },
          {
            title: 'Banding Administratif (Administratief Beroep)',
            description: 'Penyelesaian sengketa yang diajukan kepada atasan langsung pejabat penerbit atau instansi lain yang berwenang.',
            items: [
              'Ditangani oleh struktur atasan hierarkis atau lembaga banding khusus (misal: BAPEK / Majelis Pertimbangan).',
              'Memeriksa kembali keputusan atas keberatan yang sebelumnya ditolak oleh pejabat penerbit.',
              'Keputusan upaya administratif masih dapat digugat kembali ke lembaga yudisial (PTUN).',
              'Diuji secara ex nunc (mempertimbangkan perubahan keadaan terkini).'
            ]
          }
        ],
        table: {
          headers: ['Tolok Ukur Pengujian', 'Cakupan Pengujian Upaya Administratif', 'Pengujian Peradilan Murni (PTUN)'],
          rows: [
            [
              'Rechtmatigheid (Aspek Hukum / Legalitas)',
              'Apakah keputusan sesuai peraturan perundang-undangan dan AAUPB.',
              'Hakim menguji aspek rechtmatigheid murni berdasarkan fakta saat keputusan diambil (ex tunc).'
            ],
            [
              'Doelmatigheid (Aspek Kebijakan / Kemanfaatan)',
              'Apakah keputusan efektif, efisien, tepat guna, dan bermanfaat bagi kepentingan umum.',
              'Hakim PTUN tidak menilai kebijakan (doelmatigheid) melainkan hanya keabsahan hukumnya.'
            ],
            [
              'Kewenangan Mengubah / Mengganti',
              'Instansi upaya administratif berwenang mengubah, mengganti, atau membatalkan keputusan serta mempertimbangkan perubahan keadaan (ex nunc).',
              'Hakim PTUN menurut Rochmat Soemitro hanya dapat membatalkan atau memberi ganti rugi tanpa membuat keputusan pengganti.'
            ]
          ]
        }
      },
      {
        id: 'konteks-historis',
        title: 'C. Konteks Historis dan Komparasi Internasional',
        content: [
          'Sebelum Indonesia merdeka, prosedur upaya administratif telah mendahului keberadaan peradilan administrasi, terutama dalam sengketa perpajakan:',
        ],
        keyPoints: [
          'Sejarah Indonesia: Dimulai dari masa Hindia Belanda melalui lembaga quasi peradilan Raad van Beroep voor Belastingzaken (Majelis Pertimbangan Pajak / MPP), yang kemudian digantikan oleh Badan Penyelesaian Sengketa Pajak (BPSP) berdasarkan UU No. 14 Tahun 1997, dan akhirnya menjadi Pengadilan Pajak melalui UU No. 14 Tahun 2002.',
          'Hukum Prancis: Mengenal mekanisme recours administratif yang terbagi dua: recours gracieux (permohonan kepada pejabat pembuat keputusan) dan recours hiérarchique (banding administratif kepada atasan hierarkis).',
          'Hukum Belanda: Pada masa berlakunya Wet AROB (1976–1994), keberatan administratif merupakan prosedur pendahuluan wajib bagi pemerintah, sedangkan banding administratif dilakukan dalam kondisi tertentu terkait kepentingan kebijakan aparatur yang lebih tinggi.'
        ]
      },
      {
        id: 'contoh-kasus-ptun',
        title: 'D. Studi Kasus Upaya Administratif: Putusan No. 104/G/2014/PTUN-BDG',
        content: [
          'Penerapan upaya administratif tercermin secara konkret dalam yurisprudensi peradilan administrasi:',
        ],
        highlightBox: {
          title: 'Putusan PTUN Bandung Nomor 104/G/2014/PTUN-BDG',
          text: 'Kasus Posisi: Penggugat mengajukan gugatan ke PTUN terhadap Surat Keputusan Gubernur Jawa Barat Nomor 888/Kep.830-BKD/2014 tentang Pemberhentian Tidak Dengan Hormat sebagai Pegawai Negeri Sipil karena melakukan tindak pidana korupsi. Dalam perkara ini, Penggugat terbukti telah menempuh seluruh tahapan upaya administratif internal pemerintahan (keberatan dan banding administratif ke Badan Pertimbangan Kepegawaian) secara tuntas sebelum mendaftarkan gugatannya ke PTUN, sehingga gugatan memenuhi syarat formil penerimaan perkara di pengadilan.'
        }
      }
    ]
  },
  {
    id: 5,
    numberStr: 'TOPIK 05',
    title: 'Pemeriksaan Gugatan: Dismissal & Persiapan',
    shortDesc: 'Penelitian yuridis dalam proses dismissal oleh Ketua Pengadilan, upaya perlawanan (verzet), rapat permusyawaratan, pemeriksaan persiapan 30 hari, serta penerapan asas kompensasi.',
    summaryQuote: 'Proses dismissal menyaring gugatan yang tidak memenuhi syarat yuridis melalui penetapan Ketua Pengadilan, sementara pemeriksaan persiapan menyeimbangkan kedudukan Penggugat lewat nasihat hakim.',
    sections: [
      {
        id: 'dismissal-proses',
        title: 'A. Proses Dismissal (Penyaringan Awal oleh Ketua Pengadilan)',
        content: [
          'Proses dismissal adalah penelitian yuridis yang dilakukan oleh Ketua Pengadilan Tata Usaha Negara terhadap gugatan yang didaftarkan untuk mempertimbangkan apakah gugatan dapat diterima dan diproses lebih lanjut, atau sebaliknya dinyatakan tidak dapat diterima karena tidak terpenuhinya syarat-syarat dalam Pasal 62 UU Peratun.',
          'Karakteristik yuridis proses dismissal:',
        ],
        keyPoints: [
          'Dilakukan oleh Ketua Pengadilan sebelum majelis hakim dibentuk.',
          'Merupakan bagian dari rangkaian pro yustisia (bukan sekadar tindakan pejabat administrasi).',
          'Hanya berlaku bagi perkara-perkara yang didaftarkan menurut mekanisme acara biasa (sengketa TUN khusus diperiksa tanpa proses dismissal dan pemeriksaan persiapan).',
          'Dituangkan dalam bentuk Penetapan Ketua Pengadilan (bukan putusan akhir / niet ontvankelijk verklaard).',
          'Dapat berupa dismissal total atau dismissal terhadap sebagian petitum gugatan (dismissal parsial).'
        ]
      },
      {
        id: 'alasan-dismissal',
        title: 'B. 5 Alasan Gugatan Tidak Lolos Dismissal (Pasal 62 ayat 1)',
        content: [
          'Ketua Pengadilan berwenang menetapkan gugatan tidak diterima atau tidak berdasar hanya apabila terdapat salah satu alasan berikut:',
        ],
        table: {
          headers: ['Butir Pasal 62 (1)', 'Uraian Alasan Penolakan dalam Dismissal', 'Catatan Kebijakan MARI'],
          rows: [
            ['Huruf a', 'Pokok gugatan nyata-nyata tidak termasuk dalam wewenang pengadilan (cacat kompetensi absolut).', 'Alasan utama yang direkomendasikan untuk digunakan.'],
            ['Huruf b', 'Syarat-syarat gugatan (Pasal 56) tidak dipenuhi sekalipun telah diberitahu dan diperingatkan.', 'Alasan utama yang direkomendasikan untuk digunakan.'],
            ['Huruf c', 'Gugatan tersebut tidak berdasarkan pada alasan-alasan yang layak dan rasional.', 'Ketua Pengadilan diminta tidak mudah menggunakan butir ini.'],
            ['Huruf d', 'Apa yang dituntut dalam gugatan sebenarnya sudah terpenuhi oleh KTUN yang digugat.', 'Ketua Pengadilan diminta tidak mudah menggunakan butir ini.'],
            ['Huruf e', 'Gugatan diajukan sebelum waktunya (prematur) atau telah lewat waktunya (daluwarsa 90 hari).', 'Perkembangan praktik: jika lolos dismissal, perkara diputus DITOLAK oleh majelis.']
          ]
        },
        highlightBox: {
          title: 'Rapat Permusyawaratan Dismissal',
          text: 'Rapat permusyawaratan dalam Pasal 62 UU Peratun adalah mekanisme internal Ketua Pengadilan untuk memanggil dan mendengar keterangan para pihak (penggugat maupun tergugat) sebelum menetapkan dismissal. Ketua Pengadilan juga dapat menunjuk seorang Hakim sebagai rapporteur (raportir) guna membantu penelitian berkas perkara.'
        }
      },
      {
        id: 'alur-verzet',
        title: 'C. Upaya Perlawanan (Verzet) terhadap Penetapan Dismissal',
        content: [
          'Penggugat yang gugatannya dinyatakan tidak lolos dismissal memiliki hak melakukan perlawanan hukum:',
        ],
        table: {
          headers: ['Aspek Prosedur', 'Ketentuan Yuridis Verzet'],
          rows: [
            ['Tenggang Waktu Pengajuan', '14 (empat belas) hari terhitung sejak penetapan dismissal diucapkan di persidangan atau sejak diterimanya surat pemberitahuan.'],
            ['Pemeriksa Perkara', 'Diperiksa dan diputus oleh Majelis Hakim yang ditunjuk oleh Ketua Pengadilan dengan pemeriksaan Acara Singkat.'],
            ['Jika Perlawanan DITERIMA', 'Penetapan dismissal dibatalkan, dan pokok gugatan dilanjutkan pemeriksaannya dalam Acara Biasa tanpa melalui pemeriksaan persiapan.'],
            ['Jika Perlawanan DITOLAK', 'Penetapan dismissal tetap berlaku, putusan bersifat final, dan tidak ada upaya hukum banding maupun kasasi (panitera wajib membuat akta penolakan banding). Satu-satunya jalan adalah mengajukan gugatan baru sepanjang batas waktu 90 hari belum lewat.']
          ]
        }
      },
      {
        id: 'pemeriksaan-persiapan',
        title: 'D. Pemeriksaan Persiapan (Pasal 63 UU No. 5 Tahun 1986)',
        content: [
          'Pemeriksaan persiapan adalah tahap pendahuluan wajib bagi gugatan acara biasa yang telah lolos dismissal sebelum disidangkan dalam sidang terbuka untuk umum.',
          'Tujuan utamanya adalah mematangkan perkara, menyempurnakan gugatan yang kurang jelas, dan meminta penjelasan dari Badan atau Pejabat TUN terkait.',
        ],
        keyPoints: [
          'Tenggang Waktu 30 Hari: Diberikan waktu 30 hari sejak pemeriksaan pertama untuk memperbaiki gugatan (dapat diperpanjang oleh hakim dengan alasan kuat).',
          'Sanksi Ketidakhadiran: Jika penggugat tidak hadir atau tidak mengikuti saran hakim sehingga melewati batas 30 hari, Majelis Hakim dapat memutus gugatan tidak dapat diterima (Pasal 63 ayat 3), namun penggugat masih dapat mengajukan gugatan baru.',
          'Panggilan Pihak: Hakim dapat menerapkan mekanisme Pasal 71 dan 72 UU Peratun apabila para pihak tidak mengindahkan panggilan pengadilan.'
        ],
        highlightBox: {
          title: 'Asas Kompensasi (Ongelijkheidscompensatie)',
          text: 'Dalam sengketa TUN, kedudukan warga negara diasumsikan lebih lemah dibanding pejabat pemegang kekuasaan publik. Untuk menyeimbangkannya, diterapkan asas kompensasi (ongelijkheidscompensatie) di mana hakim aktif membantu dan memberi saran perbaikan demi tercapainya peradilan yang sederhana, cepat, dan berbiaya ringan.'
        }
      }
    ]
  },
  {
    id: 6,
    numberStr: 'TOPIK 06',
    title: 'Tahapan Persidangan & Jenis Acara PTUN',
    shortDesc: 'Komparasi tiga jenis acara di PTUN (Biasa, Cepat, Singkat) dan visualisasi alur persidangan acara biasa dari pembacaan gugatan hingga putusan akhir.',
    summaryQuote: 'Sengketa di PTUN diselesaikan melalui tiga jenis acara: Acara Biasa dengan tahapan lengkap, Acara Cepat untuk keadaan mendesak, dan Acara Singkat untuk perlawanan dismissal.',
    sections: [
      {
        id: 'jenis-acara-ptun',
        title: 'A. Perbandingan Tiga Jenis Acara di PTUN',
        content: [
          'Hukum Acara PTUN mengenal tiga varian mekanisme pemeriksaan persidangan sesuai karakteristik dan urgensi perkara:',
        ],
        table: {
          headers: ['Kriteria Pembeda', 'Acara Biasa', 'Acara Cepat', 'Acara Singkat'],
          rows: [
            [
              'Dasar Penggunaan',
              'Pemeriksaan perkara sengketa TUN pada umumnya.',
              'Terdapat kepentingan yang sangat mendesak / kegentingan memaksa pemohon.',
              'Khusus untuk memeriksa gugatan perlawanan (verzet) atas penetapan dismissal.'
            ],
            [
              'Komposisi Hakim',
              'Majelis Hakim (3 orang hakim).',
              'Hakim Tunggal yang ditunjuk oleh Ketua PTUN.',
              'Majelis Hakim Perlawanan yang ditunjuk oleh Ketua PTUN.'
            ],
            [
              'Tahap Persiapan',
              'Wajib melalui proses dismissal dan pemeriksaan persiapan (30 hari).',
              'Tanpa melalui pemeriksaan persiapan. Hari sidang ditentukan maks 7 hari.',
              'Tanpa pemeriksaan persiapan, tidak memeriksa materi pokok/alat bukti substantif.'
            ],
            [
              'Tenggang Waktu Jawab & Bukti',
              'Mengikuti jadwal persidangan normal.',
              'Tenggang waktu jawaban dan pembuktian masing-masing pihak tidak lebih dari 14 hari.',
              'Pemeriksaan perlawanan diselesaikan secara ringkas dalam sidang tertutup.'
            ],
            [
              'Sifat Putusan & Upaya Hukum',
              'Dapat diajukan upaya hukum banding ke PTTUN dan kasasi ke MA.',
              'Dapat diajukan upaya hukum, namun UU Peratun belum mengatur mekanisme cepat di tingkat banding/kasasi.',
              'Putusan perlawanan bersifat final (tingkat pertama dan terakhir, tanpa banding/kasasi).'
            ]
          ]
        }
      },
      {
        id: 'tahapan-acara-biasa',
        title: 'B. Alur Prosedural Tahapan Persidangan Acara Biasa',
        content: [
          'Setelah gugatan dinyatakan layak dalam pemeriksaan persiapan, persidangan acara biasa dilaksanakan secara terbuka untuk umum melalui tahapan berurutan:',
        ],
        keyPoints: [
          '1. Pembacaan Surat Gugatan: Penggugat membacakan isi surat gugatannya di hadapan Majelis Hakim dan Tergugat dalam sidang pertama terbuka untuk umum.',
          '2. Jawaban Tergugat: Tergugat mengajukan tanggapan/bantahan resmi yang mencakup eksepsi formil, jawaban materiil pokok perkara, dan petitum.',
          '3. Replik Penggugat: Penggugat mengajukan tanggapan balik guna mematahkan eksepsi dan sanggahan Tergugat serta menguatkan dalil gugatan.',
          '4. Duplik Tergugat: Tergugat memberikan jawaban kedua untuk menyanggah dalil Replik Penggugat dan menegaskan kembali dalil bantahannya.',
          '5. Pembuktian Para Pihak: Penggugat dan Tergugat mengajukan alat-alat bukti sah (alat bukti surat/tulisan, keterangan ahli, keterangan saksi, pengakuan para pihak, dan pengetahuan hakim).',
          '6. Intervensi Pihak Ketiga: Pihak ketiga yang berkepentingan dapat masuk sebelum pembuktian dan ditetapkan melalui putusan sela sebagai voeging atau tussenkomst.',
          '7. Kesimpulan & Pembacaan Putusan Akhir: Para pihak menyerahkan kesimpulan tertulis, dilanjutkan musyawarah majelis hakim dan pengucapan putusan akhir di sidang terbuka untuk umum.'
        ],
        highlightBox: {
          title: 'Ketentuan Penundaan Sidang (Maksimal 6 Hari)',
          text: 'Apabila perkara tidak dapat diselesaikan dalam satu hari sidang, persidangan ditunda. Bagi pihak yang hadir, pengumuman penundaan di muka sidang berlaku sah sebagai panggilan resmi. Pihak yang tidak hadir dipanggil dengan surat tercatat. Penundaan sidang selanjutnya tidak boleh lebih dari 6 hari.'
        }
      }
    ]
  },
  {
    id: 7,
    numberStr: 'TOPIK 07',
    title: 'Jawaban Gugatan Tergugat',
    shortDesc: 'Pengertian jawaban Tergugat, fungsi pembelaan pejabat TUN, anatomi struktur jawaban (identitas, eksepsi, pokok perkara, rekonvensi, petitum), serta langkah penyusunan.',
    summaryQuote: 'Jawaban gugatan adalah hak Tergugat untuk membantah dalil Penggugat melalui eksepsi kompetensi/prosedural dan sanggahan materiil terhadap keabsahan KTUN.',
    sections: [
      {
        id: 'pengertian-jawaban',
        title: 'A. Pengertian dan Fungsi Jawaban Gugatan',
        content: [
          'Jawaban gugatan PTUN adalah dokumen hukum resmi yang memuat tanggapan, pembelaan, dan bantahan Badan atau Pejabat Tata Usaha Negara (Tergugat) terhadap dalil-dalil gugatan yang diajukan Penggugat.',
          'Fungsi utama jawaban:',
        ],
        keyPoints: [
          'Sebagai sarana bagi pejabat pemerintah untuk mempertahankan keabsahan (rechtmatigheid) keputusan atau tindakan yang telah diterbitkannya.',
          'Mengemukakan tangkisan formal (eksepsi) mengenai tidak berwenangnya pengadilan atau cacat formil gugatan sebelum memasuki pemeriksaan pokok perkara.',
          'Melumpuhkan kebenaran dalil fakta dan dasar hukum yang diajukan oleh Penggugat dengan menyertakan bukti dan rujukan peraturan yang sah.'
        ]
      },
      {
        id: 'struktur-jawaban',
        title: 'B. Anatomi Struktur Jawaban Tergugat',
        content: [
          'Surat jawaban Tergugat secara ideal tersusun atas empat komponen sistematis:',
        ],
        table: {
          headers: ['Bagian Jawaban', 'Uraian dan Muatan Pokok'],
          rows: [
            ['1. Identitas Pihak', 'Memuat identitas resmi jabatan Tergugat dan kuasanya sebagaimana tercantum dalam surat gugatan.'],
            ['2. Eksepsi (Tangkisan Formil)', 'Bantahan yang tidak menyentuh pokok perkara: eksepsi kompetensi absolut (sengketa perdata/pidana), eksepsi kompetensi relatif (wilayah hukum), eksepsi daluwarsa (lewat 90 hari), atau gugatan kabur (obscuur libel).'],
            ['3. Jawaban Pokok Perkara', 'Tergugat menjawab setiap dalil klaim Penggugat: berupa pengakuan terhadap dalil yang benar, atau bantahan terstruktur untuk menolak dalil Penggugat disertai bukti dokumen pendukung.'],
            ['4. Gugatan Rekonvensi (Jika Ada)', 'Dalam hal Tergugat memandang Penggugat memiliki kewajiban timbal-balik tertentu yang berhubungan langsung dengan objek sengketa, dapat diajukan gugatan balik (rekonvensi) bersamaan dengan jawaban.'],
            ['5. Petitum Tergugat', 'Permohonan amar kepada majelis hakim: dalam eksepsi menerima eksepsi Tergugat; dalam pokok perkara menolak gugatan Penggugat seluruhnya atau menyatakan gugatan tidak dapat diterima.']
          ]
        }
      },
      {
        id: 'langkah-penyusunan-jawaban',
        title: 'C. Langkah-Langkah Penyusunan Jawaban',
        content: [
          'Dalam menyusun jawaban Tergugat, pejabat TUN atau kuasanya menerapkan langkah metodis:',
        ],
        keyPoints: [
          '1. Membaca dan Menganalisis Gugatan Penggugat: Memahami dalil-dalil posita, mengidentifikasi subyek yang terlibat, memeriksa dasar hukum yang didalilkan, serta membedah tuntutan (petitum) yang dimohonkan.',
          '2. Memeriksa Aspek Formalitas dan Eksepsi: Menguji apakah pengadilan berwenang (absolut dan relatif), apakah gugatan diajukan masih dalam tenggang waktu 90 hari, dan apakah penggugat memiliki legal standing.',
          '3. Menyusun Bantahan Materiil Pokok Perkara: Mengumpulkan data pendukung, arsip dinas, risalah rapat, dan peraturan perundang-undangan dasar penerbitan KTUN untuk membantah setiap poin dalil Penggugat secara berurutan.',
          '4. Merumuskan Petitum yang Jelas: Memohon penolakan gugatan Penggugat dan penegasan bahwa KTUN yang diterbitkan sah demi hukum.'
        ]
      }
    ]
  },
  {
    id: 8,
    numberStr: 'TOPIK 08',
    title: 'Replik Penggugat',
    shortDesc: 'Pengertian replik, fungsi penguatan dalil, batas waktu pengajuan, serta 4 komponen inti (bantahan eksepsi, bantahan pokok perkara, penguatan dalil, dan petitum).',
    summaryQuote: 'Replik merupakan hak Penggugat untuk menanggapi jawaban Tergugat, membantah eksepsi, serta memperkuat dalil gugatan dengan doktrin dan pembuktian tambahan.',
    sections: [
      {
        id: 'pengertian-replik',
        title: 'A. Pengertian, Fungsi, dan Batasan Replik',
        content: [
          'Replik adalah tanggapan resmi yang diajukan oleh Penggugat atas surat jawaban dan eksepsi yang telah disampaikan oleh Tergugat.',
          'Karakteristik yuridis Replik:',
        ],
        keyPoints: [
          'Hak Penggugat: Replik merupakan hak prosedural yang diberikan kepada Penggugat untuk menanggapi, menyanggah, dan melumpuhkan jawaban Tergugat.',
          'Waktu Penyampaian: Disampaikan pada persidangan lanjutan setelah Tergugat menyerahkan jawaban resminya.',
          'Perubahan Alasan: Penggugat diperbolehkan mengubah atau memperluas alasan yang mendasari gugatannya dalam Replik, asalkan disertai alasan yang cukup dan tidak merugikan kepentingan Tergugat.',
          'Penggunaan Doktrin dan Ahli: Dalam menyusun Replik, Penggugat dapat menyertakan pendapat para ahli hukum, doktrin akademis, asas-asas umum, maupun kebiasaan ketatanegaraan untuk memperkuat argumentasinya.'
        ]
      },
      {
        id: 'isi-inti-replik',
        title: 'B. 4 Komponen Inti dalam Replik',
        content: [
          'Surat Replik yang berkualitas memuat empat substansi terstruktur:',
        ],
        table: {
          headers: ['Komponen Replik', 'Fungsi Yuridis & Muatan Substansi'],
          rows: [
            [
              '1. Bantahan atas Eksepsi',
              'Apabila Tergugat mengajukan eksepsi (seperti kompetensi absolut/relatif atau tenggang waktu daluwarsa), Penggugat wajib mematahkan argumen Tergugat dengan dasar hukum konkret membuktikan PTUN berwenang.'
            ],
            [
              '2. Bantahan atas Pokok Perkara',
              'Menyanggah poin demi poin bantahan Tergugat yang dianggap keliru, tidak berdasar hukum, atau memutarbalikkan fakta kejadian sebenarnya.'
            ],
            [
              '3. Penguatan Dalil Semula',
              'Menegaskan kembali kebenaran posita gugatan semula dengan menambahkan bukti permulaan baru, yurisprudensi sejenis, doktrin ahli, atau asas AAUPB yang dilanggar.'
            ],
            [
              '4. Petitum Penggugat',
              'Meminta Majelis Hakim menolak seluruh eksepsi Tergugat, menolak jawaban Tergugat untuk seluruhnya, serta mengabulkan seluruh tuntutan Penggugat sebagaimana dalam gugatan.'
            ]
          ]
        }
      }
    ]
  }
];
