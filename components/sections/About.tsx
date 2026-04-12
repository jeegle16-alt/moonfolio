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

const skills: Record<string, string[]> = {
  Languages: ["Java", "Python", "C"],
  Frontend: ["HTML", "CSS", "JavaScript"],
  Cloud: ["AWS"],
  DevOps: ["Docker", "Kubernetes", "Jenkins", "ArgoCD"],
  Databases: ["MySQL", "SQLite"],
  Automation: ["Automation Anywhere A360"],
  Collaboration: ["GitHub", "Notion", "Slack", "Figma"],
};

const certificates = [
  {
    name: {
      kr: "OPIc",
      en: "OPIc",
    },
    score: "IH",
    year: "(2025.03.)",
  },
  {
    name: {
      kr: "TOEIC",
      en: "TOEIC",
    },
    score: "950",
    year: "(2025.04.)",
  },
  {
    name: {
      kr: "리눅스 마스터 2급",
      en: "Linux Master Level 2",
    },
    year: "(2026.01.)",
  },
  {
    name: {
      kr: "네트워크 관리사 2급",
      en: "Network Administrator Level 2",
    },
    year: "(2026.03.)",
  },
  {
    name: {
      kr: "AWS 공인 솔루션스 아키텍트 - 어소시에이트",
      en: "AWS Certified Solutions Architect - Associate",
    },
    year: "(2026.04.11)",
  },
];

const experience = [
  {
    name: {
      kr: "(주) 바이텍 정보통신",
      en: "Bitek Information & Communication Inc.",
    },
    role: {
      kr: "RPA 인턴",
      en: "RPA Intern",
    },
    year: "(2024.08 - 2025.02)",
  },
  {
    name: {
      kr: "AWS AI School",
      en: "AWS AI School",
    },
    year: "(2025.08 - 2026.03)",
  },
];

const awards = [
  {
    name: {
      kr: "우수상",
      en: "Excellence Award",
    },
    org: {
      kr: "AWS AI School 최종 프로젝트",
      en: "AWS AI School Final Project",
    },
  },
  {
    name: {
      kr: "우수상",
      en: "Excellence Award",
    },
    org: {
      kr: "2025 AMAZON WORKING BACKWARDS",
      en: "2025 AMAZON WORKING BACKWARDS",
    },
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

        <div className="mb-16 mt-6 grid grid-cols-1 items-start gap-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-10">
          <div className="mx-auto h-[320px] w-[240px] overflow-hidden rounded-sm lg:sticky lg:top-28 lg:h-[500px] lg:w-[340px] lg:mx-0">
            <img
              src="/jee-pic.gif"
              alt="Portrait of Jeewon Moon"
              className="block h-full w-full scale-[1.01] object-cover object-[center_44%]"
            />
          </div>

          <div className="flex min-h-[500px] flex-col justify-center gap-6 pt-2 lg:pt-0">
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
            <SubSection label="Experience">
              <div className="flex flex-col gap-4">
                {experience.map((item) => (
                  <div
                    key={`${item.name.en}-${item.year}`}
                    className="flex items-start justify-between gap-4"
                  >
                    <div>
                      <p
                        lang={locale === "kr" ? "ko" : "en"}
                        className={`text-lg font-semibold text-zinc-950 ${locale === "kr" ? "font-ko break-keep" : "font-en"}`}
                      >
                        {item.name[locale]}
                      </p>
                      {"role" in item && item.role ? (
                        <p
                          lang={locale === "kr" ? "ko" : "en"}
                          className={`mt-1 text-base text-zinc-950 ${locale === "kr" ? "font-ko break-keep" : "font-en"}`}
                        >
                          {item.role[locale]}
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
                    key={`${cert.name.en}-${cert.year}`}
                    className="flex items-start justify-between gap-4"
                  >
                    <p className="font-en flex items-center gap-3 text-lg font-semibold text-zinc-950">
                      <span
                        lang={locale === "kr" ? "ko" : "en"}
                        className={locale === "kr" ? "font-ko break-keep" : ""}
                      >
                        {cert.name[locale]}
                      </span>
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
              <div key={`${item.name.en}-${item.org.en}`} className="flex flex-col gap-1">
                    <p
                      lang={locale === "kr" ? "ko" : "en"}
                      className={`text-lg font-semibold text-zinc-950 ${locale === "kr" ? "font-ko break-keep" : "font-en"}`}
                    >
                      {item.name[locale]}
                    </p>
                    <p
                      lang={locale === "kr" ? "ko" : "en"}
                      className={`text-base text-zinc-950 ${locale === "kr" ? "font-ko break-keep" : "font-en"}`}
                    >
                      {item.org[locale]}
                    </p>
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

