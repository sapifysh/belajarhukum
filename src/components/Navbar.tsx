import React, { useEffect, useState } from 'react';
import { ArrowLeft, BookOpen, CheckCircle2, CheckSquare } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'subject' | 'materi' | 'quiz';
  onNavigate: (view: 'home' | 'subject' | 'materi' | 'quiz') => void;
  studiedCount: number;
  totalTopics: number;
  subjectTitle?: string;
  topicUnitName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  studiedCount,
  totalTopics,
  subjectTitle = 'Hukum Islam',
  topicUnitName = 'topik',
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-2 sm:top-4 z-50 w-full px-3.5 sm:px-6 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
      <div
        className={`pointer-events-auto mx-auto max-w-4xl flex h-[52px] sm:h-14 items-center justify-between px-3.5 sm:px-5 rounded-[20px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? 'liquid-glass-nav-scrolled' : 'liquid-glass-nav-top'
        }`}
      >
        {/* Zone 1: Single text element wordmark + Back action */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {currentView !== 'home' && (
            <button
              onClick={() => onNavigate(currentView === 'subject' ? 'home' : 'subject')}
              className="group flex h-8 w-8 items-center justify-center rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/20 text-slate-300 hover:text-white transition-all duration-200 active:scale-95 shrink-0"
              title="Kembali"
              aria-label="Kembali"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            </button>
          )}
          <button
            onClick={() => onNavigate('home')}
            className="text-left font-medium tracking-tight text-white hover:text-slate-200 transition-colors"
          >
            <span className="text-[12px] sm:text-sm font-semibold tracking-wider text-slate-200">
              MY STUDY SPACE
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links / Breadcrumbs in Apple segmented style (Desktop/Tablet) */}
        <nav className="hidden md:flex items-center gap-1 text-[11px] sm:text-xs font-medium text-slate-400 bg-white/[0.03] p-1 rounded-xl border border-white/[0.05]">
          <button
            onClick={() => onNavigate('home')}
            className={`px-2.5 py-1 rounded-lg transition-all duration-200 ${
              currentView === 'home'
                ? 'text-white bg-white/[0.12] shadow-sm font-semibold'
                : 'hover:text-slate-200 hover:bg-white/[0.05]'
            }`}
          >
            Beranda
          </button>
          {currentView !== 'home' && (
            <>
              <span className="text-slate-600 px-0.5">/</span>
              <button
                onClick={() => onNavigate('subject')}
                className={`px-2.5 py-1 rounded-lg transition-all duration-200 max-w-[120px] sm:max-w-none truncate ${
                  currentView === 'subject'
                    ? 'text-white bg-white/[0.12] shadow-sm font-semibold'
                    : 'hover:text-slate-200 hover:bg-white/[0.05]'
                }`}
              >
                {subjectTitle}
              </button>
            </>
          )}
          {currentView === 'materi' && (
            <>
              <span className="text-slate-600 px-0.5">/</span>
              <span className="text-white bg-white/[0.12] px-2.5 py-1 rounded-lg font-semibold shadow-sm">
                Materi
              </span>
            </>
          )}
          {currentView === 'quiz' && (
            <>
              <span className="text-slate-600 px-0.5">/</span>
              <span className="text-white bg-white/[0.12] px-2.5 py-1 rounded-lg font-semibold shadow-sm">
                Latihan Soal
              </span>
            </>
          )}
        </nav>

        {/* Zone 3: Single primary action on mobile; full action/indicator on desktop */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Mobile Single Action (Never overflows, always compact) */}
          <div className="flex md:hidden items-center">
            {currentView === 'home' && (
              <span className="text-[11px] text-slate-400 font-normal px-2.5 py-1 bg-white/[0.04] rounded-xl border border-white/[0.06]">
                UTS Prep
              </span>
            )}
            {currentView === 'subject' && (
              <button
                onClick={() => onNavigate('materi')}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-white/[0.06] border border-white/[0.1] rounded-xl active:scale-95"
              >
                <BookOpen className="h-3.5 w-3.5 text-slate-300" />
                <span>Materi</span>
              </button>
            )}
            {currentView === 'materi' && (
              <button
                onClick={() => onNavigate('quiz')}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-white/[0.08] border border-white/[0.12] rounded-xl active:scale-95 shadow-sm"
              >
                <CheckSquare className="h-3.5 w-3.5 text-slate-300" />
                <span>Soal</span>
              </button>
            )}
            {currentView === 'quiz' && (
              <button
                onClick={() => onNavigate('materi')}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-white/[0.08] border border-white/[0.12] rounded-xl active:scale-95 shadow-sm"
              >
                <BookOpen className="h-3.5 w-3.5 text-slate-300" />
                <span>Materi</span>
              </button>
            )}
          </div>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-2.5">
            {currentView === 'subject' ? (
              <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/[0.05]">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/90" />
                <span>
                  {studiedCount}/{totalTopics} {topicUnitName}
                </span>
              </div>
            ) : currentView === 'materi' ? (
              <button
                onClick={() => onNavigate('quiz')}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] hover:border-white/20 rounded-xl transition-all duration-200 active:scale-95 shadow-sm"
              >
                <CheckSquare className="h-3.5 w-3.5 text-slate-300" />
                <span className="hidden sm:inline">Latihan Soal</span>
              </button>
            ) : currentView === 'quiz' ? (
              <button
                onClick={() => onNavigate('materi')}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] hover:border-white/20 rounded-xl transition-all duration-200 active:scale-95 shadow-sm"
              >
                <BookOpen className="h-3.5 w-3.5 text-slate-300" />
                <span className="hidden sm:inline">Materi</span>
              </button>
            ) : (
              <div className="text-[11px] text-slate-400 font-normal px-2.5 py-1 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                UTS Preparation
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
