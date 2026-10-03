import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Filter,
  RefreshCw,
  X,
  XCircle,
} from 'lucide-react';
import { PRACTICE_QUESTIONS, PracticeQuestion, QuestionType } from '../data/practiceQuestionsData';
import { TOPICS_DATA, Topic } from '../data/hukumIslamData';

interface PracticeQuizViewProps {
  initialTopicFilter?: number;
  userAnswers: Record<string, number>;
  onAnswerQuestion: (questionId: string, optionIndex: number) => void;
  onResetAnswers: () => void;
  onOpenMateri: (topicId: number) => void;
  questions?: PracticeQuestion[];
  topics?: Topic[];
  subjectTitle?: string;
  topicUnitLabel?: string;
  curriculumNote?: string;
}

export const PracticeQuizView: React.FC<PracticeQuizViewProps> = ({
  initialTopicFilter,
  userAnswers,
  onAnswerQuestion,
  onResetAnswers,
  onOpenMateri,
  questions = PRACTICE_QUESTIONS,
  topics = TOPICS_DATA,
  subjectTitle = 'Hukum Islam',
  topicUnitLabel = 'Topik',
  curriculumNote = 'Pertanyaan berbasis materi resmi Silabus UTS.',
}) => {
  const [selectedTopic, setSelectedTopic] = useState<number | 'all'>(
    initialTopicFilter || 'all'
  );
  const [selectedType, setSelectedType] = useState<QuestionType | 'all'>('all');
  const [viewMode, setViewMode] = useState<'stepper' | 'list'>('stepper');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter questions based on selections
  const filteredQuestions = questions.filter((q) => {
    const topicMatch = selectedTopic === 'all' || q.topicId === selectedTopic;
    const typeMatch = selectedType === 'all' || q.type === selectedType;
    return topicMatch && typeMatch;
  });

  const totalFiltered = filteredQuestions.length;
  const safeCurrentIndex = Math.min(currentIndex, Math.max(0, totalFiltered - 1));
  const currentQuestion: PracticeQuestion | undefined = filteredQuestions[safeCurrentIndex];

  // Calculate statistics for filtered set
  const answeredCount = filteredQuestions.filter(
    (q) => userAnswers[q.id] !== undefined
  ).length;

  const correctCount = filteredQuestions.filter(
    (q) => userAnswers[q.id] !== undefined && userAnswers[q.id] === q.correctIndex
  ).length;

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-12">
      {/* Header & Description */}
      <div className="mb-6 sm:mb-8 border-b border-white/[0.08] pb-5 sm:pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="text-[11px] sm:text-xs font-mono tracking-wider text-slate-400 mb-1 uppercase">
              {subjectTitle} · LATIHAN SOAL UTS
            </div>
            <h1 className="text-[22px] sm:text-3xl font-light text-white tracking-tight">
              Latihan Soal & Pembahasan
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-400 font-light">
              {curriculumNote}
            </p>
          </div>

          {/* Quick Metrics & Reset in Glass Pill */}
          <div className="flex items-center justify-between sm:justify-end gap-2.5 sm:gap-3">
            <div className="text-left sm:text-right text-xs text-slate-400 bg-white/[0.03] px-3.5 py-2 rounded-xl border border-white/[0.06]">
              <div>
                Dijawab:{' '}
                <span className="text-slate-200 font-medium">
                  {answeredCount} / {totalFiltered}
                </span>
              </div>
              {answeredCount > 0 && (
                <div className="text-[11px] text-emerald-400 font-medium">
                  {correctCount} Benar ({Math.round((correctCount / answeredCount) * 100)}%)
                </div>
              )}
            </div>

            {answeredCount > 0 && (
              <button
                onClick={() => {
                  if (window.confirm('Reset semua jawaban latihan untuk memulai kembali?')) {
                    onResetAnswers();
                  }
                }}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200 active:scale-95 shrink-0"
                title="Reset Jawaban Latihan"
                aria-label="Reset Jawaban Latihan"
              >
                <RefreshCw className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filters and View Mode Controls in Liquid Glass Pill */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 p-2 rounded-[22px] sm:rounded-2xl liquid-glass-panel">
          {/* Topic Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <button
              onClick={() => {
                setSelectedTopic('all');
                setCurrentIndex(0);
              }}
              className={`min-h-[38px] px-3 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all duration-200 active:scale-95 shrink-0 ${
                selectedTopic === 'all'
                  ? 'bg-white/[0.14] text-white font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] border border-white/[0.14]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
              }`}
            >
              Semua ({questions.length})
            </button>
            {topics.map((t) => {
              const count = questions.filter((q) => q.topicId === t.id).length;
              const shortLabel = topicUnitLabel === 'Pertemuan' ? `P${t.id}` : `T${t.id}`;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setSelectedTopic(t.id);
                    setCurrentIndex(0);
                  }}
                  className={`min-h-[38px] px-2.5 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all duration-200 active:scale-95 shrink-0 ${
                    selectedTopic === t.id
                      ? 'bg-white/[0.14] text-white font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] border border-white/[0.14]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {shortLabel} ({count})
                </button>
              );
            })}
          </div>

          {/* Type Filter & Mode Switcher */}
          <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 px-1 pt-1.5 sm:pt-0 border-t border-white/[0.04] sm:border-t-0">
            <div className="flex items-center gap-1.5 text-xs flex-1 sm:flex-initial">
              <Filter className="h-3 w-3 text-slate-500 shrink-0" />
              <select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value as QuestionType | 'all');
                  setCurrentIndex(0);
                }}
                className="w-full sm:w-auto h-[38px] bg-[#0b0f16] border border-white/[0.08] text-slate-300 text-xs rounded-xl px-2.5 py-1 focus:outline-none focus:border-white/20 transition-colors"
              >
                <option value="all">Semua Tipe Soal</option>
                <option value="conceptual">Konseptual</option>
                <option value="scenario">Studi Kasus / Skenario</option>
                <option value="mcq">Pilihan Ganda</option>
              </select>
            </div>

            <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block" />

            <div className="flex items-center h-[38px] p-0.5 rounded-xl bg-white/[0.04] border border-white/[0.06] shrink-0">
              <button
                onClick={() => setViewMode('stepper')}
                className={`h-full px-2.5 rounded-lg text-[11px] font-medium transition-all duration-200 flex items-center justify-center ${
                  viewMode === 'stepper'
                    ? 'bg-white/[0.14] text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Fokus
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`h-full px-2.5 rounded-lg text-[11px] font-medium transition-all duration-200 flex items-center justify-center ${
                  viewMode === 'list'
                    ? 'bg-white/[0.14] text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {totalFiltered === 0 ? (
        <div className="py-16 text-center text-slate-400">
          <p className="text-sm">Tidak ada pertanyaan yang sesuai dengan filter yang dipilih.</p>
          <button
            onClick={() => {
              setSelectedTopic('all');
              setSelectedType('all');
            }}
            className="mt-3 px-3.5 py-1.5 text-xs text-slate-300 hover:text-white border border-white/10 rounded-xl hover:bg-white/[0.05] transition-all"
          >
            Reset Filter
          </button>
        </div>
      ) : viewMode === 'stepper' && currentQuestion ? (
        /* Stepper Focus Mode */
        <div className="space-y-6">
          {/* Stepper Header Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-slate-300">
                Soal {safeCurrentIndex + 1} dari {totalFiltered}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{currentQuestion.topicTitle}</span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              {currentQuestion.typeLabel}
            </span>
          </div>

          {/* Question Card Component */}
          <QuestionItem
            question={currentQuestion}
            selectedAnswer={userAnswers[currentQuestion.id]}
            onSelectOption={(idx) => onAnswerQuestion(currentQuestion.id, idx)}
            onOpenMateri={() => onOpenMateri(currentQuestion.topicId)}
          />

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center justify-between pt-5 sm:pt-6 border-t border-white/[0.08]">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={safeCurrentIndex === 0}
              className="min-h-[48px] flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] text-[13px] text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 active:scale-95"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Sebelumnya</span>
            </button>

            {/* Quick jump dot matrix */}
            <div className="hidden sm:flex items-center gap-1">
              {filteredQuestions.map((q, idx) => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const isCorrect = userAnswers[q.id] === q.correctIndex;
                const isActive = idx === safeCurrentIndex;
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-6 h-6 rounded-lg text-[10px] font-mono flex items-center justify-center transition-all duration-200 active:scale-90 ${
                      isActive
                        ? 'border border-white/50 bg-white/20 text-white font-bold shadow-sm'
                        : isAnswered
                        ? isCorrect
                          ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-500/20'
                          : 'text-rose-400 bg-rose-950/40 border border-rose-500/20'
                        : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.05]'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentIndex((prev) => Math.min(totalFiltered - 1, prev + 1))}
              disabled={safeCurrentIndex === totalFiltered - 1}
              className="min-h-[48px] flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] text-[13px] text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 active:scale-95"
            >
              <span>Selanjutnya</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* List Mode: Continuous Stream */
        <div className="space-y-6 sm:space-y-10">
          {filteredQuestions.map((q, idx) => (
            <div key={q.id} className="pt-2">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2 px-1">
                <span className="font-mono text-slate-300">
                  #{idx + 1} · {q.topicTitle}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {q.typeLabel}
                </span>
              </div>
              <QuestionItem
                question={q}
                selectedAnswer={userAnswers[q.id]}
                onSelectOption={(optIdx) => onAnswerQuestion(q.id, optIdx)}
                onOpenMateri={() => onOpenMateri(q.topicId)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface QuestionItemProps {
  question: PracticeQuestion;
  selectedAnswer?: number;
  onSelectOption: (index: number) => void;
  onOpenMateri: () => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  question,
  selectedAnswer,
  onSelectOption,
  onOpenMateri,
}) => {
  const isAnswered = selectedAnswer !== undefined;
  const isCorrect = isAnswered && selectedAnswer === question.correctIndex;

  return (
    <div className="rounded-[22px] sm:rounded-2xl liquid-glass-panel p-4 sm:p-7 space-y-4 sm:space-y-6 relative overflow-hidden">
      {/* Specular rim highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      {/* Question Prompt */}
      <div>
        <p className="text-[15.5px] sm:text-lg font-normal text-white leading-relaxed">
          {question.question}
        </p>
      </div>

      {/* Answer Options in Liquid Glass */}
      <div className="space-y-2 sm:space-y-2.5">
        {question.options.map((optionText, optIdx) => {
          const letter = String.fromCharCode(65 + optIdx);
          const isSelected = selectedAnswer === optIdx;
          const isThisCorrect = optIdx === question.correctIndex;

          let optionStyle =
            'border-white/[0.08] bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white';

          if (isAnswered) {
            if (isThisCorrect) {
              optionStyle =
                'border-emerald-500/50 bg-emerald-950/30 text-emerald-200 font-medium shadow-[inset_0_1px_0_0_rgba(52,211,153,0.2)]';
            } else if (isSelected && !isThisCorrect) {
              optionStyle =
                'border-rose-500/50 bg-rose-950/30 text-rose-200 shadow-[inset_0_1px_0_0_rgba(244,63,94,0.2)]';
            } else {
              optionStyle = 'border-white/[0.04] bg-white/[0.01] text-slate-500 opacity-50';
            }
          }

          return (
            <button
              key={optIdx}
              onClick={() => onSelectOption(optIdx)}
              className={`w-full min-h-[48px] flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border text-left text-[14px] sm:text-sm transition-all duration-200 active:scale-[0.99] active:bg-white/[0.06] ${optionStyle}`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-mono font-medium transition-colors mt-0.5 ${
                  isAnswered && isThisCorrect
                    ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40'
                    : isAnswered && isSelected && !isThisCorrect
                    ? 'bg-rose-500/30 text-rose-300 border border-rose-500/40'
                    : 'bg-white/[0.06] text-slate-400'
                }`}
              >
                {letter}
              </span>

              <span className="flex-1 leading-relaxed pt-0.5">{optionText}</span>

              {isAnswered && isThisCorrect && (
                <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-1" />
              )}
              {isAnswered && isSelected && !isThisCorrect && (
                <X className="h-4 w-4 text-rose-400 shrink-0 mt-1" />
              )}
            </button>
          );
        })}
      </div>

      {/* Answer Feedback & Detailed Pembahasan */}
      {isAnswered && (
        <div className="pt-5 border-t border-white/[0.07] space-y-4 animate-in fade-in duration-300">
          {/* Benar / Salah Banner */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Benar
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="h-4 w-4 text-rose-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                    Salah
                  </span>
                  <span className="text-xs text-slate-400 font-light">
                    (Jawaban tepat: {String.fromCharCode(65 + question.correctIndex)})
                  </span>
                </>
              )}
            </div>

            <button
              onClick={onOpenMateri}
              className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white transition-colors"
            >
              <BookOpen className="h-3 w-3" />
              <span>Lihat Materi Terkait</span>
            </button>
          </div>

          {/* Pembahasan Explanation Card in Refined Glass */}
          <div className="rounded-xl border border-white/[0.08] bg-slate-950/60 p-4 sm:p-5 space-y-2.5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              PEMBAHASAN
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {question.explanation}
            </p>
            <div className="pt-2 text-[10px] text-slate-500 font-mono">
              Sumber: {question.referenceSource}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
