import { Link } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon, ArrowUpRightIcon } from "./shared/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                {personalInfo.initials}
              </div>
              <span className="font-bold text-slate-900 text-lg tracking-tight">
                {personalInfo.name}
              </span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Senior Full Stack Software Engineer crafting scalable enterprise backends in Core Java &amp; PHP, and modern web applications with the MERN stack.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-700">
                {personalInfo.availability}
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-blue-600 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Education &amp; Certs
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Hackathons &amp; Milestones
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology Pillars */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">
              Core Expertise
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-center gap-1.5">
                <span className="text-blue-600 font-bold">•</span> Core Java (JVM, Spring Boot)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-blue-600 font-bold">•</span> PHP 8.x &amp; Laravel Ecosystem
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-blue-600 font-bold">•</span> MERN Architecture
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-blue-600 font-bold">•</span> PostgreSQL, MySQL &amp; Redis
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-blue-600 font-bold">•</span> REST APIs &amp; Microservices
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-blue-600 font-bold">•</span> Docker &amp; Cloud CI/CD
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">
              Connect
            </h3>
            <div className="flex flex-col space-y-2.5 text-sm">
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn (10K+ Community)</span>
                <ArrowUpRightIcon size={12} className="opacity-70" />
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <GithubIcon size={16} />
                <span>GitHub Repositories</span>
                <ArrowUpRightIcon size={12} className="opacity-70" />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <TwitterIcon size={16} />
                <span>Twitter / X</span>
                <ArrowUpRightIcon size={12} className="opacity-70" />
              </a>
              <a
                href={personalInfo.social.email}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <MailIcon size={16} />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {personalInfo.name}. Designed &amp; Built with pure minimal aesthetics.</p>
          <div className="flex items-center gap-6">
            <span>High Performance Web Architecture</span>
            <span>•</span>
            <span>Clean Code Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
