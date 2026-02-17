import type { Project } from "@/types";

// Add real repo URLs to github; add live demo URL to live when available.
// For images: put files in public/projects/ and set image: '/projects/your-image.png'
export const projects: Project[] = [
  {
    id: "project-1",
    title: "TicketDest — Support Ticket Management System",
    shortDescription: "Full-stack ticketing platform with RBAC + dashboards",
    description:
      "Built a full-stack ticketing platform to manage support workflows end-to-end: ticket creation, assignment, status tracking, and resolution with role-based access for Admin/Agent/User.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "JWT",
    ],
    features: [
      "Role-based access control (Admin / Agent / User)",
      "Ticket lifecycle management: create, assign, update status, resolve",
      "Responsive dashboards for agents and admins to monitor queues and performance",
      "REST APIs for ticket workflows with JWT authentication",
      "Production-ready deployment using Docker and CI/CD pipelines",
    ],
    challenges: [
      "Designing a clean data model for ticket lifecycle and role permissions",
      "Keeping UI state consistent across multiple ticket status transitions",
      "Balancing performance and usability for dashboard views",
    ],
    github: "https://github.com/VarshaRT07/ticketdest", // Replace with your actual repo URL
    live: "https://ticketdest-demo.vercel.app", // Replace with your demo URL if available
  },
  {
    id: "project-2",
    title: "AttriSense — AI-Driven Attrition Analytics Tool",
    shortDescription: "ML-powered analytics to predict attrition risk factors",
    description:
      "Developed an ML-powered analytics application to identify employee attrition risk factors and deliver predictive insights to help HR teams take preventive action.",
    stack: ["Python", "Pandas", "Scikit-learn", "Data Visualization"],
    features: [
      "Data preprocessing and feature engineering",
      "Predictive modeling with evaluation and iteration",
      "Visual insights to explain attrition drivers",
      "Standalone deliverable for HR decision-making workflows",
    ],
    challenges: [
      "Improving model quality with limited/imbalanced datasets",
      "Choosing explainable features and clear visualizations for stakeholders",
      "Translating predictions into actionable insights",
    ],
    github: "https://github.com/VarshaRT07/AttriSense", // Replace with your actual repo URL
  },
  {
    id: "project-3",
    title: "TimeSnap — Automated Timesheet Generator",
    shortDescription: "Next.js tool to generate working-day timesheets",
    description:
      "Created a lightweight productivity tool to automatically generate timesheets based on working days, with clean UI flows for date selection and report generation.",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    features: [
      "Dynamic date handling for working-day calculations",
      "Simple UI workflows for selecting ranges and generating outputs",
      "Modular components and reusable frontend logic",
      "Clean UX focused on reducing manual time-tracking effort",
    ],
    challenges: [
      "Handling edge cases across months, holidays, and varying work-week patterns",
      "Keeping logic reusable and UI flows frictionless",
      "Ensuring correctness for date computations across locales/timezones",
    ],
    github: "https://github.com/VarshaRT07/TimeSnap", // Replace with your actual repo URL
    live: "https://timesheet-snap.vercel.app/", // Replace with your demo URL if available
  },
  {
    id: "project-4",
    title: "ResumeAnalyzer — ATS Score & Review Tool",
    shortDescription:
      "AI-powered resume analyzer with ATS scoring and personalized feedback",
    description:
      "Built an intelligent resume analysis tool that evaluates uploaded resumes against job descriptions, company requirements, and tech stack specifications. Leverages Puter AI to provide comprehensive ATS scores, detailed reviews, and actionable recommendations to help job seekers optimize their resumes for better application success rates.",
    stack: [
      "React",
      "React Router",
      "Puter AI",
      "File Upload",
      "PDF Parsing",
      "ATS Analysis",
    ],
    features: [
      "Resume upload and parsing (PDF/DOCX support)",
      "ATS score calculation based on job description matching",
      "Personalized review and feedback generation using Puter AI",
      "Company name and tech stack analysis for relevance scoring",
      "Detailed breakdown of resume strengths and improvement areas",
      "Job description input for targeted resume optimization",
      "Responsive UI with clear score visualization and recommendations",
    ],
    challenges: [
      "Accurately parsing and extracting text from various resume formats",
      "Implementing ATS scoring algorithm that matches industry standards",
      "Integrating Puter AI API for intelligent review generation",
      "Matching resume content against job descriptions and tech stack requirements",
      "Handling large file uploads and processing efficiently",
      "Providing actionable feedback that helps users improve their resumes",
    ],
    github: "https://github.com/VarshaRT07/resume-analyzer",
    live: "https://resume-analyzer-gray-kappa.vercel.app/",
  },
];
