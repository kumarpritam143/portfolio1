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
} from "../components/shared/Icons";

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  const handleDownloadResume = () => {
    alert("Resume download initiated. In production, this links directly to your resume PDF.");
  };

  return (
    <>
      <PageMeta
        title="Senior Full Stack Software Engineer (Java, PHP, MERN)"
        description="Alex Morgan - Senior Full Stack Software Engineer specializing in enterprise Core Java, high-throughput PHP/Laravel systems, and modern MERN stack web applications."
      />

      {/* =================================================================
          HERO SECTION
          ================================================================= */}
      <section className="hero-wrapper py-16 sm:py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span>{personalInfo.availability}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Architecting robust backends &amp;{" "}
                <span className="text-blue-600">modern web apps.</span>
              </h1>

              {/* Subtitle / Intro */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Hi, I'm <strong className="text-slate-900 font-semibold">{personalInfo.name}</strong> — a Senior Full Stack Software Engineer with enterprise mastery in <span className="text-slate-900 font-medium">Core Java &amp; Spring Boot</span>, high-scale web systems in <span className="text-slate-900 font-medium">PHP &amp; Laravel</span>, and modern web applications with the <span className="text-slate-900 font-medium">MERN stack</span>.
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
                  View Projects
                </Button>
              </div>

              {/* Key Quick Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="font-semibold text-slate-700 uppercase tracking-wider">Primary Stack:</span>
                <span className="tech-pill">Java 17/21</span>
                <span className="tech-pill">Spring Boot</span>
                <span className="tech-pill">PHP 8.x / Laravel</span>
                <span className="tech-pill">React 19</span>
                <span className="tech-pill">Node.js</span>
                <span className="tech-pill">PostgreSQL &amp; Redis</span>
              </div>
            </div>

            {/* Right Side: Professional Profile Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="hero-avatar-card max-w-md w-full">
                
                {/* Clean Professional Avatar Placeholder */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-8 text-center flex flex-col items-center justify-center">
                  
                  {/* Avatar Icon / Graphic */}
                  <div className="w-32 h-32 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold shadow-md mb-5 border-4 border-white">
                    {personalInfo.initials}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {personalInfo.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mt-1">
                    {personalInfo.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 max-w-xs">
                    {personalInfo.location}
                  </p>

                  {/* Micro stats inside avatar card */}
                  <div className="grid grid-cols-2 gap-3 w-full mt-6 pt-6 border-t border-slate-200">
                    <div className="text-center p-2.5 rounded-lg bg-white border border-slate-100">
                      <div className="text-lg font-bold text-slate-900">5+ Yrs</div>
                      <div className="text-xs text-slate-500">Experience</div>
                    </div>
                    <div className="text-center p-2.5 rounded-lg bg-white border border-slate-100">
                      <div className="text-lg font-bold text-blue-600">10K+</div>
                      <div className="text-xs text-slate-500">LinkedIn Reach</div>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="status-badge-floating">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span className="text-slate-700">Available for Opportunities</span>
                  </div>
                </div>

                {/* Social Quick Bar */}
                <div className="mt-4 flex items-center justify-between px-2 pt-2 text-xs text-slate-500">
                  <span>Verified Professional</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={personalInfo.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-900 transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href={personalInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-blue-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <UsersIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          QUICK PROFESSIONAL STATISTICS
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
            badge="ENGINEERING CAPABILITIES"
            title="Core Technical Foundations"
            subtitle="Bridging enterprise reliability with modern frontend reactivity. Designed for performance, maintainability, and clean code principles."
            centered
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Core Java */}
            <Card hoverable className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
                  <ServerIcon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Core Java &amp; Spring Boot
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Enterprise backend microservices, JVM concurrency, multithreading, Spring Boot, Hibernate JPA, and automated unit testing with JUnit 5.
                </p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> Java 17/21 &amp; JVM Internals
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> Spring Boot Microservices
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> Multi-threading &amp; Concurrency
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> PostgreSQL &amp; Database Tuning
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link to="/about" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Explore Java skills <ArrowRightIcon size={12} />
                </Link>
              </div>
            </Card>

            {/* Pillar 2: PHP & Modern Web */}
            <Card hoverable className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
                  <CodeIcon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  PHP &amp; Laravel Ecosystem
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  High-scale web applications, REST APIs, Laravel 10/11, Eloquent ORM, background queues with Redis, and modular service-layer architectures.
                </p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> Modern PHP 8.x &amp; PSR Standards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> Laravel Architecture &amp; APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> Redis Queues &amp; Caching
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> PHPUnit &amp; Pest Test Suites
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link to="/about" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Explore PHP expertise <ArrowRightIcon size={12} />
                </Link>
              </div>
            </Card>

            {/* Pillar 3: MERN & React */}
            <Card hoverable className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
                  <LayersIcon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  MERN Stack &amp; React UI
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Responsive Single Page Applications using React 19, Node.js &amp; Express backend services, MongoDB database schemas, and clean state management.
                </p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> React 19, Hooks &amp; State
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> Node.js &amp; Express APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> MongoDB &amp; Mongoose Schemas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-blue-600" /> Modern Responsive Web Design
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link to="/about" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Explore MERN stack <ArrowRightIcon size={12} />
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
            badge="PORTFOLIO HIGHLIGHTS"
            title="Featured Production Work"
            subtitle="A selection of high-impact applications demonstrating clean architecture, microservices, and modern frontend design."
            action={
              <Button to="/projects" variant="secondary" icon={ArrowRightIcon} iconPosition="right">
                View All Projects
              </Button>
            }
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
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
                      {project.title}
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
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      <GithubIcon size={14} />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLinkIcon size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view all projects button */}
          <div className="mt-8 text-center md:hidden">
            <Button to="/projects" variant="secondary" className="w-full justify-center">
              View All 6+ Projects
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
              READY TO COLLABORATE?
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Let's build scalable systems together.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Whether you are hiring for a senior engineering position, looking for enterprise Java / PHP consulting, or developing a new web product, I would love to connect.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRightIcon} iconPosition="right">
                Get in Touch
              </Button>
              <Button to="/experience" variant="secondary" size="lg">
                View Career Experience
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
