"use client"
import { FaReact, FaServer, FaCloud, FaMobileAlt, FaChartBar, FaRocket } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";  
const services = [
  {
    icon: <FaReact className="text-3xl text-[#10B981]" />,
    title: "Frontend Development",
    description: "Modern, responsive UIs using React, Next.js, Tailwind CSS, and Bootstrap.",
    tech: "React, Next.js, Tailwind CSS, Bootstrap",
  },
  {
    icon: <FaServer className="text-3xl text-[#10B981]" />,
    title: "Backend APIs",
    description: "Robust REST & GraphQL APIs with Node.js, Express, and Nest.js.",
    tech: "Node.js, Express, Nest.js",
  },
  {
    icon: <FaChartBar className="text-3xl text-[#10B981]" />,
    title: "SaaS & Dashboards",
    description: "Custom SaaS platforms, admin dashboards, and internal tools.",
    tech: "React, Next.js, Node.js",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-[#10B981]" />,
    title: "Mobile Apps",
    description: "Cross-platform mobile apps with React Native and Expo.",
    tech: "React Native, Expo",
  },
  {
    icon: <FaCloud className="text-3xl text-[#10B981]" />,
    title: "Cloud Deployment",
    description: "Seamless deployment & scaling on AWS, Vercel, and DigitalOcean.",
    tech: "AWS, Vercel, DigitalOcean",
  },
  {
    icon: <FaRocket className="text-3xl text-[#10B981]" />,
    title: "Product Launch",
    description: "End-to-end support from MVP to production launch.",
    tech: "Full-stack, DevOps",
  },
];

export default function Services() {
  useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false, 
        });
      }, []);
    
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-10 font-poppins text-center">
          Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              data-aos="fade-up"
              className="bg-[#F3F4F6] rounded-2xl shadow-md p-8 flex flex-col items-start gap-4 border-l-4 border-[#10B981] hover:scale-105 hover:shadow-xl transition-all duration-200 group"
            >
              <div className="mb-2">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-1 group-hover:text-[#10B981] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#374151] mb-2">{service.description}</p>
              <span className="text-sm text-[#1E3A8A] font-medium">{service.tech}</span>
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