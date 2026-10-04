import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HomeLandingView } from './components/HomeLandingView';
import { HomeView, SubjectId } from './components/HomeView';
import { MaterialReaderView } from './components/MaterialReaderView';
import { Navbar, NavView } from './components/Navbar';
import { PracticeQuizView } from './components/PracticeQuizView';
import { SubjectHomeView } from './components/SubjectHomeView';
import { HUKUM_ISLAM_METADATA, TOPICS_DATA } from './data/hukumIslamData';
import { HUKUM_PEMDA_METADATA, PEMDA_TOPICS_DATA } from './data/hukumPemdaData';
import { HUKUM_PTUN_METADATA, PTUN_TOPICS_DATA } from './data/hukumPtunData';
import {
  HUKUM_PIDANA_METADATA,
  PIDANA_ANGKA_PENTING,
  PIDANA_GLOSSARY,
  PIDANA_MASTER_FLOW,
  PIDANA_TOPICS_DATA,
} from './data/hukumPidanaData';
import { PRACTICE_QUESTIONS } from './data/practiceQuestionsData';
import { PEMDA_PRACTICE_QUESTIONS } from './data/hukumPemdaQuestionsData';
import { PTUN_PRACTICE_QUESTIONS } from './data/hukumPtunQuestionsData';
import { PIDANA_PRACTICE_QUESTIONS } from './data/hukumPidanaQuestionsData';
import siteBackgroundImg from './assets/images/site_background_1791021343659.jpg';

export type AppView = NavView;

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [currentSubject, setCurrentSubject] = useState<SubjectId>('hukum-islam');
  const [currentTopicId, setCurrentTopicId] = useState<number>(1);
  const [quizTopicFilter, setQuizTopicFilter] = useState<number | undefined>(undefined);

  // Persistence: Studied topics for Hukum Islam
  const [studiedTopicsIslam, setStudiedTopicsIslam] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('my_study_space_studied');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persistence: Studied topics for Hukum Pemda
  const [studiedTopicsPemda, setStudiedTopicsPemda] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('my_study_space_studied_pemda');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persistence: Studied topics for Hukum Acara PTUN
  const [studiedTopicsPtun, setStudiedTopicsPtun] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('my_study_space_studied_ptun');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persistence: Studied topics for Hukum Acara Pidana
  const [studiedTopicsPidana, setStudiedTopicsPidana] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('my_study_space_studied_pidana');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persistence: Quiz answers for Hukum Islam
  const [userAnswersIslam, setUserAnswersIslam] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('my_study_space_quiz_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Persistence: Quiz answers for Hukum Pemda
  const [userAnswersPemda, setUserAnswersPemda] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('my_study_space_quiz_answers_pemda');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Persistence: Quiz answers for Hukum Acara PTUN
  const [userAnswersPtun, setUserAnswersPtun] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('my_study_space_quiz_answers_ptun');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Persistence: Quiz answers for Hukum Acara Pidana
  const [userAnswersPidana, setUserAnswersPidana] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('my_study_space_quiz_answers_pidana');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('my_study_space_studied', JSON.stringify(studiedTopicsIslam));
    } catch {
      // ignore
    }
  }, [studiedTopicsIslam]);

  useEffect(() => {
    try {
      localStorage.setItem('my_study_space_studied_pemda', JSON.stringify(studiedTopicsPemda));
    } catch {
      // ignore
    }
  }, [studiedTopicsPemda]);

  useEffect(() => {
    try {
      localStorage.setItem('my_study_space_studied_ptun', JSON.stringify(studiedTopicsPtun));
    } catch {
      // ignore
    }
  }, [studiedTopicsPtun]);

  useEffect(() => {
    try {
      localStorage.setItem('my_study_space_studied_pidana', JSON.stringify(studiedTopicsPidana));
    } catch {
      // ignore
    }
  }, [studiedTopicsPidana]);

  useEffect(() => {
    try {
      localStorage.setItem('my_study_space_quiz_answers', JSON.stringify(userAnswersIslam));
    } catch {
      // ignore
    }
  }, [userAnswersIslam]);

  useEffect(() => {
    try {
      localStorage.setItem('my_study_space_quiz_answers_pemda', JSON.stringify(userAnswersPemda));
    } catch {
      // ignore
    }
  }, [userAnswersPemda]);

  useEffect(() => {
    try {
      localStorage.setItem('my_study_space_quiz_answers_ptun', JSON.stringify(userAnswersPtun));
    } catch {
      // ignore
    }
  }, [userAnswersPtun]);

  useEffect(() => {
    try {
      localStorage.setItem('my_study_space_quiz_answers_pidana', JSON.stringify(userAnswersPidana));
    } catch {
      // ignore
    }
  }, [userAnswersPidana]);

  // Active Subject Configuration
  const isIslam = currentSubject === 'hukum-islam';
  const isPemda = currentSubject === 'hukum-pemda';
  const isPtun = currentSubject === 'hukum-ptun';
  const isPidana = currentSubject === 'hukum-pidana';

  const activeSubjectTitle = isIslam
    ? 'Hukum Islam'
    : isPemda
    ? 'Hukum Pemerintahan Daerah'
    : isPtun
    ? 'Hukum Acara Peradilan Tata Usaha Negara'
    : 'Hukum Acara Pidana';

  const activeShortTitle = isIslam
    ? 'Hukum Islam'
    : isPemda
    ? 'Hukum Pemda'
    : isPtun
    ? 'Hukum Acara PTUN'
    : 'Hukum Acara Pidana';

  const activeMetadata = isIslam
    ? HUKUM_ISLAM_METADATA
    : isPemda
    ? HUKUM_PEMDA_METADATA
    : isPtun
    ? HUKUM_PTUN_METADATA
    : HUKUM_PIDANA_METADATA;

  const activeTopics = isIslam
    ? TOPICS_DATA
    : isPemda
    ? PEMDA_TOPICS_DATA
    : isPtun
    ? PTUN_TOPICS_DATA
    : PIDANA_TOPICS_DATA;

  const activeQuestions = isIslam
    ? PRACTICE_QUESTIONS
    : isPemda
    ? PEMDA_PRACTICE_QUESTIONS
    : isPtun
    ? PTUN_PRACTICE_QUESTIONS
    : PIDANA_PRACTICE_QUESTIONS;

  const activeStudiedTopics = isIslam
    ? studiedTopicsIslam
    : isPemda
    ? studiedTopicsPemda
    : isPtun
    ? studiedTopicsPtun
    : studiedTopicsPidana;

  const activeUserAnswers = isIslam
    ? userAnswersIslam
    : isPemda
    ? userAnswersPemda
    : isPtun
    ? userAnswersPtun
    : userAnswersPidana;

  const activeTopicUnitLabel = isPemda || isPidana ? 'Pertemuan' : 'Topik';

  const activeDescription = isIslam
    ? 'Rangkuman Panduan Belajar UTS Komprehensif. Berfokus secara mendalam pada Topik 1 hingga Topik 5 berlandaskan rujukan Prof. Daud Ali & Prof. Hazairin.'
    : isPemda
    ? 'Rangkuman Panduan Belajar UTS Komprehensif FH UB. Mengkaji tatanan desentralisasi, pembagian urusan, dan otonomi asimetris berdasarkan rujukan M. Dahlan, S.H., M.H.'
    : isPtun
    ? 'Rangkuman Panduan Belajar UTS Komprehensif FH UB. Membahas tuntas prosedur sengketa administrasi negara dari Pengantar hingga Replik.'
    : 'Rangkuman Lengkap Materi Hukum Acara Pidana (Pertemuan 1–12) Berdasarkan UU No. 20 Tahun 2025 tentang Kitab Undang-Undang Hukum Acara Pidana.';

  const activeCurriculumNote = isIslam
    ? 'Pertanyaan berbasis materi resmi Silabus Topik 1–5 (Prof. Daud Ali & Prof. Hazairin).'
    : isPemda
    ? 'Pertanyaan berbasis materi resmi Silabus Pertemuan 1–7 (M. Dahlan, S.H., M.H. — FH UB).'
    : isPtun
    ? 'Pertanyaan komprehensif berbasis materi resmi Silabus Topik 1–8 (termasuk latihan soal persiapan UTS).'
    : 'Pertanyaan berbasis materi resmi KUHAP Baru UU No. 20 Tahun 2025 (Pertemuan 1–12).';

  const activeReferenceNote = isIslam
    ? 'Rujukan Akademis: Prof. Daud Ali & Prof. Hazairin · Kurikulum Fakultas Hukum · Silabus RPS Sub CPMK 1 – 5'
    : isPemda
    ? 'Rujukan Akademis: M. Dahlan, S.H., M.H. · Fakultas Hukum Universitas Brawijaya (FH UB) · RPS Sub-CPMK 1 – 7'
    : isPtun
    ? 'Rujukan Akademis: Kurikulum Fakultas Hukum · Silabus Substantif Topik 1 – 8'
    : 'Rujukan Akademis: UU No. 20 Tahun 2025 (KUHAP Baru) · Kurikulum Fakultas Hukum · Pertemuan 1 – 12';

  // Navigation handlers
  const handleNavigate = (view: AppView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSubject = (subject: SubjectId) => {
    setCurrentSubject(subject);
    setCurrentTopicId(1);
    setQuizTopicFilter(undefined);
    setCurrentView('subject');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenMateri = (subject?: SubjectId, topicId?: number) => {
    if (subject) {
      setCurrentSubject(subject);
    }
    if (topicId) {
      setCurrentTopicId(topicId);
    } else {
      setCurrentTopicId(1);
    }
    setCurrentView('materi');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuiz = (subject?: SubjectId, topicId?: number) => {
    if (subject) {
      setCurrentSubject(subject);
    }
    setQuizTopicFilter(topicId);
    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleTopicStudied = (topicId: number) => {
    if (isIslam) {
      setStudiedTopicsIslam((prev) =>
        prev.includes(topicId) ? prev.filter((id) => id !== topicId) : [...prev, topicId]
      );
    } else if (isPemda) {
      setStudiedTopicsPemda((prev) =>
        prev.includes(topicId) ? prev.filter((id) => id !== topicId) : [...prev, topicId]
      );
    } else if (isPtun) {
      setStudiedTopicsPtun((prev) =>
        prev.includes(topicId) ? prev.filter((id) => id !== topicId) : [...prev, topicId]
      );
    } else {
      setStudiedTopicsPidana((prev) =>
        prev.includes(topicId) ? prev.filter((id) => id !== topicId) : [...prev, topicId]
      );
    }
  };

  const handleAnswerQuestion = (questionId: string, optionIndex: number) => {
    if (isIslam) {
      setUserAnswersIslam((prev) => ({
        ...prev,
        [questionId]: optionIndex,
      }));
    } else if (isPemda) {
      setUserAnswersPemda((prev) => ({
        ...prev,
        [questionId]: optionIndex,
      }));
    } else if (isPtun) {
      setUserAnswersPtun((prev) => ({
        ...prev,
        [questionId]: optionIndex,
      }));
    } else {
      setUserAnswersPidana((prev) => ({
        ...prev,
        [questionId]: optionIndex,
      }));
    }
  };

  const handleResetAnswers = () => {
    if (isIslam) {
      setUserAnswersIslam({});
      try {
        localStorage.removeItem('my_study_space_quiz_answers');
      } catch {
        // ignore
      }
    } else if (isPemda) {
      setUserAnswersPemda({});
      try {
        localStorage.removeItem('my_study_space_quiz_answers_pemda');
      } catch {
        // ignore
      }
    } else if (isPtun) {
      setUserAnswersPtun({});
      try {
        localStorage.removeItem('my_study_space_quiz_answers_ptun');
      } catch {
        // ignore
      }
    } else {
      setUserAnswersPidana({});
      try {
        localStorage.removeItem('my_study_space_quiz_answers_pidana');
      } catch {
        // ignore
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-[#e2e8f0] flex flex-col font-sans selection:bg-slate-700 selection:text-white antialiased overflow-x-hidden w-full">
      {/* Site Background Wallpaper with subtle atmospheric depth (calmer and reduced glare on mobile) */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${siteBackgroundImg})` }}
        aria-hidden="true"
      >
        <img
          src={siteBackgroundImg}
          alt="Site background texture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center select-none scale-[1.03] transform-gpu opacity-80 sm:opacity-100 saturate-[0.85] sm:saturate-100 transition-all duration-300"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.endsWith('/site-background.jpg')) {
              target.src = '/site-background.jpg';
            }
          }}
        />
        {/* Mobile atmospheric calming tint - keeps edges vibrant while toning down central busy highlights */}
        <div className="absolute inset-0 bg-[#07090e]/35 sm:hidden" />

        {/* Invisible Reading Zone Shield - Darkest at center (rgba 5,8,18 ~0.88 on mobile, ~0.78 on desktop), feathered towards flanks */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,rgba(5,8,18,0.88)_0%,rgba(5,8,18,0.70)_50%,rgba(5,8,18,0.2)_80%,transparent_100%)] sm:bg-[radial-gradient(ellipse_960px_100%_at_50%_50%,rgba(5,8,18,0.78)_0%,rgba(5,8,18,0.62)_40%,rgba(5,8,18,0.18)_75%,transparent_100%)]" />

        {/* Subtle vertical vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/85 sm:from-[#07090e]/75 via-transparent to-[#07090e]/90 sm:to-[#07090e]/85" />
      </div>

      {/* Floating Apple Liquid Glass Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        studiedCount={activeStudiedTopics.length}
        totalTopics={activeTopics.length}
        subjectTitle={activeShortTitle}
        topicUnitName={activeTopicUnitLabel.toLowerCase()}
      />

      {/* Main View Router with Smooth Apple Motion Transition */}
      <main className="relative z-10 flex-1">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <HomeLandingView onStartStudy={() => handleNavigate('subjects')} />
            </motion.div>
          )}

          {currentView === 'subjects' && (
            <motion.div
              key="subjects"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <HomeView
                onSelectSubject={handleSelectSubject}
                onOpenMateri={handleOpenMateri}
                onOpenQuiz={handleOpenQuiz}
                studiedCountIslam={studiedTopicsIslam.length}
                totalTopicsIslam={TOPICS_DATA.length}
                studiedCountPemda={studiedTopicsPemda.length}
                totalTopicsPemda={PEMDA_TOPICS_DATA.length}
                studiedCountPtun={studiedTopicsPtun.length}
                totalTopicsPtun={PTUN_TOPICS_DATA.length}
                studiedCountPidana={studiedTopicsPidana.length}
                totalTopicsPidana={PIDANA_TOPICS_DATA.length}
              />
            </motion.div>
          )}

          {currentView === 'subject' && (
            <motion.div
              key={`subject-${currentSubject}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <SubjectHomeView
                subjectTitle={activeSubjectTitle}
                metadata={activeMetadata}
                description={activeDescription}
                topics={activeTopics}
                studiedTopics={activeStudiedTopics}
                onToggleTopicStudied={handleToggleTopicStudied}
                onOpenMateri={(topicId) => handleOpenMateri(currentSubject, topicId)}
                onOpenQuiz={(topicId) => handleOpenQuiz(currentSubject, topicId)}
                topicUnitLabel={activeTopicUnitLabel.toLowerCase()}
                quizCount={activeQuestions.length}
                masterFlow={isPidana ? PIDANA_MASTER_FLOW : undefined}
                angkaPenting={isPidana ? PIDANA_ANGKA_PENTING : undefined}
                glossary={isPidana ? PIDANA_GLOSSARY : undefined}
              />
            </motion.div>
          )}

          {currentView === 'materi' && (
            <motion.div
              key={`materi-${currentSubject}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <MaterialReaderView
                currentTopicId={currentTopicId}
                onSelectTopic={(id) => setCurrentTopicId(id)}
                onOpenQuizForTopic={(id) => handleOpenQuiz(currentSubject, id)}
                studiedTopics={activeStudiedTopics}
                onToggleTopicStudied={handleToggleTopicStudied}
                topics={activeTopics}
                topicUnitLabel={activeTopicUnitLabel}
                referenceNote={activeReferenceNote}
              />
            </motion.div>
          )}

          {currentView === 'quiz' && (
            <motion.div
              key={`quiz-${currentSubject}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <PracticeQuizView
                initialTopicFilter={quizTopicFilter}
                userAnswers={activeUserAnswers}
                onAnswerQuestion={handleAnswerQuestion}
                onResetAnswers={handleResetAnswers}
                onOpenMateri={(topicId) => handleOpenMateri(currentSubject, topicId)}
                questions={activeQuestions}
                topics={activeTopics}
                subjectTitle={activeSubjectTitle}
                topicUnitLabel={activeTopicUnitLabel}
                curriculumNote={activeCurriculumNote}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Quiet, Minimalist Liquid Glass Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] py-8 text-center text-xs text-slate-500 font-light backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>My Study Space · Private Academic Study Sanctuary</span>
          {currentView !== 'home' ? (
            <div className="flex items-center gap-2 text-slate-500">
              <span>{activeSubjectTitle}</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>{activeMetadata.syllabus}</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>Fakultas Hukum</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-slate-500">
              <span>Study</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>Understand</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>Practice</span>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}
