import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  CheckSquare,
  Circle,
  Search,
  Sparkles,
  Type,
  X
} from 'lucide-react';
import { TOPICS_DATA, Topic } from '../data/hukumIslamData';
import { InteractiveFlowchart } from './InteractiveFlowchart';

interface MaterialReaderViewProps {
  currentTopicId: number;
  onSelectTopic: (id: number) => void;
  onOpenQuizForTopic: (id: number) => void;
  studiedTopics: number[];
  onToggleTopicStudied: (topicId: number) => void;
  topics?: Topic[];
  topicUnitLabel?: string;
  referenceNote?: string;
}

export const MaterialReaderView: React.FC<MaterialReaderViewProps> = ({
  currentTopicId,
  onSelectTopic,
  onOpenQuizForTopic,
  studiedTopics,
  onToggleTopicStudied,
  topics = TOPICS_DATA,
  topicUnitLabel = 'Topik',
  referenceNote = 'Rujukan Akademis: Kurikulum Fakultas Hukum · Silabus RPS',
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [searchQuery, setSearchQuery] = useState('');

  const currentTopic = topics.find((t) => t.id === currentTopicId) || topics[0];
  const isStudied = studiedTopics.includes(currentTopic.id);

  // Filter sections if search query exists
  const filteredSections = searchQuery.trim()
    ? currentTopic.sections.filter((sec) => {
        const query = searchQuery.toLowerCase();
        const inTitle = sec.title.toLowerCase().includes(query);
        const inContent = sec.content.some((c) => c.toLowerCase().includes(query));
        const inPoints = sec.keyPoints?.some((p) => p.toLowerCase().includes(query));
        return inTitle || inContent || inPoints;
      })
    : currentTopic.sections;

  const currentIdx = topics.findIndex((t) => t.id === currentTopic.id);
  const prevTopic = currentIdx > 0 ? topics[currentIdx - 1] : null;
  const nextTopic = currentIdx < topics.length - 1 ? topics[currentIdx + 1] : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-12 font-['Inter',sans-serif]">
      {/* Top Topic Switcher Bar: Floating Glass Pill Container */}
      <div className="mb-8 sm:mb-12 p-2 sm:p-2.5 rounded-[22px] sm:rounded-2xl liquid-glass-panel">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
          {/* Segmented Topic Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {topics.map((t) => {
              const active = t.id === currentTopic.id;
              const completed = studiedTopics.includes(t.id);
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    onSelectTopic(t.id);
                    setSearchQuery('');
                  }}
                  className={`flex items-center gap-1.5 min-h-[40px] px-3.5 py-1.5 rounded-xl text-[12px] sm:text-[13px] font-medium whitespace-nowrap transition-all duration-200 active:scale-95 shrink-0 ${
                    active
                      ? 'bg-white/[0.14] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.3)] border border-white/[0.14]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {completed && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  )}
                  <span>{t.numberStr}</span>
                </button>
              );
            })}
          </div>

          {/* Reading Customization Controls */}
          <div className="flex items-center justify-end gap-2 shrink-0">
            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
              className={`min-h-[40px] px-3 py-1.5 rounded-xl text-[12px] font-medium border border-white/[0.08] transition-all duration-200 active:scale-95 flex items-center gap-1.5 ${
                fontSize === 'large'
                  ? 'bg-white/[0.12] text-white border-white/[0.18]'
                  : 'text-slate-400 hover:text-slate-200 bg-white/[0.02]'
              }`}
              title="Sesuaikan Ukuran Font"
            >
              <Type className="h-3.5 w-3.5" />
              <span>{fontSize === 'large' ? 'Font: 18px' : 'Font: 16px'}</span>
            </button>
          </div>
        </div>

        {/* Quick Search within this topic */}
        <div className="relative mt-2 sm:mt-2.5">
          <Search className="absolute left-3.5 top-3 h-3.5 w-3.5 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari konsep dalam materi ini..."
            className="w-full h-[42px] rounded-xl border border-white/[0.06] bg-white/[0.02] pl-9 pr-8 py-2 text-[13px] text-slate-200 placeholder:text-slate-500 focus:border-white/20 focus:bg-white/[0.04] focus:outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 h-7 w-7 flex items-center justify-center text-slate-500 hover:text-slate-300 transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Centered Editorial Reading Column */}
      <div className="relative mx-auto max-w-[720px]">
        {/* Invisible Reading Zone Feathered Backdrop - Strengthened on mobile for crystal readability */}
        <div
          aria-hidden="true"
          className="absolute -inset-y-12 -inset-x-4 sm:-inset-x-24 pointer-events-none -z-10"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(5, 8, 18, 0.78) 0%, rgba(5, 8, 18, 0.55) 55%, rgba(5, 8, 18, 0.25) 80%, transparent 100%)',
          }}
        />

        {/* Topic Title Block */}
        <header className="mb-10 sm:mb-16">
          {/* Topic Number Label: 13-14px, weight 500, slight tracking, uppercase, muted */}
          <div className="text-[13px] sm:text-[14px] font-medium tracking-[0.08em] text-slate-400 uppercase mb-2 sm:mb-3 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
            {currentTopic.numberStr}
          </div>

          {/* Topic Main Title: 28-32px mobile, 38-44px desktop, weight 600, line-height 1.16 */}
          <h1 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-white tracking-[-0.02em] leading-[1.16] sm:leading-[1.15] text-left uppercase [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
            {currentTopic.title}
          </h1>

          {/* Subtitle / Topic Summary: 15-16px mobile, 16-17px desktop, leading 1.72 */}
          <p className="mt-3 sm:mt-4 text-[15px] sm:text-[17px] font-normal text-white/85 tracking-[-0.005em] leading-[1.72] sm:leading-[1.75] text-left [text-shadow:0_1px_6px_rgba(0,0,0,0.3)]">
            {currentTopic.shortDesc}
          </p>

          {/* Status & Actions Bar in subtle liquid glass */}
          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-y border-white/[0.08] py-3 sm:py-3.5 text-[13px]">
            <button
              onClick={() => onToggleTopicStudied(currentTopic.id)}
              className="min-h-[44px] flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-200 active:scale-95"
            >
              {isStudied ? (
                <>
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Materi ini sudah dipelajari</span>
                </>
              ) : (
                <>
                  <Circle className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-400 font-normal">Tandai sudah dipelajari</span>
                </>
              )}
            </button>

            <button
              onClick={() => onOpenQuizForTopic(currentTopic.id)}
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.18] text-slate-200 transition-all duration-200 active:scale-95 font-medium text-[13px] sm:text-[12px]"
            >
              <CheckSquare className="h-3.5 w-3.5 text-slate-400" />
              <span>Latihan Soal {topicUnitLabel} {currentTopic.id}</span>
            </button>
          </div>
        </header>

        {/* Main Content Stream: Clean Academic Reading Flow */}
        <article
          className={`space-y-10 sm:space-y-14 ${
            fontSize === 'large'
              ? 'text-[17px] sm:text-[18.5px] leading-[1.82] sm:leading-[1.85]'
              : 'text-[15.5px] sm:text-[17px] leading-[1.75] sm:leading-[1.82]'
          }`}
        >
          {filteredSections.length === 0 ? (
            <div className="py-16 text-center text-slate-400 text-[15px]">
              Tidak ditemukan materi yang cocok dengan &quot;{searchQuery}&quot;.
            </div>
          ) : (
            filteredSections.map((section, sIdx) => (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={sIdx > 0 ? 'pt-8 sm:pt-14 border-t border-white/[0.06]' : ''}
              >
                {/* Section Heading: 24-28px mobile, 28-31px desktop */}
                <h2 className="text-[23px] sm:text-[28px] md:text-[31px] font-semibold text-[#f8fafc] tracking-[-0.015em] leading-[1.28] text-left mb-4 sm:mb-6 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
                  {section.title}
                </h2>

                {/* Subheadings: 18-20px */}
                {section.subtitle && (
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-slate-100 tracking-[-0.01em] leading-[1.4] text-left mb-3 sm:mb-4 [text-shadow:0_1px_6px_rgba(0,0,0,0.3)]">
                    {section.subtitle}
                  </h3>
                )}

                {/* Body Text: 15-16px mobile, 16-17px desktop, 14-18px paragraph spacing */}
                <div className="space-y-3.5 sm:space-y-4 text-white/85 font-normal tracking-[-0.005em] text-left">
                  {section.content.map((p, pIdx) => {
                    if (!p.trim()) return null;
                    return (
                      <p key={pIdx} className="leading-[1.75] sm:leading-[1.82] [text-shadow:0_1px_6px_rgba(0,0,0,0.28)]">
                        {p}
                      </p>
                    );
                  })}
                </div>

                {/* Lists: comfortable indentation */}
                {section.keyPoints && section.keyPoints.length > 0 && (
                  <div className="pl-3.5 sm:pl-5 border-l border-white/20 my-5 sm:my-6 space-y-2.5 sm:space-y-3">
                    {section.keyPoints.map((pt, ptIdx) => (
                      <div
                        key={ptIdx}
                        className="text-[15px] sm:text-[16.5px] text-white/85 font-normal leading-[1.75] sm:leading-[1.78] text-left flex items-start gap-2.5 sm:gap-3 [text-shadow:0_1px_6px_rgba(0,0,0,0.28)]"
                      >
                        <span className="text-slate-400 font-semibold select-none mt-0.5">•</span>
                        <span className="flex-1">{pt}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Definitions / Highlight Callout */}
                {section.highlightBox && (
                  <div className="rounded-[20px] sm:rounded-2xl liquid-glass-panel p-4 sm:p-6 my-6 sm:my-7 relative overflow-hidden border border-white/[0.08]">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                    <div className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.06em] text-white mb-1.5 sm:mb-2 [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
                      {section.highlightBox.title}
                    </div>
                    <div className="text-[15px] sm:text-[16px] text-white/85 font-normal leading-[1.75] sm:leading-[1.78] text-left [text-shadow:0_1px_6px_rgba(0,0,0,0.28)]">
                      {section.highlightBox.text}
                    </div>
                  </div>
                )}

                {/* Visual Progression Steps (e.g. Tersangka -> Terdakwa -> Terpidana) */}
                {section.progressionSteps && section.progressionSteps.length > 0 && (
                  <div className="my-6 sm:my-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                      {section.progressionSteps.map((step, stIdx) => (
                        <div
                          key={stIdx}
                          className="rounded-[20px] sm:rounded-2xl liquid-glass-panel p-4 sm:p-5 border border-white/[0.08] relative overflow-hidden flex flex-col justify-between"
                        >
                          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
                                {step.step}
                              </span>
                              {step.legalBasis && (
                                <span className="text-[10px] text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                                  {step.legalBasis}
                                </span>
                              )}
                            </div>
                            <h4 className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight mb-2">
                              {step.label}
                            </h4>
                            <p className="text-[13px] sm:text-[14px] text-slate-300 leading-relaxed font-light">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Timeline / Paradigm Transition */}
                {section.timeline && (
                  <div className="my-6 sm:my-8 rounded-[20px] sm:rounded-2xl liquid-glass-panel p-4 sm:p-6 border border-white/[0.08] relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent pointer-events-none" />
                    <h4 className="text-[16px] sm:text-[18px] font-semibold text-white tracking-tight mb-4 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber-400" />
                      <span>{section.timeline.title}</span>
                    </h4>
                    <div className="space-y-4">
                      {section.timeline.items.map((item, tIdx) => (
                        <div
                          key={tIdx}
                          className="p-3.5 sm:p-4 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <span className="text-[15px] sm:text-[16px] font-semibold text-white">
                              {item.stage}
                            </span>
                            {item.badge && (
                              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[13.5px] sm:text-[14.5px] text-slate-300 leading-relaxed font-light">
                            {item.description}
                          </p>
                          {item.details && item.details.length > 0 && (
                            <ul className="mt-2.5 pl-4 list-disc space-y-1 text-[12.5px] sm:text-[13px] text-slate-400">
                              {item.details.map((d, dIdx) => (
                                <li key={dIdx}>{d}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Interactive Flowchart */}
                {section.flowchart && (
                  <InteractiveFlowchart flowchart={section.flowchart} />
                )}

                {/* Comparison Boxes */}
                {section.comparisonBoxes && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 my-6 sm:my-7">
                    {section.comparisonBoxes.map((box, bIdx) => (
                      <div
                        key={bIdx}
                        className="rounded-[20px] sm:rounded-2xl liquid-glass-card p-4 sm:p-6 flex flex-col justify-between border border-white/[0.08]"
                      >
                        <div>
                          <h4 className="text-[16.5px] sm:text-[17px] font-semibold text-white tracking-[-0.01em] leading-[1.4] mb-1.5 sm:mb-2 text-left [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]">
                            {box.title}
                          </h4>
                          <p className="text-[13.5px] sm:text-[14px] text-slate-300 font-normal leading-[1.6] mb-3.5 sm:mb-4 text-left">
                            {box.description}
                          </p>
                          <ul className="space-y-2.5 sm:space-y-3">
                            {box.items.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="text-[14.5px] sm:text-[15.5px] text-white/85 font-normal leading-[1.68] sm:leading-[1.7] text-left flex items-start gap-2.5 [text-shadow:0_1px_5px_rgba(0,0,0,0.25)]"
                              >
                                <span className="text-slate-400 font-bold select-none mt-0.5">•</span>
                                <span className="flex-1 leading-[1.68] sm:leading-[1.7]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Formatted Comparison Tables: responsive horizontal scrolling */}
                {section.table && (
                  <div className="overflow-x-auto rounded-[18px] sm:rounded-2xl liquid-glass-panel my-6 sm:my-7 border border-white/[0.08] no-scrollbar">
                    <table className="w-full text-left text-[13.5px] sm:text-[14.5px] font-['Inter',sans-serif]">
                      <thead>
                        <tr className="border-b border-white/[0.08] bg-white/[0.04]">
                          {section.table.headers.map((h, hIdx) => (
                            <th
                              key={hIdx}
                              className="px-3.5 sm:px-4 py-3 sm:py-3.5 font-semibold text-white whitespace-nowrap leading-[1.55]"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.06]">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`px-3.5 sm:px-4 py-3 sm:py-3.5 align-top leading-[1.6] ${
                                  cIdx === 0
                                    ? 'font-semibold text-white whitespace-nowrap'
                                    : 'font-normal text-white/85'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </motion.section>
            ))
          )}
        </article>

        {/* References / Footnote */}
        <div className="mt-10 sm:mt-14 pt-5 sm:pt-6 border-t border-white/[0.06] text-[12px] sm:text-[13px] text-slate-400 font-normal leading-[1.5] text-left">
          <span>{referenceNote}</span>
        </div>

        {/* Bottom Navigation: Previous and Next Topic */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          {prevTopic ? (
            <button
              onClick={() => {
                onSelectTopic(prevTopic.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="min-h-[48px] flex items-center gap-2.5 px-4 py-3 rounded-xl border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] text-[13px] text-slate-300 hover:text-white transition-all duration-200 active:scale-95"
            >
              <ArrowLeft className="h-3.5 w-3.5 shrink-0" />
              <div className="text-left">
                <div className="text-[11px] text-slate-400 font-medium">{prevTopic.numberStr}</div>
                <div className="font-normal truncate max-w-[220px] sm:max-w-xs">{prevTopic.title}</div>
              </div>
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextTopic ? (
            <button
              onClick={() => {
                onSelectTopic(nextTopic.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="min-h-[48px] flex items-center justify-between sm:justify-end gap-2.5 px-4 py-3 rounded-xl border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] text-[13px] text-slate-300 hover:text-white transition-all duration-200 active:scale-95 text-right"
            >
              <div className="text-left sm:text-right">
                <div className="text-[11px] text-slate-400 font-medium">{nextTopic.numberStr}</div>
                <div className="font-normal truncate max-w-[220px] sm:max-w-xs">{nextTopic.title}</div>
              </div>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </button>
          ) : (
            <button
              onClick={() => onOpenQuizForTopic(currentTopic.id)}
              className="min-h-[48px] flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.1] hover:bg-white/[0.16] border border-white/[0.18] text-[13px] font-medium text-white transition-all duration-200 active:scale-95 shadow-sm"
            >
              <span>Latihan Soal Semua Materi</span>
              <CheckSquare className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
