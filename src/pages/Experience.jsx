import { experienceData } from "../data/portfolioData";
import PageMeta from "../components/shared/PageMeta";
import SectionHeader from "../components/shared/SectionHeader";
import Badge from "../components/shared/Badge";
import Button from "../components/shared/Button";
import {
  CalendarIcon,
  MapPinIcon,
  CheckIcon,
  DownloadIcon,
  ArrowRightIcon,
} from "../components/shared/Icons";

export default function Experience() {
  const handleDownloadResume = () => {
    alert("Resume download triggered. In production, this links directly to your resume PDF.");
  };

  return (
    <>
      <PageMeta
        title="Career Experience · Senior Full Stack Engineer"
        description="Detailed professional track record of Alex Morgan: roles at NovaTech Solutions and CloudScale Web Systems, technical responsibilities, and quantified engineering achievements."
      />

      {/* Page Header */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="CAREER MILESTONES"
            title="Professional Experience"
            subtitle="Demonstrated history of designing, optimizing, and deploying high-impact enterprise software."
            action={
              <Button
                variant="secondary"
                icon={DownloadIcon}
                onClick={handleDownloadResume}
              >
                Download Full Resume
              </Button>
            }
          />
        </div>
      </section>

      {/* Main Experience Timeline */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className="experience-card">
                
                {/* Header: Role & Period */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pb-5 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {exp.role}
                      </h3>
                      {index === 0 && (
                        <Badge variant="blue" size="sm">
                          Present Role
                        </Badge>
                      )}
                    </div>
                    <div className="text-base font-semibold text-blue-600 mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium text-slate-700">
                      <CalendarIcon size={14} className="text-slate-400" />
                      {exp.period} ({exp.duration})
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPinIcon size={14} className="text-slate-400" />
                      {exp.location}
                    </span>
                    <span className="font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Responsibilities & Achievements */}
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Key Responsibilities &amp; Measurable Impacts
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                        <span className="mt-1 text-blue-600 shrink-0">
                          <CheckIcon size={16} />
                        </span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="mt-8 pt-5 border-t border-slate-100">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Technologies &amp; Frameworks Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-pill bg-slate-50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Summary / Recruiter CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Looking for a Senior Engineer who delivers results?
          </h3>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            I bring reliable enterprise engineering practices, architectural clarity, and strong problem-solving capabilities to every project.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/contact" variant="primary" icon={ArrowRightIcon} iconPosition="right">
              Get in Touch
            </Button>
            <Button to="/projects" variant="secondary">
              Review Project Portfolio
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
