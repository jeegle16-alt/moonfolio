"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { longFormContent } from "@/lib/i18n/content";

export default function Hero() {
  const { locale } = useLocale();

  return (
    <section
      id="hero"
      className="flex items-start justify-center overflow-hidden px-4 pt-24 sm:min-h-[78svh] sm:px-6 sm:items-center sm:pt-0 lg:min-h-screen lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-[1720px] flex-col items-center gap-3 py-6 sm:w-[92vw] sm:gap-4 sm:py-8 lg:gap-8 lg:py-16">
        <motion.h1
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-en w-full whitespace-nowrap text-center text-[clamp(2.7rem,10.4vw,12.7rem)] font-normal leading-[0.92] tracking-[-0.04em] text-zinc-950"
        >
          <span className="mr-2 sm:mr-3">✷</span>
          I&apos;m Jeewon Moon
        </motion.h1>

        <div className="flex w-full flex-col items-center justify-center gap-4 text-center sm:gap-5 md:flex-row md:items-center md:gap-6 lg:gap-8">
          <span className="font-en relative inline-block whitespace-nowrap text-center text-[clamp(2.05rem,11.8vw,11.2rem)] font-bold leading-[0.9] tracking-tight lg:text-left">
            <span
              aria-hidden="true"
              className="absolute inset-0 text-zinc-950 [-webkit-text-stroke:4px_#09090b] sm:[-webkit-text-stroke:6px_#09090b] md:[-webkit-text-stroke:9px_#09090b] lg:[-webkit-text-stroke:16px_#09090b]"
            >
              A Learner
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 text-zinc-950 [paint-order:stroke_fill] [-webkit-text-stroke:2px_#ffffff] sm:[-webkit-text-stroke:3px_#ffffff] md:[-webkit-text-stroke:5px_#ffffff] lg:[-webkit-text-stroke:9px_#ffffff]"
            >
              A Learner
            </span>
            <span className="relative text-zinc-950">A Learner</span>
          </span>

          <p
            lang={locale === "kr" ? "ko" : "en"}
            className={`${locale === "kr" ? "font-ko break-keep" : ""} max-w-[26rem] text-balance text-center text-[clamp(0.82rem,2.2vw,1.35rem)] font-medium leading-[1.6] text-zinc-950 sm:max-w-[24rem] sm:text-[clamp(0.88rem,2.4vw,1.45rem)] md:max-w-[32rem] md:text-left md:text-[clamp(0.95rem,1.9vw,1.65rem)] lg:max-w-[38rem] lg:text-[clamp(1.05rem,1.55vw,2.05rem)]`}
          >
            {longFormContent.hero.intro[locale]}
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="font-en w-full whitespace-nowrap text-center text-[clamp(2.55rem,9.8vw,11.9rem)] font-normal leading-[0.92] tracking-[-0.04em] text-zinc-950"
        >
          learning by building
        </motion.p>
      </div>
    </section>
  );
}
