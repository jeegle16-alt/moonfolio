"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/providers/LocaleProvider";
import { projectListContent, projectsSectionContent } from "@/lib/i18n/content";
import type { Project } from "@/lib/data/projects";
import ui4 from "@/images/nyangnyang-ui4.png";
import ui2 from "@/images/nyangnyang-ui2.png";
import ui5 from "@/images/nyangnyang-ui5.png";
import wingitUi from "@/images/wingit-ui.png";
import flowshipUi from "@/images/flowship-ui.png";
import wordpressUi from "@/images/wordpress-ui.png";
import rpaUi from "@/images/rpa-ui.png";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { locale } = useLocale();
  const isEven = index % 2 === 0;
  const hasEditorialVisual = project.slug === "nyangnyang-letter";
  const hasWingitVisual = project.slug === "wingit";
  const hasFlowshipVisual = project.slug === "cicd-pipeline";
  const hasWordpressVisual = project.slug === "high-availability-infrastructure";
  const hasRpaVisual = project.slug === "rpa-automation";
  const localizedProject = projectListContent[project.slug];
  const displayTitle = localizedProject?.title[locale] ?? project.title;
  const displayRole =
    localizedProject?.role?.[locale] ??
    project.role ??
    projectsSectionContent.defaultRole[locale];
  const summary = localizedProject?.description[locale] ?? project.description;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border-t border-zinc-950 py-5 transition-colors hover:bg-[#efe3cf]/45"
    >
      <div className="grid gap-8 lg:grid-cols-[120px_minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:items-stretch">
        <div className="flex items-end gap-4 lg:flex-col lg:items-start lg:gap-3">
          <span className="font-mono text-[clamp(2.8rem,6vw,5rem)] leading-none text-zinc-950/85">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div
          className={`flex flex-col gap-5 ${isEven ? "" : "lg:pr-8"} ${
            hasEditorialVisual ||
            hasWingitVisual ||
            hasFlowshipVisual ||
            hasWordpressVisual ||
            hasRpaVisual
              ? ""
              : "lg:col-span-2"
          } lg:h-full`}
        >
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span
                lang={locale === "kr" ? "ko" : "en"}
                className={`text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 ${locale === "kr" ? "font-ko break-keep" : "font-en"}`}
              >
                {displayRole}
              </span>
              <span className="h-px w-12 bg-zinc-950" />
            </div>

            <div className="space-y-3">
              <h3
                lang={locale === "kr" ? "ko" : "en"}
                className={`max-w-2xl text-3xl font-bold leading-[1.02] tracking-tight text-zinc-950 transition-colors group-hover:text-amber-700 sm:text-4xl ${locale === "kr" ? "font-ko break-keep" : "font-en"}`}
              >
                {displayTitle}
              </h3>
              <p
                lang={locale === "kr" ? "ko" : "en"}
                className={`${locale === "kr" ? "font-ko break-keep" : ""} max-w-2xl text-lg leading-relaxed text-zinc-800 sm:text-xl`}
              >
                {summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-en border border-zinc-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-950"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <span
            lang={locale === "kr" ? "ko" : "en"}
            className={`mt-auto pt-6 text-base font-semibold uppercase tracking-[0.18em] text-zinc-950 transition-transform group-hover:translate-x-1 ${locale === "kr" ? "font-ko break-keep" : "font-en"}`}
          >
            {projectsSectionContent.cta[locale]}
          </span>
        </div>

        <div className={`flex flex-col ${isEven ? "lg:pl-6" : ""}`}>
          {hasEditorialVisual ? (
            <div className="lg:ml-auto lg:h-full lg:w-full">
              <div className="relative aspect-[4/3] min-h-[338px] w-full overflow-visible lg:h-full lg:aspect-auto">
                <div className="absolute left-3 top-4 z-0 flex items-start justify-center">
                  <div className="transition-transform duration-300 group-hover:scale-[1.04]">
                    <Image
                      src={ui4}
                      alt="NyangNyang Letter UI 1"
                      className="h-auto w-[41%] min-w-[184px] max-w-[248px] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.14)]"
                    />
                  </div>
                </div>
                <div className="absolute left-1/2 top-4 z-10 flex -translate-x-1/2 items-start justify-center">
                  <div className="transition-transform duration-300 group-hover:scale-[1.04]">
                    <Image
                      src={ui2}
                      alt="NyangNyang Letter UI 2"
                      className="h-auto w-[41%] min-w-[184px] max-w-[248px] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.16)]"
                    />
                  </div>
                </div>
                <div className="absolute right-3 top-4 z-0 flex items-start justify-center">
                  <div className="transition-transform duration-300 group-hover:scale-[1.04]">
                    <Image
                      src={ui5}
                      alt="NyangNyang Letter UI 3"
                      className="h-auto w-[41%] min-w-[184px] max-w-[248px] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.14)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : hasWingitVisual ? (
            <div className="lg:ml-auto lg:h-full lg:w-full">
              <div className="relative aspect-[4/3] min-h-[338px] w-full overflow-visible lg:h-full lg:aspect-auto">
                <div className="absolute bottom-0 right-[-1.5rem] z-10 flex items-end justify-end">
                  <div className="rotate-2 transition-transform duration-300 group-hover:scale-[1.04]">
                    <Image
                      src={wingitUi}
                      alt="WING IT UI mockup"
                      className="wingit-cutout-shadow h-auto w-[122%] min-w-[440px] max-w-[680px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : hasFlowshipVisual ? (
            <div className="lg:ml-auto lg:h-full lg:w-full">
              <div className="relative aspect-[4/3] min-h-[338px] w-full overflow-visible lg:h-full lg:aspect-auto">
                <div className="absolute bottom-[-0.4rem] right-[0.8rem] z-10 flex items-end justify-end">
                  <div className="-rotate-2 transition-transform duration-300 group-hover:scale-[1.04]">
                    <Image
                      src={flowshipUi}
                      alt="FLOWSHIP UI mockup"
                      className="wingit-cutout-shadow h-auto w-[130%] min-w-[500px] max-w-[760px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : hasWordpressVisual ? (
            <div className="lg:ml-auto lg:h-full lg:w-full">
              <div className="relative aspect-[4/3] min-h-[338px] w-full overflow-visible lg:h-full lg:aspect-auto">
                <div className="absolute bottom-[-0.2rem] right-[0.8rem] z-10 flex items-end justify-end">
                  <div className="rotate-2 transition-transform duration-300 group-hover:scale-[1.04]">
                    <Image
                      src={wordpressUi}
                      alt="WordPress HA infrastructure mockup"
                      className="wingit-cutout-shadow h-auto w-[130%] min-w-[500px] max-w-[760px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : hasRpaVisual ? (
            <div className="lg:ml-auto lg:h-full lg:w-full">
              <div className="relative aspect-[4/3] min-h-[338px] w-full overflow-visible lg:h-full lg:aspect-auto">
                <div className="absolute bottom-[-0.2rem] right-[0.8rem] z-10 flex items-end justify-end">
                  <div className="-rotate-2 transition-transform duration-300 group-hover:scale-[1.04]">
                    <Image
                      src={rpaUi}
                      alt="RPA automation projects UI mockup"
                      className="wingit-cutout-shadow h-auto w-[130%] min-w-[500px] max-w-[760px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
