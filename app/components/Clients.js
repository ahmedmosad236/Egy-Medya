"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustedClientsSection() {
  const clients = [
    {
      name: "Ryan Fischer",
      title: "Managing Director",
      image: "/images/client-6.jpg",
      type: "person",
    },
    {
      name: "Jay Hancock",
      title: "Real Estate Agent",
      image: "/images/client-5.jpg",
      type: "person",
    },
    {
      name: "Xavier",
      title: "Website Developer",
      image: "/images/client-4.jpg",
      type: "person",
    },
    {
      name: "Brian",
      title: "Real estate agent",
      image: "/images/client-2.jpg",
      type: "person",
    },
    {
      name: "Ryan Schroder",
      title: "Owner of Fuze Real estate",
      image: "/images/client-3.jpg",
      type: "person",
    },
    {
      name: "FUZE",
      title: "Fuze Brokerage",
      image: "/images/client-1.jpg",
      type: "brand",
    },
  ];

  return (
    <section id="clients" className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* First row - Text and two cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-16">
          <div>
            <div className="mb-8">
              <span className="inline-flex items-center text-sm mb-6 text-white border border-yellow-400 rounded-full px-4 py-2">
                ✨ Top Clients
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Trusted by creators and brands who demand results —{" "}
                <span className="text-gray-400">and premium quality.</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="group"
            >
              <div>
                <div className="relative rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl border border-gray-800 bg-[#070707]">
                  <div className="aspect-square relative">
                    <Image
                      src={clients[0].image}
                      alt={clients[0].name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {clients[0].name}
                    </h3>
                    <p className="text-gray-400 text-base">
                      {clients[0].title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl border border-gray-800 bg-[#070707]">
                <div className="aspect-square relative">
                  <Image
                    src={clients[1].image}
                    alt={clients[1].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {clients[1].name}
                  </h3>
                  <p className="text-gray-400 text-base">{clients[1].title}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Second row - Four cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {clients.slice(2).map((client, index) => (
            <motion.div
              key={index + 2}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl border border-gray-800 bg-[#070707]">
                {
                  // client.type === "brand" ? (
                  //   <div className="aspect-square flex items-center justify-center p-6">
                  //     <div className="text-center">
                  //       <div className="text-3xl font-bold mb-2">
                  //         {client.name}
                  //       </div>
                  //       <div className="text-sm text-purple-200">REAL ESTATE</div>
                  //       {client.dimensions && (
                  //         <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                  //           {client.dimensions}
                  //         </div>
                  //       )}
                  //     </div>
                  //   </div>
                  // ) : (
                  <div className="aspect-square relative ">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                }
                <div className="p-4 bg-[#070707]">
                  <h3 className="font-semibold text-lg mb-1">{client.name}</h3>
                  <p className="text-gray-400 text-base">{client.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
