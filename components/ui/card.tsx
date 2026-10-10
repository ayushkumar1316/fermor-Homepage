'use client';

import { cn } from '@/lib/cn';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, ...props }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.03,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn('card-base bento-card', className)}
      {...props}
    >
      {/* PREMIUM GLOW EFFECT ON HOVER */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/12 via-transparent to-lime/8 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

      {/* ANIMATED BORDER SHIMMER */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          border: '1px solid transparent',
          backgroundImage: isHovered
            ? 'linear-gradient(135deg, rgba(108, 58, 232, 0.4), rgba(200, 241, 53, 0.3))'
            : 'linear-gradient(135deg, rgba(108, 58, 232, 0.1), rgba(200, 241, 53, 0.05))',
          backgroundClip: 'padding-box',
        }}
        transition={{ duration: 0.5 }}
      />

      {/* DUAL SPOTLIGHT EFFECT */}
      <motion.div
        className="absolute -inset-full pointer-events-none opacity-0 hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(200, 241, 53, 0.25), transparent 60%)',
          mixBlendMode: 'screen',
        }}
        animate={isHovered ? { scale: 1.3 } : { scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.div
        className="absolute -inset-full pointer-events-none opacity-0 hover:opacity-70"
        style={{
          background: 'radial-gradient(circle at 70% 70%, rgba(108, 58, 232, 0.2), transparent 60%)',
          mixBlendMode: 'multiply',
        }}
        animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
