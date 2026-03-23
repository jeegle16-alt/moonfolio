"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/components/providers/LocaleProvider";

type ResultItem = {
  title: string;
  summary: string;
  steps: string[];
  screenshots?: string[];
  codeBlock?: string;
  screenshotImages?: {
    src: string;
    alt: string;
    caption: string;
    className?: string;
  }[];
};

type LearnedCard = {
  title: string;
  body: string;
};

type PageCopy = {
  back: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  meta: string[];
  links: {
    githubApp: string;
    githubOps: string;
  };
  techSkills: string;
  projectSummaryDescription: string;
  whyTitle: string;
  whyCards: { title: string; body: string }[];
  approachTitle: string;
  approachBlocks: { number: string; title: string; body: string }[];
  architectureDescription: string;
  architectureCards: { title: string; flow: string; body: string }[];
  learnedDescription?: string;
  resultsDescription: string;
  resultsItems: ResultItem[];
  learnedCards: LearnedCard[];
};

const copy: Record<"kr" | "en", PageCopy> = {
  kr: {
    back: "프로젝트 목록으로",
    eyebrow: "DEVOPS PROJECT",
    title: "FLOWSHIP",
    subtitle:
      "Jenkins, Docker, ArgoCD, Kubernetes 기반 GitOps CI/CD 자동 배포 파이프라인 구축 프로젝트",
    meta: ["개인 프로젝트", "GitOps 기반 CI/CD"],
    links: {
      githubApp: "🔗 GitHub (app)",
      githubOps: "🔗 GitHub (ops)",
    },
    techSkills: "Tech Skills",
    projectSummaryDescription:
      "이 프로젝트의 문제 배경과 해결 방식, 핵심 아이디어를 간단히 정리했습니다.",
    whyTitle: "Why I Built This",
    whyCards: [
      {
        title: "반복되는 배포",
        body: "코드를 수정할 때마다 빌드와 이미지 생성, 서버 반영을 직접 반복해야 했습니다. 배포 한 번에 약 30분이 걸리고 작은 실수도 중단으로 이어질 수 있었습니다.",
      },
      {
        title: "환경 불일치",
        body: "로컬에서는 되는데 서버에서 동작하지 않는 경우가 생겼습니다. 설정 관리가 사람 손에 달려 있어 일관성을 유지하기 어려웠습니다.",
      },
      {
        title: "운영 대응 한계",
        body: "Pod 장애를 수동으로 확인하고 다시 띄워야 했습니다. 트래픽이 몰릴 때도 서버 확장을 직접 처리해야 했습니다.",
      },
    ],
    approachTitle: "My Approach",
    approachBlocks: [
      {
        number: "01",
        title: "CI 자동화",
        body: "App Repo에 코드를 Push하면 Jenkins가 감지해 이미지를 빌드하고 Docker Hub에 올리도록 구성했습니다. 빌드가 끝나면 Ops Repo의 이미지 태그도 자동으로 갱신되게 연결했습니다.",
      },
      {
        number: "02",
        title: "GitOps 배포",
        body: "Ops Repo 변경을 ArgoCD가 감지해 클러스터 상태를 자동으로 맞추도록 구성했습니다. Git을 배포 기준으로 두고 원하는 상태를 한곳에서 관리했습니다.",
      },
      {
        number: "03",
        title: "K8s 운영 구조",
        body: "4노드 클러스터에서 Web과 DB 워크로드를 나눠 배치했습니다. ReplicaSet과 Rolling Update를 기반으로 복구와 배포 흐름을 안정적으로 정리했습니다.",
      },
    ],
    architectureDescription:
      "애플리케이션 코드 변경이 CI/CD 파이프라인을 거쳐 이미지 빌드, 배포 설정 업데이트, Kubernetes 반영까지 이어지는 전체 흐름을 정리한 구조입니다.",
    architectureCards: [
      {
        title: "CI Pipeline",
        flow: "App Repo → Jenkins → Docker Hub",
        body: "App Repo에 코드가 반영되면 Jenkins가 실행되어 새로운 Docker 이미지를 빌드하고 Docker Hub에 푸시합니다.",
      },
      {
        title: "GitOps Delivery",
        flow: "Ops Repo → Argo CD → Kubernetes",
        body: "Jenkins가 Ops Repo의 이미지 태그를 갱신하고, Argo CD가 변경된 배포 설정을 감지해 Kubernetes 클러스터와 동기화합니다.",
      },
      {
        title: "Kubernetes Runtime",
        flow: "Ingress → Django Pods → MySQL",
        body: "사용자 요청은 Ingress를 통해 Django Pods로 전달되고, 애플리케이션은 MySQL과 Persistent Storage를 기반으로 동작합니다.",
      },
    ],
    resultsDescription:
      "자동 배포 파이프라인이 실제로 동작하는지, GitOps 기반 반영부터 Self-Healing까지 세 가지 관점에서 검증했습니다.",
    resultsItems: [
      {
        title: "결과 01 — GitOps 자동 배포 검증",
        summary:
          "Ops Repo의 manifest 변경이 Argo CD를 통해 자동으로 동기화되고, 실제 클러스터 상태까지 반영되는 것을 확인했습니다.",
        steps: [
          "django-deploy.yaml의 replicas 값을 2에서 3으로 변경",
          "Argo CD가 변경 사항을 자동으로 감지하고 Sync 수행",
          "클러스터에서 Django Pod 수가 3개로 증가한 상태 확인",
        ],
        screenshots: [
          "[스크린샷 1: ArgoCD UI mysite-app Synced/Healthy 화면]",
          "[스크린샷 2: kubectl get pods 결과 — pybo-web pod 3개 Running]",
        ],
        screenshotImages: [
          {
            src: "/images/flowship-argocdsync.png",
            alt: "FlowShip ArgoCD Sync",
            caption: "Argo CD가 Sync된 상태",
          },
          {
            src: "/images/flowship-k8spods.png",
            alt: "FlowShip Kubernetes Pods",
            caption: "Django pod가 3개 떠 있는 결과",
          },
        ],
      },
      {
        title: "결과 02 — 전체 CD 자동화 검증",
        summary:
          "코드 수정부터 브라우저 화면 반영까지 전체 파이프라인이 자동으로 연결되는지 확인했습니다.",
        steps: [
          "navbar.html 문구 Pybo → Auto CI/CD Test v4 수정 후 Git push",
          "Jenkins 자동 빌드 트리거 → jeegle16/django-pybo:v4 이미지 생성",
          "Ops Repo django-deploy.yaml 이미지 태그 v3 → v4 자동 업데이트",
          "ArgoCD 자동 배포",
          "브라우저에서 변경된 문구 Auto CI/CD Test v4 확인",
        ],
        screenshotImages: [
          {
            src: "/images/flowship-jenkins-autobuild.png",
            alt: "FlowShip Jenkins Auto Build",
            caption: "Jenkins 빌드 결과",
          },
          {
            src: "/images/flowship-argocd-autobuild.png",
            alt: "FlowShip ArgoCD Auto Build",
            caption: "Argo CD 자동 배포",
          },
          {
            src: "/images/flowship-pybo.png",
            alt: "FlowShip Browser Result",
            caption: "브라우저 반영 결과",
          },
        ],
      },
      {
        title: "결과 03 — Self-Healing 검증",
        summary:
          "실행 중인 Pod를 강제로 삭제한 뒤, ReplicaSet이 새로운 Pod를 자동으로 생성해 서비스 상태를 복구하는지 확인했습니다.",
        steps: [
          "`kubectl delete pod pybo-web-5845df55f4-8mfjm` 실행",
          "약 5초 내 새로운 Pod가 자동으로 생성되는지 확인",
          "Replica 수가 다시 정상 상태로 유지되는 것을 확인",
        ],
        codeBlock: `pybo-web-5845df55f4-hptj7   1/1   Running   0   37h
pybo-web-5845df55f4-ks9tg   0/1   Pending   0   1s
pybo-web-5845df55f4-ks9tg   1/1   Running   0   5s`,
        screenshotImages: [
          {
            src: "/images/flowship-selfhealing.png",
            alt: "FlowShip Self Healing",
            caption: "Self-Healing 결과 화면",
            className: "max-w-xl mx-auto",
          },
        ],
      },
    ],
    learnedCards: [
      {
        title: "배포 전체 흐름으로서의 CI/CD",
        body: "코드 변경부터 Kubernetes 반영까지 직접 연결해보며, CI/CD가 단순한 빌드가 아니라 전체 배포 과정을 다루는 구조라는 점을 이해하게 되었습니다.",
      },
      {
        title: "분리된 저장소 기반의 배포 자동화 구조",
        body: "App Repo와 Ops Repo를 분리해 운영하면서, 코드와 배포 설정은 연결되지만 다르게 관리될 수 있다는 점을 배웠습니다.",
      },
    ],
  },
  en: {
    back: "Back to projects",
    eyebrow: "DEVOPS PROJECT",
    title: "FLOWSHIP",
    subtitle:
      "A project that built a GitOps-based CI/CD automated deployment pipeline with Jenkins, Docker, ArgoCD, and Kubernetes.",
    meta: ["Personal Project", "GitOps-based CI/CD"],
    links: {
      githubApp: "🔗 GitHub (app)",
      githubOps: "🔗 GitHub (ops)",
    },
    techSkills: "Tech Skills",
    projectSummaryDescription:
      "This section briefly summarizes the problem background, solution approach, and core idea behind the project.",
    whyTitle: "Why I Built This",
    whyCards: [
      {
        title: "Repeated Deployments",
        body: "Every code change required rebuilding, creating an image, and updating the server manually. A single deployment could take around 30 minutes, and even a small mistake could lead to interruption.",
      },
      {
        title: "Environment Drift",
        body: "There were cases where things worked locally but failed on the server. Because configuration management depended on manual handling, it was difficult to maintain consistency.",
      },
      {
        title: "Operational Limits",
        body: "Pod failures had to be checked manually and restarted by hand. Even when traffic increased, server expansion had to be handled manually.",
      },
    ],
    approachTitle: "My Approach",
    approachBlocks: [
      {
        number: "01",
        title: "CI Automation",
        body: "When code is pushed to the App Repo, Jenkins detects it, builds the image, and pushes it to Docker Hub. After the build finishes, the image tag in the Ops Repo is also updated automatically.",
      },
      {
        number: "02",
        title: "GitOps Deployment",
        body: "ArgoCD was configured to detect changes in the Ops Repo and automatically align the cluster state. Git was used as the deployment source of truth so the desired state could be managed in one place.",
      },
      {
        number: "03",
        title: "K8s Operating Structure",
        body: "Web and DB workloads were placed separately across a 4-node cluster. Recovery and deployment flows were organized more stably based on ReplicaSet and Rolling Update.",
      },
    ],
    architectureDescription:
      "This architecture organizes the full flow in which application code changes move through the CI/CD pipeline into image build, deployment configuration updates, and Kubernetes rollout.",
    architectureCards: [
      {
        title: "CI Pipeline",
        flow: "App Repo → Jenkins → Docker Hub",
        body: "When code is reflected in the App Repo, Jenkins runs, builds a new Docker image, and pushes it to Docker Hub.",
      },
      {
        title: "GitOps Delivery",
        flow: "Ops Repo → Argo CD → Kubernetes",
        body: "Jenkins updates the image tag in the Ops Repo, and Argo CD detects the changed deployment configuration and syncs it to the Kubernetes cluster.",
      },
      {
        title: "Kubernetes Runtime",
        flow: "Ingress → Django Pods → MySQL",
        body: "User requests are delivered to Django Pods through Ingress, and the application runs on top of MySQL and persistent storage.",
      },
    ],
    resultsDescription:
      "This section verifies whether the automated deployment pipeline actually worked, from GitOps-based sync to self-healing, through three perspectives.",
    resultsItems: [
      {
        title: "Result 01 — GitOps Automatic Deployment Verification",
        summary:
          "Verified that manifest changes in the Ops Repo were automatically synced through Argo CD and reflected in the actual cluster state.",
        steps: [
          "Changed the replicas value in django-deploy.yaml from 2 to 3",
          "Argo CD automatically detected the change and performed sync",
          "Confirmed that the number of Django pods in the cluster increased to 3",
        ],
        screenshotImages: [
          {
            src: "/images/flowship-argocdsync.png",
            alt: "FlowShip Argo CD sync state",
            caption: "Argo CD in synced state",
          },
          {
            src: "/images/flowship-k8spods.png",
            alt: "FlowShip Django pods",
            caption: "Result showing three Django pods running",
          },
        ],
      },
      {
        title: "Result 02 — End-to-End CD Automation Verification",
        summary:
          "Verified that the entire pipeline, from code modification to browser-visible output, was connected automatically.",
        steps: [
          "Modified the navbar text in navbar.html from Pybo to Auto CI/CD Test v4 and pushed it to Git",
          "Jenkins was triggered automatically and built the image jeegle16/django-pybo:v4",
          "The image tag in django-deploy.yaml in the Ops Repo was automatically updated from v3 to v4",
          "ArgoCD automatically deployed the change",
          "Confirmed the updated text Auto CI/CD Test v4 in the browser",
        ],
        screenshotImages: [
          {
            src: "/images/flowship-jenkins-autobuild.png",
            alt: "FlowShip Jenkins auto build",
            caption: "Jenkins build result",
          },
          {
            src: "/images/flowship-argocd-autobuild.png",
            alt: "FlowShip Argo CD auto deployment",
            caption: "Argo CD automatic deployment result",
          },
          {
            src: "/images/flowship-pybo.png",
            alt: "FlowShip browser result",
            caption: "Browser-applied result",
          },
        ],
      },
      {
        title: "Result 03 — Self-Healing Verification",
        summary:
          "Verified that after forcibly deleting a running pod, ReplicaSet automatically created a new pod and restored the service state.",
        steps: [
          "Run `kubectl delete pod pybo-web-5845df55f4-8mfjm`",
          "Confirmed that a new pod was automatically created within about 5 seconds",
          "Verified that the replica count returned to its normal state",
        ],
        codeBlock: `pybo-web-5845df55f4-hptj7   1/1   Running   0   37h
pybo-web-5845df55f4-ks9tg   0/1   Pending   0   1s
pybo-web-5845df55f4-ks9tg   1/1   Running   0   5s`,
        screenshotImages: [
          {
            src: "/images/flowship-selfhealing.png",
            alt: "FlowShip self-healing result",
            caption: "Self-healing result screen",
            className: "max-w-xl mx-auto",
          },
        ],
      },
    ],
    learnedCards: [
      {
        title: "CI/CD as the Full Deployment Flow",
        body: "By directly connecting code changes all the way to Kubernetes rollout, I came to understand that CI/CD is a structure that covers the entire deployment process, not just build automation.",
      },
      {
        title: "Deployment Automation Architecture Based on Separate Repositories",
        body: "By operating App Repo and Ops Repo separately, I learned that code and deployment configuration are connected, but can still be managed differently.",
      },
    ],
  },
} as const;

function renderStepText(text: string) {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) =>
    part.startsWith("`") && part.endsWith("`") ? (
      <code key={i} className="rounded bg-[#e8ddd0] px-1.5 py-0.5 font-mono text-[0.88em] text-zinc-800">
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    )
  );
}

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

type CoreKeywordCard = {
  title: string;
  body: string;
};

type CoreDescriptionCard = {
  title: string;
  description?: string;
  body?: string;
};

type CoreStage = {
  title: string;
  body: string;
};

type CoreCodeBlock = {
  label: string;
  code: string;
};

type CoreDiagram = {
  request: string;
  gateway: string;
  endpoint: string;
  containerOneTitle: string;
  containerOneItems: string[];
  containerTwoTitle: string;
  containerTwoItems: string[];
  lambda: string;
};

type CoreSection = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tableHeaders?: [string, string];
  rows?: [string, string][];
  keywordCards?: CoreKeywordCard[];
  cards?: CoreDescriptionCard[];
  stages?: CoreStage[];
  flowStages?: string[];
  tracking?: string;
  diagram?: CoreDiagram;
  codeBlocks?: CoreCodeBlock[];
  screenshots?: string[];
  screenshotImage?: {
    src: string;
    alt: string;
    caption: string;
  };
};

type CoreImplementationLocaleCopy = {
  sectionTitle: string;
  sectionDescription: string;
  sections: CoreSection[];
};

const coreImplementationCopy: Record<"kr" | "en", CoreImplementationLocaleCopy> = {
  kr: {
    sectionTitle: "Core Implementation",
    sectionDescription:
      "CI 파이프라인, GitOps 기반 배포 흐름, Kubernetes 런타임 환경으로 나누어 핵심 구현 내용을 정리했습니다.",
    sections: [
      {
        number: "01",
        title: "인프라 환경 구성",
        subtitle: "Vagrant + Kubespray로 4노드 K8s 클러스터 구성",
        description:
          "VirtualBox와 Vagrant를 사용해 4대의 VM을 자동으로 생성하고, Kubespray의 Ansible playbook으로 Kubernetes v1.31.9 클러스터를 설치했습니다. 이후 Worker Node에 role=web, role=db 라벨을 부여해 웹과 데이터베이스 워크로드를 역할별로 분리했습니다.",
        keywordCards: [
          {
            title: "가상 환경 구성",
            body: "Vagrant + VirtualBox, VM 4대 자동 생성",
          },
          {
            title: "클러스터 설치",
            body: "Kubespray Ansible playbook, Kubernetes v1.31.9",
          },
          {
            title: "노드 역할 분리",
            body: "role=web (kube-node1, kube-node2) / role=db (kube-node3)",
          },
        ],
        codeBlocks: [
          {
            label: "노드 라벨링",
            code: `# 노드 라벨링
kubectl label node kube-node1 role=web
kubectl label node kube-node2 role=web
kubectl label node kube-node3 role=db`,
          },
        ],
      },
      {
        number: "02",
        title: "앱 컨테이너화",
        subtitle: "Django와 MySQL 환경에 맞는 Docker 이미지를 구성했습니다.",
        description:
          "python:3.10-slim 기반 Dockerfile을 작성하고, MySQL 연동에 필요한 라이브러리를 포함해 Django 애플리케이션이 컨테이너 환경에서 실행되도록 구성했습니다. 또한 DB 연결 HOST를 고정 IP가 아닌 Kubernetes Service 이름인 pybo-mysql로 설정해, 클러스터 내부 DNS 기반으로 동작하도록 설계했습니다.",
        codeBlocks: [
          {
            label: "Dockerfile",
            code: `FROM python:3.10-slim

RUN apt-get update && apt-get install -y \\
    default-libmysqlclient-dev \\
    build-essential \\
    pkg-config \\
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
COPY . /app/
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]`,
          },
          {
            label: "settings.py DB 설정",
            code: `DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'pybo',
        'USER': 'pybo',
        'PASSWORD': 'pybo1234',
        'HOST': 'pybo-mysql',
        'PORT': '3306',
    }
}`,
          },
        ],
      },
      {
        number: "03",
        title: "Kubernetes 배포 설계",
        subtitle: "웹 서비스와 데이터베이스를 분리하고, Kubernetes 리소스를 역할에 맞게 구성했습니다.",
        description:
          "모든 리소스는 mysite 네임스페이스 안에서 관리되도록 구성했습니다. DB 인증 정보는 Secret으로 분리해 관리하고, MySQL은 role=db 노드에만 배치되도록 nodeSelector를 설정했습니다. 또한 MySQL 데이터는 Persistent Volume Claim을 통해 유지하고, Ingress를 통해 외부 요청이 Django 서비스로 전달되도록 설계했습니다.",
        codeBlocks: [
          {
            label: "django-deploy.yaml 핵심",
            code: `spec:
  replicas: 2
  template:
    spec:
      nodeSelector:
        role: web
      containers:
        - name: django
          image: jeegle16/django-pybo:v5
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 8000`,
          },
          {
            label: "mysql-deploy.yaml 핵심",
            code: `      nodeSelector:
        role: db
      containers:
        - name: mysql
          image: quay.io/sclorg/mysql-80-c9s
          env:
            - name: MYSQL_ROOT_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: mysql-secret
                  key: mysql-root-password
          volumeMounts:
            - name: mysql-data
              mountPath: /var/lib/mysql/data`,
          },
          {
            label: "ingress.yaml 핵심",
            code: `spec:
  ingressClassName: nginx
  rules:
    - host: pybo.mysite.local
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: pybo-web-svc
                port:
                  number: 8000`,
          },
        ],
      },
      {
        number: "04",
        title: "End-to-End 배포 자동화",
        subtitle: "Jenkins CI + ArgoCD CD — 코드 Push 한 번으로 클러스터 반영까지",
        description:
          "Jenkinsfile을 5개 스테이지로 구성해 CI 파이프라인을 설계했습니다. 특히 핵심은 Update Ops Repo 단계로, 빌드가 끝난 뒤 Jenkins가 직접 Ops Repo를 clone하고 django-deploy.yaml의 이미지 태그를 새 버전으로 교체한 뒤 다시 push하도록 구성했습니다. 이후 Argo CD가 저장소 변경을 감지해 Kubernetes 클러스터와 자동으로 동기화되도록 설계했습니다.",
        flowStages: [
          "Checkout",
          "Set Version",
          "Docker Build",
          "Docker Login & Push",
          "Update Ops Repo",
        ],
        codeBlocks: [
          {
            label: "Jenkinsfile 트리거 + Update Ops Repo stage",
            code: `triggers {
    pollSCM('H/1 * * * *')
}

stage('Update Ops Repo') {
    steps {
        script {
            withCredentials([usernamePassword(
                credentialsId: 'github-token',
                usernameVariable: 'GIT_USER',
                passwordVariable: 'GIT_TOKEN'
            )]) {
                sh """
                rm -rf ops-repo
                git clone https://\${GIT_USER}:\${GIT_TOKEN}@github.com/\\
jeegle16-alt/minipro2_opsrepo.git ops-repo
                cd ops-repo
                sed -i 's#image: .*/django-pybo:.*#image: \\
\${DOCKER_IMAGE}:\${VERSION}#' k8s/mysite/django-deploy.yaml
                git config user.name "jenkins"
                git config user.email "jenkins@example.com"
                git add k8s/mysite/django-deploy.yaml
                git commit -m "Update image tag to \${VERSION}"
                git push origin main
                """
            }
        }
    }
}`,
          },
          {
            label: "ArgoCD Application syncPolicy",
            code: `syncPolicy:
  automated:
    prune: true
    selfHeal: true
syncOptions:
  - CreateNamespace=true`,
          },
        ],
        screenshotImage: {
          src: "/images/flowship-jenkinspipelinejob.png",
          alt: "FlowShip Jenkins Pipeline Job",
          caption: "Jenkins Pipeline Job 설정 화면",
        },
      },
    ],
  },
  en: {
    sectionTitle: "Core Implementation",
    sectionDescription:
      "This section organizes the core implementation across the CI pipeline, GitOps-based deployment flow, and Kubernetes runtime environment.",
    sections: [
      {
        number: "01",
        title: "Infrastructure Setup",
        subtitle: "Built a 4-node K8s cluster with Vagrant and Kubespray",
        description:
          "Using VirtualBox and Vagrant, four VMs were created automatically, and a Kubernetes v1.31.9 cluster was installed with the Kubespray Ansible playbook. After that, role=web and role=db labels were assigned to the worker nodes so web and database workloads could be separated by role.",
        keywordCards: [
          {
            title: "Virtual Environment Setup",
            body: "Vagrant + VirtualBox, four VMs created automatically",
          },
          {
            title: "Cluster Installation",
            body: "Kubespray Ansible playbook, Kubernetes v1.31.9",
          },
          {
            title: "Node Role Separation",
            body: "role=web (kube-node1, kube-node2) / role=db (kube-node3)",
          },
        ],
        codeBlocks: [
          {
            label: "Node Labeling",
            code: `# Node labeling
kubectl label node kube-node1 role=web
kubectl label node kube-node2 role=web
kubectl label node kube-node3 role=db`,
          },
        ],
      },
      {
        number: "02",
        title: "App Containerization",
        subtitle: "Built Docker images suited for the Django and MySQL environment.",
        description:
          "A Dockerfile based on python:3.10-slim was written, including the libraries required for MySQL integration so that the Django application could run in a containerized environment. In addition, the DB host was set not to a fixed IP but to the Kubernetes Service name pybo-mysql so that it would operate through internal cluster DNS.",
        codeBlocks: [
          {
            label: "Dockerfile",
            code: `FROM python:3.10-slim

RUN apt-get update && apt-get install -y \\
    default-libmysqlclient-dev \\
    build-essential \\
    pkg-config \\
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
COPY . /app/
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]`,
          },
          {
            label: "settings.py DB config",
            code: `DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'pybo',
        'USER': 'pybo',
        'PASSWORD': 'pybo1234',
        'HOST': 'pybo-mysql',
        'PORT': '3306',
    }
}`,
          },
        ],
      },
      {
        number: "03",
        title: "Kubernetes Deployment Design",
        subtitle: "Separated the web service and database, and configured Kubernetes resources according to their roles.",
        description:
          "All resources were configured to be managed under the mysite namespace. DB credentials were separated into a Secret, MySQL was configured through nodeSelector so that it would be scheduled only on role=db nodes, MySQL data was preserved through a Persistent Volume Claim, and external requests were designed to reach the Django service through Ingress.",
        codeBlocks: [
          {
            label: "django-deploy.yaml core",
            code: `spec:
  replicas: 2
  template:
    spec:
      nodeSelector:
        role: web
      containers:
        - name: django
          image: jeegle16/django-pybo:v5
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 8000`,
          },
          {
            label: "mysql-deploy.yaml core",
            code: `      nodeSelector:
        role: db
      containers:
        - name: mysql
          image: quay.io/sclorg/mysql-80-c9s
          env:
            - name: MYSQL_ROOT_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: mysql-secret
                  key: mysql-root-password
          volumeMounts:
            - name: mysql-data
              mountPath: /var/lib/mysql/data`,
          },
          {
            label: "ingress.yaml core",
            code: `spec:
  ingressClassName: nginx
  rules:
    - host: pybo.mysite.local
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: pybo-web-svc
                port:
                  number: 8000`,
          },
        ],
      },
      {
        number: "04",
        title: "End-to-End Deployment Automation",
        subtitle: "Jenkins CI + ArgoCD CD — from a single code push all the way to cluster rollout",
        description:
          "The Jenkinsfile was designed with five stages as a CI pipeline. The key part was the Update Ops Repo stage, where Jenkins cloned the Ops Repo after the build finished, replaced the image tag in django-deploy.yaml with the new version, and pushed it back. After that, Argo CD was designed to detect the repository change and automatically sync the Kubernetes cluster.",
        flowStages: [
          "Checkout",
          "Set Version",
          "Docker Build",
          "Docker Login & Push",
          "Update Ops Repo",
        ],
        codeBlocks: [
          {
            label: "Jenkinsfile trigger + Update Ops Repo stage",
            code: `triggers {
    pollSCM('H/1 * * * *')
}

stage('Update Ops Repo') {
    steps {
        script {
            withCredentials([usernamePassword(
                credentialsId: 'github-token',
                usernameVariable: 'GIT_USER',
                passwordVariable: 'GIT_TOKEN'
            )]) {
                sh """
                rm -rf ops-repo
                git clone https://\${GIT_USER}:\${GIT_TOKEN}@github.com/\\
jeegle16-alt/minipro2_opsrepo.git ops-repo
                cd ops-repo
                sed -i 's#image: .*/django-pybo:.*#image: \\
\${DOCKER_IMAGE}:\${VERSION}#' k8s/mysite/django-deploy.yaml
                git config user.name "jenkins"
                git config user.email "jenkins@example.com"
                git add k8s/mysite/django-deploy.yaml
                git commit -m "Update image tag to \${VERSION}"
                git push origin main
                """
            }
        }
    }
}`,
          },
          {
            label: "Argo CD Application syncPolicy",
            code: `syncPolicy:
  automated:
    prune: true
    selfHeal: true
syncOptions:
  - CreateNamespace=true`,
          },
        ],
        screenshotImage: {
          src: "/images/flowship-jenkinspipelinejob.png",
          alt: "FlowShip Jenkins Pipeline Job",
          caption: "Jenkins Pipeline Job configuration screen",
        },
      },
    ],
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

function ScreenshotPlaceholder({ text }: { text: string }) {
  return (
    <div className="flex min-h-[12rem] items-center justify-center rounded-[1.35rem] border-2 border-dashed border-[#d8ccb4] bg-[#fffdf8] px-6 py-8 text-center">
      <p className="font-ko break-keep text-[1rem] leading-8 text-[#6b5f52] sm:text-[1.05rem]">
        {text}
      </p>
    </div>
  );
}

function ScreenshotImage({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`space-y-3 ${className ?? ""}`}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block w-full cursor-zoom-in"
        >
          <img
            src={src}
            alt={alt}
            className="block w-full rounded-[1.35rem] border border-zinc-950 transition-transform duration-300 ease-out hover:scale-[1.02]"
          />
        </button>
        <p className="font-ko break-keep text-center text-[1rem] leading-8 text-[#6b5f52] sm:text-[1.05rem]">
          {caption}
        </p>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/72 px-6 py-10"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[88vh] max-w-[88vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Close
            </button>
            <img
              src={src}
              alt={alt}
              className="max-h-[88vh] w-auto max-w-[88vw] rounded-[1.25rem] border border-white/25 bg-white object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

function WingItCoreImplementation() {
  const { locale } = useLocale();
  const isKr = locale === "kr";
  const text = coreImplementationCopy[locale as "kr" | "en"];

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
          {text.sections.map((section) => (
            <div
              key={`${section.number}-${section.title}`}
              className="space-y-8 rounded-[1.9rem] border border-[#d8ccb4] bg-[#f7efe2] p-6 sm:space-y-10 sm:p-8"
            >
              <CoreSectionBadge number={section.number} title={section.title} />
              <div className="space-y-4">
                <p className="font-ko break-keep text-[1.2rem] font-semibold leading-relaxed text-zinc-950 sm:text-[1.34rem]">
                  {section.subtitle}
                </p>
                <p
                  lang={isKr ? "ko" : "en"}
                  className={`${isKr ? "font-ko break-keep" : "font-en"} w-full text-[1.02rem] leading-8 text-[#4f463d] sm:text-[1.12rem]`}
                >
                  {section.description}
                </p>
              </div>

              {"keywordCards" in section && section.keywordCards ? (
                <div className="grid gap-6 lg:grid-cols-3">
                  {section.keywordCards.map((card) => (
                    <article
                      key={card.title}
                      className="rounded-[1.65rem] border border-[#d8ccb4] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                    >
                      <h4 className="font-ko break-keep text-[1.18rem] font-semibold text-zinc-950 sm:text-[1.26rem]">
                        {card.title}
                      </h4>
                      <p className="mt-3 break-keep text-[1rem] leading-8 text-[#4f463d] sm:text-[1.05rem]">
                        {card.body}
                      </p>
                    </article>
                  ))}
                </div>
              ) : null}

              {"rows" in section && section.rows ? (
                <div className="overflow-hidden rounded-[1.65rem] border border-[#d8ccb4] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                  <div className="grid grid-cols-[minmax(180px,0.9fr)_minmax(0,2.1fr)] border-b border-[#e5ddd0] bg-[#faf6ef] px-6 py-4">
                    <div className="text-center font-ko text-[1rem] font-semibold uppercase tracking-[0.16em] text-amber-700 sm:text-[1.06rem]">
                      {section.tableHeaders?.[0] ?? ""}
                    </div>
                    <div className="text-center font-ko text-[1rem] font-semibold uppercase tracking-[0.16em] text-amber-700 sm:text-[1.06rem]">
                      {section.tableHeaders?.[1] ?? ""}
                    </div>
                  </div>
                  <div className="divide-y divide-[#eee6da]">
                    {section.rows.map(([feature, description]: [string, string]) => (
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
              ) : null}

              {"cards" in section && section.cards ? (
                <div className={`grid gap-6 ${section.cards.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                  {section.cards.map((card) => (
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
                    </article>
                  ))}
                </div>
              ) : null}

              {"flowStages" in section && section.flowStages ? (
                <div className="grid gap-4 xl:grid-cols-[repeat(5,minmax(0,1fr))] xl:items-stretch xl:gap-8">
                  {section.flowStages.map((stage: string, index: number) => (
                    <div
                      key={stage}
                      className="relative flex min-h-[6.8rem] items-center justify-center rounded-[1.6rem] border border-[#d8ccb4] bg-[#fffdf8] p-5 text-center shadow-[0_10px_26px_rgba(0,0,0,0.04)]"
                    >
                      {index !== (section.flowStages?.length ?? 0) - 1 && (
                        <span className="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-xl text-amber-700 xl:block">
                          →
                        </span>
                      )}
                      <p className="font-en text-[1rem] font-semibold uppercase tracking-[0.18em] text-amber-700 sm:text-[1.08rem]">
                        {stage}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {"stages" in section && section.stages ? (
                <div className="grid gap-6 xl:grid-cols-[repeat(4,minmax(0,1fr))] xl:items-stretch xl:gap-8">
                  {section.stages.map((stage, index) => (
                    <div
                      key={stage.title}
                      className="relative rounded-[1.6rem] border border-[#d8ccb4] bg-[#fffdf8] p-5 shadow-[0_10px_26px_rgba(0,0,0,0.04)]"
                    >
                      {index !== (section.stages?.length ?? 0) - 1 && (
                        <span className="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-xl text-amber-700 xl:block">
                          →
                        </span>
                      )}
                      <p className="font-en text-[1rem] font-semibold uppercase tracking-[0.18em] text-amber-700 sm:text-[1.08rem]">
                        {stage.title}
                      </p>
                      <p
                        lang={isKr ? "ko" : "en"}
                        className={`${isKr ? "font-ko break-keep" : "font-en"} mt-3 text-[0.98rem] leading-7 text-[#4f463d] sm:text-[1.03rem]`}
                      >
                        {stage.body}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {"tracking" in section && section.tracking ? (
                <div className="rounded-[1.4rem] border border-[#eadcc4] bg-[#faf6ef] px-5 py-4">
                  <p
                    lang={isKr ? "ko" : "en"}
                    className={`${isKr ? "font-ko break-keep" : "font-en"} text-[1rem] leading-8 text-[#7b6552] sm:text-[1.05rem]`}
                  >
                    {section.tracking}
                  </p>
                </div>
              ) : null}

              {"diagram" in section && section.diagram ? (
                <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
                  <div className="rounded-[1.75rem] border border-[#d8ccb4] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                    <div className="space-y-4 text-center">
                      <div className="rounded-[1.2rem] border border-[#eadcc4] bg-[#faf6ef] px-5 py-4 text-[1rem] font-semibold text-zinc-950">
                        {section.diagram.request}
                      </div>
                      <div className="text-lg text-amber-700">↓</div>
                      <div className="rounded-[1.2rem] border border-[#eadcc4] bg-[#faf6ef] px-5 py-4 text-[1rem] font-semibold text-zinc-950">
                        {section.diagram.gateway}
                      </div>
                      <div className="text-lg text-amber-700">↓</div>
                      <div className="rounded-[1.2rem] border border-[#eadcc4] bg-[#faf6ef] px-5 py-4 text-[1rem] font-semibold text-zinc-950">
                        {section.diagram.endpoint}
                      </div>
                    </div>
                    <div className="mt-6 grid gap-5">
                      <div className="rounded-[1.3rem] border border-[#d8ccb4] bg-white p-5">
                        <h4 className="text-[1.02rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.08rem]">
                          {section.diagram.containerOneTitle}
                        </h4>
                        <div className="mt-4 space-y-2">
                          {section.diagram.containerOneItems.map((item: string) => (
                            <p key={item} className="font-ko break-keep text-[1.02rem] leading-8 text-zinc-950 sm:text-[1.05rem]">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="mx-auto text-lg text-amber-700">↓</div>
                      <div className="rounded-[1.3rem] border border-[#d8ccb4] bg-white p-5">
                        <h4 className="text-[1.02rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.08rem]">
                          {section.diagram.containerTwoTitle}
                        </h4>
                        <div className="mt-4 space-y-2">
                          {section.diagram.containerTwoItems.map((item: string) => (
                            <p key={item} className="font-ko break-keep text-[1.02rem] leading-8 text-zinc-950 sm:text-[1.05rem]">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="mx-auto text-lg text-amber-700">↓</div>
                      <div className="rounded-[1.2rem] border border-[#eadcc4] bg-[#faf6ef] px-5 py-4 text-center text-[1rem] font-semibold text-zinc-950">
                        {section.diagram.lambda}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {(section.cards ?? []).map((card) => (
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
                          {card.body ?? card.description ?? ""}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}

              {"codeBlocks" in section && section.codeBlocks ? (
                <div className="space-y-5">
                  {section.codeBlocks.map((block) => (
                    <div key={block.label} className="space-y-3">
                      <p className="font-ko break-keep text-[1rem] font-semibold text-zinc-950 sm:text-[1.06rem]">
                        {block.label}
                      </p>
                      <pre className="overflow-x-auto rounded-[1.1rem] bg-slate-900 p-5 text-sm leading-7 text-slate-100 shadow-[0_12px_24px_rgba(15,23,42,0.18)]">
                        <code className="font-mono">{block.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              ) : null}

              {"screenshots" in section && section.screenshots ? (
                <div className={`grid gap-5 ${section.screenshots.length > 1 ? "lg:grid-cols-2" : ""}`}>
                  {section.screenshots.map((shot: string) => (
                    <ScreenshotPlaceholder key={shot} text={shot} />
                  ))}
                </div>
              ) : null}

              {"screenshotImage" in section && section.screenshotImage ? (
                <ScreenshotImage
                  src={section.screenshotImage.src}
                  alt={section.screenshotImage.alt}
                  caption={section.screenshotImage.caption}
                />
              ) : null}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default function CICDPipelineCaseStudy() {
  const { locale } = useLocale();
  const isKr = locale === "kr";
  const text = isKr ? copy.kr : copy.en;
  const techStackGroups = [
    {
      title: "Infrastructure",
      items: ["Vagrant", "VirtualBox", "Ubuntu"],
    },
    {
      title: "Kubernetes",
      items: ["kubeadm", "Kubespray", "Ingress-NGINX", "MetalLB"],
    },
    {
      title: "CI",
      items: ["Jenkins", "Docker", "Docker Hub"],
    },
    {
      title: "CD / GitOps",
      items: ["ArgoCD"],
    },
    {
      title: "App / DB",
      items: ["Django", "MySQL"],
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
                    href="https://github.com/jeegle16-alt/FlowShip-app"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-zinc-950"
                  >
                    {text.links.githubApp}
                  </a>
                  <span className="text-[#b8a58c]">|</span>
                  <a
                    href="https://github.com/jeegle16-alt/FlowShip-ops"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-zinc-950"
                  >
                    {text.links.githubOps}
                  </a>
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
              src="/images/flowship-architecture.png"
              alt="FlowShip architecture"
              fallback="System Architecture placeholder"
              className="mx-auto w-full max-w-5xl rounded-2xl"
            />
            <div className="grid gap-5 lg:grid-cols-3">
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

        <section className="space-y-8">
          <SectionTitle title="Results" description={text.resultsDescription} />
          <div className="grid gap-8">
            {text.resultsItems.map((item) => (
              <article
                key={item.title}
                className="space-y-6 rounded-[1.8rem] border border-[#d8ccb4] bg-[#f7efe2] p-6 sm:p-8"
              >
                <div className="space-y-3">
                  <h3 className="font-ko break-keep text-[1.4rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.65rem]">
                    {item.title}
                  </h3>
                  <p className="font-ko break-keep text-[1.08rem] font-semibold leading-relaxed text-zinc-950 sm:text-[1.18rem]">
                    {item.summary}
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-[#eadcc4] bg-[#faf6ef] px-5 py-5">
                  <ol className="space-y-3">
                    {item.steps.map((step: string, index: number) => (
                      <li
                        key={`${item.title}-${index}`}
                        className="font-ko break-keep text-[1rem] leading-8 text-[#4f463d] sm:text-[1.05rem]"
                      >
                        {index + 1}. {renderStepText(step)}
                      </li>
                    ))}
                  </ol>
                </div>
                {item.codeBlock ? (
                  <div className="space-y-3">
                    <p className="font-ko break-keep text-[1rem] font-semibold text-zinc-950 sm:text-[1.06rem]">
                      터미널 출력
                    </p>
                    <pre className="overflow-x-auto rounded-[1.1rem] bg-slate-900 p-5 text-sm leading-7 text-slate-100 shadow-[0_12px_24px_rgba(15,23,42,0.18)]">
                      <code className="font-mono">{item.codeBlock}</code>
                    </pre>
                  </div>
                ) : null}
                {item.screenshotImages ? (
                  <div className={`grid gap-5 ${item.screenshotImages.length > 1 ? "lg:grid-cols-2" : ""}`}>
                    {item.screenshotImages.map((image) => (
                      <ScreenshotImage
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        caption={image.caption}
                        className={image.className}
                      />
                    ))}
                  </div>
                ) : (
                  <div className={`grid gap-5 ${(item.screenshots ?? []).length > 1 ? "lg:grid-cols-2 xl:grid-cols-3" : ""}`}>
                    {(item.screenshots ?? []).map((shot: string) => (
                      <ScreenshotPlaceholder key={shot} text={shot} />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <div className="border-t border-zinc-950" />

        <section className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-center text-[2.3rem] font-semibold tracking-tight text-zinc-950 sm:text-[2.85rem]">
              What I Learned
            </h2>
          </div>
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
