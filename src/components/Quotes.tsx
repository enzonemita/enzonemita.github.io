import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote } from '../types';

interface QuotesProps {
  quotes: Quote[];
}

const Quotes: React.FC<QuotesProps> = ({ quotes }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  useEffect(() => {
    const backgroundEl = document.getElementById('background-patterns');
    if (!backgroundEl || hoveredId === null) {
      return;
    }

    const patterns = {
      1: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.03) 70%)',
      2: 'linear-gradient(45deg, transparent 45%, rgba(0,0,0,0.03) 45%, rgba(0,0,0,0.03) 55%, transparent 55%)',
      3: 'repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 10px)',
      4: 'linear-gradient(to right, transparent, rgba(0,0,0,0.03))',
      5: 'radial-gradient(circle at 100% 100%, transparent 0%, rgba(0,0,0,0.03) 70%)',
      6: 'repeating-radial-gradient(circle at center, transparent 0, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px)',
      7: 'conic-gradient(from 45deg, transparent 0%, rgba(0,0,0,0.03) 50%, transparent 100%)',
      8: 'linear-gradient(135deg, transparent 25%, rgba(0,0,0,0.03) 25%, rgba(0,0,0,0.03) 50%, transparent 50%)',
      9: 'radial-gradient(circle at 0% 0%, transparent 0%, rgba(0,0,0,0.03) 70%)',
      10: 'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0,0,0,0.03) 20px, rgba(0,0,0,0.03) 40px)'
    };

    backgroundEl.style.background = patterns[hoveredId as keyof typeof patterns] || '';
    backgroundEl.style.opacity = hoveredId ? '1' : '0';
  }, [hoveredId]);

  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="columns-1 md:columns-2 gap-8 [column-fill:_balance] space-y-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.id}
              className={`break-inside-avoid mb-8 p-8 md:p-10 border border-black/10 dark:border-white/10 
                ${hoveredId === quote.id 
                  ? 'bg-black dark:bg-white text-white dark:text-black' 
                  : 'bg-white/50 dark:bg-black/50 backdrop-blur-sm text-black dark:text-white'
                } transition-colors duration-500`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(quote.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative z-10">
                <p className="text-lg md:text-xl font-serif italic mb-4 leading-relaxed">
                  "{quote.text}"
                </p>
                <footer className="text-right">
                  <cite className="not-italic text-sm md:text-base font-semibold">
                    — {quote.author}
                  </cite>
                </footer>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quotes;