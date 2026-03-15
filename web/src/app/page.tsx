import type { SVGProps } from "react";

type Feature = {
  title: string;
  description: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  accent: "red" | "green" | "blue";
};

function SparklesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z" />
    </svg>
  );
}

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M5 12H19" />
      <path d="M12 5L19 12L12 19" />
    </svg>
  );
}

function CircleDotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AudioIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M6 14H4M10 18H8M6 10H4M20 14H18M16 18H14M20 10H18" />
      <path d="M12 5V19" />
    </svg>
  );
}

function ScanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M4 8V5H7M20 8V5H17M4 16V19H7M20 16V19H17" />
      <rect x="8" y="8" width="8" height="8" rx="1.5" />
    </svg>
  );
}

function CursorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M6 3L16.5 13.5L11 14.5L9.5 20L6 3Z" />
    </svg>
  );
}

function StackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M5 7.5L12 4L19 7.5L12 11L5 7.5Z" />
      <path d="M5 12L12 15.5L19 12" />
      <path d="M5 16.5L12 20L19 16.5" />
    </svg>
  );
}

function CompassIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M15.5 8.5L13.6 13.6L8.5 15.5L10.4 10.4L15.5 8.5Z" />
    </svg>
  );
}

function RadarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 12L18 7" />
    </svg>
  );
}

function BotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="5" y="7" width="14" height="11" rx="2" />
      <path d="M12 4V7M9 12H9.01M15 12H15.01" />
    </svg>
  );
}

function VideoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3" y="6" width="14" height="12" rx="2" />
      <path d="M17 10L21 8V16L17 14V10Z" />
    </svg>
  );
}

function MessageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M5 6H19V15H8L5 18V6Z" />
      <path d="M8 10H16M8 13H13" />
    </svg>
  );
}

const workflowSteps = [
  "Add your website URL",
  "Upload docs, videos, and FAQs",
  "Tune behavior with your system prompt",
  "Embed Flowra in your product",
  "Users get live voice + visual guidance",
];

const capabilities: Feature[] = [
  {
    title: "Live voice help",
    description: "Real-time spoken guidance layered directly on your product.",
    icon: AudioIcon,
    accent: "green",
  },
  {
    title: "UI understanding",
    description: "Flowra reads layouts and product states to guide with precision.",
    icon: ScanIcon,
    accent: "blue",
  },
  {
    title: "AI cursor guidance",
    description: "A second cursor visually demonstrates exactly where to click.",
    icon: CursorIcon,
    accent: "red",
  },
  {
    title: "Multimodal training",
    description: "Train with docs, videos, FAQs, and sitemap context in one place.",
    icon: StackIcon,
    accent: "green",
  },
  {
    title: "Embeddable agent",
    description: "Drop into any web app with a lightweight script and config.",
    icon: CompassIcon,
    accent: "blue",
  },
  {
    title: "Session visibility",
    description: "Review guidance sessions to improve onboarding and support flows.",
    icon: RadarIcon,
    accent: "red",
  },
];

const accentClass = {
  red: "bg-red-500/10 text-red-600",
  green: "bg-green-500/10 text-green-600",
  blue: "bg-blue-500/10 text-blue-600",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">
      <SparklesIcon className="h-3.5 w-3.5 text-red-500" />
      {children}
    </p>
  );
}

function HeroMockup() {
  return (
    <div className="relative rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_16px_50px_rgba(0,0,0,0.08)]">
      <div className="mb-4 flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
          your-product.com/dashboard
        </div>
        <div className="rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-600">
          Flowra Live
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-4">
          <div className="mb-3 h-6 w-32 rounded-md bg-zinc-100" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-24 rounded-lg border border-zinc-200 bg-zinc-50" />
            <div className="h-24 rounded-lg border border-zinc-200 bg-zinc-50" />
            <div className="h-24 rounded-lg border border-zinc-200 bg-zinc-50" />
            <div className="h-24 rounded-lg border border-zinc-200 bg-zinc-50" />
          </div>

          <div className="pointer-events-none absolute left-[14%] top-[58%] h-5 w-5 rounded-full border-2 border-black bg-white" />
          <div className="pointer-events-none absolute left-[46%] top-[34%] h-6 w-6 rounded-full border-2 border-red-500 bg-white shadow-[0_0_0_6px_rgba(239,68,68,0.16)]" />
          <svg
            className="pointer-events-none absolute left-[18%] top-[50%] h-16 w-44 text-red-500"
            viewBox="0 0 180 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 62C38 55 66 39 89 26C107 16 129 8 175 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="5 7"
            />
          </svg>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-900">
              <BotIcon className="h-4 w-4 text-green-600" />
              Voice Assistant
            </div>
            <p className="text-sm text-zinc-600">
              &quot;Click Insights, then choose Weekly Breakdown.&quot;
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4">
            <div className="mb-2 text-xs uppercase tracking-[0.14em] text-zinc-500">
              Highlighted step
            </div>
            <p className="text-sm text-zinc-700">
              Flowra draws user attention to the exact control before they ask
              again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardShell() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
      <div className="mb-5 flex flex-col gap-3 border-b border-zinc-200 pb-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900">Flowra Console</h3>
          <p className="text-sm text-zinc-500">
            Configure your AI guidance layer in minutes.
          </p>
        </div>
        <button className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white">
          Publish Agent
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4">
          <div className="rounded-xl border border-zinc-200 p-4">
            <p className="mb-2 text-sm font-medium text-zinc-800">Website URL</p>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-600">
              https://app.acme.com
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <p className="mb-3 text-sm font-medium text-zinc-800">
              Training Assets
            </p>
            <div className="grid gap-2 text-sm text-zinc-600 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
                <StackIcon className="h-4 w-4 text-zinc-500" />
                Docs
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
                <VideoIcon className="h-4 w-4 text-zinc-500" />
                Videos
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
                <MessageIcon className="h-4 w-4 text-zinc-500" />
                FAQs
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <p className="mb-2 text-sm font-medium text-zinc-800">System Prompt</p>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-sm leading-relaxed text-zinc-600">
              Guide users in concise steps. Prefer visual cues before long
              explanations. Escalate to support when confidence is low.
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="mb-2 text-sm font-medium text-zinc-800">Agent Preview</p>
            <div className="relative overflow-hidden rounded-lg border border-zinc-200 bg-white p-3">
              <div className="h-24 rounded-md bg-zinc-100" />
              <div className="absolute right-5 top-5 h-4 w-4 rounded-full border-2 border-green-500 bg-white shadow-[0_0_0_6px_rgba(34,197,94,0.14)]" />
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <p className="mb-2 text-sm font-medium text-zinc-800">Embed Script</p>
            <div className="rounded-lg bg-zinc-900 p-3 text-xs leading-relaxed text-zinc-100">
              {`<script src="https://cdn.flowra.ai/widget.js" data-agent="prod_48f9" />`}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <p className="mb-2 text-sm font-medium text-zinc-800">
              Session Recordings
            </p>
            <div className="space-y-2 text-sm text-zinc-600">
              <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
                <span>Checkout onboarding</span>
                <span className="text-xs text-zinc-500">12m ago</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
                <span>Billing upgrade flow</span>
                <span className="text-xs text-zinc-500">42m ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--flowra-bg)] text-zinc-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(circle_at_14%_16%,rgba(239,68,68,0.08),transparent_42%),radial-gradient(circle_at_88%_10%,rgba(34,197,94,0.08),transparent_32%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-8 sm:px-10 lg:px-12 lg:pt-10">
        <header className="mb-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
            <CircleDotIcon className="h-5 w-5 text-red-500" />
            Flowra
          </div>
          <button className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50">
            Book Demo
          </button>
        </header>

        <section className="grid items-center gap-12 pb-24 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <SectionLabel>AI Website Copilot</SectionLabel>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-zinc-950 sm:text-5xl lg:text-6xl">
              Guide every user through your product with live AI precision.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
              Flowra is an intelligent interface layer that sees your UI,
              answers questions, and visually guides people with its own
              cursor, voice, and contextual steps.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white">
                Start Building
                <ArrowRightIcon className="h-4 w-4" />
              </button>
              <button className="rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-700">
                Watch Product Tour
              </button>
            </div>
          </div>

          <HeroMockup />
        </section>

        <section className="py-14">
          <SectionLabel>How It Works</SectionLabel>
          <div className="grid gap-3 md:grid-cols-5">
            {workflowSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-xl border border-zinc-200 bg-white p-4"
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
                  Step {index + 1}
                </p>
                <p className="text-sm leading-6 text-zinc-700">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14">
          <SectionLabel>Capabilities</SectionLabel>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-zinc-200 bg-white p-5"
              >
                <span
                  className={`mb-4 inline-flex rounded-md p-2 ${
                    accentClass[feature.accent]
                  }`}
                >
                  <feature.icon className="h-4 w-4" />
                </span>
                <h3 className="text-base font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-14">
          <SectionLabel>Live Guidance Demo</SectionLabel>
          <div className="grid gap-8 rounded-2xl border border-zinc-200 bg-white p-5 md:p-7 lg:grid-cols-[1.3fr_0.7fr]">
            <HeroMockup />
            <div className="flex flex-col justify-center gap-4">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-sm font-medium text-zinc-800">
                  Dual-cursor clarity
                </p>
                <p className="mt-1 text-sm leading-6 text-zinc-600">
                  Users keep their own pointer while Flowra demonstrates the
                  next best action with an AI cursor trail.
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-sm font-medium text-zinc-800">
                  Voice + visual sync
                </p>
                <p className="mt-1 text-sm leading-6 text-zinc-600">
                  Spoken guidance and on-screen highlights align in real time,
                  reducing support tickets and onboarding friction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <SectionLabel>Dashboard Shell</SectionLabel>
          <DashboardShell />
        </section>
      </div>
    </main>
  );
}
