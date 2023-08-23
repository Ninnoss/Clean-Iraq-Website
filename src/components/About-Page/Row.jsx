/* eslint-disable react/prop-types */
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
const Row = ({ title, description, description2, imageSrc, imageAlt, isLTR }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element enters the viewport
    threshold: 0.1, // The threshold of how much of the element is in view
  });

  const animationClass = inView ? 'active' : ''; // Add the 'active' class when the element is in view
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  return (
    <div
      ref={ref}
      className={`reveal ${animationClass}`}>
      <div className={`p-4 md:p-6 flex flex-col space-y-8  lg:items-center mx-auto ${!isLTR ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className={`sm:w-10/12 md:w-5/12 lg:w-4/12 mx-auto my-8 text-highlightBlack`}>
          <h3 className={`mb-${isEnglish ? 2 : 6} text-Heading-2`}>{title}</h3>
          <p className="text-justify mb-4 text-Body-L">{description}</p>
          <p className="text-justify text-Body-L">{description2}</p>
        </div>

        <figure className={`flex justify-center md:w-1/2`}>
          <img
            className={`w-12/12 min-[550px]:w-11/12 sm:w-10/12 lg:w-9/12 rounded-lg xl:relative ${!isLTR ? 'xl:top-10' : 'xl:top-8'} ${
              isEnglish ? 'xl:-top-7' : ''
            } `}
            src={imageSrc}
            loading="lazy"
            alt={imageAlt}
          />
          <figcaption className="sr-only">{imageAlt}</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Row;
