"use client";

import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AOS from "aos";
import "aos/dist/aos.css";

const reviews = [
  {
    rating: 5,
    text: `Right from the start, Manmohan showcased an impressive mastery of both front-end and back-end technologies, seamlessly integrating all components to create a cohesive and robust application. His in-depth knowledge and technical proficiency were evident in every aspect of the project, from designing intuitive user interfaces to implementing complex server-side logic. I highly recommend Manmohan for any future projects and look forward to working with him again.`,
    client: "Full Stack Engineer in Hawaii",
    company: "Freelance Collaboration",
  },
  {
    rating: 5,
    text: `Manmohan is an experienced Full Stack Developer, he helped me out on my urgent task. Highly recommended for any Web Development project.`,
    client: "Website w/app Client",
    company: "Independent Project",
  },
  {
    rating: 5,
    text: `Couldn't have asked for a better experience. Everything was done exactly as asked, the project looked amazing, and any changes were handled promptly. I will definitely return for future projects.`,
    client: "Custom Website Development Client",
    company: "Tech Startup (U.S. Based)",
  },
  {
    rating: 5,
    text: `Manmohan has excellent knowledge as a Full Stack Developer and I was happy with the outcome of this short task. Highly recommended for any Websites or Mobile App projects.`,
    client: "Client for SaaS Project Consultation",
    company: "SaaS Project",
  },
  {
    rating: 5,
    text: `Manmohan Yadav is an exceptional full-stack freelancer. His expertise in software development is truly impressive, and his attention to detail sets him apart. Working with him has been a delightful experience. I will definitely hire him again for future projects.`,
    client: "Client for SaaS Consultation",
    company: "Independent Consultation",
  },
  {
    rating: 5,
    text: `Manmohan is amazing, I am very happy to have come across him. His skills and experience are unmatched, and I believe he is worth every cent. His work ethic, communication, and skills are excellent. I would recommend him to any business that wants the best outcome for their project. Absolutely a legend!`,
    client: "Custom Website Development Client",
    company: "Startup Founder",
  },
  {
    rating: 4.1,
    text: `Manmohan was always very friendly and approachable. His positive attitude and willingness to help out are really positive attributes. His prompt availability for the project was greatly appreciated. He has very good communication skills and consistently responded quickly to our inquiries.`,
    client: "Client for Paywall Implementation",
    company: "Tech Company",
  },
  {
    rating: 5,
    text: `It was a last-minute request but Manmohan was eager to help me with this late-night web coding project. He figured out the issue with my animation and accordion quickly and effectively. I would definitely hire him again.`,
    client: "Client for Web Animation Fix",
    company: "Small Business Website",
  },
  {
    rating: 5,
    text: `I would recommend Mohan for any project as he has a personal approach that was very much appreciated throughout my project. His team is very determined to provide their service to achieve the needs of the client.`,
    client: "Fantasy Football Platform Client",
    company: "Sports Startup",
  },
  {
    rating: 5,
    text: `Manmohan was very attentive throughout and very willing to handle several revisions and updates. The project became complex due to mathematical calculations, but he stayed consistent and delivered.`,
    client: "Mortgage Calculator Client",
    company: "Real Estate Project",
  },
  {
    rating: 5,
    text: `Manmohan was awesome to work with! Our website was down and he fixed it immediately. Super reliable and quick to act.`,
    client: "Server Issue Client",
    company: "Web Hosting Project",
  },
  {
    rating: 5,
    text: `Manmohan is an excellent Android Developer. He is always willing to do whatever it takes to get the job done. Highly recommend!`,
    client: "Android Native Development Client",
    company: "Mobile App Project",
  },
  {
    rating: 5,
    text: `Amazing Android Native developer!`,
    client: "Client for Kotlin App",
    company: "Mobile App Company",
  },
  {
    rating: 5,
    text: `Excellent job delivered. All videos uploaded, more than required. On-time delivery with proper communication.`,
    client: "Client for Grocery Delivery App",
    company: "E-Commerce Project",
  },
  {
    rating: 5,
    text: `Mohan is very helpful again, I highly recommend him for any React and Node projects.`,
    client: "CarJitsu.io Client",
    company: "Gaming Platform",
  },
  {
    rating: 5,
    text: `Excellent knowledge, excellent communication and very easy to work with.`,
    client: "Client for Grocery Delivery App Screenshots",
    company: "E-Commerce Project",
  },
  {
    rating: 5,
    text: `Excellent talent, I am happy with the entire product development and delivery. I highly recommend Manmohan for any Node and React development.`,
    client: "Car Finance Client",
    company: "Automobile Startup",
  },
  {
    rating: 5,
    text: `As always, a pleasure to work with and really helped me fix a complicated issue!`,
    client: "Client for WordPress Slider",
    company: "Website Fix Project",
  },
  {
    rating: 5,
    text: `He really saved the day for us when we needed an urgent fix. Would definitely work with him again!`,
    client: "WordPress Widget Client",
    company: "Website Maintenance",
  },
  {
    rating: 5,
    text: `Manmohan is a dream! He fixed my ActiveCampaign WordPress styling issue very quickly and communicated clearly. A total win for my first Upwork hire!`,
    client: "ActiveCampaign Client",
    company: "Marketing Project",
  },
  {
    rating: 5,
    text: `I needed some edits done fast and he did a terrific job. Thank you!`,
    client: "E-Commerce WordPress Client",
    company: "Online Store",
  },
  {
    rating: 5,
    text: `Professional and knowledgeable. I will use him all the time. Highly recommend.`,
    client: "WordPress Client",
    company: "Small Business",
  },
  {
    rating: 5,
    text: `I appreciate your effort to create a landing page for my site. You were timely, efficient and understanding. Look forward to working with you in the future.`,
    client: "Landing Page Client",
    company: "Personal Project",
  },
  {
    rating: 5,
    text: `Two thumbs up! I can always count on him to update and bring my ideas to life. Nothing is too much for him. Kind, patient, and professional.`,
    client: "Website Maintenance Client",
    company: "Entrepreneur",
  },
  {
    rating: 5,
    text: `Wedding planner website fix completed successfully. Very good in communication. I will definitely recommend him.`,
    client: "Wedding Planner Website Client",
    company: "Event Management",
  },
  {
    rating: 5,
    text: `Mohan is great with communication! He really cares about his clients and is extremely knowledgeable about many sophisticated applications. Very thankful for his assistance!`,
    client: "WP Members Site Client",
    company: "Membership Website",
  },
];

export default function ReviewsPage() {
  const [api, setApi] = useState(null);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [api]);

  const toggleExpand = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const trimText = (text, idx, limit = 140) => {
    if (expanded[idx] || text.length <= limit) return text;
    return text.substring(0, limit).trim() + "... ";
  };

  return (
    <main className="bg-gray-50 w-full lg:max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <h1
        className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4 font-poppins text-center"
        data-aos="fade-up"
      >
        Reviews & Testimonials
      </h1>

      <p
        className="text-center text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base"
        data-aos="fade-up"
      >
        Hear from clients and collaborators about their experience working with
        me. Each testimonial highlights the quality, reliability, and
        professionalism I bring to every project.
      </p>

      <div className="relative w-full overflow-hidden pb-12 sm:pb-0">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-3 lg:-ml-4">
            {reviews.map((review, idx) => {
              const trimmed = trimText(review.text, idx);
              const stars = Math.round(Number(review.rating) || 0);

              return (
                <CarouselItem
                  key={idx}
                  className="pl-2 sm:pl-3 lg:pl-4 py-3 sm:py-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-4 sm:p-6 h-full flex flex-col justify-between min-h-[280px] sm:min-h-[320px] transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      {Array.from({ length: stars }).map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-[#F59E0B] text-lg mr-1"
                        />
                      ))}
                    </div>

                    <p className="text-[#111827] text-sm sm:text-base mb-4 font-inter">
                      "{trimmed}"
                      {!expanded[idx] && review.text.length > 140 && (
                        <button
                          onClick={() => toggleExpand(idx)}
                          className="text-[#1E3A8A] font-semibold underline ml-1"
                        >
                          Show More
                        </button>
                      )}
                      {expanded[idx] && review.text.length > 140 && (
                        <button
                          onClick={() => toggleExpand(idx)}
                          className="text-[#1E3A8A] font-semibold underline ml-1"
                        >
                          Show Less
                        </button>
                      )}
                    </p>

                    <div>
                      <p className="font-semibold text-[#1E3A8A]">
                        {review.client}
                      </p>
                      {review.company && (
                        <p className="text-sm text-gray-600">
                          {review.company}
                        </p>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </main>
  );
}
