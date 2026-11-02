import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import PageMeta from "../components/shared/PageMeta";
import SectionHeader from "../components/shared/SectionHeader";
import Button from "../components/shared/Button";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "../components/shared/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    serviceType: "Full-Time Role",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a brief message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic asynchronous network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        serviceType: "Full-Time Role",
        message: "",
      });
    }, 700);
  };

  return (
    <>
      <PageMeta
        title="Contact · Alex Morgan"
        description="Get in touch with Senior Full Stack Software Engineer Alex Morgan for full-time software engineering roles, enterprise Java/PHP consulting, and architectural guidance."
      />

      {/* Page Header */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="GET IN TOUCH"
            title="Let's Connect &amp; Collaborate"
            subtitle="I am always interested in discussing new engineering opportunities, enterprise architecture projects, or mentoring."
          />
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & Channels */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Contact Information
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Feel free to reach out directly via email, phone, or connect on LinkedIn and GitHub. I respond promptly to inquiries.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact-info-card group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MailIcon size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-semibold text-slate-400">
                      Direct Email
                    </div>
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="contact-info-card group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <PhoneIcon size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-semibold text-slate-400">
                      Phone / Mobile
                    </div>
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div className="contact-info-card">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <MapPinIcon size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-semibold text-slate-400">
                      Base Location
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Connect on Social &amp; Code Platforms
                </h4>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <LinkedinIcon size={16} />
                    <span className="font-medium text-xs">LinkedIn</span>
                    <ArrowUpRightIcon size={12} className="ml-auto opacity-60" />
                  </a>

                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <GithubIcon size={16} />
                    <span className="font-medium text-xs">GitHub</span>
                    <ArrowUpRightIcon size={12} className="ml-auto opacity-60" />
                  </a>

                  <a
                    href={personalInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <TwitterIcon size={16} />
                    <span className="font-medium text-xs">Twitter / X</span>
                    <ArrowUpRightIcon size={12} className="ml-auto opacity-60" />
                  </a>

                  <a
                    href={personalInfo.social.email}
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <MailIcon size={16} />
                    <span className="font-medium text-xs">Mail Inbox</span>
                    <ArrowUpRightIcon size={12} className="ml-auto opacity-60" />
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                <span>Typical response time: Within 24 business hours.</span>
              </div>

            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="portfolio-card p-8 sm:p-10 bg-white">
                
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100">
                      <CheckCircleIcon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Message Received!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for getting in touch. I have received your message and will review your inquiry shortly.
                    </p>
                    <div className="pt-4">
                      <Button
                        variant="secondary"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="border-b border-slate-100 pb-4">
                      <h3 className="text-xl font-bold text-slate-900">
                        Send a Direct Message
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill out the details below and I'll get back to you promptly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Jane Doe"
                          className={`form-input ${errors.name ? "error" : ""}`}
                        />
                        {errors.name && <span className="form-error">{errors.name}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className={`form-input ${errors.email ? "error" : ""}`}
                        />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label htmlFor="serviceType" className="form-label">
                          Inquiry Type
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="Full-Time Role">Full-Time Role / Hiring</option>
                          <option value="Consulting / Architecture">Consulting &amp; System Architecture</option>
                          <option value="Contract / Freelance">Contract Web Development</option>
                          <option value="Technical Mentorship">Technical Mentorship / Speaking</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="subject" className="form-label">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="e.g. Senior Backend Role at TechCorp"
                          className={`form-input ${errors.subject ? "error" : ""}`}
                        />
                        {errors.subject && <span className="form-error">{errors.subject}</span>}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your team, tech stack, timeline, or requirements..."
                        className={`form-textarea ${errors.message ? "error" : ""}`}
                      ></textarea>
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto"
                        icon={ArrowRightIcon}
                        iconPosition="right"
                      >
                        {isSubmitting ? "Sending Message..." : "Submit Message"}
                      </Button>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
