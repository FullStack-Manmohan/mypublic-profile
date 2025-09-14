"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaCloud,
  FaMobileAlt,
  FaTools,
  FaPaintBrush,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaReact className="text-3xl text-[#10B981]" />,
    title: "Frontend Development",
    description: "Building responsive, modern, and interactive user interfaces with clean code.",
    tech: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
  },
  {
    icon: <FaServer className="text-3xl text-[#10B981]" />,
    title: "Backend Development",
    description: "Designing secure, scalable, and high-performance server-side applications.",
    tech: ["Node.js", "Express.js", "Nest.js", "GraphQL", "REST APIs", "PHP", "Laravel"],
  },
  {
    icon: <FaDatabase className="text-3xl text-[#10B981]" />,
    title: "Databases",
    description: "Efficient data modeling, storage, and management with relational & NoSQL systems.",
    tech: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Firebase"],
  },
  {
    icon: <FaMobileAlt className="text-3xl text-[#10B981]" />,
    title: "Mobile Apps",
    description: "Creating cross-platform mobile apps with smooth performance and native feel.",
    tech: ["React Native", "Expo", "Flutter", "Android (Native)"],
  },
  {
    icon: <FaCloud className="text-3xl text-[#10B981]" />,
    title: "Cloud & DevOps",
    description: "Deploying and scaling apps with cloud platforms, CI/CD pipelines, and automation.",
    tech: ["AWS", "Vercel", "Netlify", "DigitalOcean", "Docker", "CI/CD", "Nginx"],
  },
  {
    icon: <FaTools className="text-3xl text-[#10B981]" />,
    title: "Tools & Testing",
    description: "Version control, API testing, and automated testing for quality assurance.",
    tech: ["Git", "GitHub", "GitLab", "Postman", "Jest", "Cypress", "Figma"],
  },
  {
    icon: <FaPaintBrush className="text-3xl text-[#10B981]" />,
    title: "UI/UX & Design",
    description: "Designing user-friendly interfaces with focus on usability and accessibility.",
    tech: ["Figma", "Adobe XD", "Wireframes", "Responsive Design", "Accessibility"],
  },
  {
    icon: <FaWordpress className="text-3xl text-[#10B981]" />,
    title: "CMS & eCommerce",
    description: "Custom websites and online stores with flexible CMS and eCommerce platforms.",
    tech: ["WordPress", "Shopify", "WooCommerce", "Strapi", "Sanity"],
  },
  {
    icon: <FaShopify className="text-3xl text-[#10B981]" />,
    title: "Business & Product",
    description: "Helping businesses launch products, manage projects, and deliver client value.",
    tech: ["Agile", "Scrum", "Project Management", "MVP Launch", "Client Communication"],
  },
];

export default function SkillsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <main className="bg-[#F3F4F6] max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-[#1E3A8A] mb-12 font-poppins text-center">
        Skills & Expertise
      </h1>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.title}
            data-aos="fade-up"
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start gap-4 border-l-4 border-[#10B981] hover:scale-105 hover:shadow-xl transition-all duration-200 group"
          >
            <div className="mb-2">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-[#1E3A8A] mb-1 group-hover:text-[#10B981] transition-colors">
              {skill.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">{skill.description}</p>
            <div className="flex flex-wrap gap-2">
              {skill.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#10B981]/10 text-[#10B981] text-xs font-medium px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Animation */}
      <style jsx>{`
        main {
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
