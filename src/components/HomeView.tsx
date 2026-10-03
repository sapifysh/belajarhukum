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
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      {/* Hero Header: Apple-style Minimalist Presence */}
      <div className="text-center mb-16 sm:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-3">
          MY STUDY SPACE
        </h1>
        <p className="text-sm sm:text-base font-normal text-slate-400 tracking-wide">
          Study. Understand. Practice.
        </p>
      </div>

      {/* Subjects Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-slate-400">
            MY SUBJECTS
          </h2>
          <span className="text-xs text-slate-400 font-light">
            2 Kursus Aktif
          </span>
        </div>

        {/* Grid of Subject Cards */}
        <div className="space-y-6">
          {/* Subject 1: Hukum Islam */}
          <div className="group relative rounded-2xl liquid-glass-card p-6 sm:p-8 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="space-y-3.5 flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span>{HUKUM_ISLAM_METADATA.faculty}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{HUKUM_ISLAM_METADATA.credits}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{HUKUM_ISLAM_METADATA.courseCode}</span>
                </div>

                <div>
                  <button
                    onClick={() => onSelectSubject('hukum-islam')}
                    className="text-left group-hover:text-slate-100 transition-colors"
                  >
                    <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                      Hukum Islam
                    </h3>
                  </button>
                  <p className="mt-2 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                    Materi dan latihan soal untuk persiapan UTS.
                  </p>
                </div>

                <div className="pt-1 flex flex-wrap items-center gap-3 text-xs text-slate-400 font-light">
                  <span>Cakupan: Topik 1 – 5</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Rujukan: Prof. Daud Ali & Prof. Hazairin</span>
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

              {/* Quick Actions Button */}
              <div className="flex sm:flex-col items-center sm:items-end gap-2.5 pt-2 sm:pt-0">
                <button
                  onClick={() => onSelectSubject('hukum-islam')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.08] text-white text-xs font-medium hover:bg-white/[0.14] border border-white/[0.12] hover:border-white/[0.22] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] transition-all duration-200 active:scale-95"
                >
                  <span>Buka Kursus</span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-300" />
                </button>
              </div>
            </div>

            {/* Quick Dual Paths */}
            <div className="mt-7 pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <button
                onClick={() => onOpenMateri('hukum-islam')}
                className="group/btn flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.14] text-left transition-all duration-200 active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300 group-hover/btn:text-white transition-colors">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-200 group-hover/btn:text-white transition-colors">
                      Materi Bacaan
                    </div>
                    <div className="text-[11px] text-slate-400 font-light mt-0.5">
                      5 Topik Silabus UTS Komprehensif
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover/btn:text-slate-300 group-hover/btn:translate-x-0.5 transition-all duration-200" />
              </button>

              <button
                onClick={() => onOpenQuiz('hukum-islam')}
                className="group/btn flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.14] text-left transition-all duration-200 active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300 group-hover/btn:text-white transition-colors">
                    <CheckSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-200 group-hover/btn:text-white transition-colors">
                      Latihan Soal
                    </div>
                    <div className="text-[11px] text-slate-400 font-light mt-0.5">
                      30 Soal & Pembahasan Lengkap
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover/btn:text-slate-300 group-hover/btn:translate-x-0.5 transition-all duration-200" />
              </button>
            </div>
          </div>

          {/* Subject 2: Hukum Pemerintahan Daerah */}
          <div className="group relative rounded-2xl liquid-glass-card p-6 sm:p-8 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="space-y-3.5 flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span>{HUKUM_PEMDA_METADATA.faculty}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{HUKUM_PEMDA_METADATA.credits}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{HUKUM_PEMDA_METADATA.courseCode}</span>
                </div>

                <div>
                  <button
                    onClick={() => onSelectSubject('hukum-pemda')}
                    className="text-left group-hover:text-slate-100 transition-colors"
                  >
                    <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                      Hukum Pemerintahan Daerah
                    </h3>
                  </button>
                  <p className="mt-2 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                    Materi dan latihan soal untuk persiapan UTS.
                  </p>
                </div>

                <div className="pt-1 flex flex-wrap items-center gap-3 text-xs text-slate-400 font-light">
                  <span>Cakupan: Pertemuan 1 – 7</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Pengampu: {HUKUM_PEMDA_METADATA.lecturer}</span>
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

              {/* Quick Actions Button */}
              <div className="flex sm:flex-col items-center sm:items-end gap-2.5 pt-2 sm:pt-0">
                <button
                  onClick={() => onSelectSubject('hukum-pemda')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.08] text-white text-xs font-medium hover:bg-white/[0.14] border border-white/[0.12] hover:border-white/[0.22] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] transition-all duration-200 active:scale-95"
                >
                  <span>Buka Kursus</span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-300" />
                </button>
              </div>
            </div>

            {/* Quick Dual Paths */}
            <div className="mt-7 pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <button
                onClick={() => onOpenMateri('hukum-pemda')}
                className="group/btn flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.14] text-left transition-all duration-200 active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300 group-hover/btn:text-white transition-colors">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-200 group-hover/btn:text-white transition-colors">
                      Materi Bacaan
                    </div>
                    <div className="text-[11px] text-slate-400 font-light mt-0.5">
                      7 Pertemuan Silabus UTS FH UB
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover/btn:text-slate-300 group-hover/btn:translate-x-0.5 transition-all duration-200" />
              </button>

              <button
                onClick={() => onOpenQuiz('hukum-pemda')}
                className="group/btn flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.14] text-left transition-all duration-200 active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300 group-hover/btn:text-white transition-colors">
                    <CheckSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-200 group-hover/btn:text-white transition-colors">
                      Latihan Soal
                    </div>
                    <div className="text-[11px] text-slate-400 font-light mt-0.5">
                      30 Soal & Pembahasan Lengkap
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover/btn:text-slate-300 group-hover/btn:translate-x-0.5 transition-all duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
