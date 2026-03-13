"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { projectLongForm, projectSummaries } from "@/lib/i18n/content";
import type { Project } from "@/lib/data/projects";

export default function ProjectBody({ project }: { project: Project }) {
  const { locale } = useLocale();
  const summary =
    projectSummaries[project.slug]?.description[locale] ?? project.description;
  const sections = projectLongForm[project.slug] ?? [];

  return (
    <div className="mx-auto grid w-full max-w-[72rem] gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-12">
      <div className="flex min-w-0 flex-col gap-10">
        <p
          lang={locale === "kr" ? "ko" : "en"}
          className={`${locale === "kr" ? "font-ko break-keep" : ""} max-w-4xl text-[1.7rem] leading-relaxed text-zinc-950`}
        >
          {summary}
        </p>

        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <section key={section.title} className="border-t border-zinc-950 pt-8">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                {section.title}
              </h2>
              <p
                lang={locale === "kr" ? "ko" : "en"}
                className={`${locale === "kr" ? "font-ko break-keep" : ""} max-w-4xl text-xl leading-relaxed text-zinc-950 sm:text-2xl`}
              >
                {section.body[locale]}
              </p>
            </section>
          ))}
        </div>
      </div>

      <aside className="flex h-fit flex-wrap gap-2 lg:justify-start lg:pt-1">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="border border-zinc-400 px-3 py-1 text-base text-zinc-950"
          >
            {tag}
          </span>
        ))}
      </aside>
    </div>
  );
}
