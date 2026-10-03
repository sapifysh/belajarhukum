import React from 'react';
import { BookOpen, CheckCircle, CheckSquare, ChevronRight, Circle } from 'lucide-react';
import { Topic } from '../data/hukumIslamData';

interface SubjectHomeViewProps {
  subjectTitle: string;
  metadata: {
    faculty: string;
    courseCode: string;
    credits: string;
    syllabus: string;
    lecturer?: string;
    references?: string[];
  };
  description: string;
  topics: Topic[];
  studiedTopics: number[];
  onToggleTopicStudied: (topicId: number) => void;
  onOpenMateri: (topicId?: number) => void;
  onOpenQuiz: (topicId?: number) => void;
  topicUnitLabel?: string;
  quizCount?: number;
}

export const SubjectHomeView: React.FC<SubjectHomeViewProps> = ({
  subjectTitle,
  metadata,
  description,
  topics,
  studiedTopics,
  onToggleTopicStudied,
  onOpenMateri,
  onOpenQuiz,
  topicUnitLabel = 'topik',
  quizCount = 30,
}) => {
  const completedCount = studiedTopics.length;
  const totalTopics = topics.length;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Subject Header */}
      <div className="mb-10 sm:mb-12 border-b border-white/[0.06] pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-3">
          <span>{metadata.faculty}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{metadata.courseCode}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{metadata.credits}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{metadata.syllabus}</span>
          {metadata.lecturer && (
            <>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{metadata.lecturer}</span>
            </>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
          {subjectTitle}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-400 font-light max-w-2xl leading-relaxed">
          {description}
        </p>

        {/* Subtle Progress Bar & Indicator */}
        <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-normal text-slate-300">
              {completedCount} dari {totalTopics} {topicUnitLabel} selesai dipelajari
            </span>
          </div>
          <div className="w-32 sm:w-44 bg-slate-800/80 rounded-full h-1.5 overflow-hidden p-0.5 border border-white/[0.05]">
            <div
              className="bg-white/80 h-full rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ width: `${(completedCount / Math.max(1, totalTopics)) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Two Primary Options (Immediately Obvious in Liquid Glass) */}
      <div className="mb-14">
        <h2 className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-4">
          PILIHAN BELAJAR
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: Materi */}
          <button
            onClick={() => onOpenMateri(1)}
            className="group relative rounded-2xl liquid-glass-card p-6 sm:p-7 text-left transition-all duration-300 active:scale-[0.99] overflow-hidden"
          >
            {/* Top specular highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.1] text-slate-200 group-hover:bg-white/[0.1] group-hover:text-white transition-all duration-200 shadow-sm">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="text-xs text-slate-400 font-mono group-hover:text-slate-200 transition-colors">
                {totalTopics} {topicUnitLabel === 'pertemuan' ? 'Pertemuan' : 'Topik'}
              </span>
            </div>

            <h3 className="text-xl font-medium text-white tracking-tight mb-2 flex items-center justify-between">
              <span>Materi</span>
              <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all duration-200" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Membaca dan menelaah materi komprehensif {totalTopics} {topicUnitLabel} dalam tata letak digital textbook yang tenang dan bebas distraksi.
            </p>
          </button>

          {/* Card 2: Latihan Soal */}
          <button
            onClick={() => onOpenQuiz()}
            className="group relative rounded-2xl liquid-glass-card p-6 sm:p-7 text-left transition-all duration-300 active:scale-[0.99] overflow-hidden"
          >
            {/* Top specular highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.1] text-slate-200 group-hover:bg-white/[0.1] group-hover:text-white transition-all duration-200 shadow-sm">
                <CheckSquare className="h-5 w-5" />
              </div>
              <span className="text-xs text-slate-400 font-mono group-hover:text-slate-200 transition-colors">
                {quizCount} Soal
              </span>
            </div>

            <h3 className="text-xl font-medium text-white tracking-tight mb-2 flex items-center justify-between">
              <span>Latihan Soal</span>
              <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all duration-200" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Uji pemahaman konseptual dan studi kasus berbasis materi teks dengan umpan balik benar/salah serta pembahasan ilmiah seketika.
            </p>
          </button>
        </div>
      </div>

      {/* Topics Overview List */}
      <div>
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-slate-400">
            DAFTAR {topicUnitLabel === 'pertemuan' ? 'PERTEMUAN' : 'TOPIK'} MATERI (1 – {totalTopics})
          </h2>
          <span className="text-xs text-slate-400 font-light">
            Silabus UTS
          </span>
        </div>

        <div className="divide-y divide-white/[0.06] rounded-2xl liquid-glass-panel overflow-hidden">
          {topics.map((topic) => {
            const isStudied = studiedTopics.includes(topic.id);
            return (
              <div
                key={topic.id}
                className="flex items-center justify-between p-4 sm:p-5 hover:bg-white/[0.03] transition-all duration-200"
              >
                <div className="flex items-start gap-4 flex-1 pr-4">
                  <button
                    onClick={() => onToggleTopicStudied(topic.id)}
                    className="mt-0.5 text-slate-400 hover:text-slate-200 transition-transform active:scale-90"
                    title={isStudied ? 'Tandai belum dipelajari' : 'Tandai sudah dipelajari'}
                    aria-label={isStudied ? 'Tandai belum dipelajari' : 'Tandai sudah dipelajari'}
                  >
                    {isStudied ? (
                      <CheckCircle className="h-5 w-5 text-emerald-400" />
                    ) : (
                      <Circle className="h-5 w-5 text-slate-600 hover:text-slate-400" />
                    )}
                  </button>

                  <div
                    onClick={() => onOpenMateri(topic.id)}
                    className="cursor-pointer flex-1"
                  >
                    <div className="text-[11px] font-mono tracking-wider text-slate-400 mb-0.5">
                      {topic.numberStr}
                    </div>
                    <h3 className="text-sm sm:text-base font-normal text-white hover:text-slate-200 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 font-light line-clamp-1">
                      {topic.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenQuiz(topic.id)}
                    className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.1] transition-all duration-200 active:scale-95"
                  >
                    <span>Latihan</span>
                  </button>
                  <button
                    onClick={() => onOpenMateri(topic.id)}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.1] transition-all duration-200 active:scale-95"
                    title="Buka topik"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
