import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/portfolioData";
import PageMeta from "../components/shared/PageMeta";
import Badge from "../components/shared/Badge";
import Button from "../components/shared/Button";
import Card from "../components/shared/Card";
import {
  CodeIcon,
  GithubIcon,
  ExternalLinkIcon,
  CheckIcon,
  ArrowRightIcon,
  LayersIcon,
} from "../components/shared/Icons";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="py-24 text-center">
        <PageMeta title="Project Not Found" description="The requested project could not be found." />
        <div className="max-w-md mx-auto px-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100">
            <CodeIcon size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Project Not Found</h2>
          <p className="text-sm text-slate-600 mb-6">
            The project you are looking for does not exist or has been relocated.
          </p>
          <Button to="/projects" variant="primary">
            Back to All Projects
          </Button>
        </div>
      </div>
    );
  }

  // Find index for next/previous navigation
  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <>
      <PageMeta
        title={`${project.title} · Project Case Study`}
        description={`${project.title} - ${project.tagline}. Developed by Pritam Kumar Das using ${project.technologies.slice(0, 4).join(", ")}.`}
      />

      {/* Breadcrumb & Navigation */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{project.title}</span>
          </div>
        </div>
      </section>

      {/* Project Header */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="blue" size="sm">
                {project.category}
              </Badge>
              {project.featured && (
                <Badge variant="emerald" size="sm">
                  Featured Project
                </Badge>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-blue-700 font-medium leading-relaxed">
              {project.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {project.githubUrl ? (
                <Button
                  href={project.githubUrl}
                  external
                  variant="primary"
                  icon={GithubIcon}
                >
                  View on GitHub
                </Button>
              ) : (
                <Button variant="secondary" disabled>
                  Repository Link Pending
                </Button>
              )}

              {project.demoUrl ? (
                <Button
                  href={project.demoUrl}
                  external
                  variant="secondary"
                  icon={ExternalLinkIcon}
                  iconPosition="right"
                >
                  Live Application Demo
                </Button>
              ) : (
                <span className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-medium text-slate-500 bg-slate-100 border border-slate-200">
                  Live Demo: Deployment in Progress
                </span>
              )}

              <Button to="/contact" variant="outline">
                Discuss This Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Content */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Main Column: Detailed Overview & Features */}
            <div className="lg:col-span-8 space-y-8">
              <Card className="p-8 bg-white">
                <h2 className="text-xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                  Project Overview &amp; Architecture
                </h2>
                <p className="text-base text-slate-700 leading-relaxed">
                  {project.description}
                </p>
              </Card>

              <Card className="p-8 bg-white">
                <h2 className="text-xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                  Key Features &amp; Engineering Implementations
                </h2>
                <ul className="space-y-3.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <span className="text-blue-600 mt-1 shrink-0">
                        <CheckIcon size={16} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Right Sidebar: Tech Stack & Specs */}
            <div className="lg:col-span-4 space-y-6">
              <Card className="p-6 bg-white">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                  <LayersIcon size={18} className="text-blue-600" />
                  <h3 className="text-base font-bold text-slate-900">
                    Technology Stack
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-pill bg-slate-50">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-white space-y-3 text-xs text-slate-600">
                <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
                  Project Metadata
                </h3>
                <div>
                  <span className="font-semibold text-slate-400 block uppercase tracking-wider text-[10px]">
                    Category
                  </span>
                  <span className="font-medium text-slate-800">{project.category}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-400 block uppercase tracking-wider text-[10px]">
                    Lead Developer
                  </span>
                  <span className="font-medium text-slate-800">Pritam Kumar Das</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-400 block uppercase tracking-wider text-[10px]">
                    Status
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-600 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Completed &amp; Maintained
                  </span>
                </div>
              </Card>
            </div>

          </div>

          {/* Next / Previous Project Navigation */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.id}`}
                className="group flex flex-col items-start p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xs transition-all w-full sm:w-auto"
              >
                <span className="text-xs text-slate-400 font-medium">← Previous Project</span>
                <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            ) : <div />}

            <Button to="/projects" variant="secondary" size="sm">
              All 7 Projects
            </Button>

            {nextProject ? (
              <Link
                to={`/projects/${nextProject.id}`}
                className="group flex flex-col items-end p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xs transition-all w-full sm:w-auto text-right"
              >
                <span className="text-xs text-slate-400 font-medium">Next Project →</span>
                <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-14 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Have questions or want to collaborate on a project?
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            I am always happy to discuss code architectures, ideas, and software development opportunities.
          </p>
          <div className="mt-6">
            <Button to="/contact" variant="primary" icon={ArrowRightIcon} iconPosition="right">
              Get in Touch with Pritam
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

