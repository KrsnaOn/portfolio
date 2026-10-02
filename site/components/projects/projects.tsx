import {
  ArrowRight,
  ArrowUpRight,
  Binary,
  BookOpen,
  Database,
  Landmark,
  Layers,
  ShieldCheck,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";
import { TiltedCard } from "@/components/ui/tilted-card";

/**
 * Card visuals are diagrams of how each project actually works, drawn for this
 * site. Swap any of them for a real screenshot when you have one.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  href: string;
  hrefLabel: string;
};

const RATIO = 1024 / 640;

const PROJECTS: Project[] = [
  {
    id: "siri-llm",
    icon: Binary,
    iconLabel: "Siri-LLM",
    title:
      "A GPT built from first principles, one block at a time — tokenizer, embeddings, attention, and all.",
    description:
      "Raw text in, next-token prediction out, with every stage written by hand instead of imported: a BPE tokenizer that learns its own vocabulary, token and positional embeddings, multi-head self-attention, and transformer blocks with residual connections and layer normalisation.",
    meta: "Python · PyTorch · NumPy · Hugging Face Tokenizers",
    imageRatio: RATIO,
    image: "/projects/siri-llm.webp",
    imageAlt:
      "Diagram of the Siri-LLM pipeline: BPE tokens, embeddings, a masked attention matrix, and the predicted next token",
    href: "https://github.com/KrsnaOn/Siri-LLM",
    hrefLabel: "Repository",
  },
  {
    id: "deal-id",
    icon: ShieldCheck,
    iconLabel: "Deal-ID Layer",
    title: "Freeze the disputed transaction, not the whole account.",
    description:
      "When one payment is disputed in India today, the entire account locks — and the rent sitting beside it locks too. Deal-ID gives every payment a cryptographically sealed identity so only that payment can be held, with separate payer, payee and reviewer portals and a five-signal risk score. Built for the DCGC 2.0 Hack Sprint.",
    meta: "Vanilla JS · Web Crypto · Firebase · Gemini API",
    imageRatio: RATIO,
    image: "/projects/deal-id.webp",
    imageAlt:
      "Diagram of an account ledger with a single transaction held while the others stay settled, beside a five-signal risk score",
    href: "https://dead-id.web.app",
    hrefLabel: "Live demo",
  },
  {
    id: "sahi-jagah",
    icon: Landmark,
    iconLabel: "Sahi Jagah",
    title: "Complaints that reach the right desk — and don't die there.",
    description:
      "Filing a central grievance means picking from roughly ninety ministries without knowing which owns your problem. Sahi Jagah routes free text with a confidence score, flags issues that belong to a state authority first, drafts in the citizen's language and formal English, and pre-writes the appeal when the 21-day SLA lapses. About 26KB, so it loads on 3G.",
    meta: "Vanilla JS · Vercel serverless · OpenAI API",
    imageRatio: RATIO,
    image: "/projects/sahi-jagah.webp",
    imageAlt:
      "Diagram showing a free-text complaint routed to ranked ministries with confidence scores and a 21-day appeal timeline",
    href: "https://sahi-jagah-t8k9.vercel.app",
    hrefLabel: "Live demo",
  },
  {
    id: "local-rag",
    icon: Layers,
    iconLabel: "Local RAG system",
    title: "Retrieval-augmented generation that never leaves the machine.",
    description:
      "Llama 3 and 3.2 through Ollama, FAISS vector search over all-MiniLM-L6-v2 embeddings, shipped as a modular iSignalRAG class with live URL ingestion, a terminal chatbot and a notebook walkthrough. The from-scratch GPT came first, and validated retrieval and generation end to end.",
    meta: "iSignal Research · ongoing",
    imageRatio: RATIO,
    image: "/projects/local-rag.webp",
    imageAlt:
      "Diagram of a local RAG pipeline: URL ingest, FAISS vector search over embeddings, and generation through Ollama",
    href: "https://github.com/KrsnaOn",
    hrefLabel: "GitHub",
  },
  {
    id: "corpus-builder",
    icon: Database,
    iconLabel: "LLM corpus builder",
    title: "Training data is the quiet half of a language model.",
    description:
      "A four-stage pipeline — Scrapy crawl, trafilatura extraction, MinHash near-duplicate removal, FAISS indexing — covered by 43 passing tests, because deduplication bugs stay invisible until the model has already learned them.",
    meta: "iSignal Research",
    imageRatio: RATIO,
    image: "/projects/corpus-builder.webp",
    imageAlt:
      "Four-stage corpus pipeline diagram: crawl, extract, deduplicate, index, with a row of 43 passing tests",
    href: "https://github.com/KrsnaOn",
    hrefLabel: "GitHub",
  },
  {
    id: "nlp-teaching",
    icon: BookOpen,
    iconLabel: "NLP teaching material",
    title: "Written so that someone else can follow the maths.",
    description:
      "A transformer-block deep dive covering layer normalisation, GELU activations and residual connections around a from-scratch MiniGPT; a walkthrough running from BPE tokenisation to multi-head self-attention; and a custom tokenizer trained on 5G and telecom vocabulary with the embedding pipeline visualised.",
    meta: "iSignal Research",
    imageRatio: RATIO,
    image: "/projects/nlp-teaching.webp",
    imageAlt:
      "A notebook of transformer internals beside cards for a BPE walkthrough, a 5G tokenizer, and a self-attention deck",
    href: "https://github.com/KrsnaOn",
    hrefLabel: "GitHub",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="text-foreground font-serif text-[2.5rem] leading-[1.05] font-medium tracking-tight md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="text-foreground/65 max-w-[33ch] text-[18px] leading-[1.45] tracking-tight sm:text-[20px]">
              Models taken apart to understand them, and tools shipped so other
              people can use them.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border-foreground/8 focus-ring group bg-background text-foreground hover:bg-foreground/5 inline-flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring block rounded-3xl"
        aria-label={`${project.iconLabel} — ${project.hrefLabel}`}
      >
        <article className="project-card border-foreground/8 bg-background flex cursor-pointer flex-col gap-4 rounded-3xl border p-3 sm:p-3.5">
          <header className="flex items-center gap-2.5 px-1 pt-2">
            <span className="border-foreground/10 bg-background inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border">
              <Icon
                className="text-foreground h-3.5 w-3.5"
                aria-hidden="true"
              />
            </span>
            <span className="text-foreground text-sm font-medium tracking-tight">
              {project.iconLabel}
            </span>
            <span className="text-foreground/50 ml-auto inline-flex items-center gap-1 pr-1 text-[12px] tracking-tight">
              {project.hrefLabel}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </header>

          <div
            className="relative w-full"
            style={{ aspectRatio: project.imageRatio }}
          >
            <TiltedCard
              imageSrc={project.image}
              altText={project.imageAlt}
              captionText={project.hrefLabel}
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={8}
              scaleOnHover={1.03}
              showMobileWarning={false}
              showTooltip
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              priority={index < 2}
              imageClassName="bg-foreground/5 ring-1 ring-foreground/5"
            />
          </div>

          <div className="flex flex-col gap-2.5 px-1 pb-1">
            <h3 className="text-foreground text-[20px] leading-[1.2] font-medium tracking-tight sm:text-[22px]">
              {project.title}
            </h3>
            <p className="text-foreground/65 text-[14px] leading-normal tracking-tight sm:text-[15px]">
              {project.description}
            </p>
          </div>

          <p className="text-foreground/50 px-1 pb-2 text-[12px] tracking-tight">
            {project.meta}
          </p>
        </article>
      </Link>
    </FadeIn>
  );
}
