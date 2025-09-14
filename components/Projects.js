"use client";
import { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const allProjects = [
  {
    name: "AlohaCoin",
    image: "/images/aloha-coin.png",
    tech: ["Solidity", "Typescript", "Web3.js", "javaScript"],
    description:
      "A blockchain-based cryptocurrency project built with smart contracts, ensuring secure transactions and decentralized finance features.",
    caseStudy: "https://github.com/FullStack-Manmohan/AlohaCoin-smart-contract",
  },
  {
    name: "NoteHunt",
    image: "/images/note-hunt.png",
    tech: ["React", "JavaScript", "SCSS"],
    description:
      "A modern note-taking app designed with a clean UI, offering quick search, categorization, and cloud sync features.",
    caseStudy: "https://github.com/FullStack-Manmohan/Note-Hunt",
  },
  {
    name: "UpTecHunt",
    image: "/images/uptechunt.png",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    description:
      "A freelancing platform where clients can post projects and hire skilled freelancers across multiple categories with secure payments and bidding system.",
    caseStudy: "https://www.uptechunt.com/",
  },
];

export default function Projects() {
   useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: false, 
      });
    }, []);
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-10 font-poppins text-center">
          Top Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <div
              key={project.name}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              className="bg-[#F3F4F6] rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-200 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-[#111827] mb-2">
                  {project.name}
                </h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#10B981]/10 text-[#10B981] text-xs font-medium px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-[#374151] mb-4 flex-1">{project.description}</p>

                {/* Case Study Link */}
                <a
                  href={project.caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-[#1E3A8A] font-medium hover:text-[#10B981] transition-colors duration-200"
                >
                  View  <FaExternalLinkAlt className="inline" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        section {
          animation: fadeInUp 1.1s cubic-bezier(0.23, 1, 0.32, 1);
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
    </section>
  );
}
