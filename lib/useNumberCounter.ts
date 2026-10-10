'use client';
import { useEffect, useState } from 'react';

export function useNumberCounter(
  to: number,
  duration: number = 1.5,
  start: number = 0
) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);

      // Easing: easeOut
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(start + (to - start) * easeProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [to, duration, start]);

  return value;
}

export function formatINR(value: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
