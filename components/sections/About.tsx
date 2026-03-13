"use client";

import type { ReactNode } from "react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { longFormContent } from "@/lib/i18n/content";

function SubSection({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-en flex items-center gap-3 border-b-2 border-zinc-950 pb-3 text-lg font-bold uppercase tracking-[0.18em] text-zinc-950">
        <span className="inline-block h-3 w-3 shrink-0 rounded-full bg-amber-600" />
        {label}
      </h3>
      {children}
    </div>
  );
}

const education = [
  {
    school: "Dongduk Women's University",
    degree: "B.S. Computer Science",
    year: "(2020.3 - 2025.2)",
  },
];

const skills: Record<string, string[]> = {
  Languages: ["Java", "Python", "C"],
  Cloud: ["AWS"],
  DevOps: ["Docker", "Kubernetes", "Jenkins", "ArgoCD"],
  Databases: ["MySQL", "SQLite"],
  Automation: ["Automation Anywhere A360"],
  Tools: ["GitHub", "Notion"],
};

const certificates = [
  {
    name: "OPIc",
    score: "IH",
    year: "(2025.03.)",
  },
  {
    name: "TOEIC",
    score: "950",
    year: "(2025.04.)",
  },
  {
    name: "Linux Master Level 2",
    year: "(2026.01.)",
  },
];

const experience = [
  {
    name: "Bitek Information & Communication Inc.",
    role: "RPA Intern",
    year: "(2024.08 - 2025.02)",
  },
  {
    name: "AWS AI School",
    year: "(2025.08 - 2026.03)",
  },
];

const awards = [
  {
    name: "Excellence Award",
    org: "AWS AI School Final Project",
  },
  {
    name: "3rd Place",
    org: "AWS Ideathon",
  },
];

export default function About() {
  const { locale } = useLocale();

  return (
    <section id="about" className="py-16">
      <div className="max-w-[80vw] mx-auto border-t border-zinc-950 pt-16">
        <p className="font-en mb-4 text-base font-semibold uppercase tracking-[0.22em] text-amber-600 sm:text-lg">
          Profile
        </p>
        <h2 className="font-en mb-16 text-6xl font-bold tracking-tight text-zinc-950 sm:text-7xl">
          About
        </h2>

        <div className="mt-6 mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-10">
          <div className="h-[320px] w-[240px] overflow-hidden rounded-sm lg:sticky lg:top-28 lg:h-[520px] lg:w-[340px]">
            <img
              src="/jee-pic.gif"
              alt="Portrait of Jeewon Moon"
              className="h-full w-full object-cover object-[center_44%]"
            />
          </div>

          <div className="flex flex-col gap-6 pt-2 lg:pt-4">
            <div className="font-en flex flex-wrap items-center gap-x-4 gap-y-2 text-base font-semibold uppercase tracking-[0.18em] text-zinc-950 sm:text-lg">
              <span>Jeewon Moon</span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-zinc-950 sm:inline-block" />
              <span>Based in Seoul, Korea</span>
            </div>

            <div className="max-w-none space-y-4 text-xl leading-relaxed text-zinc-950 sm:text-2xl">
              {longFormContent.about.paragraphs.map((paragraph, index) => {
                const copy = paragraph[locale];

                if (!copy) {
                  return null;
                }

                return (
                  <p
                    key={index}
                    lang={locale === "kr" ? "ko" : "en"}
                    className={locale === "kr" ? "font-ko break-keep" : ""}
                  >
                    {copy}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-12">
            <SubSection label="Education">
              <div className="flex flex-col gap-5">
                {education.map((item) => (
                  <div
                    key={item.school}
                    className="flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="font-en text-lg font-semibold text-zinc-950">
                        {item.school}
                      </p>
                      <p className="font-en mt-1 text-base text-zinc-950">
                        {item.degree}
                      </p>
                    </div>
                    <span className="pt-1 font-mono text-sm whitespace-nowrap text-zinc-950">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection label="Experience">
              <div className="flex flex-col gap-4">
                {experience.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="font-en text-lg font-semibold text-zinc-950">
                        {item.name}
                      </p>
                      {"role" in item && item.role ? (
                        <p className="font-en mt-1 text-base text-zinc-950">
                          {item.role}
                        </p>
                      ) : null}
                    </div>
                    <span className="pt-1 font-mono text-sm whitespace-nowrap text-zinc-950">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection label="Certificate">
              <div className="flex flex-col gap-4">
                {certificates.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-start justify-between gap-4"
                  >
                    <p className="font-en flex items-center gap-3 text-lg font-semibold text-zinc-950">
                      <span>{cert.name}</span>
                      {cert.score ? <span>|</span> : null}
                      {cert.score ? <span>{cert.score}</span> : null}
                    </p>
                    <span className="pt-1 font-mono text-sm whitespace-nowrap text-zinc-950">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection label="Awards">
              <div className="flex flex-col gap-4">
                {awards.map((item) => (
                  <div key={item.name} className="flex flex-col gap-1">
                    <p className="font-en text-lg font-semibold text-zinc-950">
                      {item.name}
                    </p>
                    <p className="font-en text-base text-zinc-950">{item.org}</p>
                  </div>
                ))}
              </div>
            </SubSection>
          </div>

          <div className="flex flex-col gap-12">
            <SubSection label="Skills">
              <div className="flex flex-col gap-7">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="font-en mb-3 text-lg font-semibold text-zinc-950">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="font-en border-2 border-zinc-950 px-4 py-1.5 text-base font-medium text-zinc-950"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SubSection>
          </div>
        </div>
      </div>
    </section>
  );
}
