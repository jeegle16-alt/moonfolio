"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { longFormContent } from "@/lib/i18n/content";

export default function Contact() {
  const { locale } = useLocale();

  return (
    <section id="contact" className="pb-16 pt-8">
      <div className="mx-auto max-w-[80vw] pt-6">
        <p className="font-en text-base sm:text-lg font-semibold tracking-[0.22em] uppercase text-amber-600 mb-4">
          Let&apos;s Connect
        </p>
        <h2 className="font-en mb-8 text-6xl font-bold tracking-tight text-zinc-950 sm:text-7xl">
          Contact
        </h2>

        <div className="flex flex-col gap-6 max-w-md">
          <p
            lang={locale === "kr" ? "ko" : "en"}
            className={`${locale === "kr" ? "font-ko break-keep" : ""} text-[1.18rem] leading-relaxed text-zinc-600 sm:text-[1.28rem]`}
          >
            {longFormContent.contact.body[locale]}
          </p>
          <a
            href="mailto:jeegle16@gmail.com"
            className="font-en text-xl font-medium text-zinc-950 border-b border-zinc-950 pb-1 w-fit hover:text-amber-600 hover:border-amber-600 transition-colors"
          >
            jeegle16@gmail.com
          </a>
          <div className="flex gap-6 pt-1">
            <a
              href="https://github.com/jeegle16-alt"
              target="_blank"
              rel="noopener noreferrer"
              className="font-en text-[1.05rem] text-zinc-500 transition-colors hover:text-zinc-950"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jeewon-moon-52168a3a5"
              target="_blank"
              rel="noopener noreferrer"
              className="font-en text-[1.05rem] text-zinc-500 transition-colors hover:text-zinc-950"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-950 flex justify-between items-center">
          <span className="font-en text-xs text-zinc-400">Jeewon Moon</span>
        </div>
      </div>
    </section>
  );
}
