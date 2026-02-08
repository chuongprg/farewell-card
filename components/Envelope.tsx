
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

interface EnvelopeProps {
  isOpen: boolean;
  onClick: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onClick }) => {
  return (
    <div 
      className="relative cursor-pointer group"
      onClick={!isOpen ? onClick : undefined}
    >
      {/* 3D Envelope Wrapper */}
      <div className={`relative w-72 h-48 transition-all duration-1000 transform-gpu ${isOpen ? 'scale-110' : 'hover:scale-105'}`}>
        
        {/* Envelope Body (Back) */}
        <div className="absolute inset-0 bg-sky-200 shadow-xl rounded-sm"></div>

        {/* Paper Inside */}
        <motion.div 
          initial={{ y: 0 }}
          animate={isOpen ? { y: -60 } : { y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          className="absolute inset-x-4 top-4 bottom-4 bg-white rounded-sm shadow-inner p-4 flex flex-col items-center justify-center text-center"
        >
          <div className="w-12 h-1 bg-sky-50 mb-2"></div>
          <div className="w-20 h-1 bg-sky-50 mb-2"></div>
          <div className="w-16 h-1 bg-sky-50"></div>
          <Sparkles className="text-sky-400 mt-4 animate-pulse" size={20} />
        </motion.div>

        {/* Front Flaps */}
        {/* Left Flap */}
        <div 
          className="absolute inset-0 z-20"
          style={{
            clipPath: 'polygon(0 0, 0 100%, 50% 50%)',
            background: '#bae6fd' // Sky 200
          }}
        ></div>
        {/* Right Flap */}
        <div 
          className="absolute inset-0 z-20"
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)',
            background: '#bae6fd' // Sky 200
          }}
        ></div>
        {/* Bottom Flap */}
        <div 
          className="absolute inset-0 z-20"
          style={{
            clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)',
            background: '#7dd3fc' // Sky 300
          }}
        ></div>

        {/* Top Flap (Animating) */}
        <motion.div 
          initial={{ rotateX: 0 }}
          animate={isOpen ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 30 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 origin-top"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 50% 50%)',
            background: isOpen ? '#e0f2fe' : '#7dd3fc', // Sky 100 vs 300
            backfaceVisibility: 'hidden'
          }}
        ></motion.div>

        {/* Wax Seal / Button */}
        {!isOpen && (
          <motion.div 
            whileHover={{ scale: 1.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-sky-500 w-12 h-12 rounded-full shadow-lg flex items-center justify-center border-4 border-sky-100"
          >
            <Star className="text-white w-6 h-6" fill="currentColor" />
          </motion.div>
        )}
      </div>
      
      {/* Subtle floating effect when not open */}
      {!isOpen && (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -inset-4 border-2 border-sky-100 rounded-lg -z-10 opacity-50"
        ></motion.div>
      )}
    </div>
  );
};

export default Envelope;
