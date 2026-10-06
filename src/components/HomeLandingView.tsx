import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, VolumeX, Volume2, Sparkles, Upload } from 'lucide-react';

interface HomeLandingViewProps {
  onStartStudy: () => void;
}

export const HomeLandingView: React.FC<HomeLandingViewProps> = ({ onStartStudy }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [customVideoUrl, setCustomVideoUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-play attempt on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted before user interaction
      });
    }
  }, [customVideoUrl]);

  // Handle local video upload if user wants to swap in their custom 10s MP4 directly
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      const url = URL.createObjectURL(file);
      setCustomVideoUrl(url);
      setVideoFailed(false);
      setVideoLoaded(true);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full flex items-center overflow-hidden bg-[#07090e]">
      {/* ========================================================
          FULL-BLEED CINEMATIC HERO BACKGROUND WITH 3D CHARACTER
          ======================================================== */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Ambient atmospheric light halos */}
        <div
          aria-hidden="true"
          className="absolute -top-32 right-0 sm:right-[5%] w-[380px] sm:w-[620px] h-[380px] sm:h-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12)_0%,rgba(99,102,241,0.06)_45%,transparent_70%)] blur-3xl animate-companion-glow pointer-events-none"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-20 right-[15%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.5)_0%,transparent_70%)] blur-2xl pointer-events-none"
        />

        {/* 3D Character Companion Visual (Occupies 30-40% visual composition on the right) */}
        <div className="absolute top-0 bottom-0 right-0 w-full sm:w-[70%] lg:w-[48%] xl:w-[42%] h-full flex items-center justify-center lg:justify-end overflow-hidden">
          <div className="relative w-full h-full max-h-[920px] flex items-center justify-center lg:justify-end">
            {/* Ambient character backlight rim */}
            <div
              aria-hidden="true"
              className="absolute right-[5%] sm:right-[15%] top-1/2 -translate-y-1/2 w-[280px] sm:w-[420px] h-[480px] sm:h-[640px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.15)_0%,rgba(56,189,248,0.08)_40%,transparent_75%)] blur-2xl pointer-events-none"
            />

            {/* Video Element for 10-second looping 3D character */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              poster="/hero-character.jpg"
              className={`w-full h-full object-cover object-center lg:object-top transition-opacity duration-1000 ${
                videoLoaded && !videoFailed ? 'opacity-90' : 'opacity-0'
              }`}
              onLoadedData={() => {
                setVideoLoaded(true);
                setVideoFailed(false);
              }}
              onError={() => {
                setVideoFailed(true);
              }}
            >
              {customVideoUrl && <source src={customVideoUrl} type="video/mp4" />}
              <source src="/hero-character.mp4" type="video/mp4" />
              <source src="/character.mp4" type="video/mp4" />
              <source src="/hero-video.mp4" type="video/mp4" />
              <source src="/suit-character.mp4" type="video/mp4" />
            </video>

            {/* Photorealistic 3D Character Fallback / Base Asset (Matte Black Formal Suit) */}
            <div
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                videoLoaded && !videoFailed ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <img
                src="/hero-character.jpg"
                alt="3D Character Study Companion in Black Formal Suit"
                className="w-full h-full object-cover object-center lg:object-top select-none animate-companion-sway transform-gpu opacity-90 sm:opacity-95"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('site_background_1791021343659.jpg')) {
                    target.src = '/site-background.jpg';
                  }
                }}
              />
            </div>

            {/* Seamless edge blend into obsidian (#07090e) */}
            {/* Left feather blend across into text area */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-24 sm:w-44 lg:w-60 bg-gradient-to-r from-[#07090e] via-[#07090e]/80 to-transparent pointer-events-none"
            />

            {/* Right edge feather */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#07090e] to-transparent pointer-events-none"
            />

            {/* Bottom blend */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#07090e] via-[#07090e]/80 to-transparent pointer-events-none"
            />

            {/* Top blend under navigation */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-20 sm:h-28 bg-gradient-to-b from-[#07090e] via-[#07090e]/70 to-transparent pointer-events-none"
            />
          </div>
        </div>

        {/* Deep Left Contrast Shield - Guarantees 100% text legibility and zero interference from background on mobile/desktop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#07090e] via-[#07090e]/95 sm:via-[#07090e]/85 lg:via-[#07090e]/65 to-transparent w-full lg:w-[68%]"
        />

        {/* Global gentle top/bottom vignettes */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#07090e]/70 via-transparent to-[#07090e]/85"
        />
      </div>

      {/* ========================================================
          HERO TEXT CONTENT (LEFT / CENTER-LEFT COMPOSITION)
          ======================================================== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-20 lg:py-24">
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
          className="w-full max-w-xl lg:max-w-2xl text-left"
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
            <span className="inline-flex items-center gap-2 text-[11px] sm:text-[13px] font-semibold tracking-[0.24em] text-slate-400 uppercase font-['Inter',sans-serif] select-none [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]">
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
            className="mb-6 sm:mb-7"
          >
            {/* Mobile: 36-44px bold rhythm | Desktop: large 64-72px elegant stacked typography */}
            <h1 className="text-[38px] sm:text-[54px] md:text-[64px] lg:text-[70px] xl:text-[76px] font-bold tracking-tight text-white leading-[1.08] sm:leading-[1.08] font-['Inter',sans-serif] [text-shadow:0_2px_16px_rgba(0,0,0,0.7)]">
              <span className="block font-bold">Study.</span>
              <span className="block font-bold">Understand.</span>
              <span className="block font-bold">Practice.</span>
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
            className="text-[15px] sm:text-[17px] lg:text-[18px] text-slate-300 font-light leading-[1.65] sm:leading-[1.7] max-w-[420px] sm:max-w-[500px] mb-8 sm:mb-10 font-['Inter',sans-serif] [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]"
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
            className="flex items-center gap-4 flex-wrap"
          >
            <div className="relative inline-flex items-center justify-center group">
              {/* Subtle Ambient Traveling Halo Glow (soft blur around button perimeter) */}
              <div
                aria-hidden="true"
                className="absolute -inset-1 sm:-inset-1.5 rounded-[22px] pointer-events-none overflow-hidden opacity-40 group-hover:opacity-75 blur-lg transition-opacity duration-500 ease-out"
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
                <div className="relative z-10 flex items-center justify-center gap-2.5 h-[50px] sm:h-[54px] px-7 sm:px-8 rounded-[15px] bg-[#080d16]/80 group-hover:bg-[#0e1626]/85 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22),0_8px_24px_rgba(0,0,0,0.4)] group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-300">
                  <span className="text-[15px] sm:text-[16px] font-semibold text-white tracking-[-0.01em] font-['Inter',sans-serif] [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                    Mulai Belajar
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-300 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-white" />
                </div>
              </button>
            </div>

            {/* Subtle Companion Badge / Video Source Trigger */}
            <div className="relative inline-flex items-center">
              <input
                ref={fileInputRef}
                type="file"
                accept="video/mp4,video/webm"
                className="hidden"
                onChange={handleFileUpload}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                title="Ganti / Muat Video Karakter 3D (MP4)"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-white/[0.14] text-[11px] text-slate-400 hover:text-slate-200 font-light backdrop-blur-md transition-all cursor-pointer opacity-70 hover:opacity-100"
              >
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>3D Companion</span>
                <Upload className="w-2.5 h-2.5 opacity-60" />
              </button>

              {videoLoaded && !videoFailed && (
                <button
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.muted = !isMuted;
                      setIsMuted(!isMuted);
                    }
                  }}
                  className="ml-2 p-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-slate-200 transition-colors"
                  title={isMuted ? 'Nyalakan audio video' : 'Senyapkan audio video'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
