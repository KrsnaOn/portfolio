import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Krishna Barnwal — AI & ML student at SSTC Bhilai, building NLP and retrieval systems.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Hello! I&rsquo;m{" "}
              <span className="border-b border-foreground/30 pb-0.5">
                Krishna Barnwal
              </span>
              .
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                An{" "}
                <strong className="font-semibold text-foreground">
                  AI &amp; ML student
                </strong>{" "}
                at SSTC Bhilai, building{" "}
                <strong className="font-semibold text-foreground">
                  NLP and retrieval systems
                </strong>{" "}
                for a live research organisation. Most of what I know came from
                writing the pieces by hand rather than importing them —
                tokenizers, attention heads, transformer blocks.
              </p>
              <p>
                That habit started with a simple frustration: I could call a
                model, but I couldn&rsquo;t say what happened between the text
                going in and the answer coming out. So I built a{" "}
                <strong className="font-semibold text-foreground">
                  GPT from scratch
                </strong>{" "}
                to find out, and used it to validate a{" "}
                <strong className="font-semibold text-foreground">
                  local RAG pipeline
                </strong>{" "}
                end to end.
              </p>
              <p>
                The other half of the work is making sure it reaches someone. A
                frozen transaction instead of a frozen account; a complaint that
                lands on the right desk. I&rsquo;m currently exploring{" "}
                <strong className="font-semibold text-foreground">
                  agent architectures and multi-agent systems
                </strong>
                , and I&rsquo;m open to internships and research collaboration.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
