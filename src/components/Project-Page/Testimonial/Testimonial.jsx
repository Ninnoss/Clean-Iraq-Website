import React, { useState } from 'react';
import TestimonialCard from "./TestimonialCard";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Testimonial({ testimonials }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const prevSlide = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };

    return (
        <div className="testimonial-cont bg-[#FDF9F2] max-w-[100%] my-0 mx-auto grid place-items-center pb-[50px] relative">
            <h2 className="text-center font-bold text-lg mt-4 mb-2"
            >اراء المتطوعين عن الحملة</h2>
        <TestimonialCard
          {...testimonials[activeIndex]}
        />
           <div className="testimonial-slider  min-[320px]:px-[2rem] py-0 w-[90%] flex justify-between items-center absolute min-[760px]:px-[5rem] [760px]:py-0">
      <button className="slider-button" onClick={nextSlide}>
        <IoIosArrowForward />
      </button>
      <button className="slider-button " onClick={prevSlide}>
      <IoIosArrowBack />
      </button>
    </div>
      </div>
      )
}
