import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'TicketDest — Support Ticket Management System',
    shortDescription: 'Full-stack ticketing platform with RBAC + dashboards',
    description:
      'Built a full-stack ticketing platform to manage support workflows end-to-end: ticket creation, assignment, status tracking, and resolution with role-based access for Admin/Agent/User.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'JWT'],
    features: [
      'Role-based access control (Admin / Agent / User)',
      'Ticket lifecycle management: create, assign, update status, resolve',
      'Responsive dashboards for agents and admins to monitor queues and performance',
      'REST APIs for ticket workflows with JWT authentication',
      'Production-ready deployment using Docker and CI/CD pipelines',
    ],
    challenges: [
      'Designing a clean data model for ticket lifecycle and role permissions',
      'Keeping UI state consistent across multiple ticket status transitions',
      'Balancing performance and usability for dashboard views',
    ],
  },
  {
    id: 'project-2',
    title: 'AttriSense — AI-Driven Attrition Analytics Tool',
    shortDescription: 'ML-powered analytics to predict attrition risk factors',
    description:
      'Developed an ML-powered analytics application to identify employee attrition risk factors and deliver predictive insights to help HR teams take preventive action.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Data Visualization'],
    features: [
      'Data preprocessing and feature engineering',
      'Predictive modeling with evaluation and iteration',
      'Visual insights to explain attrition drivers',
      'Standalone deliverable for HR decision-making workflows',
    ],
    challenges: [
      'Improving model quality with limited/imbalanced datasets',
      'Choosing explainable features and clear visualizations for stakeholders',
      'Translating predictions into actionable insights',
    ],
  },
  {
    id: 'project-3',
    title: 'TimeSnap — Automated Timesheet Generator',
    shortDescription: 'Next.js tool to generate working-day timesheets',
    description:
      'Created a lightweight productivity tool to automatically generate timesheets based on working days, with clean UI flows for date selection and report generation.',
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    features: [
      'Dynamic date handling for working-day calculations',
      'Simple UI workflows for selecting ranges and generating outputs',
      'Modular components and reusable frontend logic',
      'Clean UX focused on reducing manual time-tracking effort',
    ],
    challenges: [
      'Handling edge cases across months, holidays, and varying work-week patterns',
      'Keeping logic reusable and UI flows frictionless',
      'Ensuring correctness for date computations across locales/timezones',
    ],
  },
]
