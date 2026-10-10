'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Moon, Sun, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  {
    label: 'Products',
    href: '#clarity',
    submenu: [
      { label: 'Track & Invest', href: '#clarity' },
      { label: 'Smart Planning', href: '#forecast' },
      { label: 'Learning Hub', href: '#toolkit' },
    ],
  },
  {
    label: 'Insights',
    href: '#forecast',
    submenu: [
      { label: 'Market Analysis', href: '#forecast' },
      { label: 'Financial Forecasts', href: '#forecast' },
      { label: 'Research', href: '#ask' },
    ],
  },
  {
    label: 'Resources',
    href: '#ask',
    submenu: [
      { label: 'Help Center', href: '#ask' },
      { label: 'Blog', href: '#ask' },
      { label: 'Community', href: '#ask' },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    const theme = newIsDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'px-4 sm:px-6 py-4 lg:px-8 lg:py-5',
        'navbar-base',
        isDark ? 'navbar-dark' : 'navbar-light',
        scrolled && 'border-b'
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl lg:text-2xl font-black text-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 rounded transition-all hover:scale-105">
          Fermor
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex gap-0.5 items-center">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <button
                className="text-sm px-4 py-2.5 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-1.5 font-medium group-hover:text-lime smooth-transition"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.label}
                <motion.div
                  animate={openDropdown === item.label ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-[var(--card)] border border-brand/20 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    style={{
                      backdropFilter: 'blur(20px) saturate(180%)',
                      background: 'linear-gradient(135deg, rgba(26, 29, 32, 0.9), rgba(26, 29, 32, 0.8))',
                    }}
                  >
                    {item.submenu?.map((subitem, idx) => (
                      <motion.div key={idx} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                        <Link
                          href={subitem.href}
                          className="block px-5 py-3 text-sm font-medium hover:bg-brand/10 hover:text-lime transition-all duration-300 first:border-t-0 border-t border-white/5 group-hover:text-lime"
                        >
                          {subitem.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex gap-2 sm:gap-3 items-center">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-2.5 hover:bg-white/10 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand smooth-transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun size={20} className="text-lime" />
            ) : (
              <Moon size={20} className="text-brand" />
            )}
          </motion.button>
          <Button variant="outline" size="sm" className="text-xs sm:text-sm">
            Login
          </Button>
          <Button variant="primary" size="sm" className="text-xs sm:text-sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
