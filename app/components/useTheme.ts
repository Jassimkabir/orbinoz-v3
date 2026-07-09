'use client';

import { useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark';

export const THEME_KEY = 'theme';
const EVENT = 'themechange';

/** Read the theme the inline head script (or a previous toggle) put on <html>. */
export function getTheme(): Theme {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

/** Commit a theme: paint the DOM, persist it, and notify subscribers. */
export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* storage may be unavailable (private mode) — the DOM change still holds */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: theme }));
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

/**
 * Subscribe to the current theme. `data-theme` is managed outside React (by the
 * head script and the toggle), so components read it through this store rather
 * than local state. Server + first client render return 'light' to match the
 * server HTML; the store re-renders immediately if the real theme differs.
 */
export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, getTheme, () => 'light');
}
