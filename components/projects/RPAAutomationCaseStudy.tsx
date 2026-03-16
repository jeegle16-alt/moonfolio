"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useLocale } from "@/components/providers/LocaleProvider";

const copy = {
  kr: {
    back: "프로젝트 목록으로",
    eyebrow: "RPA INTERNSHIP PROJECTS",
    title: "업무 자동화 프로젝트 모음",
    subtitle:
      "인턴 기간 동안 라이선스 관리, 데이터 업데이트, 웹 정보 수집 등 반복 업무를 Automation Anywhere 기반으로 자동화한 프로젝트들",
    meta: ["인턴십 프로젝트", "RPA"],
    techSkills: "Tech Skills",
    projectSectionTitle: "Project 01",
    projectTitle: "라이선스 만기일 도래 알림 메일 자동화",
    projectSummaryLabel: "Project Summary",
    problemSubLabel: "Problem",
    approachSubLabel: "My Approach",
    projectSummaryBody:
      "라이선스 도래 대상 고객사를 분류하고, 결과 리스트를 매월 1일 관리자에게 자동 발송하는 업무 자동화 프로젝트입니다.",
    problemBody:
      "라이선스 시작일 기준으로 30일, 90일, 다음달, 상반기, 하반기, 다음해 대상 고객사를 매월 1일 직접 정리하고 메일로 발송하던 반복 업무",
    approachBody:
      "SharePoint에서 원본 파일을 자동으로 내려받고, 날짜 조건에 따라 고객사를 분류한 뒤 결과 파일을 메일로 자동 발송하는 프로세스로 구성",
    implementationLabel: "Core Implementation",
    implementationPoints: [
      {
        title: "1. Recorder -> SharePoint Action 전환",
        body: "UI를 따라가는 방식 대신 Client ID 인증 기반으로 SharePoint 파일에 직접 접근하도록 변경해 UI 변경에 덜 의존하는 구조로 개선",
      },
      {
        title: "2. Excel 수식 -> Datetime Action 전환",
        body: "전체 데이터를 반복 계산하던 방식 대신 날짜 변수를 기준으로 필요한 행만 검사하고 분류해 처리 속도와 유지보수성 개선",
      },
    ],
    resultLabel: "Result",
    resultItems: [
      "매월 반복되던 대상 분류 및 메일 발송 업무를 자동화",
      "SharePoint UI 탐색 의존도를 줄여 운영 안정성 향상",
      "날짜 조건 기반 분류 로직으로 유지보수 부담 감소",
      "정기적으로 반복되는 월간 업무 처리 효율 개선",
    ],
    imageLabel: "Demo",
    imageCaption: "원본 파일 다운로드부터 대상 분류, 메일 발송까지의 자동화 흐름",
    projectTwoTitle: "라이선스 시작일 업데이트 자동화",
    projectTwoSummaryBody:
      "계약 완료 메일을 기준으로 고객사를 식별하고, 라이선스 시작일을 자동으로 업데이트한 뒤 예외 상황까지 함께 처리하도록 구성한 업무 자동화 프로젝트입니다.",
    projectTwoProblemBody:
      "계약 완료 메일을 확인한 뒤 고객사 라이선스 시작일을 직접 수정하고, 오류 여부와 만료일 조건을 함께 점검해야 하던 반복 업무",
    projectTwoApproachBody:
      "메일 제목과 첨부 파일을 기준으로 고객사를 식별하고, 라이선스 시작일을 자동으로 업데이트한 뒤 조건에 맞지 않는 경우에는 예외 메일이 발송되도록 프로세스를 구성",
    projectTwoImplementationPoints: [
      {
        title: "1. 메일 제목 기반 고객사 식별",
        body: "계약 완료 메일 제목에서 고객사명을 추출하고, 소스 파일의 대체 고객사명 컬럼을 기준으로 매칭하도록 구성",
      },
      {
        title: "2. 시작일 자동 업데이트 및 예외 처리",
        body: "매칭된 고객사의 라이선스 시작일을 자동으로 수정하고, 오류가 있거나 만료일 조건에 맞지 않는 경우에는 예외 메일이 발송되도록 구현",
      },
    ],
    projectTwoResultItems: [
      "라이선스 시작일 수정 업무 자동화",
      "고객사명 불일치 대응력 향상",
      "예외 상황 확인 과정 단순화",
      "반복적인 수작업 검토 부담 감소",
    ],
    projectTwoDemoText: "메일 확인부터 라이선스 시작일 업데이트까지의 자동화 흐름",
    projectThreeTitle: "공고 정보 웹 스크래핑 자동화",
    projectThreeSummaryBody:
      "웹 게시판에서 조건에 맞는 공고 정보를 수집하고, 결과 데이터를 정리해 저장하도록 구성한 업무 자동화 프로젝트입니다.",
    projectThreeProblemBody:
      "웹 게시판에서 지역별 공고를 직접 검색하고 여러 페이지를 이동하며 필요한 정보를 반복적으로 확인·정리해야 하던 수작업 업무",
    projectThreeApproachBody:
      "검색 조건에 맞는 공고를 자동으로 조회하고, 페이지를 순차적으로 이동하며 필요한 정보를 수집한 뒤 중복 없이 Excel 파일로 정리하는 프로세스로 구성",
    projectThreeImplementationPoints: [
      {
        title: "1. 검색 조건 및 페이지 반복 처리",
        body: "지역별 검색 조건을 적용한 뒤, 콤보박스의 전체 항목 수를 기준으로 반복 범위를 계산해 여러 페이지를 순차적으로 탐색하도록 구성",
      },
      {
        title: "2. 동적 페이지 이동 및 데이터 정리",
        body: "페이지 번호를 DOMXPath에 반영해 동적으로 이동하고, 수집한 공고 정보를 중복 없이 Excel 파일에 저장하도록 구현",
      },
    ],
    projectThreeResultItems: [
      "반복적인 공고 조회 및 정리 업무 자동화",
      "다중 페이지 탐색 과정을 일관된 흐름으로 처리",
      "수집 데이터의 정리 과정 단순화",
      "웹 기반 정보 수집 업무 효율 개선",
    ],
    projectThreeDemoText: "검색부터 공고 정보 수집 및 저장까지의 자동화 흐름",
    learnedTitle: "What I Learned",
    learnedCards: [
      {
        title: "운영 가능한 자동화의 중요성",
        body: "자동화는 한 번 실행되는 것보다, 반복 실행과 예외 상황에서도 안정적으로 동작할 수 있어야 한다는 점을 배웠습니다.",
      },
      {
        title: "명확한 조건 설계의 중요성",
        body: "날짜 기준, 고객사 식별, 종료 조건처럼 작은 로직 차이도 전체 결과에 영향을 줄 수 있어, 조건을 명확하게 설계하는 것이 중요하다는 점을 배웠습니다.",
      },
      {
        title: "유지보수까지 고려한 개선의 중요성",
        body: "기존 업무를 그대로 옮기는 것보다, UI 의존도나 반복 계산처럼 비효율적인 부분을 함께 개선하는 것이 더 실용적인 자동화로 이어진다는 점을 경험했습니다.",
      },
    ],
  },
  en: {
    back: "Back to projects",
    eyebrow: "RPA INTERNSHIP PROJECTS",
    title: "RPA Automation Projects",
    subtitle:
      "A collection of internship projects that automated repetitive tasks such as license management, data updates, and web information collection with Automation Anywhere.",
    meta: ["Internship Project", "RPA"],
    techSkills: "Tech Skills",
    projectSectionTitle: "Project 01",
    projectTitle: "License Expiration Alert Mail Automation",
    projectSummaryLabel: "Project Summary",
    problemSubLabel: "Problem",
    approachSubLabel: "My Approach",
    projectSummaryBody:
      "An automation project that classifies customers approaching license milestones and automatically sends the result list to the administrator on the first day of each month.",
    problemBody:
      "On the first day of every month, customer accounts had to be reviewed manually and sorted into 30-day, 90-day, next-month, first-half, second-half, and next-year groups based on the license start date before the list could be sent by email.",
    approachBody:
      "The process was designed to download the source file from SharePoint automatically, classify customer accounts by date-based conditions, and send the result file by email.",
    implementationLabel: "Core Implementation",
    implementationPoints: [
      {
        title: "1. Recorder -> SharePoint Action",
        body: "Instead of relying on UI-following actions, the flow was changed to access SharePoint files directly with Client ID authentication, making it less dependent on UI changes.",
      },
      {
        title: "2. Excel Formula -> Datetime Action",
        body: "Instead of recalculating the entire dataset repeatedly, only the rows needed were checked and classified based on date variables, which improved both processing speed and maintainability.",
      },
    ],
    resultLabel: "Result",
    resultItems: [
      "Automated the monthly classification and notification workflow",
      "Reduced dependence on SharePoint UI navigation",
      "Lowered maintenance overhead with date-based classification logic",
      "Improved efficiency for a recurring monthly task",
    ],
    imageLabel: "Demo",
    imageCaption:
      "Automation flow from source-file download to target classification and mail delivery",
    projectTwoTitle: "License Start Date Update Automation",
    projectTwoSummaryBody:
      "An automation project that identifies customer accounts from contract completion emails, updates the license start date automatically, and handles exception cases in the same flow.",
    projectTwoProblemBody:
      "After checking contract completion emails, the license start date had to be updated manually while also reviewing errors and expiration conditions.",
    projectTwoApproachBody:
      "The process was designed to identify customer accounts from the email subject and attachment, update the license start date automatically, and send an exception email when a case does not meet the required condition.",
    projectTwoImplementationPoints: [
      {
        title: "1. Customer identification by email subject",
        body: "The customer name was extracted from the contract completion email subject and matched against the alternate customer-name column in the source file.",
      },
      {
        title: "2. Automatic start-date update and exception handling",
        body: "The matched customer's license start date was updated automatically, and an exception email was sent when an error occurred or the expiration-date condition was not satisfied.",
      },
    ],
    projectTwoResultItems: [
      "Automated license start-date updates",
      "Improved handling of customer-name mismatches",
      "Simplified exception review",
      "Reduced repetitive manual verification work",
    ],
    projectTwoDemoText:
      "Automation flow from email review to license start-date update",
    projectThreeTitle: "Job Posting Web Scraping Automation",
    projectThreeSummaryBody:
      "An automation project that collects job posting data from a web board, organizes the result data, and stores it automatically.",
    projectThreeProblemBody:
      "Regional job postings had to be searched manually on a web board, moving across multiple pages to review and organize the required information repeatedly.",
    projectThreeApproachBody:
      "The process was designed to search postings that match the required conditions automatically, move through pages sequentially, collect the necessary information, and save it into Excel without duplicates.",
    projectThreeImplementationPoints: [
      {
        title: "1. Search conditions and page-loop handling",
        body: "After applying regional search conditions, the repeat range was calculated from the total number of items in the combo box so that multiple pages could be explored in sequence.",
      },
      {
        title: "2. Dynamic page navigation and data organization",
        body: "The page number was reflected in DOMXPath for dynamic navigation, and the collected posting data was stored in Excel without duplicates.",
      },
    ],
    projectThreeResultItems: [
      "Automated repetitive job-post lookup and organization",
      "Handled multi-page navigation in a consistent flow",
      "Simplified data organization",
      "Improved efficiency in web-based information collection",
    ],
    projectThreeDemoText:
      "Automation flow from search to job-post collection and storage",
    learnedTitle: "What I Learned",
    learnedCards: [
      {
        title: "The importance of automation that can run reliably",
        body: "I learned that automation should not only run once, but also remain stable across repeated runs and exception cases.",
      },
      {
        title: "The importance of clear condition design",
        body: "I learned that even small differences in date rules, customer identification, or stop conditions can affect the entire result, so defining conditions clearly is important.",
      },
      {
        title: "The importance of improvements with maintenance in mind",
        body: "Rather than simply copying the existing process, improving inefficient parts such as UI dependency or repeated calculations led to more practical automation.",
      },
    ],
  },
} as const;

function ProjectSubsection({
  title,
  children,
  labelClassName,
}: {
  title: string;
  children: ReactNode;
  labelClassName?: string;
}) {
  return (
    <div className="space-y-4">
      <p
        className={`font-en text-sm font-semibold uppercase tracking-[0.14em] text-amber-700 ${labelClassName ?? ""}`.trim()}
      >
        {title}
      </p>
      <div className="text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
        {children}
      </div>
    </div>
  );
}

function ProjectPlaceholderCard({
  number,
  title,
  summaryLabel,
  summaryBody,
  problemLabel,
  problemBody,
  approachLabel,
  approachBody,
  implementationLabel,
  implementationPoints,
  resultLabel,
  resultItems,
  demoLabel,
  demoText,
  demoSrc,
  demoCaption,
}: {
  number: string;
  title: string;
  summaryLabel: string;
  summaryBody: string;
  problemLabel: string;
  problemBody: string;
  approachLabel: string;
  approachBody: string;
  implementationLabel: string;
  implementationPoints: readonly { title: string; body: string }[];
  resultLabel: string;
  resultItems: readonly string[];
  demoLabel: string;
  demoText: string;
  demoSrc?: string;
  demoCaption?: string;
}) {
  return (
    <article className="rounded-[1.75rem] border border-[#d8ccb4] bg-[#f7efe2] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <p className="font-en text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
        {number}
      </p>
      <h2 className="mt-3 text-[1.8rem] font-semibold tracking-tight text-zinc-950 sm:text-[2.1rem]">
        {title}
      </h2>

      <div className="mt-12 space-y-16">
        <div className="space-y-6">
          <p className="text-[1.45rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.7rem]">
            {summaryLabel}
          </p>
          <p className="text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
            {summaryBody}
          </p>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
            <div className="space-y-3 rounded-[1.2rem] border border-[#d8ccb4] bg-[#fffdf8] p-5">
              <p className="font-en text-[1.02rem] font-semibold uppercase tracking-[0.14em] text-amber-700 sm:text-[1.08rem]">
                {problemLabel}
              </p>
              <p className="text-[0.98rem] leading-7 text-[#4f463d] sm:text-[1.03rem]">
                {problemBody}
              </p>
            </div>
            <div className="hidden items-center justify-center lg:flex">
              <span className="font-en text-[2.2rem] font-bold leading-none text-amber-700">
                &rarr;
              </span>
            </div>
            <div className="space-y-3 rounded-[1.2rem] border border-[#d8ccb4] bg-[#fffdf8] p-5">
              <p className="font-en text-[1.02rem] font-semibold uppercase tracking-[0.14em] text-amber-700 sm:text-[1.08rem]">
                {approachLabel}
              </p>
              <p className="text-[0.98rem] leading-7 text-[#4f463d] sm:text-[1.03rem]">
                {approachBody}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-[1.45rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.7rem]">
            {implementationLabel}
          </p>
          <div className="grid gap-4 lg:grid-cols-2">
            {implementationPoints.map((point) => {
              const [num, ...rest] = point.title.split(" ");
              const restTitle = rest.join(" ");

              return (
                <div
                  key={`${number}-${point.title}`}
                  className="rounded-[1.2rem] border border-[#d8ccb4] bg-[#fffdf8] p-5"
                >
                  <div className="flex items-center gap-3">
                    <p className="font-en text-[1.4rem] font-bold tracking-[0.06em] text-amber-700 sm:text-[1.55rem]">
                      {num}
                    </p>
                    <p className="text-[1.08rem] font-semibold leading-7 text-zinc-950 sm:text-[1.14rem]">
                      {restTitle}
                    </p>
                  </div>
                  <p className="mt-3 text-[0.98rem] leading-7 text-[#4f463d] sm:text-[1.03rem]">
                    {point.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-[1.45rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.7rem]">
            {resultLabel}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {resultItems.map((item) => (
              <div
                key={`${number}-${item}`}
                className="rounded-[1rem] border border-[#d8ccb4] bg-[#fffdf8] px-4 py-3 text-center text-zinc-950"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-[1.45rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.7rem]">
            {demoLabel}
          </p>
          {demoSrc ? (
            <div className="space-y-4">
              <div className="mx-auto max-w-4xl overflow-hidden rounded-[1.35rem] bg-black">
                <video controls preload="metadata" className="block w-full">
                  <source src={demoSrc} type="video/mp4" />
                </video>
              </div>
              {demoCaption ? (
                <p className="text-center text-[1rem] leading-8 text-[#6b5f52] sm:text-[1.05rem]">
                  {demoCaption}
                </p>
              ) : null}
            </div>
          ) : (
            <div className="rounded-[1.35rem] border-2 border-dashed border-[#d8ccb4] bg-[#fffdf8] px-6 py-10 text-center text-[#6b5f52]">
              {demoText}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function RPAAutomationCaseStudy() {
  const { locale } = useLocale();
  const isKr = locale === "kr";
  const text = isKr ? copy.kr : copy.en;

  const techStackGroups = [
    {
      title: "Automation",
      items: ["Automation Anywhere A360"],
    },
    {
      title: "Data / Collaboration",
      items: ["Excel", "Outlook", "SharePoint"],
    },
    {
      title: "Web",
      items: ["XPath", "Web Automation"],
    },
  ];

  return (
    <main
      lang={isKr ? "ko" : "en"}
      className="bg-[#F3EBDD] text-zinc-950"
      style={{ fontFamily: "var(--font-space-grotesk), var(--font-orbit), sans-serif" }}
    >
      <div className="mx-auto flex max-w-[88rem] flex-col gap-24 px-6 pb-24 pt-32 sm:px-10 lg:px-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 transition-colors hover:text-amber-700"
        >
          <span aria-hidden="true">&larr;</span>
          {text.back}
        </Link>

        <section className="space-y-14">
          <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:items-start">
            <div className="-mt-8 space-y-6 sm:-mt-9">
              <p className="font-en text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
                {text.eyebrow}
              </p>
              <h1
                lang={isKr ? "ko" : "en"}
                className={`${isKr ? "font-ko break-keep" : "font-en"} mt-3 max-w-5xl text-[clamp(3.1rem,7.8vw,6.6rem)] font-normal leading-none tracking-tight text-zinc-950`}
                style={{ wordBreak: "keep-all", overflowWrap: "normal" }}
              >
                {text.title}
              </h1>
              <p
                lang={isKr ? "ko" : "en"}
                className={`${isKr ? "font-ko break-keep" : "font-en"} break-keep max-w-[44rem] text-[clamp(1.18rem,2.05vw,2.02rem)] font-medium leading-[1.65] text-zinc-950`}
                style={{ wordBreak: "keep-all", overflowWrap: "normal" }}
              >
                {text.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-zinc-950">
                {text.meta.map((item) => (
                  <span
                    key={item}
                    className={`${isKr ? "font-ko break-keep" : "font-en"} rounded-full border-2 border-zinc-950 bg-[#f8f1e6] px-4 py-2`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-6 sm:pt-7">
              <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-zinc-950 sm:text-2xl">
                {text.techSkills}
              </p>
              <div className="space-y-5">
                {techStackGroups.map((group) => (
                  <div key={group.title}>
                    <p className="font-en text-sm font-semibold uppercase tracking-[0.14em] text-amber-700">
                      {group.title}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={`${group.title}-${item}`}
                          className="font-en border border-zinc-950 bg-transparent px-3 py-2 text-sm text-[#4f463d]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-12">
          <article className="rounded-[1.75rem] border border-[#d8ccb4] bg-[#f7efe2] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <p className="font-en text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              {text.projectSectionTitle}
            </p>
            <h2
              lang={isKr ? "ko" : "en"}
              className={`${isKr ? "font-ko break-keep" : "font-en"} mt-3 text-[1.8rem] font-semibold tracking-tight text-zinc-950 sm:text-[2.1rem]`}
            >
              {text.projectTitle}
            </h2>

            <div className="mt-12 space-y-16">
              <div className="space-y-6">
                <p className="text-[1.45rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.7rem]">
                  {text.projectSummaryLabel}
                </p>
                <p
                  className={`${isKr ? "font-ko break-keep" : "font-en"} text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]`}
                >
                  {text.projectSummaryBody}
                </p>
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
                  <div className="space-y-3 rounded-[1.2rem] border border-[#d8ccb4] bg-[#fffdf8] p-5">
                    <p className="font-en text-[1.02rem] font-semibold uppercase tracking-[0.14em] text-amber-700 sm:text-[1.08rem]">
                      {text.problemSubLabel}
                    </p>
                    <p
                      className={`${isKr ? "font-ko break-keep" : "font-en"} text-[0.98rem] leading-7 text-[#4f463d] sm:text-[1.03rem]`}
                    >
                      {text.problemBody}
                    </p>
                  </div>
                  <div className="hidden items-center justify-center lg:flex">
                    <span className="font-en text-[2.2rem] font-bold leading-none text-amber-700">
                      &rarr;
                    </span>
                  </div>
                  <div className="space-y-3 rounded-[1.2rem] border border-[#d8ccb4] bg-[#fffdf8] p-5">
                    <p className="font-en text-[1.02rem] font-semibold uppercase tracking-[0.14em] text-amber-700 sm:text-[1.08rem]">
                      {text.approachSubLabel}
                    </p>
                    <p
                      className={`${isKr ? "font-ko break-keep" : "font-en"} text-[0.98rem] leading-7 text-[#4f463d] sm:text-[1.03rem]`}
                    >
                      {text.approachBody}
                    </p>
                  </div>
                </div>
              </div>

              <ProjectSubsection title={text.implementationLabel} labelClassName="hidden">
                <div className="space-y-5">
                  <p className="text-[1.45rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.7rem]">
                    {text.implementationLabel}
                  </p>
                  <div className="grid gap-4 lg:grid-cols-2">
                    {text.implementationPoints.map((point) => {
                      const [num, ...rest] = point.title.split(" ");
                      const restTitle = rest.join(" ");
                      return (
                        <div
                          key={point.title}
                          className="rounded-[1.2rem] border border-[#d8ccb4] bg-[#fffdf8] p-5"
                        >
                          <div className="flex items-center gap-3">
                            <p className="font-en text-[1.4rem] font-bold tracking-[0.06em] text-amber-700 sm:text-[1.55rem]">
                              {num}
                            </p>
                            <p className="text-[1.08rem] font-semibold leading-7 text-zinc-950 sm:text-[1.14rem]">
                              {restTitle}
                            </p>
                          </div>
                          <p
                            className={`${isKr ? "font-ko break-keep" : "font-en"} mt-3 text-[0.98rem] leading-7 text-[#4f463d] sm:text-[1.03rem]`}
                          >
                            {point.body}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ProjectSubsection>

              <ProjectSubsection title={text.resultLabel} labelClassName="hidden">
                <div className="space-y-5">
                  <p className="text-[1.45rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.7rem]">
                    {text.resultLabel}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {text.resultItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1rem] border border-[#d8ccb4] bg-[#fffdf8] px-4 py-3 text-center text-zinc-950"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </ProjectSubsection>

              <ProjectSubsection title={text.imageLabel} labelClassName="hidden">
                <div className="space-y-4">
                  <p className="text-[1.45rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.7rem]">
                    {text.imageLabel}
                  </p>
                  <div className="mx-auto max-w-4xl overflow-hidden rounded-[1.35rem] bg-black">
                    <video controls preload="metadata" className="block w-full">
                      <source src="/images/rpa-result1.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <p className="text-center text-[1rem] leading-8 text-[#6b5f52] sm:text-[1.05rem]">
                    {text.imageCaption}
                  </p>
                </div>
              </ProjectSubsection>
            </div>
          </article>

          <ProjectPlaceholderCard
            number="Project 02"
            title={text.projectTwoTitle}
            summaryLabel={text.projectSummaryLabel}
            summaryBody={text.projectTwoSummaryBody}
            problemLabel={text.problemSubLabel}
            problemBody={text.projectTwoProblemBody}
            approachLabel={text.approachSubLabel}
            approachBody={text.projectTwoApproachBody}
            implementationLabel={text.implementationLabel}
            implementationPoints={text.projectTwoImplementationPoints}
            resultLabel={text.resultLabel}
            resultItems={text.projectTwoResultItems}
            demoLabel={text.imageLabel}
            demoText={text.projectTwoDemoText}
            demoSrc="/images/rpa-result2.mp4"
            demoCaption={text.projectTwoDemoText}
          />

          <ProjectPlaceholderCard
            number="Project 03"
            title={text.projectThreeTitle}
            summaryLabel={text.projectSummaryLabel}
            summaryBody={text.projectThreeSummaryBody}
            problemLabel={text.problemSubLabel}
            problemBody={text.projectThreeProblemBody}
            approachLabel={text.approachSubLabel}
            approachBody={text.projectThreeApproachBody}
            implementationLabel={text.implementationLabel}
            implementationPoints={text.projectThreeImplementationPoints}
            resultLabel={text.resultLabel}
            resultItems={text.projectThreeResultItems}
            demoLabel={text.imageLabel}
            demoText={text.projectThreeDemoText}
            demoSrc="/images/rpa-result3.mp4"
            demoCaption={text.projectThreeDemoText}
          />
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-center text-[2.3rem] font-semibold tracking-tight text-zinc-950 sm:text-[2.85rem]">
              {text.learnedTitle}
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {text.learnedCards.map((card, index) => {
              const rotations = ["rotate-[1.5deg]", "rotate-[-1.2deg]", "rotate-[1deg]"];
              const tapeRotations = ["rotate-[-2deg]", "rotate-[3deg]", "rotate-[-1deg]"];

              return (
                <div
                  key={card.title}
                  className={`relative mt-3 rounded-[4px] bg-[#FFFDF7] p-8 shadow-[0_4px_16px_rgba(0,0,0,0.10)] ${rotations[index]}`}
                >
                  <div
                    className={`absolute left-1/2 top-0 h-[18px] w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-[rgba(251,191,36,0.35)] ${tapeRotations[index]}`}
                  />
                  <p className="text-[1.7rem] font-bold text-amber-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mb-3 mt-2 text-xl font-bold text-[#1a1a1a]">
                    {card.title}
                  </p>
                  <p className="text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                    {card.body}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
