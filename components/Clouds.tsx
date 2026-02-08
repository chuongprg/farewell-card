
import React from 'react';
import { motion } from 'framer-motion';

const CloudShape = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 60" className={className} fill="currentColor">
    <path d="M20,40 Q20,20 40,20 Q45,10 55,10 Q70,10 75,25 Q95,25 95,45 Q95,60 75,60 L25,60 Q5,60 5,45 Q5,35 20,40" />
  </svg>
);

const Clouds: React.FC = () => {
  // Generate a fixed set of cloud configurations for a consistent but varied look
  const clouds = [
    { id: 1, size: 120, top: '10%', duration: 45, delay: 0, opacity: 0.4 },
    { id: 2, size: 180, top: '25%', duration: 60, delay: -10, opacity: 0.3 },
    { id: 3, size: 100, top: '45%', duration: 35, delay: -20, opacity: 0.5 },
    { id: 4, size: 220, top: '65%', duration: 80, delay: -5, opacity: 0.2 },
    { id: 5, size: 150, top: '80%', duration: 50, delay: -15, opacity: 0.4 },
    { id: 6, size: 90, top: '15%', duration: 40, delay: -30, opacity: 0.3 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          initial={{ x: '-20vw', opacity: 0 }}
          animate={{ 
            x: '110vw', 
            opacity: [0, cloud.opacity, cloud.opacity, 0] 
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            delay: cloud.delay,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            top: cloud.top,
            width: cloud.size,
            color: 'white',
          }}
        >
          <CloudShape className="w-full h-auto drop-shadow-md" />
        </motion.div>
      ))}
    </div>
  );
};

export default Clouds;
