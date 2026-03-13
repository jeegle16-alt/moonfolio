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
      <nav className="mx-auto grid h-20 max-w-[80vw] grid-cols-[auto_1fr_auto] items-center gap-6">
        <Link
          href="/"
          className="font-en text-xl font-semibold tracking-tight text-zinc-950"
        >
          Jeewon Moon
        </Link>
        <ul className="flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-en text-xl text-zinc-950 transition-colors hover:text-zinc-500"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-end">
          <LocaleToggle />
        </div>
      </nav>
    </header>
  );
}
