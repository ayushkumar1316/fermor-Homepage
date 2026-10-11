'use client';

import { Button } from '@/components/ui/button';
import { fadeUp, springSnappy } from '@/lib/motion';
import { useReducedMotion } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* GRADIENT ORB BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{
            background:
              'linear-gradient(135deg, var(--brand) 0%, var(--lime) 100%)',
          }}
        />
      </div>

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ccc 0.5px, transparent 0.5px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-wide grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* LEFT: TEXT */}
        <motion.div
          initial={prefersReducedMotion ? "animate" : "initial"}
          animate="animate"
          variants={fadeUp}
          transition={prefersReducedMotion ? { duration: 0 } : undefined}
          className="space-y-4 lg:space-y-6"
        >
          {/* EYEBROW */}
          <motion.div
            className="inline-flex items-center gap-2 text-xs lg:text-sm font-medium text-brand bg-brand-soft px-3 py-1 rounded-full"
            variants={fadeUp}
            transition={prefersReducedMotion ? { duration: 0 } : undefined}
          >
            <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
            Trusted by 50,000+ Indians
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight"
            variants={fadeUp}
            transition={prefersReducedMotion ? { duration: 0 } : undefined}
          >
            Your money,{' '}
            <span className="bg-gradient-to-r from-brand to-lime bg-clip-text text-transparent">
              finally making sense.
            </span>
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            className="text-base lg:text-xl text-ink-2 max-w-md leading-relaxed"
            variants={fadeUp}
            transition={prefersReducedMotion ? { duration: 0 } : undefined}
          >
            Invest, track and plan in one place — powered by India's smartest
            financial engine. No jargon. Just clarity.
          </motion.p>

          {/* MICRO-TRUST */}
          <motion.p
            className="text-xs lg:text-sm text-ink-3 flex flex-wrap gap-2 lg:gap-4"
            variants={fadeUp}
            transition={prefersReducedMotion ? { duration: 0 } : undefined}
          >
            <span>✓ SEBI-registered</span>
            <span>✓ Bank-grade encryption</span>
            <span>✓ No spam</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 pt-2 lg:pt-4"
            variants={fadeUp}
            transition={prefersReducedMotion ? { duration: 0 } : undefined}
          >
            <Button size="lg" className="text-sm lg:text-base">Start free — 60 sec</Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('clarity')}
              className="gap-2 text-sm lg:text-base"
            >
              <Play size={16} className="lg:w-5 lg:h-5" />
              See how it works
            </Button>
          </motion.div>
        </motion.div>

        {/* RIGHT: PHONE MOCKUP - Hide on mobile, show on lg */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ...springSnappy }}
          className="hidden lg:flex justify-center"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="w-72 relative">
      {/* PHONE FRAME */}
      <div className="relative bg-black rounded-3xl p-2 shadow-sh3">
        {/* NOTCH */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />

        {/* SCREEN */}
        <div className="bg-white rounded-3xl aspect-video overflow-hidden relative">
          {/* PHONE CONTENT: DASHBOARD PEEK */}
          <div className="p-4 space-y-3">
            {/* TOP BAR */}
            <div className="flex justify-between items-center text-xs font-semibold">
              <span>Total wealth</span>
              <span className="text-lime">▲ 8.4%</span>
            </div>
            <div className="text-lg font-bold">₹12,48,320</div>

            {/* SPENDING PIE */}
            <div className="mt-3 space-y-2">
              <div className="text-xs font-medium text-ink-2">Spending</div>
              <div className="grid grid-cols-4 gap-1">
                <div className="h-2 bg-red-400 rounded" />
                <div className="h-2 bg-brand rounded" />
                <div className="h-2 bg-lime rounded" />
                <div className="h-2 bg-gray-300 rounded" />
              </div>
            </div>

            {/* SIP CARD */}
            <div className="mt-4 bg-brand-soft rounded-lg p-2 text-xs">
              <div className="font-medium">SIP</div>
              <div className="font-bold text-brand">₹500/mo → ₹1.2L in 5Y</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
