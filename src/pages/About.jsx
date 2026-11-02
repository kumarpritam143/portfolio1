import { skillsCategories, personalInfo, educationData } from "../data/portfolioData";
import PageMeta from "../components/shared/PageMeta";
import SectionHeader from "../components/shared/SectionHeader";
import Card from "../components/shared/Card";
import Badge from "../components/shared/Badge";
import Button from "../components/shared/Button";
import {
  ServerIcon,
  ArrowRightIcon,
  DownloadIcon,
  ShieldCheckIcon,
  GlobeIcon,
  SparklesIcon,
} from "../components/shared/Icons";

export default function About() {
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
        title="About Me · Software Developer"
        description="Learn more about Pritam Kumar Das: Software Developer with foundations in Core Java, PHP, MERN stack, AI tooling, and B.Tech CSE at Suresh Gyan Vihar University."
      />

      {/* Page Header */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="PROFILE & BACKGROUND"
            title="About Me &amp; Technical Philosophy"
            subtitle="Software developer, computer science scholar, and community creator building scalable web apps and AI developer tools."
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
                Building reliable software, exploring AI, and sharing with 10K+ engineers.
              </h3>
              
              <p>
                I am a <strong>Software Developer</strong> and undergraduate pursuing my <strong>B.Tech in Computer Science &amp; Engineering at Suresh Gyan Vihar University (2022–2026)</strong>, currently holding an academic standing of <strong>SGPA 8.2</strong>. Based in Bhagalpur, Bihar, India, I develop software combining foundational computing principles with modern full-stack technologies.
              </p>

              <p>
                My technical foundations are rooted in <strong>Core Java and Object-Oriented Programming</strong>, focusing on clean architecture, algorithms, and modular design. In addition, I have hands-on experience in <strong>PHP backend architectures</strong> and comprehensive mastery of the <strong>MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong>.
              </p>

              <p>
                Beyond standard web development, I am deeply fascinated by <strong>AI developer tooling, automated data analysis (EDA), and simulation models</strong>. I have engineered real-world projects such as the <em>NASA Space Apps Asteroid Impact Simulator</em>, <em>AptiMaster</em>, <em>AI Developer Assistant</em>, and <em>EDA Reveal</em>.
              </p>

              <p>
                On LinkedIn, I have organically built a vibrant tech community of over <strong>10,000+ software engineers, students, and recruiters</strong>, regularly exchanging knowledge about software development, coding best practices, and project building.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button
                  to="/contact"
                  variant="primary"
                  icon={ArrowRightIcon}
                  iconPosition="right"
                >
                  Contact Pritam
                </Button>
                <Button
                  variant="secondary"
                  icon={DownloadIcon}
                  onClick={handleDownloadResume}
                >
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="lg:col-span-5">
              <Card className="p-8 space-y-6 bg-slate-50 border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-200">
                  Profile Snapshot
                </h4>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 block mb-1">
                      Full Name &amp; Designation
                    </span>
                    <span className="font-semibold text-slate-900">
                      {personalInfo.name} — {personalInfo.designation}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 block mb-1">
                      Location
                    </span>
                    <span className="font-medium text-slate-800">
                      📍 {personalInfo.location}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 block mb-1">
                      Undergraduate Degree
                    </span>
                    <span className="font-medium text-slate-800">
                      {educationData.degree} ({educationData.period})
                    </span>
                    <span className="block text-xs text-blue-600 font-semibold mt-0.5">
                      {educationData.institution} · SGPA: {educationData.grade}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 block mb-1">
                      Official Website
                    </span>
                    <a
                      href={personalInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-blue-600 hover:underline"
                    >
                      <GlobeIcon size={14} />
                      <span>buildwithpritam.in</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 block mb-1">
                      LinkedIn Network
                    </span>
                    <span className="font-bold text-blue-700">
                      10,000+ Followers &amp; Connections
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="text-xs text-slate-500 mb-2">Core Competencies:</div>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="blue" size="sm">Core Java</Badge>
                    <Badge variant="blue" size="sm">PHP</Badge>
                    <Badge variant="blue" size="sm">MERN Stack</Badge>
                    <Badge variant="emerald" size="sm">AI Developer Tools</Badge>
                    <Badge variant="slate" size="sm">SGPA 8.2</Badge>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Professional Interests */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="AREAS OF FOCUS"
            title="Technical &amp; Engineering Interests"
            subtitle="The core domains where I actively build, experiment, and refine software solutions."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hoverable className="p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <ServerIcon size={20} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Backend Systems &amp; OOP Logic
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Writing structured, object-oriented code in Core Java and PHP with clean separation of concerns and robust data persistence in MySQL and MongoDB.
              </p>
            </Card>

            <Card hoverable className="p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <SparklesIcon size={20} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                AI Tooling &amp; Application Layer
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Harnessing AI to solve practical bottlenecks: intelligent developer assistants, automated EDA summaries, and resume/cover letter generators.
              </p>
            </Card>

            <Card hoverable className="p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <ShieldCheckIcon size={20} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Clean Code &amp; Academic Rigor
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Strong focus on foundational data structures, algorithmic complexity, responsive UX standards, and continuous learning.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Skills Across All Required Categories */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="SKILLS MATRIX"
            title="Technical Skills Across All Domains"
            subtitle="Programming, frontend, backend, databases, AI/ML, cloud, and modern developer tools."
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
            <div className="flex justify-center gap-4">
              <Button to="/projects" variant="primary">
                View All 7 Projects
              </Button>
              <Button to="/experience" variant="secondary">
                View Experience
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
