/* eslint-disable react/prop-types */
import { useInView } from "react-intersection-observer";
const Row = ({ title, description2,description, imageSrc, imageAlt, isLTR }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element enters the viewport
    threshold: 0.2, // The threshold of how much of the element is in view
  });

  const animationClass = inView ? 'active' : ''; // Add the 'active' class when the element is in view

  return (
    <div
      ref={ref}
      className={`reveal ${animationClass}`}>
      <div className={`p-7 flex flex-col space-y-8  lg:items-center mx-auto ${!isLTR ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className={`sm:w-10/12 md:w-6/12 lg:w-4/12 mx-auto my-8`}>
          <h3 className="font-markazi text-5xl text-highlightBlack font-semibold pb-12">{title}</h3>
          <p className="text-justify text-xl text-highlightBlack font-karla mb-6">{description}</p>
          <p className="text-justify text-xl text-highlightBlack font-karla ">{description2}</p>
        </div>

        <figure className={`flex justify-center md:w-1/2  `}>
          <img
            className={`w-12/12 min-[550px]:w-11/12 sm:w-10/12 lg:w-9/12 rounded-lg lg:relative ${isLTR ? 'lg:top-4' : ''} 'lg:top-10'`}
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
