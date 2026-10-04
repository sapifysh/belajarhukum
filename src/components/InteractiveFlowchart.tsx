import React, { useState } from 'react';
import { ArrowDown, ArrowRight, CheckCircle2, ChevronRight, Clock, Info, ShieldAlert, Sparkles, UserCheck } from 'lucide-react';
import { FlowchartData, ProcessStepNode } from '../data/hukumIslamData';

interface InteractiveFlowchartProps {
  flowchart: FlowchartData;
}

export const InteractiveFlowchart: React.FC<InteractiveFlowchartProps> = ({ flowchart }) => {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const isDualTrack = flowchart.flowType === 'dual-track' && flowchart.tracks && flowchart.tracks.length > 0;
  const currentSteps: ProcessStepNode[] = isDualTrack
    ? flowchart.tracks![activeTrackIndex]?.steps || []
    : flowchart.steps || [];

  const selectedNode = currentSteps.find((s) => s.id === selectedNodeId) || null;

  return (
    <div className="my-6 sm:my-8 rounded-[22px] sm:rounded-2xl liquid-glass-panel p-4 sm:p-6 border border-white/[0.1] relative overflow-hidden">
      {/* Top subtle light accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              Interactive Flowchart
            </span>
            {flowchart.flowType && (
              <span className="text-[11px] text-slate-400 capitalize">
                {flowchart.flowType === 'dual-track' ? 'Dua Jalur Prosedur' : flowchart.flowType}
              </span>
            )}
          </div>
          <h4 className="text-[17px] sm:text-[19px] font-semibold text-white tracking-[-0.01em] mt-1.5 [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]">
            {flowchart.title}
          </h4>
          {flowchart.subtitle && (
            <p className="text-[13px] sm:text-[14px] text-slate-300 mt-0.5 font-light">
              {flowchart.subtitle}
            </p>
          )}
        </div>

        {/* Track Switcher if dual-track */}
        {isDualTrack && (
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] self-start sm:self-center">
            {flowchart.tracks!.map((track, tIdx) => {
              const isActive = activeTrackIndex === tIdx;
              return (
                <button
                  key={tIdx}
                  onClick={() => {
                    setActiveTrackIndex(tIdx);
                    setSelectedNodeId(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-[12px] sm:text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white/[0.14] text-white shadow-sm border border-white/[0.16]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {track.trackName}
                  {track.trackBadge && (
                    <span className="ml-1.5 text-[10px] opacity-75">
                      ({track.trackBadge})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Nodes visual stream */}
      <div className="space-y-3 sm:space-y-3.5">
        {currentSteps.map((node, nIdx) => {
          const isSelected = selectedNodeId === node.id;
          const isLast = nIdx === currentSteps.length - 1;

          return (
            <div key={node.id || nIdx} className="relative">
              {/* Node Card */}
              <div
                onClick={() => setSelectedNodeId(isSelected ? null : node.id)}
                className={`group cursor-pointer rounded-xl p-3.5 sm:p-4 border transition-all duration-200 ${
                  isSelected
                    ? 'bg-white/[0.08] border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.12)]'
                    : 'bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08] hover:border-white/[0.16]'
                } ${node.isUrgent ? 'border-amber-400/30 bg-amber-500/[0.03]' : ''}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    {/* Step indicator */}
                    <div
                      className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg text-[11px] sm:text-xs font-semibold shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-cyan-500 text-black shadow-sm'
                          : node.isUrgent
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-white/[0.06] text-slate-300 border border-white/[0.1]'
                      }`}
                    >
                      {node.stepNumber ?? nIdx + 1}
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[14.5px] sm:text-[15.5px] font-semibold text-white tracking-tight">
                          {node.title}
                        </span>
                        {node.badge && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/[0.08] text-slate-300 border border-white/[0.08]">
                            {node.badge}
                          </span>
                        )}
                        {node.timeLimit && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/25">
                            <Clock className="h-3 w-3" />
                            {node.timeLimit}
                          </span>
                        )}
                      </div>

                      {/* Actor & Legal basis */}
                      <div className="flex flex-wrap items-center gap-2 text-[12px] text-slate-400">
                        {node.actor && (
                          <span className="inline-flex items-center gap-1">
                            <UserCheck className="h-3 w-3 text-cyan-400" />
                            <span className="text-slate-300">{node.actor}</span>
                          </span>
                        )}
                        {node.actor && node.legalBasis && <span>·</span>}
                        {node.legalBasis && (
                          <span className="text-slate-400 font-mono text-[11px]">
                            {node.legalBasis}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="text-slate-500 group-hover:text-slate-300 transition-transform duration-200 shrink-0 mt-1">
                    <ChevronRight
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isSelected ? 'rotate-90 text-cyan-400' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Collapsible Details */}
                {isSelected && (
                  <div className="mt-3.5 pt-3.5 border-t border-white/[0.08] text-[13.5px] sm:text-[14px] text-slate-200 leading-relaxed space-y-2.5 animate-fadeIn">
                    <p>{node.description}</p>

                    {/* Branch Outcomes */}
                    {node.branches && node.branches.length > 0 && (
                      <div className="mt-3 pt-2.5 space-y-2">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          Cabang Keputusan / Kondisi:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {node.branches.map((br, bIdx) => (
                            <div
                              key={bIdx}
                              className="rounded-lg bg-black/40 border border-white/[0.06] p-2.5 space-y-1"
                            >
                              <div className="text-[12px] font-semibold text-cyan-300 flex items-center gap-1.5">
                                <ArrowRight className="h-3 w-3 shrink-0" />
                                <span>{br.condition}</span>
                              </div>
                              <div className="text-[12px] text-slate-300 pl-4.5">
                                {br.target}
                              </div>
                              {br.subNodes && br.subNodes.length > 0 && (
                                <ul className="pl-6 list-disc text-[11px] text-slate-400 space-y-0.5 pt-1">
                                  {br.subNodes.map((sn, snIdx) => (
                                    <li key={snIdx}>{sn}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Connecting Down Arrow between steps */}
              {!isLast && (
                <div className="flex justify-center py-1 sm:py-1.5">
                  <div className="flex items-center justify-center h-4 w-4 rounded-full bg-white/[0.04] text-slate-500">
                    <ArrowDown className="h-3 w-3" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Helpful Hint */}
      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500 font-light">
        <span className="flex items-center gap-1.5">
          <Info className="h-3.5 w-3.5 text-slate-400" />
          Klik pada tahapan untuk membuka uraian yuridis &amp; dasar pasal.
        </span>
        <span className="text-[10px] text-slate-400">UU No. 20 Tahun 2025</span>
      </div>
    </div>
  );
};
