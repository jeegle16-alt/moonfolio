"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/components/providers/LocaleProvider";

const copy = {
  kr: {
    back: "프로젝트 목록으로",
    eyebrow: "ML PROJECT",
    title: "WING IT",
    subtitle:
      "항공권 가격 흐름을 예측해, 향후 30일 기준 가장 유리한 구매 시점을 추천하는 ML 서비스",
    meta: ["팀 프로젝트", "팀원: 3명", "핵심 로직 개별 구현"],
    links: {
      github: "🔗 GitHub",
      demo: "🎥 Demo",
    },
    techSkills: "Tech Skills",
    projectSummaryDescription:
      "이 프로젝트의 문제 배경과 해결 방식, 핵심 아이디어를 간단히 정리했습니다.",
    whyTitle: "Why We Need",
    whyCards: [
      {
        title: "구매 시점을 판단하기 어려움",
        body: "항공권 가격은 시점에 따라 계속 변하지만, 사용자는 지금 구매할지 기다릴지 판단할 근거를 얻기 어렵습니다.",
      },
      {
        title: "현재 가격 비교만으로는 부족함",
        body: "기존 서비스는 현재 시점의 가격 비교에는 유용하지만, 앞으로 더 저렴해질 가능성까지는 충분히 알려주지 못합니다.",
      },
      {
        title: "미래 흐름 기반 추천의 필요",
        body: "단순 조회를 넘어, 향후 가격 흐름을 예측하고 ‘언제 사는 것이 유리한지’를 안내하는 서비스가 필요했습니다.",
      },
    ],
    approachTitle: "Our Approach",
    approachBlocks: [
      {
        number: "01",
        title: "데이터 및 피처 구성",
        body: "노선, 출발일, 구매 시점 데이터를 정리하고 시간대, 출발 임박도, 가격 추세 기반 피처를 구성했습니다.",
      },
      {
        number: "02",
        title: "모델 학습 및 파이프라인화",
        body: "XGBoost 기반 가격 예측 모델을 학습하고, 전처리부터 평가·배포까지 SageMaker Pipeline으로 자동화했습니다.",
      },
      {
        number: "03",
        title: "구매 타이밍 추천",
        body: "향후 30일 후보 시점별 예측 가격을 계산해 가장 유리한 구매 시점 Top 3와 가격 트렌드를 제공합니다.",
      },
    ],
    architectureDescription:
      "사용자 요청부터 실시간 추론 결과 반환까지의 흐름과, 학습·배포를 자동화한 ML 파이프라인 구조를 함께 담았습니다.",
    architectureCards: [
      {
        title: "Frontend",
        flow: "CloudFront → S3 (Static Site)",
        body: "정적 웹 페이지로 빠르게 프로토타입을 배포하고, 추론 결과를 추천 카드와 가격 트렌드 차트 형태로 시각화했습니다.",
      },
      {
        title: "Backend",
        flow: "API Gateway → Lambda → SageMaker Endpoint",
        body: "Lambda에서 사용자 입력을 검증하고 30일 구매 후보를 생성한 뒤, SageMaker Endpoint 추론 결과를 가공해 JSON 형태로 반환하도록 구성했습니다.",
      },
      {
        title: "ML Pipeline",
        flow: "SageMaker Pipeline",
        body: "전처리, 학습, 평가, 등록, 배포 단계를 자동화하고, MLflow로 실험 결과와 모델 버전을 추적할 수 있도록 구성했습니다.",
      },
      {
        title: "Data",
        flow: "S3 Dataset & Artifacts",
        body: "원천 데이터, 전처리 결과, 모델 아티팩트를 계층적으로 저장해 학습과 서빙 과정의 일관성과 재현성을 확보했습니다.",
      },
    ],
    coreImplementationDescription:
      "모델 학습에서 끝나지 않고, 추천 로직과 실시간 추론 흐름까지 하나의 서비스로 연결했습니다.",
    coreBlocks: [
      {
        title: "Prediction & Recommendation",
        summary: "예측 결과를 실제 구매 시점 추천으로 이어지게 만들었습니다.",
        body: "노선, 출발일, 구매 시점 데이터를 바탕으로 학습 데이터를 정리하고, 출발까지 남은 일수, 시간대, 최근 가격 추세처럼 가격 변화와 관련된 정보를 피처로 반영했습니다. 추론 단계에서는 향후 30일의 후보 시점을 만든 뒤 각 시점의 예상 가격을 계산하고, 그 결과를 비교해 구매 시점 Top 3와 가격 흐름을 함께 보여주도록 구성했습니다.",
        layout: "text-left",
      },
      {
        title: "Pipeline & Tracking",
        summary: "학습부터 배포까지의 흐름을 반복 가능하게 정리했습니다.",
        body: "전처리, 학습, 평가, 등록, 배포 단계를 SageMaker Pipeline으로 묶어 한 번의 흐름으로 관리할 수 있게 구성했습니다. 실험별 파라미터와 결과, 모델 아티팩트는 MLflow로 함께 기록해 다시 확인하거나 비교하기 쉽도록 정리했습니다.",
        layout: "text-top",
      },
      {
        title: "Serving Flow",
        summary: "실시간 요청을 처리할 수 있는 추론 구조로 연결했습니다.",
        body: "프론트엔드 요청은 API Gateway와 Lambda를 거쳐 SageMaker Endpoint로 전달되도록 구성했습니다. Lambda에서는 입력값을 정리하고 후보 시점을 만든 뒤, Endpoint 추론 결과를 받아 화면에서 바로 사용할 수 있는 응답 형태로 가공하도록 나눴습니다.",
        layout: "image-left",
      },
    ],
    learnedDescription:
      "프로젝트를 진행하며 모델 성능뿐 아니라, 데이터·배포·서빙까지 연결되는 전체 ML 시스템 관점을 배웠습니다.",
    learnedCards: [
      {
        title: "End-to-End MLOps 흐름 설계",
        body: "모델 학습에서 끝나는 것이 아니라, 전처리 산출물 관리, 배포, API 서빙까지 이어지는 전체 흐름을 설계하는 경험을 했습니다.",
      },
      {
        title: "운영 안정성을 위한 구조의 중요성",
        body: "S3 아티팩트 관리, MLflow 실험 추적, CloudWatch 로그 확인을 통해 재현성과 디버깅 용이성이 얼마나 중요한지 체감했습니다.",
      },
    ],
  },
  en: {
    back: "Back to projects",
    eyebrow: "ML PROJECT",
    title: "WING IT",
    subtitle:
      "An ML service that predicts airfare movement and recommends the most favorable buying windows across the next 30 days.",
    meta: ["Team Project", "3 Members", "Independently Built Core Logic"],
    links: {
      github: "🔗 GitHub",
      demo: "🎥 Demo",
    },
    techSkills: "Tech Skills",
    projectSummaryDescription:
      "This section briefly summarizes the project's problem background, solution approach, and core idea.",
    whyTitle: "Why We Need",
    whyCards: [
      {
        title: "Hard to judge when to buy",
        body: "Airfare keeps changing over time, but users rarely have a clear basis for deciding whether to buy now or wait longer.",
      },
      {
        title: "Current price comparison is not enough",
        body: "Existing services are useful for comparing current prices, but they do not clearly show whether prices may become cheaper in the near future.",
      },
      {
        title: "A need for future-flow recommendations",
        body: "Beyond simple search, users need guidance on when buying is most favorable based on the predicted direction of future prices.",
      },
    ],
    approachTitle: "Our Approach",
    approachBlocks: [
      {
        number: "01",
        title: "Data & Feature Design",
        body: "Route, departure date, and purchase timing data were organized into features around time, departure urgency, and price trend signals.",
      },
      {
        number: "02",
        title: "Model Training & Pipeline",
        body: "An XGBoost-based price prediction model was trained, and the full path from preprocessing to evaluation and deployment was automated through SageMaker Pipeline.",
      },
      {
        number: "03",
        title: "Timing Recommendation",
        body: "Predicted prices across the next 30 candidate days are scored to return the top three buying windows alongside the projected trend.",
      },
    ],
    architectureDescription:
      "This section covers both the flow from user request to the real-time inference result and the ML pipeline that automates training and deployment.",
    architectureCards: [
      {
        title: "Frontend",
        flow: "CloudFront → S3 (Static Site)",
        body: "A static web application was deployed quickly for prototyping, and prediction outputs were visualized through recommendation cards and a 30-day price trend chart.",
      },
      {
        title: "Backend",
        flow: "API Gateway → Lambda → SageMaker Endpoint",
        body: "Lambda validates user input, generates 30-day candidate windows, and reshapes SageMaker Endpoint outputs into a JSON response for the client.",
      },
      {
        title: "ML Pipeline",
        flow: "SageMaker Pipeline",
        body: "Preprocessing, training, evaluation, registration, and deployment were automated, while MLflow tracked experiment outputs and model versions.",
      },
      {
        title: "Data",
        flow: "S3 Dataset & Artifacts",
        body: "Raw data, processed datasets, and model artifacts were stored hierarchically in S3 to keep training and serving reproducible and consistent.",
      },
    ],
    coreImplementationDescription:
      "The implementation connects prediction logic with the real-time inference flow to form a single service.",
    coreBlocks: [
      {
        title: "Prediction & Recommendation",
        summary: "Prediction outputs were shaped into actual timing recommendations.",
        body: "Training data was organized around route, departure date, and purchase timing, reflecting features such as time until departure, time of day, and recent price trends. At inference time, the service generates 30 candidate dates for the coming 30 days, predicts each expected fare, and compares them to show the top three buying windows along with the overall price trend.",
        layout: "text-left",
      },
      {
        title: "Pipeline & Tracking",
        summary: "The training-to-deployment path was structured to be repeatable.",
        body: "Preprocessing, training, evaluation, registration, and deployment were grouped into one SageMaker Pipeline flow, and experiment parameters, results, and model artifacts were recorded in MLflow so they can be reviewed or compared later.",
        layout: "text-top",
      },
      {
        title: "Serving Flow",
        summary: "The service was connected to handle real-time prediction requests.",
        body: "Frontend requests pass through API Gateway and Lambda before reaching the SageMaker Endpoint. Lambda prepares inputs, creates candidate dates, and then transforms the endpoint responses into the format the UI can use immediately.",
        layout: "image-left",
      },
    ],
    learnedDescription:
      "This project taught me a full ML systems perspective connecting data, deployment, and serving with model quality.",
    learnedCards: [
      {
        title: "End-to-End MLOps Flow Design",
        body: "I designed the complete flow, covering preprocessing artifact management, deployment, and API serving—not just the model training step.",
      },
      {
        title: "Importance of Structured Operational Stability",
        body: "Managing S3 artifacts, tracking MLflow experiments, and checking CloudWatch logs made the importance of reproducibility and debuggability in production concrete.",
      },
    ],
  },
} as const;

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-[2.3rem] font-semibold tracking-tight text-zinc-950 sm:text-[2.85rem]">
        {title}
      </h2>
      <p className="w-full break-keep text-[1.1rem] leading-8 text-[#4f463d] sm:text-[1.18rem]">
        {description}
      </p>
    </div>
  );
}

function ImageSlot({
  src,
  alt,
  fallback,
  className,
}: {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl bg-[#E8DDD0] px-6 text-center text-[1.02rem] text-[#6b5f52] sm:text-[1.12rem] ${className ?? ""}`}
      >
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

const coreImplementationCopy = {
  kr: {
    sectionTitle: "Core Implementation",
    sectionDescription:
      "모델 학습, 배포 자동화, 실시간 추론까지 실제 구현 과정에서 중요했던 기술 포인트를 정리했습니다.",
    inference: {
      title: "Inference Flow",
      flow:
        "사용자 입력 → 후보 날짜 30개 생성 → Endpoint 30회 호출 → expm1 역변환 → Top 3 반환",
      description:
        "요청 1건당 모델을 30번 호출해 날짜별 예측가를 비교합니다.",
    },
    featureEngineering: {
      number: "01",
      title: "Feature Engineering",
      subtitle: "시계열 기준으로 피처 구성",
      tableHeaders: ["Feature", "설명"],
      rows: [
        ["days_until_departure", "출발까지 남은 일수, 가격 변동에 큰 영향을 주는 변수"],
        ["purchase_time_bucket", "크롤링 시간대(새벽/오전/오후/저녁)"],
        ["purchase_day_of_week", "구매 시점의 요일 정보"],
        ["is_holiday_season", "출발일 기준 성수기 여부"],
        ["is_weekend_departure", "주말 출발 여부"],
        ["stops_count", "경유 횟수"],
        ["route_hash", "노선 식별자 해시값"],
        ["prev_fare", "직전 크롤링 시점 가격"],
        ["min/mean_fare_last_Nd", "최근 N일(7/14/30) 기준 최저가·평균가"],
        ["prev_fare_vs_min/mean_Nd", "직전 가격과 최근 N일 기준 통계값 비교"],
      ],
      cards: [
        {
          title: "과거 가격 흐름 반영",
          description:
            "예측 시점보다 앞선 가격 기록만 사용해 피처를 만들었습니다. 최근 7·14·30일 기준 통계를 추가해 짧은 기간의 가격 흐름이 반영되도록 했습니다.",
        },
        {
          title: "Target 변환",
          description:
            "가격 분포의 치우침을 줄이기 위해 target에는 log1p 변환을 적용했습니다. 추론 결과를 보여줄 때는 다시 원래 가격 단위로 바꿔 사용했습니다.",
        },
        {
          title: "Route 기준 분리",
          description:
            "실제 예측 흐름과 비슷한 조건에서 성능을 확인하는 것이 중요하다고 판단해, 노선별 시간 흐름을 유지한 상태로 학습·검증·테스트를 나눴습니다.",
        },
      ],
    },
    pipeline: {
      number: "02",
      title: "ML Pipeline",
      subtitle: "5단계가 분리된 이유",
      stages: [
        {
          title: "Preprocess",
          body:
            "학습과 추론에 같은 기준을 쓰기 위해 featurizer를 먼저 만들었습니다. 이후 단계에서 같은 피처 구성이 유지되도록 전처리 산출물을 따로 분리했습니다.",
        },
        {
          title: "Train",
          body:
            "XGBoost를 사용해 가격 예측 모델을 학습하고, 전처리 산출물과 route 통계 정보를 함께 묶어 추론에 필요한 모델 패키지로 정리했습니다.",
        },
        {
          title: "Test",
          body:
            "노선별 시간 흐름을 유지해 학습 데이터와 분리된 테스트를 진행했으며 RMSE와 MAE를 기준으로 성능을 확인했습니다.",
        },
        {
          title: "Register",
          body:
            "배포에 필요한 모델 파일과 전처리 산출물을 각각 정리해 등록했습니다. 서빙 단계에서 바로 불러올 수 있도록 아티팩트 구조를 나눠 관리했습니다.",
        },
        {
          title: "Deploy",
          body:
            "등록한 모델을 SageMaker Endpoint에 반영해 실시간 추론이 가능하도록 구성했습니다. 이후 Lambda와 연결해 사용자 요청이 실제 서빙 경로로 이어지도록 정리했습니다.",
        },
      ],
      tracking:
        "실행별 파라미터와 메트릭, 아티팩트는 MLflow에 기록해 비교와 추적이 가능하도록 정리했습니다.",
      dagCaption: "SageMaker Pipeline 실행 흐름",
    },
    serving: {
      number: "03",
      title: "Serving Architecture",
      subtitle: "서빙 구조와 역할 분리",
      diagram: {
        request: "사용자 요청 (JSON)",
        gateway: "API Gateway -> Lambda",
        endpoint: "SageMaker Endpoint",
        containerOneTitle: "입력값 정리와 전처리",
        containerOneItems: [
          "- route_hash 생성",
          "- 신규 노선 fallback 처리",
          "- featurizer 기반 변환",
        ],
        containerTwoTitle: "가격 예측 수행",
        containerTwoItems: ["- XGBoost 추론", "- log scale 예측값 반환"],
        lambda: "Lambda에서 예측값을 가격 단위로 복원하고, Top 3 결과로 정리해 응답",
      },
      cards: [
        {
          title: "Lambda와 Endpoint 역할 분리",
          body:
            "요청 처리와 예측 계산이 한곳에 섞이지 않도록, 입력값 정리와 응답 가공은 Lambda에서 맡고 실제 예측 계산은 SageMaker Endpoint에서 처리하도록 나눴습니다.",
        },
        {
          title: "신규 노선 처리",
          body:
            "학습에 없던 노선이 들어오면 route_stats.json의 global fallback 값을 쓰도록 해, 처음 보는 노선에도 응답을 이어갈 수 있게 했습니다.",
        },
      ],
      lambdaCaption: "Lambda 요청 처리 화면",
      endpointCaption: "SageMaker Endpoint 상태",
    },
  },
  en: {
    sectionTitle: "Core Implementation",
    sectionDescription:
      "This section summarizes the key technical points from the actual implementation—covering model training, deployment automation, and real-time inference.",
    inference: {
      title: "Inference Flow",
      flow:
        "User input → Generate 30 candidate dates → 30 endpoint calls → expm1 inversion → Return Top 3",
      description:
        "A single request triggers 30 model calls so each candidate date can be compared side by side.",
    },
    featureEngineering: {
      number: "01",
      title: "Feature Engineering",
      subtitle: "Feature design based on time series",
      tableHeaders: ["Feature", "Description"],
      rows: [
        ["days_until_departure", "Days remaining until departure, a key variable with strong influence on price movement"],
        ["purchase_time_bucket", "Crawl time window (dawn / morning / afternoon / evening)"],
        ["purchase_day_of_week", "Day of week at purchase time"],
        ["is_holiday_season", "Whether the departure date falls in peak season"],
        ["is_weekend_departure", "Whether departure falls on a weekend"],
        ["stops_count", "Number of stops"],
        ["route_hash", "Route identifier hash value"],
        ["prev_fare", "Price from the previous crawl point"],
        ["min/mean_fare_last_Nd", "Rolling min/mean fare over recent N days (7/14/30)"],
        ["prev_fare_vs_min/mean_Nd", "Comparison of the previous price against recent N-day statistics"],
      ],
      cards: [
        {
          title: "Reflecting Past Price Trends",
          description:
            "Features were built using only price records prior to the prediction point. Rolling statistics over the recent 7, 14, and 30 days were added to capture short-term price movements.",
        },
        {
          title: "Target Transform",
          description:
            "log1p was applied to the target to reduce skewness in the price distribution. At inference time, the result was converted back to the original price scale.",
        },
        {
          title: "Route-Based Split",
          description:
            "To evaluate performance under conditions close to actual prediction scenarios, data was split into train, validation, and test sets while preserving the time order within each route.",
        },
      ],
    },
    pipeline: {
      number: "02",
      title: "ML Pipeline",
      subtitle: "Why the pipeline was split into five stages",
      stages: [
        {
          title: "Preprocess",
          body:
            "A featurizer was built first to ensure the same standard is applied across both training and inference. Preprocessing artifacts were stored separately so consistent feature construction could be maintained in downstream stages.",
        },
        {
          title: "Train",
          body:
            "An XGBoost price prediction model was trained, and the preprocessing artifacts and route statistics were bundled together into a model package for inference.",
        },
        {
          title: "Test",
          body:
            "Testing was conducted on data separated from training while preserving the time order within each route, and performance was evaluated using RMSE and MAE.",
        },
        {
          title: "Register",
          body:
            "Model files and preprocessing artifacts needed for deployment were organized and registered separately. Artifact structure was split so each component could be loaded directly at serving time.",
        },
        {
          title: "Deploy",
          body:
            "The registered model was deployed to a SageMaker Endpoint to enable real-time inference. Lambda was then connected to route user requests through the actual serving path.",
        },
      ],
      tracking:
        "Parameters, metrics, and artifacts from each run were recorded in MLflow to enable comparison and tracking.",
      dagCaption: "SageMaker Pipeline execution flow",
    },
    serving: {
      number: "03",
      title: "Serving Architecture",
      subtitle: "Serving structure and role separation",
      diagram: {
        request: "User request (JSON)",
        gateway: "API Gateway -> Lambda",
        endpoint: "SageMaker Endpoint",
        containerOneTitle: "Input shaping and preprocessing",
        containerOneItems: [
          "- route_hash generation",
          "- unseen-route fallback",
          "- featurizer-based transform",
        ],
        containerTwoTitle: "Price prediction",
        containerTwoItems: ["- XGBoost inference", "- returns log-scale predictions"],
        lambda: "Lambda restores the prediction to a price value and shapes the response into Top 3 results",
      },
      cards: [
        {
          title: "Lambda and Endpoint Role Separation",
          body:
            "Input shaping and response formatting stay in Lambda, while the actual prediction runs in the SageMaker Endpoint. The split keeps request handling logic separate from inference logic.",
        },
        {
          title: "Handling New Routes",
          body:
            "If an unseen route comes in, the service falls back to the global value stored in route_stats.json. This ensures a response can still be returned even for routes the model has not seen before.",
        },
      ],
      lambdaCaption: "Lambda request handling screen",
      endpointCaption: "SageMaker Endpoint status",
    },
  },
} as const;

function CoreSectionBadge({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-en inline-flex items-center justify-center text-[1.5rem] font-bold tracking-[0.08em] text-amber-700 sm:text-[1.8rem]">
        {number}
      </span>
      <h3 className="font-en text-[1.55rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.8rem]">
        {title}
      </h3>
    </div>
  );
}

function CoreFramedImage({
  src,
  alt,
  caption,
  imageClassName = "",
  onClick,
  bordered = true,
}: {
  src: string;
  alt: string;
  caption: string;
  imageClassName?: string;
  onClick?: () => void;
  bordered?: boolean;
}) {
  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={onClick}
        className="block w-full cursor-zoom-in"
      >
        <img
          src={src}
          alt={alt}
          className={`block h-auto w-full rounded-[1.2rem] transition-transform duration-300 ease-out hover:scale-[1.02] ${bordered ? "border border-zinc-950" : ""} ${imageClassName}`}
        />
      </button>
      <p className="font-ko break-keep text-center text-sm text-[#7b6552]">
        {caption}
      </p>
    </div>
  );
}

function WingItCoreImplementation() {
  const { locale } = useLocale();
  const isKr = locale === "kr";
  const text = coreImplementationCopy[locale];
  const [zoomedImage, setZoomedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section className="space-y-12 bg-[#F3EBDD] py-14 sm:space-y-16 sm:py-18">
      <div className="mx-auto w-[92vw] max-w-[1320px] space-y-5">
        <div className="space-y-4">
          <h2 className="font-en text-[2.35rem] font-semibold tracking-tight text-zinc-950 sm:text-[2.95rem]">
            {text.sectionTitle}
          </h2>
          <p
            lang={isKr ? "ko" : "en"}
            className={`${isKr ? "font-ko break-keep" : "font-en"} w-full text-[1.08rem] leading-8 text-[#4f463d] sm:text-[1.16rem]`}
          >
            {text.sectionDescription}
          </p>
        </div>

        <div className="space-y-16 pt-4 sm:space-y-24 sm:pt-6">
          <div className="space-y-8 rounded-[1.9rem] border border-[#d8ccb4] bg-[#f7efe2] p-6 sm:space-y-10 sm:p-8">
            <CoreSectionBadge
              number={text.featureEngineering.number}
              title={text.featureEngineering.title}
            />
            <p className="font-ko break-keep text-[1.2rem] font-semibold leading-relaxed text-zinc-950 sm:text-[1.34rem]">
              {text.featureEngineering.subtitle}
            </p>
            <div className="overflow-hidden rounded-[1.65rem] border border-[#d8ccb4] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="grid grid-cols-[minmax(180px,0.9fr)_minmax(0,2.1fr)] border-b border-[#e5ddd0] bg-[#faf6ef] px-6 py-4">
                <div className="text-center font-en text-[1rem] font-semibold uppercase tracking-[0.16em] text-amber-700 sm:text-[1.06rem]">
                  {text.featureEngineering.tableHeaders[0]}
                </div>
                <div className="text-center font-ko text-[1rem] font-semibold uppercase tracking-[0.16em] text-amber-700 sm:text-[1.06rem]">
                  {text.featureEngineering.tableHeaders[1]}
                </div>
              </div>
              <div className="divide-y divide-[#eee6da]">
                {text.featureEngineering.rows.map(([feature, description]) => (
                  <div
                    key={feature}
                    className="grid grid-cols-1 gap-2 px-6 py-4 sm:grid-cols-[minmax(180px,0.9fr)_minmax(0,2.1fr)] sm:gap-6"
                  >
                    <div className="font-en text-[0.95rem] font-semibold text-zinc-950 sm:text-[1rem]">
                      {feature}
                    </div>
                    <div
                      lang={isKr ? "ko" : "en"}
                      className={`${isKr ? "font-ko break-keep" : "font-en"} text-[0.98rem] leading-7 text-[#4f463d] sm:text-[1.03rem]`}
                    >
                      {description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {text.featureEngineering.cards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[1.65rem] border border-[#d8ccb4] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                >
                  <h4 className="font-ko break-keep text-[1.18rem] font-semibold text-zinc-950 sm:text-[1.26rem]">
                    {card.title}
                  </h4>
                  <p
                    lang={isKr ? "ko" : "en"}
                    className={`${isKr ? "font-ko break-keep" : "font-en"} mt-3 text-[1rem] leading-8 text-[#4f463d] sm:text-[1.05rem]`}
                  >
                    {card.description}
                  </p>
                  {"code" in card && card.code ? (
                    <pre className="mt-5 overflow-x-auto rounded-[1.1rem] bg-slate-900 p-5 text-sm leading-7 text-slate-100 shadow-[0_12px_24px_rgba(15,23,42,0.18)]">
                      <code className="font-mono">
                        {card.code.map((line) => `${line}\n`)}
                      </code>
                    </pre>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-8 rounded-[1.9rem] border border-[#d8ccb4] bg-[#f7efe2] p-6 sm:space-y-10 sm:p-8">
            <CoreSectionBadge number={text.pipeline.number} title={text.pipeline.title} />
            <div className="grid gap-6 xl:grid-cols-[repeat(5,minmax(0,1fr))] xl:items-stretch xl:gap-8">
              {text.pipeline.stages.map((stage, index) => (
                <div
                  key={stage.title}
                  className="relative rounded-[1.6rem] border border-[#d8ccb4] bg-[#fffdf8] p-5 shadow-[0_10px_26px_rgba(0,0,0,0.04)]"
                >
                  {index !== text.pipeline.stages.length - 1 && (
                    <span className="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-xl text-amber-700 xl:block">
                      →
                    </span>
                  )}
                  <p className="font-en text-[1rem] font-semibold uppercase tracking-[0.18em] text-amber-700 sm:text-[1.08rem]">
                    {stage.title}
                  </p>
                  <p
                    lang={isKr ? "ko" : "en"}
                    className={`${
                      isKr ? "font-ko break-keep" : "font-en break-keep"
                    } mt-3 text-[0.98rem] leading-7 text-[#4f463d] sm:text-[1.03rem]`}
                  >
                    {stage.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-[1.4rem] border border-[#eadcc4] bg-[#faf6ef] px-5 py-4">
              <p
                lang={isKr ? "ko" : "en"}
                className={`${isKr ? "font-ko break-keep" : "font-en"} text-[1rem] leading-8 text-[#7b6552] sm:text-[1.05rem]`}
              >
                {text.pipeline.tracking}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-1">
              <div className="mx-auto flex max-w-4xl justify-center">
                <CoreFramedImage
                  src="/images/wingit-dag.png"
                  alt="WingIt DAG"
                  caption={text.pipeline.dagCaption}
                  imageClassName="max-h-[26rem] object-contain mx-auto"
                  bordered={false}
                  onClick={() =>
                    setZoomedImage({
                      src: "/images/wingit-dag.png",
                      alt: "WingIt DAG",
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className="space-y-8 rounded-[1.9rem] border border-[#d8ccb4] bg-[#f7efe2] p-6 sm:space-y-10 sm:p-8">
            <CoreSectionBadge number={text.serving.number} title={text.serving.title} />
            <p className="font-ko break-keep text-[1.2rem] font-semibold leading-relaxed text-zinc-950 sm:text-[1.34rem]">
              {text.serving.subtitle}
            </p>
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
              <div className="rounded-[1.75rem] border border-[#d8ccb4] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                <div className="space-y-4 text-center">
                  <div className="rounded-[1.2rem] border border-[#eadcc4] bg-[#faf6ef] px-5 py-4 text-[1rem] font-semibold text-zinc-950">
                    {text.serving.diagram.request}
                  </div>
                  <div className="text-lg text-amber-700">↓</div>
                  <div className="rounded-[1.2rem] border border-[#eadcc4] bg-[#faf6ef] px-5 py-4 text-[1rem] font-semibold text-zinc-950">
                    {text.serving.diagram.gateway}
                  </div>
                  <div className="text-lg text-amber-700">{isKr ? "↓ (30회 반복)" : "↓ (30 repeats)"}</div>
                  <div className="rounded-[1.2rem] border border-[#eadcc4] bg-[#faf6ef] px-5 py-4 text-[1rem] font-semibold text-zinc-950">
                    {text.serving.diagram.endpoint}
                  </div>
                </div>
                <div className="mt-6 grid gap-5">
                  <div className="rounded-[1.3rem] border border-[#d8ccb4] bg-white p-5">
                    <h4 className="text-[1.02rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.08rem]">
                      {text.serving.diagram.containerOneTitle}
                    </h4>
                    <div className="mt-4 space-y-2">
                      {text.serving.diagram.containerOneItems.map((item) => (
                        <p key={item} className="font-ko break-keep text-[1.02rem] leading-8 text-zinc-950 sm:text-[1.05rem]">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="mx-auto text-lg text-amber-700">↓</div>
                  <div className="rounded-[1.3rem] border border-[#d8ccb4] bg-white p-5">
                    <h4 className="text-[1.02rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.08rem]">
                      {text.serving.diagram.containerTwoTitle}
                    </h4>
                    <div className="mt-4 space-y-2">
                      {text.serving.diagram.containerTwoItems.map((item) => (
                        <p key={item} className="font-ko break-keep text-[1.02rem] leading-8 text-zinc-950 sm:text-[1.05rem]">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="mx-auto text-lg text-amber-700">↓</div>
                  <div className="rounded-[1.2rem] border border-[#eadcc4] bg-[#faf6ef] px-5 py-4 text-center text-[1rem] font-semibold text-zinc-950">
                    {text.serving.diagram.lambda}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {text.serving.cards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-[1.6rem] border border-[#d8ccb4] bg-[#fffdf8] p-6 shadow-[0_10px_26px_rgba(0,0,0,0.04)]"
                  >
                    <h4 className="font-ko break-keep text-[1.18rem] font-semibold text-zinc-950 sm:text-[1.26rem]">
                      {card.title}
                    </h4>
                    <p
                      lang={isKr ? "ko" : "en"}
                      className={`${isKr ? "font-ko break-keep" : "font-en"} mt-3 text-[1rem] leading-8 text-[#4f463d] sm:text-[1.05rem]`}
                    >
                      {card.body}
                    </p>
                  </article>
                ))}
                <div className="grid gap-5">
                  <CoreFramedImage
                    src="/images/wingit-lambda.png"
                    alt="WingIt Lambda"
                    caption={text.serving.lambdaCaption}
                    onClick={() =>
                      setZoomedImage({
                        src: "/images/wingit-lambda.png",
                        alt: "WingIt Lambda",
                      })
                    }
                  />
                  <CoreFramedImage
                    src="/images/wingit-endpoint.png"
                    alt="WingIt Endpoint"
                    caption={text.serving.endpointCaption}
                    onClick={() =>
                      setZoomedImage({
                        src: "/images/wingit-endpoint.png",
                        alt: "WingIt Endpoint",
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {zoomedImage ? (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/72 px-6 py-10"
            onClick={() => setZoomedImage(null)}
          >
            <div
              className="relative max-h-[88vh] max-w-[88vw]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setZoomedImage(null)}
                className="absolute -top-12 right-0 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Close
              </button>
              <img
                src={zoomedImage.src}
                alt={zoomedImage.alt}
                className="max-h-[88vh] w-auto max-w-[88vw] rounded-[1.25rem] border border-white/25 bg-white object-contain"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default function WingItCaseStudy() {
  const { locale } = useLocale();
  const isKr = locale === "kr";
  const text = isKr ? copy.kr : copy.en;
  const techStackGroups = [
    {
      title: "ML Pipeline",
      items: ["Python", "SageMaker Pipeline", "XGBoost", "MLflow", "S3"],
    },
    {
      title: "Serving",
      items: ["Lambda", "API Gateway", "SageMaker Endpoint"],
    },
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript"],
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
          <div className="grid gap-12 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-start">
            <div className="-mt-8 space-y-6 sm:-mt-9">
              <p className="font-en text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
                {text.eyebrow}
              </p>
              <h1 className="mt-3 max-w-5xl text-[clamp(3.6rem,9vw,5.9rem)] font-normal leading-none tracking-tight text-zinc-950">
                {text.title}
              </h1>
              <p className="break-keep max-w-2xl text-[clamp(1rem,1.55vw,1.5rem)] font-medium leading-[1.55] text-zinc-950">
                {text.subtitle}
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
                    href="https://github.com/jeegle16-alt/WINGIT"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-zinc-950"
                  >
                    {text.links.github}
                  </a>
                  <span className="text-[#b8a58c]">|</span>
                  <Link
                    href="/projects/wingit/demo"
                    className="transition-colors hover:text-zinc-950"
                  >
                    {text.links.demo}
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-zinc-950 sm:text-2xl">
                {text.techSkills}
              </p>
              <div className="space-y-6">
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

        <section className="space-y-14">
          <SectionTitle
            title="Project Summary"
            description={text.projectSummaryDescription}
          />
          <div className="space-y-24">
            <div className="space-y-8 pt-6">
              <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">
                {text.whyTitle}
              </p>
              <div className="grid gap-6 lg:grid-cols-3">
                {text.whyCards.map((card) => (
                  <div
                    key={card.title}
                    className="flex min-h-[13.5rem] h-full flex-col rounded-[1.75rem] border border-[#b8b1a3] bg-[#f7efe2] px-6 py-6"
                  >
                    <p className="text-[1.34rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-[1.48rem]">
                      {card.title}
                    </p>
                    <p className="mt-4 break-keep text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">
                {text.approachTitle}
              </p>
              <div className="grid gap-6 lg:grid-cols-3">
                {text.approachBlocks.map((block) => (
                  <div key={block.number} className="space-y-4 border-t-2 border-zinc-950 pt-5">
                    <p className="font-en text-xl font-bold tracking-[0.08em] text-amber-700 sm:text-2xl">{block.number}</p>
                    <p className="text-2xl font-semibold tracking-tight text-zinc-950">
                      {block.title}
                    </p>
                    <p className="break-keep text-[1.02rem] font-normal leading-8 text-[#4f463d] sm:text-[1.12rem]">
                      {block.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-8">
          <SectionTitle
            title="System Architecture"
            description={text.architectureDescription}
          />
          <div className="space-y-8">
            <ImageSlot
              src="/images/wingit-architecture.png"
              alt="WingIt architecture"
              fallback="System Architecture placeholder"
              className="mx-auto w-full max-w-4xl rounded-2xl"
            />
            <div className="grid gap-5 md:grid-cols-2">
              {text.architectureCards.map((card) => (
                <div key={card.title} className="rounded-[1.75rem] border border-[#d8ccb4] bg-[#f7efe2] px-6 py-6">
                  <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-zinc-950 sm:text-[1.55rem]">{card.title}</p>
                  <p className="mt-2 text-[1.02rem] font-semibold text-amber-700 sm:text-[1.08rem]">
                    {card.flow}
                  </p>
                  <p className="mt-3 break-keep text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <WingItCoreImplementation />

        <div className="border-t border-zinc-950" />

        <section className="space-y-12">
          <h2 className="text-center text-[2.3rem] font-semibold tracking-tight text-zinc-950 sm:text-[2.85rem]">
            What I Learned
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative mt-3 rotate-[1.5deg] rounded-[4px] bg-[#FFFDF7] p-8 shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
              <div className="absolute left-1/2 top-0 h-[18px] w-[60px] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] rounded-[2px] bg-[rgba(251,191,36,0.35)]" />
              <p className="text-[1.7rem] font-bold text-amber-700">01</p>
              <p className="mt-2 mb-3 text-xl font-bold text-[#1a1a1a]">
                {text.learnedCards[0].title}
              </p>
              <p className="text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                {text.learnedCards[0].body}
              </p>
            </div>
            <div className="relative mt-3 rotate-[-1.2deg] rounded-[4px] bg-[#FFFDF7] p-8 shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
              <div className="absolute left-1/2 top-0 h-[18px] w-[60px] -translate-x-1/2 -translate-y-1/2 rotate-[3deg] rounded-[2px] bg-[rgba(251,191,36,0.35)]" />
              <p className="text-[1.7rem] font-bold text-amber-700">02</p>
              <p className="mt-2 mb-3 text-xl font-bold text-[#1a1a1a]">
                {text.learnedCards[1].title}
              </p>
              <p className="text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]">
                {text.learnedCards[1].body}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
