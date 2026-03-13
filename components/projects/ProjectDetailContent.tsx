"use client";

import { projectLongForm } from "@/lib/i18n/content";
import { useLocale } from "@/components/providers/LocaleProvider";
import type { Project } from "@/lib/data/projects";

export default function ProjectDetailContent({
  project,
}: {
  project: Project;
}) {
  const { locale } = useLocale();
  const sections = projectLongForm[project.slug] ?? [];

  if (sections.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8">
      {sections.map((section) => (
        <section key={section.title} className="border-t border-zinc-950 pt-8">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            {section.title}
          </h2>
          <p
            lang={locale === "kr" ? "ko" : "en"}
            className={`${locale === "kr" ? "font-ko break-keep" : ""} text-xl leading-relaxed text-zinc-950 sm:text-2xl`}
          >
            {section.body[locale]}
          </p>
        </section>
      ))}
    </div>
  );
}
