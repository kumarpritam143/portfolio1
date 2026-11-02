import { experienceData, personalInfo } from "../data/portfolioData";
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
  ShieldCheckIcon,
} from "../components/shared/Icons";

export default function Experience() {
  const handleDownloadResume = () => {
    if (personalInfo.hasRealResume) {
      window.open(personalInfo.resumeUrl, "_blank");
    } else {
      alert("Resume PDF will be downloadable as soon as 'resume.pdf' is placed in the public folder. You can reach Pritam directly at " + personalInfo.email);
    }
  };

  return (
    <>
      <PageMeta
        title="Experience · Software Developer"
        description="Professional experience of Pritam Kumar Das as Software Developer at Minerva Infotech and technical experience at Akshay Patra, Jaipur."
      />

      {/* Page Header */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="CAREER EXPERIENCE"
            title="Professional Experience"
            subtitle="Demonstrated experience building real-world software modules, full-stack applications, and technical solutions."
            action={
              <Button
                variant="secondary"
                icon={DownloadIcon}
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
            }
          />
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-10">
            {experienceData.map((exp) => (
              <div key={exp.id} className="experience-card">
                
                {/* Header: Role & Period */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-5 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {exp.role}
                      </h3>
                      {exp.isVerified ? (
                        <Badge variant="blue" size="sm">
                          Verified
                        </Badge>
                      ) : (
                        <Badge variant="slate" size="sm">
                          Details Pending Verification
                        </Badge>
                      )}
                    </div>
                    <div className="text-base font-semibold text-blue-600 mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium text-slate-700">
                      <CalendarIcon size={14} className="text-slate-400" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPinIcon size={14} className="text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Responsibilities &amp; Technical Contributions
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                        <span className="mt-1 text-blue-600 shrink-0">
                          <CheckIcon size={16} />
                        </span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-8 pt-5 border-t border-slate-100">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                    Technologies &amp; Domain Focus
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

          {/* Configurable note */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 flex items-start gap-3">
            <ShieldCheckIcon size={18} className="text-blue-600 mt-0.5 shrink-0" />
            <p>
              Note: Company dates, exact designations, and verified project contributions for Akshay Patra, Jaipur are maintained in editable format and will be updated directly in <code>src/data/portfolioData.js</code> once verified.
            </p>
          </div>

        </div>
      </section>

      {/* Recruiter / Client CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Interested in discussing potential software roles or collaboration?
          </h3>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            I am always eager to bring dedication, technical curiosity, and full-stack development skills to growing teams.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/contact" variant="primary" icon={ArrowRightIcon} iconPosition="right">
              Get in Touch with Pritam
            </Button>
            <Button to="/projects" variant="secondary">
              Review Portfolio Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
