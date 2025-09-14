"use client";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const allProjects = [
   {
    name: "BunkMate",
    image: "/images/bunk.png",
    tech: ["React", "Node.js", "MongoDB", 'Express.js',],
    description: "A smart attendance and bunk management app for students, featuring dashboards, real-time tracking, and notification alerts.",
    caseStudy: "https://github.com/FullStack-Manmohan/Bunk-Mate",
  },
  {
    name: "AnyLiMaster",
    image: "/images/anyli.png",
    tech: ["Next.js", "Node.js",'Express.js','EJS', "PostgreSQL", "Tailwind CSS"],
    description: "A productivity and workflow management platform with task boards, progress tracking, and collaboration tools.",
    caseStudy: "https://github.com/FullStack-Manmohan/AnyLi-Master",
  },
  {
    name: "NoteHunt",
    image: "/images/note-hunt.png",
    tech: ["React",'Express.js', "Firebase", "Tailwind CSS","Node.js"],
    description: "A modern note-taking app designed with a clean UI, offering quick search, categorization, and cloud sync features.",
    caseStudy: "https://github.com/FullStack-Manmohan/Note-Hunt",
  },
  {
    name: "AlohaCoin",
    image: "/images/aloha-coin.png",
    tech: ["Solidity", "Typescript", "Web3.js", "javaScript"],
    description: "A blockchain-based cryptocurrency project built with smart contracts, ensuring secure transactions and decentralized finance features.",
    caseStudy: "https://github.com/FullStack-Manmohan/AlohaCoin-smart-contract",
  },
   {
    name: "UpTecHunt",
    image: "/images/uptechunt.png",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    description: "A freelancing platform where clients can post projects and hire skilled freelancers across multiple categories with secure payments and bidding system.",
    caseStudy: "https://www.uptechunt.com/",
  },
  {
    name: "Temp Elite",
    image: "/images/temp-elite.png",
    tech: ["React", "Express.js", "PostgreSQL", "REST API"],
    description: "A hospital staff help platform designed to connect medical professionals with temporary jobs, featuring role-based access and real-time job listings.",
    caseStudy: "https://tempelite.com/",
  },
  {
    name: "Acme Real Fantasy",
    image: "/images/acme.png",
    tech: ["Vue.js", "Laravel", "MySQL", "WebSockets"],
    description: "A fantasy sports platform enabling users to create teams, track real-time scores, and compete in fantasy football leagues with dynamic leaderboards.",
    caseStudy: "https://acmerealfantasyfootball.com/",
  },
  {
    name: "Open Wedding",
    image: "/images/open_wedding.png",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    description: "A wedding planner website that helps couples organize their big day with event scheduling, photo galleries, and RSVP management features.",
    caseStudy: "https://www.zakiyamawedding.com/",
  },
  {
    name: "Maharani Cafe",
    image: "/images/maharani.png",
    tech: ["WordPress", "PHP", "MySQL", "Responsive Design"],
    description: "An Indian restaurant website highlighting Cafe Maharani’s menu, ambiance, and story, with options for reservations and online food ordering.",
    caseStudy: "https://www.cafemaharani.com/",
  },
  {
    name: "Prime Lab",
    image: "/images/primelab.png",
    tech: ["React", "Python", "TensorFlow", "AWS"],
    description: "An AI platform focused on protecting and licensing data, improving model integrity, and preventing malicious training in AI applications.",
    caseStudy: "https://primelab.io/",
  },
];

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

export default function ProjectsPage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, allProjects.length));
  };

   useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: false, 
      });
    }, []);
  
  return (
    <>
      <main className=" max-w-7xl mx-auto py-16 px-6 bg-[#F3F4F6] min-h-screen">
        <h1 className="text-4xl font-bold text-[#1E3A8A] mb-10 font-poppins text-center">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.slice(0, visibleCount).map((project, idx) => (
            <div
              key={project.name}
              data-aos="fade-up"
              className="bg-[#F3F4F6] rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-200 flex flex-col"
            >
              <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">{project.name}</h3>
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
                <a
                  href={project.caseStudy}
                  className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white  px-4 py-2 rounded-lg shadow hover:scale-105 hover:shadow-lg transition-transform duration-200 w-max"
                >
                  View<FaExternalLinkAlt className="text-sm text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < allProjects.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleLoadMore}
              className="bg-[#1E3A8A] text-[#F3F4F6] font-semibold px-8 py-3 rounded-lg shadow hover:scale-105 hover:shadow-lg transition-transform duration-200"
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </>
  );
}