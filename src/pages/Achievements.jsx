import { hackathonsAndAchievements } from "../data/portfolioData";
import PageMeta from "../components/shared/PageMeta";
import SectionHeader from "../components/shared/SectionHeader";
import Card from "../components/shared/Card";
import Badge from "../components/shared/Badge";
import Button from "../components/shared/Button";
import {
  TrophyIcon,
  AwardIcon,
  CalendarIcon,
  MapPinIcon,
  LinkedinIcon,
  CheckIcon,
  ArrowRightIcon,
} from "../components/shared/Icons";

export default function Achievements() {
  const { linkedinMilestone, hackathons, achievements } = hackathonsAndAchievements;

  return (
    <>
      <PageMeta
        title="Hackathons & Achievements · 10K+ Community"
        description="Pritam Kumar Das - 10,000+ LinkedIn follower network, NASA International Space Apps Challenge participant, and technical software milestones."
      />

      {/* Page Header */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="MILESTONES & RECOGNITION"
            title="Hackathons, Achievements &amp; Community"
            subtitle="Competitive coding initiatives, NASA Space Apps simulation development, and a 10K+ developer network on LinkedIn."
          />
        </div>
      </section>

      {/* =================================================================
          PROMINENT 10K+ LINKEDIN COMMUNITY MILESTONE
          ================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="linkedin-milestone-card bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
                  <LinkedinIcon size={14} />
                  <span>PROMINENT COMMUNITY MILESTONE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  10,000+ Tech Followers on LinkedIn
                </h2>

                <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                  {linkedinMilestone.description}
                </p>

                {/* Milestone highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {linkedinMilestone.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="text-blue-600 mt-0.5 shrink-0">
                        <CheckIcon size={14} />
                      </span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    href={linkedinMilestone.profileUrl}
                    external
                    variant="primary"
                    icon={LinkedinIcon}
                  >
                    Connect with Pritam on LinkedIn (10K+)
                  </Button>
                </div>
              </div>

              {/* Stats Box */}
              <div className="lg:col-span-4 bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-5 text-center sm:text-left">
                <div className="border-b border-slate-200 pb-4">
                  <div className="text-4xl font-extrabold text-blue-600">
                    {linkedinMilestone.followerCount}
                  </div>
                  <div className="text-xs uppercase font-semibold text-slate-500 mt-1">
                    Organic Followers
                  </div>
                </div>

                <div className="border-b border-slate-200 pb-4">
                  <div className="text-2xl font-bold text-slate-900">
                    Active Tech Network
                  </div>
                  <div className="text-xs uppercase font-semibold text-slate-500 mt-1">
                    Engineers, Students &amp; Mentors
                  </div>
                </div>

                <div>
                  <div className="text-xl font-bold text-slate-800">
                    Full-Stack &amp; AI
                  </div>
                  <div className="text-xs uppercase font-semibold text-slate-500 mt-1">
                    Core Technical Discussions
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =================================================================
          HACKATHON PARTICIPATION CARDS
          ================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="COMPETITIONS & CHALLENGES"
            title="Hackathon Projects &amp; Participation"
            subtitle="Rapid engineering sprints and high-impact submissions including the NASA Space Apps Challenge."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hackathons.map((hack) => (
              <Card key={hack.id} hoverable className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shrink-0">
                      <TrophyIcon size={24} />
                    </div>
                    <Badge variant="blue" size="sm">
                      {hack.award}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {hack.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 mb-3">
                    {hack.event}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <CalendarIcon size={12} />
                      {hack.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPinIcon size={12} />
                      {hack.location}
                    </span>
                    <span>•</span>
                    <span className="font-medium text-slate-700">
                      {hack.role}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {hack.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {hack.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {hack.certificate}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          GENERAL ACHIEVEMENTS
          ================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="HONORS & MILESTONES"
            title="Technical Highlights &amp; Standing"
            subtitle="Academic consistency, portfolio breadth, and active online technical presence."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((ach, idx) => (
              <Card key={idx} hoverable className="p-6 bg-white">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                  <AwardIcon size={20} />
                </div>
                <Badge variant="blue" size="sm" className="mb-2">
                  {ach.badge}
                </Badge>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {ach.title}
                </h4>
                <div className="text-xs font-semibold text-blue-600 mb-2">
                  {ach.platform}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ach.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRightIcon} iconPosition="right">
              Connect Regarding Opportunities
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
