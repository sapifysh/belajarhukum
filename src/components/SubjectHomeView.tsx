import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle,
  CheckSquare,
  ChevronRight,
  Circle,
  Clock,
  Compass,
  FileText,
  HelpCircle,
  Search,
  Sparkles,
  UserCheck,
  X,
} from 'lucide-react';
import { Topic } from '../data/hukumIslamData';
import { GlossaryItem, StatutoryDuration } from '../data/hukumPidanaData';

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
  masterFlow?: {
    title: string;
    subtitle: string;
    stages: {
      id: string;
      number: string;
      title: string;
      actor: string;
      desc: string;
      branches: string[];
    }[];
  };
  angkaPenting?: StatutoryDuration[];
  glossary?: GlossaryItem[];
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
  masterFlow,
  angkaPenting,
  glossary,
}) => {
  const completedCount = studiedTopics.length;
  const totalTopics = topics.length;

  const [activeTab, setActiveTab] = useState<'materi' | 'masterflow' | 'angka' | 'glossary'>('materi');
  const [glossarySearch, setGlossarySearch] = useState('');
  const [selectedFlowStage, setSelectedFlowStage] = useState<string | null>(null);

  const hasSpecialTools = !!(masterFlow || angkaPenting || glossary);

  const filteredGlossary = glossary
    ? glossary.filter((g) => {
        const q = glossarySearch.toLowerCase();
        return (
          g.term.toLowerCase().includes(q) ||
          g.definition.toLowerCase().includes(q) ||
          g.category.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-16">
      {/* Subject Header */}
      <div className="mb-8 sm:mb-12 border-b border-white/[0.06] pb-6 sm:pb-8">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[12px] sm:text-xs text-slate-400 mb-2.5 sm:mb-3">
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

        <h1 className="text-[26px] sm:text-4xl font-medium sm:font-light text-white tracking-tight">
          {subjectTitle}
        </h1>
        <p className="mt-1.5 sm:mt-2 text-[14px] sm:text-base text-slate-400 font-light max-w-2xl leading-relaxed">
          {description}
        </p>

        {/* Subtle Progress Bar & Indicator */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-normal text-slate-300">
              {completedCount} dari {totalTopics} {topicUnitLabel} selesai dipelajari
            </span>
          </div>
          <div className="w-full sm:w-44 bg-slate-800/80 rounded-full h-1.5 overflow-hidden p-0.5 border border-white/[0.05]">
            <div
              className="bg-white/80 h-full rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ width: `${(completedCount / Math.max(1, totalTopics)) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Two Primary Options (Immediately Obvious in Liquid Glass) */}
      <div className="mb-10 sm:mb-14">
        <h2 className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-3.5 sm:mb-4">
          PILIHAN BELAJAR
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {/* Card 1: Materi */}
          <button
            onClick={() => onOpenMateri(1)}
            className="group relative rounded-[22px] sm:rounded-2xl liquid-glass-card p-5 sm:p-7 text-left transition-all duration-300 active:scale-[0.99] overflow-hidden"
          >
            {/* Top specular highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-3.5 sm:mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.1] text-slate-200 group-hover:bg-white/[0.1] group-hover:text-white transition-all duration-200 shadow-sm">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="text-xs text-slate-400 font-mono group-hover:text-slate-200 transition-colors">
                {totalTopics} {topicUnitLabel === 'pertemuan' ? 'Pertemuan' : 'Topik'}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight mb-1.5 sm:mb-2 flex items-center justify-between">
              <span>Materi Bacaan</span>
              <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all duration-200" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Membaca dan menelaah materi komprehensif {totalTopics} {topicUnitLabel} dalam tata letak digital study guide yang tenang dan bebas distraksi.
            </p>
          </button>

          {/* Card 2: Latihan Soal */}
          <button
            onClick={() => onOpenQuiz()}
            className="group relative rounded-[22px] sm:rounded-2xl liquid-glass-card p-5 sm:p-7 text-left transition-all duration-300 active:scale-[0.99] overflow-hidden"
          >
            {/* Top specular highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-3.5 sm:mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.1] text-slate-200 group-hover:bg-white/[0.1] group-hover:text-white transition-all duration-200 shadow-sm">
                <CheckSquare className="h-5 w-5" />
              </div>
              <span className="text-xs text-slate-400 font-mono group-hover:text-slate-200 transition-colors">
                {quizCount} Soal
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight mb-1.5 sm:mb-2 flex items-center justify-between">
              <span>Latihan Soal</span>
              <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all duration-200" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Uji pemahaman konseptual dan studi kasus berbasis materi teks dengan umpan balik benar/salah serta pembahasan ilmiah seketika.
            </p>
          </button>
        </div>
      </div>

      {/* Special Interactive Study Tools Tab Selector (if available) */}
      {hasSpecialTools && (
        <div className="mb-6 sm:mb-8 p-1.5 rounded-2xl liquid-glass-panel border border-white/[0.08] flex items-center gap-1 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('materi')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-[12.5px] sm:text-xs font-medium whitespace-nowrap transition-all duration-200 ${
              activeTab === 'materi'
                ? 'bg-white/[0.14] text-white border border-white/[0.16] shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Daftar {topicUnitLabel === 'pertemuan' ? 'Pertemuan' : 'Topik'}</span>
          </button>

          {masterFlow && (
            <button
              onClick={() => setActiveTab('masterflow')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-[12.5px] sm:text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === 'masterflow'
                  ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Compass className="h-3.5 w-3.5 text-cyan-400" />
              <span>Master Flow Perkara</span>
            </button>
          )}

          {angkaPenting && (
            <button
              onClick={() => setActiveTab('angka')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-[12.5px] sm:text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === 'angka'
                  ? 'bg-amber-500/20 text-amber-200 border border-amber-400/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Clock className="h-3.5 w-3.5 text-amber-400" />
              <span>Angka &amp; Tenggang Waktu</span>
            </button>
          )}

          {glossary && (
            <button
              onClick={() => setActiveTab('glossary')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-[12.5px] sm:text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === 'glossary'
                  ? 'bg-purple-500/20 text-purple-200 border border-purple-400/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="h-3.5 w-3.5 text-purple-400" />
              <span>Glosarium Istilah</span>
            </button>
          )}
        </div>
      )}

      {/* TAB 1: Topics Overview List */}
      {activeTab === 'materi' && (
        <div>
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-3.5 sm:mb-4">
            <h2 className="text-xs font-semibold tracking-wider uppercase text-slate-400">
              DAFTAR {topicUnitLabel === 'pertemuan' ? 'PERTEMUAN' : 'TOPIK'} MATERI (1 – {totalTopics})
            </h2>
            <span className="text-xs text-slate-400 font-light">
              Silabus Lengkap
            </span>
          </div>

          <div className="divide-y divide-white/[0.06] rounded-[22px] sm:rounded-2xl liquid-glass-panel overflow-hidden">
            {topics.map((topic) => {
              const isStudied = studiedTopics.includes(topic.id);
              return (
                <div
                  key={topic.id}
                  className="flex items-center justify-between p-3.5 sm:p-5 hover:bg-white/[0.03] transition-all duration-200"
                >
                  <div className="flex items-start gap-2 sm:gap-4 flex-1 pr-2 sm:pr-4">
                    <button
                      onClick={() => onToggleTopicStudied(topic.id)}
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center -ml-2 -mt-2 text-slate-400 hover:text-slate-200 transition-transform active:scale-90 shrink-0"
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
                      className="cursor-pointer flex-1 py-1"
                    >
                      <div className="text-[11px] font-mono tracking-wider text-slate-400 mb-0.5">
                        {topic.numberStr}
                      </div>
                      <h3 className="text-sm sm:text-base font-normal text-white hover:text-slate-200 transition-colors">
                        {topic.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-slate-400 font-light line-clamp-1">
                        {topic.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                    <button
                      onClick={() => onOpenQuiz(topic.id)}
                      className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.1] transition-all duration-200 active:scale-95"
                    >
                      <span>Latihan</span>
                    </button>
                    <button
                      onClick={() => onOpenMateri(topic.id)}
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all duration-200 active:scale-90 shrink-0"
                      title="Buka materi"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: Master Flow: Bagaimana Sebuah Perkara Pidana Berjalan? */}
      {activeTab === 'masterflow' && masterFlow && (
        <div className="space-y-6">
          <div className="border-b border-white/[0.06] pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                {masterFlow.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
                {masterFlow.subtitle}
              </p>
            </div>
            <span className="text-xs text-cyan-400 font-mono">10 Tahapan Utama</span>
          </div>

          <div className="space-y-3">
            {masterFlow.stages.map((st, sIdx) => {
              const isSelected = selectedFlowStage === st.id;
              const isLast = sIdx === masterFlow.stages.length - 1;

              return (
                <div key={st.id} className="relative">
                  <div
                    onClick={() => setSelectedFlowStage(isSelected ? null : st.id)}
                    className={`cursor-pointer rounded-2xl p-4 sm:p-5 border transition-all duration-200 ${
                      isSelected
                        ? 'bg-white/[0.08] border-cyan-400/40 shadow-lg'
                        : 'bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div
                          className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-xs sm:text-sm font-semibold shrink-0 ${
                            isSelected
                              ? 'bg-cyan-500 text-black font-bold'
                              : 'bg-white/[0.06] text-slate-300 border border-white/[0.1]'
                          }`}
                        >
                          {st.number}
                        </div>
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-base sm:text-lg font-medium text-white">
                              {st.title}
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                              {st.actor}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                            {st.desc}
                          </p>
                        </div>
                      </div>

                      <ChevronRight
                        className={`h-4 w-4 text-slate-500 transition-transform duration-200 shrink-0 mt-1 ${
                          isSelected ? 'rotate-90 text-cyan-400' : ''
                        }`}
                      />
                    </div>

                    {/* Detailed branches / outcomes */}
                    {isSelected && (
                      <div className="mt-4 pt-3.5 border-t border-white/[0.08] space-y-2 text-xs sm:text-sm animate-fadeIn">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          Peluang Jalur / Cabang Keputusan:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {st.branches.map((br, bIdx) => (
                            <div
                              key={bIdx}
                              className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] text-slate-200 flex items-center gap-1.5"
                            >
                              <ArrowRight className="h-3 w-3 text-cyan-400 shrink-0" />
                              <span>{br}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {!isLast && (
                    <div className="flex justify-center py-1.5">
                      <ArrowDown className="h-4 w-4 text-slate-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: Angka dan Jangka Waktu Penting */}
      {activeTab === 'angka' && angkaPenting && (
        <div className="space-y-6">
          <div className="border-b border-white/[0.06] pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                Angka &amp; Tenggang Waktu Penting
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
                Daftar pembatasan waktu dan tenggang yuridis dalam KUHAP UU No. 20 Tahun 2025
              </p>
            </div>
            <span className="text-xs text-amber-400 font-mono">{angkaPenting.length} Batas Waktu</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {angkaPenting.map((item, aIdx) => (
              <div
                key={aIdx}
                className="rounded-2xl liquid-glass-panel p-4 sm:p-5 border border-white/[0.08] relative overflow-hidden flex flex-col justify-between"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
                    item.isUrgent ? 'via-rose-400/40' : 'via-amber-400/40'
                  } to-transparent pointer-events-none`}
                />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                        item.isUrgent
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      <Clock className="h-3 w-3" />
                      {item.duration}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.legalBasis}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1.5">
                    {item.actionTitle}
                  </h4>
                  <div className="text-xs text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <UserCheck className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Aktor: {item.actor}</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-300 font-light leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                {item.consequence && (
                  <div className="pt-2.5 border-t border-white/[0.06] text-[11px] text-slate-400 italic">
                    Konsekuensi: {item.consequence}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: Glosarium Istilah Hukum */}
      {activeTab === 'glossary' && glossary && (
        <div className="space-y-6">
          <div className="border-b border-white/[0.06] pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                Glosarium Istilah Hukum Acara Pidana
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
                Kamus istilah doktrin, asas, dan terminologi penting berdasarkan materi resmi
              </p>
            </div>

            {/* Glossary Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                placeholder="Cari istilah hukum..."
                className="w-full h-[38px] pl-9 pr-8 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-purple-400/40"
              />
              {glossarySearch && (
                <button
                  onClick={() => setGlossarySearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {filteredGlossary.map((item, gIdx) => (
              <div
                key={gIdx}
                className="rounded-2xl liquid-glass-panel p-4 sm:p-5 border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10.5px] font-medium px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                      {item.category}
                    </span>
                    {item.legalBasis && (
                      <span className="text-[10px] text-slate-400 font-mono">
                        {item.legalBasis}
                      </span>
                    )}
                  </div>
                  <h4 className="text-base sm:text-[17px] font-semibold text-white tracking-tight mb-2">
                    {item.term}
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-slate-300 font-light leading-relaxed">
                    {item.definition}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

