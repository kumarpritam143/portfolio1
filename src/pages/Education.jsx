import { Link } from "react-router-dom";
import { educationData } from "../data/portfolioData";
import PageMeta from "../components/shared/PageMeta";
import SectionHeader from "../components/shared/SectionHeader";
import Button from "../components/shared/Button";
import {
  GraduationCapIcon,
  CalendarIcon,
  MapPinIcon,
  CheckIcon,
  ArrowRightIcon,
  AwardIcon,
} from "../components/shared/Icons";

export default function Education() {
  return (
    <>
      <PageMeta
        title="Education · B.Tech CSE (2022-2026)"
        description="Academic background of Pritam Kumar Das: B.Tech in Computer Science & Engineering at Suresh Gyan Vihar University (2022-2026), SGPA: 8.2, core coursework, and engineering fundamentals."
      />

      {/* Page Header */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="ACADEMIC BACKGROUND"
            title="Education &amp; Academic Background"
            subtitle="Undergraduate computer science engineering studies, academic performance, and foundational technical coursework."
          />
        </div>
      </section>

      {/* University & Degree Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="portfolio-card p-8 sm:p-10 bg-white shadow-xs">
            
            {/* Header / Institution */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <GraduationCapIcon size={30} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {educationData.degree}
                  </h2>
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
                <span className="mt-1 font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
                  {educationData.grade}
                </span>
              </div>
            </div>

            {/* Academic Summary */}
            <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed">
              {educationData.summary}
            </p>

            {/* Academic Highlights */}
            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Academic Distinctions &amp; Highlights
              </h3>
              <ul className="space-y-3">
                {educationData.academicHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
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
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Core Computer Science Coursework
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {educationData.keyCourses.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-slate-100 bg-slate-50 text-xs font-medium text-slate-800"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Quick link to certifications */}
          <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <AwardIcon size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Technical Certifications &amp; Training
                </h4>
                <p className="text-xs text-slate-500">
                  View specialized courses across Core Java, MERN full stack, and AI developer tooling.
                </p>
              </div>
            </div>
            <Link
              to="/certifications"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-lg transition-colors shrink-0"
            >
              <span>View Certifications Page</span>
              <ArrowRightIcon size={13} />
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Button to="/projects" variant="primary" icon={ArrowRightIcon} iconPosition="right">
              View All 7 Portfolio Projects
            </Button>
          </div>

        </div>
      </section>
    </>
  );
}
