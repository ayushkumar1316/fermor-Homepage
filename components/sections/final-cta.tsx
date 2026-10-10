'use client';

import { Button } from '@/components/ui/button';
import { useReducedMotion } from '@/lib/hooks';
import { motion } from 'framer-motion';

export function FinalCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="final-cta" className="section-frame frame-6 bg-gradient-to-br from-[var(--navy)] via-[var(--brand)]/10 to-[var(--navy)] overflow-hidden relative">
      {/* GRADIENT ORBS */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 mix-blend-screen" style={{background: 'linear-gradient(135deg, var(--brand) 0%, var(--lime) 100%)'}} />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 mix-blend-multiply" style={{background: 'linear-gradient(to top right, var(--lime) 0%, var(--brand) 100%)'}} />
      </div>
      <div className="container-wide text-center space-y-4 lg:space-y-6 px-4 lg:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.42 }}
          className="text-2xl sm:text-3xl lg:text-5xl font-bold"
        >
          Ready to make your money make <span className="text-lime">sense?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.42, delay: 0.1 }}
          className="text-sm lg:text-lg text-white/70 max-w-lg mx-auto"
        >
          Join 50,000+ Indians. Takes 60 seconds. No credit card required.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.42, delay: 0.2 }}
        >
          <Button size="lg" className="bg-lime text-navy hover:bg-lime-deep text-sm lg:text-base">
            Start free
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
