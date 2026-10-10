'use client';

import { Card } from '@/components/ui/card';
import { TESTIMONIALS } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/motion';
import { useReducedMotion } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { Lock, Shield, Award } from 'lucide-react';

export function Trust() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="trust" className="section-frame frame-6 section-spacing-ultra gradient-overlay-brand">
      <div className="container-wide space-y-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-ultra-bold mb-4 modern-text-gradient">
            Trusted by thousands. Secured by design.
          </h2>
          <p className="text-xl text-ink-2 font-light tracking-wide">
            Enterprise-grade security meets modern simplicity.
          </p>
        </motion.div>

        {/* TESTIMONIALS */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-40px' }}
          variants={prefersReducedMotion ? { animate: { transition: { duration: 0 } } } : staggerContainer}
          className="grid lg:grid-cols-3 gap-ultra mb-20"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} variants={staggerItem} transition={prefersReducedMotion ? { duration: 0 } : undefined}>
              <Card className="space-y-4 h-full">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-ink-3">{t.city}</p>
                  </div>
                </div>
                <p className="text-sm text-ink-2 italic">"{t.quote}"</p>
                <div className="text-lime">★★★★★</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* SECURITY ROW */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.42 }}
          className="grid lg:grid-cols-3 gap-8 py-8 border-t border-border"
        >
          {[
            { Icon: Lock, title: 'Bank-grade encryption', desc: '256-bit SSL security' },
            { Icon: Shield, title: 'SEBI-registered', desc: 'Full compliance' },
            { Icon: Award, title: 'ISO 27001 certified', desc: 'Data security standard' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex gap-4 items-start group cursor-default"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <motion.div
                className="w-6 h-6 text-brand flex-shrink-0"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <item.Icon className="w-6 h-6" />
              </motion.div>
              <div>
                <p className="font-semibold group-hover:text-brand transition-colors">{item.title}</p>
                <p className="text-sm text-ink-3">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
