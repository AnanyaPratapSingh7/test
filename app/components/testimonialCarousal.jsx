'use client'

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Dr. Verma’s surgical skills are exceptional. I’m grateful for his support and guidance during my journey with GI cancer. He made a challenging time much easier.",
  },
  {
    quote:
      "I was very nervous about my bariatric surgery, but Dr. Verma explained everything in detail and supported me throughout the process. I feel healthier and more confident today.",
  },
  {
    quote:
      "Thanks to Dr. Verma's laparoscopic treatment, my recovery was quick and painless. His professionalism and compassion made all the difference.",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#006C7E] py-8 sm:py-10 text-white text-center relative px-2 sm:px-0">
      <div className="text-2xl sm:text-3xl mb-4 text-[#DF4836]">
        <i className="fas fa-comment-medical"></i>
      </div>

      <p className="max-w-lg sm:max-w-3xl mx-auto italic px-2 sm:px-4 text-base sm:text-lg transition-opacity duration-500 ease-in-out">
        "{testimonials[index].quote}"
      </p>

      {/* Navigation Arrows and Dots */}
      <div className="flex justify-center items-center gap-4 sm:gap-6 mt-6 text-xl sm:text-2xl">
        <button
          onClick={handlePrev}
          className="hover:text-[#DF4836] transition-colors duration-200 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
          aria-label="Previous testimonial"
        >
          &larr;
        </button>

        <div className="flex gap-1 sm:gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full inline-block transition-all duration-200 ${
                i === index ? "bg-red-500" : "bg-red-200"
              }`}
            ></span>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="hover:text-[#DF4836] transition-colors duration-200 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
          aria-label="Next testimonial"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
}
