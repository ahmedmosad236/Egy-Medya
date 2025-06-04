// import React from "react";

// const services = [
//   {
//     title: "Content Research",
//     description:
//       "We study your niche, audience, and trends to craft content ideas that resonate and perform.",
//     image: "/api/placeholder/200/120",
//     alt: "Person analyzing data on computer screen",
//   },
//   {
//     title: "Script Writing",
//     description:
//       "We turn ideas into punchy, scroll-stopping scripts tailored for short-form platforms.",
//     image: "/api/placeholder/200/120",
//     alt: "Hand writing script on paper",
//   },
//   {
//     title: "Video Shooting",
//     description:
//       "We capture high-quality, engaging footage using pro gear and creative direction.",
//     image: "/api/placeholder/200/120",
//     alt: "Professional video camera setup",
//   },
//   {
//     title: "Editing & Captions",
//     description:
//       "We deliver dynamic edits with on-brand captions that boost retention and engagement.",
//     image: "/api/placeholder/200/120",
//     alt: "Video editing timeline interface",
//   },
//   {
//     title: "Social Strategy",
//     description:
//       "We guide your posting plan to maximize reach, visibility and follower growth.",
//     image: "/api/placeholder/200/120",
//     alt: "Social media analytics on mobile device",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="bg-black text-white py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-16">
//           <div className="inline-block mb-6">
//             <span className="text-xs px-3 py-1 rounded-full bg-[#1c1c1e] border border-gray-600 text-gray-300">
//               🎯 Our Services
//             </span>
//           </div>

//           <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-md">
//               Video Solutions
//               <br />
//               for Brand Growth
//             </h1>

//             <p className="text-gray-400 text-lg max-w-md lg:mt-4">
//               From concept to final cut, we create high-impact videos that
//               capture attention, build trust, and turn viewers into loyal
//               clients.
//             </p>
//           </div>
//         </div>

//         {/* Services Grid */}
//         <div className="space-y-12">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
//                 index % 2 === 1 ? "lg:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Service Content */}
//               <div className="flex-1 space-y-4">
//                 <h3 className="text-2xl md:text-3xl font-bold">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-400 text-lg leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>

//               {/* Service Image */}
//               <div className="flex-shrink-0">
//                 <div className="w-72 h-44 bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
//                   <Image
//                     src={service.image}
//                     alt={service.alt}
//                     width={288}
//                     height={176}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// components/VideoServicesSection.tsx
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
    <section className="bg-gray-950 text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-center gap-80">
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
              className="flex flex-col md:flex-row items-center justify-center gap-6 bg-gradient-to-br from-gray-900/40 to-gray-800/50 p-4 md:p-6 rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
