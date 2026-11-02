import { certificationsData } from "../data/portfolioData";
import PageMeta from "../components/shared/PageMeta";
import SectionHeader from "../components/shared/SectionHeader";
import Card from "../components/shared/Card";
import Badge from "../components/shared/Badge";
import Button from "../components/shared/Button";
import {
  AwardIcon,
  CalendarIcon,
  ExternalLinkIcon,
  CheckIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from "../components/shared/Icons";

export default function Certifications() {
  return (
    <>
      <PageMeta
        title="Certifications & Training · Pritam Kumar Das"
        description="Professional certifications, technical training, and skill verifications across Core Java, MERN full-stack development, and modern AI engineering by Pritam Kumar Das."
      />

      {/* Page Header */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="CREDENTIALS & TRAINING"
            title="Professional Certifications"
            subtitle="Verified technical courses, professional training programs, and specialized engineering skill development."
          />
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-6">
            {certificationsData.map((cert) => (
              <Card key={cert.id} hoverable className="p-6 sm:p-8 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 mt-1">
                      <AwardIcon size={24} />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {cert.title}
                        </h3>
                        <Badge variant="blue" size="sm">
                          {cert.status}
                        </Badge>
                      </div>

                      <div className="text-sm font-semibold text-slate-700">
                        {cert.issuer}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                        <span className="flex items-center gap-1.5 font-medium text-slate-600">
                          <CalendarIcon size={14} className="text-slate-400" />
                          {cert.issueDate}
                        </span>
                        <span>•</span>
                        <span className="font-mono text-slate-500">
                          {cert.credentialId ? `ID: ${cert.credentialId}` : "Credential: Available on verification"}
                        </span>
                      </div>

                      {/* Covered Skills */}
                      <div className="pt-3">
                        <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 block mb-1.5">
                          Key Skills &amp; Concepts
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="tech-pill bg-slate-50">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Verification CTA */}
                  <div className="shrink-0 pt-2 sm:pt-0 self-start sm:self-center">
                    {cert.verificationUrl ? (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors"
                      >
                        <span>Verify Credential</span>
                        <ExternalLinkIcon size={13} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 bg-slate-100 border border-slate-200">
                        <ShieldCheckIcon size={14} className="text-slate-400" />
                        <span>Verified on Record</span>
                      </span>
                    )}
                  </div>

                </div>
              </Card>
            ))}
          </div>

          {/* Verification Notice */}
          <div className="mt-12 p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
              <CheckIcon size={18} />
            </div>
            <div className="space-y-1 text-xs text-slate-600">
              <span className="font-bold text-slate-900 block text-sm">
                Authenticity &amp; Integrity Notice
              </span>
              <p className="leading-relaxed">
                All certificates, training credentials, and skill sets listed reflect actual coursework completed during academic and independent software engineering development. Official certificates and project source files can be provided upon request.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <Button to="/education" variant="secondary">
              View Academic Degree Details
            </Button>
            <Button to="/projects" variant="primary" icon={ArrowRightIcon} iconPosition="right">
              Explore Portfolio Projects
            </Button>
          </div>

        </div>
      </section>
    </>
  );
}

