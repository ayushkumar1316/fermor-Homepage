'use client';

import { Card } from '@/components/ui/card';
import { BLOGS } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/motion';
import { useReducedMotion } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Target, BookOpen } from 'lucide-react';
import { useState } from 'react';

export function Toolkit() {
  const [sipAmount, setSipAmount] = useState(500);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-pad bg-surface">
      <div className="container-wide space-y-8 lg:space-y-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.42 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-3 lg:mb-4">
            Everything you need to grow.
          </h2>
          <p className="text-base lg:text-lg text-ink-2">Nothing you don't.</p>
        </motion.div>

        {/* 4 CARDS */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-40px' }}
          variants={prefersReducedMotion ? { animate: { transition: { duration: 0 } } } : staggerContainer}
          className="grid lg:grid-cols-2 gap-4 lg:gap-6"
        >
          {/* TRACK */}
          <motion.div variants={staggerItem} transition={prefersReducedMotion ? { duration: 0 } : undefined}>
            <Card className="space-y-4 h-full">
              <Zap className="w-6 h-6 text-brand" />
              <h3 className="text-lg lg:text-xl font-semibold">Track</h3>
              <p className="text-sm lg:text-base text-ink-2">Know where every rupee goes</p>
              <div className="pt-2 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Food</span>
                  <span className="font-semibold">26%</span>
                </div>
                <div className="w-full bg-border h-2 rounded-full overflow-hidden">
                  <div className="bg-red-400 h-full" style={{ width: '26%' }} />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* INVEST */}
          <motion.div variants={staggerItem} transition={prefersReducedMotion ? { duration: 0 } : undefined}>
            <Card className="space-y-4 h-full">
              <TrendingUp className="w-6 h-6 text-lime" />
              <h3 className="text-lg lg:text-xl font-semibold">Invest</h3>
              <p className="text-sm lg:text-base text-ink-2">Start ₹500. Build crores.</p>
              <div className="space-y-3">
                <input
                  type="range"
                  min="100"
                  max="50000"
                  step="100"
                  value={sipAmount}
                  onChange={(e) => setSipAmount(Number(e.target.value))}
                  className="w-full"
                />
                <p className="text-xs lg:text-sm font-semibold">
                  ₹{sipAmount.toLocaleString('en-IN')}/mo → ₹
                  {Math.round(sipAmount * 1440).toLocaleString('en-IN')} in 5Y
                </p>
              </div>
            </Card>
          </motion.div>

          {/* PLAN */}
          <motion.div variants={staggerItem} transition={prefersReducedMotion ? { duration: 0 } : undefined}>
            <Card className="space-y-4 h-full">
              <Target className="w-6 h-6 text-brand" />
              <h3 className="text-lg lg:text-xl font-semibold">Plan</h3>
              <p className="text-sm lg:text-base text-ink-2">
                Retire early. Study abroad. Own that home.
              </p>
              <div className="space-y-2 text-sm">
                {['Retirement', 'Education', 'Home'].map((g) => (
                  <div key={g} className="px-3 py-2 bg-brand-soft rounded text-brand font-medium text-xs lg:text-sm">
                    {g}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* LEARN */}
          <motion.div variants={staggerItem} transition={prefersReducedMotion ? { duration: 0 } : undefined}>
            <Card className="space-y-4 h-full">
              <BookOpen className="w-6 h-6 text-brand" />
              <h3 className="text-lg lg:text-xl font-semibold">Learn</h3>
              <p className="text-sm lg:text-base text-ink-2">
                Tax, schemes, markets — made simple.
              </p>
              <div className="space-y-2 text-xs">
                {BLOGS.slice(0, 2).map((b, i) => (
                  <div key={i} className="truncate">
                    <span className="text-brand font-semibold">{b.tag}</span>{' '}
                    <span className="text-ink-3">• {b.readTime}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
