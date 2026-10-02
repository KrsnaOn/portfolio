"use client";

import { useTheme } from "next-themes";
import type { ReactNode } from "react";

import { MicroSlats } from "@/components/ui/micro-slats";
import { WarpText } from "@/components/ui/warp-text";

const THEME = {
  light: {
    text: "#0a0a0a",
    slat: "#b9add0",
    glint: "#6d5a8f",
    slatOpacity: 0.55,
  },
  dark: {
    text: "#fafafa",
    slat: "#c9bdd6",
    glint: "#ffffff",
    slatOpacity: 0.45,
  },
} as const;

export function WarpBanner(): ReactNode {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "dark" ? THEME.dark : THEME.light;

  return (
    <section className="mx-auto w-full max-w-275 px-6 sm:px-10">
      <div className="border-foreground/8 bg-background relative overflow-hidden rounded-4xl border shadow-sm">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ opacity: theme.slatOpacity }}
        >
          <MicroSlats
            preset="swell"
            color={theme.slat}
            glintColor={theme.glint}
            backgroundColor="transparent"
            slatWidth={10}
            slatHeight={25}
            gap={3}
            roundness={0.75}
            interactive
            cursorStrength={1}
            cursorSize={40}
            swirl={0}
            trail={1.4}
            lean={0}
            intro
          />
        </div>

        <WarpText
          text="Tokens to tools"
          color={theme.text}
          fontFamily="var(--font-serif)"
          fontWeight={500}
          fontSize="clamp(3rem, 10vw, 8rem)"
          letterSpacing="-0.04em"
          warpStrength={0.08}
          warpScale={1.7}
          speed={0.55}
          pointerInfluence={0.42}
          pointerStrength={0.38}
          refraction={0.018}
          ripple
          style={{ height: "clamp(260px, 32vw, 380px)" }}
        />
      </div>
    </section>
  );
}
