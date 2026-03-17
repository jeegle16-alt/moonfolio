"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { projects } from "@/lib/data/projects";
import { projectsSectionContent } from "@/lib/i18n/content";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const { locale } = useLocale();

  return (
    <section id="projects" className="py-16">
      <div className="max-w-[80vw] mx-auto border-t border-zinc-950 pt-16">
        <p className="font-en text-base sm:text-lg font-semibold tracking-[0.22em] uppercase text-amber-600 mb-4">
          {projectsSectionContent.eyebrow[locale]}
        </p>
        <h2
          lang={locale === "kr" ? "ko" : "en"}
          className={`text-6xl sm:text-7xl font-bold tracking-tight text-zinc-950 mb-14 ${locale === "kr" ? "font-ko break-keep" : "font-en"}`}
        >
          {projectsSectionContent.title[locale]}
        </h2>
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
          <div className="border-t border-zinc-950" />
        </div>
      </div>
    </section>
  );
}
