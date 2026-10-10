'use client';

import { Card } from '@/components/ui/card';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion';
import { useReducedMotion } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { Eye, Brain, Zap } from 'lucide-react';

export function Clarity() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="clarity" className="section-frame frame-2 section-spacing-ultra gradient-overlay-premium">
      <div className="container-wide space-y-20">
        {/* HEADER - MODERN TYPOGRAPHY */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
          transition={prefersReducedMotion ? { duration: 0 } : undefined}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-ultra-bold mb-6 modern-text-gradient">
            From scattered to <span className="text-lime">sorted.</span>
          </h2>
          <p className="text-xl lg:text-2xl text-ink-2 font-light tracking-wide">
            Bank apps, Excel sheets, WhatsApp tips — Fermor brings it all
            together.
          </p>
        </motion.div>

        {/* BEFORE → AFTER */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
          transition={prefersReducedMotion ? { duration: 0 } : undefined}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ink-2">Before</h3>
            <div className="space-y-3 p-6 rounded-2xl border transition-all duration-300" style={{
              backgroundColor: 'rgba(220, 38, 38, 0.1)',
              borderColor: 'rgba(220, 38, 38, 0.3)',
              backdropFilter: 'blur(8px)'
            }}>
              <div className="text-sm text-ink-3">🏦 HDFC App</div>
              <div className="text-sm text-ink-3">📊 Excel Sheet</div>
              <div className="text-sm text-ink-3">💬 WhatsApp Group</div>
              <div className="text-sm text-ink-3">🤔 Confusion</div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-lime-deep">After</h3>
            <Card className="space-y-3">
              <div className="text-sm font-semibold">📱 Fermor</div>
              <div className="text-2xl font-bold">₹12,48,320</div>
              <div className="text-xs text-ink-2">
                Everything. One dashboard.
              </div>
            </Card>
          </div>
        </motion.div>

        {/* 3 PILLARS */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-40px' }}
          variants={prefersReducedMotion ? { animate: { transition: { duration: 0 } } } : staggerContainer}
          className="grid lg:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Eye,
              title: 'See',
              desc: 'Every rupee, every account, one view.',
            },
            {
              icon: Brain,
              title: 'Understand',
              desc: 'AI that explains, not confuses.',
            },
            {
              icon: Zap,
              title: 'Act',
              desc: 'Invest, rebalance, save — one tap.',
            },
          ].map((item, i) => (
            <motion.div key={i} variants={staggerItem} transition={prefersReducedMotion ? { duration: 0 } : undefined}>
              <Card className="space-y-3">
                <item.icon className="w-8 h-8 text-brand" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-ink-2">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
