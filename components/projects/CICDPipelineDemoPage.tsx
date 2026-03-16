"use client";

import Link from "next/link";
import { useLocale } from "@/components/providers/LocaleProvider";

export default function CICDPipelineDemoPage() {
  const { locale } = useLocale();
  const isKr = locale === "kr";

  return (
    <main
      lang={isKr ? "ko" : "en"}
      className="bg-[#F3EBDD] text-zinc-950"
      style={{ fontFamily: "var(--font-space-grotesk), var(--font-orbit), sans-serif" }}
    >
      <div className="mx-auto flex max-w-[88rem] flex-col gap-16 px-6 pb-24 pt-32 sm:px-10 lg:px-12">
        <Link
          href="/projects/cicd-pipeline"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 transition-colors hover:text-amber-700"
        >
          <span aria-hidden="true">&larr;</span>
          {isKr ? "프로젝트 상세로 돌아가기" : "Back to project"}
        </Link>

        <section className="space-y-4">
          <h1 className="text-[2.3rem] font-semibold tracking-tight text-zinc-950 sm:text-[2.85rem]">
            Service Demo
          </h1>
          <p className="max-w-5xl text-[1.08rem] leading-8 text-zinc-950 sm:text-xl">
            {isKr
              ? "FLOWSHIP 서비스 데모영상입니다."
              : "This is the service demo video for FLOWSHIP."}
          </p>
        </section>

        <section className="flex justify-center">
          <video
            controls
            className="block h-auto max-h-[82vh] w-full max-w-6xl rounded-2xl bg-transparent object-contain"
          >
            <source src="/images/wingit-demo.mp4" type="video/mp4" />
          </video>
        </section>
      </div>
    </main>
  );
}
