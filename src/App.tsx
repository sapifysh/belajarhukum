import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HomeView, SubjectId } from './components/HomeView';
import { MaterialReaderView } from './components/MaterialReaderView';
import { Navbar } from './components/Navbar';
import { PracticeQuizView } from './components/PracticeQuizView';
import { SubjectHomeView } from './components/SubjectHomeView';
import { HUKUM_ISLAM_METADATA, TOPICS_DATA } from './data/hukumIslamData';
import { HUKUM_PEMDA_METADATA, PEMDA_TOPICS_DATA } from './data/hukumPemdaData';
import { PRACTICE_QUESTIONS } from './data/practiceQuestionsData';
import { PEMDA_PRACTICE_QUESTIONS } from './data/hukumPemdaQuestionsData';
import siteBackgroundImg from './assets/images/site_background_1791021343659.jpg';

export type AppView = 'home' | 'subject' | 'materi' | 'quiz';

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

  // Active Subject Configuration
  const isIslam = currentSubject === 'hukum-islam';
  const activeSubjectTitle = isIslam ? 'Hukum Islam' : 'Hukum Pemda';
  const activeMetadata = isIslam ? HUKUM_ISLAM_METADATA : HUKUM_PEMDA_METADATA;
  const activeTopics = isIslam ? TOPICS_DATA : PEMDA_TOPICS_DATA;
  const activeQuestions = isIslam ? PRACTICE_QUESTIONS : PEMDA_PRACTICE_QUESTIONS;
  const activeStudiedTopics = isIslam ? studiedTopicsIslam : studiedTopicsPemda;
  const activeUserAnswers = isIslam ? userAnswersIslam : userAnswersPemda;
  const activeTopicUnitLabel = isIslam ? 'Topik' : 'Pertemuan';
  const activeCurriculumNote = isIslam
    ? 'Pertanyaan berbasis materi resmi Silabus Topik 1–5 (Prof. Daud Ali & Prof. Hazairin).'
    : 'Pertanyaan berbasis materi resmi Silabus Pertemuan 1–7 (M. Dahlan, S.H., M.H. — FH UB).';
  const activeReferenceNote = isIslam
    ? 'Rujukan Akademis: Prof. Daud Ali & Prof. Hazairin · Kurikulum Fakultas Hukum · Silabus RPS Sub CPMK 1 – 5'
    : 'Rujukan Akademis: M. Dahlan, S.H., M.H. · Fakultas Hukum Universitas Brawijaya (FH UB) · RPS Sub-CPMK 1 – 7';

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
    } else {
      setStudiedTopicsPemda((prev) =>
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
    } else {
      setUserAnswersPemda((prev) => ({
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
    } else {
      setUserAnswersPemda({});
      try {
        localStorage.removeItem('my_study_space_quiz_answers_pemda');
      } catch {
        // ignore
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-[#e2e8f0] flex flex-col font-sans selection:bg-slate-700 selection:text-white antialiased">
      {/* Site Background Wallpaper with subtle atmospheric depth */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${siteBackgroundImg})` }}
        aria-hidden="true"
      >
        <img
          src={siteBackgroundImg}
          alt="Site background texture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center select-none scale-[1.03] transform-gpu"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.endsWith('/site-background.jpg')) {
              target.src = '/site-background.jpg';
            }
          }}
        />
        {/* Invisible Reading Zone Shield - Darkest at center (rgba 5,8,18 ~0.76), softly feathered out towards flanks */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 960px 100% at 50% 50%, rgba(5, 8, 18, 0.78) 0%, rgba(5, 8, 18, 0.62) 40%, rgba(5, 8, 18, 0.18) 75%, transparent 100%)',
          }}
        />
        {/* Subtle vertical vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/75 via-transparent to-[#07090e]/85" />
      </div>

      {/* Floating Apple Liquid Glass Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        studiedCount={activeStudiedTopics.length}
        totalTopics={activeTopics.length}
        subjectTitle={activeSubjectTitle}
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
              <HomeView
                onSelectSubject={handleSelectSubject}
                onOpenMateri={handleOpenMateri}
                onOpenQuiz={handleOpenQuiz}
                studiedCountIslam={studiedTopicsIslam.length}
                totalTopicsIslam={TOPICS_DATA.length}
                studiedCountPemda={studiedTopicsPemda.length}
                totalTopicsPemda={PEMDA_TOPICS_DATA.length}
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
                subjectTitle={isIslam ? 'Hukum Islam' : 'Hukum Pemerintahan Daerah'}
                metadata={activeMetadata}
                description={
                  isIslam
                    ? 'Rangkuman Panduan Belajar UTS Komprehensif. Berfokus secara mendalam pada Topik 1 hingga Topik 5 berlandaskan rujukan Prof. Daud Ali & Prof. Hazairin.'
                    : 'Rangkuman Panduan Belajar UTS Komprehensif FH UB. Mengkaji tatanan desentralisasi, pembagian urusan, dan otonomi asimetris berdasarkan rujukan M. Dahlan, S.H., M.H.'
                }
                topics={activeTopics}
                studiedTopics={activeStudiedTopics}
                onToggleTopicStudied={handleToggleTopicStudied}
                onOpenMateri={(topicId) => handleOpenMateri(currentSubject, topicId)}
                onOpenQuiz={(topicId) => handleOpenQuiz(currentSubject, topicId)}
                topicUnitLabel={activeTopicUnitLabel.toLowerCase()}
                quizCount={activeQuestions.length}
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
                subjectTitle={isIslam ? 'Hukum Islam' : 'Hukum Pemerintahan Daerah'}
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
          <div className="flex items-center gap-2 text-slate-500">
            <span>{isIslam ? 'Hukum Islam' : 'Hukum Pemerintahan Daerah'}</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span>{activeMetadata.syllabus}</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span>Fakultas Hukum</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
