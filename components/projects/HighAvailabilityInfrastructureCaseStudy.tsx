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
    imageClassName?: string;
  }[];
  screenshotVideos?: {
    src: string;
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
    eyebrow: "INFRASTRUCTURE PROJECT",
    title: "WordPress 고가용성 인프라 구축",
    subtitle:
      "단일 서버 환경의 한계를 해결하기 위해 웹 서버 이중화, 로드밸런싱, 데이터베이스 복제를 적용한 고가용성 WordPress 인프라 구축 프로젝트",
    meta: ["개인 프로젝트", "인프라 구축"],
    links: {
      githubApp: "🔗 GitHub",
      githubOps: "",
    },
    techSkills: "Tech Skills",
    projectSummaryDescription:
      "이 프로젝트의 문제 배경과 해결 방식, 핵심 아이디어를 간단히 정리했습니다.",
    whyTitle: "Why I Built This",
    whyCards: [
      {
        title: "단일 서버 구조의 한계",
        body: "기본적인 웹 서비스 구조에서는 하나의 서버가 웹 서비스와 데이터베이스를 모두 처리합니다. 이 경우 서버에 장애가 발생하면 서비스 전체가 중단될 수 있습니다.",
      },
      {
        title: "고가용성 인프라 필요",
        body: "웹 서비스는 장애 상황에서도 서비스가 지속될 수 있어야 합니다. 이를 위해 웹 서버 이중화, 로드밸런싱, 데이터베이스 복제와 같은 고가용성 아키텍처가 필요했습니다.",
      },
    ],
    approachTitle: "My Approach",
    approachBlocks: [
      {
        number: "01",
        title: "웹 서버 이중화와 로드밸런싱",
        body: "두 개의 WordPress 웹 서버를 구성하고 HAProxy를 통해 트래픽을 분산했습니다. 이를 통해 특정 서버에 장애가 발생해도 서비스가 지속될 수 있는 구조를 만들었습니다.",
      },
      {
        number: "02",
        title: "데이터 안정성과 스토리지 분리",
        body: "MySQL Primary-Replica 복제를 구성해 데이터 안정성을 확보하고, NFS와 iSCSI를 활용해 웹 서버 간 파일 공유와 데이터 저장 구조를 분리했습니다.",
      },
    ],
    architectureDescription:
      "서비스가 특정 서버 한 대에 의존하지 않도록, 요청 처리 계층과 애플리케이션 계층, 데이터 계층을 분리한 고가용성 구조로 설계했습니다.",
    architectureCards: [
      {
        title: "Presentation Layer",
        flow: "HAProxy Load Balancer",
        body: "HAProxy 로드밸런서가 클라이언트 요청을 받아 두 개의 웹 서버로 트래픽을 분산합니다. 이를 통해 특정 서버에 장애가 발생하더라도 다른 서버가 요청을 처리할 수 있도록 구성했습니다.",
      },
      {
        title: "Application Layer",
        flow: "Apache + WordPress + NFS",
        body: "두 개의 Apache 웹 서버에서 WordPress 애플리케이션을 실행하도록 구성했습니다. 또한 NFS를 통해 WordPress 소스 코드와 업로드 파일을 공유하여 웹 서버 간 서비스 일관성을 유지했습니다.",
      },
      {
        title: "Data Layer",
        flow: "MySQL Primary-Replica + iSCSI",
        body: "MySQL Primary–Replica 구조를 구성하여 데이터 안정성을 확보했습니다. 데이터 저장소는 iSCSI 기반 네트워크 스토리지를 사용해 웹 서버와 분리된 저장 구조로 운영했습니다.",
      },
    ],
    resultsDescription:
      "구성한 인프라가 실제로 동작하는지 확인하기 위해 웹 접속, 데이터 복제, 요청 분산, 장애 대응 테스트를 진행했습니다.",
    resultsItems: [
      {
        title: "결과 01 — 웹 서비스 및 DB 연결 확인",
        summary:
          "HAProxy와 각 웹 서버를 통해 WordPress가 정상적으로 열리는지 확인하고, 입력한 데이터가 DB에 저장되고 복제되는지도 함께 점검했습니다.",
        steps: [],
        screenshots: [],
        screenshotImages: [
          {
            src: "/images/wordpress-result-web1.png",
            alt: "lb01 WordPress access result",
            caption: "http://lb01.example.com (-> 192.168.56.10)",
          },
          {
            src: "/images/wordpress-result-web2.png",
            alt: "web01 WordPress access result",
            caption: "http://web01.example.com (-> 192.168.57.11)",
          },
          {
            src: "/images/wordpress-result-web3.png",
            alt: "web02 WordPress access result",
            caption: "http://web02.example.com (-> 192.168.57.12)",
          },
          {
            src: "/images/wordpress-result-db1.png",
            alt: "db01 stored data result",
            caption: "db01에 정보가 모두 저장됨",
          },
          {
            src: "/images/wordpress-result-db2.png",
            alt: "db02 replicated data result",
            caption: "db02에도 복제됨",
          },
        ],
      },
      {
        title: "결과 02 — 로드밸런싱 동작 확인",
        summary:
          "두 웹 서버의 access log를 동시에 확인해 요청이 번갈아 처리되는지 테스트했고, Round Robin 방식의 분산이 정상적으로 동작함을 확인했습니다.",
        steps: [],
        screenshots: [],
        screenshotVideos: [
          {
            src: "/images/wordpress-result-lb.mp4",
            caption:
              "web01과 web02에서 sudo tail -f /var/log/httpd/access_log 동시 실행",
            className: "max-w-4xl",
          },
        ],
      },
      {
        title: "결과 03 — 장애 대응 테스트",
        summary:
          "웹 서버 하나에서 Apache 서비스를 중지한 뒤에도 HAProxy를 통한 접속이 유지되는지 확인했고, 남은 서버가 요청을 계속 처리하는 것을 확인했습니다.",
        steps: [],
        screenshots: [],
        screenshotVideos: [
          {
            src: "/images/wordpress-result-incident response.mp4",
            caption: "web01에서 Apache 서비스 중지 - sudo systemctl stop httpd",
            className: "max-w-4xl",
          },
        ],
      },
    ],
    learnedCards: [
      {
        title: "고가용성은 단순히 서버를 여러 대 두는 것으로 끝나지 않는다는 점",
        body: "웹 서버 이중화뿐 아니라 로드밸런싱, 데이터베이스 복제, 파일 공유 구조까지 함께 설계되어야 서비스가 안정적으로 운영될 수 있다는 점을 직접 확인했습니다.",
      },
      {
        title: "인프라는 설정만 하는 것이 아니라 실제로 동작하는지 검증하는 과정이 중요하다는 점",
        body: "웹 접속, 데이터 동기화, 요청 분산, 장애 대응 테스트를 진행하면서 구성한 구조가 실제로 어떻게 동작하는지 직접 확인할 수 있었습니다.",
      },
    ],
  },
  en: {
    back: "Back to projects",
    eyebrow: "INFRASTRUCTURE PROJECT",
    title: "WordPress High-Availability Infrastructure",
    subtitle:
      "A high-availability WordPress infrastructure project designed to move beyond the limits of a single-server setup through web redundancy, load balancing, and database replication.",
    meta: ["Personal Project", "Infrastructure Build"],
    links: {
      githubApp: "🔗 GitHub",
      githubOps: "",
    },
    techSkills: "Tech Skills",
    projectSummaryDescription:
      "To improve the limits of a single-server setup, this section outlines how a high-availability WordPress infrastructure was built around web redundancy and load balancing.",
    whyTitle: "Why I Built This",
    whyCards: [
      {
        title: "Single-Server Limitation",
        body: "In a basic web service setup, one server often handles both the web layer and the database. If that server fails, the whole service can go down.",
      },
      {
        title: "Need for High Availability",
        body: "A web service needs to stay available even during failures. That made a high-availability design with web redundancy, load balancing, and database replication necessary.",
      },
    ],
    approachTitle: "My Approach",
    approachBlocks: [
      {
        number: "01",
        title: "Web Redundancy and Load Balancing",
        body: "Two WordPress web servers were prepared and traffic was distributed through HAProxy. This made it possible for the service to stay online even if one server failed.",
      },
      {
        number: "02",
        title: "Data Stability and Storage Separation",
        body: "MySQL Primary-Replica replication was configured for data stability, while NFS and iSCSI were used to separate shared web files from persistent data storage.",
      },
    ],
    architectureDescription:
      "This architecture was designed as a high-availability structure that separates the request layer, application layer, and data layer so the service does not depend on a single server.",
    architectureCards: [
      {
        title: "Presentation Layer",
        flow: "HAProxy Load Balancer",
        body: "HAProxy receives client requests and distributes traffic across two web servers. This allows the remaining server to keep handling requests even if one server fails.",
      },
      {
        title: "Application Layer",
        flow: "Apache + WordPress + NFS",
        body: "WordPress runs on two Apache web servers. NFS is used to share WordPress source code and uploaded files so both servers stay consistent.",
      },
      {
        title: "Data Layer",
        flow: "MySQL Primary-Replica + iSCSI",
        body: "A MySQL Primary-Replica setup was used for data stability. Storage was separated from the web layer through iSCSI-based network volumes.",
      },
    ],
    resultsDescription:
      "Web access, data replication, traffic distribution, and failover were tested to confirm that the infrastructure works as intended.",
    resultsItems: [
      {
        title: "Result 01 — Web Access and DB Connection Check",
        summary:
          "WordPress access was verified through HAProxy and each web server, and the entered data was also checked to confirm that it was stored and replicated correctly.",
        steps: [],
        screenshots: [],
        screenshotImages: [
          {
            src: "/images/wordpress-result-web1.png",
            alt: "lb01 WordPress access result",
            caption: "http://lb01.example.com (-> 192.168.56.10)",
          },
          {
            src: "/images/wordpress-result-web2.png",
            alt: "web01 WordPress access result",
            caption: "http://web01.example.com (-> 192.168.57.11)",
          },
          {
            src: "/images/wordpress-result-web3.png",
            alt: "web02 WordPress access result",
            caption: "http://web02.example.com (-> 192.168.57.12)",
          },
          {
            src: "/images/wordpress-result-db1.png",
            alt: "db01 stored data result",
            caption: "All entered data is stored in db01",
          },
          {
            src: "/images/wordpress-result-db2.png",
            alt: "db02 replicated data result",
            caption: "Replicated to db02 as well",
          },
        ],
      },
      {
        title: "Result 02 — Load Balancing Verification",
        summary:
          "Access logs on both web servers were checked at the same time to verify that requests were being processed alternately and that round-robin distribution was working as expected.",
        steps: [],
        screenshots: [],
        screenshotVideos: [
          {
            src: "/images/wordpress-result-lb.mp4",
            caption:
              "sudo tail -f /var/log/httpd/access_log was run on web01 and web02 at the same time",
            className: "max-w-4xl",
          },
        ],
      },
      {
        title: "Result 03 — Failover Verification",
        summary:
          "Even after Apache was stopped on one web server, access through HAProxy remained available and the remaining server continued handling requests.",
        steps: [],
        screenshots: [],
        screenshotVideos: [
          {
            src: "/images/wordpress-result-incident response.mp4",
            caption: "Apache was stopped on web01 with sudo systemctl stop httpd",
            className: "max-w-4xl",
          },
        ],
      },
    ],
    learnedCards: [
      {
        title: "High availability is more than just adding more servers",
        body: "This project made it clear that stable service operation depends on designing load balancing, database replication, and shared file handling together, not just adding more web servers.",
      },
      {
        title: "Infrastructure matters only when its behavior is verified",
        body: "By testing web access, data synchronization, traffic distribution, and failover, I was able to confirm how the designed structure actually behaves in practice.",
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
  bullets?: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageFallback?: string;
  codeLabel?: string;
  code?: string;
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
      "This section summarizes the core implementation across infrastructure setup, containerization, Kubernetes deployment design, and end-to-end deployment automation.",
    sections: [
      {
        number: "01",
        title: "Infrastructure Setup",
        subtitle: "Built a 4-node Kubernetes cluster with Vagrant and Kubespray",
        description:
          "Four VMs were provisioned through VirtualBox and Vagrant, and Kubernetes v1.31.9 was installed with Kubespray. Worker nodes were then labeled with role=web and role=db so web and database workloads could be separated by role.",
        keywordCards: [
          {
            title: "Virtual Environment",
            body: "Vagrant + VirtualBox, four VMs created automatically",
          },
          {
            title: "Cluster Install",
            body: "Kubespray Ansible playbook, Kubernetes v1.31.9",
          },
          {
            title: "Role Split",
            body: "role=web (kube-node1, kube-node2) / role=db (kube-node3)",
          },
        ],
        codeBlocks: [
          {
            label: "Node Labeling",
            code: `# 노드 라벨링
kubectl label node kube-node1 role=web
kubectl label node kube-node2 role=web
kubectl label node kube-node3 role=db`,
          },
        ],
      },
      {
        number: "02",
        title: "App Containerization",
        subtitle: "Built a Docker image suited for Django and MySQL",
        description:
          "A Dockerfile was written on top of python:3.10-slim with the libraries needed for MySQL integration. The DB host was set to the Kubernetes Service name pybo-mysql instead of a fixed IP so the application would run through internal cluster DNS.",
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
        screenshots: [
          "[스크린샷: Docker Hub jeegle16/django-pybo 태그 목록 (v1~v4)]",
        ],
      },
      {
        number: "03",
        title: "Kubernetes Deployment Design",
        subtitle: "Separated web and database workloads with role-based Kubernetes resources",
        description:
          "All resources were managed under the mysite namespace. DB credentials were separated into Secret, MySQL was pinned to role=db nodes through nodeSelector, MySQL data was persisted through PVC, and external requests were routed to the Django service through Ingress.",
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
        screenshots: ["[스크린샷: http://pybo.mysite.local/ 브라우저 접속 화면]"],
      },
      {
        number: "04",
        title: "End-to-End Deployment Automation",
        subtitle: "Jenkins CI + Argo CD CD — from code push to cluster rollout",
        description:
          "The Jenkinsfile was organized into five stages, with Update Ops Repo as the key step. After the build finishes, Jenkins clones the Ops Repo, replaces the image tag in django-deploy.yaml with the new version, and pushes it back. Argo CD then detects the repository change and syncs it into the Kubernetes cluster.",
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
        screenshots: ["[스크린샷: Jenkins Pipeline Job 설정 화면]"],
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
  imageClassName,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  imageClassName?: string;
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
            className={`block aspect-[16/10] w-full rounded-[1.35rem] bg-transparent object-contain transition-transform duration-300 ease-out hover:scale-[1.02] ${imageClassName ?? ""}`.trim()}
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

function ScreenshotVideo({
  src,
  caption,
  className,
}: {
  src: string;
  caption: string;
  className?: string;
}) {
  return (
    <div className={`mx-auto space-y-3 ${className ?? ""}`}>
      <video
        controls
        preload="metadata"
        className="block w-full rounded-[1.35rem] bg-black"
      >
        <source src={src} />
      </video>
      <p className="font-ko break-keep text-center text-[1rem] leading-8 text-[#6b5f52] sm:text-[1.05rem]">
        {caption}
      </p>
    </div>
  );
}

function WingItCoreImplementation() {
  const { locale } = useLocale();
  const isKr = locale === "kr";
  const _legacy = coreImplementationCopy[locale as "kr" | "en"];
  const sectionDescription = isKr
    ? "가상화 환경 구성부터 로드밸런싱, 데이터베이스 복제, 파일 공유, 스토리지 분리까지 고가용성 인프라를 구성한 핵심 구현 내용을 정리했습니다."
    : "This section summarizes the key implementation points behind the high-availability setup, from virtualization and load balancing to database replication, file sharing, and storage separation.";

  const sections: CoreSection[] = isKr
    ? [
        {
          number: "01",
          title: "Vagrant 기반 가상 환경 구성",
          subtitle:
            "Vagrant와 VirtualBox로 역할별 VM을 분리해 인프라 기반을 구성했습니다.",
          description:
            "로드밸런서, 웹 서버, DB 서버, 스토리지 서버를 각각 분리된 VM으로 만들고, 네트워크도 요청 처리, 애플리케이션, 데이터 계층으로 나누어 고가용성 인프라 구조를 구성했습니다.",
          bullets: [
            "3개 서브넷 기반 요청 처리·웹 서비스·데이터 계층 분리",
            "로드밸런서·웹 서버·DB 서버·스토리지 서버 역할별 VM 정의",
            "서버 역할별 CPU·메모리 차등 할당 기반 자원 분배",
          ],
          imageSrc: "/images/vagrant.png",
          imageAlt: "Vagrantfile config",
          imageFallback: "[이미지: Vagrantfile 코드 캡처]",
          codeLabel: "Vagrantfile 핵심 설정",
          code: `rubyvm_subnet1 = "192.168.56."  # 외부 접속용
vm_subnet2 = "192.168.57."  # 웹/NFS
vm_subnet3 = "192.168.58."  # DB/스토리지

config.vm.define "lb01" do |node|
  node.vm.provider "virtualbox" do |vb|
    vb.cpus = 1; vb.memory = 1024
  end
  node.vm.network "private_network",
    ip: vm_subnet1 + "10", nic_type: "virtio"
end`,
        },
        {
          number: "02",
          title: "HAProxy 로드밸런싱 설정",
          subtitle:
            "요청을 분산하고 헬스 체크를 적용해 웹 계층의 가용성을 높였습니다.",
          description:
            "HAProxy를 로드밸런서로 두고 두 개의 WordPress 웹 서버에 요청을 분산했습니다. frontend와 backend를 나누고 Round Robin과 헬스 체크를 적용해, 특정 서버에 장애가 발생해도 서비스가 지속되도록 했습니다.",
          bullets: [
            "Round Robin 방식 기반 두 웹 서버 트래픽 균등 분산",
            "헬스 체크 적용 기반 장애 서버 자동 제외 설정",
          ],
          imageSrc: "/images/haproxy.png",
          imageAlt: "HAProxy config",
          imageFallback: "[이미지: haproxy.cfg 설정 캡처]",
          codeLabel: "haproxy.cfg 핵심 설정",
          code: `frontend web_frontend
    bind *:80
    default_backend web_servers

backend web_servers
    balance roundrobin
    server web01 192.168.57.11:80 check
    server web02 192.168.57.12:80 check`,
        },
        {
          number: "03",
          title: "MySQL Replication 구성",
          subtitle:
            "Primary–Secondary 복제를 통해 데이터 동기화와 안정성 구조를 만들었습니다.",
          description:
            "MySQL Primary–Secondary 복제를 구성해 Primary 서버의 변경 사항이 Secondary 서버에 반영되도록 설정했습니다. 이를 통해 단일 DB 장애에 대비할 수 있는 데이터 복제 구조를 구현했습니다.",
          bullets: [
            "Primary 서버 binlog 기록 기반 데이터 변경 이력 복제",
            "CHANGE MASTER TO 기반 Primary-Secondary 복제 연결 설정",
          ],
          imageSrc: "/images/mysql-replication.png",
          imageAlt: "MySQL replication status",
          imageFallback:
            "[이미지: SHOW SLAVE STATUS 결과 캡처 — Slave_IO_Running: Yes / Slave_SQL_Running: Yes 보이는 부분]",
          codeLabel: "MySQL 복제 설정 핵심",
          code: `-- Primary (db01)
server-id     = 1
log-bin       = mysql-bin
binlog_format = ROW

-- Secondary (db02)
CHANGE MASTER TO
  MASTER_HOST='192.168.58.13',
  MASTER_LOG_FILE='mysql-bin.000001',
  MASTER_LOG_POS=2192,
  GET_MASTER_PUBLIC_KEY=1;
START SLAVE;`,
        },
        {
          number: "04",
          title: "NFS 파일 공유 구성",
          subtitle:
            "웹 서버가 같은 파일을 참조할 수 있도록 공유 파일 시스템을 구성했습니다.",
          description:
            "NFS 서버를 두고 WordPress 소스 코드와 업로드 파일을 두 웹 서버가 함께 사용하도록 설정했습니다. 이를 통해 어느 서버로 요청이 들어오더라도 같은 파일을 서비스할 수 있게 했습니다.",
          bullets: [
            "두 웹 서버의 WordPress 소스 코드·업로드 파일 공통 참조 구성",
            "NFS 권한 및 SELinux 정책 조정 기반 Apache 동작 연계",
          ],
          imageSrc: "/images/nfs.png",
          imageAlt: "NFS config and mount",
          imageFallback: "[이미지: /etc/exports 설정 또는 mount 상태 캡처]",
          codeLabel: "NFS 공유 설정 핵심",
          code: `# NFS 공유 설정 (/etc/exports)
/srv/wordpress 192.168.57.11(rw,sync,no_root_squash)
/srv/wordpress 192.168.57.12(rw,sync,no_root_squash)

# 웹서버 fstab 마운트
192.168.57.20:/srv/wordpress \\
  /var/www/html/wordpress nfs defaults 0 0`,
        },
        {
          number: "05",
          title: "iSCSI 스토리지 구성",
          subtitle:
            "DB 저장소를 분리하고 인증 기반 접근으로 보안을 강화했습니다.",
          description:
            "iSCSI를 이용해 DB 서버의 데이터 저장소를 네트워크 스토리지로 분리했습니다. CHAP 인증을 적용해 허가된 서버만 스토리지에 접근할 수 있게 했고, MySQL 데이터 디렉토리도 iSCSI 마운트 경로로 옮겼습니다.",
          bullets: [
            "서버별 IQN 정의 기반 데이터 저장소 연결 대상 구분",
            "CHAP 인증 적용 기반 인가 서버만 스토리지 접근 허용",
            "_netdev 옵션 적용 기반 부팅 시 네트워크 스토리지 마운트 순서 보장",
          ],
          imageSrc: "/images/iscsi.png",
          imageAlt: "iSCSI CHAP configuration",
          imageFallback:
            "[이미지: iscsid.conf CHAP 설정 또는 iscsiadm 연결 성공 화면 캡처]",
          codeLabel: "iSCSI 설정 핵심",
          code: `# CHAP 인증 설정 (/etc/iscsi/iscsid.conf)
node.session.auth.authmethod = CHAP
node.session.auth.username   = db01_user
node.session.auth.password = ********

# fstab 마운트
/dev/sdb1 /mnt/mysql_data01 ext4 defaults,_netdev 0 0`,
        },
      ]
    : [
        {
          number: "01",
          title: "Vagrant-based Virtual Environment",
          subtitle:
            "Vagrant and VirtualBox were used to divide the environment into role-based VMs.",
          description:
            "The load balancer, web servers, database server, and storage server were built as separate VMs, and the network was divided into request, application, and data layers to form the HA structure.",
          bullets: [
            "Three subnets separated by request, web, and data layers",
            "Role-based VM definition",
            "Resource allocation by CPU and memory per server role",
          ],
          imageSrc: "/images/vagrant.png",
          imageAlt: "Vagrantfile configuration",
          imageFallback: "[Image: Vagrantfile capture]",
          codeLabel: "Vagrantfile core snippet",
          code: `rubyvm_subnet1 = "192.168.56."  # external access
vm_subnet2 = "192.168.57."  # web/NFS
vm_subnet3 = "192.168.58."  # DB/storage

config.vm.define "lb01" do |node|
  node.vm.provider "virtualbox" do |vb|
    vb.cpus = 1; vb.memory = 1024
  end
  node.vm.network "private_network",
    ip: vm_subnet1 + "10", nic_type: "virtio"
end`,
        },
        {
          number: "02",
          title: "HAProxy Load Balancing",
          subtitle:
            "Traffic was distributed and health checks were applied to improve availability in the web tier.",
          description:
            "HAProxy was placed in front of two WordPress web servers to distribute requests. Frontend and backend were separated, and round-robin balancing with health checks was applied so the service could continue even if one server failed.",
          bullets: [
            "Round-robin distribution",
            "Health-check-based exclusion",
            "Frontend / backend separation",
          ],
          imageSrc: "/images/haproxy.png",
          imageAlt: "HAProxy configuration",
          imageFallback: "[Image: haproxy.cfg capture]",
          codeLabel: "haproxy.cfg core snippet",
          code: `frontend web_frontend
    bind *:80
    default_backend web_servers

backend web_servers
    balance roundrobin
    server web01 192.168.57.11:80 check
    server web02 192.168.57.12:80 check`,
        },
        {
          number: "03",
          title: "MySQL Replication",
          subtitle:
            "Primary-Secondary replication was used to build a synchronized and more stable data layer.",
          description:
            "MySQL Primary-Secondary replication was configured so changes on the Primary server would be reflected on the Secondary server. This created a replicated data structure prepared for single DB failure.",
          bullets: [
            "Binlog-based change history",
            "Secondary read-only separation",
            "Replication link setup",
          ],
          imageSrc: "/images/mysql-replication.png",
          imageAlt: "MySQL replication status output",
          imageFallback: "[Image: SHOW SLAVE STATUS capture]",
          codeLabel: "MySQL replication core snippet",
          code: `-- Primary (db01)
server-id     = 1
log-bin       = mysql-bin
binlog_format = ROW

-- Secondary (db02)
CHANGE MASTER TO
  MASTER_HOST='192.168.58.13',
  MASTER_LOG_FILE='mysql-bin.000001',
  MASTER_LOG_POS=2192,
  GET_MASTER_PUBLIC_KEY=1;
START SLAVE;`,
        },
        {
          number: "04",
          title: "NFS File Sharing",
          subtitle:
            "A shared file system was configured so both web servers could reference the same files.",
          description:
            "An NFS server was configured so both web servers could use the same WordPress source files and uploaded assets. This kept file responses consistent no matter which server handled the request.",
          bullets: [
            "Shared WordPress files across both web servers",
            "Apache permission handling",
            "SELinux policy enabled",
          ],
          imageSrc: "/images/nfs.png",
          imageAlt: "NFS export and mount state",
          imageFallback: "[Image: /etc/exports or mount status capture]",
          codeLabel: "NFS core snippet",
          code: `# NFS export (/etc/exports)
/srv/wordpress 192.168.57.11(rw,sync,no_root_squash)
/srv/wordpress 192.168.57.12(rw,sync,no_root_squash)

# fstab mount on web servers
192.168.57.20:/srv/wordpress \\
  /var/www/html/wordpress nfs defaults 0 0`,
        },
        {
          number: "05",
          title: "iSCSI Storage Configuration",
          subtitle:
            "DB storage was separated and secured with authenticated access.",
          description:
            "iSCSI was used to separate the database storage into network-attached volumes. CHAP authentication was applied so only approved servers could access the storage, and the MySQL data directory was moved to the iSCSI mount path.",
          bullets: [
            "IQN-based identification",
            "CHAP authentication applied",
            "_netdev mount order guarantee",
          ],
          imageSrc: "/images/iscsi.png",
          imageAlt: "iSCSI CHAP configuration",
          imageFallback: "[Image: iscsid.conf CHAP or iscsiadm connection capture]",
          codeLabel: "iSCSI core snippet",
          code: `# CHAP auth config (/etc/iscsi/iscsid.conf)
node.session.auth.authmethod = CHAP
node.session.auth.username   = db01_user
node.session.auth.password = ********

# fstab mount
/dev/sdb1 /mnt/mysql_data01 ext4 defaults,_netdev 0 0`,
        },
      ];

  return (
    <section className="space-y-12 bg-[#F3EBDD] py-14 sm:space-y-16 sm:py-18">
      <div className="mx-auto w-[92vw] max-w-[1320px] space-y-5">
        <div className="space-y-4">
          <h2 className="font-en text-[2.35rem] font-semibold tracking-tight text-zinc-950 sm:text-[2.95rem]">
            {_legacy.sectionTitle}
          </h2>
          <p
            lang={isKr ? "ko" : "en"}
            className={`${isKr ? "font-ko break-keep" : "font-en"} w-full text-[1.08rem] leading-8 text-[#4f463d] sm:text-[1.16rem]`}
          >
            {sectionDescription}
          </p>
        </div>

        <div className="pt-4 sm:pt-6">
          {sections.map((section) => (
            <article
              key={`${section.number}-${section.title}`}
              className="border-b border-[#d8ccb4] py-10 last:border-b-0"
            >
              <CoreSectionBadge number={section.number} title={section.title} />
              <div className="mt-5 space-y-6">
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

                <div
                  className={`grid gap-3 sm:grid-cols-2 ${
                    (section.bullets ?? []).length === 2
                      ? "mx-auto w-full max-w-4xl lg:grid-cols-2"
                      : "lg:grid-cols-3"
                  }`}
                >
                  {(section.bullets ?? []).map((bullet) => (
                    <div
                      key={bullet}
                      className="flex min-h-[5.8rem] items-center justify-center rounded-[1rem] border-2 border-amber-700/75 bg-[#fffaf0] px-4 py-3 shadow-[0_6px_16px_rgba(180,120,20,0.08)]"
                    >
                      <p
                        lang={isKr ? "ko" : "en"}
                        className={`${isKr ? "font-ko break-keep" : "font-en"} text-center text-[1.02rem] font-semibold leading-7 text-[#4a3c2f] sm:text-[1.08rem]`}
                      >
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="font-ko break-keep text-[1rem] font-semibold text-zinc-950 sm:text-[1.06rem]">
                    {section.codeLabel}
                  </p>
                  <pre className="w-full overflow-x-auto rounded-[1.1rem] bg-slate-900 p-5 text-sm leading-7 text-slate-100 shadow-[0_12px_24px_rgba(15,23,42,0.18)]">
                    <code className="font-mono">{section.code}</code>
                  </pre>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HighAvailabilityInfrastructureCaseStudy() {
  const { locale } = useLocale();
  const isKr = locale === "kr";
  const text = isKr ? copy.kr : copy.en;
  const techStackGroups = [
    {
      title: "Environment",
      items: ["Rocky Linux", "Vagrant", "VirtualBox"],
    },
    {
      title: "Stack",
      items: ["HAProxy", "MySQL", "NFS", "iSCSI", "Apache", "WordPress"],
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
                className="mt-3 max-w-5xl text-[clamp(3.1rem,7.8vw,6.6rem)] font-normal leading-none tracking-tight text-zinc-950"
                style={{ wordBreak: "keep-all", overflowWrap: "normal" }}
              >
                {text.title}
              </h1>
              <p
                className="break-keep max-w-[44rem] text-[clamp(1.18rem,2.05vw,2.02rem)] font-medium leading-[1.65] text-zinc-950"
                style={{ wordBreak: "keep-all", overflowWrap: "normal" }}
              >
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
                <div className="font-en inline-flex items-center gap-3 text-[1.12rem] font-semibold text-zinc-950 sm:text-[1.2rem]">
                  <a
                    href="https://github.com/jeegle16-alt/wordpress-ha-infrastructure/tree/main"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-zinc-950"
                  >
                    {text.links.githubApp}
                  </a>
                  {text.links.githubOps ? (
                    <>
                      <span className="text-[#b8a58c]">|</span>
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-zinc-950"
                      >
                        {text.links.githubOps}
                      </a>
                    </>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-6 sm:pt-7">
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
          <div className="space-y-12 pt-6">
            <div className="space-y-8">
              <p className="font-en text-xl font-bold uppercase tracking-[0.08em] text-amber-700 sm:text-[1.55rem]">
                {text.whyTitle}
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {text.whyCards.map((card) => (
                  <div
                    key={card.title}
                    className="mx-auto w-full max-w-[42rem] rounded-[1.75rem] border border-[#b8b1a3] bg-[#f7efe2] px-6 py-6"
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
              <div className="grid gap-6 sm:grid-cols-2">
                {text.approachBlocks.map((block) => (
                  <div
                    key={block.number}
                    className="mx-auto w-full max-w-[42rem] space-y-4 border-t-2 border-zinc-950 pt-5"
                  >
                    <p className="font-en text-xl font-bold tracking-[0.08em] text-amber-700 sm:text-2xl">{block.number}</p>
                    <p className="text-[1.34rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.48rem]">
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
              src="/images/wordpress-architecture.png"
              alt="WordPress high-availability architecture"
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
          <div className="space-y-0">
            {text.resultsItems.map((item) => (
              <article
                key={item.title}
                className="space-y-6 border-b border-[#d8ccb4] py-8 last:border-b-0"
              >
                <div className="space-y-3">
                  <h3 className="font-ko break-keep text-[1.4rem] font-semibold tracking-tight text-zinc-950 sm:text-[1.65rem]">
                    {item.title}
                  </h3>
                  <p className="font-ko break-keep text-[1.08rem] font-semibold leading-relaxed text-zinc-950 sm:text-[1.18rem]">
                    {item.summary}
                  </p>
                </div>
                {item.screenshotImages ? (
                  item.screenshotImages.length === 5 ? (
                    <div className="space-y-5">
                      <div className="grid gap-5 lg:grid-cols-3">
                        {item.screenshotImages.slice(0, 3).map((image) => (
                          <ScreenshotImage
                            key={image.src}
                            src={image.src}
                            alt={image.alt}
                            caption={image.caption}
                            className={image.className}
                            imageClassName={image.imageClassName}
                          />
                        ))}
                      </div>
                      <div className="grid gap-5 lg:grid-cols-2">
                        {item.screenshotImages.slice(3).map((image) => (
                          <ScreenshotImage
                            key={image.src}
                            src={image.src}
                            alt={image.alt}
                            caption={image.caption}
                            className={image.className}
                            imageClassName={`mx-auto max-w-[28rem] ${image.imageClassName ?? ""}`.trim()}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
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
                  )
                ) : item.screenshotVideos ? (
                  <div className={`grid gap-5 ${item.screenshotVideos.length > 1 ? "lg:grid-cols-2" : ""}`}>
                    {item.screenshotVideos.map((video) => (
                      <ScreenshotVideo
                        key={video.src}
                        src={video.src}
                        caption={video.caption}
                        className={video.className}
                      />
                    ))}
                  </div>
                ) : (
                  <div className={`grid gap-5 ${(item.screenshots ?? []).length > 1 ? "lg:grid-cols-2" : ""}`}>
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
