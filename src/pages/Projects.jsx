import { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/portfolioData";
import PageMeta from "../components/shared/PageMeta";
import SectionHeader from "../components/shared/SectionHeader";
import Badge from "../components/shared/Badge";
import Button from "../components/shared/Button";
import {
  CodeIcon,
  GithubIcon,
  ExternalLinkIcon,
  CheckIcon,
  ArrowRightIcon,
} from "../components/shared/Icons";

const categories = [
  "All",
  "AI / ML",
  "Full Stack",
  "Simulation & Science",
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <>
      <PageMeta
        title="Projects · 7 Full Stack & AI Applications"
        description="Explore 7 production projects by Pritam Kumar Das: AptiMaster, AI Cover Letter Generator, AI Developer Assistant, NASA Space Apps Asteroid Simulator, No-Code Form Builder, EDA Reveal, and Interview AI."
      />

      {/* Page Header */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="PROJECT PORTFOLIO"
            title="All 7 Featured Engineering Projects"
            subtitle="Explore real-world software applications built across the MERN stack, Core Java, PHP, AI integrations, data analytics, and physics simulation."
          />
        </div>
      </section>

      {/* Category Filter & Project Grid */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const count = cat === "All"
                ? projectsData.length
                : projectsData.filter((p) => p.category.toLowerCase().includes(cat.toLowerCase())).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                
                {/* Visual Header / Mockup */}
                <div className="project-image-placeholder p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-xs border border-slate-200 mx-auto mb-2">
                    <CodeIcon size={24} />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs font-mono font-medium text-slate-600 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.featured && (
                      <Badge variant="blue" size="sm">
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      <Link to={`/projects/${project.id}`} className="hover:text-blue-600 transition-colors">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Key Feature Highlights */}
                    <div className="mb-4">
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 block mb-2">
                        Key Capabilities:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {project.features.slice(0, 2).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-0.5 shrink-0">
                              <CheckIcon size={12} />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                          title="View on GitHub"
                        >
                          <GithubIcon size={15} />
                          <span>Code</span>
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400">Code on request</span>
                      )}

                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                          title="Live Demo"
                        >
                          <span>Live</span>
                          <ExternalLinkIcon size={12} />
                        </a>
                      ) : (
                        <span className="text-[11px] text-slate-400">Demo pending</span>
                      )}
                    </div>

                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      <span>Details</span>
                      <ArrowRightIcon size={12} />
                    </Link>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* GitHub Callout */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Explore All Repositories on GitHub
          </h3>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Check out open-source repositories, algorithmic solutions, and project source files on my GitHub profile.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button
              href="https://github.com/kumarpritam143"
              external
              variant="secondary"
              icon={GithubIcon}
            >
              github.com/kumarpritam143
            </Button>
            <Button to="/contact" variant="primary">
              Contact Pritam
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
