import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../../data/testimonials';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevReview = () => {
    setCurrentReview((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Translate testimonials data before passing them to the TestimonialCard
  // adjust the testimonials data to preserve the img, but change the text to use the texts form the .json files
  const translatedTestimonials = testimonials.map((testimonial, index) => {
    return {
      ...testimonial,
      name: t(`projects-page.testimonials-section.testimonials-data.${index}.name`),
      title: t(`projects-page.testimonials-section.testimonials-data.${index}.title`),
      review: t(`projects-page.testimonials-section.testimonials-data.${index}.review`),
    };
  });

  return (
    <section className="py-16 bg-lightPeach">
      <h3 className="text-center text-Heading-3">{t('projects-page.testimonials-section.header')}</h3>
      <div className="flex justify-center mt-10 relative">
        <TestimonialCard {...translatedTestimonials[currentReview]} />

        <button
          className="absolute left-[2%]  md:left-[6%] xl:left-[12%] top-64 md:top-40 transform translate-y-1/2 bg-white hover:bg-primaryGreen   group p-2 rounded-full shadow-lg"
          onClick={prevReview}
          aria-label={'previous-review'}>
          <FaAngleLeft className="h-6 w-6 text-gray-600 group-hover:text-white" />
        </button>
        <button
          className="absolute right-[2%] md:right-[6%] xl:right-[12%] top-64 md:top-40 transform translate-y-1/2 bg-white hover:bg-primaryGreen   group p-2 rounded-full shadow-lg"
          onClick={nextReview}
          aria-label={'common.next-review'}>
          <FaAngleRight className="h-6 w-6 text-gray-600 group-hover:text-white" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
