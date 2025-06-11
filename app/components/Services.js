// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function VideoServicesSection() {
//   const services = [
//     {
//       title: "Content Research",
//       image: "/images/service-1.jpg",
//       description:
//         "We study your niche, audience, and trends to craft content ideas that resonate and perform.",
//     },
//     {
//       title: "Script Writing",
//       image: "/images/service-2.jpg",
//       description:
//         "We turn ideas into punchy, scroll-stopping scripts tailored for short-form platforms.",
//     },
//     {
//       title: "Video Shooting",
//       image: "/images/service-3.jpg",
//       description:
//         "We capture high-quality, engaging footage using pro gear and creative direction.",
//     },
//     {
//       title: "Editing & Captions",
//       image: "/images/service-4.jpg",
//       description:
//         "We deliver dynamic edits with on-brand captions that boost retention and engagement.",
//     },
//     {
//       title: "Social Strategy",
//       image: "/images/service-5.jpg",
//       description:
//         "We guide your posting plan to maximize reach, visibility, and follower growth.",
//     },
//   ];

//   return (
//     <section
//       id="services"
//       className="bg-[#0c0c0c] text-white py-16 px-2 md:px-2 rounded-3xl"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header section */}
//         <div className="mb-16 flex flex-col md:flex-row justify-between items-center gap-80 ">
//           <div>
//             <span className="inline-block text-sm font-medium mb-6 border border-yellow-400 rounded-full px-3 py-1">
//               ✨ Our Services
//             </span>
//             <h2 className="text-5xl md:text-5xl font-semibold mb-4 !leading-[56px] ">
//               Video Solutions for Brand Growth
//             </h2>
//           </div>
//           <p className="text-white font-normal text-sm leading-6 max-w-xl md:mt-4">
//             From concept to final cut, we create high-impact videos that capture
//             attention, build trust, and turn viewers into loyal clients.
//           </p>
//         </div>

//         <div className="space-y-10">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="group cursor-pointer"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="flex flex-col md:flex-row items-center justify-start gap-40 bg-gradient-to-br p-4 md:p-6 rounded-2xl group-hover:bg-[#161616] transition-all duration-300 group-hover:-translate-y-4 group-hover:shadow-2xl">
//                 <div className="md:w-1/4 text-3xl font-medium leading-10">
//                   {service.title}
//                 </div>
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   width={256}
//                   height={128}
//                   className="w-full md:w-1/4 h-32 object-cover rounded-lg"
//                 />
//                 <p className="md:w-1/4 text-sm font-normal leading-5 text-gray-300">
//                   {service.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
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
      className="bg-[#0c0c0c] text-white py-16 px-2 md:px-2 rounded-3xl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="mb-16 flex flex-col ml-3 md:flex-row justify-between items-center md:gap-80 gap-8">
          <div>
            <span className="inline-block text-sm font-medium mb-6 border border-yellow-400 rounded-full px-3 py-1">
              ✨ Our Services
            </span>
            <h2 className="text-3xl md:text-5xl pl-2 font-semibold mb-4 !leading-[1.2] md:!leading-[56px]">
              Video Solutions for Brand Growth
            </h2>
          </div>
          <p className="text-white font-normal px-2 text-sm leading-6 max-w-xl md:mt-4">
            From concept to final cut, we create high-impact videos that capture
            attention, build trust, and turn viewers into loyal clients.
          </p>
        </div>

        <div className="space-y-6 md:space-y-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-6 md:gap-40 bg-gradient-to-br p-4 md:p-6 rounded-2xl group-hover:bg-[#161616] transition-all duration-300 group-hover:-translate-y-4 group-hover:shadow-2xl">
                <div className="w-full md:w-1/4 text-xl md:text-3xl font-medium leading-tight md:leading-10">
                  {service.title}
                </div>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={256}
                  height={128}
                  className="w-full md:w-1/4 h-40 md:h-32 object-cover rounded-lg"
                />
                <p className="w-full md:w-1/4 text-sm font-normal leading-5 text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
