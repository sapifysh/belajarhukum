import { Topic } from './hukumIslamData';

export const HUKUM_PIDANA_METADATA = {
  courseCode: 'HKO60012',
  credits: '4 SKS',
  faculty: 'Fakultas Hukum',
  syllabus: 'Silabus Substantif Pertemuan 1 – 12',
  basisLaw: 'UU No. 20 Tahun 2025 tentang Kitab Undang-Undang Hukum Acara Pidana',
  coverage: 'Pertemuan 01 – 12, Peta Proses, & Latihan Soal Komprehensif',
  references: [
    'UU No. 20 Tahun 2025 (KUHAP Baru)',
    'Rangkuman Lengkap Materi Hukum Acara Pidana Pertemuan 1–12',
    'Sistem Peradilan Pidana Terpadu berbasis Teknologi Informasi (SPPT-TI)',
  ],
};

export interface GlossaryItem {
  term: string;
  definition: string;
  category: 'Asas & Konsep' | 'Kelembagaan' | 'Prosedur & Upaya Paksa' | 'Persidangan & Putusan';
  legalBasis?: string;
}

export interface StatutoryDuration {
  duration: string;
  actionTitle: string;
  actor: string;
  legalBasis: string;
  description: string;
  consequence?: string;
  isUrgent?: boolean;
}

export const PIDANA_ANGKA_PENTING: StatutoryDuration[] = [
  {
    duration: 'Maksimal 1 Hari',
    actionTitle: 'Pemberitahuan Penetapan Tersangka',
    actor: 'Penyidik',
    legalBasis: 'Pasal 89–141',
    description: 'Penetapan tersangka wajib diberitahukan secara tertulis kepada orang yang bersangkutan maksimal 1 hari sejak surat penetapan diterbitkan.',
    consequence: 'Menjamin hak pembelaan diri tersangka sejak awal proses hukum.',
  },
  {
    duration: 'Maksimal 1 × 24 Jam',
    actionTitle: 'Tenggang Waktu Penangkapan',
    actor: 'Penyidik / Penyidik Pembantu',
    legalBasis: 'Pasal 89–141',
    description: 'Penangkapan hanya dapat dilakukan paling lama 1 × 24 jam dengan syarat minimal 2 alat bukti sah.',
    consequence: 'Setelah 1 × 24 jam, penyidik harus menentukan apakah tersangka ditahan atau dilepaskan.',
    isUrgent: true,
  },
  {
    duration: 'Maksimal 2 × 24 Jam',
    actionTitle: 'Persetujuan Penggeledahan Mendesak',
    actor: 'Penyidik → Ketua Pengadilan Negeri',
    legalBasis: 'Pasal 89–141',
    description: 'Dalam keadaan mendesak di mana penggeledahan dilakukan terlebih dahulu tanpa izin awal, penyidik wajib meminta persetujuan Ketua PN maksimal 2 × 24 jam setelah tindakan.',
    consequence: 'Jika permohonan ditolak pengadilan, bukti yang diperoleh batal demi hukum (Exclusionary Rule).',
    isUrgent: true,
  },
  {
    duration: 'Maksimal 2 × 24 Jam',
    actionTitle: 'Persetujuan Pemblokiran Mendesak',
    actor: 'Penyidik & Ketua Pengadilan Negeri',
    legalBasis: 'Pasal 140 ayat (7–8)',
    description: 'Pada 4 kondisi mendesak, pemblokiran dapat dilakukan terlebih dahulu. Penyidik wajib memohon persetujuan Ketua PN max 2 × 24 jam, dan Ketua PN menerbitkan penetapan persetujuan/penolakan max 2 × 24 jam.',
    consequence: 'Wajib dibuka paling lambat 3 hari kerja apabila ditolak Ketua PN.',
    isUrgent: true,
  },
  {
    duration: 'Paling Lama 2 Hari',
    actionTitle: 'Penelitian Permohonan Izin Pemblokiran Normal',
    actor: 'Ketua Pengadilan Negeri',
    legalBasis: 'Pasal 140 ayat (4)',
    description: 'Dalam jalur normal, Ketua Pengadilan Negeri wajib meneliti dan memutus permohonan izin pemblokiran paling lama 2 hari sejak diajukan.',
    consequence: 'Menghindari keterlambatan perlindungan aset atau bukti digital.',
  },
  {
    duration: 'Paling Lama 2 Hari',
    actionTitle: 'Pengembalian Surat yang Tidak Terkait',
    actor: 'Penyidik',
    legalBasis: 'Pasal 137–139',
    description: 'Surat pos/pengangkutan yang diperiksa dan ternyata tidak terkait perkara pidana wajib diberi cap "telah dibuka oleh Penyidik", ditutup kembali, dan dikembalikan ke kantor pos/pengangkutan paling lama 2 hari.',
    consequence: 'Penyidik wajib merahasiakan isi surat dan membuat Berita Acara tembusan ke PN.',
  },
  {
    duration: 'Paling Lambat 3 Hari Kerja',
    actionTitle: 'Pembukaan Kembali Pemblokiran',
    actor: 'Penyidik / Penuntut Umum / Hakim',
    legalBasis: 'Pasal 140 ayat (11–13)',
    description: 'Pemblokiran wajib dibuka paling lambat 3 hari kerja jika izin/persetujuan ditolak PN, perkara dihentikan (SP3/SKP2), atau praperadilan menyatakan penetapan tersangka tidak sah.',
    consequence: 'Pemulihan hak akses keuangan dan aset subjek hukum tanpa penundaan.',
  },
  {
    duration: 'Maksimal 5 Hari Kerja',
    actionTitle: 'Persetujuan Penyitaan Mendesak',
    actor: 'Penyidik → Ketua Pengadilan Negeri',
    legalBasis: 'Pasal 89–141',
    description: 'Penyitaan yang terpaksa dilakukan pada kondisi mendesak tanpa izin awal Ketua PN wajib diajukan persetujuannya ke Pengadilan Negeri paling lama 5 hari kerja pasca-tindakan.',
    consequence: 'Jika ditolak pengadilan, barang sitaan wajib dikembalikan dan bukti batal demi hukum.',
  },
  {
    duration: 'Paling Lama 6 Bulan',
    actionTitle: 'Larangan Keluar Wilayah Indonesia',
    actor: 'Penyidik / Penuntut Umum / Hakim (via Imigrasi)',
    legalBasis: 'Pasal 141',
    description: 'Dikenakan kepada Tersangka atau Terdakwa untuk mencegah melarikan diri ke luar negeri dengan jangka waktu maksimal 6 bulan.',
    consequence: 'Dapat diperpanjang 1 × 6 bulan melalui koordinasi kementerian bidang keimigrasian.',
  },
  {
    duration: 'Perpanjangan 1 × 6 Bulan',
    actionTitle: 'Perpanjangan Pencegahan Keluar Wilayah',
    actor: 'Aparat Penegak Hukum & Keimigrasian',
    legalBasis: 'Pasal 141',
    description: 'Perpanjangan masa larangan keluar wilayah Indonesia hanya dapat diberikan sebanyak 1 kali untuk durasi paling lama 6 bulan.',
    consequence: 'Total batas waktu pencegahan maksimal adalah 12 bulan (1 tahun).',
  },
  {
    duration: 'Paling Lama 1 Tahun',
    actionTitle: 'Jangka Waktu Pemblokiran Aset & Akun',
    actor: 'Penyidik, Penuntut Umum, atau Hakim',
    legalBasis: 'Pasal 140',
    description: 'Tindakan pemblokiran rekening bank, bukti kepemilikan, atau dokumen elektronik berlaku paling lama 1 tahun.',
    consequence: 'Dapat diperpanjang 2 × 6 bulan untuk kepentingan pembuktian sengketa peradilan.',
  },
  {
    duration: 'Perpanjangan 2 × 6 Bulan',
    actionTitle: 'Perpanjangan Masa Pemblokiran',
    actor: 'Penyidik, Penuntut Umum, atau Hakim',
    legalBasis: 'Pasal 140 ayat (5)',
    description: 'Apabila jangka waktu 1 tahun berakhir dan perkara masih memerlukan pembuktian, pemblokiran dapat diperpanjang maksimal 2 kali masing-masing 6 bulan.',
    consequence: 'Total akumulasi batas pemblokiran maksimal adalah 2 tahun.',
  },
  {
    duration: 'Usia > 75 Tahun',
    actionTitle: 'Perlindungan Tersangka / Terdakwa Lanjut Usia',
    actor: 'Hakim & Aparat Penegak Hukum',
    legalBasis: 'Pasal 145–148',
    description: 'Tersangka atau terdakwa yang berusia di atas 75 tahun berhak atas pelayanan kesehatan khusus dan wajib dipertimbangkan hakim untuk tidak dijatuhi pidana penjara.',
    consequence: 'Penerapan prinsip proporsionalitas dan kemanusiaan bagi kelompok rentan.',
  },
];

export const PIDANA_GLOSSARY: GlossaryItem[] = [
  {
    term: 'Due Process of Law',
    definition: 'Prinsip tata proses hukum yang adil, layak, dan benar yang melindungi hak-hak fundamental setiap orang dari tindakan sewenang-wenang aparat negara.',
    category: 'Asas & Konsep',
    legalBasis: 'KUHAP UU 20/2025',
  },
  {
    term: 'Crime Control Model',
    definition: 'Model peradilan pidana yang menitikberatkan pada efisiensi, kecepatan penindakan, dan kepastian penghukuman demi ketertiban umum masyarakat.',
    category: 'Asas & Konsep',
  },
  {
    term: 'Restorative Justice',
    definition: 'Pendekatan peradilan pidana yang berfokus pada pemulihan keadaan korban, pertanggungjawaban pelaku (termasuk restitusi), dan rekonsiliasi masyarakat, bukan semata-mata pembalasan penjara.',
    category: 'Asas & Konsep',
    legalBasis: 'Pasal 326–327',
  },
  {
    term: 'Dominus Litis',
    definition: 'Prinsip hukum acara pidana yang menempatkan Penuntut Umum (Kejaksaan) sebagai pemegang kendali tunggal atas perkara pidana dari penuntutan hingga eksekusi (Asas Oportunitas).',
    category: 'Kelembagaan',
    legalBasis: 'Pertemuan 2 butir 4',
  },
  {
    term: 'Plea Bargain',
    definition: 'Pranata baru dalam KUHAP 2025 berupa kesepakatan pengakuan bersalah antara terdakwa dengan penuntut umum yang memungkinkan proses peradilan lebih singkat dan peringanan tuntutan pidana.',
    category: 'Prosedur & Upaya Paksa',
    legalBasis: 'Pertemuan 3 butir d',
  },
  {
    term: 'Deferred Prosecution Agreement (DPA)',
    definition: 'Perjanjian penundaan penuntutan terhadap subjek hukum korporasi dengan syarat pemulihan kerugian, restitusi, dan kepatuhan sistemik dalam batas waktu tertentu.',
    category: 'Prosedur & Upaya Paksa',
    legalBasis: 'Pasal 326–327',
  },
  {
    term: 'SPPT-TI',
    definition: 'Sistem Peradilan Pidana Terpadu berbasis Teknologi Informasi yang menghubungkan pertukaran data dan berkas perkara secara digital antar Polri, Kejaksaan, Pengadilan, dan Ditjenpas.',
    category: 'Kelembagaan',
    legalBasis: 'Pertemuan 3 butir e',
  },
  {
    term: 'SPDP',
    definition: 'Surat Pemberitahuan Dimulainya Penyidikan, dokumen resmi yang diterbitkan penyidik kepada penuntut umum, pelapor, dan terlapor/tersangka sebagai kontrol awal dimulainya penyidikan.',
    category: 'Prosedur & Upaya Paksa',
    legalBasis: 'Pasal 22–63',
  },
  {
    term: 'P-19 & P-21',
    definition: 'Kode resmi administrasi kejaksaan: P-19 adalah pengembalian berkas perkara untuk dilengkapi petunjuk penyidik, sedangkan P-21 adalah pemberitahuan bahwa hasil penyidikan sudah lengkap.',
    category: 'Prosedur & Upaya Paksa',
    legalBasis: 'Pasal 22–63',
  },
  {
    term: 'BAP',
    definition: 'Berita Acara Pemeriksaan, catatan otentik tertulis yang dibuat penyidik mengenai pemeriksaan saksi, ahli, atau tersangka yang ditandatangani oleh pemeriksa dan yang diperiksa.',
    category: 'Prosedur & Upaya Paksa',
  },
  {
    term: 'A De Charge',
    definition: 'Hak tersangka atau terdakwa untuk menghadirkan saksi atau ahli yang menguntungkan bagi dirinya guna mematahkan tuduhan penuntut umum.',
    category: 'Persidangan & Putusan',
    legalBasis: 'Pasal 142',
  },
  {
    term: 'Exclusionary Rule',
    definition: 'Asas hukum yang menyatakan bahwa setiap alat bukti yang diperoleh secara tidak sah atau melanggar hak asasi/hukum dinyatakan tidak sah dan dilarang digunakan di persidangan.',
    category: 'Asas & Konsep',
    legalBasis: 'Pasal 235 butir 8',
  },
  {
    term: 'In Presentia vs In Absentia',
    definition: 'Prinsip pemeriksaan dengan kehadiran nyata terdakwa di ruang sidang (In Presentia). In Absentia (tanpa kehadiran terdakwa) hanya diizinkan terbatas pada tindak pidana khusus seperti Tipikor dan Terorisme.',
    category: 'Persidangan & Putusan',
    legalBasis: 'Pertemuan 2 butir 8',
  },
  {
    term: 'Vrijspraak (Putusan Bebas)',
    definition: 'Putusan pengadilan yang dijatuhkan ketika kesalahan terdakwa atas tindak pidana yang didakwakan tidak terbukti secara sah dan meyakinkan menurut undang-undang.',
    category: 'Persidangan & Putusan',
    legalBasis: 'Pertemuan 11 butir b',
  },
  {
    term: 'Ontslag van Alle Rechtsvervolging (Putusan Lepas)',
    definition: 'Putusan lepas dari segala tuntutan hukum, terjadi ketika seluruh perbuatan materiil terbukti, namun perbuatan tersebut dinilai bukan merupakan tindak pidana (misal sengketa perdata/alasan pemaaf/pembenar).',
    category: 'Persidangan & Putusan',
    legalBasis: 'Pertemuan 11 butir c',
  },
  {
    term: 'Requisitoir',
    definition: 'Surat tuntutan pidana yang dibacakan oleh Penuntut Umum di persidangan setelah tahap pembuktian selesai, berisi analisis fakta hukum dan permohonan penjatuhan hukuman.',
    category: 'Persidangan & Putusan',
    legalBasis: 'Pertemuan 10 butir e',
  },
  {
    term: 'Pledoi',
    definition: 'Nota pembelaan yang diajukan dan dibacakan oleh terdakwa dan/atau penasihat hukumnya untuk menanggapi tuntutan pidana (requisitoir) penuntut umum.',
    category: 'Persidangan & Putusan',
    legalBasis: 'Pertemuan 10 butir f',
  },
  {
    term: 'Replik & Duplik',
    definition: 'Replik adalah tanggapan penuntut umum atas pledoi terdakwa; Duplik adalah tanggapan terakhir terdakwa/penasihat hukum atas replik penuntut umum sebelum hakim bermusyawarah.',
    category: 'Persidangan & Putusan',
    legalBasis: 'Pertemuan 10 butir f',
  },
  {
    term: 'Novum',
    definition: 'Keadaan atau bukti baru yang menentukan, yang pada waktu perkara diperiksa di pengadilan belum ditemukan, yang menjadi syarat utama pengajuan Peninjauan Kembali (PK).',
    category: 'Persidangan & Putusan',
    legalBasis: 'Pertemuan 11',
  },
  {
    term: 'Beneficial Owner',
    definition: 'Pemilik manfaat sebenarnya dari suatu korporasi yang berhak atas keuntungan atau memiliki kendali efektif atas kebijakan korporasi yang dapat dimintai pertanggungjawaban pidana.',
    category: 'Kelembagaan',
    legalBasis: 'Pasal 326–327',
  },
  {
    term: 'Rupbasan',
    definition: 'Rumah Penyimpanan Benda Sitaan Negara, tempat resmi penyimpanan barang bukti yang disita aparat agar terjaga keutuhannya dan dilarang digunakan untuk kepentingan pribadi/operasional.',
    category: 'Prosedur & Upaya Paksa',
    legalBasis: 'Pasal 89–141 butir 5',
  },
  {
    term: 'Negatief Wettelijk',
    definition: 'Sistem pembuktian yang dianut KUHAP di mana hakim hanya boleh menjatuhkan pidana jika terdapat sekurang-kurangnya 2 alat bukti yang sah menurut UU dan hakim memperoleh keyakinan bersalah.',
    category: 'Asas & Konsep',
    legalBasis: 'Pasal 235',
  },
];

export const PIDANA_MASTER_FLOW = {
  title: 'Bagaimana Sebuah Perkara Pidana Berjalan?',
  subtitle: 'Alur Holistik Perjalanan Perkara Pidana dari Laporan Masyarakat hingga Eksekusi Putusan Berdasarkan UU No. 20 Tahun 2025',
  stages: [
    {
      id: 'pemicu',
      number: '01',
      title: 'Pemicu Perkara',
      actor: 'Masyarakat / Aparat',
      desc: 'Bermula dari Laporan, Pengaduan (delik aduan), atau Tertangkap Tangan tindak pidana.',
      branches: ['Laporan', 'Pengaduan', 'Tertangkap Tangan'],
    },
    {
      id: 'penyelidikan',
      number: '02',
      title: 'Penyelidikan',
      actor: 'Penyelidik (Polri / PPNS / KPK)',
      desc: 'Mencari & menemukan peristiwa pidana guna menentukan dapat/tidaknya dilakukan penyidikan (Olah TKP, Observasi, Surveillance).',
      branches: ['Laporan Hasil Penyelidikan (LHP)', 'Gelar Perkara', 'Jika bukan pidana: Penghentian Penyelidikan'],
    },
    {
      id: 'penyidikan',
      number: '03',
      title: 'Penyidikan & SPDP',
      actor: 'Penyidik & Jaksa Penuntut Umum',
      desc: 'Penerbitan SPDP kepada Penuntut Umum. Mengumpulkan alat bukti, membuat BAP saksi/ahli dengan rekaman CCTV.',
      branches: ['Penerbitan SPDP', 'Pemeriksaan Ber-CCTV', 'Peluang Restorative Justice / DPA Korporasi'],
    },
    {
      id: 'tersangka',
      number: '04',
      title: 'Penetapan Tersangka & Upaya Paksa',
      actor: 'Penyidik & Pengadilan Negeri',
      desc: 'Penetapan tersangka (min 2 alat bukti sah, diberitahukan max 1 hari). Bila perlu: Penangkapan (max 1×24 jam), Penahanan, Penggeledahan & Penyitaan.',
      branches: ['Izin Ketua PN / Mendesak Persetujuan Pasca-tindakan', 'Praperadilan jika penetapan tersangka dinilai cacat'],
    },
    {
      id: 'pemberkasan',
      number: '05',
      title: 'Pemberkasan (Tahap I & Tahap II)',
      actor: 'Penyidik & Penuntut Umum',
      desc: 'Penyerahan berkas perkara (Tahap I). Diteliti oleh Jaksa: P-19 (belum lengkap) atau P-21 (lengkap). Dilanjutkan Penyerahan Tahap II (Tersangka & Barang Bukti).',
      branches: ['P-19 (Petunjuk Penyidik)', 'P-21 (Lengkap)', 'Tahap II (Penyerahan Tersangka & BB)'],
    },
    {
      id: 'penuntutan',
      number: '06',
      title: 'Penuntutan & Pelimpahan',
      actor: 'Penuntut Umum (Dominus Litis)',
      desc: 'Jaksa menyusun Surat Dakwaan dan melimpahkan berkas perkara ke Pengadilan Negeri. Peluang Plea Bargain (Pengakuan Bersalah).',
      branches: ['Pelimpahan ke PN', 'Deponering (Kepentingan Umum)', 'Plea Bargain'],
    },
    {
      id: 'persidangan',
      number: '07',
      title: 'Pemeriksaan Sidang Pengadilan',
      actor: 'Majelis Hakim, Jaksa, Terdakwa & Penasihat Hukum',
      desc: 'Dakwaan → Eksepsi → Putusan Sela → Pembuktian (8 Alat Bukti Sah) → Requisitoir → Pledoi → Replik & Duplik → Musyawarah.',
      branches: ['Pemeriksaan Terbuka untuk Umum', 'Pemeriksaan Lisan & Tatap Muka'],
    },
    {
      id: 'putusan',
      number: '08',
      title: 'Pembacaan Putusan Hakim',
      actor: 'Majelis Hakim Pengadilan Negeri',
      desc: 'Berdasarkan sistem Negatief Wettelijk (min 2 alat bukti sah + keyakinan hakim).',
      branches: ['Putusan Pemidanaan (Terbukti Bersalah)', 'Putusan Bebas / Vrijspraak', 'Putusan Lepas / Ontslag'],
    },
    {
      id: 'upaya-hukum',
      number: '09',
      title: 'Upaya Hukum',
      actor: 'Terdakwa / Penuntut Umum',
      desc: 'Upaya Hukum Biasa: Banding ke Pengadilan Tinggi dan Kasasi ke Mahkamah Agung. Upaya Luar Biasa: Peninjauan Kembali (PK) berdasar novum.',
      branches: ['Banding (PT)', 'Kasasi (MA)', 'Peninjauan Kembali (Novum / Kekhilafan Hakim)'],
    },
    {
      id: 'eksekusi',
      number: '10',
      title: 'Eksekusi & Pemasyarakatan',
      actor: 'Jaksa Eksekutor & Lembaga Pemasyarakatan',
      desc: 'Eksekusi putusan yang telah berkekuatan hukum tetap (inkracht). Pembinaan di Lapas atau pemulihan kerugian korban/negara.',
      branches: ['Eksekusi Pidana Badan', 'Pembayaran Denda / Restitusi', 'Pembebasan Segera'],
    },
  ],
};

export const PIDANA_TOPICS_DATA: Topic[] = [
  // PERTEMUAN 1
  {
    id: 1,
    numberStr: 'PERTEMUAN 01',
    title: 'Pengantar & Konsep Dasar Hukum Acara Pidana',
    shortDesc: 'Pengertian hukum acara pidana formil, kedudukan dalam tata hukum publik, perbandingan terhadap Sistem Peradilan Pidana, 5 fungsi utama, serta 8 ilmu bantu forensik.',
    summaryQuote: 'Hukum Acara Pidana adalah instrumen negara untuk menegakkan hukum pidana materiil dengan tetap menjamin due process of law dan perlindungan martabat kemanusiaan.',
    sections: [
      {
        id: 'pengertian-dan-kedudukan',
        title: 'A. Pengertian Formil & Kedudukan Hukum',
        content: [
          'Hukum Acara Pidana secara formil diartikan sebagai kumpulan peraturan yang memberikan pedoman dan tata cara bagi negara melalui alat-alat lengkapnya (Kepolisian, Kejaksaan, dan Pengadilan) untuk menegakkan dan melaksanakan hukum pidana materiil.',
          'Dalam tata hukum nasional, kedudukan Hukum Acara Pidana merupakan bagian dari hukum publik yang dirancang untuk melindungi kepentingan masyarakat luas sekaligus menjamin terselenggaranya proses hukum yang adil (due process of law).',
        ],
        highlightBox: {
          title: 'Kedudukan Yuridis Hukum Acara Pidana',
          text: 'Sebagai hukum publik formal, Hukum Acara Pidana membatasi kewenangan represif aparat penegak hukum agar tidak bertindak sewenang-wenang terhadap hak-hak asasi warga negara.',
        },
      },
      {
        id: 'perbedaan-hap-vs-spp',
        title: 'B. Perbandingan Komparatif: Hukum Acara Pidana vs Sistem Peradilan Pidana',
        content: [
          'Meskipun sering digunakan secara bersamaan, Hukum Acara Pidana dan Sistem Peradilan Pidana (SPP) memiliki ruang lingkup dan batasan konseptual yang sangat berbeda:',
        ],
        comparisonBoxes: [
          {
            title: 'Hukum Acara Pidana (Arti Sempit / Yuridis-Normatif)',
            description: 'Fokus pada ketentuan normatif-operasional dan tata cara pencarian kebenaran materiil.',
            items: [
              'Mengatur tahapan prosedural baku: penyelidikan, penyidikan, penuntutan, persidangan, hingga eksekusi putusan.',
              'Menjadi pedoman legalitas bagi aparat penegak hukum dalam melaksanakan wewenangnya.',
              'Menjamin batasan hak dan kewajiban tersangka/terdakwa serta penuntut.',
            ],
          },
          {
            title: 'Sistem Peradilan Pidana (Arti Luas / Sistemik-Institusional)',
            description: 'Mencakup interaksi jaringan kelembagaan penegak hukum secara keseluruhan dalam masyarakat.',
            items: [
              'Menjangkau dimensi sejak tahap perumusan/pembentukan undang-undang pidana.',
              'Mencakup sinergi antar-lembaga: Kepolisian, Kejaksaan, Pengadilan, Advokat, hingga Lembaga Pemasyarakatan (Lapas).',
              'Memperhatikan kebijakan kriminal, sosiologis, pemulihan korban, dan resosialisasi terpidana.',
            ],
          },
        ],
      },
      {
        id: 'lima-fungsi-utama',
        title: 'C. 5 Fungsi Utama Hukum Acara Pidana',
        content: [
          'Berdasarkan teori hukum modern dan implementasi UU No. 20 Tahun 2025, Hukum Acara Pidana mengemban lima fungsi strategis:',
        ],
        table: {
          headers: ['Fungsi Utama', 'Fokus Yuridis & Operasional', 'Tujuan Perlindungan'],
          rows: [
            ['1. Instrumental', 'Menjadi sarana operasional dan prosedur kerja bagi negara.', 'Memastikan hukum pidana materiil dapat ditegakkan secara nyata.'],
            ['2. Protektif', 'Melindungi hak asasi tersangka, terdakwa, saksi, dan korban.', 'Mencegah kesewenang-wenangan aparat dan menjamin due process of law.'],
            ['3. Epistemik', 'Menyediakan metode baku dan standar pengujian pembuktian.', 'Mencapai kebenaran materiil (kebenaran yang sesungguhnya).'],
            ['4. Institusional', 'Membagi peran fungsional antar-lembaga peradilan secara tegas.', 'Mewujudkan diferensiasi fungsional tanpa tumpang tindih kewenangan.'],
            ['5. Legitimasi', 'Memberikan keabsahan hukum dan moral atas sanksi negara.', 'Memastikan putusan hakim diterima secara adil oleh masyarakat.'],
          ],
        },
      },
      {
        id: 'ilmu-bantu',
        title: 'D. 8 Ilmu Bantu Hukum Acara Pidana',
        content: [
          'Pencarian kebenaran materiil tidak dapat hanya mengandalkan teks perundang-undangan semata, melainkan membutuhkan disiplin ilmu pendukung:',
        ],
        keyPoints: [
          'Logika Hukum: Memastikan silogisme, penalaran hukum, dan kesimpulan dakwaan/tuntutan tersusun runtut tanpa cacat logika.',
          'Kriminologi: Mempelajari sebab-musabab kejahatan, pola perilaku kriminal, dan reaksi sosial kemasyarakatan.',
          'Psikologi: Menilai motif kejiwaan pelaku dan mendeteksi kondisi psikologis saksi saat memberikan keterangan.',
          'Psikiatri Peradilan: Menentukan ada/tidaknya gangguan jiwa terdakwa terkait pertanggungjawaban pidana (Pasal 44 KUHP).',
          'Kriminalistik: Penerapan sains fisik (sidik jari/daktiloskopi, balistik, jejak sepatu, analisis kimia) di tempat kejadian perkara (TKP).',
          'Viktimologi: Mempelajari peranan korban dalam terjadinya tindak pidana serta pemenuhan hak-hak pemulihan korban.',
          'Penologi: Mempelajari tata cara penghukuman, efektivitas sanksi pidana, dan sistem manajemen pemasyarakatan.',
          'Kedokteran Forensik: Memeriksa luka, visum et repertum, penyebab kematian korban, dan analisis DNA untuk pembuktian ilmiah.',
        ],
      },
    ],
  },

  // PERTEMUAN 2
  {
    id: 2,
    numberStr: 'PERTEMUAN 02',
    title: 'Asas-Asas Utama Hukum Acara Pidana',
    shortDesc: '11 Asas fundamental hukum acara pidana modern: Equality Before the Law, Praduga Tak Bersalah, Peradilan Cepat Sederhana Biaya Ringan, Dominus Litis, hingga Exclusionary Rule.',
    summaryQuote: 'Asas-asas hukum acara pidana merupakan tiang penyangga yang menentukan sah atau tidaknya setiap tindakan aparat dalam sistem peradilan pidana.',
    sections: [
      {
        id: 'sebelas-asas-utama',
        title: 'A. 11 Asas Fundamental Peradilan Pidana',
        content: [
          'Seluruh proses beracara dalam UU No. 20 Tahun 2025 diikat oleh 11 asas hukum universal:',
        ],
        table: {
          headers: ['Asas Hukum', 'Makna & Konsep Inti', 'Penerapan Praktis'],
          rows: [
            ['1. Equality Before the Law', 'Persamaan kedudukan dan perlakuan berimbang di hadapan hukum.', 'Tidak ada perlakuan diskriminatif berdasarkan status sosial, ekonomi, atau jabatan politik.'],
            ['2. Presumption of Innocence', 'Praduga tak bersalah sampai ada putusan berkekuatan hukum tetap (inkracht).', 'Tersangka/terdakwa tidak boleh diperlakukan sebagai orang bersalah sebelum vonis final.'],
            ['3. Peradilan Cepat, Sederhana, & Biaya Ringan', 'Penanganan perkara dibatasi jangka waktu tegas dan tidak berbelit-belit.', 'Penyidikan dan persidangan memiliki batas waktu ketat demi kepastian hukum.'],
            ['4. Asas Oportunitas (Dominus Litis)', 'Monopoli penuntutan oleh Penuntut Umum/Kejaksaan.', 'Kejaksaan berwenang mengesampingkan perkara demi kepentingan umum (deponering).'],
            ['5. Diferensiasi Fungsional', 'Pembagian tugas dan wewenang yang tegas antar-instansi penegak hukum.', 'Polisi menyidik, Jaksa menuntut, Hakim mengadili, tanpa saling mencampuri kewenangan.'],
            ['6. Peradilan Terbuka untuk Umum', 'Persidangan dibuka dan dinyatakan terbuka bagi publik.', 'Dapat disaksikan masyarakat, kecuali perkara kesusilaan dan perkara peradilan anak.'],
            ['7. Pemeriksaan Langsung & Lisan', 'Terdakwa dan saksi diperiksa secara tatap muka langsung di hadapan hakim.', 'Hakim menilai secara langsung gestur, intonasi, dan kebenaran keterangan di sidang.'],
            ['8. In Presentia vs In Absentia', 'Prinsip utama adalah kehadiran nyata terdakwa di persidangan (In Presentia).', 'In Absentia hanya diperbolehkan secara sangat terbatas pada tindak pidana khusus (Tipikor & Terorisme).'],
            ['9. Akusatoir (Bukan Inkisitoir)', 'Terdakwa diposisikan sebagai subjek hukum yang bermartabat dan memiliki hak bela diri.', 'Menggantikan sistem inkisitoir masa lalu yang memperlakukan tersangka sebagai objek pemeriksaan.'],
            ['10. Judicial Scrutiny & Proporsionalitas', 'Pengawasan ketat oleh pengadilan atas setiap upaya paksa aparat penegak hukum.', 'Penahanan, penggeledahan, dan penyitaan harus proporsional dan diawasi izin/persetujuan PN.'],
            ['11. Exclusionary Rule', 'Alat bukti yang diperoleh secara tidak sah/melawan hukum dinyatakan tidak sah.', 'Bukti hasil penyiksaan atau penggeledahan ilegal dilarang digunakan di pengadilan.'],
          ],
        },
      },
      {
        id: 'penegasan-exclusionary-rule',
        title: 'B. Esensi Exclusionary Rule & Judicial Scrutiny',
        content: [
          'Dalam pembaruan KUHAP 2025, Exclusionary Rule dan Judicial Scrutiny menjadi benteng utama perlindungan hak asasi manusia.',
          'Setiap upaya paksa yang membatasi hak konstitusional warga negara wajib tunduk pada uji proporsionalitas dan kontrol yudisial oleh pengadilan. Apabila bukti diperoleh melalui intimidasi, penyiksaan, atau tanpa izin yang sah, bukti tersebut gugur secara yuridis.',
        ],
        highlightBox: {
          title: 'Prinsip Doktrin "Fruit of the Poisonous Tree"',
          text: 'Exclusionary rule menegaskan bahwa pohon yang beracun akan menghasilkan buah yang beracun. Bukti materiil yang didapat dari pelanggaran prosedur hukum tidak memiliki kekuatan pembuktian di muka sidang.',
        },
      },
    ],
  },

  // PERTEMUAN 3
  {
    id: 3,
    numberStr: 'PERTEMUAN 03',
    title: 'Paradigma Baru Reformasi KUHAP (UU No. 20 Tahun 2025)',
    shortDesc: 'Evolusi paradigma peradilan pidana, pergeseran dari Crime Control menuju Due Process dan Restorative Justice, CCTV pemeriksaan, Plea Bargain, DPA, serta SPPT-TI.',
    summaryQuote: 'KUHAP Baru menandai lompatan peradaban hukum: menyeimbangkan efisiensi penindakan dengan keadilan restoratif dan digitalisasi pembuktian.',
    sections: [
      {
        id: 'pergeseran-paradigma',
        title: 'A. Garis Waktu Pergeseran Paradigma Hukum Acara Pidana',
        content: [
          'Hukum Acara Pidana Indonesia telah mengalami transformasi filosofis mendalam dari orientasi represif menuju pemulihan keadilan substantif:',
        ],
        timeline: {
          title: 'Evolusi Tiga Model Peradilan Pidana',
          items: [
            {
              stage: '1. Crime Control Model',
              badge: 'Orientasi Lama / Represif',
              description: 'Menitikberatkan pada represi cepat terhadap tindak pidana, kepatuhan aparat, efisiensi penegakan, dan kepastian pemidanaan penjara.',
              details: [
                'Tersangka kerap menjadi objek pembuktian.',
                'Fokus pada hukuman badan dan penahanan.',
                'Tingkat pemidanaan tinggi yang memicu kelebihan kapasitas penjara.',
              ],
            },
            {
              stage: '2. Due Process Model',
              badge: 'Koreksi Hak Asasi / Formil',
              description: 'Menjamin hak-hak tersangka dan terdakwa secara ketat melalui prosedur peradilan yang adil, legalitas upaya paksa, dan bantuan hukum sejak awal.',
              details: [
                'Pemberlakuan asas akusatoir penuh.',
                'Pengawasan hakim atas tindakan represif aparat kepolisian dan kejaksaan.',
                'Pencegahan penyiksaan melalui kontrol prosedural formal.',
              ],
            },
            {
              stage: '3. Restorative Justice & Modernisasi',
              badge: 'Paradigma KUHAP 2025',
              description: 'Memprioritaskan pemulihan kerugian korban, perdamaian, pertanggungjawaban sukarela pelaku, serta alternatif penyelesaian perkara.',
              details: [
                'Pengakuan pranata Plea Bargain (pengakuan bersalah dengan penuntutan cepat).',
                'Penerapan Deferred Prosecution Agreement (DPA) bagi korporasi.',
                'Digitalisasi penanganan berkas perkara melalui platform SPPT-TI.',
              ],
            },
          ],
        },
      },
      {
        id: 'lima-pembaruan-kuhap-baru',
        title: 'B. 5 Pembaruan Utama dalam UU No. 20 Tahun 2025',
        content: [
          'UU No. 20 Tahun 2025 menghadirkan lima instrumen kebaruan struktural dalam proses beracara pidana:',
        ],
        table: {
          headers: ['Pembaruan Struktural', 'Mekanisme & Ketentuan Yuridis', 'Dampak Terhadap Sistem'],
          rows: [
            ['a. Hakim Aktif & Parapihak Berimbang', 'Hakim berperan aktif menggali fakta materiil serta menyeimbangkan posisi antara tersangka/terdakwa dengan penuntut umum.', 'Meniadakan dominasi sepihak jaksa dan memperkuat hak pembelaan terdakwa.'],
            ['b. Rekaman CCTV Pemeriksaan', 'Wajib merekam pemeriksaan tersangka menggunakan Kamera Pengawas (CCTV) audio-visual.', 'Mencegah intimidasi, kekerasan fisik, dan pemaksaan pengakuan oleh penyidik.'],
            ['c. Perluasan Upaya Paksa & Kontrol Yudisial', 'Penetapan tersangka, pemblokiran rekening/data, penyadapan, dan larangan keluar wilayah secara tegas masuk kategori Upaya Paksa.', 'Semua tindakan di atas wajib diawasi izin atau persetujuan pengadilan (PN).'],
            ['d. Pranata Penyelesaian Baru (Plea Bargain & DPA)', 'Pengakuan mekanisme Plea Bargain bagi orang perseorangan dan Deferred Prosecution Agreement (DPA) bagi korporasi.', 'Mempersingkat persidangan perkara sederhana dan memulihkan kerugian keuangan negara.'],
            ['e. Digitalisasi SPPT-TI & Bukti Elektronik', 'Penerapan Sistem Peradilan Pidana Terpadu berbasis Teknologi Informasi (SPPT-TI) dan pengakuan bukti elektronik otentik.', 'Mempercepat pertukaran berkas antar-institusi dan memangkas birokrasi fisik perkara.'],
          ],
        },
      },
    ],
  },

  // PERTEMUAN 4
  {
    id: 4,
    numberStr: 'PERTEMUAN 04',
    title: 'Subjek dan Kelembagaan Peradilan Pidana',
    shortDesc: 'Progresi status subjek hukum pidana (Tersangka → Terdakwa → Terpidana), aparat penegak hukum (Polri, PPNS, KPK, Jaksa, Advokat), serta lembaga pendukung (LPSK, BPK, PPATK, Lapas).',
    summaryQuote: 'Perubahan status dari Tersangka menjadi Terdakwa hingga Terpidana mencerminkan tahapan pembuktian yang bergeser dari sangkaan awal menuju putusan yang inkracht.',
    sections: [
      {
        id: 'progresi-status',
        title: 'A. Visual Progresi Status Subjek Hukum Pidana',
        content: [
          'Status seseorang dalam peradilan pidana berubah secara yuridis seiring berjalannya tahapan pemeriksaan perkara:',
        ],
        progressionSteps: [
          {
            step: 'Tahap 1',
            label: 'TERSANGKA',
            desc: 'Orang yang karena perbuatannya atau keadaannya berdasarkan bukti permulaan (minimal 2 alat bukti sah) patut diduga kuat sebagai pelaku tindak pidana.',
            legalBasis: 'Tahap Penyidikan',
          },
          {
            step: 'Tahap 2',
            label: 'TERDAKWA',
            desc: 'Tersangka yang telah dilimpahkan perkaranya oleh Penuntut Umum ke Pengadilan Negeri untuk diperiksa dan diadili dalam sidang peradilan.',
            legalBasis: 'Tahap Persidangan',
          },
          {
            step: 'Tahap 3',
            label: 'TERPIDANA',
            desc: 'Seseorang yang dijatuhi pidana berdasarkan putusan pengadilan yang telah memperoleh kekuatan hukum tetap (inkracht van gewijsde).',
            legalBasis: 'Tahap Eksekusi Lapas',
          },
        ],
      },
      {
        id: 'kelembagaan-aparat',
        title: 'B. Peta Kelembagaan: Aparat Penegak Hukum & Lembaga Pendukung',
        content: [
          'Sistem peradilan pidana bertumpu pada kolaborasi sinergis antar-instansi penegak hukum dan lembaga pendukung fungsional:',
        ],
        comparisonBoxes: [
          {
            title: 'Aparat Penegak Hukum (Catur Wangsa)',
            description: 'Institusi yang memiliki kewenangan yuridis langsung dalam rangkaian penanganan perkara.',
            items: [
              'Penyelidik & Penyidik: Kepolisian Negara RI (Polri), Penyidik Pegawai Negeri Sipil (PPNS), dan Penyidik Khusus (KPK & Kejaksaan).',
              'Penuntut Umum (Jaksa): Pemegang kendali tunggal penuntutan (Dominus Litis) dan pelaksana penetapan hakim serta eksekusi putusan pengadilan.',
              'Hakim (Pengadilan): Pejabat peradilan independen yang berwenang memeriksa, mengadili, memutus, dan menguji keabsahan upaya paksa aparat.',
              'Advokat / Penasihat Hukum: Penegak hukum independen yang bertugas memberikan bantuan hukum, pendampingan, dan pembelaan hak asasi.',
            ],
          },
          {
            title: 'Lembaga Pendukung & Spesialis',
            description: 'Lembaga negara yang memberikan perlindungan saksi, audit keuangan, data transaksi, dan pembinaan pemasyarakatan.',
            items: [
              'LPSK (Lembaga Perlindungan Saksi dan Korban): Memberikan perlindungan fisik, psikis, identitas rahasia, serta fasilitasi restitusi/kompensasi.',
              'BPK / BPKP: Melakukan audit forensik dan perhitungan kerugian keuangan negara untuk tindak pidana korupsi/ekonomi.',
              'PPATK: Menganalisis transaksi keuangan mencurigakan dan melacak aset hasil kejahatan (tindak pidana pencucian uang).',
              'Lembaga Pemasyarakatan (Lapas): Melaksanakan pembinaan, resosialisasi, dan pemasyarakatan bagi warga binaan (terpidana).',
            ],
          },
        ],
      },
    ],
  },

  // PERTEMUAN 5
  {
    id: 5,
    numberStr: 'PERTEMUAN 05',
    title: 'Hak-Hak Para Pihak dalam Proses Pidana',
    shortDesc: 'Matriks perlindungan hak tersangka/terdakwa (Pasal 142), saksi dan korban (Pasal 143 & 144, Restitusi vs Kompensasi), serta perlindungan afirmatif kelompok rentan (Pasal 145–148).',
    summaryQuote: 'Kualitas peradaban suatu negara diukur dari sejauh mana sistem peradilannya melindungi hak-hak pihak yang paling rentan saat berhadapan dengan kekuasaan negara.',
    sections: [
      {
        id: 'hak-tersangka-terdakwa',
        title: 'A. Hak Tersangka dan Terdakwa (Pasal 142 UU 20/2025)',
        content: [
          'Pasal 142 menjamin hak-hak prosedural dan asasi bagi setiap orang yang disangka atau didakwa melakukan tindak pidana:',
        ],
        keyPoints: [
          'Bantuan Hukum Sejak Awal: Berhak didampingi oleh advokat/penasihat hukum sejak saat pertama kali diperiksa/ditangkap.',
          'Hak atas Informasi Tuduhan: Berhak segera diberitahu dengan jelas dalam bahasa yang dimengerti tentang apa yang disangkakan/didakwakan.',
          'Hak Diam (Privilege Against Self-Incrimination): Berhak untuk menolak memberikan jawaban yang dapat memberatkan dirinya sendiri tanpa dikenai sanksi.',
          'Bantuan Penerjemah: Berhak mendapat penerjemah/juru bahasa bebas biaya jika tidak memahami bahasa Indonesia atau penyandang disabilitas rungu/wicara.',
          'Pemeriksaan Kesehatan & Rohani: Berhak atas layanan kesehatan dokter independen dan menerima kunjungan rohaniwan sesuai keyakinannya.',
          'Bebas dari Penyiksaan: Berhak diperlakukan secara manusiawi tanpa intimidasi, tekanan fisik, pemerasan, atau perlakuan merendahkan martabat.',
          'Menghadirkan Saksi/Ahli A De Charge: Berhak mengajukan saksi atau ahli yang meringankan untuk didengar keterangannya di penyidikan dan persidangan.',
        ],
      },
      {
        id: 'hak-saksi-korban',
        title: 'B. Hak Saksi & Korban (Pasal 143 & 144)',
        content: [
          'Korban dan saksi mendapatkan perlindungan komprehensif guna menjamin rasa aman dan pemulihan:',
        ],
        table: {
          headers: ['Bentuk Hak Perlindungan', 'Substansi Jaminan Hukum', 'Mekanisme Pemenuhan'],
          rows: [
            ['Perlindungan Fisik & Psikis', 'Bebas dari ancaman teror, intimidasi, kekerasan, atau pembalasan pihak pelaku.', 'Fasilitas safehouse dan pengawalan melekat oleh LPSK.'],
            ['Kerahasiaan Identitas', 'Perlindungan kerahasiaan nama, alamat, dan data keluarga saksi/korban.', 'Penggunaan nama samaran atau kesaksian jarak jauh via teleconference.'],
            ['Bantuan Medis & Rehabilitasi', 'Pengobatan luka fisik serta terapi psikologis pemulihan trauma korban.', 'Dibiayai melalui mekanisme program bantuan rehabilitasi korban.'],
            ['Penggantian Biaya Transportasi', 'Penggantian seluruh biaya perjalanan dan akomodasi saat hadir bersaksi.', 'Diberikan oleh penyidik, penuntut umum, atau LPSK.'],
            ['Hak Restitusi', 'Ganti rugi kerugian materiil/imateriil yang dibayar langsung oleh Pelaku tindak pidana.', 'Dimohonkan dalam tuntutan dan diputus dalam vonis hakim.'],
            ['Hak Kompensasi', 'Ganti rugi yang dibayarkan oleh Negara kepada korban pelanggaran HAM berat/terorisme.', 'Dicairkan melalui kas negara berdasarkan penetapan pengadilan.'],
          ],
        },
      },
      {
        id: 'hak-kelompok-rentan',
        title: 'C. Perlindungan Kelompok Rentan (Pasal 145–148)',
        content: [
          'KUHAP 2025 memberikan perlindungan afirmatif khusus bagi kelompok yang berada dalam kerentanan struktural atau fisik:',
        ],
        comparisonBoxes: [
          {
            title: '1. Penyandang Disabilitas (Pasal 145)',
            description: 'Mengedepankan akomodasi yang layak dan aksesibilitas ruang sidang.',
            items: [
              'Wajib dilakukan asesmen kebutuhan khusus sebelum pemeriksaan dimulai.',
              'Penyediaan fasilitas aksesibilitas fisik serta juru bahasa isyarat tersumpah.',
              'Pendampingan oleh psikolog atau pekerja sosial berlisensi.',
            ],
          },
          {
            title: '2. Perempuan Berhadapan dengan Hukum (Pasal 146)',
            description: 'Mencegah diskriminasi gender dan viktimisasi sekunder.',
            items: [
              'Perlindungan mutlak dari pertanyaan bernada prasangka gender atau menyudutkan moralitas.',
              'Mencegah retraumatisasi dalam perkara kekerasan seksual atau KDRT.',
              'Pemeriksaan saksi korban perempuan didampingi oleh konselor perempuan.',
            ],
          },
          {
            title: '3. Lanjut Usia > 75 Tahun (Pasal 147–148)',
            description: 'Pertimbangan faktor usia lanjut dan kemanusiaan.',
            items: [
              'Berhak atas fasilitas pemeriksaan dan pelayanan kesehatan khusus secara berkala.',
              'Menjadi pertimbangan wajib bagi hakim untuk tidak menjatuhkan pidana penjara.',
              'Opsi pengalihan penahanan menjadi tahanan rumah atau tahanan kota.',
            ],
          },
        ],
      },
    ],
  },

  // PERTEMUAN 6
  {
    id: 6,
    numberStr: 'PERTEMUAN 06',
    title: 'Tahapan Penyelidikan dan Penyidikan',
    shortDesc: 'Alur komprehensif dari pemicu laporan/pengaduan/tertangkap tangan, penyelidikan (LHP & Gelar Perkara), penyidikan, penetapan tersangka, SPDP, hingga penyerahan berkas Tahap I dan Tahap II.',
    summaryQuote: 'Penyelidikan mencari ada/tidaknya peristiwa pidana, sedangkan penyidikan mengumpulkan alat bukti untuk membuat terang perkara dan menemukan tersangkanya.',
    sections: [
      {
        id: 'penyelidikan-konsep',
        title: 'A. Penyelidikan (Pasal 13–21 & 165–175)',
        content: [
          'Definisi: Penyelidikan adalah serangkaian tindakan penyelidik untuk mencari dan menemukan suatu peristiwa yang diduga sebagai tindak pidana guna menentukan dapat atau tidaknya dilakukan penyidikan menurut cara yang diatur dalam undang-undang.',
          'Pemicu Penyelidikan: Dimulai atas dasar (1) Laporan masyarakat, (2) Pengaduan oleh pihak yang dirugikan pada delik aduan, atau (3) Tertangkap Tangan (in flagrante delicto).',
          'Metode Operasional Penyelidikan mencakup: Olah TKP, observasi lapangan, surveillance (pengintaian), undercover (penyamaran), controlled delivery (penyerahan di bawah pengawasan), pembelian terselubung (undercover buy), dan analisis dokumen.',
          'Output Akhir Penyelidikan: Laporan Hasil Penyelidikan (LHP) yang dibahas dalam forum Gelar Perkara untuk menyimpulkan apakah perkara ditingkatkan ke penyidikan atau dihentikan karena bukan tindak pidana.',
        ],
      },
      {
        id: 'penyidikan-konsep',
        title: 'B. Penyidikan (Pasal 22–63)',
        content: [
          'Definisi: Penyidikan adalah serangkaian tindakan penyidik dalam hal dan menurut cara yang diatur dalam undang-undang untuk mencari serta mengumpulkan bukti yang dengan bukti itu membuat terang tentang tindak pidana yang terjadi dan guna menemukan tersangkanya.',
          'Alur Prosedural Penyidikan berlangsung secara berjenjang dari pemberitahuan dimulainya penyidikan hingga penyerahan tanggung jawab berkas dan tersangka ke kejaksaan.',
        ],
      },
      {
        id: 'flowchart-penyelidikan-penyidikan',
        title: 'C. FLOWCHART UTAMA: Alur Penyelidikan hingga Penyerahan Tahap II',
        content: [
          'Berikut adalah alur proses standar penyidikan pidana berdasarkan UU No. 20 Tahun 2025. Klik pada setiap simpul alur untuk membaca rincian proseduralnya:',
        ],
        flowchart: {
          title: 'Alur Standar Penyelidikan & Penyidikan Perkara Pidana',
          subtitle: 'Dari Laporan Awal hingga Penyerahan Tersangka & Barang Bukti ke Penuntut Umum',
          flowType: 'linear',
          steps: [
            {
              id: 'node-1',
              stepNumber: 1,
              title: 'Laporan / Pengaduan / Tertangkap Tangan',
              actor: 'Pelapor / Korban / Penyelidik',
              description: 'Pintu masuk perkara pidana. Tertangkap tangan memungkinkan tindakan pengamanan langsung tanpa surat perintah awal.',
              legalBasis: 'Pasal 13–21',
            },
            {
              id: 'node-2',
              stepNumber: 2,
              title: 'Penyelidikan Lapangan',
              actor: 'Penyelidik (Polri / PPNS / KPK)',
              description: 'Melakukan Olah TKP, observasi, surveillance, analisis dokumen untuk memverifikasi ada tidaknya dugaan pidana.',
              legalBasis: 'Pasal 165–175',
            },
            {
              id: 'node-3',
              stepNumber: 3,
              title: 'LHP + Gelar Perkara',
              actor: 'Tim Penyelidik & Pengawas Internal',
              description: 'Menyusun Laporan Hasil Penyelidikan (LHP) dan menggelar perkara untuk memutuskan kelayakan naik ke tahap Penyidikan.',
              legalBasis: 'Perkap & KUHAP Baru',
            },
            {
              id: 'node-4',
              stepNumber: 4,
              title: 'Penerbitan SPDP (Surat Dimulainya Penyidikan)',
              actor: 'Penyidik → Penuntut Umum & Terlapor',
              description: 'Penyidikan resmi dimulai. SPDP wajib dikirimkan kepada Penuntut Umum, pelapor, dan terlapor/tersangka.',
              legalBasis: 'Pasal 22–63',
            },
            {
              id: 'node-5',
              stepNumber: 5,
              title: 'Pengumpulan Alat Bukti & Pembuatan BAP',
              actor: 'Penyidik & Saksi / Ahli',
              description: 'Penyidik memeriksa saksi, ahli, dan menyita barang bukti. Pemeriksaan tersangka wajib direkam menggunakan kamera CCTV.',
              legalBasis: 'Pasal 22–63',
            },
            {
              id: 'node-6',
              stepNumber: 6,
              title: 'Penetapan Tersangka',
              actor: 'Penyidik',
              timeLimit: 'Diberitahukan max 1 hari',
              description: 'Didasarkan pada minimal 2 alat bukti sah yang cukup. Surat penetapan wajib diberitahukan ke tersangka maksimal 1 hari sejak terbit.',
              legalBasis: 'Pasal 89',
            },
            {
              id: 'node-7',
              stepNumber: 7,
              title: 'Penyerahan Berkas Tahap I',
              actor: 'Penyidik → Penuntut Umum',
              description: 'Penyidik menyerahkan berkas perkara hasil penyidikan kepada Jaksa Penuntut Umum untuk diteliti kelengkapannya.',
              legalBasis: 'Pasal 22–63',
            },
            {
              id: 'node-8',
              stepNumber: 8,
              title: 'Penelitian Berkas (P-19 atau P-21)',
              actor: 'Jaksa Penuntut Umum',
              description: 'Jaksa meneliti berkas. Jika belum lengkap diterbitkan P-19 (petunjuk perbaikan). Jika dinyatakan lengkap diterbitkan P-21.',
              legalBasis: 'Pasal 22–63',
              branches: [
                {
                  condition: 'Jika Berkas Belum Lengkap (P-19)',
                  target: 'Dikembalikan ke penyidik disertai petunjuk formil/materiil untuk dilengkapi.',
                },
                {
                  condition: 'Jika Berkas Lengkap (P-21)',
                  target: 'Penyidik bersiap melakukan penyerahan Tahap II kepada Penuntut Umum.',
                },
              ],
            },
            {
              id: 'node-9',
              stepNumber: 9,
              title: 'Penyerahan Tahap II (Tersangka & Barang Bukti)',
              actor: 'Penyidik → Penuntut Umum',
              description: 'Pelimpahan resmi tanggung jawab atas fisik Tersangka dan seluruh Barang Bukti dari Penyidik kepada Penuntut Umum untuk penuntutan.',
              legalBasis: 'Pasal 22–63',
            },
          ],
        },
      },
    ],
  },

  // PERTEMUAN 7
  {
    id: 7,
    numberStr: 'PERTEMUAN 07',
    title: 'Mekanisme Upaya Paksa Umum (Pasal 89–141)',
    shortDesc: 'Peta Upaya Paksa: Penetapan Tersangka, Penangkapan (max 1×24 jam), Penahanan (syarat objektif & subjektif), Penggeledahan & Penyitaan (jalur normal vs mendesak), serta pengelolaan benda sitaan di Rupbasan.',
    summaryQuote: 'Upaya paksa membatasi kemerdekaan asasi warga negara; karena itu, setiap pelaksanaannya tunduk pada syarat ketat, batas waktu presisi, dan pengawasan yudisial.',
    sections: [
      {
        id: 'peta-upaya-paksa-umum',
        title: 'A. Peta Ringkas Upaya Paksa Umum',
        content: [
          'Upaya paksa umum dalam KUHAP Baru mencakup 5 instrumen pokok dengan pembatasan yang terukur:',
        ],
        table: {
          headers: ['Tindakan Upaya Paksa', 'Syarat Materiil & Bukti', 'Batas Waktu Maksimal', 'Kontrol Yudisial'],
          rows: [
            ['1. Penetapan Tersangka', 'Minimal 2 alat bukti sah yang cukup.', 'Diberitahukan max 1 hari sejak terbit.', 'Dapat diuji melalui lembaga Praperadilan.'],
            ['2. Penangkapan', 'Minimal 2 alat bukti sah (dilarang jika hanya denda Kat II).', 'Paling lama 1 × 24 jam.', 'Wajib surat tugas & surat perintah penangkapan.'],
            ['3. Penahanan', 'Syarat Objektif (ancaman >=5 th) + Syarat Subjektif.', 'Sesuai jenjang penahanan peradilan.', 'Bentuk Rutan/Rumah/Kota; dapat ditangguhkan.'],
            ['4. Penggeledahan', 'Alasan kuat adanya bukti pidana di tempat tertentu.', 'Mendesak: minta persetujuan PN max 2×24 jam.', 'Izin Ketua PN / Approval pasca-tindakan.'],
            ['5. Penyitaan', 'Benda yang diduga kuat terkait tindak pidana.', 'Mendesak: minta persetujuan PN max 5 hari kerja.', 'Izin Ketua PN; disimpan resmi di Rupbasan.'],
          ],
        },
      },
      {
        id: 'flowchart-penangkapan',
        title: 'B. Flowchart Penangkapan (Pasal 89–141)',
        content: [
          'Penangkapan hanya dapat dilakukan dengan syarat legalitas ketat:',
        ],
        flowchart: {
          title: 'Alur Mekanisme Penangkapan Tersangka',
          subtitle: 'Syarat Legalitas 2 Alat Bukti Sah dan Batas Waktu 1 × 24 Jam',
          flowType: 'linear',
          steps: [
            {
              id: 'tangkap-1',
              stepNumber: 1,
              title: 'Kepemilikan Minimal 2 Alat Bukti Sah',
              actor: 'Penyidik',
              description: 'Petugas tidak boleh menangkap seseorang atas dasar dugaan semata tanpa didukung bukti permulaan yang sah.',
              legalBasis: 'Pasal 89–141 butir 2',
            },
            {
              id: 'tangkap-2',
              stepNumber: 2,
              title: 'Pemeriksaan Pengecualian Ancaman Pidana',
              actor: 'Penyidik',
              description: 'DILARANG melakukan penangkapan jika tindak pidana yang disangkakan hanya diancam pidana denda Kategori II (kecuali telah dipanggil 2 kali secara sah tetapi tidak hadir tanpa alasan sah).',
              legalBasis: 'Pasal 89–141',
            },
            {
              id: 'tangkap-3',
              stepNumber: 3,
              title: 'Pelaksanaan Tindakan Penangkapan',
              actor: 'Penyidik / Penyidik Pembantu',
              timeLimit: 'Maksimal 1 × 24 Jam',
              description: 'Menyerahkan surat perintah penangkapan kepada tersangka dan menyampaikan tembusannya kepada pihak keluarga.',
              legalBasis: 'Pasal 89–141',
            },
            {
              id: 'tangkap-4',
              stepNumber: 4,
              title: 'Keputusan Pasca 1 × 24 Jam',
              actor: 'Penyidik',
              description: 'Sebelum 1 × 24 jam berakhir, penyidik wajib mengambil keputusan yuridis: menerbitkan surat perintah penahanan (jika syarat terpenuhi) atau melepaskan tersangka demi hukum.',
              legalBasis: 'Pasal 89–141',
            },
          ],
        },
      },
      {
        id: 'decision-flow-penahanan',
        title: 'C. Decision Tree Penahanan: Syarat Objektif & Subjektif',
        content: [
          'Penahanan tidak boleh dilakukan secara otomatis, melainkan harus memenuhi akumulasi dua syarat:',
        ],
        comparisonBoxes: [
          {
            title: 'Syarat Objektif (Kriteria Hukum Acara)',
            description: 'Penahanan hanya dapat dijatuhkan apabila tindak pidana memenuhi kriteria ancaman hukuman:',
            items: [
              'Tindak pidana yang disangkakan diancam dengan pidana penjara 5 (lima) tahun atau lebih.',
              'ATAU tindak pidana khusus tertentu yang secara eksplisit dicantumkan dalam ketentuan undang-undang.',
            ],
          },
          {
            title: 'Syarat Subjektif (Kekhawatiran Penyidik)',
            description: 'Adanya kekhawatiran beralasan dari aparat penyidik bahwa tersangka:',
            items: [
              'Khawatir akan melarikan diri dari yurisdiksi penegak hukum.',
              'Khawatir akan merusak atau menghilangkan barang bukti.',
              'Khawatir akan mengulangi tindak pidana kembali.',
            ],
          },
        ],
        highlightBox: {
          title: 'Bentuk Penahanan & Penangguhan',
          text: 'Jenis penahanan mencakup: (1) Rutan (Rumah Tahanan Negara), (2) Tahanan Rumah, dan (3) Tahanan Kota. Penahanan dapat ditangguhkan dengan jaminan orang/uang, atau dibantarkan (pembantaran) demi rawat inap medis di rumah sakit.',
        },
      },
      {
        id: 'flowchart-penggeledahan-penyitaan',
        title: 'D. Dual-Track Flowchart: Penggeledahan & Penyitaan (Normal vs Mendesak)',
        content: [
          'KUHAP Baru mengatur dua jalur berbeda dalam pelaksanaan penggeledahan dan penyitaan:',
        ],
        flowchart: {
          title: 'Prosedur Penggeledahan & Penyitaan: Jalur Normal vs Jalur Mendesak',
          subtitle: 'Perbedaan Mekanisme Kontrol Yudisial Pengadilan Negeri',
          flowType: 'dual-track',
          tracks: [
            {
              trackName: 'Jalur Normal',
              trackBadge: 'Izin Awal',
              badgeVariant: 'blue',
              steps: [
                {
                  id: 'norm-1',
                  stepNumber: 1,
                  title: 'Permohonan Izin ke Pengadilan Negeri',
                  actor: 'Penyidik',
                  description: 'Penyidik mengajukan surat permohonan izin penggeledahan/penyitaan disertai uraian alasan perkara ke Ketua PN setempat.',
                  legalBasis: 'Pasal 89–141 butir 4.a',
                },
                {
                  id: 'norm-2',
                  stepNumber: 2,
                  title: 'Penerbitan Surat Penetapan Izin Ketua PN',
                  actor: 'Ketua Pengadilan Negeri',
                  description: 'Ketua PN meneliti alasan yuridis dan menerbitkan surat izin resmi penggeledahan/penyitaan.',
                  legalBasis: 'Pasal 89–141',
                },
                {
                  id: 'norm-3',
                  stepNumber: 3,
                  title: 'Pelaksanaan Tindakan Penggeledahan/Penyitaan',
                  actor: 'Penyidik',
                  description: 'Tindakan dilaksanakan dengan memperlihatkan surat izin Ketua PN kepada pemilik tempat/benda dan disaksikan 2 saksi lingkungan.',
                  legalBasis: 'Pasal 89–141',
                },
              ],
            },
            {
              trackName: 'Jalur Mendesak',
              trackBadge: 'Persetujuan Pasca-Tindakan',
              badgeVariant: 'amber',
              steps: [
                {
                  id: 'urg-1',
                  stepNumber: 1,
                  title: 'Tindakan Dilakukan Terlebih Dahulu',
                  actor: 'Penyidik di Lapangan',
                  description: 'Karena situasi mendesak dikhawatirkan barang bukti segera musnah/dipindahkan, tindakan penggeledahan/penyitaan dilakukan langsung.',
                  legalBasis: 'Pasal 89–141 butir 4.b',
                  isUrgent: true,
                },
                {
                  id: 'urg-2',
                  stepNumber: 2,
                  title: 'Permohonan Persetujuan Ex-Post ke PN',
                  actor: 'Penyidik → Ketua PN',
                  timeLimit: 'Geledah 2×24 jam · Sita 5 hari kerja',
                  description: 'Wajib meminta persetujuan Ketua PN pasca-tindakan paling lama 2 × 24 jam untuk penggeledahan, dan paling lama 5 hari kerja untuk penyitaan.',
                  legalBasis: 'Pasal 89–141',
                  isUrgent: true,
                },
                {
                  id: 'urg-3',
                  stepNumber: 3,
                  title: 'Penetapan Persetujuan atau Penolakan PN',
                  actor: 'Ketua Pengadilan Negeri',
                  description: 'Jika Ketua PN MENOLAK persetujuan, seluruh hasil penggeledahan/penyitaan batal demi hukum, barang bukti wajib dikembalikan seketika, dan tidak dapat digunakan di sidang.',
                  legalBasis: 'Exclusionary Rule',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'pengelolaan-benda-sitaan',
        title: 'E. Pengelolaan Benda Sitaan di Rupbasan',
        content: [
          'Pasal 89–141 butir 5 mengatur integritas dan akuntabilitas benda sitaan:',
          '1. Penyimpanan Resmi: Seluruh benda sitaan wajib disimpan di Rumah Penyimpanan Benda Sitaan Negara (Rupbasan).',
          '2. Larangan Penggunaan: Benda sitaan dilarang keras digunakan oleh penyidik atau pejabat manapun untuk kepentingan pribadi atau keperluan operasional dinas.',
          '3. Barang Cepat Rusak / Berbahaya: Terhadap benda sitaan yang lekas rusak atau berbahaya (seperti bahan kimia/narkotika), penyidik dapat melakukan lelang atau pemusnahan dengan izin Ketua Pengadilan Negeri.',
        ],
      },
    ],
  },

  // PERTEMUAN 8
  {
    id: 8,
    numberStr: 'PERTEMUAN 08',
    title: 'Pertanggungjawaban & Penyidikan Korporasi (Pasal 326–327)',
    shortDesc: 'Subjek hukum korporasi, kualifikasi pengurus fungsional, pemberi perintah, pemegang kendali, beneficial owner, mekanisme pemeriksaan, perwakilan korporasi, panggilan paksa, serta Restorative Justice dan DPA.',
    summaryQuote: 'Korporasi diakui sebagai subjek hukum mandiri yang dapat dimintai pertanggungjawaban pidana berdampingan atau terpisah dari orang perseorangan.',
    sections: [
      {
        id: 'subjek-dan-pihak-korporasi',
        title: 'A. Subjek Hukum Korporasi & Pihak yang Dapat Dituntut',
        content: [
          'Berdasarkan Pasal 326–327 UU No. 20 Tahun 2025, subjek hukum perkara korporasi mencakup:',
        ],
        table: {
          headers: ['Pihak Bertanggung Jawab', 'Karakter Yuridis & Posisi Fungsional', 'Bentuk Pertanggungjawaban'],
          rows: [
            ['Korporasi', 'Badan hukum (PT, Yayasan, Koperasi) atau badan usaha non-badan hukum (CV, Firma).', 'Dapat dijatuhi pidana denda, ganti rugi, penutupan usaha, atau pencabutan izin.'],
            ['Pengurus Fungsional', 'Direksi atau manajemen yang secara yuridis menjalankan roda organisasi korporasi.', 'Dapat dipidana perseorangan karena kealpaan atau kelalaian pengawasan.'],
            ['Pemberi Perintah', 'Pihak di dalam atau luar korporasi yang menginstruksikan dilakukannya kejahatan.', 'Dikenakan pidana pokok dan pemberatan hukuman sebagai aktor intelektual.'],
            ['Pemegang Kendali', 'Pihak yang memegang saham mayoritas atau kontrol keputusan strategis perseroan.', 'Dapat dimintai pertanggungjawaban bila kejahatan terjadi atas kebijakannya.'],
            ['Beneficial Owner', 'Pemilik manfaat akhir yang menikmati keuntungan finansial riil dari tindak pidana.', 'Sasaran perampasan aset kejahatan dan penuntutan pertanggungjawaban pidana.'],
          ],
        },
      },
      {
        id: 'mekanisme-pemeriksaan-korporasi',
        title: 'B. Mekanisme Pemanggilan & Perwakilan Korporasi',
        content: [
          '1. Pemanggilan Resmi: Surat panggilan dialamatkan kepada korporasi di alamat kantor atau domisili hukum resminya.',
          '2. Perwakilan Pengurus Sah: Korporasi wajib diwakili oleh pengurus yang sah (Direksi) atau penasihat hukum yang ditunjuk dengan surat kuasa khusus.',
          '3. Wakil Pengganti & Panggilan Paksa: Apabila pengurus mangkir setelah dipanggil 2 kali secara sah, penyidik berwenang memanggil paksa atau menentukan wakil pengganti yang ditunjuk hakim.',
        ],
      },
      {
        id: 'instrumen-rj-dpa',
        title: 'C. Instrumen Khusus: Restorative Justice & Deferred Prosecution Agreement (DPA)',
        content: [
          'Penyidikan perkara korporasi dalam KUHAP Baru tidak semata-mata mengejar pemidanaan denda, melainkan mengedepankan pemulihan ekonomi nasional:',
        ],
        comparisonBoxes: [
          {
            title: 'Restorative Justice Korporasi',
            description: 'Mendorong pemulihan kerugian korban dan perbaikan lingkungan secara nyata.',
            items: [
              'Pembayaran ganti rugi sukarela dan restitusi penuh kepada korban atau masyarakat terdampak.',
              'Pembersihan limbah atau perbaikan fasilitas publik yang rusak akibat operasional korporasi.',
              'Penyelesaian damai yang disetujui bersama di hadapan pengawas penuntut umum.',
            ],
          },
          {
            title: 'Deferred Prosecution Agreement (DPA)',
            description: 'Perjanjian penundaan penuntutan antara Penuntut Umum dengan korporasi.',
            items: [
              'Penuntutan pidana ke pengadilan ditunda selama korporasi memenuhi kewajiban pemulihan.',
              'Korporasi wajib membayar denda administratif dan menyetorkan pemulihan kerugian keuangan negara.',
              'Kewajiban merombak sistem kepatuhan internal (compliance system) di bawah supervisi kejaksaan.',
            ],
          },
        ],
      },
    ],
  },

  // PERTEMUAN 9
  {
    id: 9,
    numberStr: 'PERTEMUAN 09',
    title: 'Sistem Pembuktian dan Alat Bukti (Pasal 235)',
    shortDesc: 'Sistem pembuktian Negatief Wettelijk, perluasan 8 alat bukti sah dalam UU No. 20 Tahun 2025 (termasuk Bukti Elektronik), serta penerapan Exclusionary Rule atas bukti ilegal.',
    summaryQuote: 'Hakim tidak boleh menjatuhkan pidana kepada seseorang kecuali apabila dengan sekurang-kurangnya dua alat bukti yang sah ia memperoleh keyakinan bahwa tindak pidana benar terjadi.',
    sections: [
      {
        id: 'sistem-negatief-wettelijk',
        title: 'A. Sistem Pembuktian Negatief Wettelijk',
        content: [
          'KUHAP Baru secara tegas mempertahankan dan memperkuat sistem pembuktian menurut undang-undang secara negatif (negatief wettelijk stelsel).',
          'Artinya, pemidanaan memerlukan dua syarat kumulatif mutlak:',
          '1. Syarat Objektif: Adanya sekurang-kurangnya 2 (dua) alat bukti yang sah menurut Pasal 235.',
          '2. Syarat Subjektif: Hakim memperoleh keyakinan bahwa terdakwalah yang bersalah melakukan tindak pidana tersebut.',
        ],
        highlightBox: {
          title: 'Kombinasi Bukti Sah dan Keyakinan Hakim',
          text: 'Alat bukti sah tanpa keyakinan hakim tidak dapat menghasilkan vonis pemidanaan; sebaliknya, keyakinan hakim tanpa didukung 2 alat bukti sah yang sah juga batal demi hukum.',
        },
      },
      {
        id: 'delapan-alat-bukti-sah',
        title: 'B. Peta 8 Alat Bukti Sah (Pasal 235 KUHAP Baru)',
        content: [
          'Pasal 235 memperluas jenis alat bukti sah yang diakui di pengadilan pidana Indonesia:',
        ],
        table: {
          headers: ['No', 'Alat Bukti Sah', 'Definisi & Nilai Pembuktian Yuridis'],
          rows: [
            ['1', 'Keterangan Saksi', 'Keterangan saksi mengenai peristiwa pidana yang ia dengar sendiri, lihat sendiri, atau alami sendiri di bawah sumpah.'],
            ['2', 'Keterangan Ahli', 'Keterangan orang yang memiliki keahlian khusus (dokter forensik, balistik, akuntan, digital forensik) guna membuat terang perkara.'],
            ['3', 'Surat', 'Surat resmi yang dibuat atas sumpah jabatan atau dikuatkan dengan sumpah, akta otentik, serta visum et repertum.'],
            ['4', 'Keterangan Terdakwa', 'Apa yang terdakwa nyatakan di sidang tentang perbuatan yang dilakukannya atau yang ia ketahui/alami sendiri.'],
            ['5', 'Barang Bukti', 'Benda materiil yang digunakan dalam kejahatan, benda hasil kejahatan, atau objek fisik tindak pidana.'],
            ['6', 'Bukti Elektronik', 'Data elektronik, rekaman CCTV, dokumen digital, atau transmisi informasi elektronik yang terjamin integritas dan keotentikannya.'],
            ['7', 'Pengamatan / Penilaian Hakim', 'Pengetahuan atau pengamatan yang diperoleh hakim secara langsung dari persidangan (keadaan, sikap terdakwa/saksi).'],
            ['8', 'Alat Bukti Lain yang Sah', 'Setiap perkembangan teknologi atau metode pembuktian ilmiah lain yang diperoleh secara sah menurut hukum.'],
          ],
        },
      },
      {
        id: 'exclusionary-rule-pembuktian',
        title: 'C. Penerapan Exclusionary Rule dalam Pembuktian',
        content: [
          'Pasal 235 butir 8 secara tegas mengikat seluruh alat bukti dengan doktrin Exclusionary Rule.',
          'Apabila suatu alat bukti diperoleh melalui cara-cara yang bertentangan dengan hukum—seperti penggeledahan tanpa izin, penyadapan ilegal, intimidasi, kekerasan fisik, atau pemaksaan keterangan—maka bukti tersebut TIDAK DAPAT DITERIMA (inadmissible) dan dilarang dipertimbangkan dalam putusan hakim.',
        ],
      },
    ],
  },

  // PERTEMUAN 10
  {
    id: 10,
    numberStr: 'PERTEMUAN 10',
    title: 'Peradilan dan Persidangan (Pemeriksaan di Sidang Pengadilan)',
    shortDesc: 'Court Process Flowchart: Dari pelimpahan perkara ke PN, pembacaan dakwaan, eksepsi, putusan sela, pembuktian, requisitoir, pledoi, replik, duplik, hingga musyawarah hakim.',
    summaryQuote: 'Persidangan di pengadilan adalah panggung utama pencarian kebenaran materiil di mana prinsip akusatoir, pembuktian lisan, dan peradilan terbuka diuji secara langsung.',
    sections: [
      {
        id: 'court-process-flowchart',
        title: 'A. COURT PROCESS FLOWCHART: Rangkaian 11 Tahap Sidang Pengadilan',
        content: [
          'Seluruh proses persidangan pidana di Pengadilan Negeri wajib berjalan berurutan sesuai tahapan berikut. Klik pada tiap simpul untuk membuka penjelasan prosedurnya:',
        ],
        flowchart: {
          title: 'Tahapan Baku Sidang Pengadilan Negeri Perkara Pidana',
          subtitle: 'Dari Pelimpahan Berkas hingga Musyawarah Majelis & Pembacaan Putusan',
          flowType: 'linear',
          steps: [
            {
              id: 'sidang-1',
              stepNumber: 1,
              title: 'Pelimpahan Perkara ke Pengadilan Negeri',
              actor: 'Penuntut Umum → Ketua PN',
              description: 'Penuntut Umum melimpahkan berkas perkara dan surat dakwaan ke Pengadilan Negeri. Ketua PN menetapkan Majelis Hakim dan hari sidang pertama.',
              legalBasis: 'Pertemuan 10',
            },
            {
              id: 'sidang-2',
              stepNumber: 2,
              title: 'Pembacaan Surat Dakwaan',
              actor: 'Penuntut Umum di hadapan Terdakwa',
              description: 'Jaksa Penuntut Umum membacakan surat dakwaan yang menguraikan waktu, tempat, dan perbuatan pidana yang didakwakan secara cermat, jelas, dan lengkap.',
              legalBasis: 'Pertemuan 10 butir a',
            },
            {
              id: 'sidang-3',
              stepNumber: 3,
              title: 'Pengajuan Nota Keberatan (Eksepsi)',
              actor: 'Terdakwa / Penasihat Hukum',
              description: 'Terdakwa atau advokat mengajukan eksepsi mengenai kewenangan pengadilan (kompetensi absolut/relatif) atau surat dakwaan batal demi hukum.',
              legalBasis: 'Pertemuan 10 butir b',
            },
            {
              id: 'sidang-4',
              stepNumber: 4,
              title: 'Putusan Sela Majelis Hakim',
              actor: 'Majelis Hakim',
              description: 'Hakim memutus apakah eksepsi diterima (sidang berakhir) atau ditolak (sidang dilanjutkan ke tahap pembuktian pokok perkara).',
              legalBasis: 'Pertemuan 10 butir c',
            },
            {
              id: 'sidang-5',
              stepNumber: 5,
              title: 'Tahap Pembuktian',
              actor: 'Majelis Hakim, Jaksa, Saksi, Ahli, Terdakwa',
              description: 'Pemeriksaan saksi penuntut umum, saksi a de charge terdakwa, keterangan ahli forensik, pembacaan surat, uji bukti elektronik, dan keterangan terdakwa.',
              legalBasis: 'Pertemuan 10 butir d',
            },
            {
              id: 'sidang-6',
              stepNumber: 6,
              title: 'Pembacaan Tuntutan Pidana (Requisitoir)',
              actor: 'Penuntut Umum',
              description: 'Penuntut Umum membacakan analisis fakta sidang, pembuktian pasal-pasal, dan memohon agar terdakwa dijatuhi pidana tertentu.',
              legalBasis: 'Pertemuan 10 butir e',
            },
            {
              id: 'sidang-7',
              stepNumber: 7,
              title: 'Pembacaan Pembelaan (Pledoi)',
              actor: 'Terdakwa dan/atau Penasihat Hukum',
              description: 'Terdakwa dan advokat membacakan nota pembelaan untuk memohon pembebasan, pelepasan, atau keringanan hukuman.',
              legalBasis: 'Pertemuan 10 butir f',
            },
            {
              id: 'sidang-8',
              stepNumber: 8,
              title: 'Replik Penuntut Umum',
              actor: 'Penuntut Umum',
              description: 'Tanggapan resmi Penuntut Umum atas nota pembelaan (pledoi) yang diajukan oleh Terdakwa.',
              legalBasis: 'Pertemuan 10 butir f',
            },
            {
              id: 'sidang-9',
              stepNumber: 9,
              title: 'Duplik Terdakwa / Penasihat Hukum',
              actor: 'Terdakwa / Penasihat Hukum',
              description: 'Tanggapan akhir penasihat hukum terdakwa untuk mematahkan argumen replik penuntut umum.',
              legalBasis: 'Pertemuan 10 butir f',
            },
            {
              id: 'sidang-10',
              stepNumber: 10,
              title: 'Musyawarah Majelis Hakim',
              actor: 'Majelis Hakim (Tertutup)',
              description: 'Majelis Hakim bersidang tertutup untuk bermusyawarah menilai 2 alat bukti sah dan keyakinan hakim guna merumuskan amar putusan.',
              legalBasis: 'Pertemuan 10 butir g',
            },
            {
              id: 'sidang-11',
              stepNumber: 11,
              title: 'Pembacaan Putusan Akhir',
              actor: 'Majelis Hakim (Terbuka untuk Umum)',
              description: 'Vonis dibacakan di muka sidang yang terbuka untuk umum: Pemidanaan, Putusan Bebas (Vrijspraak), atau Putusan Lepas (Ontslag).',
              legalBasis: 'Pertemuan 10 butir g',
            },
          ],
        },
      },
    ],
  },

  // PERTEMUAN 11
  {
    id: 11,
    numberStr: 'PERTEMUAN 11',
    title: 'Putusan Pengadilan dan Upaya Hukum',
    shortDesc: '3 Jenis Putusan Hakim (Pemidanaan, Vrijspraak, Ontslag van Alle Rechtsvervolging), Upaya Hukum Biasa (Banding & Kasasi), serta Upaya Hukum Luar Biasa (Peninjauan Kembali berdasarkan Novum).',
    summaryQuote: 'Keadilan tidak berhenti pada putusan tingkat pertama; sistem peradilan pidana menyediakan mekanisme koreksi bertingkat melalui upaya hukum biasa dan luar biasa.',
    sections: [
      {
        id: 'tiga-jenis-putusan',
        title: 'A. 3 Jenis Putusan Akhir Hakim Peradilan Pidana',
        content: [
          'Setelah memeriksa fakta dan alat bukti di persidangan, Majelis Hakim hanya dapat menjatuhkan salah satu dari tiga jenis putusan berikut:',
        ],
        table: {
          headers: ['Jenis Putusan', 'Konsep & Syarat Yuridis', 'Status Perbuatan & Akibat Terdakwa'],
          rows: [
            ['1. Putusan Pemidanaan', 'Terdakwa terbukti secara sah dan meyakinkan bersalah melakukan tindak pidana yang didakwakan.', 'Perbuatan terbukti + merupakan tindak pidana + terdakwa dijatuhi sanksi pidana/tindakan.'],
            ['2. Putusan Bebas (Vrijspraak)', 'Kesalahan terdakwa atas perbuatan yang didakwakan tidak terbukti secara sah dan meyakinkan.', 'Perbuatan materiil tidak terbukti; Terdakwa dibebaskan seketika dan dipulihkan harkat martabatnya.'],
            ['3. Putusan Lepas (Ontslag van Alle Rechtsvervolging)', 'Perbuatan yang didakwakan terbukti, tetapi perbuatan tersebut bukan merupakan tindak pidana.', 'Perbuatan terbukti, namun masuk ranah perdata/administrasi atau ada alasan pemaaf/pembenar. Terdakwa dilepaskan dari segala tuntutan.'],
          ],
        },
      },
      {
        id: 'perbedaan-bebas-vs-lepas',
        title: 'B. Visual Perbandingan: Putusan Bebas vs Putusan Lepas',
        content: [
          'Perbedaan antara Vrijspraak dan Ontslag van Alle Rechtsvervolging merupakan konsep fundamental yang paling sering diuji:',
        ],
        comparisonBoxes: [
          {
            title: 'Putusan Bebas (Vrijspraak)',
            description: 'Gugurnya perkara karena ketidakterbuktian fakta materiil.',
            items: [
              'Alat bukti tidak cukup atau tidak meyakinkan hakim.',
              'Fakta dakwaan jaksa tidak terbukti dilakukan oleh terdakwa.',
              'Terdakwa harus segera dibebaskan dari tahanan seketika putusan diucapkan.',
            ],
          },
          {
            title: 'Putusan Lepas (Ontslag van Alle Rechtsvervolging)',
            description: 'Fakta perbuatan terbukti, tetapi bukan tindak pidana.',
            items: [
              'Perbuatan yang dilakukan terbukti nyata di persidangan.',
              'Namun perbuatan tersebut merupakan perbuatan perdata, hukum dagang, atau hukum tata usaha negara.',
              'Atau terdapat alasan pemaaf (gangguan jiwa) / alasan pembenar (bela paksa/noodweer).',
            ],
          },
        ],
      },
      {
        id: 'upaya-hukum-biasa-luar-biasa',
        title: 'C. Upaya Hukum Biasa vs Upaya Hukum Luar Biasa',
        content: [
          'Terhadap putusan yang dijatuhkan, para pihak (Terdakwa maupun Penuntut Umum) berhak menempuh upaya hukum koreksi:',
        ],
        table: {
          headers: ['Klasifikasi Upaya Hukum', 'Instansi / Mahkamah', 'Syarat & Alasan Pengajuan'],
          rows: [
            ['Upaya Hukum Biasa: Banding', 'Pengadilan Tinggi (PT)', 'Diajukan terhadap putusan Pengadilan Negeri yang belum inkracht; menguji kembali fakta materiil dan penerapan hukum (judex facti).'],
            ['Upaya Hukum Biasa: Kasasi', 'Mahkamah Agung (MA)', 'Menguji penerapan hukum, apakah ada peraturan yang tidak diterapkan atau diterapkan salah, atau pengadilan melampaui wewenangnya (judex juris).'],
            ['Upaya Hukum Luar Biasa: Peninjauan Kembali (PK)', 'Mahkamah Agung (MA)', 'Diajukan terhadap putusan yang telah inkracht berdasarkan Novum (keadaan/bukti baru) atau adanya kekhilafan hakim yang nyata.'],
          ],
        },
      },
    ],
  },

  // PERTEMUAN 12
  {
    id: 12,
    numberStr: 'PERTEMUAN 12',
    title: 'Upaya Paksa Khusus (Pasal 136–141)',
    shortDesc: 'Penyadapan, Pemeriksaan Surat, Pemblokiran, dan Larangan Keluar Wilayah Indonesia: Konsep hak asasi, tabel komparatif matriks, flowchart pemblokiran jalur normal vs mendesak, alur pemeriksaan surat, serta larangan ke luar negeri.',
    summaryQuote: 'Upaya paksa khusus membatasi privasi, kerahasiaan korespondensi, aset keuangan, dan kebebasan bergerak; tindakan ini bukan rangkaian otomatis melainkan instrumen selektif berizin yudisial.',
    sections: [
      {
        id: 'konsep-umum-upaya-paksa-khusus',
        title: 'A. Konsep Umum & Posisi dalam Upaya Paksa (Pasal 1 angka 14 & Pasal 89)',
        content: [
          'Penyadapan, Pemeriksaan Surat, Pemblokiran, dan Larangan Keluar Wilayah Indonesia dikategorikan secara tegas sebagai Upaya Paksa karena membatasi hak asasi dan kepentingan hukum tertentu (privasi, kerahasiaan korespondensi, aset/data keuangan, serta kebebasan bergerak).',
          'Keempat tindakan ini BUKAN satu rangkaian otomatis, melainkan harus dipilih secara proporsional sesuai kebutuhan pembuktian perkara, pejabat yang berwenang, serta syarat dan mekanisme kontrol hukum masing-masing.',
        ],
      },
      {
        id: 'ringkasan-tabel-upaya-paksa-khusus',
        title: 'B. Matriks Komparatif Upaya Paksa Khusus (Tabel Sumber Resmi)',
        content: [
          'Berikut adalah matriks komparatif empat upaya paksa khusus sebagaimana disajikan dalam materi resmi:',
        ],
        table: {
          headers: ['Jenis Upaya Paksa', 'Pejabat Berwenang', 'Subjek / Objek Tindakan', 'Jangka Waktu Maksimal', 'Kontrol Yudisial (PN)'],
          rows: [
            ['Penyadapan', 'Penyidik', 'Perekaman & Transmisi Informasi Elektronik', 'Diatur dalam UU Penyadapan', 'Sesuai ketentuan UU Khusus'],
            ['Pemeriksaan Surat', 'Penyidik', 'Surat di Kantor Pos / Pengangkutan', 'Pengembalian max 2 Hari (jika tidak terkait)', 'Tembusan Berita Acara ke PN'],
            ['Pemblokiran', 'Penyidik, Penuntut Umum, atau Hakim', 'Harta, Rekening Bank, Akun Daring, Data Elektronik', '1 Tahun (Dapat diperpanjang 2 × 6 Bulan)', 'Izin Ketua PN / Approval ex-post 2 × 24 jam'],
            ['Larangan Keluar Wilayah', 'Penyidik, Penuntut Umum, atau Hakim', 'Tersangka / Terdakwa', '6 Bulan (Dapat diperpanjang 1 × 6 Bulan)', 'Koordinasi dengan kementerian keimigrasian'],
          ],
        },
      },
      {
        id: 'penyadapan-detail',
        title: 'C. Penyadapan (Pasal 1 angka 36 & Pasal 136)',
        content: [
          'Definisi: Penyadapan adalah kegiatan memperoleh informasi pribadi secara rahasia untuk kepentingan penegakan hukum melalui mendengarkan, merekam komunikasi, membelokkan, menghambat, mengubah, menyambungkan komunikasi, memasang alat pada jaringan/perekam, serta mencatat transmisi Informasi/Dokumen Elektronik melalui internet atau jaringan telekomunikasi.',
          'Kewenangan & Tujuan: Dilakukan secara eksklusif oleh Penyidik untuk kepentingan Penyidikan tindak pidana.',
          'Pengaturan Lanjutan: Tata cara operasional rinci didelegasikan kepada Undang-Undang mengenai Penyadapan (RUU Penyadapan).',
        ],
      },
      {
        id: 'flowchart-pemeriksaan-surat',
        title: 'D. Pemeriksaan Surat (Pasal 137–139) & Flowchart Prosedur',
        content: [
          'Dasar Kewenangan: Adanya alasan yang kuat diduga surat terkait dengan perkara pidana yang sedang diperiksa.',
          'Saluran Surat: Surat yang berada dalam jalur pengiriman Kantor Pos, Perusahaan Telekomunikasi, atau Perusahaan Pengangkutan.',
        ],
        flowchart: {
          title: 'Flowchart Mekanisme Pemeriksaan Surat',
          subtitle: 'Prosedur Tanda Terima, Pemeriksaan Keterkaitan, dan Batas Waktu Pengembalian 2 Hari',
          flowType: 'branching',
          steps: [
            {
              id: 'surat-1',
              stepNumber: 1,
              title: 'Ada Alasan Kuat Surat Terkait Perkara',
              actor: 'Penyidik',
              description: 'Penyidik mengidentifikasi surat dalam jalur pengiriman Kantor Pos, Telekomunikasi, atau Ekspedisi.',
              legalBasis: 'Pasal 137',
            },
            {
              id: 'surat-2',
              stepNumber: 2,
              title: 'Permintaan Penyerahan Disertai Tanda Terima',
              actor: 'Penyidik & Petugas Ekspedisi',
              description: 'Penyidik meminta surat dari penyelenggara pengiriman dengan memberikan Tanda Terima resmi.',
              legalBasis: 'Pasal 138',
            },
            {
              id: 'surat-3',
              stepNumber: 3,
              title: 'Pemeriksaan Isi Surat oleh Penyidik',
              actor: 'Penyidik',
              description: 'Penyidik memeriksa apakah isi surat berhubungan langsung dengan perkara yang sedang disidik.',
              legalBasis: 'Pasal 138',
              branches: [
                {
                  condition: 'Jika Terkait Perkara',
                  target: 'Surat dilampirkan pada berkas perkara sebagai barang bukti yang sah.',
                },
                {
                  condition: 'Jika Tidak Terkait Perkara',
                  target: 'Wajib diproses untuk segera dikembalikan ke jalur pengiriman:',
                  subNodes: [
                    'Diberi cap resmi "telah dibuka oleh Penyidik"',
                    'Dilengkapi tanggal, tanda tangan, dan identitas Penyidik pemeriksa',
                    'Ditutup kembali secara rapi',
                    'Dikembalikan ke kantor pos/pengangkutan paling lama 2 Hari',
                  ],
                },
              ],
            },
            {
              id: 'surat-4',
              stepNumber: 4,
              title: 'Kewajiban Kerahasiaan & Berita Acara',
              actor: 'Penyidik',
              description: 'Penyidik wajib merahasiakan isi surat yang dikembalikan dan membuat Berita Acara resmi dengan tembusan kepada Kepala Kantor Pengiriman serta Ketua Pengadilan Negeri.',
              legalBasis: 'Pasal 139',
            },
          ],
        },
      },
      {
        id: 'flowchart-pemblokiran-khusus',
        title: 'E. Pemblokiran (Pasal 1 angka 37 & Pasal 140) & Dual-Track Flowchart',
        content: [
          'Definisi & Objek: Mencegah sementara akses penggunaan atau pemindahan atas harta kekayaan, bukti kepemilikan, transaksi perbankan, akun platform daring, serta Informasi/Dokumen Elektronik.',
          'Pejabat Berwenang: Penyidik, Penuntut Umum, atau Hakim.',
          'Jangka Waktu: Paling lama 1 Tahun dan dapat diperpanjang 2 × 6 Bulan.',
        ],
        flowchart: {
          title: 'Flowchart Pemblokiran: Jalur Normal vs Jalur Mendesak',
          subtitle: 'Ketentuan 4 Kondisi Mendesak dan Batas Waktu 2 × 24 Jam Pasca-Tindakan',
          flowType: 'dual-track',
          tracks: [
            {
              trackName: 'Jalur Normal',
              trackBadge: 'Izin Ketua PN',
              badgeVariant: 'blue',
              steps: [
                {
                  id: 'blok-norm-1',
                  stepNumber: 1,
                  title: 'Pengajuan Permohonan Izin ke Ketua PN',
                  actor: 'Penyidik / Penuntut Umum / Hakim',
                  description: 'Mengajukan permohonan pemblokiran rekening/aset/akun disertai uraian urgensi pembuktian.',
                  legalBasis: 'Pasal 140 ayat (4)',
                },
                {
                  id: 'blok-norm-2',
                  stepNumber: 2,
                  title: 'Penelitian oleh Ketua Pengadilan Negeri',
                  actor: 'Ketua PN',
                  timeLimit: 'Paling lama 2 Hari',
                  description: 'Ketua Pengadilan Negeri meneliti permohonan paling lama 2 hari dan menerbitkan surat izin penetapan.',
                  legalBasis: 'Pasal 140 ayat (4)',
                },
                {
                  id: 'blok-norm-3',
                  stepNumber: 3,
                  title: 'Pelaksanaan Pemblokiran',
                  actor: 'Penyedia Jasa Keuangan / Platform Digital',
                  timeLimit: 'Maks 1 Tahun (dapat diperpanjang 2 × 6 Bln)',
                  description: 'Pemblokiran efektif berjalan untuk jangka waktu paling lama 1 tahun, dapat diperpanjang 2 × 6 bulan.',
                  legalBasis: 'Pasal 140 ayat (5)',
                },
              ],
            },
            {
              trackName: 'Jalur Mendesak',
              trackBadge: 'Tanpa Izin Awal',
              badgeVariant: 'amber',
              steps: [
                {
                  id: 'blok-urg-1',
                  stepNumber: 1,
                  title: 'Terpenuhinya 1 dari 4 Kondisi Mendesak',
                  actor: 'Penyidik di Lapangan',
                  description: 'Pemblokiran tanpa izin awal hanya boleh jika ada: (i) Potensi dialihkannya harta kekayaan, (ii) Tindak pidana terkait ITE, (iii) Permufakatan tindak pidana terorganisasi, atau (iv) Situasi mendesak berdasarkan penilaian Penyidik.',
                  legalBasis: 'Pasal 140 ayat (7)',
                  isUrgent: true,
                },
                {
                  id: 'blok-urg-2',
                  stepNumber: 2,
                  title: 'Tindakan Pemblokiran Dilakukan Terlebih Dahulu',
                  actor: 'Penyidik',
                  description: 'Penyidik langsung memerintahkan pemblokiran sementara kepada bank atau pengelola sistem elektronik.',
                  legalBasis: 'Pasal 140 ayat (7)',
                  isUrgent: true,
                },
                {
                  id: 'blok-urg-3',
                  stepNumber: 3,
                  title: 'Permohonan Persetujuan Ex-Post ke Ketua PN',
                  actor: 'Penyidik → Ketua PN',
                  timeLimit: 'Paling lama 2 × 24 Jam',
                  description: 'Penyidik wajib meminta persetujuan Ketua PN paling lama 2 × 24 jam setelah tindakan pemblokiran dilaksanakan.',
                  legalBasis: 'Pasal 140 ayat (8)',
                  isUrgent: true,
                },
                {
                  id: 'blok-urg-4',
                  stepNumber: 4,
                  title: 'Penetapan oleh Ketua Pengadilan Negeri',
                  actor: 'Ketua PN',
                  timeLimit: 'Paling lama 2 × 24 Jam',
                  description: 'Ketua PN mengeluarkan penetapan persetujuan atau penolakan paling lama 2 × 24 jam sejak permohonan diterima.',
                  legalBasis: 'Pasal 140 ayat (8)',
                },
                {
                  id: 'blok-urg-5',
                  stepNumber: 5,
                  title: 'Pengakhiran Pemblokiran (Bila Ditolak)',
                  actor: 'Penyidik & Pihak Terkait',
                  timeLimit: 'Paling lambat 3 Hari Kerja',
                  description: 'Pemblokiran WAJIB DIBUKA paling lambat 3 Hari Kerja jika izin/persetujuan ditolak PN, perkara dihentikan (SP3/SKP2), atau praperadilan menyatakan penetapan tersangka tidak sah.',
                  legalBasis: 'Pasal 140 ayat (11–13)',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'flowchart-larangan-keluar-wilayah',
        title: 'F. Larangan Keluar Wilayah Indonesia (Pasal 141)',
        content: [
          'Sasaran & Tujuan: Dikenakan kepada Tersangka atau Terdakwa guna mencegah yang bersangkutan melarikan diri ke luar negeri.',
        ],
        flowchart: {
          title: 'Flowchart Larangan Keluar Wilayah Indonesia',
          subtitle: 'Jangka Waktu Maksimal 6 Bulan dan Koordinasi Keimigrasian',
          flowType: 'linear',
          steps: [
            {
              id: 'cegah-1',
              stepNumber: 1,
              title: 'Subjek Terpenuhi: Tersangka atau Terdakwa',
              actor: 'Penyidik / Penuntut Umum / Hakim',
              description: 'Tindakan pencegahan hanya dapat dijatuhkan kepada pihak yang telah menyandang status hukum resmi sebagai Tersangka atau Terdakwa.',
              legalBasis: 'Pasal 141',
            },
            {
              id: 'cegah-2',
              stepNumber: 2,
              title: 'Penerbitan Surat Keputusan Perintah Larangan',
              actor: 'Penyidik, Penuntut Umum, atau Hakim',
              description: 'Menerbitkan surat keputusan larangan bepergian ke luar negeri untuk kepentingan pemeriksaan peradilan.',
              legalBasis: 'Pasal 141',
            },
            {
              id: 'cegah-3',
              stepNumber: 3,
              title: 'Koordinasi Kementerian Bidang Keimigrasian',
              actor: 'Aparat Penegak Hukum & Ditjen Imigrasi',
              description: 'Mendaftarkan nama tersangka/terdakwa ke dalam daftar cegah pada seluruh pintu perlintasan dan bandara internasional.',
              legalBasis: 'Pasal 141',
            },
            {
              id: 'cegah-4',
              stepNumber: 4,
              title: 'Durasi & Perpanjangan Waktu',
              actor: 'Keimigrasian & Aparat Penegak Hukum',
              timeLimit: 'Maks 6 Bulan (dapat diperpanjang 1 × 6 Bulan)',
              description: 'Larangan berlaku paling lama 6 bulan dan hanya dapat diperpanjang satu kali sebanyak 6 bulan (total maksimal 12 bulan). Tata cara lanjutan diatur Peraturan Pemerintah.',
              legalBasis: 'Pasal 141',
            },
          ],
        },
      },
    ],
  },
];
