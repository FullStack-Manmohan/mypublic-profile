"use client"
import { FaCheckCircle, FaDatabase, FaCloud, FaReact, FaNodeJs, FaTools } from "react-icons/fa";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";

const skills = [
  {
    icon: <FaReact className="text-[#10B981] text-2xl" />,
    label: "Frontend: React, Next.js, Tailwind CSS, Bootstrap",
  },
  {
    icon: <FaNodeJs className="text-[#10B981] text-2xl" />,
    label: "Backend: Node.js (Express, Nest.js)",
  },
  {
    icon: <FaTools className="text-[#10B981] text-2xl" />,
    label: "Integrations: Stripe, Twilio, Firebase, GraphQL",
  },
  {
    icon: <FaDatabase className="text-[#10B981] text-2xl" />,
    label: "Databases: MongoDB, PostgreSQL, Firebase Realtime DB",
  },
  {
    icon: <FaCloud className="text-[#10B981] text-2xl" />,
    label: "Deployment: Vercel, AWS, DigitalOcean",
  },
];


export default function Home() {
  return (
    <div className="bg-white font-sans min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col gap-24">
        <Hero />
         <section
              id="about"
              className="w-full bg-[#F3F4F6] py-20 px-6 flex justify-center gap-0"
            >
              <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 items-start">
                {/* Left: Bio */}
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4 font-poppins" data-aos="fade-up">
                    About Me
                  </h2>
                  <p className="text-[#111827] text-lg mb-6 font-inter">
                    Hi — I’m a full-stack developer with over 10 years of experience building clean, reliable, and scalable web apps. I work mostly with <b className="text-[#1E3A8A]">React, Next.js, and Node.js</b>, and I’ve helped startups and small teams turn ideas into full-featured platforms that are fast, secure, and easy to maintain.
                    <br /><br />
                    I don’t just write code — I think about the full picture. How the user will interact with the product. How the backend connects everything together. How the design translates into real performance. I like solving problems and building things that actually work.
                    <br /><br />
                    <b className="text-[#1E3A8A]">Here’s what I usually help clients with:</b>
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2" data-aos="fade-up" data-aos-delay="100">
                      <FaCheckCircle className="text-[#10B981] mt-1" />
                      <span>Building responsive UIs with React, Next.js, Tailwind CSS, or Bootstrap</span>
                    </li>
                    <li className="flex items-start gap-2" data-aos="fade-up" data-aos-delay="200">
                      <FaCheckCircle className="text-[#10B981] mt-1" />
                      <span>Setting up solid backend APIs using Node.js (Express or Nest.js)</span>
                    </li>
                    <li className="flex items-start gap-2"  data-aos="fade-up" data-aos-delay="200">
                      <FaCheckCircle className="text-[#10B981] mt-1" />
                      <span>Integrating third-party tools like Stripe, Twilio, Firebase, and GraphQL</span>
                    </li>
                    <li className="flex items-start gap-2" data-aos="fade-up" data-aos-delay="200">
                      <FaCheckCircle className="text-[#10B981] mt-1" />
                      <span>Developing admin dashboards, internal tools, and SaaS systems</span>
                    </li>
                    <li className="flex items-start gap-2" data-aos="fade-up" data-aos-delay="200">
                      <FaCheckCircle className="text-[#10B981] mt-1" />
                      <span>Deploying projects with Vercel, AWS, or DigitalOcean</span>
                    </li>
                    <li className="flex items-start gap-2" data-aos="fade-up" data-aos-delay="200">
                      <FaCheckCircle className="text-[#10B981] mt-1" />
                      <span>Working with databases like MongoDB, PostgreSQL, and Firebase Realtime DB</span>
                    </li>
                  </ul>
                  <p className="text-[#111827] text-base font-inter">
                    I work best with clients who want someone who can take ownership of the work, ask the right questions up front, and deliver without needing to be micromanaged. If that sounds like what you’re looking for, I’d be happy to talk more.
                  </p>
                </div>
                {/* Right: Highlight Card & Skills */}
                <div className="flex flex-col gap-8 flex-1 max-w-sm w-full" data-aos="fade-left" data-aos-duration="1000">
                  {/* Highlight Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border-l-8 border-[#10B981] mb-2 animate-fadeInUp">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-3xl font-bold text-[#1E3A8A]">10+</span>
                      <span className="text-[#111827] font-medium">years experience</span>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-3xl font-bold text-[#1E3A8A]">58</span>
                      <span className="text-[#111827] font-medium">completed jobs on upwork</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-bold text-[#1E3A8A]">100%</span>
                      <span className="text-[#111827] font-medium">job success</span>
                    </div>
                  </div>
                  {/* Skills Cards */}
                  <div className="grid grid-cols-1 gap-4">
                    {skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-[#E0F7EF] rounded-xl px-4 py-3 shadow-sm"
                      >
                        {skill.icon}
                        <span className="text-[#111827] font-medium">{skill.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Animation */}
              <style jsx>{`
                .animate-fadeInUp {
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
        <Services />
        <Projects />
        <Reviews />
        <Contact />
      </main>
    </div>
  );
}
