import Link from "next/link";
import { notFound } from "next/navigation";
import NyangnyangLetterCaseStudy from "@/components/projects/NyangnyangLetterCaseStudy";
import WingItCaseStudy from "@/components/projects/WingItCaseStudy";
import ProjectBody from "@/components/projects/ProjectBody";
import { getProjectBySlug, projects } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return { title: `${project.title} · Moon Jiwon` };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  if (slug === "nyangnyang-letter") {
    return <NyangnyangLetterCaseStudy />;
  }

  if (slug === "wingit") {
    return <WingItCaseStudy />;
  }

  return (
    <main className="mx-auto min-h-screen max-w-[80vw] py-24">
      <Link
        href="/#projects"
        className="group mb-20 flex w-fit items-center gap-2 text-lg text-zinc-950 transition-colors hover:text-amber-700"
      >
        <span className="inline-block transition-transform group-hover:-translate-x-1">
          ←
        </span>
        All projects
      </Link>

      <div className="mx-auto flex w-full max-w-[72rem] flex-col gap-10">
        <div className="max-w-4xl">
          {project.role ? (
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-amber-600">
              {project.role}
            </p>
          ) : null}
          <h1 className="mb-6 text-6xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-7xl">
            {project.title}
          </h1>
        </div>

        <ProjectBody project={project} />
      </div>
    </main>
  );
}
