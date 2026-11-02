import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";
import { MenuIcon, XIcon, DownloadIcon, ArrowRightIcon } from "./shared/Icons";
import Button from "./shared/Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Education", path: "/education" },
  { name: "Projects", path: "/projects" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleDownloadResume = () => {
    alert("Resume download triggered. In production, this links directly to your actual resume PDF.");
  };

  return (
    <header
      className={`portfolio-navbar sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:bg-blue-700 transition-colors">
              {personalInfo.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-base tracking-tight group-hover:text-blue-600 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wide">
                Full Stack Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              icon={DownloadIcon}
              onClick={handleDownloadResume}
              className="text-slate-700"
            >
              Resume
            </Button>
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={ArrowRightIcon}
              iconPosition="right"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle mobile navigation"
            >
              {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white shadow-xl animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <Button
                variant="secondary"
                size="md"
                icon={DownloadIcon}
                onClick={() => {
                  closeMobileMenu();
                  handleDownloadResume();
                }}
                className="w-full justify-center"
              >
                Download Resume (PDF)
              </Button>
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={ArrowRightIcon}
                iconPosition="right"
                onClick={closeMobileMenu}
                className="w-full justify-center"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
