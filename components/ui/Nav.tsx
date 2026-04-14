"use client";

import Link from "next/link";
import { useLocale } from "@/components/providers/LocaleProvider";
import type { Locale } from "@/lib/i18n/config";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

function LocaleToggle() {
  const { locale, setLocale } = useLocale();
  const items: { label: string; value: Locale }[] = [
    { label: "EN", value: "en" },
    { label: "KR", value: "kr" },
  ];

  return (
    <div className="font-en flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-950">
      {items.map((item, index) => (
        <span key={item.value} className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLocale(item.value)}
            className={`transition-colors ${
              locale === item.value ? "text-zinc-950" : "text-zinc-500"
            }`}
            aria-pressed={locale === item.value}
          >
            {item.label}
          </button>
          {index < items.length - 1 ? <span className="text-zinc-400">|</span> : null}
        </span>
      ))}
    </div>
  );
}

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-zinc-950 bg-[#F3EBDD]">
      <nav className="mx-auto flex w-[92vw] max-w-[1100px] flex-wrap items-center gap-x-4 gap-y-3 py-4 sm:grid sm:h-20 sm:max-w-[80vw] sm:grid-cols-[auto_1fr_auto] sm:gap-6 sm:py-0">
        <Link
          href="/"
          className="font-en text-lg font-semibold tracking-tight text-zinc-950 sm:text-xl"
        >
          Jeewon Moon
        </Link>
        <ul className="order-3 flex w-full items-center justify-between gap-4 text-sm sm:order-none sm:w-auto sm:justify-center sm:gap-8 sm:text-base">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-en text-base text-zinc-950 transition-colors hover:text-zinc-500 sm:text-xl"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center justify-end sm:ml-0">
          <LocaleToggle />
        </div>
      </nav>
    </header>
  );
}
