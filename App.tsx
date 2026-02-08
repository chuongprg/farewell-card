import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Pause, Play, RefreshCcw, Sparkles, Smile, Wind } from 'lucide-react';
import { CARD_CONFIG } from './config';
import Envelope from './components/Envelope';
import SkyParticles from './components/HeartParticles';
import MasonryGallery from './components/MasonryGallery';
import Clouds from './components/Clouds';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  
  // Sử dụng useRef để điều khiển thẻ audio trực tiếp
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
    
    // Kích hoạt nhạc ngay lập tức khi click (bắt buộc trên iOS để tự động phát)
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play error:", err));
      setIsMusicPlaying(true);
    }
    
    setTimeout(() => {
      setShowContent(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsOpen(false);
    setShowContent(false);
    setIsMusicPlaying(false);
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset nhạc về đầu
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className={`min-h-screen relative flex flex-col items-center justify-center overflow-x-hidden ${CARD_CONFIG.colors.background}`}>
      {/* Background Ambience */}
      <Clouds />
      <SkyParticles active={isOpen} />
      
      {/* Native Audio Element - Hoạt động tốt nhất trên iPhone */}
      <audio
        ref={audioRef}
        src="/music.mp3" // Đảm bảo file nằm trong thư mục public/music.mp3
        loop
        playsInline
      />

      <AnimatePresence mode="wait">
        {!showContent ? (
          <motion.div
            key="envelope-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center z-20 px-4"
          >
            <Envelope isOpen={isOpen} onClick={handleOpen} />
            
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 2 }}
                className="mt-12 text-center"
              >
                <p className="text-sky-400 font-bold text-sm tracking-[0.3em] uppercase flex items-center gap-3">
                  <Wind className="w-4 h-4" />
                  {CARD_CONFIG.labels.tapToOpen}
                  <Wind className="w-4 h-4" />
                </p>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="revealed-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-5xl px-6 py-16 z-10 flex flex-col items-center space-y-24"
          >
            {/* Header */}
            <header className="text-center space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="inline-block p-6 bg-white rounded-full shadow-md text-sky-400 mb-2"
              >
                <Cloud className="w-10 h-10" />
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-romantic font-bold text-sky-600">
                Gửi {CARD_CONFIG.recipientName},
              </h1>
              <p className="text-slate-400 italic max-w-lg mx-auto text-lg font-medium">
                "{CARD_CONFIG.shortQuote}"
              </p>
            </header>

            {/* Bức thư */}
            <section className="w-full max-w-3xl bg-white/70 backdrop-blur-lg p-12 md:p-20 rounded-[60px] shadow-2xl border border-sky-100 relative">
               <div className="absolute top-0 right-0 p-12 text-sky-100 opacity-20">
                 <Smile className="w-32 h-32 rotate-12" />
               </div>
               
               <div className="relative z-10 space-y-8">
                 {CARD_CONFIG.loveMessage.split('\n\n').map((paragraph, i) => (
                   <motion.p 
                     key={i}
                     initial={{ opacity: 0, y: 15 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, delay: i * 0.2 }}
                     className="text-xl md:text-2xl leading-relaxed text-slate-700 font-serif italic font-medium whitespace-pre-line text-justify md:text-left"
                   >
                     {paragraph}
                   </motion.p>
                 ))}
                 
                 <motion.div 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 1.2 }}
                   className="mt-16 text-right border-t border-sky-100 pt-10"
                 >
                   <p className="font-romantic text-4xl text-sky-500 font-bold">
                     {CARD_CONFIG.senderName}
                   </p>
                 </motion.div>
               </div>
            </section>

            {/* Gallery Section */}
            <section className="w-full space-y-12">
              <div className="flex flex-col items-center gap-4 justify-center">
                <h2 className="text-2xl md:text-4xl font-romantic font-bold text-sky-400">
                  {CARD_CONFIG.labels.galleryTitle}
                </h2>
                <div className="h-1 w-24 bg-sky-200 rounded-full" />
              </div>
              
              <MasonryGallery images={CARD_CONFIG.images} />
            </section>

            {/* Controls */}
            <footer className="flex flex-col items-center gap-10 py-16">
              <div className="flex items-center gap-8">
                <button
                  onClick={toggleMusic}
                  className="p-6 bg-white rounded-full shadow-lg text-sky-500 hover:scale-110 hover:shadow-xl transition-all active:scale-95 border border-sky-50"
                  title={isMusicPlaying ? CARD_CONFIG.labels.pause : CARD_CONFIG.labels.play}
                >
                  {isMusicPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                
                <button
                  onClick={handleReset}
                  className="flex items-center gap-3 px-10 py-6 bg-white rounded-full shadow-lg text-slate-500 hover:bg-sky-50 transition-all active:scale-95 border border-slate-100"
                >
                  <RefreshCcw className="w-4 h-4" />
                  <span className="font-bold text-xs uppercase tracking-[0.2em]">{CARD_CONFIG.labels.replay}</span>
                </button>
              </div>

              <div className="text-sky-300 text-sm font-semibold flex items-center gap-3">
                <span>Trân trọng những khoảnh khắc</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Indicator */}
      {showContent && isMusicPlaying && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:bottom-auto md:top-8 md:right-8 md:left-auto z-50 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border border-sky-100">
           <div className="flex gap-1.5 items-end h-6">
             {[0.1, 0.4, 0.2, 0.5, 0.3].map((d, i) => (
               <motion.div
                 key={i}
                 animate={{ height: ["20%", "100%", "20%"] }}
                 transition={{ repeat: Infinity, duration: 0.6 + d, ease: "easeInOut" }}
                 className="w-1.5 bg-sky-400 rounded-full"
               />
             ))}
           </div>
        </div>
      )}
    </div>
  );
};

export default App;