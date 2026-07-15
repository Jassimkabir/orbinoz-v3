import type Lenis from 'lenis';

// Shared handle to the app-wide Lenis instance (created in SmoothScroll) so
// components can drive smooth programmatic scrolling without a window global.
let instance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  instance = l;
}

export function getLenis(): Lenis | null {
  return instance;
}
