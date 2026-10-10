'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useReducedMotion } from '@/lib/useMousePosition';
import { useNumberCounter, formatINR } from '@/lib/useNumberCounter';

export function Forecast() {
  const [initial, setInitial] = useState(5300000);
  const [years, setYears] = useState(10);
  const prefersReducedMotion = useReducedMotion();

  const projected = initial * Math.pow(1.12, years);
  const gain = projected - initial;
  const gainPercent = (gain / initial) * 100;

  // Generate wealth projection data
  const generateData = (startWealth: number, yearsCount: number) => {
    return Array.from({ length: yearsCount * 12 + 1 }, (_, i) => ({
      month: i,
      value: startWealth * Math.pow(1 + 0.12 / 12, i),
    }));
  };

  const data = generateData(initial, years);
  const projectedNumber = useNumberCounter(projected, prefersReducedMotion ? 0 : 1.2, initial);
  const gainNumber = useNumberCounter(gain, prefersReducedMotion ? 0 : 1.2, 0);

  return (
    <section id="forecast" className="section-frame frame-4 section-spacing-ultra gradient-overlay-brand">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.42 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="font-display text-ultra-bold mb-6 modern-text-gradient"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Forecast your <span className="text-lime">future.</span>
          </motion.h2>
          <motion.p
            className="text-xl lg:text-2xl text-ink-2 font-light tracking-wide max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Model scenarios and see how your money grows.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: CONTROLS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            className="space-y-8"
          >
            {/* INITIAL WEALTH SLIDER */}
            <motion.div
              className="space-y-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <label className="text-sm font-bold text-ink mb-2 block">
                  Total wealth today
                </label>
                <div className="text-2xl font-bold gradient-text mb-3">
                  {formatINR(initial)}
                </div>
                <input
                  type="range"
                  min="500000"
                  max="50000000"
                  step="100000"
                  value={initial}
                  onChange={(e) => setInitial(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-ink-3 mt-2">
                  <span>₹5L</span>
                  <span>₹50Cr</span>
                </div>
              </div>
            </motion.div>

            {/* TIMELINE BUTTONS */}
            <motion.div>
              <label className="text-sm font-bold text-ink mb-4 block">Timeline</label>
              <div className="flex gap-2 flex-wrap">
                {[2, 5, 10, 15, 20].map((y) => (
                  <motion.button
                    key={y}
                    onClick={() => setYears(y)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                      y === years
                        ? 'bg-brand text-white shadow-lg shadow-glow'
                        : 'bg-gray-100 text-ink-2 hover:bg-gray-200 border border-gray-300'
                    }`}
                  >
                    {y}Y
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* MONTHLY SIP SLIDER */}
            <motion.div className="space-y-3">
              <label className="text-sm font-bold text-ink block">Monthly investment (optional)</label>
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                defaultValue="0"
                className="w-full"
              />
              <div className="text-xs text-ink-3">Add regular investments to boost growth</div>
            </motion.div>

            {/* ASSUMPTION NOTE */}
            <motion.div
              className="p-3 bg-blue-50 rounded-lg border border-blue-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="text-xs text-blue-900">
                <span className="font-semibold">📊 Assumption:</span> 12% annual CAGR (market average) — adjust timeline to see different scenarios
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: CHART + BIG NUMBERS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            className="space-y-6"
          >
            {/* PREMIUM CHART */}
            <motion.div
              className="glass-card-premium p-6"
              whileHover={{ boxShadow: '0 20px 60px rgba(108, 58, 232, 0.15)' }}
            >
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorProjection" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6C3AE8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#6C3AE8" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E8EDF2" vertical={false} />
                  <XAxis
                    dataKey="month"
                    stroke="#94A3B8"
                    style={{ fontSize: '12px' }}
                    tickFormatter={(v) => {
                      const year = Math.floor(v / 12);
                      return year > 0 ? `${year}Y` : '0';
                    }}
                  />
                  <YAxis hide domain={[0, projected * 1.15]} />
                  <Tooltip
                    contentStyle={{
                      background: 'rgba(255, 255, 255, 0.98)',
                      border: '1px solid #E8EDF2',
                      borderRadius: '12px',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                      padding: '12px',
                    }}
                    formatter={(value) => [formatINR(value as number), 'Projected wealth']}
                    labelFormatter={(label) => {
                      const year = Math.floor(label / 12);
                      const month = label % 12;
                      return `${year}Y ${month}M`;
                    }}
                    cursor={{
                      stroke: '#6C3AE8',
                      strokeWidth: 2,
                      strokeOpacity: 0.3,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#6C3AE8"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorProjection)"
                    isAnimationActive={!prefersReducedMotion}
                    animationDuration={800}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* BIG NUMBERS - ANIMATED COUNTERS */}
            <div className="space-y-4">
              {/* PROJECTED WEALTH */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="text-sm text-ink-3 font-medium">
                  Projected wealth in {years} years
                </div>
                <motion.div
                  key={`proj-${initial}-${years}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl lg:text-5xl font-bold text-ink font-mono"
                >
                  {formatINR(projectedNumber)}
                </motion.div>
              </motion.div>

              {/* GAIN */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-sm text-ink-3 font-medium">Total gain</div>
                <motion.div
                  key={`gain-${initial}-${years}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-3xl lg:text-4xl font-bold text-lime font-mono"
                >
                  +{formatINR(gainNumber)}
                </motion.div>
              </motion.div>

              {/* PERCENTAGE */}
              <motion.div
                className="pt-2 inline-block px-4 py-2 bg-lime-pale rounded-full border border-lime-deep/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-sm font-bold text-lime-deep">
                  +{gainPercent.toFixed(0)}% growth
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
