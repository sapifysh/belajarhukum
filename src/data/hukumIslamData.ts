export interface ProcessStepNode {
  id: string;
  stepNumber?: string | number;
  title: string;
  actor?: string;
  timeLimit?: string;
  description: string;
  legalBasis?: string;
  badge?: string;
  isUrgent?: boolean;
  branches?: {
    condition: string;
    target: string;
    subNodes?: string[];
  }[];
}

export interface FlowchartData {
  title: string;
  subtitle?: string;
  flowType?: 'linear' | 'branching' | 'dual-track' | 'decision';
  tracks?: {
    trackName: string;
    trackBadge?: string;
    badgeVariant?: 'blue' | 'amber' | 'emerald' | 'rose' | 'purple';
    steps: ProcessStepNode[];
  }[];
  steps?: ProcessStepNode[];
}

export interface TimelineData {
  title: string;
  items: {
    stage: string;
    badge?: string;
    description: string;
    details?: string[];
  }[];
}

export interface QuickReviewItem {
  question: string;
  answer: string;
  keyRule?: string;
}

export interface ProgressionStep {
  step: string;
  label: string;
  desc: string;
  legalBasis?: string;
}

export interface EvidenceItem {
  id: number;
  name: string;
  desc: string;
  legalRule?: string;
}

export interface TopicSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  keyPoints?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  highlightBox?: {
    title: string;
    text: string;
  };
  comparisonBoxes?: {
    title: string;
    description: string;
    items: string[];
  }[];
  flowchart?: FlowchartData;
  timeline?: TimelineData;
  quickReview?: QuickReviewItem[];
  progressionSteps?: ProgressionStep[];
  evidenceGrid?: EvidenceItem[];
}

export interface Topic {
  id: number;
  numberStr: string;
  title: string;
  shortDesc: string;
  summaryQuote: string;
  sections: TopicSection[];
}

export const HUKUM_ISLAM_METADATA = {
  courseCode: 'HKO60030',
  credits: '2 SKS',
  faculty: 'Fakultas Hukum',
  syllabus: 'RPS Sub CPMK 1 – 5',
  references: ['Prof. Daud Ali', 'Prof. Hazairin'],
  coverage: 'Topik 1 – 5 (Persiapan UTS Komprehensif)',
};

export const TOPICS_DATA: Topic[] = [
  {
    id: 1,
    numberStr: 'TOPIK 01',
    title: 'Alasan Mempelajari Hukum Islam di Fakultas Hukum',
    shortDesc: 'Lima pilar alasan fundamental pengajaran Hukum Islam dalam kurikulum pendidikan hukum di Indonesia.',
    summaryQuote: 'Hukum Islam merupakan salah satu pilar utama dalam kurikulum pendidikan hukum di Indonesia yang dipelajari berdasarkan lima alasan fundamental.',
    sections: [
      {
        id: 'pengantar-t1',
        title: 'Landasan Fundamental Kurikulum',
        content: [
          'Hukum Islam merupakan salah satu pilar utama dalam kurikulum pendidikan tinggi hukum di Indonesia.',
          'Keberadaannya bukan sekadar pelengkap mata kuliah keagamaan, melainkan fondasi sistem hukum yang hidup (living law) dan diakui dalam tata hukum nasional melalui lima alasan fundamental.'
        ],
      },
      {
        id: 'alasan-historis',
        title: '1. Alasan Sejarah (Historis)',
        content: [
          'Hukum Islam telah dipraktikkan secara riil oleh masyarakat Nusantara sejak masuknya Islam jauh sebelum kedatangan penjajah Barat.',
          'Pada masa kolonial Belanda, seluruh Sekolah Tinggi Hukum (Rechtshogeschool) secara resmi mewajibkan pengajaran Hukum Islam (yang saat itu dikenal dalam literatur kolonial sebagai Mohammedan Recht).',
          'Hal ini membuktikan kontinuitas historis yang tidak terputus dalam sejarah peradilan dan pembentukan hukum di kepulauan Indonesia.'
        ],
        keyPoints: [
          'Dipraktikkan masyarakat Nusantara sejak awal masuknya Islam.',
          'Diajarkan wajib di Rechtshogeschool pada masa Hindia Belanda.',
          'Dikenal dengan istilah hukum Mohammedan Recht.'
        ]
      },
      {
        id: 'alasan-demografis',
        title: '2. Alasan Penduduk (Demografis)',
        content: [
          'Mayoritas penduduk Indonesia beragama Islam, sehingga nilai-nilai serta aturan hukum Islam berakar kuat dalam kesadaran hukum masyarakat.',
          'Memahami hukum yang hidup (living law) dan dipatuhi oleh sebagian besar warga negara merupakan kewajiban akademis dan etis bagi setiap calon penegak hukum, hakim, advokat, maupun perancang perundang-undangan di Indonesia.'
        ],
        keyPoints: [
          'Mayoritas mutlak penduduk Indonesia adalah muslim.',
          'Hukum Islam berfungsi sebagai living law yang ditaati secara sukarela maupun formal.',
          'Kewajiban akademis calon sarjana hukum agar tidak terasing dari realitas masyarakat.'
        ]
      },
      {
        id: 'alasan-yuridis',
        title: '3. Alasan Yuridis Normatif & Formal',
        content: [
          'Hukum Islam memiliki kekuatan mengikat secara ganda di Indonesia:',
          'Secara Yuridis Normatif: Memiliki sanksi kemasyarakatan dan moral keagamaan yang mengikat sanubari umat Islam secara sukarela.',
          'Secara Yuridis Formal: Telah diserap dan diundangkan ke dalam hukum positif negara melalui peraturan perundang-undangan resmi, antara lain:'
        ],
        keyPoints: [
          'UU No. 1 Tahun 1974 tentang Perkawinan.',
          'UU No. 7 Tahun 1989 jo UU No. 3 Tahun 2006 tentang Peradilan Agama.',
          'UU No. 23 Tahun 2011 tentang Pengelolaan Zakat.',
          'Kompilasi Hukum Islam (KHI) melalui Inpres No. 1 Tahun 1991.',
          'UU No. 21 Tahun 2008 tentang Perbankan Syariah dan regulasi ekonomi syariah.'
        ],
        highlightBox: {
          title: 'Kekuatan Normatif vs Formal',
          text: 'Hukum Islam di Indonesia berlaku secara normatif melalui kesadaran batin pemeluknya dan berlaku formal melalui kodifikasi hukum positif Republik Indonesia.'
        }
      },
      {
        id: 'alasan-konstitusional',
        title: '4. Alasan Konstitusional',
        content: [
          'Pengajaran dan penerapan Hukum Islam memiliki legitimasi hukum tertinggi dalam konstitusi Republik Indonesia, yaitu berdasarkan:',
          'Pasal 29 ayat (1) UUD 1945: "Negara berdasar atas Ketuhanan Yang Maha Esa" dan Sila Pertama Pancasila.',
          'Menurut Prof. Hazairin, konsekuensi dari prinsip ketuhanan ini adalah bahwa negara tidak boleh membuat aturan hukum yang bertentangan dengan kaidah agama, dan sebaliknya negara wajib memfasilitasi pelaksanaan hukum agama bagi para pemeluknya.'
        ],
        highlightBox: {
          title: 'Doktrin Prof. Hazairin',
          text: 'Negara Republik Indonesia tidak boleh membuat aturan yang bertentangan dengan kaidah agama dan negara wajib memfasilitasi pelaksanaannya sesuai amanat Pasal 29 ayat (1) UUD 1945.'
        }
      },
      {
        id: 'alasan-ilmiah',
        title: '5. Alasan Ilmiah (Akademis)',
        content: [
          'Hukum Islam memenuhi seluruh persyaratan keilmuan secara ilmiah:',
          '• Landasan Ontologis: Memiliki objek kajian yang jelas, nyata, dan terstruktur.',
          '• Landasan Epistemologis: Memiliki metodologi penggalian hukum yang komprehensif (Ushul Fiqh).',
          '• Landasan Aksiologis: Memiliki tujuan nilai dan kemanfaatan yang luhur (Maqasid Asy-Syari\'ah).',
          'Hukum Islam merupakan salah satu dari tiga sistem hukum terbesar di dunia (Islamic Legal System) berdampingan dengan Civil Law System dan Common Law System, sehingga sangat penting dalam studi perbandingan hukum (comparative law).'
        ],
        keyPoints: [
          'Memenuhi syarat ilmiah ontologis, epistemologis, dan aksiologis.',
          'Diakui secara universal sebagai Islamic Legal System dunia.',
          'Krusial untuk riset perbandingan sistem hukum (comparative law).'
        ]
      }
    ]
  },
  {
    id: 2,
    numberStr: 'TOPIK 02',
    title: 'Islam dan Kerangka Dasar Ajaran Islam',
    shortDesc: 'Akar kata Islam, tiga aspek hubungan ajaran, kerangka trilogi sistem (Aqidah, Syariah, Akhlak), serta kritik atas sekularisme.',
    summaryQuote: 'Islam adalah sistem holistik yang mencakup Aqidah sebagai fondasi teologis, Syariah/Fiqih sebagai sistem hukum, dan Akhlak sebagai sistem moral spiritual.',
    sections: [
      {
        id: 'akar-kata-islam',
        title: 'Pengertian dan Akar Kata "Islam"',
        content: [
          'Nama "Islam" ditentukan langsung oleh Allah SWT dalam wahyu Al-Qur\'an (sebagaimana ditegaskan dalam QS. Ali Imran: 19 dan QS. Al-Ma\'idah: 3).',
          'Hal ini secara fundamental membedakan Islam dari agama-agama lain di dunia yang penamaannya lazimnya didasarkan pada nama pendiri/pembawa (seperti Kristen dari Kristus, Buddha dari Gautama Buddha), nama suku bangsa (seperti Yahudi dari suku Yehuda), atau nama wilayah geografis (seperti Hindu dari lembah Indus).',
          'Secara etimologi, kata Islam berakar dari rumpun konsonan Arab S-L-M (Salm, Silm, Salma) yang mengandung makna:',
          '1. Damai dan ketenteraman',
          '2. Keselamatan dan kesejahteraan',
          '3. Tunduk, patuh, dan berserah diri secara tulus kepada kehendak Allah SWT.'
        ],
        highlightBox: {
          title: 'Keunikan Nomenklatur Islam',
          text: 'Nama "Islam" bukan kreasi manusia atau ciptaan Nabi Muhammad SAW, melainkan nama Ilahi yang diwahyukan langsung dalam Kitab Suci Al-Qur\'an.'
        }
      },
      {
        id: 'tiga-aspek-ajaran',
        title: 'Tiga Aspek Utama Ajaran Islam',
        content: [
          'Ajaran Islam mengintegrasikan tiga dimensi relasional kehidupan secara utuh tanpa pemisahan:'
        ],
        comparisonBoxes: [
          {
            title: '1. Hubungan Vertikal (Hablum Minallah)',
            description: 'Dimensi ketuhanan dan peribadatan langsung.',
            items: [
              'Tunduk dan patuh secara mutlak kepada perintah Allah SWT.',
              'Berserah diri secara penuh dalam ibadah mahdhah.',
              'Mengesakan Allah dalam penciptaan, kekuasaan, dan penyembahan.'
            ]
          },
          {
            title: '2. Hubungan Horizontal (Hablum Minannas)',
            description: 'Dimensi kemanusiaan dan muamalah sosial.',
            items: [
              'Menyelamatkan, menentramkan, dan menjaga hak sesama makhluk.',
              'Menebarkan kedamaian, keadilan sosial, dan kebajikan muamalah.',
              'Melindungi hak hidup, harta, keturunan, dan martabat orang lain.'
            ]
          },
          {
            title: '3. Hubungan Kedalam (Jiwa / Hati)',
            description: 'Dimensi kedamaian internal dan spiritualitas batin.',
            items: [
              'Mewujudkan kedamaian internal dalam sanubari manusia.',
              'Mencapai ketenangan batin yang sejati (nafsul muthma\'innah).',
              'Penyucian jiwa (tazkiyatun nafs) dari penyakit hati seperti iri dan dengki.'
            ]
          }
        ]
      },
      {
        id: 'kerangka-dasar-sistem',
        title: 'Kerangka Dasar Ajaran Islam (Trilogi Sistem Ajaran)',
        content: [
          'Islam merupakan suatu sistem holistik yang terdiri dari tiga komponen utama yang terpadu dan tidak dapat dipisahkan satu sama lain:'
        ],
        table: {
          headers: ['Komponen Utama', 'Disiplin Ilmu / Sistem Keilmuan', 'Dimensi & Pokok Bahasan'],
          rows: [
            [
              'AQIDAH',
              'Ilmu Kalam / Tauhid / Ushuluddin',
              'Sistem Teologi / Keyakinan / Iman (Rukun Iman). Berfungsi sebagai fondasi utama dan akar dari seluruh bangunan ajaran Islam.'
            ],
            [
              'SYARIAH / FIQIH',
              'Ilmu Fiqh / Ushul Fiqh',
              'Sistem Hukum (Legal System). Mengatur ketetapan normatif praktis, terbagi dua cabang: Ibadah (vertikal) dan Muamalat (horizontal).'
            ],
            [
              'AKHLAK',
              'Ilmu Tasawuf / Etika Islam',
              'Sistem Moral/Etika (Ethical System) / Ihsan. Mengatur budi pekerti tingkah laku lahiriah dan kesucian serta ketulusan jiwa batiniah.'
            ]
          ]
        },
        highlightBox: {
          title: 'Ibarat Pohon yang Kokoh',
          text: 'Aqidah adalah akarnya yang tertanam menghujam ke dalam bumi, Syariah adalah batang, cabang, dan ranting hukumnya yang menjulang, dan Akhlak adalah buah harum yang dirasakan manfaatnya oleh semesta.'
        }
      },
      {
        id: 'analisis-sekularisme',
        title: 'Analisis Islam Terhadap Sekularisme',
        content: [
          'Etimologi dan Konteks Sejarah Barat:',
          'Kata sekularisme berasal dari bahasa Latin saecularis / saeculum yang bermakna waktu sekarang, duniawi, atau masa kini.',
          'Berdasarkan Kamus Webster, sekularisme diartikan sebagai pemindahan hak milik atau pengawasan otoritas dari kekuasaan gereja kepada institusi sipil keduniawian.',
          'Konsep sekularisme lahir dan tumbuh subur di Eropa Barat akibat trauma historis kelam: dominasi absolut kekuasaan lembaga gereja feodal yang disalahgunakan serta tindakan represif pengekangan keras terhadap perkembangan ilmu pengetahuan dan sains (contoh nyata: persekusi dan persidangan inkuisisi terhadap Galileo Galilei).',
          '',
          'Pandangan Kritis Islam Terhadap Sekularisme:',
          '1. Islam tidak mengenal konsep pemisahan sakral-sekular (sekularisme). Ajaran Islam mencakup urusan duniawi sekaligus ukhrawi dalam satu kesatuan tauhid.',
          '2. Dalam Islam tidak ada hierarki kependetaan atau lembaga gereja yang memonopoli kebenaran; tidak ada lembaga perantara (*tawassul*) antara seorang hamba dengan Tuhan sebagaimana yang ada dalam hierarki gereja abad pertengahan.',
          '3. Al-Qur\'an memuat ratusan ayat tentang fakta ilmiah alam semesta dan mewajibkan umat Islam menuntut ilmu serta mendorong kemajuan sains dan peradaban secara bebas.'
        ],
        keyPoints: [
          'Sekularisme lahir dari pengalaman spesifik gereja Barat abad pertengahan (inkuisisi sains).',
          'Islam tidak memiliki hierarki monopoli imamat atau lembaga perantara sakral.',
          'Al-Qur\'an justru mendorong eksplorasi sains empiris sebagai bentuk tadabbur ayat-ayat kauniyah.'
        ]
      },
      {
        id: 'kesalahpahaman-metode-studi',
        title: 'Faktor Kesalahpahaman Terhadap Hukum Islam & Cara Mengatasinya',
        content: [
          'Dalam diskursus kontemporer, sering muncul kesalahpahaman terhadap konsepsi Hukum Islam. Hal tersebut bersumber dari faktor-faktor spesifik:'
        ],
        comparisonBoxes: [
          {
            title: 'Penyebab Kesalahpahaman',
            description: 'Tiga akar utama kerancuan memandang Hukum Islam:',
            items: [
              '(1) Memahami Islam secara parsial (sepotong-sepotong) tanpa melihat keterpaduan sistemiknya.',
              '(2) Salah menggambarkan kerangka dasar ajaran (misalnya memisahkan hukum dari moralitas atau aqidah).',
              '(3) Menggunakan metode studi yang keliru atau hanya merujuk pada literatur orientalis Barat yang memiliki bias kolonial.'
            ]
          },
          {
            title: 'Metode Studi yang Benar',
            description: 'Empat kaidah akademis untuk memahami Hukum Islam secara jernih:',
            items: [
              'Pelajari Islam secara komprehensif dan utuh (kaffah).',
              'Rujukan langsung pada sumber aslinya yang murni (Al-Qur\'an dan As-Sunnah).',
              'Pelajari karya-karya ulama besar dan otoritatif (mu\'tabar).',
              'Mampu membedakan ajaran Islam yang suci dari perilaku oknum pemeluknya yang menyimpang.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    numberStr: 'TOPIK 03',
    title: 'Istilah Kunci dalam Hukum Islam',
    shortDesc: 'Etimologi Ha-Ka-Ma, pembagian Hukum Taklifi (Al-Ahkam Al-Khamsah), Hukum Wadh\'i, serta matriks distingsi Syariat vs Fiqh.',
    summaryQuote: 'Syariat bersumber dari wahyu ilahi yang bersifat abadi dan mutlak, sedangkan Fiqh adalah hasil ijtihad akal pikiran manusia yang bersifat instrumental, situasional, dan dinamis.',
    sections: [
      {
        id: 'terminologi-hukm',
        title: 'Pengertian Hukum, Hukm, dan Ahkam',
        content: [
          'Secara etimologi, kata Hukum berasal dari akar kata bahasa Arab Ha-Ka-Ma (ح-ك-م) yang secara generik mengandung makna menetapkan, mencegah kerusakan, atau memutuskan perkara.',
          'Kata Hukm berarti norma, kaidah, ketetapan, atau patokan aturan yang mengikat.',
          'Kata Ahkam merupakan bentuk jamak (plural) dari kata hukm.',
          'Dalam terminologi Syara\', Hukum Islam didefinisikan sebagai: seperangkat aturan dan ketentuan yang ditetapkan oleh Allah SWT untuk mengatur hubungan manusia dengan Penciptanya, hubungan manusia dengan sesama manusia, hubungan manusia dengan dirinya sendiri, serta hubungannya dengan lingkungan alam semesta.'
        ]
      },
      {
        id: 'hukum-taklifi',
        title: 'Hukum Taklifi (Tuntutan Pembebanan)',
        content: [
          'Hukum Taklifi adalah hukum yang mengandung tuntutan kepada mukallaf untuk dilakukan (perintah), ditinggalkan (larangan), atau memberikan kebebasan memilih untuk berbuat atau tidak berbuat.',
          'Hukum Taklifi diklasifikasikan ke dalam lima kategori norma yang dikenal sebagai Al-Ahkam Al-Khamsah:'
        ],
        table: {
          headers: ['Kategori Norma', 'Konsekuensi Dikerjakan', 'Konsekuensi Ditinggalkan', 'Penjelasan & Karakteristik'],
          rows: [
            ['Ja\'iz / Mubah', 'Tidak berpahala', 'Tidak berdosa', 'Kebebasan memilih secara seimbang untuk melakukan atau meninggalkan.'],
            ['Sunnah / Mandub', 'Mendapat pahala', 'Tidak berdosa', 'Anjuran yang diutamakan untuk dikerjakan demi menyempurnakan amal.'],
            ['Wajib / Fardhu', 'Mendapat pahala', 'Mendapat dosa & sanksi', 'Tuntutan pasti yang harus dikerjakan tanpa alasan kecuali uzur syar\'i.'],
            ['Makruh', 'Tidak berdosa', 'Mendapat pahala', 'Tuntutan untuk ditinggalkan secara anjuran; lebih disukai jika dihindari.'],
            ['Haram', 'Mendapat dosa & sanksi', 'Mendapat pahala', 'Larangan keras dan pasti; wajib mutlak untuk ditinggalkan.']
          ]
        }
      },
      {
        id: 'hukum-wadhi',
        title: 'Hukum Wadh\'i (Ketentuan Kondisional)',
        content: [
          'Hukum Wadh\'i adalah ketentuan syar\'i yang menetapkan keterkaitan antara suatu keadaan/peristiwa dengan berlakunya atau gugurnya Hukum Taklifi.',
          'Terdiri dari tiga komponen pokok: Sebab, Syarat, dan Mani\'.'
        ],
        comparisonBoxes: [
          {
            title: 'Sebab (Kausa Hukum)',
            description: 'Tanda atau alasan objektif yang dijadikan syariat sebagai pangkal lahirnya hukum.',
            items: [
              'Contoh: Kematian seseorang menjadi sebab lahirnya hukum pembagian warisan.',
              'Contoh: Akad nikah yang sah menjadi sebab lahirnya kehalalan hubungan suami-istri.',
              'Distingsi Krusial: Sebab berbeda dengan \'Illat. Sebab merupakan tanda lahirnya hukum, sedangkan \'Illat bersifat rasionalitas hukum (alasan motif logis di balik penetapan suatu hukum).'
            ]
          },
          {
            title: 'Syarat (Kondisi Keabsahan)',
            description: 'Hal luar substansi yang harus dipenuhi terlebih dahulu sebelum suatu perbuatan dilakukan agar dinilai sah.',
            items: [
              'Contoh: Berwudhu dan suci dari hadats sebelum mendirikan shalat.',
              'Contoh: Adanya saksi dan wali nikah sebelum akad perkawinan dilangsungkan.',
              'Distingsi Krusial: Syarat berada di luar perbuatan (eksternal), sedangkan Rukun merupakan bagian substansial internal perbuatan (misal: ruku\' dan sujud dalam shalat).'
            ]
          },
          {
            title: 'Mani\' (Faktor Penghalang)',
            description: 'Keadaan atau faktor yang menghalangi timbulnya hukum atau membatalkan keberlakuan hukum yang seharusnya ada.',
            items: [
              'Contoh: Tindakan pembunuhan oleh ahli waris terhadap pewaris menjadi mani\' (penghalang mutlak) yang menggugurkan hak warisnya.',
              'Contoh: Kondisi haid menjadi mani\' (penghalang) bagi perempuan untuk mengerjakan shalat atau puasa wajib.'
            ]
          }
        ]
      },
      {
        id: 'matriks-syariat-fiqh',
        title: 'Matriks Perbedaan Syariat dan Fiqh (Fikih)',
        content: [
          'Sering kali terjadi kerancuan antara istilah Syariat dan Fiqh. Keduanya memiliki perbedaan fundamental dalam dimensi ontologis dan metodologisnya:'
        ],
        table: {
          headers: ['Dimensi Pembeda', 'Syariat (Islamic Law)', 'Fiqh (Islamic Jurisprudence)'],
          rows: [
            ['Sumber Utama', 'Wahyu Ilahi murni: Al-Qur\'an dan As-Sunnah ash-shahihah.', 'Pemahaman mendalam dan pemikiran akal manusia (Ijtihad para fuqaha).'],
            ['Cakupan Ajaran', 'Fundamental dan menyeluruh (mencakup Aqidah, Syariah, dan Akhlak).', 'Instrumental dan terbatas pada hukum amaliyah/praktis perbuatan mukallaf.'],
            ['Sifat & Kebenaran', 'Abadi, mutlak benar (Qath\'i), sakral, dan tidak mengalami perubahan.', 'Temporal, situasional, dinamis, bernilai dugaan kuat (Zhanni).'],
            ['Keragaman Pendapat', 'Hanya satu syariat Allah yang bersifat universal bagi seluruh umat.', 'Beraneka ragam (melahirkan banyak madzhab, ragam ijtihad, dan ikhtilaf).']
          ]
        },
        highlightBox: {
          title: 'Hubungan Organis Syariat & Fiqh',
          text: 'Keduanya saling melengkapi secara organis. Syariat adalah fondasi pokok (ushul), sedangkan fiqh adalah cabang operasional (furu\'). Tanpa fiqh, syariat akan kaku dan tidak dapat beradaptasi menjawab perubahan zaman; sebaliknya tanpa syariat, fiqh akan kehilangan arah legitimasi ilahi.'
        }
      }
    ]
  },
  {
    id: 4,
    numberStr: 'TOPIK 04',
    title: 'Ruang Lingkup, Tujuan, dan Ciri Hukum Islam',
    shortDesc: 'Pembidangan hukum perspektif Islam vs Barat, serta Maqasid Asy-Syari\'ah dengan 5 pokok Dharuriyyat, Hajjiyyat, dan Tahsiniyyat.',
    summaryQuote: 'Tujuan utama penegakan Hukum Islam adalah mewujudkan kemaslahatan dan menolak kemudaratan (Jalbul Mashalih wa Dar\'ul Mafasid) dalam tiga tingkatan hierarki kebutuhan.',
    sections: [
      {
        id: 'pembidangan-hukum',
        title: 'Pembidangan Hukum Islam (Perspektif Barat vs Islam)',
        content: [
          'Dalam tradisi Hukum Barat kontinental, hukum dibagi secara dikotomis dan kaku menjadi dua ranah terpisah: Hukum Publik dan Hukum Privat (Perdata).',
          'Sebaliknya, Hukum Islam (sebagaimana halnya Hukum Adat di Nusantara) tidak mengenal pemisahan kaku tersebut. Dalam konsepsi Islam, setiap bidang hukum publik senantiasa mengandung dimensi kepentingan privat, dan sebaliknya setiap ranah privat bersentuhan dengan ketertiban publik.',
          'Contoh konkret: Perkara pembunuhan dalam Hukum Islam pada dasarnya merupakan ranah pidana (publik). Namun, sanksi pembalasan (qishash) dapat digugurkan atau digantikan dengan pembayaran kompensasi denda harta (diyat) manakala keluarga korban secara privat memberikan maaf kepada pelaku.'
        ],
        highlightBox: {
          title: 'Karakteristik Holistik Pembidangan',
          text: 'Tidak ada batas tembok kaku antara publik dan privat. Keadilan ditegakkan dengan menyeimbangkan hak publik masyarakat dan hak privat individu korban/keluarga.'
        }
      },
      {
        id: 'klasifikasi-bidang',
        title: 'Cabang-Cabang Bidang Hukum Islam',
        content: [
          'Berdasarkan literatur fiqh, pembidangan Hukum Islam dikelompokkan ke dalam dua spektrum utama:'
        ],
        comparisonBoxes: [
          {
            title: 'Lingkup Publik (Siyar & Jinayat)',
            description: 'Mengatur relasi kekuasaan, ketertiban umum, dan pidana:',
            items: [
              'Jinayah (Hudud & Ta\'zir): Hukum pidana Islam yang mencakup sanksi yang ditetapkan secara pasti (hudud) maupun kebijakan diskresi hakim (ta\'zir).',
              'Al-Ahkam As-Sulthaniyah: Hukum tata negara, ketatanegaraan, dan administrasi pemerintahan Islam.',
              'Siyar: Hukum internasional Islam yang mengatur hukum perdamaian, traktat, dan situasi perang antar-negara.',
              'Mukhasamat: Hukum acara, tata cara pembuktian, dan peradilan perdata/pidana.'
            ]
          },
          {
            title: 'Lingkup Privat (Perdata & Keluarga)',
            description: 'Mengatur hak kebendaan, relasi personal, dan kekerabatan:',
            items: [
              'Munakahat: Hukum perkawinan dan hukum kekeluargaan.',
              'Wirasah / Al-Fara\'id: Hukum waris Islam, penetapan bagian ahli waris, dan pembagian harta peninggalan.',
              'Muamalat (dalam arti sempit): Hukum perikatan dagang, kontrak perjanjian, sistem perbankan/keuangan, dan hak kebendaan.'
            ]
          }
        ]
      },
      {
        id: 'maqasid-syariah',
        title: 'Tujuan Hukum Islam (Maqasid Asy-Syari\'ah)',
        content: [
          'Tujuan pokok dan filosofi terdalam dari seluruh pensyariatan Hukum Islam terangkum dalam kaidah universal:',
          'Mewujudkan kemaslahatan dan menolak segala bentuk kemudaratan (Jalbul Mashalih wa Dar\'ul Mafasid).',
          'Ditinjau dari kehendak Pembuat Hukum (Allah SWT), seluruh hukum Islam dirancang untuk memenuhi tiga tingkatan kebutuhan hidup manusia:'
        ]
      },
      {
        id: 'tingkat-dharuriyyat',
        title: 'A. Kebutuhan Primer (Dharuriyyat) — 5 Pokok Maqasidul Ahkam',
        content: [
          'Kebutuhan Dharuriyyat adalah kebutuhan esensial dan mutlak yang wajib ada. Jika kebutuhan ini terganggu atau dilanggar, maka eksistensi kehidupan manusia, ketertiban sosial, dan peradaban akan hancur binasa.',
          'Dharuriyyat mencakup lima pilar perlindungan eksistensial (Al-Kulliyat Al-Khamsah):'
        ],
        table: {
          headers: ['Pilar Perlindungan', 'Instrumen Kewajiban / Penjagaan Positif', 'Instrumen Preventif / Larangan'],
          rows: [
            ['1. Hifzh ad-Din (Memelihara Agama)', 'Kewajiban mendirikan shalat lima waktu, zakat, puasa, dan ibadah pokok.', 'Larangan murtad, larangan penodaan aqidah, dan penjagaan kemurnian tauhid.'],
            ['2. Hifzh an-Nafs (Memelihara Jiwa)', 'Kewajiban menjaga keselamatan tubuh, hak atas kesehatan dan nafkah hidup.', 'Pengharaman pembunuhan, penegakan sanksi qishash, dan larangan bunuh diri.'],
            ['3. Hifzh al-\'Aql (Memelihara Akal)', 'Pengakuan hak mukallaf, anjuran menuntut ilmu, riset sains, dan berpikir jernih.', 'Pengharaman khamr (minuman keras), narkotika, dan segala zat perusak akal pikiran.'],
            ['4. Hifzh an-Nasl (Memelihara Keturunan)', 'Anjuran melangsungkan perkawinan yang sah demi keberlanjutan regenerasi.', 'Pengharaman zina, tuduhan palsu berzina (qadzaf), dan segala perilaku penyimpangan.'],
            ['5. Hifzh al-Mal (Memelihara Harta)', 'Kebolehan dan perlindungan transaksi jual beli halal, bagi hasil, dan investasi.', 'Pengharaman tindak pencurian, perampokan, penipuan, korupsi, dan transaksi riba.']
          ]
        }
      },
      {
        id: 'hajjiyyat-tahsiniyyat',
        title: 'B. Kebutuhan Sekunder (Hajjiyyat) & C. Tersier (Tahsiniyyat)',
        content: [
          'Selain kebutuhan pokok dharuriyyat, syariat juga mengatur dua tingkatan pelengkap untuk menunjang martabat manusia:'
        ],
        comparisonBoxes: [
          {
            title: 'Kebutuhan Sekunder (Hajjiyyat)',
            description: 'Kebutuhan untuk menunjang kebutuhan primer dan menghilangkan kesempitan/kesukaran.',
            items: [
              'Bila tidak terpenuhi, eksistensi manusia tidak sampai hancur, namun kehidupan akan dipenuhi kesulitan (masyaqqah).',
              'Contoh utama: Ketentuan rukhshah (keringanan beribadah), seperti menjamak/meng-qashar shalat saat safar, dan berbuka puasa bagi orang sakit.',
              'Contoh sosial: Pengakuan atas kemerdekaan personal dan persamaan hak hukum di hadapan peradilan.'
            ]
          },
          {
            title: 'Kebutuhan Tersier (Tahsiniyyat)',
            description: 'Kebutuhan yang berkaitan dengan etika, estetika, dan peningkatan martabat di hadapan Tuhan dan masyarakat.',
            items: [
              'Berfungsi sebagai ornamen pelengkap kesempurnaan dan kepantasan hidup bermasyarakat.',
              'Contoh etika perorangan: Adab dan tata krama saat makan dan minum menggunakan tangan kanan.',
              'Contoh estetika: Menjaga kebersihan dan keindahan pakaian saat beribadah ke masjid.',
              'Contoh tradisi mulia: Penyelenggaraan walimah perkawinan sebagai wujud rasa syukur.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    numberStr: 'TOPIK 05',
    title: 'Sumber-Sumber Hukum Islam & Ar-Ra\'yu / Ijtihad',
    shortDesc: 'Al-Qur\'an, As-Sunnah (Fungsi & Klasifikasi), serta Ar-Ra\'yu/Ijtihad dengan 6 metode penalaran akal mujtahid.',
    summaryQuote: 'Sumber Hukum Islam tersusun secara hierarkis: Al-Qur\'an sebagai sumber utama, As-Sunnah sebagai penjelas, dan Ijtihad/Ar-Ra\'yu sebagai instrumen penalaran akal pada masalah zhanni.',
    sections: [
      {
        id: 'landasan-hierarki',
        title: 'Landasan Hierarki Sumber Hukum Islam',
        content: [
          'Berdasarkan firman Allah dalam QS. An-Nisa ayat 59 ("Taatilah Allah, taatilah Rasul, dan Ulil Amri di antara kamu...") serta dialog terkenal dalam Hadis Mu\'adz bin Jabal ketika diutus sebagai hakim ke Yaman, sumber Hukum Islam tersusun dalam tiga tingkatan hierarkis yang mengikat:'
        ],
        keyPoints: [
          'Tingkat Pertama: Al-Qur\'an (Kalam Allah).',
          'Tingkat Kedua: As-Sunnah / Al-Hadits (Otoritas Rasulullah SAW).',
          'Tingkat Ketiga: Ar-Ra\'yu / Ijtihad (Penalaran akal mujtahid ketika tidak ditemukan nash qath\'i).'
        ]
      },
      {
        id: 'al-quran',
        title: '1. Al-Qur\'an (Sumber Pertama dan Utama)',
        content: [
          'Pengertian: Kalam Allah SWT yang diturunkan kepada Nabi Muhammad SAW melalui perantaraan Malaikat Jibril dalam bahasa Arab, diriwayatkan secara mutawatir, membacanya bernilai ibadah, termaktub dalam mushaf.',
          'Struktur: Terdiri dari 30 Juz, 114 Surah, diturunkan secara berangsur-angsur selama ±22 tahun 2 bulan 22 hari.',
          '',
          'Karakteristik & Klasifikasi Ayat Al-Qur\'an:'
        ],
        comparisonBoxes: [
          {
            title: 'Makkiyah vs Madaniyah',
            description: 'Klasifikasi berdasarkan periode masa turunnya wahyu:',
            items: [
              'Surah Makkiyah: Diturunkan sebelum peristiwa Hijrah Nabi ke Madinah. Umumnya susunan ayatnya pendek-pendek, bernada tegas, dan fokus pembahasannya pada pembinaan Aqidah tauhid dan Akhlak budi pekerti.',
              'Surah Madaniyah: Diturunkan sesudah peristiwa Hijrah ke Madinah. Ayat-ayatnya cenderung panjang dan rinci, fokus pada pembentukan hukum muamalah kemasyarakatan, keluarga, dan tata negara.'
            ]
          },
          {
            title: 'Muhkamat vs Mutasyabihat',
            description: 'Klasifikasi berdasarkan kejelasan makna lafaz:',
            items: [
              'Ayat Muhkamat: Ayat yang memiliki makna terang benderang, tegas, qath\'i dalalah, tidak menimbulkan multi-tafsir, serta menjadi rujukan induk hukum.',
              'Ayat Mutasyabihat: Ayat yang maknanya mengandung kiasan atau keserupaan (zhanni), memerlukan penafsiran mendalam (takwil) dan perenungan para ahli ilmu.'
            ]
          },
          {
            title: 'Ta\'abbudi vs Ta\'aqquli',
            description: 'Klasifikasi berdasarkan keterjangkauan rasio akal:',
            items: [
              'Ayat Ta\'abbudi: Ketentuan hukum yang bersifat ibadah murni (ghairu ma\'qulatil ma\'na), bersifat pasti, dogmatis, dan akal manusia hanya bertugas menerima dan melaksanakannya (seperti jumlah rakaat shalat).',
              'Ayat Ta\'aqquli: Ketentuan hukum yang berkaitan dengan muamalah kemasyarakatan yang rasional (ma\'qulatil ma\'na), di mana \'illat dan rasionalitas hikmah hukumnya dapat digali dan dikembangkan melalui akal sehat.'
            ]
          }
        ]
      },
      {
        id: 'as-sunnah',
        title: '2. As-Sunnah / Al-Hadits (Sumber Kedua)',
        content: [
          'Pengertian: Segala ucapan/perkataan (Qauliyah), perbuatan/tindakan (Fi\'liyah), serta sikap diam atau persetujuan penetapan (Taqririyah) dari Nabi Muhammad SAW.',
          '',
          'Empat Fungsi As-Sunnah Terhadap Al-Qur\'an:'
        ],
        table: {
          headers: ['Fungsi Sunnah', 'Istilah Ushul', 'Penjelasan & Contoh Penerapan'],
          rows: [
            ['(1) Memperkuat Hukum Al-Qur\'an', 'Bayan At-Taqrir / At-Ta\'kid', 'Menegaskan kembali ketentuan hukum yang sudah ada dalam Al-Qur\'an dengan ketetapan serupa (misal: kewajiban puasa Ramadan).'],
            ['(2) Merinci / Memperjelas Ayat Umum', 'Bayan At-Tafsir / At-Taudhih', 'Menjelaskan tata cara teknis ayat yang masih mujmal/umum (misal: Al-Qur\'an memerintahkan shalat, Hadis menjelaskan rincian rakaat dan gerakannya: "Shalatlah kalian sebagaimana kalian melihat aku shalat").'],
            ['(3) Mengkhususkan / Membatasi Ayat', 'Bayan At-Takhsis / At-Taqyid', 'Membatasi keumuman lafaz Al-Qur\'an (misal: mengharamkan bangkai secara umum dalam Al-Qur\'an dikhususkan oleh Hadis dengan kehalalan bangkai ikan dan belalang).'],
            ['(4) Menetapkan Hukum Baru', 'Bayan At-Tasyri\'', 'Menciptakan ketetapan hukum baru yang belum diatur secara eksplisit dalam Al-Qur\'an (misal: pengharaman mengenakan sutra dan emas bagi kaum laki-laki).']
          ]
        }
      },
      {
        id: 'klasifikasi-hadis',
        title: 'Klasifikasi Hadis',
        content: [
          'Hadis ditinjau dari dua sudut pandang keilmuan:'
        ],
        comparisonBoxes: [
          {
            title: 'Berdasarkan Kuantitas Perawi (Jumlah Jalur Sanad)',
            description: 'Tiga kategori hadis dari segi kuantitas:',
            items: [
              '1. Mutawatir: Hadis yang diriwayatkan oleh sejumlah besar perawi pada setiap tingkatan sanad, yang secara logika mustahil mereka bersepakat untuk berdusta. Menghasilkan keyakinan pasti (ilmu qath\'i).',
              '2. Masyhur: Hadis yang diriwayatkan oleh tiga perawi atau lebih pada setiap tingkatan, namun belum mencapai derajat mutawatir.',
              '3. Ahad: Hadis yang diriwayatkan oleh satu atau dua perawi pada salah satu tingkatan sanad. Bernilai dugaan kuat (zhanni).'
            ]
          },
          {
            title: 'Berdasarkan Kualitas Perawi (Derajat Keotentikan)',
            description: 'Empat tingkatan kualitas hadis:',
            items: [
              '1. Hadis Sahih: Sanadnya bersambung, diriwayatkan oleh perawi yang adil, memiliki hafalan/ingatan yang sangat kuat (dhabit), tidak cacat (\'illat), dan tidak bertentangan dengan riwayat yang lebih kuat (syadz).',
              '2. Hadis Hasan: Memenuhi syarat sahih namun daya hafalan perawinya sedikit lebih rendah.',
              '3. Hadis Dha\'if: Hadis lemah yang tidak memenuhi syarat hadis sahih maupun hasan (sanad terputus atau perawi bermasalah).',
              '4. Hadis Maudhu\': Hadis palsu yang diciptakan dan dinisbatkan secara dusta kepada Rasulullah SAW; tertolak secara mutlak.'
            ]
          }
        ]
      },
      {
        id: 'ijtihad-pengertian',
        title: '3. Ar-Ra\'yu / Ijtihad (Sumber Ketiga)',
        content: [
          'Pengertian Ijtihad:',
          'Pengerahan seluruh kesungguhan dan kemampuan akal pikiran secara optimal oleh seorang ahli hukum Islam yang memenuhi kualifikasi (mujtahid) untuk menggali, menemukan, dan merumuskan ketentuan hukum syara\' dari dalil-dalil nash yang rinci (tafshili).',
          '',
          'Ruang Lingkup / Bidang Ijtihad:',
          'Ijtihad memiliki batasan yang tegas dan ketat menurut kaidah Ushul Fiqh: "Laa Ijtihada fii mauri din-nash" (Tidak boleh ada ijtihad pada masalah yang sudah memiliki nash tegas dan pasti/qath\'i).',
          'Oleh karena itu:',
          '• Wilayah Ijtihad TERBATAS pada: Masalah-masalah muamalah kemasyarakatan, hubungan sosial-hukum kontemporer, dan persoalan yang dalil hukumnya masih bersifat dugaan/interpretatif (Zhanni).',
          '• Ijtihad TIDAK BERLAKU untuk: Masalah Aqidah (teologi keimanan pokok) dan tata cara Ibadah Murni (ibadah mahdhah ta\'abbudi) yang telah ditetapkan secara qath\'i dan pasti.'
        ],
        highlightBox: {
          title: 'Batasan Mutlak Ijtihad',
          text: 'Ijtihad hanya berlaku dalam ranah hukum muamalah kontemporer yang dalilnya zhanni. Ijtihad tidak berlaku bagi wilayah aqidah dan ibadah mahdhah yang bersifat qath\'i.'
        }
      },
      {
        id: 'enam-metode-ijtihad',
        title: 'Enam Metode Ijtihad (Penalaran Akal)',
        content: [
          'Para ulama mujtahid merumuskan enam instrumen penalaran metodologis untuk memecahkan problematika hukum kontemporer:'
        ],
        table: {
          headers: ['Metode Ijtihad', 'Definisi & Penjelasan Operasional', 'Contoh Penerapan Hukum Riil'],
          rows: [
            [
              '1. Ijma\'',
              'Kesepakatan bulat dari seluruh ulama mujtahid dari umat Islam pada suatu masa setelah wafatnya Rasulullah SAW atas suatu hukum kasus tertentu. (Terbagi menjadi Ijma\' Bayani: pernyataan eksplisit; dan Ijma\' Sukuti: persetujuan melalui diam/tidak menyanggah).',
              'Kebolehan akumulasi pengelolaan harta wakaf produktif; konsensus pencatatan dan perumusan kompilasi hukum.'
            ],
            [
              '2. Qiyas',
              'Menyamakan hukum suatu kasus baru yang belum ada nashnya dengan kasus lama yang sudah ada nashnya dalam Al-Qur\'an atau Sunnah, karena adanya kesamaan alasan hukum (\'Illat) di antara kedua kasus tersebut.',
              'Pengharaman narkotika dan zat adiktif modern (dikiaskan pada pengharaman Khamr karena kesamaan \'illat memabukkan dan merusak akal); kewajiban zakat beras (dikiaskan pada gandum).'
            ],
            [
              '3. Maslahah Mursalah',
              'Penetapan hukum atas suatu persoalan baru berdasarkan pertimbangan kemaslahatan umum yang sejalan dengan ruh syariat, di mana tidak ada dalil nash spesifik yang memerintahkan atau melarangnya secara eksplisit.',
              'Kewajiban pencatatan perkawinan dalam lembaran negara/akta nikah resmi; inisiatif kodifikasi lembaran Al-Qur\'an menjadi satu mushaf pada era Khalifah Abu Bakar Ash-Shiddiq.'
            ],
            [
              '4. Istihsan',
              'Tindakan berpindah atau menyimpang dari penerapan hukum umum (atau Qiyas jali yang kaku) menuju penerapan hukum pengecualian (Qiyas khafi) karena adanya pertimbangan keadilan, kebajikan, atau menghindari kesulitan yang lebih besar.',
              'Kebolehan transaksi jual beli pesanan (Salam dan Istishna\') yang dikecualikan dari larangan umum memperjualbelikan barang yang belum berwujud secara fisik.'
            ],
            [
              '5. Istishab',
              'Menetapkan berlakunya status hukum yang sudah ada sejak masa lampau hingga saat sekarang, selama belum ada dalil atau bukti baru yang pasti yang mengubah status hukum tersebut.',
              'Penerapan asas praduga tak bersalah (presumption of innocence) dalam peradilan; seseorang tetap dinilai suci dari hadats selama ia belum meyakini secara pasti bahwa wudhunya telah batal.'
            ],
            [
              '6. \'Urf',
              'Adat kebiasaan masyarakat setempat yang telah dipraktikkan secara turun-temurun dan konsisten, dengan syarat mutlak tidak bertentangan dengan prinsip nash Al-Qur\'an dan As-Sunnah.',
              'Sistem pembayaran sewa-menyewa rumah bulanan atau transaksi jual beli eceran di pasar swalayan tanpa kewajiban mengucapkan lafaz ijab-kabul formal secara lisan.'
            ]
          ]
        },
        highlightBox: {
          title: 'Titik Akhir Materi UTS',
          text: 'Materi persiapan UTS Hukum Islam berakhir pada akhir pembahasan Ar-Ra\'yu / Ijtihad (Topik 5). Materi selanjutnya mengenai Topik 6 (Asas-Asas Hukum Islam) tidak termasuk dalam cakupan silabus UTS ini.'
        }
      }
    ]
  }
];
