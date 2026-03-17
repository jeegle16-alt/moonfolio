"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { longFormContent } from "@/lib/i18n/content";

export default function Hero() {
  const { locale } = useLocale();

  return (
    <section
      id="hero"
      className="flex items-start justify-center overflow-hidden pt-28 sm:min-h-[78svh] sm:items-center sm:pt-0 lg:min-h-screen"
    >
      <div className="mx-auto flex w-[92vw] max-w-[1600px] flex-col items-center gap-2 py-4 sm:gap-4 sm:py-8 lg:gap-8 lg:py-16">
        <motion.h1
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-en w-full text-center text-[clamp(2.3rem,8.6vw,11rem)] font-normal leading-none tracking-tight text-zinc-950"
        >
          <span className="mr-3">✷</span>
          I&apos;m Jeewon Moon
        </motion.h1>

        <div className="flex w-full items-center justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-10">
          <span className="font-en relative inline-block whitespace-nowrap text-[clamp(1.9rem,8vw,10.6rem)] font-bold leading-none tracking-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 text-zinc-950 [-webkit-text-stroke:6px_#09090b] sm:[-webkit-text-stroke:8px_#09090b] md:[-webkit-text-stroke:10px_#09090b] lg:[-webkit-text-stroke:16px_#09090b]"
            >
              A Learner
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 text-zinc-950 [paint-order:stroke_fill] [-webkit-text-stroke:3px_#ffffff] sm:[-webkit-text-stroke:4px_#ffffff] md:[-webkit-text-stroke:6px_#ffffff] lg:[-webkit-text-stroke:10px_#ffffff]"
            >
              A Learner
            </span>
            <span className="relative text-zinc-950">A Learner</span>
          </span>

          <p
            lang={locale === "kr" ? "ko" : "en"}
            className={`${locale === "kr" ? "font-ko break-keep" : ""} max-w-[165px] text-[clamp(0.6rem,1.05vw,2rem)] font-medium leading-[1.42] text-zinc-950 sm:max-w-[240px] sm:text-[clamp(0.82rem,1.35vw,2rem)] md:max-w-[340px] md:text-[clamp(0.95rem,1.5vw,2rem)] lg:max-w-[700px] lg:text-[clamp(1.1rem,1.8vw,2rem)]`}
          >
            {longFormContent.hero.intro[locale]}
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="font-en w-full text-center text-[clamp(2.2rem,8.2vw,10rem)] font-normal leading-none tracking-tight text-zinc-950"
        >
          learning by building
        </motion.p>
      </div>
    </section>
  );
}
