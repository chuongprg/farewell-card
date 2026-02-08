
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnniversaryCounterProps {
  date: string;
  label: string;
}

const AnniversaryCounter: React.FC<AnniversaryCounterProps> = ({ date, label }) => {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const anniversary = new Date(date);
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - anniversary.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays);
    };

    calculateDays();
    const timer = setInterval(calculateDays, 1000 * 60 * 60); 
    return () => clearInterval(timer);
  }, [date]);

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        className="bg-white/80 backdrop-blur-sm px-10 py-8 rounded-[32px] shadow-xl border border-sky-100 flex flex-col items-center"
      >
        <span className="text-5xl md:text-7xl font-bold text-sky-500 font-romantic">
          {days}
        </span>
        <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs mt-3">
          {label}
        </span>
      </motion.div>
    </div>
  );
};

export default AnniversaryCounter;
