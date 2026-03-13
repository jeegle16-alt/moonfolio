import type { Locale } from "@/lib/i18n/config";

type LocalizedText = Record<Locale, string>;

type ProjectSection = {
  title: string;
  body: LocalizedText;
};

export const longFormContent = {
  hero: {
    intro: {
      en: "Through projects and experimentation, I explore how technology and data solve real-world problems. I enjoy learning how things work and turning ideas into solutions.",
      kr: "프로젝트와 다양한 실험을 통해 기술과 데이터가 현실의 문제를 어떻게 해결할 수 있는지 탐구합니다. 작동 원리를 이해하는 과정을 좋아하고, 아이디어를 실제 해결책으로 구현하는 일에 흥미를 느낍니다.",
    },
  },
  about: {
    paragraphs: [
      {
        en: "I care as much about why something is needed as how it's built.",
        kr: "‘어떻게’ 구현할지만큼 ‘왜 필요한지’를 먼저 고민하는 개발자입니다.",
      },
      {
        en: "When I run into a problem, I try not to settle for the most familiar approach. Instead, I like exploring different options and finding the solution that fits the situation best. I also prefer sharing the reasoning behind my design decisions with teammates and improving ideas through open feedback.",
        kr: "문제를 만나면 익숙한 방법에 바로 머무르기보다는 여러 방법을 비교해 보면서 상황에 가장 잘 맞는 해결책을 찾으려고 합니다. 그렇게 고민한 설계 의도나 과정도 혼자만 알고 넘어가기보다는 팀원들과 자연스럽게 공유하고, 피드백을 주고받으며 방향을 맞춰가는 편입니다.",
      },
      {
        en: "Rather than staying strictly within my role, I try to see the bigger picture of the project and step in where help is needed. I believe good results come not from one person's effort, but from a team that works well together.",
        kr: "제 역할에만 머물기보다는 프로젝트 전체 흐름을 보려고 하고, 필요한 부분이 보이면 먼저 손을 내미려고 합니다. 좋은 결과는 결국 한 사람의 노력보다는 팀이 잘 맞물려 돌아갈 때 나온다고 생각하기 때문입니다.",
      },
      {
        en: "Still learning, but genuinely enjoy the process. 🐾",
        kr: "아직 배우는 중이지만, 그 과정 자체를 즐기고 있습니다. 🐾",
      },
    ],
  },
  contact: {
    body: {
      en: "Open to opportunities, collaborations, and interesting conversations. Feel free to reach out.",
      kr: "새로운 기회와 협업, 그리고 흥미로운 대화를 언제든 환영합니다. 편하게 연락 주세요.",
    },
  },
} as const;

export const projectLongForm: Record<string, ProjectSection[]> = {
  "nyangnyang-letter": [
    {
      title: "Overview",
      body: {
        en: "NyangNyang Letter is an AI-powered care service that detects meaningful changes in everyday smartphone behavior and turns those signals into gentle social support. The product focuses on identifying patterns that may suggest emotional or behavioral shifts, then helping the right person reach out in a way that feels timely rather than intrusive.",
        kr: "NyangNyang Letter는 일상적인 스마트폰 사용 패턴의 변화를 감지해 이를 부드러운 사회적 돌봄 신호로 연결하는 AI 기반 케어 서비스입니다. 감정적 혹은 행동적 변화 가능성을 시사하는 패턴을 포착하고, 가장 적절한 사람이 부담스럽지 않게 먼저 연락할 수 있도록 돕는 데 초점을 맞췄습니다.",
      },
    },
    {
      title: "My Contributions",
      body: {
        en: "I worked on the machine learning pipeline for behavioral state detection, designed an audio guardrail layer for user voice inputs, and built the logic for identifying the most reachable contact during a critical-response flow. I also explored a Seed-VC based pipeline for generating personalized voice BGM as part of the product experience.",
        kr: "행동 상태 감지를 위한 머신러닝 파이프라인을 설계하고, 사용자 음성 입력을 위한 오디오 가드레일 계층을 구현했습니다. 또한 위기 대응 흐름에서 가장 연락 가능성이 높은 보호자를 식별하는 로직을 만들었고, 제품 경험의 일부로 개인화된 음성 BGM 생성을 위한 Seed-VC 기반 파이프라인도 탐색했습니다.",
      },
    },
    {
      title: "Learnings",
      body: {
        en: "The project sharpened my understanding of how to design AI systems for sensitive contexts. Beyond model quality, I learned that reliability, escalation logic, and human-centered intervention design matter just as much when the product touches real people and real situations.",
        kr: "이 프로젝트를 통해 민감한 상황을 다루는 AI 시스템을 어떻게 설계해야 하는지 더 깊이 이해하게 되었습니다. 모델 성능만이 아니라, 신뢰성, 대응 단계 설계, 그리고 인간 중심의 개입 방식이 실제 사람과 상황을 다루는 제품에서는 똑같이 중요하다는 점을 배웠습니다.",
      },
    },
  ],
  wingit: [
    {
      title: "Overview",
      body: {
        en: "WingIt reduces the friction of social planning by letting users broadcast their availability and connect with nearby friends in real time. The product was built around a simple insight: most hangouts fall through because of coordination overhead, not lack of interest.",
        kr: "WingIt은 사용자가 자신의 가용 시간을 간단히 공유하고 근처 친구들과 실시간으로 연결될 수 있게 하여 약속을 잡는 과정의 마찰을 줄이는 서비스입니다. 대부분의 만남이 관심 부족이 아니라 조율의 번거로움 때문에 무산된다는 문제의식에서 출발했습니다.",
      },
    },
  ],
  "cicd-pipeline": [
    {
      title: "Overview",
      body: {
        en: "Designed and implemented a full CI/CD pipeline integrating automated testing, Docker containerization, and zero-downtime deployments. The pipeline cut deployment time from 40 minutes of manual steps to under 5 minutes of fully automated delivery.",
        kr: "자동화 테스트, Docker 컨테이너화, 무중단 배포를 통합한 전체 CI/CD 파이프라인을 설계하고 구현했습니다. 그 결과 수동으로 40분가량 걸리던 배포 과정을 5분 이내의 완전 자동화된 전달 흐름으로 단축했습니다.",
      },
    },
  ],
  "high-availability-infrastructure": [
    {
      title: "Overview",
      body: {
        en: "Architected a high-availability setup on AWS using EC2 Auto Scaling Groups, Application Load Balancers, and Terraform for infrastructure-as-code. The system maintained 99.95% uptime across a 6-month production period with zero manual scaling interventions.",
        kr: "EC2 Auto Scaling Group, Application Load Balancer, Terraform 기반의 IaC 구성을 활용해 AWS 상의 고가용성 인프라를 설계했습니다. 6개월의 운영 기간 동안 수동 스케일링 개입 없이 99.95%의 가동률을 유지했습니다.",
      },
    },
  ],
  "rpa-automation": [
    {
      title: "Overview",
      body: {
        en: "Built a suite of RPA bots using Python to automate data entry, report generation, and email workflows across internal systems. The automation reduced manual effort by approximately 80%, freeing the operations team to focus on higher-value work.",
        kr: "Python 기반의 RPA 봇 묶음을 만들어 사내 시스템 전반의 데이터 입력, 보고서 생성, 이메일 업무 흐름을 자동화했습니다. 수작업 비중을 약 80% 줄여 운영팀이 더 높은 가치의 업무에 집중할 수 있도록 했습니다.",
      },
    },
  ],
};

export const projectSummaries: Record<string, { description: LocalizedText }> = {
  "nyangnyang-letter": {
    description: {
      en: "AI-powered service that detects behavioral changes from smartphone activity and triggers social support signals.",
      kr: "스마트폰 활동 데이터에서 행동 변화를 감지하고, 사회적 지원 신호로 연결하는 AI 기반 서비스입니다.",
    },
  },
  wingit: {
    description: {
      en: "A spontaneous social planning app that connects people for last-minute meetups.",
      kr: "즉흥적인 약속을 쉽게 잡을 수 있도록 사람들을 연결하는 소셜 플래닝 앱입니다.",
    },
  },
  "cicd-pipeline": {
    description: {
      en: "An automated deployment pipeline for a production web service using GitHub Actions.",
      kr: "GitHub Actions를 활용해 프로덕션 웹 서비스를 자동 배포하는 파이프라인입니다.",
    },
  },
  "high-availability-infrastructure": {
    description: {
      en: "A fault-tolerant cloud infrastructure with auto-scaling and load balancing on AWS.",
      kr: "AWS 환경에서 오토스케일링과 로드밸런싱을 갖춘 고가용성 클라우드 인프라입니다.",
    },
  },
  "rpa-automation": {
    description: {
      en: "Robotic process automation scripts that eliminated repetitive administrative tasks.",
      kr: "반복적인 운영 업무를 줄인 RPA 자동화 스크립트입니다.",
    },
  },
};
