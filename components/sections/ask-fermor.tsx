'use client';

import { ASK_PRESETS } from '@/lib/constants';
import { useReducedMotion } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function AskFermor() {
  const [selected, setSelected] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="ask" className="section-frame frame-5 section-spacing-ultra gradient-overlay-premium">
      <div className="container-wide max-w-3xl mx-auto text-center space-y-12 px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.42 }}
        >
          <h2 className="font-display text-ultra-bold mb-6 modern-text-gradient">
            Ask anything.
          </h2>
          <p className="text-xl lg:text-2xl text-ink-2 font-light tracking-wide">
            Get answers grounded in your money.
          </p>
        </motion.div>

        <motion.div className="flex flex-col gap-2 lg:gap-3 mb-6 lg:mb-8">
          {ASK_PRESETS.map((p, i) => (
            <motion.button
              key={i}
              onClick={() => setSelected(i)}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`p-3 rounded-lg border-2 transition-all text-xs lg:text-sm text-left font-medium ${
                i === selected
                  ? 'border-brand bg-gradient-to-r from-brand-soft to-brand/5 text-brand shadow-md'
                  : 'border-border text-ink-2 hover:border-brand hover:bg-brand/5'
              }`}
            >
              {p.q}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
          className="bg-brand-soft rounded-2xl p-6 lg:p-8 space-y-3 lg:space-y-4"
        >
          <div className="text-lg lg:text-2xl font-bold text-brand">
            {ASK_PRESETS[selected].a}
          </div>
          <p className="text-xs lg:text-sm text-ink-3">
            Educational information. Not financial advice.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
