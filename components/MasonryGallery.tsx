
import React from 'react';
import { motion } from 'framer-motion';

interface MasonryGalleryProps {
  images: string[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images }) => {
  return (
    <div className="w-full">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: (index % 6) * 0.1 }}
            className="break-inside-avoid"
          >
            <div className="relative group overflow-hidden rounded-3xl shadow-sm border border-sky-100/50 hover:shadow-xl transition-all duration-500">
              <img
                src={src}
                alt={`Kỷ niệm ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;
