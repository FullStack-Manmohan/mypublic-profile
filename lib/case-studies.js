/**
 * Detailed case studies — end-to-end delivery: design, Figma, prototype, frontend, backend, hosting.
 * Aligned with LinkedIn profile and public projects: hia.llc, mauiregistry.com
 */

export const caseStudies = [
  {
    slug: "hia-llc",
    title: "HIA.LLC — Medical Research Dashboard",
    subtitle: "Maui Wildfire Survivor Study",
    tagline: "Secure, production-grade dashboard for medical and public health research",
    liveUrl: "https://www.hia.llc",
    client: "RCUH (Research Corporation of the University of Hawai'i)",
    context: "Medical / public health research study supporting Maui wildfire survivors.",
    role: "Sole full-stack engineer — design, prototype, frontend, backend, hosting, and ongoing maintenance.",
    image: "/images/temp-elite.png",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "Role-based access", "Audit logs", "HIPAA-aware workflows", "Cloud hosting"],
    overview: "Built and maintained a secure, production-grade dashboard supporting a medical and public health research study for Maui wildfire survivors. The platform enables staff operations, participant services, and reporting with privacy-first workflows, role-based access controls, and audit-friendly processes designed for real-world, day-to-day use.",
    challenge: "The program needed a single, reliable system where researchers and program staff could manage participants, track consent and surveys, run reports, and operate with clear accountability—without compromising participant privacy or regulatory expectations. Requirements included strict access control, audit trails, and workflows that could evolve with the study.",
    phases: [
      {
        title: "Design & discovery",
        description: "Worked with researchers and program stakeholders to define user flows, data needs, and compliance boundaries. Created wireframes and high-fidelity mockups in Figma for staff dashboards, participant-facing flows, and reporting views so the team could validate workflows before development.",
      },
      {
        title: "Prototype & validation",
        description: "Built an interactive prototype to validate navigation, permissions, and key screens with stakeholders. Iterated on information architecture and role-based views (admin, staff, limited views) so the final build matched operational reality.",
      },
      {
        title: "Frontend",
        description: "Implemented the dashboard and participant-facing UI with React and Next.js: responsive layouts, accessible forms, clear data tables, and consistent patterns for filters, exports, and status indicators. State management and API integration were designed for reliability and easy maintenance.",
      },
      {
        title: "Backend & data",
        description: "Designed and implemented the API and database layer (Node.js, PostgreSQL): secure authentication, role-based authorization, audit logging for sensitive actions, and structured data models for participants, consent, and surveys. Ensured reporting and exports stayed performant as data grew.",
      },
      {
        title: "Security & compliance",
        description: "Applied privacy-first and audit-friendly practices throughout: least-privilege access, immutable audit trails for key operations, secure session handling, and workflows that support compliance review. Worked within HIPAA-aware constraints and program-specific policies.",
      },
      {
        title: "Hosting & deployment",
        description: "Deployed the application and database to a cloud environment with HTTPS, environment-based configuration, and automated backups. Set up monitoring and maintenance procedures so the system runs reliably for daily operations.",
      },
    ],
    outcome: "The dashboard is in production and used by program staff and researchers for participant management, reporting, and operational visibility. Delivered end-to-end from design and Figma through frontend, backend, and cloud hosting, with close collaboration to iterate quickly and ship safely.",
  },
  {
    slug: "maui-registry",
    title: "MauiRegistry.com",
    subtitle: "Public Health Registry Website & Data Platform",
    tagline: "Public website and supporting data platform for a public health registry program",
    liveUrl: "https://www.mauiregistry.com",
    client: "RCUH (Research Corporation of the University of Hawai'i)",
    context: "Public health registry program with a public-facing site and an internal operations platform.",
    role: "Sole full-stack engineer — design, Figma, prototype, frontend, backend, hosting, and ongoing maintenance.",
    image: "/images/logo.y.jpg",
    tech: ["React", "Next.js", "Node.js", "Database design", "Secure workflows", "Reporting", "Cloud hosting"],
    overview: "Built and maintained the public website and supporting data platform for a public health registry program. Delivered secure, production-grade web workflows for participant services, reporting, and operational visibility—designed with privacy-first access controls, audit-friendly processes, and reliability for real-world use.",
    challenge: "The program needed (1) a clear, trustworthy public website for the community to learn about and engage with the registry, and (2) a secure internal platform for staff to manage participants, consent, and reporting. Both had to feel cohesive, meet accessibility and branding expectations, and support compliance and audit needs.",
    phases: [
      {
        title: "Design & UX",
        description: "Defined site structure and user journeys with stakeholders. Created wireframes and high-fidelity designs in Figma for the public site (landing, information, sign-up/consent flows) and for the internal dashboard (participant list, reporting, admin). Ensured a consistent, accessible visual language across public and staff-facing areas.",
      },
      {
        title: "Prototype",
        description: "Built clickable prototypes in Figma and/or early Next.js screens to validate flows with the team—especially sign-up and consent steps, and staff workflows. Refined copy and layout based on feedback before locking the build.",
      },
      {
        title: "Frontend",
        description: "Implemented the public site and dashboard with React and Next.js: responsive, accessible pages, forms with validation and clear feedback, and data tables and filters for staff. Integrated with the backend API for auth, participant data, and reporting.",
      },
      {
        title: "Backend & database",
        description: "Designed the data model and API (Node.js, database) for participants, consent, and program-specific entities. Implemented secure authentication, role-based access, and audit-friendly logging. Built reporting and export capabilities that perform well at scale.",
      },
      {
        title: "Security & auditability",
        description: "Applied privacy-first design and audit-friendly processes: restricted access by role, audit trails for sensitive actions, and secure handling of participant data. Ensured the system could support compliance review and operational transparency.",
      },
      {
        title: "Hosting & launch",
        description: "Deployed the public site and application to a cloud hosting environment with HTTPS, environment config, and backups. Set up monitoring and maintenance so the platform runs reliably for both the public and internal users.",
      },
    ],
    outcome: "MauiRegistry.com is live as the public face of the registry, with a secure backend platform for staff operations and reporting. Delivered end-to-end from design and Figma through prototype, frontend, backend, and cloud hosting, with ongoing iteration alongside researchers and program teams.",
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((cs) => cs.slug === slug) ?? null;
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((cs) => cs.slug);
}
