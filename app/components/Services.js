"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function VideoServicesSection() {
  const services = [
    {
      title: "Content Research",
      image: "/images/service-1.jpg",
      description:
        "We study your niche, audience, and trends to craft content ideas that resonate and perform.",
    },
    {
      title: "Script Writing",
      image: "/images/service-2.jpg",
      description:
        "We turn ideas into punchy, scroll-stopping scripts tailored for short-form platforms.",
    },
    {
      title: "Video Shooting",
      image: "/images/service-3.jpg",
      description:
        "We capture high-quality, engaging footage using pro gear and creative direction.",
    },
    {
      title: "Editing & Captions",
      image: "/images/service-4.jpg",
      description:
        "We deliver dynamic edits with on-brand captions that boost retention and engagement.",
    },
    {
      title: "Social Strategy",
      image: "/images/service-5.jpg",
      description:
        "We guide your posting plan to maximize reach, visibility, and follower growth.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#0c0c0c] text-white py-20 px-6 md:px-16 rounded-3xl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
          <div>
            <span className="inline-block ml-5 text-sm mb-6 text-yellow-400 border border-yellow-400 rounded-full px-3 py-1">
              ✨ Our Services
            </span>
            <h2 className="text-5xl md:text-5xl font-bold mb-4 pl-7">
              Video Solutions for Brand Growth
            </h2>
          </div>
          <p className="text-white max-w-xl md:mt-4">
            From concept to final cut, we create high-impact videos that capture
            attention, build trust, and turn viewers into loyal clients.
          </p>
        </div>

        <div className="space-y-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-gradient-to-br p-4 md:p-6 rounded-2xl group-hover:bg-[#161616] transition-all duration-300 group-hover:-translate-y-4 group-hover:shadow-2xl">
                <div className="md:w-1/4 font-semibold text-xl">
                  {service.title}
                </div>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={256}
                  height={128}
                  className="w-full md:w-1/4 h-32 object-cover rounded-lg"
                />
                <p className="md:w-1/2 text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
