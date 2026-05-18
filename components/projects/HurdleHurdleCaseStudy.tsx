"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { useLocale } from "@/components/providers/LocaleProvider";
import consecutiveZeroSalesDays from "@/images/hurdlehurdle-consecutivezerosalesdays.png";
import singleRegressionModelLimitation from "@/images/hurdlehurdle-singleregressionmodellimitation.png";
import zeroSalesRatioDistribution from "@/images/hurdlehurdle-zero sales ratio distribution.png";

const summaryCardsKr = [
  {
    label: "Problem",
    title: "판매량 0이 많은 수요 데이터",
    body: "메뉴별 판매량이 자주 0으로 나타나 단순 회귀 모델이 실제 수요 변동을 충분히 따라가기 어려웠습니다.",
  },
  {
    label: "Approach",
    title: "예측 문제를 두 단계로 분리",
    body: "먼저 판매 발생 여부를 예측하고, 판매가 발생한 경우의 수량을 별도로 예측하는 Hurdle Model 구조로 설계했습니다.",
  },
  {
    label: "Result",
    title: "SMAPE 0.4598",
    body: "Weather ON Hurdle Model이 가장 낮은 SMAPE를 기록했고, AWS AI School 1기 내 1위 성과로 이어졌습니다.",
  },
];

const summaryCardsEn = [
  {
    label: "Problem",
    title: "Demand data with many zero sales",
    body: "Menu-level sales frequently dropped to zero, which made a single regression model struggle to follow the actual demand variation.",
  },
  {
    label: "Approach",
    title: "Split the prediction into two steps",
    body: "I structured the problem as a Hurdle Model: first predicting whether a menu item would sell, then estimating the sales volume only when a sale was expected.",
  },
  {
    label: "Result",
    title: "SMAPE 0.4598",
    body: "The Weather ON Hurdle Model achieved the lowest SMAPE and ranked 1st by SMAPE in AWS AI School Cohort 1.",
  },
];

const edaFindingsKr = [
  {
    label: "Observation 01",
    title: "판매량 0이 예외가 아니라 구조적 패턴",
    image: zeroSalesRatioDistribution,
    caption: "Zero Sales Ratio Distribution",
    metrics: [
      ["평균", "52.6%"],
      ["중앙값", "56.4%"],
      ["절반 이상 0인 메뉴", "109개"],
    ],
    observation:
      "메뉴별 Zero Sales Ratio의 평균과 중앙값이 모두 50%를 넘었습니다. 판매량 0은 일부 메뉴의 이상치가 아니라 데이터 전반에 반복되는 운영 패턴으로 보였습니다.",
    decision:
      "0을 제거하거나 평균으로 메우지 않고, 판매 발생 여부 자체를 별도의 예측 대상으로 분리했습니다.",
  },
  {
    label: "Observation 02",
    title: "무판매가 하루 단위 이벤트로 끝나지 않음",
    image: consecutiveZeroSalesDays,
    caption: "Consecutive Zero Sales Days",
    metrics: [
      ["7일 이상 연속 무판매", "1,030개"],
      ["분석 관점", "상태 지속성"],
    ],
    observation:
      "무판매가 하루 단위로 흩어진 것이 아니라 여러 날 연속되는 구간이 많았습니다. 이는 메뉴가 일시적으로 팔리지 않는 수준을 넘어 활성/비활성 상태가 이어질 수 있음을 보여줍니다.",
    decision:
      "최근 연속 무판매 일수와 최근 판매 발생 비율을 Operational Feature로 추가했습니다.",
  },
  {
    label: "Modeling Decision",
    title: "단일 회귀보다 2단계 예측 구조가 적합",
    image: singleRegressionModelLimitation,
    caption: "Single Regression Model Limitation",
    metrics: [
      ["관찰된 한계", "평균 수렴"],
      ["선택한 구조", "Hurdle Model"],
    ],
    observation:
      "단일 회귀 모델은 실제 판매량의 분산을 충분히 따라가지 못하고 평균 근처로 예측이 눌렸습니다. 무판매와 고수요를 하나의 연속값으로만 설명하기 어려웠습니다.",
    decision:
      "판매 발생 여부를 먼저 분류하고, 판매가 발생한 경우의 수량만 별도 회귀로 예측하는 2단계 구조로 문제를 재정의했습니다.",
  },
];

const edaFindingsEn = [
  {
    label: "Observation 01",
    title: "Zero sales were a structural pattern, not an exception",
    image: zeroSalesRatioDistribution,
    caption: "Zero Sales Ratio Distribution",
    metrics: [
      ["Mean", "52.6%"],
      ["Median", "56.4%"],
      ["Menus above 50% zero sales", "109"],
    ],
    observation:
      "Both the mean and median Zero Sales Ratio were above 50%. Zero sales were not isolated outliers from a few menus, but a repeated operational pattern across the dataset.",
    decision:
      "Instead of dropping zeros or filling them with averages, I treated sales occurrence itself as a separate prediction target.",
  },
  {
    label: "Observation 02",
    title: "No-sale periods continued across multiple days",
    image: consecutiveZeroSalesDays,
    caption: "Consecutive Zero Sales Days",
    metrics: [
      ["No-sale runs of 7+ days", "1,030"],
      ["Analysis lens", "State persistence"],
    ],
    observation:
      "No-sale cases were not scattered as one-day events. Many appeared as consecutive periods, suggesting that a menu could remain in an active or inactive sales state over time.",
    decision:
      "I added operational features such as recent consecutive no-sale days and recent sales occurrence ratio.",
  },
  {
    label: "Modeling Decision",
    title: "A two-step prediction structure fit better than single regression",
    image: singleRegressionModelLimitation,
    caption: "Single Regression Model Limitation",
    metrics: [
      ["Observed issue", "Mean convergence"],
      ["Chosen structure", "Hurdle Model"],
    ],
    observation:
      "The single regression model failed to capture the spread of actual sales and pushed predictions toward the mean. No-sale cases and high-demand cases were hard to explain with one continuous target.",
    decision:
      "I redefined the task as a two-step problem: classify whether a sale would occur first, then regress the sales volume only for expected sales.",
  },
];

const featureCardsKr = [
  {
    title: "Calendar Features",
    features: "요일, 월, 공휴일, 공휴일 전후, 성수기 여부",
    why: "식음업장 수요는 주말, 휴일, 성수기처럼 반복되는 달력 패턴의 영향을 받기 때문에 기본 수요 리듬을 표현했습니다.",
  },
  {
    title: "Time Series Features",
    features: "Lag 1/7/14/28, Rolling Mean, Rolling Std",
    why: "최근 판매량과 주간 반복 패턴을 반영해, 메뉴별로 평소 어느 정도 팔렸는지와 변동성이 큰지를 모델이 볼 수 있게 했습니다.",
  },
  {
    title: "Weather Features",
    features: "평균기온, 최저기온, 최고기온, 일교차, 강수량, 강수 여부",
    why: "날씨가 방문객 행동과 메뉴 선택에 영향을 줄 수 있다고 보고, Weather ON/OFF 실험으로 실제 설명력을 비교했습니다.",
  },
  {
    title: "Operational Features",
    features: "연속 무판매 일수, 최근 판매 발생 비율, 장기 무판매 추정 플래그",
    why: "EDA에서 확인한 무판매 지속성을 모델에 전달하기 위해, 메뉴가 최근에 활성 상태였는지 비활성 상태였는지를 나타내는 피처를 추가했습니다.",
  },
];

const featureCardsEn = [
  {
    title: "Calendar Features",
    features: "Day of week, month, holidays, days around holidays, peak-season flag",
    why: "Resort F&B demand follows recurring calendar patterns such as weekends, holidays, and peak seasons, so these features captured the basic demand rhythm.",
  },
  {
    title: "Time Series Features",
    features: "Lag 1/7/14/28, rolling mean, rolling standard deviation",
    why: "These features let the model see each menu's recent sales level, weekly repetition, and volatility.",
  },
  {
    title: "Weather Features",
    features: "Average temperature, minimum temperature, maximum temperature, daily temperature range, rainfall, rain flag",
    why: "Weather could affect visitor behavior and menu choice, so I compared Weather ON/OFF experiments instead of assuming weather would always help.",
  },
  {
    title: "Operational Features",
    features: "Consecutive no-sale days, recent sales occurrence ratio, long no-sale flag",
    why: "To reflect the no-sale persistence found in EDA, I added features that describe whether a menu had recently been active or inactive.",
  },
];

const modelStagesKr = [
  {
    label: "1단계",
    title: "판매가 발생할까?",
    output: "판매 발생 확률",
    body: "특정 날짜에 해당 메뉴가 팔릴 가능성이 있는지 먼저 판단했습니다. 판매량 0이 많은 데이터에서는 수량을 바로 예측하기보다, 판매 발생 조건을 먼저 구분하는 편이 더 자연스러웠습니다.",
  },
  {
    label: "2단계",
    title: "팔린다면 얼마나 팔릴까?",
    output: "발생 시 판매량",
    body: "판매가 발생한 데이터만 따로 보고 판매량 규모를 예측했습니다. 소량 판매와 대량 판매가 섞여 있어, 판매량은 log1p 변환 후 학습하고 다시 원래 단위로 복원했습니다.",
  },
  {
    label: "결합",
    title: "두 예측을 어떻게 합칠까?",
    output: "Soft Gating",
    body: "판매 발생 확률을 판매량 예측값에 부드럽게 반영했습니다. 확률이 낮다고 바로 0으로 자르지 않아 예측값이 급격히 흔들리는 문제를 줄였습니다.",
  },
  {
    label: "비교 실험",
    title: "날씨 변수는 도움이 됐을까?",
    output: "Weather ON/OFF",
    body: "날씨 변수를 포함한 예측과 제외한 예측을 비교했습니다. 날씨가 항상 좋은 피처라고 가정하지 않고, 영업장 성격에 따라 다르게 작동하는지 확인했습니다.",
  },
];

const modelStagesEn = [
  {
    label: "Step 01",
    title: "Will this menu sell?",
    output: "Sale probability",
    body: "The first step estimated whether a menu item was likely to sell on a given date. With many zero-sales records, identifying the sales condition before predicting quantity was a more natural fit.",
  },
  {
    label: "Step 02",
    title: "If it sells, how much?",
    output: "Conditional sales volume",
    body: "For cases where sales occurred, I estimated the expected sales volume separately. Because small and large sales were mixed, the target was trained with log1p and restored to the original scale afterward.",
  },
  {
    label: "Combine",
    title: "How should the two outputs be combined?",
    output: "Soft Gating",
    body: "I applied the classifier probability as a smooth weight on the regression output. This avoided hard zero cutoffs and reduced abrupt jumps in predictions.",
  },
  {
    label: "Comparison",
    title: "Did weather features help?",
    output: "Weather ON/OFF",
    body: "I compared models with and without weather features. Rather than assuming weather was always useful, I checked whether it added signal for this operating context.",
  },
];

const pipelineStagesKr = [
  {
    label: "01",
    title: "시간 기준 분리",
    body: "과거로 학습하고 이후 기간으로 검증",
  },
  {
    label: "02",
    title: "모델 학습",
    body: "판매 발생 여부와 판매량 규모를 분리 학습",
  },
  {
    label: "03",
    title: "성능 검증",
    body: "Weighted SMAPE로 모델별 성능 비교",
  },
  {
    label: "04",
    title: "7일 예측",
    body: "+1일부터 +7일까지 순차 생성",
  },
  {
    label: "05",
    title: "후처리",
    body: "음수 제거, 정수 변환, 제출 형식 정리",
  },
];

const pipelineStagesEn = [
  {
    label: "01",
    title: "Time-based split",
    body: "Train on past data and validate on the following period",
  },
  {
    label: "02",
    title: "Model training",
    body: "Train sale occurrence and sales volume separately",
  },
  {
    label: "03",
    title: "Validation",
    body: "Compare models with Weighted SMAPE",
  },
  {
    label: "04",
    title: "7-day forecast",
    body: "Generate forecasts recursively from day +1 to day +7",
  },
  {
    label: "05",
    title: "Post-processing",
    body: "Remove negative values, convert to integers, and format the output",
  },
];

const learnedCardsKr = [
  {
    title: "Zero-Inflated 구조 진단 경험",
    body: "단일 회귀로 예측했더니 예측 표준편차가 15.94로 실제(58.64) 대비 크게 줄었습니다. 매출 0이 56%인 데이터 구조가 원인임을 분포 분석으로 확인했고, 성능 부진 시 튜닝보다 데이터 구조를 먼저 진단해야 함을 배웠습니다.",
  },
  {
    title: "평가지표에 맞춘 손실함수 설계",
    body: "SMAPE가 0을 제외하고 비율로 동작하는 점에서 출발해, log1p 변환(왜도 7.729→0.913)에 RMSE를 결합하면 로그 공간의 비율 오차를 최소화함을 정리했습니다. 평가지표 특성에 맞춰 타깃 변환과 손실함수를 설계할 수 있음을 배웠습니다.",
  },
  {
    title: "Hurdle 구조와 Soft Gating 적용",
    body: "2단계 Hurdle Model을 설계했으나 단순 임계값 분리 시 저빈도 메뉴에서 0 예측이 과하고 예측값이 불연속적으로 튀었습니다. Soft Gating으로 변형해 해결하며, 검증된 구조도 실제 데이터에서 깨지는 지점을 확인하고 수정해야 함을 배웠습니다.",
  },
];

const learnedCardsEn = [
  {
    title: "Diagnosing a Zero-Inflated Data Structure",
    body: "A single regression model produced predictions with a standard deviation of 15.94, far below the actual 58.64. Distribution analysis showed that the issue came from the data structure, where 56% of sales records were zero. I learned to diagnose the data-generating structure before tuning the model when performance drops.",
  },
  {
    title: "Designing Loss Around the Evaluation Metric",
    body: "Starting from the fact that SMAPE behaves as a ratio-based metric while excluding zeros, I organized why combining log1p transformation (skewness 7.729→0.913) with RMSE minimizes ratio-like error in log space. I learned that target transformation and loss design can be derived from the evaluation metric itself.",
  },
  {
    title: "Adapting Hurdle Modeling with Soft Gating",
    body: "The two-step Hurdle Model worked conceptually, but a hard threshold caused too many zero predictions for low-frequency menus and made outputs jump discontinuously. By replacing the hard cutoff with Soft Gating, I learned that even validated model structures need to be checked and adapted where they break on real data.",
  },
];

const results = [
  ["Baseline (MA7)", "0.8118"],
  ["Baseline (Lag7)", "0.9777"],
  ["Hurdle Model (Weather OFF)", "0.4817"],
  ["Hurdle Model (Weather ON)", "0.4598"],
  ["Ensemble (Store-weighted)", "0.4610"],
];

const pageText = {
  kr: {
    back: "프로젝트 목록으로",
    title: "리조트 F&B 수요 예측 모델링",
    subtitle: "메뉴 단위 주간 수요 예측을 위한 Hurdle Model 기반 ML 프로젝트",
    heroLines: [
      "리조트 식음업장의 메뉴 단위 주간 수요를 예측하기 위해",
      "Zero-Inflated 데이터 특성을 분석하고,",
      "Hurdle Model 기반 예측 구조를 설계한 팀 프로젝트입니다.",
    ],
    meta: ["팀: 허들허들", "팀원: 5명", "역할: 데이터 분석 및 모델링", "AWS AI School 1기 내 SMAPE 1위"],
    projectSummaryDescription:
      "판매량 0이 반복되는 운영 데이터를 분석해, 메뉴 단위 주간 수요 예측 문제를 Hurdle Model 기반 구조로 재정의했습니다.",
    edaTitle: "EDA: Zero-Inflated 데이터 문제 발견",
    edaDescription:
      "판매량 0이 얼마나 자주, 얼마나 오래 반복되는지 확인하고 단일 회귀 모델의 예측 한계와 비교했습니다. 이를 바탕으로 수요 예측 문제를 판매 발생 여부와 발생 시 판매량을 나누어 예측하는 구조로 재정의했습니다.",
    edaBridge: "두 관찰을 바탕으로 모델링 구조 결정",
    dataDescription:
      "전처리의 목표는 데이터를 깨끗하게 만드는 데서 끝나지 않고, 메뉴별 판매 패턴을 모델이 읽을 수 있는 신호로 바꾸는 것이었습니다. 각 피처 그룹은 EDA에서 확인한 수요 변동, 주기성, 무판매 지속성을 반영하도록 설계했습니다.",
    preprocessingTitle: "Data Preprocessing",
    preprocessingBody:
      "날짜와 메뉴 기준이 흔들리면 Lag/Rolling 피처가 틀어지기 때문에, 먼저 예측 가능한 시계열 테이블로 정리했습니다.",
    preprocessingItems: ["날짜 정렬", "메뉴 단위 시계열 구성", "결측 처리", "매출수량 타입 변환"],
    featureBody:
      "전처리된 시계열 위에 달력, 과거 판매 이력, 날씨, 무판매 지속성을 나타내는 피처를 구성했습니다.",
    modelDescription:
      "EDA에서 확인한 핵심은 판매량 0과 실제 판매량 규모가 서로 다른 성격의 문제라는 점이었습니다. 그래서 판매 발생 여부를 먼저 판단하고, 판매가 발생할 때의 수량만 별도로 예측하는 구조로 설계했습니다.",
    modelFlow: ["입력 피처", "판매 발생 여부 예측", "발생 시 판매량 예측", "Soft Gating으로 결합", "최종 예측값"],
    designPoint:
      "Zero-Inflated 데이터에서는 팔릴지와 팔린다면 얼마나 팔릴지가 서로 다른 판단입니다. 이 둘을 분리해 단일 회귀 모델의 평균 수렴 문제를 줄이고, 무판매 패턴을 더 자연스럽게 반영했습니다.",
    pipelineDescription:
      "학습과 검증은 점수를 한 번 확인하는 과정이 아니라, 실제 예측 상황을 최대한 비슷하게 재현하는 과정으로 설계했습니다. 시간 순서를 유지하고, 7일 예측을 하루씩 생성한 뒤 제출 가능한 형태로 정리했습니다.",
    validationLabels: [
      ["검증 방식", "Time-based Holdout"],
      ["평가 기준", "Weighted SMAPE"],
      ["예측 단위", "+1일부터 +7일까지"],
    ],
    resultDescription: "Baseline과 Hurdle Model 실험 결과를 SMAPE 기준으로 비교했습니다.",
    resultInterpretation:
      "단순 시계열 기반 Baseline은 판매량 0이 많은 데이터 구조를 충분히 반영하지 못했습니다. 반면 Hurdle Model은 판매 발생 여부와 판매량 규모를 분리해 예측함으로써 더 안정적인 성능을 보였습니다.",
    zoomLabel: "확대 보기",
  },
  en: {
    back: "Back to projects",
    title: "Resort F&B Demand Forecasting",
    subtitle: "A Hurdle Model-based ML project for weekly menu-level demand forecasting",
    heroLines: [
      "This team project forecasted weekly menu-level demand for a resort F&B operation.",
      "It started by analyzing the zero-inflated nature of the sales data,",
      "then redesigned the prediction flow around a Hurdle Model structure.",
    ],
    meta: ["Team: HurdleHurdle", "Team size: 5", "Role: Data analysis & modeling", "Ranked 1st by SMAPE in AWS AI School Cohort 1"],
    projectSummaryDescription:
      "I analyzed operational data with repeated zero sales and redefined weekly menu-level demand forecasting as a Hurdle Model-based prediction problem.",
    edaTitle: "EDA: Finding the Zero-Inflated Data Problem",
    edaDescription:
      "I checked how often and how long zero sales repeated, then compared that pattern with the limits of a single regression model. Based on this analysis, I redefined demand forecasting as two linked predictions: whether a sale would occur, and how much would sell when it did.",
    edaBridge: "Modeling structure derived from the two observations",
    dataDescription:
      "Preprocessing was not just about cleaning the data. The goal was to turn menu-level sales patterns into signals the model could use, with feature groups designed around demand variation, seasonality, and no-sale persistence found during EDA.",
    preprocessingTitle: "Data Preprocessing",
    preprocessingBody:
      "Because unstable date or menu keys would distort lag and rolling features, I first reshaped the data into a predictable menu-date time series.",
    preprocessingItems: ["Date sorting", "Menu-level time series setup", "Missing value handling", "Sales quantity type conversion"],
    featureBody:
      "On top of the preprocessed time series, I built features for calendar effects, past sales behavior, weather, and no-sale persistence.",
    modelDescription:
      "The key insight from EDA was that zero sales and positive sales volume were different types of signals. I designed the model to first estimate whether a sale would occur, then predict the quantity only when a sale was expected.",
    modelFlow: ["Input features", "Predict sale occurrence", "Predict conditional sales volume", "Combine with Soft Gating", "Final prediction"],
    designPoint:
      "In zero-inflated data, predicting whether an item will sell and predicting how much it will sell are separate decisions. Splitting the two helped reduce mean-converged regression outputs and better reflect no-sale patterns.",
    pipelineDescription:
      "Training and validation were designed to mirror the real forecasting setting, not just to check a score once. I preserved time order, generated day-by-day forecasts for seven days, and post-processed the output into a usable submission format.",
    validationLabels: [
      ["Validation", "Time-based Holdout"],
      ["Metric", "Weighted SMAPE"],
      ["Forecast horizon", "Day +1 to day +7"],
    ],
    resultDescription: "I compared the baseline and Hurdle Model experiments using SMAPE.",
    resultInterpretation:
      "The simple time-series baselines did not capture the zero-heavy data structure well. The Hurdle Model performed more reliably by separating sales occurrence from sales volume.",
    zoomLabel: "Open enlarged chart",
  },
};

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-4">
      <h2 className="break-keep text-[2.15rem] font-semibold tracking-tight text-zinc-950 sm:text-[2.75rem]">
        {title}
      </h2>
      <p className="w-full break-keep text-[1.05rem] leading-8 text-[#4f463d] sm:text-[1.15rem]">
        {description}
      </p>
    </div>
  );
}

function EdaFindingCard({
  finding,
  onZoom,
  zoomLabel,
  variant = "wide",
}: {
  finding: {
    label: string;
    title: string;
    image: StaticImageData;
    caption: string;
    metrics: string[][];
    observation: string;
    decision: string;
  };
  onZoom: (image: StaticImageData, alt: string) => void;
  zoomLabel: string;
  variant?: "compact" | "wide";
}) {
  const isCompact = variant === "compact";

  return (
    <article
      className={`grid gap-6 rounded-[1.35rem] border border-[#d8ccb4] bg-[#f7efe2] p-5 shadow-[0_10px_26px_rgba(0,0,0,0.04)] ${
        isCompact
          ? ""
          : "lg:grid-cols-[minmax(340px,1fr)_minmax(0,0.9fr)] lg:items-start"
      }`}
    >
      <div className="flex h-full flex-col">
        <p className="font-en text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
          {finding.label}
        </p>
        <h3 className="mt-3 break-keep text-[1.35rem] font-semibold leading-tight text-zinc-950 sm:text-[1.5rem]">
          {finding.title}
        </h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-[repeat(auto-fit,minmax(9.5rem,1fr))]">
          {finding.metrics.map(([label, value]) => (
            <div
              key={`${finding.label}-${label}`}
              className="rounded-[1rem] border border-[#d8ccb4] bg-[#fffdf8] px-4 py-3"
            >
              <p className="break-keep text-[0.82rem] font-semibold leading-5 text-[#6b5f52]">
                {label}
              </p>
              <p className="mt-1 whitespace-nowrap font-en text-[1.42rem] font-semibold tracking-tight text-amber-700">
                {value}
              </p>
            </div>
          ))}
        </div>
        {!isCompact ? (
          <div className="mt-5 space-y-4">
            <div>
              <p className="font-en text-xs font-bold uppercase tracking-[0.16em] text-zinc-950">
                What I saw
              </p>
              <p className="mt-2 break-keep text-[0.98rem] leading-7 text-[#4f463d]">
                {finding.observation}
              </p>
            </div>
            <div>
              <p className="font-en text-xs font-bold uppercase tracking-[0.16em] text-zinc-950">
                So I decided
              </p>
              <p className="mt-2 break-keep text-[0.98rem] leading-7 text-[#4f463d]">
                {finding.decision}
              </p>
            </div>
          </div>
        ) : null}
      </div>

      <figure className="flex flex-col rounded-[1.1rem] border border-[#d8ccb4] bg-[#fffdf8] p-3">
        <button
          type="button"
          onClick={() => onZoom(finding.image, finding.caption)}
          className="group flex cursor-zoom-in items-center justify-center rounded-[0.9rem] bg-white p-2 outline-none ring-0 transition hover:bg-[#faf6ef] focus-visible:ring-2 focus-visible:ring-amber-700"
          aria-label={`${finding.caption} ${zoomLabel}`}
        >
          <Image
            src={finding.image}
            alt={finding.caption}
            className={`h-auto w-full object-contain transition duration-300 group-hover:scale-[1.02] ${
              isCompact
                ? "max-h-[17rem] sm:max-h-[19rem] xl:max-h-[20rem]"
                : "max-h-[13.5rem] sm:max-h-[15rem] lg:max-h-[16rem]"
            }`}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </button>
        <figcaption className="mt-3 text-center font-en text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">
          {finding.caption}
        </figcaption>
      </figure>

      {isCompact ? (
        <div className="space-y-4">
          <div>
            <p className="font-en text-xs font-bold uppercase tracking-[0.16em] text-zinc-950">
              What I saw
            </p>
            <p className="mt-2 break-keep text-[0.98rem] leading-7 text-[#4f463d]">
              {finding.observation}
            </p>
          </div>
          <div>
            <p className="font-en text-xs font-bold uppercase tracking-[0.16em] text-zinc-950">
              So I decided
            </p>
            <p className="mt-2 break-keep text-[0.98rem] leading-7 text-[#4f463d]">
              {finding.decision}
            </p>
          </div>
        </div>
      ) : null}
    </article>
  );
}

function ModelStageCard({
  stage,
}: {
  stage: {
    label: string;
    title: string;
    output: string;
    body: string;
  };
}) {
  return (
    <article className="flex h-full flex-col border-t-2 border-zinc-950 pt-5">
      <p className="text-sm font-bold text-amber-700">
        {stage.label}
      </p>
      <h3 className="mt-2 break-keep text-[1.35rem] font-semibold leading-tight text-zinc-950">
        {stage.title}
      </h3>
      <p className="mt-3 w-fit border border-zinc-950 px-3 py-1 font-en text-[0.9rem] font-semibold text-zinc-950">
        {stage.output}
      </p>
      <p className="mt-4 break-keep text-[1rem] leading-8 text-[#4f463d]">
        {stage.body}
      </p>
    </article>
  );
}

function PipelineStageCard({
  stage,
}: {
  stage: {
    label: string;
    title: string;
    body: string;
  };
}) {
  return (
    <article className="flex min-h-0 flex-col rounded-[1.15rem] border border-[#d8ccb4] bg-[#fffdf8] p-5 shadow-[0_10px_26px_rgba(0,0,0,0.03)] xl:min-h-[10.8rem]">
      <p className="font-en text-sm font-bold tracking-[0.12em] text-amber-700">
        {stage.label}
      </p>
      <h3 className="mt-3 break-keep text-[1.16rem] font-semibold leading-tight text-zinc-950">
        {stage.title}
      </h3>
      <p className="mt-3 break-keep text-[0.96rem] leading-7 text-[#4f463d]">
        {stage.body}
      </p>
    </article>
  );
}

export default function HurdleHurdleCaseStudy() {
  const { locale } = useLocale();
  const isKr = locale === "kr";
  const [zoomedImage, setZoomedImage] = useState<{
    src: StaticImageData;
    alt: string;
  } | null>(null);
  const text = isKr ? pageText.kr : pageText.en;
  const summaryCards = isKr ? summaryCardsKr : summaryCardsEn;
  const edaFindings = isKr ? edaFindingsKr : edaFindingsEn;
  const featureCards = isKr ? featureCardsKr : featureCardsEn;
  const modelStages = isKr ? modelStagesKr : modelStagesEn;
  const pipelineStages = isKr ? pipelineStagesKr : pipelineStagesEn;
  const learnedCards = isKr ? learnedCardsKr : learnedCardsEn;
  const techSkills = ["Python", "Pandas", "NumPy", "LightGBM"];

  return (
    <main
      lang={isKr ? "ko" : "en"}
      className="bg-[#F3EBDD] text-zinc-950"
      style={{ fontFamily: "var(--font-space-grotesk), var(--font-orbit), sans-serif" }}
    >
      <div className="mx-auto flex max-w-[88rem] flex-col gap-20 px-6 pb-24 pt-32 sm:gap-24 sm:px-10 lg:px-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 transition-colors hover:text-amber-700"
        >
          <span aria-hidden="true">&larr;</span>
          {text.back}
        </Link>

        <section className="space-y-14">
          <div className="grid gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
            <div className="-mt-8 space-y-6 sm:-mt-9">
              <p className="font-en text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
                ML Project
              </p>
              <h1 className="mt-3 max-w-5xl break-keep text-[clamp(3rem,7vw,5.45rem)] font-normal leading-[1.04] tracking-tight text-zinc-950">
                {text.title}
              </h1>
              <p className="break-keep max-w-2xl text-[clamp(1rem,1.55vw,1.5rem)] font-medium leading-[1.55] text-zinc-950">
                {text.subtitle}
              </p>
              <p className="break-keep max-w-3xl text-[1.05rem] leading-8 text-[#4f463d] sm:text-[1.16rem]">
                {isKr
                  ? text.heroLines.map((line) => (
                      <Fragment key={line}>
                        {line}
                        <br />
                      </Fragment>
                    ))
                  : text.heroLines.join(" ")}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-zinc-950">
                {text.meta.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border-2 border-zinc-950 bg-[#f8f1e6] px-4 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="pt-1">
                <div className="font-en inline-flex items-center gap-2 text-[1.08rem] font-medium text-zinc-950 sm:text-[1.16rem]">
                  <a
                    href="https://github.com/jeegle16-alt/resort-fnb-demand-forecast"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-zinc-950"
                  >
                    🔗 GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-zinc-950 sm:text-2xl">
                Tech Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((skill) => (
                  <span
                    key={skill}
                    className="font-en border border-zinc-950 bg-transparent px-3 py-2 text-sm text-[#4f463d]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-10">
          <SectionTitle
            title="Project Summary"
            description={text.projectSummaryDescription}
          />
          <div className="grid items-stretch gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center">
            {summaryCards.map((card, index) => {
              const isResult = card.label === "Result";

              return (
                <Fragment key={card.label}>
                  <article className="flex h-full flex-col rounded-[1.35rem] border border-[#b8b1a3] bg-[#f7efe2] px-6 py-6">
                    <p className="font-en text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
                      {card.label}
                    </p>
                    <h3
                      className={`mt-4 break-keep font-semibold leading-tight text-zinc-950 ${
                        isResult ? "font-en text-[1.7rem] tracking-tight" : "text-[1.35rem]"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p className="mt-4 break-keep text-[1rem] leading-8 text-[#4f463d]">
                      {card.body}
                    </p>
                  </article>
                  {index !== summaryCards.length - 1 ? (
                    <div className="hidden font-en text-2xl font-semibold text-amber-700 lg:block">
                      →
                    </div>
                  ) : null}
                </Fragment>
              );
            })}
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-10">
          <SectionTitle
            title={text.edaTitle}
            description={text.edaDescription}
          />
          <div className="space-y-6">
            <div className="grid gap-6 xl:grid-cols-2">
              {edaFindings.slice(0, 2).map((finding) => (
                <EdaFindingCard
                  key={finding.label}
                  finding={finding}
                  onZoom={(src, alt) => setZoomedImage({ src, alt })}
                  zoomLabel={text.zoomLabel}
                  variant="compact"
                />
              ))}
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-[0.98rem] font-semibold text-[#4f463d]">
                <span aria-hidden="true" />
                <span className="font-en text-4xl leading-none text-amber-700" aria-hidden="true">
                  ↓
                </span>
                <span className="break-keep text-left">{text.edaBridge}</span>
              </div>
            </div>
            <EdaFindingCard
              finding={edaFindings[2]}
              onZoom={(src, alt) => setZoomedImage({ src, alt })}
              zoomLabel={text.zoomLabel}
            />
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-10">
          <SectionTitle
            title="Data Preprocessing & Feature Engineering"
            description={text.dataDescription}
          />
          <div className="grid gap-6 border-t border-[#d8ccb4] pt-6 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)]">
            <div>
              <p className="font-en text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                Phase 01
              </p>
              <h3 className="mt-3 break-keep text-[1.35rem] font-semibold leading-tight text-zinc-950">
                {text.preprocessingTitle}
              </h3>
              <p className="mt-3 break-keep text-[0.98rem] leading-7 text-[#4f463d]">
                {text.preprocessingBody}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {text.preprocessingItems.map((item) => (
                <div
                  key={item}
                  className="border-l-2 border-amber-700 bg-[#fffdf8] px-4 py-3 text-[0.96rem] font-semibold text-zinc-950"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 border-t border-[#d8ccb4] pt-6 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)]">
            <div>
              <p className="font-en text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                Phase 02
              </p>
              <h3 className="mt-3 break-keep text-[1.35rem] font-semibold leading-tight text-zinc-950">
                Feature Engineering
              </h3>
              <p className="mt-3 break-keep text-[0.98rem] leading-7 text-[#4f463d]">
                {text.featureBody}
              </p>
            </div>
            <div className="grid items-stretch gap-5 lg:grid-cols-2">
              {featureCards.map((card) => (
                <article
                  key={card.title}
                  className="flex h-full flex-col rounded-[1.1rem] border border-[#d8ccb4] bg-[#f7efe2] px-4 py-4"
                >
                  <h3 className="font-en text-[1rem] font-bold uppercase tracking-[0.08em] text-zinc-950">
                    {card.title}
                  </h3>
                  <div className="mt-4 grid gap-3">
                    <div>
                      <p className="font-en text-[0.78rem] font-bold uppercase tracking-[0.14em] text-amber-700">
                        Features
                      </p>
                      <p className="mt-2 break-keep text-[0.96rem] leading-7 text-[#4f463d]">
                        {card.features}
                      </p>
                    </div>
                    <div className="border-t border-[#d8ccb4] pt-3">
                      <p className="font-en text-[0.78rem] font-bold uppercase tracking-[0.14em] text-amber-700">
                        Why it matters
                      </p>
                      <p className="mt-2 break-keep text-[0.96rem] leading-7 text-[#4f463d]">
                        {card.why}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-10">
          <SectionTitle
            title="Model Design: Hurdle Model"
            description={text.modelDescription}
          />
          <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
            <div className="flex h-full flex-col rounded-[1.35rem] border border-[#d8ccb4] bg-[#fffdf8] p-6">
              <p className="font-en text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                Structure
              </p>
              <div className="mt-5 flex flex-1 flex-col justify-between gap-3">
                {text.modelFlow.map((step, index, steps) => (
                  <div key={step}>
                    <div className="rounded-[1rem] border border-[#d8ccb4] bg-[#f7efe2] px-4 py-4 text-center text-[1rem] font-semibold text-zinc-950">
                      {step}
                    </div>
                    {index !== steps.length - 1 ? (
                      <div className="py-2 text-center text-lg text-amber-700">&darr;</div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid h-full gap-6 md:grid-cols-2">
              {modelStages.map((stage) => (
                <ModelStageCard key={stage.title} stage={stage} />
              ))}
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-[#d8ccb4] bg-[#f7efe2] p-5">
            <p className="font-en text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
              Design Point
            </p>
            <p className="mt-3 break-keep text-[1rem] leading-8 text-[#4f463d]">
              {text.designPoint}
            </p>
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-10">
          <SectionTitle
            title="Training, Validation & Forecasting Pipeline"
            description={text.pipelineDescription}
          />
          <div className="rounded-[1.35rem] border border-[#d8ccb4] bg-[#f7efe2] p-5 sm:p-6">
            <div className="grid items-stretch gap-4 xl:grid-cols-[minmax(0,1fr)_1rem_minmax(0,1fr)_1rem_minmax(0,1fr)_1rem_minmax(0,1fr)_1rem_minmax(0,1fr)]">
              {pipelineStages.map((stage, index) => (
                <Fragment key={stage.label}>
                  <div>
                    <PipelineStageCard stage={stage} />
                  </div>
                  {index !== pipelineStages.length - 1 ? (
                    <div className="hidden items-center justify-center text-xl text-amber-700 xl:flex">
                      &rarr;
                    </div>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {text.validationLabels.map(([label, value]) => (
              <div
                key={label}
                className="rounded-[1.15rem] border border-[#d8ccb4] bg-[#fffdf8] px-5 py-4"
              >
                <p className="text-[0.92rem] font-semibold text-[#6b5f52]">
                  {label}
                </p>
                <p className="mt-1 break-keep font-en text-[1.05rem] font-semibold text-zinc-950">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-10">
          <SectionTitle
            title="Result"
            description={text.resultDescription}
          />
          <div className="space-y-8">
            <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-[1.25rem] border border-[#d8ccb4] bg-[#fffdf8]">
              <div className="grid grid-cols-[minmax(0,1fr)_120px] bg-[#f7efe2] px-6 py-4 font-en text-sm font-bold uppercase tracking-[0.16em] text-amber-700">
                <span>Model</span>
                <span className="text-right">SMAPE</span>
              </div>
              {results.map(([model, score]) => (
                <div
                  key={model}
                  className="grid grid-cols-[minmax(0,1fr)_120px] border-t border-[#eee6da] px-6 py-4"
                >
                  <span className="font-en text-[1rem] font-semibold text-zinc-950">
                    {model}
                  </span>
                  <span className="font-en text-right text-[1rem] font-semibold text-[#4f463d]">
                    {score}
                  </span>
                </div>
              ))}
            </div>
            <p className="mx-auto max-w-4xl break-keep rounded-[1.25rem] border border-[#eadcc4] bg-[#f7efe2] px-5 py-4 text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.08rem]">
              {text.resultInterpretation}
            </p>
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-12">
          <h2 className="text-center text-[2.3rem] font-semibold tracking-tight text-zinc-950 sm:text-[2.85rem]">
            What I Learned
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {learnedCards.map((card, index) => (
              <article
                key={card.title}
                className="relative mt-3 rounded-[4px] bg-[#FFFDF7] p-7 shadow-[0_4px_16px_rgba(0,0,0,0.10)]"
              >
                <div className="absolute left-1/2 top-0 h-[18px] w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-[rgba(251,191,36,0.35)]" />
                <p className="font-en text-[1.7rem] font-bold text-amber-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 mb-3 break-keep text-xl font-bold text-[#1a1a1a]">
                  {card.title}
                </h3>
                <p className="break-keep text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.08rem]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {zoomedImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/72 px-5 py-10"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative max-h-[88vh] max-w-[92vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setZoomedImage(null)}
              className="absolute -top-12 right-0 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Close
            </button>
            <Image
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              className="max-h-[88vh] w-auto max-w-[92vw] rounded-[1rem] border border-white/25 bg-white object-contain"
              sizes="92vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}
