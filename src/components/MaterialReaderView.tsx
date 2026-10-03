import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  CheckSquare,
  Circle,
  Search,
  Type,
  X
} from 'lucide-react';
import { TOPICS_DATA, Topic } from '../data/hukumIslamData';

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
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 font-['Inter',sans-serif]">
      {/* Top Topic Switcher Bar: Floating Glass Pill Container */}
      <div className="mb-10 sm:mb-12 p-2 sm:p-2.5 rounded-2xl liquid-glass-panel">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Segmented Topic Pills */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
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
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[13px] font-medium whitespace-nowrap transition-all duration-200 active:scale-95 ${
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
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
              className={`p-1.5 sm:px-3 sm:py-1.5 rounded-xl text-[12px] font-medium border border-white/[0.08] transition-all duration-200 active:scale-95 flex items-center gap-1.5 ${
                fontSize === 'large'
                  ? 'bg-white/[0.12] text-white border-white/[0.18]'
                  : 'text-slate-400 hover:text-slate-200 bg-white/[0.02]'
              }`}
              title="Sesuaikan Ukuran Font"
            >
              <Type className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">
                {fontSize === 'large' ? 'Font: 18px' : 'Font: 17px'}
              </span>
            </button>
          </div>
        </div>

        {/* Quick Search within this topic */}
        <div className="relative mt-2.5">
          <Search className="absolute left-3.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari konsep dalam materi ini..."
            className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] pl-9 pr-8 py-2 text-[13px] text-slate-200 placeholder:text-slate-500 focus:border-white/20 focus:bg-white/[0.04] focus:outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-300 transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Centered Editorial Reading Column (680–740px maximum width) */}
      <div className="relative mx-auto max-w-[720px]">
        {/* Invisible Reading Zone Feathered Backdrop - Soft dark aura with zero visible boundaries/cards */}
        <div
          aria-hidden="true"
          className="absolute -inset-y-12 -inset-x-8 sm:-inset-x-24 pointer-events-none -z-10"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(5, 8, 18, 0.45) 0%, rgba(5, 8, 18, 0.25) 55%, transparent 85%)',
          }}
        />

        {/* Topic Title Block according to exact typography specs */}
        <header className="mb-12 sm:mb-16">
          {/* Topic Number Label: 14px, weight 500, slight tracking, uppercase, muted */}
          <div className="text-[14px] font-medium tracking-[0.08em] text-slate-400 uppercase mb-3 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
            {currentTopic.numberStr}
          </div>

          {/* Topic Main Title: 38-44px desktop, 30-34px mobile, weight 600, line-height 1.15, tracking -0.02em */}
          <h1 className="text-[30px] sm:text-[36px] md:text-[42px] font-semibold text-white tracking-[-0.02em] leading-[1.15] text-left uppercase [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
            {currentTopic.title}
          </h1>

          {/* Subtitle / Topic Summary: 16-17px, font weight 400, leading 1.75, near-white */}
          <p className="mt-4 text-[16px] sm:text-[17px] font-normal text-white/85 tracking-[-0.005em] leading-[1.75] text-left [text-shadow:0_1px_6px_rgba(0,0,0,0.3)]">
            {currentTopic.shortDesc}
          </p>

          {/* Status & Actions Bar in subtle liquid glass */}
          <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-y border-white/[0.08] py-3.5 text-[13px]">
            <button
              onClick={() => onToggleTopicStudied(currentTopic.id)}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-200 active:scale-95"
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
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-white/[0.16] text-slate-200 transition-all duration-200 active:scale-95 font-medium text-[12px]"
            >
              <CheckSquare className="h-3.5 w-3.5 text-slate-400" />
              <span>Latihan Soal {topicUnitLabel} {currentTopic.id}</span>
            </button>
          </div>
        </header>

        {/* Main Content Stream: Clean Academic Reading Flow Floating Directly on Atmosphere */}
        <article
          className={`space-y-12 sm:space-y-14 ${
            fontSize === 'large'
              ? 'text-[17.5px] sm:text-[18.5px] leading-[1.85]'
              : 'text-[16px] sm:text-[17px] leading-[1.82]'
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
                className={sIdx > 0 ? 'pt-10 sm:pt-14 border-t border-white/[0.06]' : ''}
              >
                {/* Section Heading: 28-32px, weight 600, near-white, generous spacing */}
                <h2 className="text-[25px] sm:text-[28px] md:text-[31px] font-semibold text-[#f8fafc] tracking-[-0.015em] leading-[1.28] text-left mb-5 sm:mb-6 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
                  {section.title}
                </h2>

                {/* Subheadings: 18-20px, font weight 600, leading 1.4 */}
                {section.subtitle && (
                  <h3 className="text-[19px] sm:text-[20px] font-semibold text-slate-100 tracking-[-0.01em] leading-[1.4] text-left mb-4 [text-shadow:0_1px_6px_rgba(0,0,0,0.3)]">
                    {section.subtitle}
                  </h3>
                )}

                {/* Body Text: 16-17px, weight 400, line-height 1.75-1.85, color rgba(255,255,255,0.85), left-aligned, 14-18px between paragraphs */}
                <div className="space-y-4 text-white/85 font-normal tracking-[-0.005em] text-left">
                  {section.content.map((p, pIdx) => {
                    if (!p.trim()) return null;
                    return (
                      <p key={pIdx} className="leading-[1.82] [text-shadow:0_1px_6px_rgba(0,0,0,0.28)]">
                        {p}
                      </p>
                    );
                  })}
                </div>

                {/* Lists: 16px, weight 400, line height 1.7-1.8, comfortable indentation */}
                {section.keyPoints && section.keyPoints.length > 0 && (
                  <div className="pl-4 sm:pl-5 border-l border-white/20 my-6 space-y-3">
                    {section.keyPoints.map((pt, ptIdx) => (
                      <div
                        key={ptIdx}
                        className="text-[16px] sm:text-[16.5px] text-white/85 font-normal leading-[1.78] text-left flex items-start gap-3 [text-shadow:0_1px_6px_rgba(0,0,0,0.28)]"
                      >
                        <span className="text-slate-400 font-semibold select-none mt-0.5">•</span>
                        <span className="flex-1">{pt}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Definitions / Highlight Callout: Subtle Liquid Glass callout */}
                {section.highlightBox && (
                  <div className="rounded-2xl liquid-glass-panel p-5 sm:p-6 my-7 relative overflow-hidden border border-white/[0.08]">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                    <div className="text-[13px] font-semibold uppercase tracking-[0.06em] text-white mb-2 [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
                      {section.highlightBox.title}
                    </div>
                    <div className="text-[16px] text-white/85 font-normal leading-[1.78] text-left [text-shadow:0_1px_6px_rgba(0,0,0,0.28)]">
                      {section.highlightBox.text}
                    </div>
                  </div>
                )}

                {/* Comparison Boxes: Clean Editorial Panels */}
                {section.comparisonBoxes && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-7">
                    {section.comparisonBoxes.map((box, bIdx) => (
                      <div
                        key={bIdx}
                        className="rounded-2xl liquid-glass-card p-5 sm:p-6 flex flex-col justify-between border border-white/[0.08]"
                      >
                        <div>
                          <h4 className="text-[17px] font-semibold text-white tracking-[-0.01em] leading-[1.4] mb-2 text-left [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]">
                            {box.title}
                          </h4>
                          <p className="text-[14px] text-slate-300 font-normal leading-[1.6] mb-4 text-left">
                            {box.description}
                          </p>
                          <ul className="space-y-3">
                            {box.items.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="text-[15px] sm:text-[15.5px] text-white/85 font-normal leading-[1.7] text-left flex items-start gap-2.5 [text-shadow:0_1px_5px_rgba(0,0,0,0.25)]"
                              >
                                <span className="text-slate-400 font-bold select-none mt-0.5">•</span>
                                <span className="flex-1 leading-[1.7]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Formatted Comparison Tables: Inter 14-15px, line height 1.5-1.6, header weight 600, body 400 */}
                {section.table && (
                  <div className="overflow-x-auto rounded-2xl liquid-glass-panel my-7 border border-white/[0.08] overflow-hidden">
                    <table className="w-full text-left text-[14px] sm:text-[14.5px] font-['Inter',sans-serif]">
                      <thead>
                        <tr className="border-b border-white/[0.08] bg-white/[0.04]">
                          {section.table.headers.map((h, hIdx) => (
                            <th
                              key={hIdx}
                              className="px-4 py-3.5 font-semibold text-white whitespace-nowrap leading-[1.55]"
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
                                className={`px-4 py-3.5 align-top leading-[1.6] ${
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

        {/* References / Footnote: 12-13px, muted, subordinate */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] text-[12px] sm:text-[13px] text-slate-400 font-normal leading-[1.5] text-left">
          <span>{referenceNote}</span>
        </div>

        {/* Bottom Navigation: Previous and Next Topic */}
        <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
          {prevTopic ? (
            <button
              onClick={() => {
                onSelectTopic(prevTopic.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] text-[13px] text-slate-300 hover:text-white transition-all duration-200 active:scale-95"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <div className="text-left">
                <div className="text-[11px] text-slate-400 font-medium">{prevTopic.numberStr}</div>
                <div className="font-normal truncate max-w-[140px] sm:max-w-xs">{prevTopic.title}</div>
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextTopic ? (
            <button
              onClick={() => {
                onSelectTopic(nextTopic.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] text-[13px] text-slate-300 hover:text-white transition-all duration-200 active:scale-95 text-right"
            >
              <div className="text-right">
                <div className="text-[11px] text-slate-400 font-medium">{nextTopic.numberStr}</div>
                <div className="font-normal truncate max-w-[140px] sm:max-w-xs">{nextTopic.title}</div>
              </div>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          ) : (
            <button
              onClick={() => onOpenQuizForTopic(currentTopic.id)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.1] hover:bg-white/[0.16] border border-white/[0.18] text-[13px] font-medium text-white transition-all duration-200 active:scale-95 shadow-sm"
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
