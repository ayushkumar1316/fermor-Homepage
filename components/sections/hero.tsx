'use client';

import { Button } from '@/components/ui/button';
import { fadeUp, springSnappy } from '@/lib/motion';
import { useReducedMotion, useMousePosition } from '@/lib/useMousePosition';
import { useNumberCounter, formatINR } from '@/lib/useNumberCounter';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Play } from 'lucide-react';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { mousePosition, containerRef } = useMousePosition();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // 3D parallax calculations
  const rotateX = useTransform(
    () => (mousePosition.y / 100) * (prefersReducedMotion ? 0 : 5),
    (value) => value
  );
  const rotateY = useTransform(
    () => (mousePosition.x / 100) * (prefersReducedMotion ? 0 : -5),
    (value) => value
  );

  const springConfig = { damping: 20, mass: 0.5, stiffness: 100 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  return (
    <section id="hero" className="relative min-h-screen pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden frame-1">
      {/* VIDEO HERO BACKGROUND - READY FOR FUTURE VIDEO */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          style={{ filter: 'blur(1px)' }}
        >
          <source src="/videos/fermor-phone-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface)]/50 via-[var(--surface)]/80 to-[var(--surface)]" />
      </div>

      {/* GRADIENT ORB BACKGROUNDS */}
      <div className="hero-bg">
        <div className="hero-orb-primary" />
        <div className="hero-orb-secondary" />
        <div className="hero-grid" />
      </div>

      <div className="container-wide grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* LEFT: TEXT */}
        <motion.div
          initial={prefersReducedMotion ? 'animate' : 'initial'}
          animate="animate"
          variants={fadeUp}
          transition={prefersReducedMotion ? { duration: 0 } : undefined}
          className="space-y-4 lg:space-y-6"
        >
          {/* EYEBROW */}
          <motion.div
            className="inline-flex items-center gap-2 text-xs lg:text-sm font-medium text-brand bg-brand-soft px-3 py-1.5 rounded-full border border-brand/10"
            variants={fadeUp}
            transition={prefersReducedMotion ? { duration: 0 } : undefined}
          >
            <motion.span
              className="w-2 h-2 bg-lime rounded-full"
              animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Trusted by 50,000+ Indians
          </motion.div>

          {/* HEADLINE - MODERN ANIMATED GRADIENT */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight modern-text-gradient"
            variants={fadeUp}
            transition={prefersReducedMotion ? { duration: 0 } : undefined}
          >
            Your money,{' '}
            <span className="text-lime">finally making sense.</span>
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            className="text-base lg:text-lg text-ink-2 max-w-md leading-relaxed"
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
            <span className="flex items-center gap-1">
              <span className="text-lime">✓</span> SEBI-registered
            </span>
            <span className="flex items-center gap-1">
              <span className="text-lime">✓</span> Bank-grade encryption
            </span>
            <span className="flex items-center gap-1">
              <span className="text-lime">✓</span> No spam
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 pt-2 lg:pt-4"
            variants={fadeUp}
            transition={prefersReducedMotion ? { duration: 0 } : undefined}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="text-sm lg:text-base w-full sm:w-auto">
                Start free — 60 sec
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('clarity')}
                className="gap-2 text-sm lg:text-base w-full sm:w-auto"
              >
                <Play size={16} className="lg:w-5 lg:h-5" />
                See how it works
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT: PHONE MOCKUP - 3D PARALLAX */}
        <motion.div
          ref={containerRef}
          initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ...springSnappy }}
          style={
            prefersReducedMotion
              ? {}
              : {
                  rotateX: rotateXSpring,
                  rotateY: rotateYSpring,
                  transformPerspective: 1000,
                }
          }
          className="hidden lg:flex justify-center perspective"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  const prefersReducedMotion = useReducedMotion();
  const wealth = useNumberCounter(1248320, prefersReducedMotion ? 0 : 1.5, 0);
  const spendingFood = useNumberCounter(12480, prefersReducedMotion ? 0 : 1.2, 0);

  return (
    <motion.div
      className="w-72 relative"
      animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
      transition={prefersReducedMotion ? {} : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* PHONE FRAME */}
      <div className="relative bg-black rounded-3xl p-2 shadow-2xl">
        {/* SHINE EFFECT */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />

        {/* NOTCH */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />

        {/* SCREEN */}
        <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl aspect-video overflow-hidden relative">
          {/* ANIMATED CONTENT */}
          <motion.div
            className="p-4 space-y-3 h-full flex flex-col justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* TOP BAR WITH ANIMATED WEALTH */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-gray-600">Total wealth</span>
                <motion.span
                  className="text-lime font-bold"
                  animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 1 }}
                >
                  ▲ 8.4%
                </motion.span>
              </div>

              {/* ANIMATED NUMBER COUNTER */}
              <div className="text-lg font-bold text-gray-900 font-mono">
                {formatINR(wealth)}
              </div>
            </div>

            {/* SPENDING BREAKDOWN - ANIMATED BARS */}
            <motion.div className="space-y-2">
              <div className="text-xs font-semibold text-gray-700">Spending breakdown</div>

              {/* FOOD BAR - ANIMATED */}
              <motion.div
                className="space-y-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Food</span>
                  <span className="font-semibold">{formatINR(spendingFood)}</span>
                </div>
                <motion.div
                  className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-400 to-red-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: '26%' }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  />
                </motion.div>
              </motion.div>

              {/* OTHER BARS - STATIC FOR DEMO */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Shopping</span>
                  <span className="font-semibold">₹8.3K</span>
                </div>
                <div className="w-full h-1.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" style={{ width: '17%' }} />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Transport</span>
                  <span className="font-semibold">₹6.9K</span>
                </div>
                <div className="w-full h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full" style={{ width: '14%' }} />
              </div>
            </motion.div>

            {/* ANIMATED SIP CARD */}
            <motion.div
              className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-3 border border-purple-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.02, boxShadow: '0 8px 16px rgba(108, 58, 232, 0.15)' }}
            >
              <div className="font-medium text-xs text-purple-900">SIP</div>
              <div className="font-bold text-purple-600 text-sm">
                ₹500/mo <span className="text-xs opacity-70">→</span> ₹1.2L in 5Y
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
