'use client';

import { useCallback } from 'react';
import { flushSync } from 'react-dom';
import { Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons';
import { Icon } from './ui/hugeicon';
import { cn } from '@/lib/utils';
import { applyTheme, getTheme, useTheme } from './useTheme';

export default function ThemeToggle({ className }: { className?: string }) {
  const theme = useTheme();
  const isDark = theme === 'dark';

  const toggle = useCallback(() => {
    const next = getTheme() === 'dark' ? 'light' : 'dark';

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    // No View Transitions support (or the user opted out of motion): just flip.
    if (!document.startViewTransition || prefersReduced) {
      applyTheme(next);
      return;
    }

    // The blur-fade cross-dissolve is driven entirely by the CSS animations on
    // ::view-transition-old/new(root); we only need to swap the theme inside
    // the transition. flushSync so it's captured in the snapshot synchronously.
    document.startViewTransition(() => {
      flushSync(() => applyTheme(next));
    });
  }, []);

  return (
    <button
      type='button'
      onClick={toggle}
      role='switch'
      aria-checked={isDark}
      aria-label='Toggle dark mode'
      title={isDark ? 'Switch to light' : 'Switch to dark'}
      className={cn(
        'group relative flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 hover:-translate-y-0.5',
        className,
      )}
    >
      <span className='relative h-[18px] w-[18px]'>
        <Icon
          icon={Sun03Icon}
          size={18}
          className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-50 opacity-0'
          }`}
        />
        <Icon
          icon={Moon02Icon}
          size={18}
          className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isDark
              ? 'rotate-90 scale-50 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
      </span>
    </button>
  );
}
