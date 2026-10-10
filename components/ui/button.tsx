'use client';

import { cn } from '@/lib/cn';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'neon';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'btn-base',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  );

  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    neon: 'btn-neon',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.08, y: -3 }}
      whileTap={{ scale: 0.92, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {/* SHIMMER OVERLAY FOR PRIMARY */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ['0%', '100%'] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ width: '100%' }}
        />
      )}

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
