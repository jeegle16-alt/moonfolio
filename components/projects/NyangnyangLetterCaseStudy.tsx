"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/components/providers/LocaleProvider";

type SummaryImage = {
  src: string;
  alt: string;
} | null;

const techStackGroups = [
  {
    title: "ML Pipeline",
    items: [
      "Python",
      "SageMaker Training Job",
      "EKS CronJob",
      "EventBridge",
      "Lambda",
      "S3",
    ],
  },
  {
    title: "BGM Pipeline",
    items: ["SageMaker Processing Job", "S3"],
  },
  {
    title: "Critical Agent",
    items: ["Lambda", "Athena", "DynamoDB", "Amazon Bedrock"],
  },
  {
    title: "Audio Guardrail",
    items: ["AWS Transcribe", "S3"],
  },
] as const;

const copy = {
  kr: {
    back: "프로젝트 목록으로",
    eyebrow: "AI/ML Project",
    title: "냥냥편지",
    subtitle: "스마트폰 행동 데이터 기반 정신 건강 모니터링 서비스",
    meta: ["팀: AMEOWZON", "팀원: 5명", "역할: ML ENGINEER"],
    techSkills: "Tech Skills",
    projectSummary: {
      title: "Project Summary",
      description:
        "이 프로젝트의 문제 배경과 해결 방식, 핵심 아이디어를 간단히 정리했습니다.",
      needTitle: "Why We Need",
      needCards: [
        {
          stat: "48.9%",
          body: "1인 가구가 평소 외로움을 느낀다고 응답",
          source: "2024 국가데이터처",
        },
        {
          stat: "17.2%",
          body: "15년 장기 추적 연구에서 사회적 고립이 조기 사망 위험과 직접 연결됨을 확인",
          source: "질병관리청 · 국립보건연구원, 224만명 대상",
        },
      ],
      needConclusion:
        "사회적 고립은 단순한 감정 문제가 아니라, 조기 사망 위험 증가와 연결된 건강 위험 요인",
      existsTitle: "What Exists Today",
      existsCards: [
        {
          title: "기본 건강 앱",
          src: "/images/existing-app.png",
          alt: "기본 건강 앱 예시",
          summary: "감정 기록과 체크인을 중심으로 동작하는 서비스",
          limit: "감정 상태를 직접 입력해야 함",
        },
        {
          title: "스마트워치",
          src: "/images/existing-watch.png",
          alt: "스마트워치 예시",
          summary: "웨어러블 센서로 건강 상태를 추적하는 방식",
          limit: "별도 기기 필요 / 보급률 33%",
        },
        {
          title: "중국 앱: 죽었니?",
          src: "/images/existing-checkin.png",
          alt: "체크인 서비스 예시",
          summary: "현재 중국 앱스토어 상위권의 안부 확인형 서비스",
          limit: "Check-in 버튼을 당사자가 직접 눌러야 함",
        },
      ],
      existsConclusion:
        "BUT 현존하는 서비스는 당사자가 스스로 인지해야만 작동하는 구조",
      approachTitle: "Our Approach",
      approachBlocks: [
        {
          num: "01",
          title: "행동 데이터 수집",
          body: "화면 켜짐·꺼짐, 앱 사용, 이동 패턴, 알림 반응 등의 스마트폰 사용 로그를 수집하고 일별 단위로 정리해 상태 변화의 간접 신호로 사용",
        },
        {
          num: "02",
          title: "상태 변화 해석",
          body: "개인 베이스라인과 이상탐지 모델을 기반으로 일상 패턴의 변화를 해석하고 상태를 판정",
        },
        {
          num: "03",
          title: "관계 기반 연결",
          body: "앱 상태 표시, BGM, 친구 알림, Critical 에이전트 등 다양한 방식으로 서로의 상태를 자연스럽게 공유",
        },
      ],
    },
    contributionsTitle: "My Contributions",
    contributionsDescription:
      "모델 추론 자체뿐 아니라, 그 결과가 사용자 경험과 안전 장치로 이어지는 운영 파이프라인 전체를 맡았습니다.",
    contributions: [
      "ML 상태 변화 감지 파이프라인: Feature Engineering -> MODEL -> DECODER",
      "냐옹 소리 오디오 가드레일: VAD -> Transcribe -> Gemini Flash",
      "Seed-VC 개인화 BGM 생성 파이프라인",
      "Critical 에이전트 awake_probability Lambda",
    ],
    architectureTitle: "System Architecture",
    architectureDescription:
      "주요 데이터 흐름과 내가 구현한 파트를 중심으로 전체 구조를 요약했습니다.",
    deepDiveTitle: "Technical Deep Dive",
    deepDiveDescription:
      "운영 환경을 전제로 설계한 핵심 모듈 4개를 기준으로 기술 의사결정을 정리했습니다.",
    challengesTitle: "Challenges / Troubleshooting",
    challenges: [
      {
        title: "Transcribe Streaming 504 타임아웃",
        cause: "응답 시간 > ALB 타임아웃(60초)",
        solution: "S3 업로드 후 비동기 Transcribe Job으로 전환",
        principle: "외부 AI 서비스는 가변 지연을 전제로 설계",
      },
      {
        title: "학습/추론 피처 불일치",
        cause: "학습 시점과 추론 시점의 컬럼 스키마 불일치",
        solution: "각 모듈을 Stateless로 설계하고 공통 파이프라인 공유",
        principle: "학습과 추론은 같은 모듈을 공유해야 함",
      },
      {
        title: "콜드스타트 data leakage",
        cause: "당일 데이터를 베이스라인 계산에 포함",
        solution: "shift(1) 기준 rolling window 적용",
        principle: "운영 환경에서 미래 정보 누출은 신뢰성 붕괴로 이어짐",
      },
    ],
    retrospectiveTitle: "Retrospective",
    retrospective: [
      "PHQ-8 라벨이 18%밖에 없다는 사실을 확인한 뒤 지도 학습이 아니라 비지도 학습으로 방향을 전환했습니다.",
      "설명 가능성을 우선시해 Isolation Forest 하나로 끝내지 않고 규칙 기반 디코더를 별도로 설계했습니다.",
      "콜드스타트, fallback, 품질 게이트를 처음 설계부터 포함하면서 운영 환경 기준으로 시스템을 바라보게 되었습니다.",
    ],
  },
  en: {
    back: "Back to projects",
    eyebrow: "AI/ML Project",
    title: "Nyang Nyang Mate",
    subtitle:
      "A mental health monitoring service based on smartphone behavior data.",
    meta: ["Team: AMEOWZON", "Team Members: 5", "Role: ML ENGINEER"],
    techSkills: "Tech Skills",
    projectSummary: {
      title: "Project Summary",
      description:
        "A quick look at why this service matters, where current options stop, and what we are proposing instead.",
      needTitle: "Why We Need",
      needCards: [
        {
          stat: "48.9%",
          body: "Single-person households reported that they often feel lonely",
          source: "2024 National Data Portal",
        },
        {
          stat: "17.2%",
          body: "A 15-year longitudinal study found a direct link between social isolation and early mortality risk",
          source: "Korea Disease Control and Prevention Agency · National Institute of Health",
        },
      ],
      needConclusion:
        "Social isolation is not just an emotional issue. It is a real health risk tied to early mortality.",
      existsTitle: "What Exists Today",
      existsCards: [
        {
          title: "Basic health apps",
          src: "/images/existing-app.png",
          alt: "Basic health app example",
          summary: "A service built around mood logging and check-ins",
          limit: "The user has to enter their emotional state directly",
        },
        {
          title: "Smartwatches",
          src: "/images/existing-watch.png",
          alt: "Smartwatch example",
          summary: "A wearable-based approach to tracking health status",
          limit: "A separate device is still required / 33% adoption rate",
        },
        {
          title: "Chinese app: Jugeossni?",
          src: "/images/existing-checkin.png",
          alt: "Check-in service example",
          summary: "A leading Chinese app built around safety check-ins",
          limit: "The user still has to press the check-in button",
        },
      ],
      existsConclusion:
        "But most existing services still work only when the user notices the problem first and takes action.",
      approachTitle: "Our Approach",
      approachBlocks: [
        {
          num: "01",
          title: "Behavior Data Collection",
          body: "Collect smartphone logs such as screen activity, app use, movement patterns, and notification response, then organize them daily as indirect signals of state change.",
        },
        {
          num: "02",
          title: "State Interpretation",
          body: "Interpret changes in daily patterns based on each person's baseline and the anomaly detection model.",
        },
        {
          num: "03",
          title: "Relationship-Based Connection",
          body: "Share those changes naturally through app status, BGM, friend alerts, and the critical agent.",
        },
      ],
    },
    contributionsTitle: "My Contributions",
    contributionsDescription:
      "My scope covered not only model inference but also the production pipelines that connect model output to user-facing care features.",
    contributions: [
      "ML state-change detection pipeline: Feature Engineering -> MODEL -> DECODER",
      "Meow audio guardrail: VAD -> Transcribe -> Gemini Flash",
      "Seed-VC personalized BGM generation pipeline",
      "Critical agent awake_probability Lambda",
    ],
    architectureTitle: "System Architecture",
    architectureDescription:
      "A high-level summary of the end-to-end flow and the parts I implemented.",
    deepDiveTitle: "Technical Deep Dive",
    deepDiveDescription:
      "Four production-oriented modules that shaped the final system.",
    challengesTitle: "Challenges / Troubleshooting",
    challenges: [
      {
        title: "Transcribe Streaming 504 timeout",
        cause: "Response time exceeded the 60-second ALB timeout",
        solution: "Moved to asynchronous Transcribe Job after S3 upload",
        principle: "Design external AI services assuming variable latency",
      },
      {
        title: "Feature mismatch between train and inference",
        cause: "Column schema drift between training and inference",
        solution: "Shared modules and stateless execution",
        principle: "Training and inference should share the same pipeline",
      },
      {
        title: "Cold-start data leakage",
        cause: "Current-day data leaked into baseline calculation",
        solution: "Applied shift(1)-based rolling windows",
        principle: "Future information leakage breaks trust in production",
      },
    ],
    retrospectiveTitle: "Retrospective",
    retrospective: [
      "Once I confirmed that PHQ-8 labels existed for only 18% of the dataset, I stopped pursuing supervised learning and moved to an unsupervised direction.",
      "Explainability became a design priority, so I added a rule-based decoder on top of Isolation Forest.",
      "Cold start, fallback, and quality gates were included from the first design stage because edge cases fail before ideal cases do.",
    ],
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

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border-2 border-zinc-950 bg-[#f7efe2] p-7 sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

function ImageFallbackSlot({
  src,
  alt,
  fallback,
  className = "",
}: {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center rounded-2xl bg-[#ebe1d0] px-6 text-center text-sm leading-6 text-zinc-500 ${className}`}>
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-contain ${className}`}
      onError={() => setHasError(true)}
    />
  );
}

function VideoFallbackSlot({
  src,
  fallback,
  className = "",
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = false,
  controls = true,
}: {
  src: string;
  fallback: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center rounded-xl bg-[#1a1d27] px-6 text-center text-sm leading-6 text-white/70 ${className}`}>
        {fallback}
      </div>
    );
  }

  return (
    <video
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      className={`rounded-xl bg-[#1a1d27] object-contain ${className}`}
      onError={() => setHasError(true)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default function NyangnyangLetterCaseStudy() {
  const { locale } = useLocale();
  const isKr = locale === "kr";
  const text = isKr ? copy.kr : copy.en;
  const [selectedSummaryImage, setSelectedSummaryImage] = useState<SummaryImage>(null);

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
            <div className="-mt-8 space-y-6 sm:-mt-9">
              <p className="font-en text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">{text.eyebrow}</p>
              <h1 className="mt-3 max-w-5xl text-[clamp(2.7rem,6.6vw,5.6rem)] font-normal leading-none tracking-tight text-zinc-950">{text.title}</h1>
              <p className="break-keep max-w-2xl text-[clamp(1rem,1.55vw,1.5rem)] font-medium leading-[1.55] text-zinc-950">{text.subtitle}</p>
              <div className="flex flex-wrap gap-3 text-sm text-zinc-950">
                {text.meta.map((item) => (
                  <span key={item} className="rounded-full border-2 border-zinc-950 bg-[#f8f1e6] px-4 py-2">
                    {item}
                  </span>
                ))}
                <span className="rounded-full border-2 border-zinc-950 bg-[#f8f1e6] px-4 py-2">
                  {isKr ? "AWS AI School 최종 발표 우수상 수상" : "Excellence Award at AWS AI School Final Presentation"}
                </span>
              </div>
              <div className="pt-1">
                <div className="font-en inline-flex items-center gap-2 text-[1.08rem] font-medium text-zinc-950 sm:text-[1.16rem]">
                  <a
                    href="https://github.com/AMEOWZON-AMZ"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-zinc-950"
                  >
                    🔗 GitHub
                  </a>
                  <span className="text-[#b8a58c]">|</span>
                  <Link
                    href="/projects/nyangnyang-letter/demo"
                    className="transition-colors hover:text-zinc-950"
                  >
                    🎥 Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-zinc-950 sm:text-2xl">{text.techSkills}</p>
              <div className="space-y-6">
                {techStackGroups.map((group) => (
                  <div key={group.title}>
                    <p className="font-en text-sm font-semibold uppercase tracking-[0.14em] text-amber-700">{group.title}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={`${group.title}-${item}`} className="font-en border border-zinc-950 bg-transparent px-3 py-2 text-sm text-[#4f463d]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-14">
          <SectionTitle title={text.projectSummary.title} description={text.projectSummary.description} />
          <div className="space-y-24">
            <div className="space-y-8 pt-6">
              <div>
                <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">{text.projectSummary.needTitle}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {text.projectSummary.needCards.map((card) => (
                  <Panel key={card.stat}>
                    <p className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">{card.stat}</p>
                    <p className="mt-4 text-[1.02rem] leading-8 text-zinc-950 sm:text-[1.12rem]">{card.body}</p>
                    <p className="mt-4 text-sm text-zinc-950">{card.source}</p>
                  </Panel>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">{text.projectSummary.existsTitle}</p>
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                {text.projectSummary.existsCards.map((card) => (
                  <div key={card.title} className="flex h-full flex-col rounded-[1.75rem] border border-[#b8b1a3] bg-[#f7efe2] p-6">
                    <button
                      type="button"
                      onClick={() => setSelectedSummaryImage({ src: card.src, alt: card.alt })}
                      className="flex h-32 items-center justify-center transition-transform duration-300 hover:scale-[1.02]"
                      aria-label={`${card.title} preview`}
                    >
                      <ImageFallbackSlot
                        src={card.src}
                        alt={card.alt}
                        fallback={card.title}
                        className="h-32"
                      />
                    </button>
                    <div className="mt-5 space-y-3">
                      <p className="text-[1.28rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-[1.34rem]">
                        {card.title}
                      </p>
                      <p className="text-[1.02rem] leading-8 text-zinc-950 sm:text-[1.12rem]">
                        {card.summary}
                      </p>
                      <div className="pt-2">
                        <p className="font-en text-[1.08rem] font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.16rem]">
                          {isKr ? "한계" : "Limit"}
                        </p>
                        <p className="mt-1 text-[0.96rem] leading-7 text-amber-700 sm:text-[1.04rem]">
                          {card.limit}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2 text-center">
                <div className="mx-auto mb-6 h-px w-full max-w-xl bg-zinc-950" />
                <p className="break-keep text-3xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl">{text.projectSummary.needConclusion}</p>
                <p className="mt-4 break-keep text-xl font-normal leading-tight tracking-tight text-zinc-950 sm:text-2xl">{text.projectSummary.existsConclusion}</p>
                <p className="mt-7 text-[4.5rem] leading-none text-zinc-950 sm:text-[6rem] [color:transparent] [-webkit-text-stroke:2.2px_#09090b]">&darr;</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">{text.projectSummary.approachTitle}</p>
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                {text.projectSummary.approachBlocks.map((block) => (
                  <div key={block.num} className="space-y-4 border-t-2 border-zinc-950 pt-5">
                    <p className="font-en text-xl font-bold tracking-[0.08em] text-amber-700 sm:text-2xl">{block.num}</p>
                    <p className="text-2xl font-semibold tracking-tight text-zinc-950">{block.title}</p>
                    <p className="break-keep text-[1.02rem] font-normal leading-8 text-zinc-950 sm:text-[1.12rem]">{block.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {selectedSummaryImage ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm" onClick={() => setSelectedSummaryImage(null)} role="dialog" aria-modal="true">
            <button type="button" className="absolute right-6 top-6 rounded-full border border-white/40 px-4 py-2 text-sm text-white" onClick={() => setSelectedSummaryImage(null)}>
              Close
            </button>
            <div className="flex max-h-[82vh] max-w-[min(92vw,920px)] items-center justify-center" onClick={(event) => event.stopPropagation()}>
              <img src={selectedSummaryImage.src} alt={selectedSummaryImage.alt} className="max-h-[82vh] max-w-[min(92vw,920px)] rounded-2xl object-contain" />
            </div>
          </div>
        ) : null}

        <div className="border-t border-zinc-950" />

        <section className="space-y-8">
          <SectionTitle
            title="System Architecture"
            description={
              isKr
                ? "AWS Seoul Region 기반, EKS 멀티 AZ 구성 위에 데이터 수집 · 서비스 처리 · ML 학습이 통합된 구조입니다."
                : "Built on AWS Seoul Region and multi-AZ EKS, the architecture integrates data ingestion, service processing, and ML training."
            }
          />
          <div className="space-y-8">
            <button
              type="button"
              onClick={() =>
                setSelectedSummaryImage({
                  src: "/images/architecture-full.png",
                  alt: isKr ? "전체 아키텍처 다이어그램" : "Full architecture diagram",
                })
              }
              className="mx-auto block w-full max-w-6xl cursor-zoom-in"
            >
              <ImageFallbackSlot
                src="/images/architecture-full.png"
                alt="Full architecture"
                fallback={isKr ? "전체 아키텍처 다이어그램" : "Full architecture diagram"}
                className="aspect-[16/10]"
              />
            </button>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[#d8ccb4] bg-[#f7efe2] px-6 py-6">
                <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">Data Collection</p>
                <p className="mt-2 text-[1.02rem] font-semibold text-zinc-950">Android -&gt; API Gateway -&gt; Firehose -&gt; S3 Bronze/Silver/Gold</p>
                <p className="mt-2 whitespace-pre-line break-keep text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                  {isKr
                    ? "수집과 저장 분리로 클라이언트 부하 절감,\n3단계 정제로 ML 입력 데이터 품질 보장"
                    : "Separating collection and storage reduces client load, and the three-stage refinement process improves ML input quality."}
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-[#d8ccb4] bg-[#f7efe2] px-6 py-6">
                <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">EKS Service Layer</p>
                <p className="mt-2 text-[1.02rem] font-semibold text-zinc-950">ALB -&gt; Ingress -&gt; UserPod / Inference Pod / Critical Agent / Msg Pod</p>
                <p className="mt-2 whitespace-pre-line break-keep text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                  {isKr
                    ? "기능별 Pod 분리로 장애 전파 차단,\nAZ1·AZ2 이중화 + Pod Auto Scaling으로 트래픽 급증 대응"
                    : "Separating pods by function helps contain failures, and AZ1/AZ2 redundancy with pod autoscaling absorbs traffic spikes."}
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-[#d8ccb4] bg-[#f7efe2] px-6 py-6">
                <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">ML Pipeline</p>
                <p className="mt-2 text-[1.02rem] font-semibold text-zinc-950">SageMaker Training(주 1회) -&gt; S3(model) -&gt; EKS CronJob 배치 추론(매일)</p>
                <p className="mt-2 whitespace-pre-line break-keep text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                  {isKr
                    ? "학습과 추론 완전 분리로 재학습 중 서비스 무영향,\nMLflow로 학습 이력 및 재현성 관리"
                    : "Training and inference are fully separated, so retraining does not interrupt the service, and MLflow tracks experiment history and reproducibility."}
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-[#d8ccb4] bg-[#f7efe2] px-6 py-6">
                <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">CI/CD</p>
                <p className="mt-2 text-[1.02rem] font-semibold text-zinc-950">GitHub Actions -&gt; ECR -&gt; EKS</p>
                <p className="mt-2 whitespace-pre-line break-keep text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                  {isKr
                    ? "브랜치 기반 dev/prod 환경 분리,\nRolling Update로 배포 중 다운타임 없음"
                    : "Branch-based dev/prod separation, with rolling updates that avoid deployment downtime."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-8">
          <SectionTitle
            title="My Contributions"
            description={isKr ? "ML Engineer로서 담당한 4개 파트입니다." : "The four parts I owned as the ML Engineer."}
          />
          <div className="space-y-6">
            <Panel className="border-amber-500">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-[2.15rem] font-semibold tracking-tight text-zinc-950">{isKr ? "고양이 상태변화 ML" : "Cat State Change ML"}</p>
                <span className="rounded-full border border-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-700">My Part</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Python", "SageMaker", "EKS CronJob", "EventBridge", "S3"].map((item) => (
                  <span key={item} className="font-en border border-zinc-950 px-3 py-2 text-sm text-zinc-950">{item}</span>
                ))}
              </div>
              <p className="mt-6 font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">
                ML Architecture
              </p>
              <button
                type="button"
                onClick={() => setSelectedSummaryImage({ src: "/images/architecture-ml.png", alt: "ML architecture" })}
                className="mt-4 block w-full cursor-zoom-in"
              >
                <ImageFallbackSlot src="/images/architecture-ml.png" alt="ML architecture" fallback={isKr ? "세부 아키텍처 이미지" : "Detailed architecture image"} className="aspect-[16/9]" />
              </button>
              <p className="mt-6 font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">
                {isKr ? "Daily Status 처리 파이프라인" : "Daily Status Processing Pipeline"}
              </p>
              <div className="mt-6 space-y-8">
                <div className="space-y-4">
                  {(() => {
                    const topRow = [
                      {
                        step: "01",
                        title: "ETL Data",
                        keyword: isKr ? "스마트폰 행동 로그" : "Smartphone behavior logs",
                        pills: [isKr ? "화면 On/Off" : "On/Off", isKr ? "앱 사용" : "App usage", isKr ? "알림/이동/걸음 수" : "Notifications / mobility / steps"],
                        desc: isKr ? "1분 주기로 수집된 사용자 로그를 일별로 수집 및 정제" : "User logs collected at one-minute intervals are gathered and refined on a daily basis.",
                      },
                      {
                        step: "02",
                        title: "Feature Eng.",
                        keyword: isKr ? "56개 피처" : "56 features",
                        pills: [isKr ? "활동량" : "Activity", isKr ? "리듬" : "Rhythm", isKr ? "무활동/세션/이동" : "Inactivity / session / mobility"],
                        desc: isKr ? "행동 변화를 설명할 수 있는 5개 그룹 피처를 일 단위로 집계" : "Five groups of features that explain behavior change are aggregated by day.",
                      },
                      {
                        step: "03",
                        title: "Individual Baseline",
                        keyword: isKr ? "ST 14일 / LT 30일" : "ST 14d / LT 30d",
                        pills: [isKr ? "평일 / 주말 분리" : "Weekday / weekend split"],
                        emphasis: isKr ? "개인 기준선 사용" : "Use Personal Baselines",
                        desc: isKr ? "사용자마다 사용 패턴 분포가 크게 달라, 전역 기준이 아닌 개인별 비교" : "Because usage patterns vary widely by person, the comparison is made against each individual's own baseline rather than a global threshold.",
                      },
                    ] as const;

                    const bottomRow = [
                      {
                        step: "06",
                        title: "Cat State",
                        keyword: isKr ? "7종 상태 분류" : "Seven State Classes",
                        pills: ["STABLE", "CHAOS", "LETHARGY", "SLEEP", "TRAVEL", "NODATA", "CRITICAL"],
                        desc: isKr ? "이상치 점수와 Z-score 점수를 결합하여 고양이 캐릭터 상태로 변환" : "Combines anomaly scores and Z-score signals to convert them into cat character states.",
                      },
                      {
                        step: "05",
                        title: isKr ? "Context 보정" : "Context Adjustment",
                        keyword: isKr ? "과도한 위험도 억제" : "Reduce Overestimated Risk",
                        pills: ["TRAVEL", "PARTIAL", "DELAY"],
                        desc: isKr ? "여행/수집불완전/하루치 스파이크 상황에서 과추정을 방지" : "Prevents overestimation during travel, incomplete collection, and one-day spikes.",
                      },
                      {
                        step: "04",
                        title: isKr ? "이상 탐지" : "Anomaly Detection",
                        keyword: "Z-score",
                        pills: [isKr ? "평균 편차 측정" : "Measure Deviation", "Isolation Forest", "Anomaly Score (0-1)"],
                        emphasis: isKr ? "이상치 정도 정량화" : "Quantify Anomaly Level",
                        desc: isKr ? "오늘의 이상치 정도를 정량화해 위험도를 일관된 스코어로 계산" : "Quantifies today's anomaly level and turns it into a consistent risk score.",
                      },
                    ] as const;

                    const renderCard = (item: typeof topRow[number] | typeof bottomRow[number]) => (
                      <div className="flex h-full min-h-[18rem] flex-col rounded-[1.1rem] border border-[#8c8a5e] bg-[#efe8d8] p-3.5">
                        <p className="font-en text-[1.05rem] font-bold uppercase tracking-[0.12em] text-[#b45309]">{item.step}</p>
                        <p className="font-en mt-1 text-[1.32rem] font-bold leading-tight text-[#465a11]">{item.title}</p>
                        {"emphasis" in item && item.emphasis ? (
                          <p className="mt-1.5 text-[0.98rem] font-semibold leading-6 text-black">{item.emphasis}</p>
                        ) : null}
                        {item.step !== "03" && item.step !== "04" ? (
                          <p className="mt-1 text-[1.04rem] font-semibold leading-6 text-black">{item.keyword}</p>
                        ) : null}
                        {item.step === "03" ? (
                          <div className="mt-5 space-y-1.5">
                            <div className="rounded-full border border-[#8c8a5e] bg-[#f6f1e6] px-3 py-2 text-center text-[0.94rem] font-medium text-black">
                              {item.keyword}
                            </div>
                            <div className="rounded-full border border-[#8c8a5e] bg-[#f6f1e6] px-3 py-2 text-center text-[0.94rem] font-medium text-black">
                              {item.pills[0]}
                            </div>
                          </div>
                        ) : item.step === "06" ? (
                          <div className="mt-2 grid grid-cols-2 gap-1.5">
                            {item.pills.map((pill) => (
                              <div key={pill} className="rounded-full border border-[#8c8a5e] bg-[#f6f1e6] px-2 py-2 text-center text-[0.78rem] font-medium leading-5 text-black">
                                {pill}
                              </div>
                            ))}
                          </div>
                        ) : item.step === "04" ? (
                          <div className="mt-5 space-y-3">
                            <div className="rounded-[1rem] border border-[#8c8a5e] bg-[#f6f1e6] px-3 py-2 text-center">
                              <p className="text-[1rem] font-semibold text-black">Z-score</p>
                              <p className="mt-0.5 text-[0.84rem] text-[#4f463d]">{item.pills[0]}</p>
                            </div>
                            <div className="rounded-[1rem] border border-[#8c8a5e] bg-[#f6f1e6] px-3 py-2 text-center">
                              <p className="text-[1rem] font-semibold text-black">{item.pills[1]}</p>
                              <p className="mt-0.5 text-[0.84rem] text-[#4f463d]">{item.pills[2]}</p>
                            </div>
                          </div>
                        ) : (
                          <div className={`space-y-3 ${item.step === "05" ? "mt-5" : "mt-2"}`}>
                            {item.pills.map((pill) => (
                              <div key={pill} className="rounded-full border border-[#8c8a5e] bg-[#f6f1e6] px-3 py-2 text-center text-[0.94rem] font-medium text-black">
                                {pill}
                              </div>
                            ))}
                          </div>
                        )}
                        <p className="mt-2 text-[0.9rem] leading-6 text-[#4f463d]">{item.desc}</p>
                      </div>
                    );

                    return (
                      <>
                        <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_32px_minmax(0,1fr)_32px_minmax(0,1fr)] md:items-stretch md:gap-3">
                          {topRow.map((item, index) => (
                            <div key={item.step} className="contents">
                              {renderCard(item)}
                              {index < topRow.length - 1 ? (
                                <div className="flex items-center justify-center">
                                  <span className="font-en text-3xl font-bold text-amber-700">→</span>
                                </div>
                              ) : null}
                            </div>
                          ))}
                        </div>
                        <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_32px_minmax(0,1fr)_32px_minmax(0,1fr)] md:items-center md:gap-3">
                          <div className="col-start-5 flex justify-center">
                            <span className="font-en text-4xl font-bold text-amber-700">↓</span>
                          </div>
                        </div>
                        <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_32px_minmax(0,1fr)_32px_minmax(0,1fr)] md:items-stretch md:gap-3">
                          {bottomRow.map((item, index) => (
                            <div key={item.step} className="contents">
                              {renderCard(item)}
                              {index < bottomRow.length - 1 ? (
                                <div className="flex items-center justify-center">
                                  <span className="font-en text-3xl font-bold text-amber-700">←</span>
                                </div>
                              ) : null}
                            </div>
                          ))}
                        </div>
                        <div className="grid gap-4 md:hidden">
                          {[...topRow, ...bottomRow.slice().reverse()].map((item, index, array) => (
                            <div key={`${item.step}-mobile`} className="space-y-3">
                              {renderCard(item)}
                              {index < array.length - 1 ? (
                                <div className="flex justify-center">
                                  <span className="font-en text-3xl font-bold text-amber-700">↓</span>
                                </div>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </div>
                <div className="space-y-2">
                  <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">Cat State</p>
                  <div className="flex justify-center">
                    <VideoFallbackSlot
                      src="/images/cat-states.mp4"
                      fallback={isKr ? "Cat State mp4" : "Cat State mp4"}
                      className="block h-auto max-h-[20rem] w-auto max-w-full"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls={false}
                    />
                  </div>
                </div>
              </div>
            </Panel>

            <Panel className="border-amber-500">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-[2.15rem] font-semibold tracking-tight text-zinc-950">{isKr ? "오디오 가드레일" : "Audio Guardrail"}</p>
                <span className="rounded-full border border-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-700">My Part</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Python", "AWS Transcribe", "Gemini Flash", "S3"].map((item) => (
                  <span key={item} className="font-en border border-zinc-950 px-3 py-2 text-sm text-zinc-950">{item}</span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setSelectedSummaryImage({ src: "/images/architecture-audioguard.png", alt: "Audio architecture" })}
                className="mt-6 mx-auto block w-full max-w-2xl cursor-zoom-in"
              >
                <ImageFallbackSlot src="/images/architecture-audioguard.png" alt="Audio architecture" fallback={isKr ? "세부 아키텍처 이미지" : "Detailed architecture image"} className="aspect-[16/9]" />
              </button>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <div className="md:border-r md:border-[#D4C4B0] md:pr-5">
                  <p className="font-en text-[1.15rem] font-bold uppercase tracking-[0.12em] text-amber-700">01</p>
                  <p className="mt-2 text-[1.18rem] font-semibold text-zinc-950">{isKr ? "입력 검증" : "Input Validation"}</p>
                  <p className="mt-2 whitespace-pre-line break-keep text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                    {isKr
                      ? "업로드된 파일을 16kHz mono로 표준화하고,\nOnset 검출로 발화 시작점을 찾아 최대 4초를 추출합니다.\n무음·클리핑·0.3초 미만은 이 단계에서 차단됩니다."
                      : "The uploaded file is standardized to 16kHz mono.\nOnset detection finds the speech start point and extracts up to four seconds.\nSilence, clipping, and clips shorter than 0.3 seconds are blocked at this stage."}
                  </p>
                </div>
                <div className="md:border-r md:border-[#D4C4B0] md:px-5">
                  <p className="font-en text-[1.15rem] font-bold uppercase tracking-[0.12em] text-amber-700">02</p>
                  <p className="mt-2 text-[1.18rem] font-semibold text-zinc-950">{isKr ? "텍스트 판정" : "Text Decision"}</p>
                  <p className="mt-2 whitespace-pre-line break-keep text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                    {isKr
                      ? "AWS Transcribe로 변환된 텍스트를 3단계로 판정합니다.\n냐옹 패턴이면 즉시 통과, 문장으로 감지되면 즉시 차단하고,\n애매한 경우 Gemini Flash가 최종 판정합니다."
                      : "The transcribed text is evaluated in three steps.\nIf it matches a meow pattern, it passes immediately; if it is detected as a sentence, it is blocked.\nAmbiguous cases are finally judged by Gemini Flash."}
                  </p>
                </div>
                <div className="md:pl-5">
                  <p className="font-en text-[1.15rem] font-bold uppercase tracking-[0.12em] text-amber-700">03</p>
                  <p className="mt-2 text-[1.18rem] font-semibold text-zinc-950">{isKr ? "파일 저장" : "File Storage"}</p>
                  <p className="mt-2 whitespace-pre-line break-keep text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                    {isKr
                      ? "판정을 통과한 파일은 -20dBFS로 볼륨을 정규화하고\n무음을 트리밍한 뒤 S3에 최종 저장합니다."
                      : "Files that pass are normalized to -20dBFS,\ntrimmed for silence, and finally stored in S3."}
                  </p>
                </div>
              </div>
            </Panel>

            <Panel className="border-amber-500">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-[2.15rem] font-semibold tracking-tight text-zinc-950">{isKr ? "개인화 BGM 파이프라인" : "Personalized BGM Pipeline"}</p>
                <span className="rounded-full border border-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-700">My Part</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Python", "SageMaker Processing Job", "Seed-VC", "S3"].map((item) => (
                  <span key={item} className="font-en border border-zinc-950 px-3 py-2 text-sm text-zinc-950">{item}</span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setSelectedSummaryImage({ src: "/images/architecture-bgm.png", alt: "BGM architecture" })}
                className="mt-6 mx-auto block w-full max-w-3xl cursor-zoom-in"
              >
                <ImageFallbackSlot src="/images/architecture-bgm.png" alt="BGM architecture" fallback={isKr ? "세부 아키텍처 이미지" : "Detailed architecture image"} className="aspect-[16/9] rounded-xl" />
              </button>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="md:border-r md:border-[#D4C4B0] md:pr-5">
                  <p className="font-en text-[1.15rem] font-bold uppercase tracking-[0.12em] text-amber-700">01</p>
                  <p className="mt-2 text-[1.18rem] font-semibold text-zinc-950">{isKr ? "BGM 생성" : "BGM Generation"}</p>
                  <p className="mt-2 break-keep text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                    {isKr
                      ? "EventBridge가 매주 일요일 22시에 Orchestrator Lambda를 트리거하면 Worker Lambda가 상태별로 Suno AI에 곡 생성을 요청합니다. 생성된 곡은 Kits AI로 보컬과 반주를 분리해 S3에 저장됩니다."
                      : "When EventBridge triggers the Orchestrator Lambda every Sunday at 22:00, the Worker Lambda requests state-based music generation from Suno AI. The generated tracks are then split into vocals and accompaniment by Kits AI and stored in S3."}
                  </p>
                </div>
                <div className="md:pl-5">
                  <p className="font-en text-[1.15rem] font-bold uppercase tracking-[0.12em] text-amber-700">02</p>
                  <p className="mt-2 text-[1.18rem] font-semibold text-zinc-950">{isKr ? "개인화" : "Personalization"}</p>
                  <p className="mt-2 break-keep text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                    {isKr
                      ? "추론 Pod가 SQS에 메시지를 전송하면 Lambda가 DynamoDB에서 사용자 등록 음성(enroll.wav)을 조회하고 SageMaker Processing Job을 실행합니다. Job 내부에서 Seed-VC가 보컬을 사용자 목소리로 변환하고, 반주와 믹싱한 뒤 S3에 저장해 User API로 URL을 전달합니다."
                      : "When the inference pod sends a message to SQS, Lambda looks up the user's enrolled voice file in DynamoDB and launches a SageMaker Processing Job. Inside the job, Seed-VC converts the vocal into the user's voice, mixes it with the accompaniment, stores the result in S3, and passes the URL back through the User API."}
                  </p>
                </div>
              </div>
            </Panel>

            <Panel className="border-amber-500">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-[2.15rem] font-semibold tracking-tight text-zinc-950">{isKr ? "Critical 에이전트 — 최적 구조자 선정" : "Critical Agent — Optimal Rescuer Selection"}</p>
                <span className="rounded-full border border-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-700">My Part</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Python", "Lambda", "Athena", "DynamoDB", "Amazon Bedrock"].map((item) => (
                  <span key={item} className="font-en border border-zinc-950 px-3 py-2 text-sm text-zinc-950">{item}</span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setSelectedSummaryImage({ src: "/images/architecture-critical.png", alt: "Critical architecture" })}
                className="mt-6 block w-full cursor-zoom-in"
              >
                <ImageFallbackSlot src="/images/architecture-critical.png" alt="Critical architecture" fallback={isKr ? "세부 아키텍처 이미지" : "Detailed architecture image"} className="aspect-[16/9]" />
              </button>
              <div className="mt-6 grid gap-5 md:grid-cols-2 md:items-stretch">
                <div className="flex h-full flex-col text-center md:border-r md:border-[#D4C4B0] md:pr-5">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <p className="mt-6 text-[1.18rem] font-semibold text-zinc-950">
                      {isKr ? "Critical Agent 전체 흐름" : "Critical Agent Flow"}
                    </p>
                  </div>
                  <p className="mx-auto mt-3 max-w-md whitespace-pre-line break-keep text-left text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                    {isKr
                      ? "36시간 이상 로그가 없는 사용자가 감지되면\n친밀도·거리·활동 확률을 종합해 Bedrock이\n알림을 보낼 친구 순위를 결정합니다."
                      : "When a user with no logs for more than 36 hours is detected, Bedrock combines intimacy, distance, and activity probability to decide which friends should receive the alert first."}
                  </p>
                </div>
                <div className="flex h-full flex-col text-center md:pl-5">
                  <div className="flex flex-col items-center">
                    <span className="rounded-full bg-amber-600 px-2 py-0.5 text-xs font-bold text-white">
                      My Part
                    </span>
                    <p className="mt-2 text-[1.18rem] font-semibold text-zinc-950">
                      {isKr ? "활동 확률 계산 Lambda" : "Awake Probability Lambda"}
                    </p>
                  </div>
                  <p className="mx-auto mt-3 max-w-md whitespace-pre-line break-keep text-left text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                    {isKr
                      ? "Critical 발생 시각을 기준으로 Athena에서 최근 7일 동일 시간대 활동 로그를 조회합니다. 평소 해당 시간대에 얼마나 자주 활동했는지를 바탕으로 친구별 awake_prob을 산출하고 Agent에 반환합니다."
                      : "Using the critical timestamp, Athena queries activity logs from the same time window over the last seven days. Based on how often each friend is usually active during that period, it calculates awake_prob for each friend and returns it to the agent."}
                  </p>
                </div>
              </div>
            </Panel>
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-12">
          <h2 className="text-center text-[2.3rem] font-semibold tracking-tight text-zinc-950 sm:text-[2.85rem]">
            What I Learned
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative mt-3 rotate-[1.5deg] rounded-[4px] bg-[#FFFDF7] p-8 shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
              <div className="absolute left-1/2 top-0 h-[18px] w-[60px] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] rounded-[2px] bg-[rgba(251,191,36,0.35)]" />
              <p className="text-[1.7rem] font-bold text-amber-700">01</p>
              <p className="mt-2 mb-3 text-xl font-bold text-[#1a1a1a]">
                {isKr ? "다양한 AI 기술을 서비스 수준으로 통합하기" : "Bringing Different AI Tools into One Service"}
              </p>
              <p className="text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                {isKr
                  ? "음성 변환, 콘텐츠 검증, 우선순위 판단까지\n서로 다른 AI 기술을 하나의 서비스 안에서\n각자의 역할에 맞게 연결했습니다."
                  : "From voice conversion to content checks to priority decisions, I connected different AI tools inside one service so each of them could do a clear job."}
              </p>
            </div>
            <div className="relative mt-3 rotate-[-1.2deg] rounded-[4px] bg-[#FFFDF7] p-8 shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
              <div className="absolute left-1/2 top-0 h-[18px] w-[60px] -translate-x-1/2 -translate-y-1/2 rotate-[3deg] rounded-[2px] bg-[rgba(251,191,36,0.35)]" />
              <p className="text-[1.7rem] font-bold text-amber-700">02</p>
              <p className="mt-2 mb-3 text-xl font-bold text-[#1a1a1a]">
                {isKr ? "AWS 서비스 조합으로 프로덕션 아키텍처 설계하기" : "Designing a Production Architecture with AWS"}
              </p>
              <p className="text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                {isKr
                  ? "SageMaker · EKS · Lambda · Athena 등 다양한 서비스를 목적에 맞게 선택하고 연결하며 클라우드 기반 서비스 설계 전반을 경험했습니다."
                  : "By choosing and connecting SageMaker, EKS, Lambda, Athena, and other services for the right purpose, I got hands-on experience with end-to-end cloud service design."}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
