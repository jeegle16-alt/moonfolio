import type { Locale } from "@/lib/i18n/config";

type LocalizedText = Record<Locale, string>;

type ProjectSection = {
  title: string;
  body: LocalizedText;
};

export const longFormContent = {
  hero: {
    intro: {
      en: "I like building things by hand and learning through trial and error. More than the outcome itself, I care about the experience of learning and growing through the process.",
      kr: "직접 만들고 부딪혀보면서, 아이디어를 하나씩 구현해가는 과정을 좋아합니다. 결과보다 그 과정에서 배우고, 발전해 나가는 경험을 더 중요하게 생각합니다.",
    },
  },
  about: {
    paragraphs: [
      {
        en: "Before building something, I try to think through why the feature is needed in the first place.",
        kr: "구현에 앞서, 왜 필요한 기능인지부터 먼저 고민하는 개발자입니다.",
      },
      {
        en: "When I run into a problem, I try not to stop at simply making it work. I like looking at what kind of flow would feel more natural for the user as well.",
        kr: "문제를 마주하면 단순히 만드는 데 그치기보다, 사용자에게 더 자연스러운 흐름이 무엇인지 함께 살펴보려 합니다.",
      },
      {
        en: "Beyond implementing technology, I value understanding the broader service context and working closely with teammates to move toward a better outcome together.",
        kr: "기술을 구현하는 일뿐 아니라 서비스 전체 맥락을 이해하고, 팀원들과 방향을 맞춰 더 나은 결과를 만들어가는 과정 역시 중요하게 여깁니다.",
      },
      {
        en: "Still growing, but I genuinely enjoy the process of learning and improving. 🐾",
        kr: "아직 성장하는 중이지만, 배우고 발전해 가는 과정 자체를 즐기고 있습니다. 🐾",
      },
    ],
  },
  contact: {
    body: {
      en: "Open to opportunities, collaborations, and thoughtful conversations. Feel free to reach out.",
      kr: "좋은 기회로 만나 뵐 수 있으면 좋겠습니다.",
    },
  },
} as const;

export const projectLongForm: Record<string, ProjectSection[]> = {
  "nyangnyang-letter": [
    {
      title: "Overview",
      body: {
        en: "NyangNyang Letter is an AI-powered care service that detects meaningful changes in everyday smartphone behavior and turns those signals into gentle social support.",
        kr: "냥냥편지는 일상적인 스마트폰 행동 변화 속에서 의미 있는 신호를 감지하고, 이를 부드러운 사회적 돌봄으로 연결하는 AI 기반 서비스입니다.",
      },
    },
    {
      title: "My Contributions",
      body: {
        en: "I worked on the machine learning pipeline for behavioral state detection, the audio guardrail logic for user voice inputs, and the response logic for the critical-agent flow.",
        kr: "행동 상태 감지를 위한 머신러닝 파이프라인, 음성 입력 가드레일 로직, 위기 대응 흐름의 핵심 로직 설계와 구현을 맡았습니다.",
      },
    },
    {
      title: "Learnings",
      body: {
        en: "This project helped me understand that in sensitive AI systems, reliability, escalation logic, and human-centered intervention design matter just as much as model quality.",
        kr: "이 프로젝트를 통해 민감한 상황을 다루는 AI 시스템에서는 모델 성능만큼이나 신뢰성, 판단 흐름, 사람 중심의 개입 설계가 중요하다는 점을 배웠습니다.",
      },
    },
  ],
  wingit: [
    {
      title: "Overview",
      body: {
        en: "WingIt is an ML project that predicts airfare price movement and recommends the most favorable purchase timing over the next 30 days.",
        kr: "WingIt은 항공권 가격 흐름을 예측하고, 향후 30일 기준 가장 유리한 구매 시점을 추천하는 ML 프로젝트입니다.",
      },
    },
  ],
  "cicd-pipeline": [
    {
      title: "Overview",
      body: {
        en: "FlowShip is a GitOps-based CI/CD pipeline project that automates the path from code push to build and deployment.",
        kr: "FlowShip은 코드 Push부터 빌드, 배포까지의 흐름을 자동화한 GitOps 기반 CI/CD 파이프라인 프로젝트입니다.",
      },
    },
  ],
  "high-availability-infrastructure": [
    {
      title: "Overview",
      body: {
        en: "This project builds a high-availability WordPress infrastructure with web-server redundancy, load balancing, and database replication to move beyond a single-server setup.",
        kr: "이 프로젝트는 단일 서버 환경의 한계를 넘어, 웹 서버 이중화와 로드밸런싱, 데이터베이스 복제를 적용한 고가용성 WordPress 인프라를 구축하는 프로젝트입니다.",
      },
    },
  ],
  "rpa-automation": [
    {
      title: "Overview",
      body: {
        en: "This page brings together internship RPA projects that automated repetitive tasks such as license management, data updates, and web information collection.",
        kr: "이 페이지는 라이선스 관리, 데이터 업데이트, 웹 정보 수집처럼 반복적인 업무를 자동화한 인턴십 RPA 프로젝트들을 정리한 사례 모음입니다.",
      },
    },
  ],
};

export const projectSummaries: Record<
  string,
  {
    description: LocalizedText;
  }
> = {
  "nyangnyang-letter": {
    description: {
      en: "AI-powered service that detects behavioral changes from smartphone activity and turns them into social support signals.",
      kr: "스마트폰 행동 데이터 기반 정신 건강 모니터링 서비스입니다.",
    },
  },
  wingit: {
    description: {
      en: "An ML service that learns airfare price patterns and recommends the best purchase timing.",
      kr: "항공권 가격의 시간적 변동 패턴을 학습해 최적의 구매 타이밍을 예측하는 ML 서비스입니다.",
    },
  },
  "cicd-pipeline": {
    description: {
      en: "A GitOps-based CI/CD pipeline project built with Jenkins, Docker, ArgoCD, and Kubernetes.",
      kr: "Jenkins, Docker, ArgoCD, Kubernetes 기반 GitOps CI/CD 자동 배포 파이프라인 구축 프로젝트입니다.",
    },
  },
  "high-availability-infrastructure": {
    description: {
      en: "A high-availability WordPress infrastructure project with web redundancy, load balancing, and database replication.",
      kr: "단일 서버 환경의 한계를 해결하기 위해 웹 서버 이중화, 로드밸런싱, 데이터베이스 복제를 적용한 고가용성 WordPress 인프라 구축 프로젝트입니다.",
    },
  },
  "rpa-automation": {
    description: {
      en: "A collection of internship automation projects built with Automation Anywhere for repetitive business tasks.",
      kr: "인턴 기간 동안 라이선스 관리, 데이터 업데이트, 웹 정보 수집 등 반복 업무를 Automation Anywhere 기반으로 자동화한 프로젝트들입니다.",
    },
  },
};

export const projectsSectionContent = {
  eyebrow: {
    en: "Selected Work",
    kr: "Selected Work",
  },
  title: {
    en: "Projects",
    kr: "Projects",
  },
  cta: {
    en: "View project +",
    kr: "View project +",
  },
  defaultRole: {
    en: "Project",
    kr: "Project",
  },
} as const;

export const projectListContent: Record<
  string,
  {
    title: LocalizedText;
    role?: LocalizedText;
    description: LocalizedText;
  }
> = {
  "nyangnyang-letter": {
    title: {
      en: "NyangNyang Letter",
      kr: "냥냥레터",
    },
    role: {
      en: "AI / ML Project",
      kr: "AI / ML 프로젝트",
    },
    description: {
      en: "AI-powered service that detects behavioral changes from smartphone activity and turns them into social support signals.",
      kr: "스마트폰 행동 데이터를 바탕으로 이상 변화를 감지하고 사회적 돌봄 신호로 연결하는 AI 서비스입니다.",
    },
  },
  wingit: {
    title: {
      en: "WING IT",
      kr: "WING IT",
    },
    role: {
      en: "ML Project",
      kr: "ML 프로젝트",
    },
    description: {
      en: "An ML service that learns airfare price patterns and recommends the best purchase timing.",
      kr: "항공권 가격 패턴을 학습해 최적의 구매 시점을 추천하는 ML 서비스입니다.",
    },
  },
  "cicd-pipeline": {
    title: {
      en: "FLOWSHIP",
      kr: "FLOWSHIP",
    },
    role: {
      en: "DevOps Project",
      kr: "DevOps 프로젝트",
    },
    description: {
      en: "A GitOps-based CI/CD pipeline project built with Jenkins, Docker, ArgoCD, and Kubernetes.",
      kr: "Jenkins, Docker, ArgoCD, Kubernetes 기반의 GitOps CI/CD 자동 배포 파이프라인 구축 프로젝트입니다.",
    },
  },
  "high-availability-infrastructure": {
    title: {
      en: "WordPress High-Availability Infrastructure",
      kr: "WordPress 고가용성 인프라 구축",
    },
    role: {
      en: "Infrastructure Project",
      kr: "인프라 프로젝트",
    },
    description: {
      en: "A high-availability WordPress infrastructure project with web redundancy, load balancing, and database replication.",
      kr: "웹 이중화, 로드 밸런싱, 데이터베이스 복제를 적용한 WordPress 고가용성 인프라 구축 프로젝트입니다.",
    },
  },
  "rpa-automation": {
    title: {
      en: "RPA Automation Project Collection",
      kr: "업무 자동화 프로젝트 모음",
    },
    role: {
      en: "RPA Internship Projects",
      kr: "RPA 인턴십 프로젝트",
    },
    description: {
      en: "A collection of internship automation projects built with Automation Anywhere for repetitive business tasks.",
      kr: "라이선스 관리, 데이터 업데이트, 웹 정보 수집 등 반복 업무를 Automation Anywhere로 자동화한 인턴십 프로젝트 모음입니다.",
    },
  },
};
