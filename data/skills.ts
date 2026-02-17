import type { Skill, SkillCategory } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Javascript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "AdonisJS", category: "Backend" },
  { name: "REST API Design", category: "Backend" },
  { name: "JWT Auth", category: "Backend" },
  { name: "Role-Based Access Control", category: "Backend" },

  // Databases
  { name: "PostgreSQL", category: "Databases" },
  { name: "Prisma ORM", category: "Databases" },
  { name: "Schema Design", category: "Databases" },
  { name: "Indexing", category: "Databases" },
  { name: "Pagination", category: "Databases" },
  { name: "Query Optimization", category: "Databases" },

  // DevOps
  { name: "Docker", category: "DevOps" },
  { name: "AWS S3", category: "DevOps" },
  { name: "AWS Elastic Beanstalk", category: "DevOps" },
  { name: "GitLab CI/CD", category: "DevOps" },
  { name: "Deployments & Releases", category: "DevOps" },
];

export const skillsByCategory = skills.reduce(
  (acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  },
  {} as Record<SkillCategory, string[]>,
);
