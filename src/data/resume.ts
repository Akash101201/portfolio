// Single source of truth for all site content.
// Wrap text in **double asterisks** to render it bold (used for metrics).

export const profile = {
  name: "Akash Shankar",
  initials: "AS",
  role: "Full-Stack & AI Engineer",
  location: "Bengaluru, India",
  email: "s.akash101201@gmail.com",
  github: "https://github.com/Akash101201",
  linkedin: "https://www.linkedin.com/in/akash-shankar-450290212",
  resume: "/Akash_Shankar_Resume.pdf",
  avatar: "/avatar.jpg",
  siteUrl: "https://akash-shankar.vercel.app",
  openToWork: true,
  heroTitle: "Full-Stack & AI Engineer",
  headline: "From pixel-perfect UIs to scalable APIs to LLM-powered tools, I build the whole stack.",
  tagline:
    "Software Engineer at Zebra Technologies, shipping React, Angular, Node.js, and GraphQL products alongside internal LLM tools built with LangChain and RAG.",
  capabilities: {
    fullStack: ["React", "Angular", "Node.js", "GraphQL", "MongoDB / SQL"],
    ai: ["LLMs", "LangChain", "RAG", "Agents"],
  },
  seoDescription:
    "Akash Shankar is a Full-Stack & AI Engineer in Bengaluru building React and Angular front-ends, Node.js and GraphQL services, and LLM tools with LangChain and RAG.",
};

export const metrics = [
  { value: "30%", label: "faster page loads (96 Lighthouse)" },
  { value: "80%", label: "Jest test coverage" },
  { value: "25+", label: "reusable UI components" },
  { value: "6 mo", label: "intern to full-time SWE" },
];

export const about = {
  bio: [
    "I'm a Full-Stack Engineer who loves building responsive, elegant interfaces for mobile and desktop, and the Node.js services that power them. At Zebra Technologies, I've shipped production code across 4+ B2B products in React, Angular, and TypeScript, backed by REST and GraphQL APIs over MongoDB and SQL.",
    "I care about craft you can measure: faster pages, fewer regressions, and well-tested code shipped through CI/CD on Google Cloud. I've architected RabbitMQ-based microservice messaging that handles thousands of messages per second, and I enjoy working closely with product and design to turn a vision into reliable software.",
  ],
  strengths: [
    {
      icon: "monitor",
      title: "Front-End Craft",
      text: "Responsive React and Angular UIs with a focus on performance, accessibility, and reusable components.",
    },
    {
      icon: "server",
      title: "Scalable Backends",
      text: "Node.js services, REST and GraphQL APIs, and event-driven microservices with RabbitMQ.",
    },
    {
      icon: "shield",
      title: "Quality & Testing",
      text: "Production-ready code with Jest unit and integration tests, peer reviews, and CI/CD.",
    },
    {
      icon: "sparkles",
      title: "AI / LLM Tooling",
      text: "LLM-powered tools with LangChain, LlamaIndex, and RAG that save developers real hours.",
    },
  ],
  softSkills: [
    "Cross-functional collaboration",
    "Data-driven decisions",
    "Agile / Scrum",
    "Code reviews & mentoring",
    "Ownership end to end",
  ],
};

export const ai = {
  intro:
    "I bring AI into the engineering workflow itself: tools that turn designs into code, diagnose defects straight from JIRA tickets, and write tests, all shipped to real teams at Zebra.",
  highlights: [
    {
      value: "60%",
      label: "of routine customer queries automated",
      context: "LLM-powered chatbots and web apps (React + Node.js)",
    },
    {
      value: "30%",
      label: "faster development",
      context: "AI-generated unit tests and refactoring suggestions",
    },
    {
      value: "In editor",
      label: "defect diagnosis from JIRA",
      context: "LangChain agents inside a VS Code extension",
    },
    {
      value: "Figma",
      label: "to production UI",
      context: "React and Angular generation — measured result is in the case study",
    },
  ],
  stack: ["LLMs", "LangChain", "LlamaIndex", "RAG", "Agentic workflows", "Prompt Engineering"],
};

export type Project = {
  title: string;
  featured?: boolean;
  badge: "internal" | "open-source" | "on-request";
  star: { s: string; t: string; a: string; r: string };
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Figma-to-Code Generation Tool",
    featured: true,
    badge: "internal",
    star: {
      s: "Front-end teams at Zebra were hand-translating Figma designs into React and Angular UI across B2B products — slow, repetitive, and easy to drift from the design.",
      t: "Give those teams an internal tool that turns a Figma design into production TypeScript UI, with a human still reviewing the output.",
      a: "Built an LLM pipeline that reads a Figma design, generates React and Angular (TypeScript) interfaces, and recommends refactors so the code stays close to existing product patterns.",
      r: "Measured a **35%** cut in UI build time. The tool is part of an internal LLM suite that saves developers **6 hours every week**.",
    },
    tech: ["React", "Angular", "TypeScript", "LLMs", "Figma"],
  },
  {
    title: "Agentic VS Code Defect-Resolution Extension",
    badge: "internal",
    star: {
      s: "Developers lost time switching between JIRA tickets and the codebase to track down defects.",
      t: "Shorten the path from bug report to fix, right inside the editor.",
      a: "Built a VS Code extension where LangChain-based LLM agents read JIRA tickets, localize the faulty code, and propose fixes in place.",
      r: "Shipped an in-editor flow: a LangChain agent reads the JIRA ticket, points at the likely code, and proposes a fix without leaving VS Code.",
    },
    tech: ["TypeScript", "VS Code Extension API", "LLMs", "LangChain"],
  },
  {
    title: "Microservice Communication with RabbitMQ",
    badge: "open-source",
    star: {
      s: "Services in a distributed system needed to communicate reliably without being tightly coupled.",
      t: "Design asynchronous communication between single-responsibility microservices.",
      a: "Architected queue-based messaging with RabbitMQ using established design patterns, with each service owning one responsibility.",
      r: "Sustains **thousands of messages per second** with loosely coupled services.",
    },
    tech: ["Microservices", "RabbitMQ", "Message Queues", "Design Patterns"],
    github:
      "https://github.com/Akash101201/UE20CS351-Cloud-Computing-Project-2-Microservice-communication-with-RabbitMQ",
  },
  {
    title: "3D Environment Generation from 2D Floor Plans",
    badge: "open-source",
    star: {
      s: "2D floor plans are hard for most people to picture as real, livable spaces.",
      t: "Let users explore and restyle their floor plan in 3D, in the browser.",
      a: "Built an interactive web app that converts a 2D floor plan into a mutable 3D model and applies architectural styles on demand.",
      r: "From one 2D plan, the browser builds a 3D model you can edit and restyle with architectural styles on demand.",
    },
    tech: ["JavaScript", "3D Rendering", "Web UI"],
    github: "https://github.com/Akash101201/RoomGPT",
  },
  {
    title: "Yet Another Kafka",
    badge: "on-request",
    star: {
      s: "Wanted to understand how distributed streaming platforms like Kafka work under the hood.",
      t: "Re-implement Kafka's core publish/subscribe streaming from scratch.",
      a: "Implemented the publish/subscribe core in Python using raw socket programming.",
      r: "A from-scratch Python pub/sub core over raw sockets, running **multiple concurrent producers and consumers**.",
    },
    tech: ["Python", "Socket Programming", "Distributed Systems"],
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "Software Engineer",
    company: "Zebra Technologies",
    period: "Jul 2024 - Present",
    current: true,
    bullets: [
      "Built responsive mobile and desktop web UIs in React and Angular (TypeScript) across **4+ B2B products**.",
      "Developed Node.js services and REST and GraphQL APIs backed by MongoDB and SQL data stores, delivering full-stack features end to end.",
      "Grew a shared UI library and Jest coverage, cutting production regressions by **40%**.",
      "Scaled backend throughput with asynchronous, queue-based microservices and automated builds via Git-based CI/CD and Docker on Google Cloud Platform.",
      "Built internal LLM tools that generate UI from Figma designs and auto-diagnose defects from JIRA tickets.",
      "Collaborated with product, design, and engineering in Agile/Scrum, averaging **20 pull requests a month**.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Zebra Technologies",
    period: "Jan 2024 - Jun 2024",
    bullets: [
      "Built full-stack LLM-powered web apps and chatbots with React and Node.js for routine customer support.",
      "Integrated REST APIs and data layers to retrieve, process, and present data, cutting manual data-retrieval effort by **45%**.",
      "Delivered analytics over Google BigQuery (**10M+ rows**) with Python, surfacing results through user-facing interfaces.",
      "Built tooling that auto-generated unit tests and refactoring suggestions for the team.",
      "Promoted to full-time Software Engineer.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "PES University",
    period: "2020 - 2024",
    detail: "Minor in Machine Learning & Data Science · CGPA 8.46/10",
  },
];

export const certifications = [
  "Flutter and Dart for App Development (Udemy)",
  "SwiftUI Masterclass: iOS Development (Udemy)",
  "Java Programming (NPTEL)",
];

export const skillGroups = [
  {
    icon: "braces",
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML5", "CSS3", "SCSS/Sass"],
  },
  {
    icon: "monitor",
    title: "Front-End",
    skills: ["React", "Angular", "Responsive Design", "Web Performance", "Cross-Browser", "Figma"],
  },
  {
    icon: "server",
    title: "Backend & Architecture",
    skills: ["Node.js", "REST APIs", "GraphQL", "Microservices", "RabbitMQ", "Event-driven Messaging", "Design Patterns", "Socket Programming"],
  },
  {
    icon: "database",
    title: "Databases",
    skills: ["MongoDB", "MySQL", "SQL / Relational", "Google BigQuery", "Data Modeling"],
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    skills: ["Google Cloud Platform", "Docker", "Git", "CI/CD", "Agile/Scrum", "JIRA"],
  },
  {
    icon: "test",
    title: "Testing & Quality",
    skills: ["Jest", "Unit & Integration Testing", "QA", "Debugging", "Code Reviews"],
  },
  {
    icon: "bot",
    title: "AI / LLM",
    skills: ["LLMs", "LangChain", "LlamaIndex", "RAG", "Prompt Engineering"],
  },
];

export const spokenLanguages = ["English", "Hindi", "Kannada", "Tamil"];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
