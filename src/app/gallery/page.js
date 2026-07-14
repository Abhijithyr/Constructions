'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const staticGalleryItems = [
  { id: 1, src: '/images/gallerynew.jpeg' },
  { id: 2, src: '/images/Galleryimg-1.jpeg' },
  { id: 3, src: '/images/Galleryimg-2.jpeg' },
  { id: 4, src: '/images/Galleryimg-3.jpeg' },
  { id: 5, src: '/images/Galleryimg-4.jpeg' },
  { id: 6, src: '/images/Galleryimg-5.jpeg' },
  { id: 7, src: '/images/Galleryimg-6.jpeg' },
  { id: 8, src: '/images/Galleryimg-7.jpeg' },
  { id: 9, src: '/images/Galleryimg-8.jpeg' },
  { id: 10, src: '/images/Galleryimg-9.jpeg' },
  { id: 11, src: '/images/Galleryimg-10.jpeg' },
  { id: 12, src: '/images/Galleryimg-11.jpeg' },
  { id: 13, src: '/images/Galleryimg-12.jpeg' },
  { id: 14, src: '/images/Galleryimg-13.jpeg' },
  { id: 15, src: '/images/Galleryimg-14.jpeg' },
  { id: 16, src: '/images/Galleryimg-15.jpeg' },
  { id: 17, src: '/images/Galleryimg-16.jpeg' },
  { id: 18, src: '/images/Galleryimg-17.jpeg' },
  { id: 19, src: '/images/Galleryimg-18.jpeg' },
  { id: 20, src: '/images/Galleryimg-19.jpeg' },
  { id: 21, src: '/images/Galleryimg-20.jpeg' },
  { id: 22, src: '/images/Galleryimg-21.jpeg' },
  { id: 23, src: '/images/Galleryimg-22.jpeg' },
  { id: 24, src: '/images/Galleryimg-23.jpeg' },
  { id: 25, src: '/images/gallery-2.jpeg' },
  { id: 26, src: '/images/gallery-3.jpeg' },
  { id: 27, src: '/images/gallery-4.jpeg' },
  { id: 28, src: '/images/gallery-5.jpeg' },
  { id: 29, src: '/images/gallery-6.jpeg' },
  { id: 30, src: '/images/gallery-7.jpeg' },
  { id: 31, src: '/images/gallery-9.jpeg' },
  { id: 32, src: '/images/gallery-11.jpeg' },
  { id: 33, src: '/images/gallery-21.jpeg' },
  { id: 34, src: '/images/gallery-22.jpeg' },
  { id: 35, src: '/images/gallery-27.jpeg' },
];

const galleryItems = Array.from({ length: 35 }, (_, index) => {
  const template = staticGalleryItems[index % staticGalleryItems.length];
  return {
    ...template,
    id: index + 1,
  };
});

export default function LuxuryGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const activeImage = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      
      {/* HEADER WITH ARCHITECTURAL BACKGROUND INTERFACE */}
      <section className="relative overflow-hidden bg-neutral-50 border-b border-neutral-200 py-20 px-4 text-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative max-w-3xl mx-auto space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 uppercase">
            RS CONSTRUCTIONS GALLERY
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 font-medium tracking-wide">
            A Showcase of Structural Excellence
          </p>
        </div>
      </section>

      {/* GEOMETRIC SYMMETRICAL GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {galleryItems.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-square w-full rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 cursor-pointer shadow-xs"
              >
                <Image 
                  src={image.src} 
                  alt="RS Constructions Images"
                  fill
                  sizes="(max-w-1280px) 20vw, 50vw"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Clean Hover Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                  <span className="text-[9px] font-black uppercase text-orange-400 tracking-wider mb-0.5">{image.category}</span>
                  <h3 className="text-xs font-bold leading-tight line-clamp-2">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* PURE IMAGE-ONLY FULLSCREEN LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-950/90 backdrop-blur-xs z-50 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Centered Image Container Block */}
            <motion.div 
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.97 }}
              className="relative w-full max-w-5xl h-[80vh] md:h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={activeImage.src}
                alt="RS Constructions Images"
                fill
                priority
                className="object-contain"
              />

              {/* Left Navigation Arrow */}
              <button 
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition-all cursor-pointer border border-neutral-800"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Right Navigation Arrow */}
              <button 
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition-all cursor-pointer border border-neutral-800"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>

            {/* Top-Right Close Button */}
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2.5 rounded-full text-white transition-all cursor-pointer border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}