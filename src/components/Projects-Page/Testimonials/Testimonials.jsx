/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../../data/testimonials';

const Testimonials = () => {
  const [currentReview, setcurrentReview] = useState(0);

  const nextReview = () => {
    setcurrentReview((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevReview = () => {
    setcurrentReview((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="py-16 bg-lightPeach ">
      <h3 className="text-center text-Heading-3">اراء المتطوعين عن الحملة</h3>
      <div className="flex justify-center mt-10 relative">
        <TestimonialCard {...testimonials[currentReview]} />

        <button
          className="absolute left-[2%]  md:left-[6%] xl:left-[12%] top-64 md:top-40 transform translate-y-1/2 bg-white hover:bg-primaryGreen   group p-2 rounded-full shadow-lg"
          onClick={prevReview}
          aria-label="Previous Review">
          <FaAngleLeft className="h-6 w-6 text-gray-600 group-hover:text-white" />
        </button>
        <button
          className="absolute right-[2%] rmd:ight-[6%] xl:right-[12%] top-64 md:top-40 transform translate-y-1/2 bg-white hover:bg-primaryGreen   group p-2 rounded-full shadow-lg"
          onClick={nextReview}
          aria-label="Next Review">
          <FaAngleRight className="h-6 w-6 text-gray-600 group-hover:text-white" />
        </button>
      </div>
    </section>
  );
};
export default Testimonials;
