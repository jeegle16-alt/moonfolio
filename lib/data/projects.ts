export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  role?: string;
};

export const projects: Project[] = [
  {
    slug: "nyangnyang-letter",
    title: "NyangNyang Letter",
    description:
      "AI-powered service that detects behavioral changes from smartphone activity and triggers social support signals.",
    tags: ["Machine Learning", "AWS", "Voice AI"],
    year: "2024",
    role: "AI / ML Project",
  },
  {
    slug: "wingit",
    title: "WING IT",
    description:
      "항공권 가격의 시간적 변동 패턴을 학습해 최적의 구매 타이밍을 예측하는 ML 서비스입니다.",
    tags: ["Machine Learning", "AWS"],
    year: "2024",
    role: "ML PROJECT",
  },
  {
    slug: "cicd-pipeline",
    title: "FLOWSHIP",
    description:
      "Jenkins, Docker, ArgoCD, Kubernetes 기반 GitOps CI/CD 자동 배포 파이프라인 구축 프로젝트입니다.",
    tags: ["DevOps", "Kubernetes", "GitOps"],
    year: "2023",
    role: "DEVOPS PROJECT",
  },
  {
    slug: "high-availability-infrastructure",
    title: "WordPress 고가용성 인프라 구축",
    description:
      "단일 서버 환경의 한계를 해결하기 위해 웹 서버 이중화, 로드밸런싱, 데이터베이스 복제를 적용한 고가용성 WordPress 인프라 구축 프로젝트입니다.",
    tags: ["Infrastructure", "WordPress", "HAProxy"],
    year: "2023",
    role: "INFRASTRUCTURE PROJECT",
  },
  {
    slug: "rpa-automation",
    title: "업무 자동화 프로젝트 모음",
    description:
      "인턴 기간 동안 라이선스 관리, 데이터 업데이트, 웹 정보 수집 등 반복 업무를 Automation Anywhere 기반으로 자동화한 프로젝트들입니다.",
    tags: ["Automation Anywhere", "RPA", "Internship"],
    year: "2023",
    role: "RPA INTERNSHIP PROJECTS",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
