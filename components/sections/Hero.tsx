"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { longFormContent } from "@/lib/i18n/content";

export default function Hero() {
  const { locale } = useLocale();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="w-[92vw] max-w-[1600px] mx-auto py-16 flex flex-col items-center gap-8">
        <motion.h1
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-en w-full text-center text-[clamp(2.5rem,10vw,11rem)] font-normal leading-none tracking-tight text-zinc-950"
        >
          <span className="mr-3">✷</span>
          I&apos;m Jeewon Moon
        </motion.h1>

        <div className="w-full flex items-end justify-center gap-10">
          <span className="font-en relative inline-block whitespace-nowrap text-[clamp(2.8rem,10.6vw,10.6rem)] font-bold leading-none tracking-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 text-zinc-950 [-webkit-text-stroke:16px_#09090b]"
            >
              A Learner
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 text-zinc-950 [paint-order:stroke_fill] [-webkit-text-stroke:10px_#ffffff]"
            >
              A Learner
            </span>
            <span className="relative text-zinc-950">A Learner</span>
          </span>

          <p
            lang={locale === "kr" ? "ko" : "en"}
            className={`${locale === "kr" ? "font-ko break-keep" : ""} max-w-[700px] text-[clamp(1.1rem,1.8vw,2rem)] font-medium leading-[1.5] text-zinc-950`}
          >
            {longFormContent.hero.intro[locale]}
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="font-en w-full text-center text-[clamp(2.5rem,10vw,10rem)] font-normal leading-none tracking-tight text-zinc-950"
        >
          learning by building
        </motion.p>
      </div>
    </section>
  );
}
