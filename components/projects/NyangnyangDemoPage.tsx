"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useLocale } from "@/components/providers/LocaleProvider";

const chaptersKr = [
  { time: 0, label: "회원가입", desc: "스마트폰 사용 로그 수집 권한에 동의하고 고양이 캐릭터를 설정합니다" },
  { time: 44, label: "오디오 가드레일", desc: "회원가입 시 녹음될 수 있는 비속어를 방지합니다" },
  { time: 51, label: "친구 추가", desc: "QR 코드로 친구를 추가하면 서로의 고양이 상태를 확인할 수 있습니다" },
  { time: 70, label: "메시지 + 하트", desc: "친구의 고양이를 눌러 메시지와 하트를 보낼 수 있습니다" },
  { time: 124, label: "VC-BGM", desc: "그날의 상태에 맞는 BGM이 내 목소리로 생성됩니다" },
  { time: 170, label: "챌린지", desc: "매일 주어지는 미션을 사진으로 제출해 친구와 일상을 공유합니다" },
  { time: 224, label: "Critical Agent - 전화 발신", desc: "36시간 이상 로그가 없으면 친구에게 자동으로 위급 알림이 전송되고, 탭하면 바로 전화가 연결됩니다" },
  { time: 230, label: "Critical Agent - 음성인식 해제", desc: "본인의 음성으로 직접 말하면 Critical 상태가 해제됩니다" },
] as const;

const chaptersEn = [
  { time: 0, label: "Onboarding", desc: "The user grants smartphone log permissions and sets up their cat character." },
  { time: 44, label: "Audio Guardrail", desc: "The signup voice clip is checked to block profanity or spoken sentences." },
  { time: 51, label: "Add Friends", desc: "Friends can be added by QR code so both sides can see each other's cat state." },
  { time: 70, label: "Messages + Hearts", desc: "Users can tap a friend's cat to send a message or a heart." },
  { time: 124, label: "VC-BGM", desc: "A BGM track matching the day's state is generated in the user's own voice." },
  { time: 170, label: "Challenge", desc: "Daily missions can be shared with friends through photo-based updates." },
  { time: 224, label: "Critical Agent - Call", desc: "If there are no logs for 36 hours, a critical alert is sent to friends and tapping it starts a call right away." },
  { time: 230, label: "Critical Agent - Voice Release", desc: "The critical state can be released directly through the user's own voice." },
] as const;

function DemoTitle({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-4">
      <h1 className="text-[2.3rem] font-semibold tracking-tight text-zinc-950 sm:text-[2.85rem]">
        {title}
      </h1>
      <p className="max-w-5xl text-[1.08rem] leading-8 text-zinc-950 sm:text-xl">{description}</p>
    </div>
  );
}

export default function NyangnyangDemoPage() {
  const { locale } = useLocale();
  const isKr = locale === "kr";
  const chapters = isKr ? chaptersKr : chaptersEn;
  const [activeDemoIndex, setActiveDemoIndex] = useState(0);
  const [hasDemoVideoError, setHasDemoVideoError] = useState(false);
  const demoVideoRef = useRef<HTMLVideoElement | null>(null);

  const handleDemoJump = async (index: number) => {
    const video = demoVideoRef.current;
    if (!video) return;
    setActiveDemoIndex(index);
    video.currentTime = chapters[index].time;
    try {
      await video.play();
    } catch {}
  };

  const handleDemoTimeUpdate = () => {
    const video = demoVideoRef.current;
    if (!video) return;
    const current = video.currentTime;
    let nextIndex = 0;
    for (let i = 0; i < chapters.length; i += 1) {
      const isLast = i === chapters.length - 1;
      const nextTime = isLast ? Number.POSITIVE_INFINITY : chapters[i + 1].time;
      if (current >= chapters[i].time && current < nextTime) {
        nextIndex = i;
        break;
      }
    }
    setActiveDemoIndex((prev) => (prev === nextIndex ? prev : nextIndex));
  };

  return (
    <main
      lang={isKr ? "ko" : "en"}
      className="bg-[#F3EBDD] text-zinc-950"
      style={{ fontFamily: "var(--font-space-grotesk), var(--font-orbit), sans-serif" }}
    >
      <div className="mx-auto flex max-w-[88rem] flex-col gap-16 px-6 pb-24 pt-32 sm:px-10 lg:px-12">
        <Link
          href="/projects/nyangnyang-letter"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 transition-colors hover:text-amber-700"
        >
          <span aria-hidden="true">&larr;</span>
          {isKr ? "프로젝트 상세로 돌아가기" : "Back to project"}
        </Link>

        <section className="space-y-8">
          <DemoTitle
            title="Service Demo"
            description={
              isKr
                ? "서비스 데모영상입니다. 궁금한 기능을 클릭해서 바로 확인해보세요."
                : "A quick walkthrough of the live product. Click any feature to jump to that part of the demo."
            }
          />
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:items-start">
            <div className="mx-auto w-fit max-w-full">
              {hasDemoVideoError ? (
                <div className="flex aspect-[9/16] w-[24rem] items-center justify-center rounded-2xl bg-[#1a1d27] px-6 text-center text-sm leading-6 text-white/70 sm:w-[25rem]">
                  {isKr ? "데모 영상" : "Demo video"}
                </div>
              ) : (
                <video
                  ref={demoVideoRef}
                  controls
                  className="block h-auto max-h-[48rem] w-auto max-w-[24rem] rounded-2xl bg-transparent object-contain sm:max-w-[25rem]"
                  onTimeUpdate={handleDemoTimeUpdate}
                  onError={() => setHasDemoVideoError(true)}
                >
                  <source src="/images/nyangnyang-demo.mp4" type="video/mp4" />
                </video>
              )}
            </div>
            <div className="space-y-3">
              {chapters.map((chapter, index) => {
                const isActive = index === activeDemoIndex;
                return (
                  <button
                    key={`${chapter.time}-${chapter.label}`}
                    type="button"
                    onClick={() => void handleDemoJump(index)}
                    className={`w-full border-l-4 px-4 py-3 text-left transition-colors ${
                      isActive
                        ? "border-amber-700 text-amber-700"
                        : "border-zinc-300 text-zinc-950 hover:border-amber-300"
                    }`}
                  >
                    <p className={`text-[1.04rem] ${isActive ? "font-bold" : "font-semibold"} tracking-tight sm:text-[1.12rem]`}>
                      {chapter.label}
                    </p>
                    <p className={`mt-1 text-[0.94rem] leading-7 sm:text-[1rem] ${isActive ? "text-amber-700" : "text-zinc-950"}`}>
                      {chapter.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
