'use client';

import { Card } from '@/components/ui/card';
import { BLOGS } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/motion';
import { useReducedMotion } from '@/lib/useMousePosition';
import { useNumberCounter, formatINR } from '@/lib/useNumberCounter';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, Target, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export function Toolkit() {
  const [sipAmount, setSipAmount] = useState(500);
  const prefersReducedMotion = useReducedMotion();

  // Generate SIP projection data
  const generateSipData = (monthly: number) => {
    return Array.from({ length: 61 }, (_, i) => ({
      month: i,
      value: monthly * (((Math.pow(1.01, i) - 1) / 0.01)),
    }));
  };

  const sipData = generateSipData(sipAmount);
  const sipProjection = sipAmount * 62.5; // 5-year rough estimate

  return (
    <section id="toolkit" className="section-frame frame-3 bg-gradient-to-b from-[var(--surface)] to-[var(--surface)]/80">
      <div className="container-wide space-y-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.42 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to <span className="text-lime">grow.</span>
          </h2>
          <p className="text-lg text-ink-2">Nothing you don't.</p>
        </motion.div>

        {/* 4 CARDS */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-6"
        >
          {/* TRACK - Animated Bars */}
          <motion.div variants={staggerItem}>
            <Card className="card-hover space-y-4 h-full">
              <div className="flex items-center justify-between">
                <Zap className="w-6 h-6 text-brand" />
                <motion.div
                  className="text-xs font-bold text-brand"
                  animate={prefersReducedMotion ? {} : { opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  LIVE
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold">Track</h3>
              <p className="text-ink-2 text-sm">Know where every rupee goes</p>

              {/* SPENDING BREAKDOWN */}
              <div className="pt-2 space-y-3">
                {[
                  { label: 'Food', value: 26, color: 'from-red-400 to-red-500' },
                  { label: 'Shopping', value: 17, color: 'from-blue-400 to-blue-500' },
                  { label: 'Transport', value: 14, color: 'from-yellow-400 to-yellow-500' },
                  { label: 'Others', value: 43, color: 'from-gray-400 to-gray-500' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="text-ink-2">{item.label}</span>
                      <span className="font-semibold text-ink">{item.value}%</span>
                    </div>
                    <motion.div
                      className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${item.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{ duration: 0.8, delay: i * 0.15 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* INVEST - Interactive SIP with Chart */}
          <motion.div variants={staggerItem}>
            <Card className="card-hover space-y-4 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <TrendingUp className="w-6 h-6 text-lime" />
                <span className="text-xs font-bold text-lime">INTERACTIVE</span>
              </div>
              <h3 className="text-xl font-semibold">Invest</h3>
              <p className="text-ink-2 text-sm">Start ₹500. Build crores.</p>

              {/* SLIDER */}
              <div className="space-y-3 flex-1">
                <div>
                  <label className="text-xs font-semibold text-ink-2 block mb-2">
                    Monthly SIP: <span className="text-brand font-bold">{formatINR(sipAmount)}</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="50000"
                    step="100"
                    value={sipAmount}
                    onChange={(e) => setSipAmount(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* ANIMATED CHART */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={sipAmount}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="h-24"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sipData}>
                        <defs>
                          <linearGradient id="colorSip" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#C8F135" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#C8F135" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="month" hide stroke="none" />
                        <YAxis hide stroke="none" />
                        <Tooltip
                          contentStyle={{
                            background: 'rgba(255,255,255,0.95)',
                            border: '1px solid #E8EDF2',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                          }}
                          formatter={(value) => [formatINR(value), 'Projection']}
                          cursor={{ stroke: '#C8F135', strokeWidth: 1 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#C8F135"
                          strokeWidth={2}
                          dot={false}
                          isAnimationActive
                          animationDuration={500}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </motion.div>
                </AnimatePresence>

                {/* PROJECTION */}
                <motion.div
                  className="bg-lime-pale rounded-lg p-3 border border-lime-deep/20"
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                >
                  <div className="text-xs text-lime-deep font-semibold">5-Year Projection</div>
                  <div className="font-bold text-lg text-lime-deep">
                    {formatINR(sipProjection)}
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* PLAN - Goal Cards */}
          <motion.div variants={staggerItem}>
            <Card className="card-hover space-y-4 h-full">
              <Target className="w-6 h-6 text-brand" />
              <h3 className="text-xl font-semibold">Plan</h3>
              <p className="text-ink-2 text-sm">
                Retire early. Study abroad. Own that home.
              </p>
              <div className="space-y-2 pt-2">
                {['Retirement', 'Education', 'Home'].map((goal, i) => (
                  <motion.div
                    key={goal}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-4 py-3 bg-brand-soft rounded-lg border border-brand/20 hover:border-brand/40 transition-all group cursor-pointer"
                    whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(108, 58, 232, 0.1)' }}
                  >
                    <div className="font-medium text-sm text-brand group-hover:text-brand font-semibold">
                      {goal}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* LEARN - Blog Carousel */}
          <motion.div variants={staggerItem}>
            <Card className="card-hover space-y-4 h-full">
              <BookOpen className="w-6 h-6 text-brand" />
              <h3 className="text-xl font-semibold">Learn</h3>
              <p className="text-ink-2 text-sm">
                Tax, schemes, markets — made simple.
              </p>
              <div className="space-y-2 pt-2 flex-1">
                {BLOGS.slice(0, 2).map((blog, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-brand/40 transition-all cursor-pointer group"
                    whileHover={{ scale: 1.01, boxShadow: '0 4px 12px rgba(108, 58, 232, 0.08)' }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-brand mb-1">{blog.tag}</div>
                        <div className="text-xs text-ink-2 line-clamp-2 group-hover:text-ink transition-colors">
                          {blog.title}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-ink-3 mt-2">{blog.readTime}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
