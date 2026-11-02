import { Link } from "react-router-dom";
import { personalInfo, projectsData } from "../data/portfolioData";
import PageMeta from "../components/shared/PageMeta";
import Button from "../components/shared/Button";
import Badge from "../components/shared/Badge";
import Card from "../components/shared/Card";
import SectionHeader from "../components/shared/SectionHeader";
import {
  DownloadIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  GithubIcon,
  CodeIcon,
  ServerIcon,
  LayersIcon,
  UsersIcon,
  CheckIcon,
  GlobeIcon,
  SparklesIcon,
} from "../components/shared/Icons";

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.featured);

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
        title="Software Developer (Core Java, PHP, MERN & AI)"
        description="Pritam Kumar Das - Software Developer from Bhagalpur, Bihar, India. B.Tech CSE at Suresh Gyan Vihar University. 10K+ LinkedIn tech network."
      />

      {/* =================================================================
          HERO SECTION
          ================================================================= */}
      <section className="hero-wrapper py-16 sm:py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Availability & Location Badge */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span>{personalInfo.availability}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-600 font-normal">📍 {personalInfo.location}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Software Developer building{" "}
                <span className="text-blue-600">intelligent web solutions.</span>
              </h1>

              {/* Subtitle / Intro */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Hi, I'm <strong className="text-slate-900 font-semibold">{personalInfo.name}</strong> — a passionate Software Developer with hands-on foundations in <span className="text-slate-900 font-medium">Core Java</span>, <span className="text-slate-900 font-medium">PHP</span>, the <span className="text-slate-900 font-medium">MERN Stack</span>, and AI-driven applications. B.Tech in CSE from Suresh Gyan Vihar University.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={ArrowRightIcon}
                  iconPosition="right"
                >
                  Contact Me
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  icon={DownloadIcon}
                  onClick={handleDownloadResume}
                >
                  Download Resume
                </Button>
                <Button
                  to="/projects"
                  variant="outline"
                  size="lg"
                >
                  View 7 Projects
                </Button>
              </div>

              {/* Key Quick Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-700 uppercase tracking-wider">Core Skills:</span>
                <span className="tech-pill">Core Java</span>
                <span className="tech-pill">PHP</span>
                <span className="tech-pill">React.js</span>
                <span className="tech-pill">Node.js</span>
                <span className="tech-pill">MongoDB &amp; MySQL</span>
                <span className="tech-pill">AI Tools &amp; EDA</span>
              </div>
            </div>

            {/* Right Side: Professional Profile Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="hero-avatar-card max-w-md w-full">
                
                {/* Clean Professional Avatar Card */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-8 text-center flex flex-col items-center justify-center">
                  
                  {/* Monogram / Avatar Graphic */}
                  <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-extrabold shadow-md mb-4 border-4 border-white">
                    {personalInfo.initials}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {personalInfo.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 mt-1">
                    {personalInfo.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-1.5 max-w-xs">
                    {personalInfo.location}
                  </p>

                  {/* Micro stats inside avatar card */}
                  <div className="grid grid-cols-2 gap-3 w-full mt-6 pt-6 border-t border-slate-200">
                    <div className="text-center p-2.5 rounded-lg bg-white border border-slate-100">
                      <div className="text-lg font-bold text-blue-600">10K+</div>
                      <div className="text-[11px] text-slate-500">LinkedIn Network</div>
                    </div>
                    <div className="text-center p-2.5 rounded-lg bg-white border border-slate-100">
                      <div className="text-lg font-bold text-slate-900">8.2 SGPA</div>
                      <div className="text-[11px] text-slate-500">B.Tech CSE</div>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="status-badge-floating">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span className="text-slate-700">Open to Opportunities</span>
                  </div>
                </div>

                {/* Social Quick Bar */}
                <div className="mt-4 flex items-center justify-between px-2 pt-2 text-xs text-slate-500">
                  <span className="font-medium text-slate-600">buildwithpritam.in</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={personalInfo.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-900 transition-colors"
                      title="GitHub Profile"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href={personalInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-blue-600 transition-colors"
                      title="LinkedIn Profile (10K+ Followers)"
                    >
                      <UsersIcon size={18} />
                    </a>
                    <a
                      href={personalInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-blue-600 transition-colors"
                      title="Personal Website"
                    >
                      <GlobeIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          QUICK PROFESSIONAL STATISTICS (WITH 10K+ LINKEDIN PROMINENT)
          ================================================================= */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="stat-item text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-900 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          TECHNICAL ARCHITECTURE & CORE CAPABILITIES
          ================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="TECHNICAL DOMAINS"
            title="Core Engineering Competencies"
            subtitle="Bridging object-oriented backend programming with modern full-stack development and practical AI tooling."
            centered
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Core Java & OOP */}
            <Card hoverable className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
                  <ServerIcon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Core Java &amp; Backend
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Object-Oriented Programming, Java collections, multithreading fundamentals, clean system logic, and relational database interaction with SQL.
                </p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> Core Java &amp; OOP Principles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> Data Structures &amp; Algorithms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> PHP Backend &amp; Web Architectures
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> MySQL &amp; PostgreSQL Databases
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link to="/about" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Explore Technical Skills <ArrowRightIcon size={12} />
                </Link>
              </div>
            </Card>

            {/* Pillar 2: MERN Stack */}
            <Card hoverable className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
                  <LayersIcon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  MERN Full-Stack
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Building responsive web applications using React.js, Node.js &amp; Express.js REST APIs, MongoDB database schemas, and modern CSS/Tailwind layouts.
                </p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> React.js Component Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> Node.js &amp; Express RESTful APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> MongoDB Schema Modeling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> Responsive Web Interfaces
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link to="/projects" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  View Full Stack Projects <ArrowRightIcon size={12} />
                </Link>
              </div>
            </Card>

            {/* Pillar 3: AI Tooling & Analytics */}
            <Card hoverable className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
                  <SparklesIcon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  AI Integrations &amp; EDA
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Integrating LLM capabilities into developer workflows, building prompt-engineered assistants, and automated Exploratory Data Analysis (EDA) pipelines.
                </p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> AI Developer Assistant Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> Automated EDA &amp; Data Summaries
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> NASA Space Apps Physics Simulator
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> Python Data Analytics (Pandas/NumPy)
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link to="/achievements" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  View NASA Space Apps &amp; Awards <ArrowRightIcon size={12} />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* =================================================================
          FEATURED PROJECTS SECTION
          ================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="PORTFOLIO PREVIEW"
            title="Featured Engineering Projects"
            subtitle="A selection from the 7 completed applications demonstrating full-stack engineering, AI tooling, and simulation modeling."
            action={
              <Button to="/projects" variant="secondary" icon={ArrowRightIcon} iconPosition="right">
                View All 7 Projects
              </Button>
            }
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="project-card">
                {/* Visual Header / Mockup Preview */}
                <div className="project-image-placeholder p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-xs border border-slate-200 mx-auto mb-2">
                    <CodeIcon size={24} />
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      <Link to={`/projects/${project.id}`} className="hover:text-blue-600 transition-colors">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-blue-700 font-medium mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-pill text-blue-600">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-blue-600 transition-colors"
                        >
                          <GithubIcon size={14} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
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
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                    >
                      <span>Case Study</span>
                      <ArrowRightIcon size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view all projects button */}
          <div className="mt-8 text-center md:hidden">
            <Button to="/projects" variant="secondary" className="w-full justify-center">
              View All 7 Projects
            </Button>
          </div>
        </div>
      </section>

      {/* =================================================================
          CALL TO ACTION BANNER
          ================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-12 text-center shadow-xs">
            <Badge variant="blue" size="sm" className="mb-4">
              CONNECT WITH PRITAM
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Looking for a dedicated Software Developer?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Open to Software Development positions, full-stack projects, and technical collaborations. Let's discuss how I can add value to your team.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRightIcon} iconPosition="right">
                Get in Touch
              </Button>
              <Button to="/projects" variant="secondary" size="lg">
                Explore All 7 Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
