/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Replace the dummy values below with your personal information,
 * professional experiences, projects, education, and links.
 */

export const personalInfo = {
  name: "Alex Morgan",
  initials: "AM",
  title: "Senior Full Stack Software Engineer",
  headline: "Architecting high-scale backend services in Core Java & PHP, and crafting modern web applications with the MERN stack.",
  shortBio: "Passionate software engineer with deep expertise in enterprise Core Java, high-throughput PHP/Laravel systems, and modern full-stack web applications using React and Node.js. Committed to clean code, robust architecture, and delivering measurable business impact.",
  email: "alex.morgan.dev@example.com",
  phone: "+1 (555) 234-5678",
  location: "San Francisco, CA (Open to Worldwide Remote & Hybrid)",
  availability: "Available for Full-time Roles & Senior Consulting",
  resumeUrl: "#", // Replace with your resume PDF path or link
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:alex.morgan.dev@example.com",
  },
  stats: [
    { label: "Years Experience", value: "5+", description: "Building production systems" },
    { label: "Delivered Projects", value: "35+", description: "Enterprise & web apps" },
    { label: "LinkedIn Community", value: "10K+", description: "Active software engineers" },
    { label: "System Uptime Track", value: "99.9%", description: "Production reliability" },
  ],
};

export const skillsCategories = [
  {
    title: "Core Java & Enterprise Backend",
    description: "Multi-threaded architectures, enterprise patterns, and microservices.",
    skills: [
      { name: "Core Java (8/11/17/21)", level: "Advanced", tag: "Language" },
      { name: "Spring Boot & Spring Cloud", level: "Advanced", tag: "Framework" },
      { name: "Hibernate / JPA", level: "Advanced", tag: "ORM" },
      { name: "JVM Internals & Concurrency", level: "Proficient", tag: "Core" },
      { name: "RESTful Web Services", level: "Expert", tag: "API" },
      { name: "JUnit 5 & Mockito", level: "Advanced", tag: "Testing" },
      { name: "Maven & Gradle", level: "Proficient", tag: "Build Tool" },
      { name: "Microservices Architecture", level: "Advanced", tag: "Architecture" },
    ],
  },
  {
    title: "PHP & Modern Backend Engineering",
    description: "Robust MVC systems, high-scale web APIs, and database-driven solutions.",
    skills: [
      { name: "PHP 8.x (Modern PHP)", level: "Advanced", tag: "Language" },
      { name: "Laravel Framework (9/10/11)", level: "Advanced", tag: "Framework" },
      { name: "Composer & PSR Standards", level: "Advanced", tag: "Ecosystem" },
      { name: "Eloquent ORM", level: "Advanced", tag: "Database" },
      { name: "PHPUnit & Pest Testing", level: "Proficient", tag: "Testing" },
      { name: "API Authentication (Sanctum/JWT)", level: "Advanced", tag: "Security" },
      { name: "Queue & Job Processing (Redis)", level: "Proficient", tag: "Performance" },
      { name: "Symfony Components", level: "Intermediate", tag: "Architecture" },
    ],
  },
  {
    title: "MERN Stack & Modern Frontend",
    description: "Interactive, accessible, and reactive single-page applications.",
    skills: [
      { name: "React 18 / 19", level: "Advanced", tag: "Frontend" },
      { name: "Node.js & Express.js", level: "Advanced", tag: "Backend" },
      { name: "MongoDB & Mongoose", level: "Advanced", tag: "Database" },
      { name: "JavaScript (ES6+) & TypeScript", level: "Advanced", tag: "Language" },
      { name: "State Management (Redux/Zustand)", level: "Proficient", tag: "State" },
      { name: "HTML5, Semantic UI & Modern CSS", level: "Expert", tag: "UI" },
      { name: "Tailwind CSS & CSS Modules", level: "Advanced", tag: "Styling" },
      { name: "Vite, Webpack & Tooling", level: "Advanced", tag: "DevOps" },
    ],
  },
  {
    title: "Databases, Cloud & DevOps",
    description: "Persistent storage, automated deployments, and scalable infrastructure.",
    skills: [
      { name: "PostgreSQL & MySQL", level: "Advanced", tag: "SQL" },
      { name: "Redis Caching", level: "Proficient", tag: "Cache" },
      { name: "Docker & Containerization", level: "Proficient", tag: "DevOps" },
      { name: "AWS (S3, EC2, RDS, Lambda)", level: "Proficient", tag: "Cloud" },
      { name: "Git, GitHub & CI/CD Pipelines", level: "Advanced", tag: "VCS" },
      { name: "Linux / Shell Scripting", level: "Proficient", tag: "OS" },
      { name: "Postman & API Documentation", level: "Expert", tag: "Tooling" },
      { name: "Nginx & Reverse Proxies", level: "Intermediate", tag: "Infrastructure" },
    ],
  },
];

export const experienceData = [
  {
    id: "exp-1",
    company: "NovaTech Solutions",
    role: "Senior Full Stack Software Engineer",
    period: "Jan 2023 — Present",
    duration: "2+ Years",
    location: "San Francisco, CA (Remote)",
    type: "Full-Time",
    description: "Spearheading backend microservice development in Java Spring Boot and modern reactive frontends in React, serving 500,000+ monthly active enterprise users.",
    responsibilities: [
      "Architected and deployed 4 high-throughput microservices using Java 17 and Spring Boot, cutting transaction latency by 38%.",
      "Designed an administrative analytics dashboard using React 18, TypeScript, and Tailwind CSS with real-time WebSocket metrics.",
      "Optimized complex PostgreSQL and Redis queries, scaling database throughput to over 15,000 queries per second.",
      "Implemented automated CI/CD deployment pipelines on AWS with Docker, reducing release cycle time from 3 days to under 45 minutes.",
      "Mentored a team of 6 engineers on clean code practices, SOLID principles, and unit testing with JUnit & Mockito."
    ],
    technologies: ["Java 17", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker", "AWS", "Redis", "JUnit"],
  },
  {
    id: "exp-2",
    company: "CloudScale Web Systems",
    role: "Full Stack Developer (PHP & MERN)",
    period: "Jun 2021 — Dec 2022",
    duration: "1.5 Years",
    location: "Boston, MA (Hybrid)",
    type: "Full-Time",
    description: "Engineered robust web applications and high-traffic eCommerce platforms using modern PHP (Laravel) and Node.js microservices.",
    responsibilities: [
      "Developed modular REST APIs in PHP 8.1 and Laravel 9, handling over 2.5 million client requests weekly with 99.95% uptime.",
      "Built dynamic client dashboards and merchant portals using React, Redux, and Node.js/Express with MongoDB.",
      "Integrated multi-currency payment gateways (Stripe, PayPal, Adyen) with comprehensive webhook auditing and automated retry logic.",
      "Refactored legacy monolith modules into decoupled services, reducing memory consumption by 32% and enhancing maintainability.",
      "Authored 120+ automated unit and integration tests using PHPUnit and Postman, achieving 88% test coverage."
    ],
    technologies: ["PHP 8.1", "Laravel", "React", "Node.js", "Express.js", "MongoDB", "MySQL", "Redis", "Stripe API"],
  },
  {
    id: "exp-3",
    company: "InnoWave Digital Labs",
    role: "Junior Software Engineer Intern",
    period: "Aug 2020 — May 2021",
    duration: "10 Months",
    location: "Chicago, IL (On-site)",
    type: "Internship",
    description: "Collaborated on core software components, building responsive user interfaces and backend database services in Java and PHP.",
    responsibilities: [
      "Assisted in developing RESTful endpoints using Core Java and Spring MVC for internal reporting tools.",
      "Created reusable responsive UI components using JavaScript (ES6+), HTML5, and CSS3, standardizing UI consistency.",
      "Wrote database migrations, schema designs, and indexing strategies in MySQL to optimize search queries.",
      "Participated actively in daily Agile standups, sprint reviews, and pair programming sessions."
    ],
    technologies: ["Core Java", "PHP", "JavaScript", "MySQL", "HTML5", "CSS3", "Git", "Spring MVC"],
  },
];

export const educationData = {
  degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
  institution: "Apex Institute of Technology & Science",
  period: "2017 — 2021",
  location: "San Francisco, CA",
  grade: "First Class Distinction · GPA: 3.9 / 4.0",
  summary: "Comprehensive academic grounding in computer science fundamentals, algorithm design, software engineering methodologies, database theory, and object-oriented architecture.",
  keyCourses: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java)",
    "Database Management Systems (RDBMS & SQL)",
    "Operating Systems & Multithreading",
    "Computer Networks & Distributed Systems",
    "Software Engineering & Architecture",
    "Web Application Development",
    "Cloud Computing & Virtualization",
  ],
  academicHighlights: [
    "Awarded Department Academic Excellence Award for Top 5% ranking across all four years.",
    "Led capstone project: 'Distributed Task Scheduling and Event Processing System' evaluated with highest honors.",
    "Co-authored research paper on 'Performance Evaluation of Microservices vs Monolithic Backend Systems'.",
    "President of the Campus Computer Science Student Society, organizing coding workshops and technical hackathons."
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Oracle Certified Professional: Java SE 17 Developer",
      issuer: "Oracle Corporation",
      issueDate: "2023",
      credentialId: "OCP-J17-894721",
      verificationUrl: "https://www.oracle.com/education/certification/",
      badgeColor: "blue",
    },
    {
      id: "cert-2",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "2023",
      credentialId: "AWS-SAA-3829104",
      verificationUrl: "https://aws.amazon.com/certification/",
      badgeColor: "slate",
    },
    {
      id: "cert-3",
      title: "Meta Full-Stack Software Engineer Specialization",
      issuer: "Meta / Coursera",
      issueDate: "2022",
      credentialId: "META-FS-991204",
      verificationUrl: "https://www.coursera.org",
      badgeColor: "blue",
    },
    {
      id: "cert-4",
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB University",
      issueDate: "2022",
      credentialId: "MDB-DEV-471092",
      verificationUrl: "https://learn.mongodb.com",
      badgeColor: "emerald",
    },
    {
      id: "cert-5",
      title: "Modern PHP 8 & Laravel Enterprise Architecture",
      issuer: "Laracasts / Zend Certified",
      issueDate: "2021",
      credentialId: "LAR-ARCH-582103",
      verificationUrl: "https://laracasts.com",
      badgeColor: "indigo",
    },
  ],
};

export const projectsData = [
  {
    id: "proj-1",
    title: "ApexERP — Enterprise Resource Planning Engine",
    category: "Java & Spring",
    featured: true,
    tagline: "Scalable multi-tenant enterprise system with automated accounting, inventory management, and role-based access control.",
    description: "A production-grade ERP application engineered to handle complex business operations for enterprise suppliers. Built with a modular microservices architecture in Java Spring Boot, backed by PostgreSQL with connection pooling, and paired with a crisp React UI for workflow management.",
    features: [
      "Multi-tenant data isolation with schema-based segregation and secure tenant routing.",
      "High-speed inventory tracking with Redis cache-aside caching reducing DB read bottlenecks by 70%.",
      "Comprehensive role-based access control (RBAC) supporting granular department permissions.",
      "Automated financial reconciliation reports generation using asynchronous background worker queues."
    ],
    technologies: ["Java 21", "Spring Boot", "React", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
  },
  {
    id: "proj-2",
    title: "OmniCart — High-Scale Commerce & Billing API",
    category: "PHP & Laravel",
    featured: true,
    tagline: "High-throughput eCommerce backend with automated checkout, webhook synchronization, and inventory locking.",
    description: "An enterprise API built with PHP 8.2 and Laravel 10 designed to process millions of transactions. Implements pessimistic locking for flash-sale inventory reservation, Stripe/PayPal payment gateway integrations, and automatic invoice PDF generation via distributed queues.",
    features: [
      "Pessimistic locking algorithm preventing inventory over-selling during high-concurrency traffic bursts.",
      "Asynchronous job workers handling email receipts, webhook notifications, and order fulfilment notifications.",
      "Comprehensive RESTful documentation with OpenAPI 3.0 / Swagger schema.",
      "Full unit & feature test suite with 92% coverage using Pest and PHPUnit."
    ],
    technologies: ["PHP 8.2", "Laravel 10", "MySQL", "Redis", "Stripe API", "Docker", "PHPUnit"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
  },
  {
    id: "proj-3",
    title: "DevNexus — Real-Time Developer Collaboration Platform",
    category: "MERN Stack",
    featured: true,
    tagline: "Community hub for engineers featuring live code sharing, WebSocket discussions, and interactive technical roadmaps.",
    description: "A full-featured MERN stack web application connecting thousands of software developers. Allows users to publish technical articles, collaborate on live snippets via WebSocket-powered rooms, and search solutions with MongoDB atlas full-text indexing.",
    features: [
      "Low-latency real-time chat and code collaboration channels powered by Socket.io.",
      "MongoDB aggregation pipelines providing personalized tech feeds and trending topic analytics.",
      "Secure JWT authentication with refresh token rotation and OAuth2 (GitHub / Google) integration.",
      "Clean, distraction-free markdown editor with live syntax highlighting and code preview."
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
  },
  {
    id: "proj-4",
    title: "FinPulse — Portfolio Valuation & Batch Engine",
    category: "Java & Spring",
    featured: false,
    tagline: "Automated wealth portfolio tracking with high-volume transaction reconciliation and analytics.",
    description: "A financial data processing tool utilizing Spring Batch to parse daily stock feeds, bank statements, and crypto transactions. Provides portfolio analytics, risk metrics calculation, and customizable performance charts for investors.",
    features: [
      "Spring Batch chunk-oriented processing handling 200,000+ daily financial ledger records smoothly.",
      "Reactive REST endpoints utilizing Spring WebFlux for real-time asset price stream push.",
      "Historical Sharpe ratio, volatility, and maximum drawdown mathematical computation algorithms.",
      "Exportable regulatory compliance reports in CSV and PDF formats."
    ],
    technologies: ["Java 17", "Spring Batch", "Spring WebFlux", "PostgreSQL", "React", "Chart.js"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
  },
  {
    id: "proj-5",
    title: "TaskFlow Pro — Agile Team Sprint & Issue Tracker",
    category: "MERN Stack",
    featured: false,
    tagline: "Kanban board and sprint planner with automated workflow triggers and performance metrics.",
    description: "A collaborative productivity application allowing engineering teams to manage backlogs, track sprint velocity, and visualize workflow bottlenecks. Built with Express and Node.js backend, MongoDB, and an interactive React drag-and-drop board.",
    features: [
      "Smooth HTML5 drag-and-drop Kanban interface with instant optimistic UI updates.",
      "Customizable webhook triggers notifying team channels in Slack and Discord upon ticket state transitions.",
      "Automated sprint burndown charts and velocity analytics calculating team capacity.",
      "Role-based workspace invitations with granular project access permissions."
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
  },
  {
    id: "proj-6",
    title: "SysPulse — Distributed Service Telemetry Monitor",
    category: "Java & Spring",
    featured: false,
    tagline: "Lightweight application performance monitoring agent and health-check visualization dashboard.",
    description: "A system monitoring solution for microservice environments. Collects memory metrics, CPU utilization, thread dump analytics, and HTTP response latency distributions across distributed Java and PHP worker nodes.",
    features: [
      "Lightweight telemetry agent collecting JVM runtime metrics with minimal memory overhead (<1.5%).",
      "Interactive time-series metric graphs with customizable warning thresholds and email alerts.",
      "Centralized distributed trace viewer identifying slow database queries and network hops.",
      "Dockerized one-command deployment package for easy infrastructure integration."
    ],
    technologies: ["Java 17", "Spring Boot", "React", "Docker", "Prometheus", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
  },
];

export const hackathonsAndAchievements = {
  linkedinMilestone: {
    followerCount: "10,000+",
    networkReach: "250,000+ Monthly Impressions",
    contentFocus: "Core Java, PHP, Modern Web Architecture & System Design",
    engagementRate: "4.8% Active Engagement",
    description: "Dedicated to sharing practical software engineering knowledge, demystifying multithreading, dissecting enterprise design patterns, and mentoring junior developers breaking into the tech industry.",
    profileUrl: "https://linkedin.com",
    keyHighlights: [
      "Authored 60+ in-depth technical posts breaking down JVM memory models, Spring Boot design patterns, and PHP 8.x modern capabilities.",
      "Created visual architecture diagrams explaining REST vs gRPC, database indexing strategies, and clean code principles.",
      "Regularly featured on top developer feeds with thousands of engagements and discussions.",
      "Mentored 50+ aspiring software engineers on technical interview preparation and portfolio reviews."
    ],
  },
  hackathons: [
    {
      id: "hack-1",
      title: "1st Place Winner — National Smart Tech Hackathon",
      event: "National Smart City Innovation Challenge",
      date: "October 2023",
      role: "Lead Backend Architect",
      location: "San Francisco, CA",
      award: "First Place ($10,000 Grand Prize & Trophy)",
      description: "Engineered 'ResQDispatch', a high-reliability emergency resource coordination platform. Developed the real-time routing algorithm in Java Spring Boot, integrating live GPS feeds with low-latency dispatch notifications to first responders.",
      techStack: ["Java 17", "Spring Boot", "React", "PostgreSQL", "WebSocket", "Mapbox API"],
      certificate: "Verified Winner Certificate #STH-2023-01",
    },
    {
      id: "hack-2",
      title: "Top 3 Finalist — FinTech Disrupt 48-Hour Hackathon",
      event: "Global Financial Technology Hackathon",
      date: "May 2022",
      role: "Full Stack Engineer",
      location: "Virtual / Global",
      award: "Podium Finalist & Best Architecture Award",
      description: "Designed and built an automated micro-fraud detection system in PHP 8 and Node.js. Evaluated 10,000 synthetic transactions in real-time using rule-based scoring models and Redis caching pipelines.",
      techStack: ["PHP 8", "Laravel", "Node.js", "Redis", "React", "Docker"],
      certificate: "Verified Finalist Certificate #FTD-2022-03",
    },
    {
      id: "hack-3",
      title: "Best Open Source Tool — HackTheFuture Hackathon",
      event: "Open Source Developer Foundation",
      date: "November 2021",
      role: "Sole Contributor & Presenter",
      location: "Boston, MA",
      award: "Best Community Open Source Tool",
      description: "Created 'APIShield', an open-source rate-limiting and JWT security validator for microservices. Praised by the judges for clean architecture, comprehensive unit tests, and instant drop-in middleware capability.",
      techStack: ["Core Java", "Node.js", "Express", "Docker", "GitHub Actions"],
      certificate: "Verified Winner Certificate #HTF-2021-OS",
    },
    {
      id: "hack-4",
      title: "Runner-Up — Inter-College CodeSprint Challenge",
      event: "Apex Tech Engineering Symposium",
      date: "April 2020",
      role: "Team Lead",
      location: "San Francisco, CA",
      award: "2nd Place & Best Algorithm Implementation",
      description: "Built a collaborative peer-learning platform for university students with algorithmic code execution and automated test runners.",
      techStack: ["Core Java", "PHP", "MySQL", "JavaScript", "Bootstrap"],
      certificate: "Verified Runner-Up Certificate #ICS-2020-02",
    },
  ],
  achievements: [
    {
      title: "500+ Algorithmic Challenges Solved",
      platform: "LeetCode & HackerRank",
      description: "Consistent problem solving in Core Java, mastering Dynamic Programming, Graph Algorithms, Binary Trees, and Concurrency patterns.",
      badge: "Top 5% Global Ranking",
    },
    {
      title: "Open Source Contributor",
      platform: "GitHub Community",
      description: "Active contributor to open-source developer tooling, documentation fixes, and performance patches in the Java and PHP ecosystems.",
      badge: "150+ Pull Requests Merged",
    },
    {
      title: "Technical Speaker & Workshop Host",
      platform: "Regional Tech Meetups",
      description: "Conducted hands-on sessions on 'Modern PHP 8 Features You Should Be Using' and 'Demystifying Java Garbage Collection for Beginners'.",
      badge: "4 Keynote Sessions",
    },
    {
      title: "Academic Excellence Distinction",
      platform: "Apex Institute of Technology",
      description: "Graduated among the top percentile of the Computer Science class with consistent academic distinction and Dean's Honors across all semesters.",
      badge: "Summa Cum Laude",
    },
  ],
};

export const testimonials = [
  {
    quote: "Alex is that rare engineer who possesses both deep enterprise backend mastery in Java and PHP and the ability to craft intuitive, polished user experiences with React. An invaluable asset to any high-performing engineering team.",
    author: "Marcus Vance",
    role: "VP of Engineering",
    company: "NovaTech Solutions",
  },
  {
    quote: "Working with Alex on our core APIs was an absolute pleasure. His architectural decisions cut our latency in half, and his attention to code quality and testing standards elevated our entire engineering department.",
    author: "Sarah Jenkins",
    role: "Lead Software Architect",
    company: "CloudScale Systems",
  },
  {
    quote: "Alex's technical posts on LinkedIn helped thousands of developers understand complex Java concurrency and system design topics with incredible clarity. A brilliant engineer and natural communicator.",
    author: "David Thorne",
    role: "Engineering Director",
    company: "TechNexus Media",
  },
];

