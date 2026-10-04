import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HomeLandingViewProps {
  onStartStudy: () => void;
}

export const HomeLandingView: React.FC<HomeLandingViewProps> = ({ onStartStudy }) => {
  return (
    <div className="relative min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-130px)] flex flex-col justify-center items-center px-5 sm:px-6 py-12 sm:py-16 overflow-hidden">
      {/* Invisible center contrast shield - ensures pristine contrast over the background art while preserving edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center"
      >
        <div className="w-[90vw] max-w-[760px] h-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(5,8,18,0.85)_0%,rgba(5,8,18,0.55)_55%,transparent_80%)] blur-2xl" />
      </div>

      {/* Hero Container with generous negative space */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.14,
              delayChildren: 0.08,
            },
          },
        }}
        className="w-full max-w-2xl mx-auto flex flex-col items-center text-center -mt-6 sm:-mt-10"
      >
        {/* 1. Small / Subtle Eyebrow */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-block text-[11px] sm:text-[13px] font-semibold tracking-[0.24em] text-slate-400 uppercase font-['Inter',sans-serif] select-none [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
            MY STUDY SPACE
          </span>
        </motion.div>

        {/* 2. Large / Elegant Main Heading */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="mb-5 sm:mb-6"
        >
          {/* Mobile: 28-34px clean rhythm | Desktop: large, bold headline */}
          <h1 className="text-[30px] sm:text-[46px] md:text-[56px] font-bold tracking-tight text-white leading-[1.18] sm:leading-[1.12] font-['Inter',sans-serif] [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            <span className="block sm:inline font-bold">Study.</span>{' '}
            <span className="block sm:inline font-bold">Understand.</span>{' '}
            <span className="block sm:inline font-bold">Practice.</span>
          </h1>
        </motion.div>

        {/* 3. Small / Muted Supporting Sentence */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="text-[14.5px] sm:text-[16px] text-slate-300 font-light leading-[1.65] sm:leading-[1.7] max-w-[340px] sm:max-w-[480px] mb-8 sm:mb-10 font-['Inter',sans-serif] [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]"
        >
          Ruang belajar pribadi untuk memahami materi, menguji pemahaman, dan mempersiapkan ujian.
        </motion.p>

        {/* 4. Single Primary CTA: Liquid Glass "Mulai Belajar →" with Animated Traveling Light Border */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="relative inline-flex items-center justify-center group"
        >
          {/* Subtle Ambient Traveling Halo Glow (soft blur around button perimeter) */}
          <div
            aria-hidden="true"
            className="absolute -inset-1 sm:-inset-1.5 rounded-[22px] pointer-events-none overflow-hidden opacity-35 group-hover:opacity-70 blur-lg transition-opacity duration-500 ease-out"
          >
            <div
              className="absolute -inset-[150%] animate-liquid-rotate"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, transparent 180deg, rgba(255, 255, 255, 0.05) 210deg, rgba(56, 189, 248, 0.35) 280deg, rgba(186, 230, 253, 0.75) 330deg, rgba(255, 255, 255, 0.95) 360deg)',
              }}
            />
          </div>

          {/* Primary CTA Liquid Glass Button */}
          <button
            onClick={onStartStudy}
            className="relative inline-flex items-center justify-center p-[1px] rounded-[16px] overflow-hidden cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[1.5px] active:translate-y-0 active:scale-[0.98]"
            aria-label="Mulai Belajar"
          >
            {/* 1. Permanent delicate Apple Liquid Glass border foundation */}
            <div className="absolute inset-0 rounded-[16px] border border-white/[0.12] group-hover:border-white/[0.22] transition-colors duration-300 pointer-events-none" />

            {/* 2. Rotating Traveling Light Ring (1px perimeter glow) */}
            <div
              aria-hidden="true"
              className="absolute -inset-[150%] animate-liquid-rotate pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, transparent 180deg, rgba(255, 255, 255, 0.04) 210deg, rgba(56, 189, 248, 0.4) 280deg, rgba(186, 230, 253, 0.8) 335deg, rgba(255, 255, 255, 1) 360deg)',
              }}
            />

            {/* 3. Button Body: Apple Liquid Glass translucent core */}
            <div className="relative z-10 flex items-center justify-center gap-2.5 h-[48px] sm:h-[50px] px-6 sm:px-7 rounded-[15px] bg-[#080d16]/80 group-hover:bg-[#0e1626]/85 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22),0_8px_24px_rgba(0,0,0,0.4)] group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-300">
              <span className="text-[14.5px] sm:text-[15px] font-semibold text-white tracking-[-0.01em] font-['Inter',sans-serif] [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                Mulai Belajar
              </span>
              <ArrowRight className="h-4 w-4 text-slate-300 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-white" />
            </div>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
