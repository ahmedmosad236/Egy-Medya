"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Our business experienced a significant transformation thanks to this team's digital marketing expertise.",
      name: "Ryan Schroder",
      title: "Managing Director",
      image: "/images/testm-1.jpg",
    },
    {
      text: "Amazing service and results! Highly recommend their digital solutions.",
      name: "Jane Doe",
      title: "CEO",
      image: "/images/client-6.jpg",
    },
    {
      text: "We've seen incredible growth since working with this team. Highly professional and effective.",
      name: "John Smith",
      title: "CMO",
      image: "/images/client-6.jpg",
    },
  ];

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    animation: {
      duration: 800,
      easing: (t) => t * t * t, // تقدر تخليها أكثر نعومة لو حبيت
    },
    slides: {
      perView: 1,
    },
    mode: "snap",
  });

  return (
    <section
      id="testimonials"
      className="bg-black text-white py-20 px-6 md:px-16 relative"
    >
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-flex items-center text-sm mb-6 text-white border border-yellow-400 rounded-full px-4 py-2">
          ✨ Client Testimonials
        </span>

        <div ref={sliderRef} className="keen-slider mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="keen-slider__slide flex flex-col items-center justify-center px-4"
            >
              <p className="text-3xl md:text-4xl py-8 md:px-20 font-semibold leading-10 mb-6 max-w-4xl mx-auto">
                {testimonial.text}
              </p>
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-4 md:left-10 lg:left-20 top-1/2 transform -translate-y-1/2 border border-gray-800  rounded-full p-2 hover:scale-105 transition z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            className="w-8 h-8 md:w-10 md:h-10 fill-white"
          >
            <path
              d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
              data-name="Left"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-4 md:right-10 lg:right-20 top-1/2 transform -translate-y-1/2 border border-gray-800 rounded-full p-2 hover:scale-105 transition z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            className="w-8 h-8 md:w-10 md:h-10 fill-white"
          >
            <path
              d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
              data-name="Left"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
