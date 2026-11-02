import { educationData } from "../data/portfolioData";
import PageMeta from "../components/shared/PageMeta";
import SectionHeader from "../components/shared/SectionHeader";
import Card from "../components/shared/Card";
import Button from "../components/shared/Button";
import {
  GraduationCapIcon,
  AwardIcon,
  CalendarIcon,
  MapPinIcon,
  ExternalLinkIcon,
  CheckIcon,
  ArrowRightIcon,
} from "../components/shared/Icons";

export default function Education() {
  return (
    <>
      <PageMeta
        title="Education & Certifications · Alex Morgan"
        description="Academic background in Computer Science & Engineering from Apex Institute of Technology, verified industry certifications in Java SE 17, AWS Solutions Architect, and Full-Stack Engineering."
      />

      {/* Page Header */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="ACADEMIC BACKGROUND"
            title="Education &amp; Professional Certifications"
            subtitle="Strong theoretical computer science foundation reinforced with continuous industry training and verified certifications."
          />
        </div>
      </section>

      {/* University & Degree Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="portfolio-card p-8 sm:p-10 bg-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <GraduationCapIcon size={26} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {educationData.degree}
                  </h3>
                  <div className="text-base font-semibold text-blue-600 mt-1">
                    {educationData.institution}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <CalendarIcon size={14} className="text-slate-400" />
                  {educationData.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPinIcon size={14} className="text-slate-400" />
                  {educationData.location}
                </span>
                <span className="mt-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  {educationData.grade}
                </span>
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed">
              {educationData.summary}
            </p>

            {/* Academic Highlights */}
            <div className="mt-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Academic Distinctions &amp; Honors
              </h4>
              <ul className="space-y-2.5">
                {educationData.academicHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-1 text-blue-600 shrink-0">
                      <CheckIcon size={16} />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Coursework */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Relevant Computer Science Coursework
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {educationData.keyCourses.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 text-xs font-medium text-slate-700"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Industry Certifications */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="CREDENTIALS"
            title="Industry Certifications &amp; Training"
            subtitle="Industry-standard credentials verifying mastery in Java development, cloud infrastructure, and modern software design."
            className="mb-12"
          />

          <div className="space-y-4">
            {educationData.certifications.map((cert) => (
              <Card key={cert.id} hoverable className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
                    <AwardIcon size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 mt-1">
                      Issued by <span className="text-slate-800 font-semibold">{cert.issuer}</span> · Year {cert.issueDate}
                    </p>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      Credential ID: {cert.credentialId}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 pt-2 sm:pt-0">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLinkIcon size={12} />
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button to="/projects" variant="primary" icon={ArrowRightIcon} iconPosition="right">
              View Production Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
