import React from 'react';
import { ArrowRight, BookOpen, CheckSquare } from 'lucide-react';
import { HUKUM_ISLAM_METADATA } from '../data/hukumIslamData';
import { HUKUM_PEMDA_METADATA } from '../data/hukumPemdaData';

export type SubjectId = 'hukum-islam' | 'hukum-pemda';

interface HomeViewProps {
  onSelectSubject: (subject: SubjectId) => void;
  onOpenMateri: (subject: SubjectId) => void;
  onOpenQuiz: (subject: SubjectId) => void;
  studiedCountIslam: number;
  totalTopicsIslam: number;
  studiedCountPemda: number;
  totalTopicsPemda: number;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectSubject,
  onOpenMateri,
  onOpenQuiz,
  studiedCountIslam,
  totalTopicsIslam,
  studiedCountPemda,
  totalTopicsPemda,
}) => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-20 md:py-24">
      {/* Hero Header: Compact on mobile, expansive on desktop */}
      <div className="text-center mb-8 sm:mb-16 md:mb-20">
        <h1 className="text-[28px] sm:text-4xl md:text-5xl font-semibold sm:font-light tracking-tight text-white mb-2 sm:mb-3">
          MY STUDY SPACE
        </h1>
        <p className="text-[14px] sm:text-base font-normal text-slate-400 tracking-wide">
          Study. Understand. Practice.
        </p>
      </div>

      {/* Subjects Section */}
      <div className="space-y-5 sm:space-y-6">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-slate-400">
            MY SUBJECTS
          </h2>
          <span className="text-xs text-slate-400 font-light">
            2 Kursus Aktif
          </span>
        </div>

        {/* Grid of Subject Cards */}
        <div className="space-y-5 sm:space-y-6">
          {/* Subject 1: Hukum Islam */}
          <div className="group relative rounded-[22px] sm:rounded-2xl liquid-glass-card p-5 sm:p-7 md:p-8 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 sm:gap-6">
              <div className="space-y-2.5 sm:space-y-3.5 flex-1">
                {/* 1. Faculty / credit / course code */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[12px] sm:text-xs text-slate-400">
                  <span>{HUKUM_ISLAM_METADATA.faculty}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{HUKUM_ISLAM_METADATA.credits}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{HUKUM_ISLAM_METADATA.courseCode}</span>
                </div>

                {/* 2. Course name */}
                <div>
                  <button
                    onClick={() => onSelectSubject('hukum-islam')}
                    className="text-left group-hover:text-slate-100 transition-colors"
                  >
                    <h3 className="text-[24px] sm:text-3xl font-medium text-white tracking-tight">
                      Hukum Islam
                    </h3>
                  </button>
                  {/* 3. Short description */}
                  <p className="mt-1.5 sm:mt-2 text-[14px] sm:text-base text-slate-300 font-light leading-relaxed">
                    Materi dan latihan soal untuk persiapan UTS.
                  </p>
                </div>

                {/* 4. Coverage */}
                <div className="pt-0.5 sm:pt-1 flex flex-wrap items-center gap-2 sm:gap-3 text-[12px] sm:text-xs text-slate-400 font-light">
                  <span>Cakupan: Topik 1 – 5</span>
                  <span aria-hidden="true" className="hidden sm:inline text-slate-600">·</span>
                  <span className="hidden sm:inline">Rujukan: Prof. Daud Ali & Prof. Hazairin</span>
                  {studiedCountIslam > 0 && (
                    <>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-emerald-400/90 font-medium">
                        {studiedCountIslam} / {totalTopicsIslam} topik selesai
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* 5. Main CTA: Buka Kursus (Full-width 48px on mobile, compact on desktop) */}
              <div className="w-full sm:w-auto pt-1 sm:pt-0">
                <button
                  onClick={() => onSelectSubject('hukum-islam')}
                  className="w-full sm:w-auto h-[48px] sm:h-auto inline-flex items-center justify-center gap-2 px-5 sm:py-2.5 rounded-[13px] sm:rounded-xl bg-white/[0.08] text-white text-[14px] sm:text-xs font-medium hover:bg-white/[0.14] border border-white/[0.12] hover:border-white/[0.22] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] transition-all duration-200 active:scale-[0.98] sm:active:scale-95"
                >
                  <span>Buka Kursus</span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-300" />
                </button>
              </div>
            </div>

            {/* Clean Apple-style full-width rows on mobile; grid on desktop */}
            <div className="mt-5 sm:mt-7 pt-5 sm:pt-6 border-t border-white/[0.06] flex flex-col sm:grid sm:grid-cols-2 gap-2.5 sm:gap-3.5">
              <button
                onClick={() => onOpenMateri('hukum-islam')}
                className="group/btn flex items-center justify-between h-[58px] sm:h-auto px-4 py-3 sm:p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.14] text-left transition-all duration-200 active:scale-[0.99] active:bg-white/[0.05]"
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300 group-hover/btn:text-white transition-colors shrink-0">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[13px] sm:text-xs font-medium text-slate-200 group-hover/btn:text-white transition-colors">
                      Materi Bacaan
                    </div>
                    <div className="hidden sm:block text-[11px] text-slate-400 font-light mt-0.5">
                      5 Topik Silabus UTS Komprehensif
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover/btn:text-slate-300 group-hover/btn:translate-x-0.5 transition-all duration-200 shrink-0" />
              </button>

              <button
                onClick={() => onOpenQuiz('hukum-islam')}
                className="group/btn flex items-center justify-between h-[58px] sm:h-auto px-4 py-3 sm:p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.14] text-left transition-all duration-200 active:scale-[0.99] active:bg-white/[0.05]"
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300 group-hover/btn:text-white transition-colors shrink-0">
                    <CheckSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[13px] sm:text-xs font-medium text-slate-200 group-hover/btn:text-white transition-colors">
                      Latihan Soal
                    </div>
                    <div className="hidden sm:block text-[11px] text-slate-400 font-light mt-0.5">
                      30 Soal & Pembahasan Lengkap
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover/btn:text-slate-300 group-hover/btn:translate-x-0.5 transition-all duration-200 shrink-0" />
              </button>
            </div>
          </div>

          {/* Subject 2: Hukum Pemerintahan Daerah */}
          <div className="group relative rounded-[22px] sm:rounded-2xl liquid-glass-card p-5 sm:p-7 md:p-8 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 sm:gap-6">
              <div className="space-y-2.5 sm:space-y-3.5 flex-1">
                {/* 1. Faculty / credit / course code */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[12px] sm:text-xs text-slate-400">
                  <span>{HUKUM_PEMDA_METADATA.faculty}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{HUKUM_PEMDA_METADATA.credits}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{HUKUM_PEMDA_METADATA.courseCode}</span>
                </div>

                {/* 2. Course name */}
                <div>
                  <button
                    onClick={() => onSelectSubject('hukum-pemda')}
                    className="text-left group-hover:text-slate-100 transition-colors"
                  >
                    <h3 className="text-[24px] sm:text-3xl font-medium text-white tracking-tight">
                      Hukum Pemerintahan Daerah
                    </h3>
                  </button>
                  {/* 3. Short description */}
                  <p className="mt-1.5 sm:mt-2 text-[14px] sm:text-base text-slate-300 font-light leading-relaxed">
                    Materi dan latihan soal untuk persiapan UTS.
                  </p>
                </div>

                {/* 4. Coverage */}
                <div className="pt-0.5 sm:pt-1 flex flex-wrap items-center gap-2 sm:gap-3 text-[12px] sm:text-xs text-slate-400 font-light">
                  <span>Cakupan: Pertemuan 1 – 7</span>
                  <span aria-hidden="true" className="hidden sm:inline text-slate-600">·</span>
                  <span className="hidden sm:inline">Pengampu: {HUKUM_PEMDA_METADATA.lecturer}</span>
                  {studiedCountPemda > 0 && (
                    <>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-emerald-400/90 font-medium">
                        {studiedCountPemda} / {totalTopicsPemda} pertemuan selesai
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* 5. Main CTA: Buka Kursus (Full-width 48px on mobile, compact on desktop) */}
              <div className="w-full sm:w-auto pt-1 sm:pt-0">
                <button
                  onClick={() => onSelectSubject('hukum-pemda')}
                  className="w-full sm:w-auto h-[48px] sm:h-auto inline-flex items-center justify-center gap-2 px-5 sm:py-2.5 rounded-[13px] sm:rounded-xl bg-white/[0.08] text-white text-[14px] sm:text-xs font-medium hover:bg-white/[0.14] border border-white/[0.12] hover:border-white/[0.22] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] transition-all duration-200 active:scale-[0.98] sm:active:scale-95"
                >
                  <span>Buka Kursus</span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-300" />
                </button>
              </div>
            </div>

            {/* Clean Apple-style full-width rows on mobile; grid on desktop */}
            <div className="mt-5 sm:mt-7 pt-5 sm:pt-6 border-t border-white/[0.06] flex flex-col sm:grid sm:grid-cols-2 gap-2.5 sm:gap-3.5">
              <button
                onClick={() => onOpenMateri('hukum-pemda')}
                className="group/btn flex items-center justify-between h-[58px] sm:h-auto px-4 py-3 sm:p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.14] text-left transition-all duration-200 active:scale-[0.99] active:bg-white/[0.05]"
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300 group-hover/btn:text-white transition-colors shrink-0">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[13px] sm:text-xs font-medium text-slate-200 group-hover/btn:text-white transition-colors">
                      Materi Bacaan
                    </div>
                    <div className="hidden sm:block text-[11px] text-slate-400 font-light mt-0.5">
                      7 Pertemuan Silabus UTS FH UB
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover/btn:text-slate-300 group-hover/btn:translate-x-0.5 transition-all duration-200 shrink-0" />
              </button>

              <button
                onClick={() => onOpenQuiz('hukum-pemda')}
                className="group/btn flex items-center justify-between h-[58px] sm:h-auto px-4 py-3 sm:p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.14] text-left transition-all duration-200 active:scale-[0.99] active:bg-white/[0.05]"
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300 group-hover/btn:text-white transition-colors shrink-0">
                    <CheckSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[13px] sm:text-xs font-medium text-slate-200 group-hover/btn:text-white transition-colors">
                      Latihan Soal
                    </div>
                    <div className="hidden sm:block text-[11px] text-slate-400 font-light mt-0.5">
                      30 Soal & Pembahasan Lengkap
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover/btn:text-slate-300 group-hover/btn:translate-x-0.5 transition-all duration-200 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
