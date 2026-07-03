"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";

/**
 * Thin wrapper over HugeIcons (free set) so every icon in the app shares one
 * stroke weight and inherits the current text color. Pass any icon from
 * `@hugeicons/core-free-icons`.
 */
export function Icon({
  icon,
  size = 18,
  strokeWidth = 1.8,
  className,
}: {
  icon: IconSvgElement;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}
