import { skillsCategories } from "../data/portfolioData";
import PageMeta from "../components/shared/PageMeta";
import SectionHeader from "../components/shared/SectionHeader";
import Card from "../components/shared/Card";
import Badge from "../components/shared/Badge";
import Button from "../components/shared/Button";
import {
  ServerIcon,
  DatabaseIcon,
  ArrowRightIcon,
  DownloadIcon,
  ShieldCheckIcon,
} from "../components/shared/Icons";

export default function About() {
  const handleDownloadResume = () => {
    alert("Resume download triggered. In production, this links directly to your resume PDF.");
  };

  return (
    <>
      <PageMeta
        title="About Me · Full Stack Software Engineer"
        description="Learn more about Alex Morgan: professional journey in Core Java, modern PHP, and MERN stack engineering, core technical philosophy, and specialized skills."
      />

      {/* Page Header */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="ENGINEERING BACKGROUND"
            title="About Me &amp; Engineering Principles"
            subtitle="Bridging strong computer science fundamentals with modern software delivery."
          />
        </div>
      </section>

      {/* Personal Journey & Background */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Story / Bio */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base sm:text-lg">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Software Engineer with deep enterprise roots and modern agility.
              </h3>
              
              <p>
                My journey began with the rigorous fundamentals of <strong>Core Java</strong> — mastering memory allocation, object-oriented design patterns, multithreaded concurrency, and the JVM execution model. Building strong software from first principles taught me the critical importance of defensive programming, high cohesion, and scalable system design.
              </p>

              <p>
                As web ecosystems grew, I extended my engineering toolkit into <strong>PHP and the modern Laravel framework</strong>. There, I designed robust MVC architectures, high-concurrency payment APIs, asynchronous queue workers with Redis, and complex SQL database schemas serving millions of transactions.
              </p>

              <p>
                To provide seamless end-to-end user experiences, I expanded into the <strong>MERN stack (MongoDB, Express, React, Node.js)</strong>. This allows me to bridge high-performance backend systems with responsive, accessible, and reactive frontend web applications.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button
                  to="/contact"
                  variant="primary"
                  icon={ArrowRightIcon}
                  iconPosition="right"
                >
                  Work Together
                </Button>
                <Button
                  variant="secondary"
                  icon={DownloadIcon}
                  onClick={handleDownloadResume}
                >
                  Download Full CV
                </Button>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="lg:col-span-5">
              <Card className="p-8 space-y-6 bg-slate-50 border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-200">
                  Professional Profile Snapshot
                </h4>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 block mb-1">
                      Current Location
                    </span>
                    <span className="font-medium text-slate-800">
                      San Francisco, CA (Open to Worldwide Remote &amp; Hybrid)
                    </span>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 block mb-1">
                      Years of Experience
                    </span>
                    <span className="font-medium text-slate-800">
                      5+ Years Production Software Engineering
                    </span>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 block mb-1">
                      Core Specializations
                    </span>
                    <span className="font-medium text-slate-800">
                      Core Java (Spring Boot) · PHP (Laravel) · MERN Architecture
                    </span>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 block mb-1">
                      Professional Status
                    </span>
                    <span className="inline-flex items-center gap-2 font-medium text-emerald-600">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Actively open to Full-time Roles &amp; Senior Consulting
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="text-xs text-slate-500 mb-2">Primary Work Values:</div>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="blue" size="sm">Code Quality</Badge>
                    <Badge variant="slate" size="sm">System Reliability</Badge>
                    <Badge variant="slate" size="sm">Mentorship</Badge>
                    <Badge variant="blue" size="sm">Clean Architecture</Badge>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Professional Interests & Engineering Values */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FOCUS AREAS"
            title="Professional Interests"
            subtitle="The specialized technical domains and engineering methodologies I am passionate about."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hoverable className="p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <ServerIcon size={20} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Distributed Systems &amp; Concurrency
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Designing fault-tolerant microservices, mastering thread pools, asynchronous event-driven queues, and eliminating latency bottlenecks.
              </p>
            </Card>

            <Card hoverable className="p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <DatabaseIcon size={20} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Database Optimization &amp; Storage
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Indexing strategies, relational query tuning (PostgreSQL, MySQL), Redis cache layers, and document schema design in MongoDB.
              </p>
            </Card>

            <Card hoverable className="p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <ShieldCheckIcon size={20} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Clean Code &amp; Architecture
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Adhering to SOLID principles, design patterns (GoF), domain-driven design, and building robust test suites with JUnit, Pest, and Mockito.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Skills Categorized */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="TECHNICAL EXPERTISE"
            title="Comprehensive Technical Stack"
            subtitle="Skills honed over years of hands-on production engineering and open-source contributions."
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillsCategories.map((category, idx) => (
              <Card key={idx} className="p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {category.title}
                </h4>
                <p className="text-xs text-slate-500 mb-6">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-blue-50/40 hover:border-blue-100 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        <span className="text-sm font-medium text-slate-900">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-500">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-600 mb-4">
              Interested in seeing how these skills translate into real production environments?
            </p>
            <div className="flex justify-center gap-4">
              <Button to="/experience" variant="primary">
                View Career Experience
              </Button>
              <Button to="/projects" variant="secondary">
                View Completed Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
