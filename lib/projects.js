/**
 * Single source for all projects. Aligned with live sites and user-provided tech stack.
 * Case study deep-dive pages kept only for: hia-llc, maui-registry (linked via caseStudySlug).
 * favicon: Google's favicon API for real site icons (fallback to image if needed).
 */
const faviconUrl = (url) => {
  try {
    const d = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${d.hostname}&sz=128`;
  } catch {
    return null;
  }
};

export const allProjects = [
  {
    name: "UpTecHunt",
    tagline: "Bid- & hassle-free global freelancing marketplace",
    image: "/images/uptechunt.png",
    favicon: faviconUrl("https://www.uptechunt.com/"),
    url: "https://www.uptechunt.com/",
    tech: ["Node.js", "Express.js", "React.js", "Next.js", "MongoDB", "Redis"],
    description: "Freelancing marketplace for businesses and freelancers. No bidding cost, no monthly membership fee, strict freelancer onboarding, 24/7 support. Client job posting, freelancer onboarding, proposals, and secure payments. Categories: Tech & Programmers, Design, Writing, Sales & Marketing, AI Engineers, and more. Full-stack delivery.",
  },
  {
    name: "Property Recruitment Partners",
    tagline: "Leading strata & property recruitment agency",
    image: "/images/logo.y.jpg",
    favicon: faviconUrl("https://propertyrecruitmentpartners.com.au"),
    url: "https://propertyrecruitmentpartners.com.au",
    tech: ["Node.js", "Express.js", "Next.js", "MongoDB", "Redis"],
    description: "Enabling prosperity and professional growth. Full-stack web platform for property and strata recruitment in Australia.",
  },
  {
    name: "TempElite",
    tagline: "Connecting top health professionals with medical facilities",
    image: "/images/temp-elite.png",
    favicon: faviconUrl("https://tempelite.com"),
    url: "https://tempelite.com",
    tech: ["Node.js", "Express.js", "React.js", "Next.js", "MongoDB", "Redis"],
    description: "Exclusive network of vetted RNs and MRI techs. Marketplace for medical staffing: streamlined registration, verification, job postings, and placement. Role-based access, data security, and quality assurance for healthcare facilities and professionals.",
  },
  {
    name: "MauiRegistry.com",
    tagline: "Public health registry website & data platform",
    image: "/images/logo.y.jpg",
    favicon: faviconUrl("https://www.mauiregistry.com"),
    url: "https://www.mauiregistry.com",
    caseStudySlug: "maui-registry",
    tech: ["React", "Next.js", "Node.js", "Secure workflows", "Reporting"],
    description: "Public website and supporting data platform for a public health registry program. Secure, production-grade workflows for participant services, reporting, and operational visibility—privacy-first access controls, audit-friendly processes. Built for RCUH (UHERO / University of Hawai'i).",
  },
  {
    name: "HIA.LLC — Maui Wildfire Survivor Study",
    tagline: "Medical research dashboard",
    image: "/images/temp-elite.png",
    favicon: faviconUrl("https://www.hia.llc"),
    url: "https://www.hia.llc",
    caseStudySlug: "hia-llc",
    tech: ["React", "Next.js", "Node.js", "HIPAA-aware", "Role-based access"],
    description: "Secure, production-grade dashboard for a medical and public health research study supporting Maui wildfire survivors. Privacy-first workflows for staff operations, participant services, and reporting—role-based access, audit-friendly processes. Built for RCUH.",
  },
  {
    name: "NogaTech IT Solutions",
    tagline: "Honolulu web design + development | Hawaiʻi",
    image: "/images/logo.y.jpg",
    favicon: faviconUrl("https://www.nogatechsolutions.com"),
    url: "https://www.nogatechsolutions.com",
    tech: ["React", "Next.js", "Node.js", "Local SEO", "Lead tracking", "Core Web Vitals"],
    description: "Websites and apps that rank on Google and convert—for Oʻahu, Maui, Kauaʻi & Hawaiʻi Island. Custom web apps & dashboards, full-stack development, business websites, local SEO & GMB, lead attribution. Serving government, healthcare, legal, hospitality, and more. Honolulu-based since 2018.",
  },
  {
    name: "Web Guru Hawaii",
    tagline: "Website design & development for Hawaii businesses",
    image: "/images/logo.y.jpg",
    favicon: faviconUrl("https://www.webguruhawaii.com"),
    url: "https://www.webguruhawaii.com",
    tech: ["Website design", "Development", "Local SEO", "Honolulu"],
    description: "Part of NogaTech. Custom website design and development for Honolulu, Oʻahu, Maui, Kauaʻi, and Hawaiʻi Island. Free quote and Hawaii-focused delivery.",
  },
  {
    name: "Hawaii SEO Marketing",
    tagline: "SEO and digital marketing for Hawaiʻi",
    image: "/images/logo.y.jpg",
    favicon: faviconUrl("https://www.hawaiiseomarketing.com"),
    url: "https://www.hawaiiseomarketing.com",
    tech: ["SEO", "Digital marketing", "Local SEO", "Hawaii"],
    description: "NogaTech brand. SEO and digital marketing services for businesses across the Hawaiian Islands.",
  },
  {
    name: "Hawaii Tech Solutions",
    tagline: "Tech solutions for Hawaiʻi businesses",
    image: "/images/logo.y.jpg",
    favicon: faviconUrl("https://www.hawaiitechsolutions.com"),
    url: "https://www.hawaiitechsolutions.com",
    tech: ["Tech solutions", "Web", "Software", "Hawaii"],
    description: "NogaTech brand. Technology and software solutions for Honolulu and Hawaiʻi Island businesses.",
  },
  {
    name: "Digital Marketing Guru Hawaii",
    tagline: "Digital marketing for Hawaiʻi",
    image: "/images/logo.y.jpg",
    favicon: faviconUrl("https://www.digitalmarketingguruhawaii.com"),
    url: "https://www.digitalmarketingguruhawaii.com",
    tech: ["Digital marketing", "SEO", "Hawaii"],
    description: "NogaTech brand. Digital marketing and growth services for Hawaii-based businesses.",
  },
];

/** For home page: featured subset (first 6) or use all. */
export const featuredProjects = allProjects.slice(0, 6);

/** Favicon rotation: default icon + project favicons (for browser tab). */
export const faviconRotationUrls = [
  "/favicon.png",
  ...featuredProjects.map((p) => p.favicon).filter(Boolean),
];

export const githubUrl = "https://github.com/FullStack-Manmohan";
