/**
 * PORTFOLIO DATA CONFIGURATION
 * Real Data for Pritam Kumar Das
 * 
 * All unverified fields (such as pending dates or links) use null or clearly
 * configurable placeholders as requested.
 */

export const personalInfo = {
  name: "Pritam Kumar Das",
  initials: "PKD",
  title: "Software Developer",
  designation: "Software Developer",
  headline: "Software Developer specializing in Full Stack Engineering, Core Java, PHP & MERN with AI-driven application development.",
  shortBio: "Software Developer and B.Tech CSE scholar passionate about building scalable full-stack web platforms, AI developer tools, and intelligent software systems. Sharing technical insights and engineering journeys with 10,000+ followers on LinkedIn.",
  email: "kumardaspritam972@gmail.com",
  phone: null, // Configurable: keep null until verified
  location: "Bhagalpur, Bihar, India",
  website: "https://buildwithpritam.in",
  availability: "Open to Software Developer Roles & Technical Opportunities",
  resumeUrl: "/resume.pdf", // Place real resume.pdf in public folder
  hasRealResume: false, // Set to true once resume.pdf is placed in public/
  social: {
    github: "https://github.com/kumarpritam143",
    linkedin: "https://www.linkedin.com/in/kumarpritam143",
    website: "https://buildwithpritam.in",
    email: "mailto:kumardaspritam972@gmail.com",
  },
  stats: [
    { label: "LinkedIn Network", value: "10K+", description: "Active tech community & followers" },
    { label: "Portfolio Projects", value: "7", description: "Full-stack, AI/ML & tools" },
    { label: "Academic SGPA", value: "8.2", description: "B.Tech Computer Science" },
    { label: "Core Foundations", value: "Java & MERN", description: "Plus PHP & AI integrations" },
  ],
};

export const skillsCategories = [
  {
    title: "Programming Languages",
    description: "Core languages used for enterprise logic, system design, and algorithms.",
    skills: [
      { name: "Core Java", level: "Proficient", tag: "Backend / OOP" },
      { name: "PHP", level: "Proficient", tag: "Backend / Web" },
      { name: "JavaScript (ES6+)", level: "Advanced", tag: "Full Stack" },
      { name: "TypeScript", level: "Intermediate", tag: "Type Safety" },
      { name: "Python", level: "Proficient", tag: "AI / Scripting" },
      { name: "C / C++", level: "Intermediate", tag: "Algorithms / Core" },
      { name: "SQL", level: "Proficient", tag: "Databases" },
    ],
  },
  {
    title: "Frontend Engineering",
    description: "Building responsive, modern, and accessible user interfaces.",
    skills: [
      { name: "React.js (18 / 19)", level: "Advanced", tag: "Frontend" },
      { name: "HTML5 & Semantic Markup", level: "Expert", tag: "Core Web" },
      { name: "CSS3 & Modern Layouts", level: "Advanced", tag: "Styling" },
      { name: "Tailwind CSS", level: "Advanced", tag: "Utility CSS" },
      { name: "State Management (Redux/Context)", level: "Proficient", tag: "Architecture" },
      { name: "Responsive UI/UX Design", level: "Advanced", tag: "Design" },
      { name: "Vite & Modern Tooling", level: "Proficient", tag: "Build Tool" },
    ],
  },
  {
    title: "Backend & Systems",
    description: "Scalable APIs, server architectures, and business logic.",
    skills: [
      { name: "Node.js & Express.js", level: "Advanced", tag: "MERN Stack" },
      { name: "PHP & Laravel Basics", level: "Proficient", tag: "Backend" },
      { name: "RESTful API Architecture", level: "Advanced", tag: "API Design" },
      { name: "Core Java (OOP / Multithreading)", level: "Proficient", tag: "Enterprise" },
      { name: "Authentication (JWT / Session)", level: "Proficient", tag: "Security" },
      { name: "Microservices Fundamentals", level: "Intermediate", tag: "Architecture" },
    ],
  },
  {
    title: "Databases & Caching",
    description: "Data modeling, relational schemas, and persistence layers.",
    skills: [
      { name: "MongoDB & Mongoose", level: "Advanced", tag: "NoSQL" },
      { name: "MySQL", level: "Proficient", tag: "RDBMS" },
      { name: "PostgreSQL", level: "Intermediate", tag: "RDBMS" },
      { name: "Redis Caching Basics", level: "Intermediate", tag: "Performance" },
    ],
  },
  {
    title: "AI / ML & Intelligent Systems",
    description: "Integrating modern LLMs, predictive workflows, and data insights.",
    skills: [
      { name: "AI Developer Tooling", level: "Proficient", tag: "AI / DevTools" },
      { name: "LLM API Integrations", level: "Proficient", tag: "GenAI" },
      { name: "Prompt Engineering", level: "Advanced", tag: "AI Solutions" },
      { name: "Exploratory Data Analysis (EDA)", level: "Proficient", tag: "Data Analytics" },
      { name: "Pandas & NumPy", level: "Intermediate", tag: "Python Data" },
    ],
  },
  {
    title: "Cloud & Development Tools",
    description: "Version control, container basics, and deployment ecosystems.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", tag: "VCS" },
      { name: "Docker Basics", level: "Intermediate", tag: "DevOps" },
      { name: "Postman & API Testing", level: "Advanced", tag: "Tooling" },
      { name: "VS Code & IDE Tooling", level: "Expert", tag: "Workflow" },
      { name: "Linux / Shell Commands", level: "Intermediate", tag: "OS" },
      { name: "Vercel / Netlify Deployment", level: "Advanced", tag: "Cloud" },
    ],
  },
];

export const experienceData = [
  {
    id: "minerva-infotech",
    company: "Minerva Infotech",
    role: "Software Developer",
    period: "Professional Experience", // Configurable field
    duration: null, // Keep null until verified
    location: "India",
    type: "Professional Role",
    isVerified: true,
    description: "Software developer contributing to production software development, web applications, and technology solutions.",
    responsibilities: [
      "Developing and maintaining software modules and responsive web interfaces.",
      "Collaborating on technical architecture, code optimization, and defect resolution.",
      "Writing clean, modular, and reusable code aligned with software development standards.",
      "Working across full-stack layers including frontend components, server APIs, and database integration.",
      "[Additional verified responsibilities can be customized here]"
    ],
    technologies: ["Software Development", "Full Stack", "JavaScript", "Core Java", "Web Technologies"],
  },
  {
    id: "akshay-patra",
    company: "Akshay Patra",
    role: "[Designation - Configurable / To be verified]",
    period: "[Dates - Configurable / To be verified]",
    duration: null,
    location: "Jaipur, Rajasthan, India",
    type: "[Role Type - Configurable / To be verified]",
    isVerified: false,
    description: "Role details, duration, and responsibilities for Akshay Patra, Jaipur are kept configurable until verified.",
    responsibilities: [
      "[Key responsibility 1 — Configurable until verified]",
      "[Key responsibility 2 — Configurable until verified]",
      "[Key responsibility 3 — Configurable until verified]"
    ],
    technologies: ["Software Engineering", "Technical Operations", "Configuration Pending"],
  },
];

export const educationData = {
  institution: "Suresh Gyan Vihar University",
  degree: "B.Tech in Computer Science & Engineering",
  period: "2022 — 2026",
  location: "Jaipur, Rajasthan, India",
  grade: "SGPA: 8.2",
  summary: "Comprehensive academic grounding in computer science and engineering principles, data structures and algorithms, database management, software development methodologies, and artificial intelligence.",
  keyCourses: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Core Java)",
    "Database Management Systems (DBMS & SQL)",
    "Operating Systems",
    "Computer Networks",
    "Web Application Development",
    "Software Engineering & System Design",
    "Artificial Intelligence Fundamentals",
  ],
  academicHighlights: [
    "Consistent academic performance maintaining an SGPA of 8.2 in Computer Science & Engineering.",
    "Active participant in technical symposiums, hackathons, and software development competitions.",
    "Engineered multiple full-stack and AI-driven projects addressing practical student, developer, and data challenges.",
    "Built a strong online presence on LinkedIn, engaging and helping 10,000+ peers in software engineering."
  ],
};

export const certificationsData = [
  {
    id: "cert-java",
    title: "Core Java & Object-Oriented Programming",
    issuer: "Technical Training & Certification",
    issueDate: "2023",
    credentialId: null, // Keep null until verified
    verificationUrl: null, // Keep null until verified link provided
    status: "Completed",
    skills: ["Java", "OOP", "Data Structures", "Collections"],
  },
  {
    id: "cert-fullstack",
    title: "Full Stack Web Development & MERN Stack",
    issuer: "Software Engineering Specialization",
    issueDate: "2023 — 2024",
    credentialId: null,
    verificationUrl: null,
    status: "Completed",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    id: "cert-ai",
    title: "AI & Modern Intelligent Applications",
    issuer: "Practical AI & Developer Tooling",
    issueDate: "2024",
    credentialId: null,
    verificationUrl: null,
    status: "Completed",
    skills: ["AI Integration", "Prompt Engineering", "Python", "EDA"],
  },
  {
    id: "cert-cloud-git",
    title: "Git, GitHub & Modern DevOps Workflows",
    issuer: "Developer Tooling & Version Control",
    issueDate: "2023",
    credentialId: null,
    verificationUrl: null,
    status: "Completed",
    skills: ["Git", "GitHub", "CI/CD Basics", "Linux"],
  },
];

export const projectsData = [
  {
    id: "aptimaster",
    title: "AptiMaster",
    category: "Full Stack & EdTech",
    featured: true,
    tagline: "Comprehensive aptitude evaluation and mock assessment platform for students and placement preparation.",
    description: "An interactive full-stack learning platform designed to streamline aptitude preparation for competitive exams and campus placements. Features timed practice quizzes, category-wise question banks (Quantitative, Logical, Verbal), performance analytics, and detailed step-by-step solutions.",
    features: [
      "Categorized question modules covering Quantitative Aptitude, Logical Reasoning, and Verbal Ability.",
      "Timed examination simulation mode with instant result calculation and detailed score reports.",
      "User progress tracking dashboard with historical assessment performance and topic strengths/weaknesses.",
      "Clean, distraction-free interface engineered for optimal learning and test retention."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/kumarpritam143",
    demoUrl: null, // null until live deployment link provided
  },
  {
    id: "ai-cover-letter-generator",
    title: "AI Cover Letter Generator",
    category: "AI / ML & Career Tools",
    featured: true,
    tagline: "Intelligent tool generating tailored, high-converting cover letters from job descriptions and resumes.",
    description: "An AI-powered web utility that helps job seekers craft personalized, professional cover letters in seconds. The application analyzes candidate experience, aligns it with specific job requirements and company tone, and generates formatted, ready-to-send cover letters.",
    features: [
      "Context-aware generation based on uploaded resume details and target job descriptions.",
      "Customizable tone options ranging from formal corporate to modern startup style.",
      "Live preview and inline markdown editing before copying or exporting.",
      "Drastically reduces job application preparation time while maintaining professional quality."
    ],
    technologies: ["React.js", "Python / Node.js", "AI APIs", "Prompt Engineering", "Tailwind CSS"],
    githubUrl: "https://github.com/kumarpritam143",
    demoUrl: null,
  },
  {
    id: "ai-developer-assistant",
    title: "AI Developer Assistant",
    category: "AI / ML & Developer Tools",
    featured: true,
    tagline: "Intelligent coding assistant for code explanation, refactoring, documentation, and error resolution.",
    description: "A specialized assistant designed for software engineers. It interprets code snippets across multiple languages (Core Java, PHP, JavaScript, Python), explains complex logic, highlights potential edge-case bugs, suggests clean-code refactorings, and assists with unit test generation.",
    features: [
      "Multi-language code explanation covering Java, PHP, JavaScript, and Python.",
      "Automatic unit test generation and edge-case boundary analysis.",
      "Bug detection and stack trace diagnosis with clear remediation guidance.",
      "Syntax-highlighted code output with one-click clipboard copying."
    ],
    technologies: ["React.js", "Node.js", "AI / LLM Integration", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/kumarpritam143",
    demoUrl: null,
  },
  {
    id: "nasa-space-apps-asteroid-impact-simulator",
    title: "NASA Space Apps – Asteroid Impact Simulator",
    category: "Simulation & Science",
    featured: true,
    tagline: "Interactive celestial physics simulation modeling asteroid impact parameters and environmental impact.",
    description: "Developed as part of the NASA International Space Apps Challenge. The simulator allows users to model asteroid trajectory, calculate kinetic energy upon impact, visualize blast crater radius, shockwave distance, and thermal radiation zones based on real celestial physics parameters.",
    features: [
      "Mathematical modeling of asteroid mass, velocity, impact angle, and target surface composition.",
      "Interactive calculation of crater dimensions, seismic consequences, and shockwave radiuses.",
      "Data-driven visual dashboard breaking down physics formulas into intuitive insights.",
      "Designed for the global NASA Space Apps community to foster space science education."
    ],
    technologies: ["React.js", "JavaScript", "Physics Modeling", "Data Visualization", "CSS3"],
    githubUrl: "https://github.com/kumarpritam143",
    demoUrl: null,
  },
  {
    id: "no-code-form-builder",
    title: "No-Code Form Builder",
    category: "Full Stack & Web Tool",
    featured: false,
    tagline: "Drag-and-drop form creator with live validation, dynamic fields, and response management.",
    description: "A flexible no-code tool that enables users to design, customize, and deploy interactive forms without writing a line of code. Supports multiple field types, mandatory rules, validation regex, and a centralized response collection dashboard.",
    features: [
      "Intuitive UI builder supporting text, select, radio, checkbox, date, and file upload fields.",
      "Real-time form preview mode with responsive layout validation.",
      "Centralized response dashboard with submission statistics and data export capabilities.",
      "Modular component structure for easy embedding in third-party websites."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Drag-and-Drop UI", "Tailwind CSS"],
    githubUrl: "https://github.com/kumarpritam143",
    demoUrl: null,
  },
  {
    id: "eda-reveal",
    title: "EDA Reveal",
    category: "AI / ML & Data Analytics",
    featured: false,
    tagline: "Automated Exploratory Data Analysis tool delivering statistical summaries, distributions, and insights.",
    description: "An automated data intelligence web application that streamlines the Exploratory Data Analysis (EDA) phase for analysts and developers. Users upload datasets in CSV format to receive instant statistical summaries, missing value detections, distribution histograms, and correlation heatmaps.",
    features: [
      "Instant dataset inspection: shape, schema, data types, and missing value indicators.",
      "Automated summary statistics: mean, median, standard deviation, and quartile ranges.",
      "Correlation matrix visualization identifying interdependent variables.",
      "Reduces initial data exploration time from hours to seconds."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Data Visualization", "REST APIs", "React / Web"],
    githubUrl: "https://github.com/kumarpritam143",
    demoUrl: null,
  },
  {
    id: "interview-ai-prototype",
    title: "Interview AI Prototype",
    category: "AI / ML & Career Tools",
    featured: false,
    tagline: "AI-driven mock technical interview simulator with dynamic questioning and constructive feedback.",
    description: "A prototype system simulating interactive mock technical interviews. Tailors question sets according to job roles (Frontend, Backend, Full Stack), analyzes candidate answers in real time, and outputs constructive feedback highlighting strengths and improvement areas.",
    features: [
      "Dynamic question generation based on target software role and difficulty level.",
      "Evaluation of answer accuracy, depth of knowledge, and communication clarity.",
      "Actionable interview performance scorecard with tailored learning recommendations.",
      "Iterative conversational flow mimicking realistic engineering interview panels."
    ],
    technologies: ["React.js", "Node.js", "AI APIs", "Prompt Engineering", "Tailwind CSS"],
    githubUrl: "https://github.com/kumarpritam143",
    demoUrl: null,
  },
];

export const hackathonsAndAchievements = {
  linkedinMilestone: {
    followerCount: "10,000+",
    networkReach: "10K+ Followers & Tech Network",
    contentFocus: "Software Development, Full Stack Engineering, Core Java, PHP & MERN",
    engagementRate: "High Community Engagement",
    description: "Building in public and sharing practical software engineering journeys, web development architectures, code snippets, and student developer resources with over 10,000+ engineers, students, and tech recruiters on LinkedIn.",
    profileUrl: "https://www.linkedin.com/in/kumarpritam143",
    keyHighlights: [
      "Built a professional developer community of 10,000+ followers on LinkedIn.",
      "Regularly sharing technical posts on Core Java, full-stack development, and AI tools.",
      "Engaging with fellow engineers, mentors, and hiring managers across the global tech ecosystem.",
      "Mentoring aspiring software developers and computer science peers in project building."
    ],
  },
  hackathons: [
    {
      id: "nasa-space-apps",
      title: "NASA International Space Apps Challenge",
      event: "Global Science & Space Hackathon",
      date: "NASA Space Apps Participant",
      role: "Full Stack & Simulation Developer",
      location: "Global / Virtual",
      award: "Project: Asteroid Impact Simulator",
      description: "Engineered the 'Asteroid Impact Simulator' for the NASA Space Apps Challenge, modeling celestial impact physics and environmental consequences using web technologies.",
      techStack: ["React.js", "JavaScript", "Physics Modeling", "Data Visualization"],
      certificate: "Verified NASA Space Apps Challenge Participant",
    },
    {
      id: "hack-tech-innovate",
      title: "Full Stack & AI Hackathon Initiatives",
      event: "Developer Hackathon & Coding Competitions",
      date: "Academic & Tech Hackathons",
      role: "Lead Software Developer",
      location: "India",
      award: "Project Showcase & Technical Recognition",
      description: "Developed and submitted innovative web and AI solutions including automated tools, aptitude platforms, and developer assistance prototypes.",
      techStack: ["React.js", "Node.js", "Core Java", "AI APIs"],
      certificate: "Participation & Submission Verified",
    },
  ],
  achievements: [
    {
      title: "10,000+ LinkedIn Network Milestone",
      platform: "LinkedIn Professional Community",
      description: "Grew an organic community of 10K+ followers sharing software engineering knowledge, project builds, and tech tutorials.",
      badge: "10K+ Followers",
    },
    {
      title: "NASA Space Apps Challenge Contributor",
      platform: "NASA International Space Apps",
      description: "Successfully built and presented the Asteroid Impact Simulator addressing real-world astrophysics challenges.",
      badge: "Global Hackathon",
    },
    {
      title: "7 Production-Ready Portfolio Projects",
      platform: "GitHub & Web Development",
      description: "Authored full-stack platforms, EdTech tools, AI developer utilities, and data analytics tools with clean code.",
      badge: "Full Stack Portfolio",
    },
    {
      title: "B.Tech CSE Academic Standing (SGPA: 8.2)",
      platform: "Suresh Gyan Vihar University",
      description: "Consistently maintained high academic standing in Computer Science & Engineering fundamentals and lab projects.",
      badge: "SGPA 8.2",
    },
  ],
};
