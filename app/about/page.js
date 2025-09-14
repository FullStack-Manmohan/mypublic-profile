"use client";
import { useState } from "react";
import { FaCheckCircle, FaAward, FaUserTie, FaLightbulb } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const timeline = [
	{
		year: "2025 - Present",
		title: "Founder, UpTecHunt",
		desc: "Founded UpTecHunt, leading web and mobile app development projects for global clients. Focused on innovation, team growth, and delivering scalable solutions.",
		type: "work",
	},
	{
		year: "2018 - Present",
		title: "Full Stack Engineer, NogaTech IT Solutions",
		desc: "Project-to-project web and mobile app development using Laravel, PHP, React, Vue, Next.js, Golang, Flutter, React Native, Node.js, MongoDB, MySQL.",
		type: "work",
	},
	{
		year: "2012 - Present",
		title: "Full Stack Software Developer, Upwork",
		desc: "Freelance developer for 13+ years, delivering projects in React, Vue, Next.js, Nuxt.js, Node.js, Flutter, React Native, WordPress, Shopify, Laravel, and more. Also skilled in project management, wireframes, Figma, Adobe XD, and digital marketing.",
		type: "work",
	},
	{
		year: "2021 - 2022",
		title: "Team Lead Manager, Near Inc",
		desc: "Managed a team of 40+ engineers for Prime Lab.io (funded by Near Protocol). Launched NFT Maker App (2M+ users). Led frontend teams in React Native, Android, and React.js.",
		type: "work",
	},
	{
		year: "2009 - 2013",
		title: "Bachelor of Computer Applications, Software Engineering",
		desc: "Arizona State University — Focused on software engineering principles, application development, and full-stack technologies.",
		type: "education",
	},
	{
		year: "2004 - 2008",
		title: "Bachelor of Business Administration (BBA)",
		desc: "National Integrated Institute of Business Management & Technology (NIIBMT) — Specialized in business management, finance, and organizational leadership.",
		type: "education",
	},
];


const certifications = [
	{
		name: "AWS Certified Solutions Architect",
		year: "2022",
		org: "Amazon Web Services",
	},
	{
		name: "Google Cloud Professional",
		year: "2021",
		org: "Google",
	},
	{
		name: "Full-Stack Web Development",
		year: "2015",
		org: "Coursera",
	},
];

const values = [
	{
		icon: <FaLightbulb className="text-[#F59E0B] text-xl" />,
		title: "Innovation",
		desc: "Always seeking creative solutions and new technologies to deliver the best results.",
	},
	{
		icon: <FaCheckCircle className="text-[#10B981] text-xl" />,
		title: "Integrity",
		desc: "Honest, transparent communication and a commitment to quality in every project.",
	},
	{
		icon: <FaUserTie className="text-[#1E3A8A] text-xl" />,
		title: "Leadership",
		desc: "Empowering teams and clients to achieve their goals through mentorship and vision.",
	},
];

export default function AboutPage() {
	const [showModal, setShowModal] = useState(false);

	 useEffect(() => {
			AOS.init({
				duration: 1000, 
				once: false, 
			});
		}, []);
	

	return (
		<main className="max-w-7xl mx-auto py-16 px-6 bg-[#F3F4F6] min-h-screen">
			<div className="max-w-3xl mx-auto">
				<h1 className="text-4xl font-bold text-[#1E3A8A] mb-6 font-poppins" data-aos="fade-up">
				More About Me
				</h1>
				<div className="mb-8 text-lg font-inter text-[#111827]" data-aos="fade-up">
					<p> 
						Aloha! I’m Manmohan Yadav, a Full-stack Developer & Founder / CEO based in Honolulu,
						Hawaii. With over <b className="text-[#1E3A8A]">10 years of experience</b>, I specialize in
						building clean, scalable, and reliable web applications and SaaS
						platforms for startups and businesses worldwide.
					</p>
					<p className="mt-4" data-aos="fade-up">
						My approach is holistic: I focus on user experience, robust backend
						architecture, and seamless cloud deployment. I’ve led teams, architected
						platforms, and delivered 58+ successful projects with a{" "}
						<span className="text-[#10B981] font-semibold">
							100% job success rate
						</span>
						.
					</p>
				</div>

				{/* Timeline */}
				<div className="mb-12" data-aos="fade-up">
					<h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4 flex items-center gap-2 font-poppins">
						<FaUserTie className="text-[#10B981]" /> Career Timeline
					</h2>
					<ol className="border-l-4 border-[#10B981] pl-6 space-y-8">
						{timeline.map((item, idx) => (
							<li key={idx} className="relative ml-6">
								<span className="absolute -left-6 top-2 w-4 h-4 bg-[#10B981] rounded-full border-2 border-white"></span>
								<div className="mb-1 text-lg font-bold text-[#1E3A8A] font-poppins">
									{item.year} — {item.title}
								</div>
								<div className="text-[#374151] font-inter">{item.desc}</div>
							</li>
						))}
					</ol>
				</div>

				{/* Skills */}
				<div className="mb-12" data-aos="fade-up">
					<h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4 font-poppins">
						Key Skills
					</h2>
					<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<li className="flex items-center gap-2 font-inter">
							<FaCheckCircle className="text-[#10B981]" /> React, Next.js,
							Tailwind CSS, Bootstrap
						</li>
						<li className="flex items-center gap-2 font-inter">
							<FaCheckCircle className="text-[#10B981]" /> Node.js, Express,
							Nest.js
						</li>
						<li className="flex items-center gap-2 font-inter">
							<FaCheckCircle className="text-[#10B981]" /> Stripe, Twilio,
							Firebase, GraphQL
						</li>
						<li className="flex items-center gap-2 font-inter">
							<FaCheckCircle className="text-[#10B981]" /> MongoDB,
							PostgreSQL, Firebase Realtime DB
						</li>
						<li className="flex items-center gap-2 font-inter">
							<FaCheckCircle className="text-[#10B981]" /> Vercel, AWS,
							DigitalOcean
						</li>
						<li className="flex items-center gap-2 font-inter">
							<FaCheckCircle className="text-[#10B981]" /> Team Leadership &
							Project Management
						</li>
					</ul>
				</div>

				{/* Values Section */}
				<div className="mb-12">
					<h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4 font-poppins flex items-center gap-2">
						<FaLightbulb className="text-[#1E3A8A]" /> My Values
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
						{values.map((val, idx) => (
							<div
							data-aos="fade-up"
								key={idx}
								className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
							>
								{val.icon}
								<div className="font-bold text-[#1E3A8A] mt-2 mb-1 font-poppins">
									{val.title}
								</div>
								<div className="text-[#374151] text-center font-inter">
									{val.desc}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Certifications Modal Trigger */}
				<div className="mb-12">
					<button
						onClick={() => setShowModal(true)}
						className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-semibold px-5 py-2 rounded-lg shadow hover:scale-105 hover:shadow-lg transition-transform font-inter"
					>
						<FaAward className="text-white" /> View Certifications
					</button>
				</div>

				{/* Modal */}
				{showModal && (
					<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
						<div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-lg relative animate-fadeInUp">
							<button
								className="absolute top-3 right-4 text-2xl text-[#1E3A8A] hover:text-[#10B981] font-bold"
								onClick={() => setShowModal(false)}
								aria-label="Close"
							>
								&times;
							</button>
							<h3 className="text-xl font-bold text-[#1E3A8A] mb-4 flex items-center gap-2 font-poppins">
								<FaAward className="text-[#10B981]" /> Certifications
							</h3>
							<ul className="space-y-3">
								{certifications.map((cert, idx) => (
									<li
										key={idx}
										className="border-l-4 border-[#10B981] pl-4 font-inter"
									>
										<div className="font-semibold text-[#1E3A8A]">
											{cert.name}
										</div>
										<div className="text-sm text-[#374151]">
											{cert.org} &mdash; {cert.year}
										</div>
									</li>
								))}
							</ul>
						</div>
						<style jsx>{`
							.animate-fadeInUp {
								animation: fadeInUp 0.5s cubic-bezier(0.23, 1, 0.32, 1);
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
					</div>
				)}
			</div>
		</main>
	);
}