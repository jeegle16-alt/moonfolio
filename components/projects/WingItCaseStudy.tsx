"use client";

import Link from "next/link";
import { useLocale } from "@/components/providers/LocaleProvider";

const copy = {
  kr: {
    back: "프로젝트 목록으로",
    eyebrow: "Product Project",
    title: "WingIt",
    subtitle: "즉흥적인 만남을 더 쉽게 연결하는 소셜 플래닝 서비스",
    meta: ["개인 프로젝트", "역할: Full-Stack Developer", "연도: 2024"],
    projectSummaryDescription: "이 프로젝트의 문제 배경과 해결 방식, 핵심 아이디어를 간단히 정리했습니다.",
    whyTitle: "Why We Need",
    whyBody:
      "약속을 잡는 과정은 생각보다 번거롭고 느립니다. WingIt은 관심은 있지만 조율이 귀찮아서 무산되는 만남의 순간을 더 가볍게 연결하는 데서 출발했습니다.",
    approachTitle: "Our Approach",
    approachBody:
      "사용자가 가용 시간과 현재 상태를 빠르게 공유하고, 주변 사람들과 즉시 연결될 수 있도록 서비스 흐름을 단순하게 설계했습니다.",
    architectureDescription: "전체 서비스를 구성하는 구조를 정리하는 자리입니다. 세부 내용은 이후 업데이트할 예정입니다.",
    keyFeaturesDescription: "핵심 기능을 정리하는 자리입니다. 실제 기능 흐름과 화면은 이후 채워 넣을 예정입니다.",
    learnedDescription: "프로젝트를 통해 배운 점을 정리하는 자리입니다. 실제 회고 내용은 이후 업데이트할 예정입니다.",
  },
  en: {
    back: "Back to projects",
    eyebrow: "Product Project",
    title: "WingIt",
    subtitle: "A social planning service designed to make spontaneous meetups easier.",
    meta: ["Solo Project", "Role: Full-Stack Developer", "Year: 2024"],
    projectSummaryDescription: "A quick overview of the problem, the approach, and the core idea behind the product.",
    whyTitle: "Why We Need",
    whyBody:
      "Planning a meetup often takes more effort than it should. WingIt started from the idea that many plans fall through not because people are uninterested, but because coordinating them feels slow and inconvenient.",
    approachTitle: "Our Approach",
    approachBody:
      "The service is designed to help users share availability quickly and connect with nearby people without adding extra planning friction.",
    architectureDescription: "This section will summarize how the overall service is structured. Detailed content will be added later.",
    keyFeaturesDescription: "This section is reserved for the core product features. Specific flows and screens will be added later.",
    learnedDescription: "This section is reserved for project reflections and learnings. The full write-up will be added later.",
  },
} as const;

function SectionTitle({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-4">
      <h2 className="text-[2.3rem] font-semibold tracking-tight text-zinc-950 sm:text-[2.85rem]">
        {title}
      </h2>
      <p className="max-w-5xl text-[1.08rem] leading-8 text-zinc-950 sm:text-xl">{description}</p>
    </div>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return <div className="rounded-3xl border-2 border-zinc-950 bg-[#f7efe2] p-7 sm:p-8">{children}</div>;
}

export default function WingItCaseStudy() {
  const { locale } = useLocale();
  const isKr = locale === "kr";
  const text = isKr ? copy.kr : copy.en;

  return (
    <main
      lang={isKr ? "ko" : "en"}
      className="bg-[#F3EBDD] text-zinc-950"
      style={{ fontFamily: "var(--font-space-grotesk), var(--font-orbit), sans-serif" }}
    >
      <div className="mx-auto flex max-w-[88rem] flex-col gap-24 px-6 pb-24 pt-32 sm:px-10 lg:px-12">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 transition-colors hover:text-amber-700">
          <span aria-hidden="true">&larr;</span>
          {text.back}
        </Link>

        <section className="space-y-14">
          <div className="grid gap-12 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-start">
            <div className="space-y-8">
              <p className="font-en text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">{text.eyebrow}</p>
              <h1 className="mt-5 max-w-5xl text-[clamp(3rem,8vw,6.6rem)] font-normal leading-none tracking-tight text-zinc-950">{text.title}</h1>
              <p className="break-keep max-w-2xl text-[clamp(1.05rem,1.7vw,1.7rem)] font-medium leading-[1.45] text-zinc-950">{text.subtitle}</p>
              <div className="flex flex-wrap gap-3 text-sm text-zinc-950">
                {text.meta.map((item) => (
                  <span key={item} className="rounded-full border-2 border-zinc-950 bg-[#f8f1e6] px-4 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-14">
          <SectionTitle title="Project Summary" description={text.projectSummaryDescription} />
          <div className="space-y-16">
            <div className="space-y-8 pt-6">
              <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">{text.whyTitle}</p>
              <Panel>
                <p className="break-keep text-[1.02rem] leading-8 text-zinc-950 sm:text-[1.12rem]">{text.whyBody}</p>
              </Panel>
            </div>
            <div className="space-y-8">
              <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">{text.approachTitle}</p>
              <Panel>
                <p className="break-keep text-[1.02rem] leading-8 text-zinc-950 sm:text-[1.12rem]">{text.approachBody}</p>
              </Panel>
            </div>
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-8">
          <SectionTitle title="System Architecture" description={text.architectureDescription} />
          <Panel>
            <div className="flex min-h-[16rem] items-center justify-center rounded-2xl border border-dashed border-[#b8b1a3] bg-[#efe7d9] px-6 text-center text-[1.02rem] text-[#6b5f52] sm:text-[1.12rem]">
              {isKr ? "System Architecture placeholder" : "System Architecture placeholder"}
            </div>
          </Panel>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-8">
          <SectionTitle title="Key Features" description={text.keyFeaturesDescription} />
          <div className="grid gap-6 lg:grid-cols-2">
            {[1, 2, 3, 4].map((feature) => (
              <Panel key={feature}>
                <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">
                  {isKr ? `Feature 0${feature}` : `Feature 0${feature}`}
                </p>
                <div className="mt-4 flex min-h-[10rem] items-center justify-center rounded-2xl border border-dashed border-[#b8b1a3] bg-[#efe7d9] px-6 text-center text-[1.02rem] text-[#6b5f52] sm:text-[1.12rem]">
                  {isKr ? "내용 placeholder" : "Content placeholder"}
                </div>
              </Panel>
            ))}
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-8">
          <SectionTitle title="What I Learned" description={text.learnedDescription} />
          <div className="grid gap-6 lg:grid-cols-2">
            <Panel>
              <div className="flex min-h-[12rem] items-center justify-center rounded-2xl border border-dashed border-[#b8b1a3] bg-[#efe7d9] px-6 text-center text-[1.02rem] text-[#6b5f52] sm:text-[1.12rem]">
                {isKr ? "What I Learned placeholder" : "What I Learned placeholder"}
              </div>
            </Panel>
            <Panel>
              <div className="flex min-h-[12rem] items-center justify-center rounded-2xl border border-dashed border-[#b8b1a3] bg-[#efe7d9] px-6 text-center text-[1.02rem] text-[#6b5f52] sm:text-[1.12rem]">
                {isKr ? "What I Learned placeholder" : "What I Learned placeholder"}
              </div>
            </Panel>
          </div>
        </section>
      </div>
    </main>
  );
}
