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
    title: "WingIt",
    description:
      "A spontaneous social planning app that connects people for last-minute meetups.",
    tags: ["Web App", "React", "Node.js"],
    year: "2024",
    role: "Full-Stack Developer",
  },
  {
    slug: "cicd-pipeline",
    title: "CI/CD Pipeline",
    description:
      "An automated deployment pipeline for a production web service using GitHub Actions.",
    tags: ["DevOps", "GitHub Actions", "Docker"],
    year: "2023",
    role: "DevOps Engineer",
  },
  {
    slug: "high-availability-infrastructure",
    title: "High Availability Infrastructure",
    description:
      "A fault-tolerant cloud infrastructure with auto-scaling and load balancing on AWS.",
    tags: ["AWS", "Infrastructure", "Terraform"],
    year: "2023",
    role: "Infrastructure Engineer",
  },
  {
    slug: "rpa-automation",
    title: "RPA Automation",
    description:
      "Robotic process automation scripts that eliminated repetitive administrative tasks.",
    tags: ["Python", "RPA", "Automation"],
    year: "2023",
    role: "Automation Developer",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
