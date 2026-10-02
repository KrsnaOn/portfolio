"use client";

import { useTheme } from "next-themes";
import type { ReactNode } from "react";

import { GlowCursor } from "@/components/ui/glow-cursor";

// "screen" blending is invisible on a white page, so light mode draws the
// trail with normal alpha compositing instead.
export function HeroGlow({ children }: { children: ReactNode }): ReactNode {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <GlowCursor
      color="#a0a8a9"
      secondaryColor="#d9d4e9"
      trailLength={40}
      trailWidth={8}
      trailTaper={0.8}
      followSpeed={0.16}
      glowIntensity={1.9}
      glowSpread={1.2}
      hotspot={isDark ? 0.65 : 0.2}
      brightness={1.25}
      opacity={isDark ? 1 : 0.7}
      pulseSpeed={1.1}
      noiseStrength={0.035}
      idleFade
      idleTimeout={700}
      fadeDuration={900}
      blendMode={isDark ? "screen" : "normal"}
    >
      {children}
    </GlowCursor>
  );
}
