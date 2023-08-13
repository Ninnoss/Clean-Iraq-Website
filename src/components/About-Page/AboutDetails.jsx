import { rowsData } from '../../data/aboutPage';
import Row from './Row';

const AboutDetails = () => {
  return (
    <section className="pt-5 pb-20 md:space-y-6 relative">
      <div className="w-12 md:w-16 xl:w-20 h-16 md:h-24 xl:h-32 absolute top-0 left-0 xl:top-12 rounded-lg rounded-l-none bg-[#bbd1c2] -z-10"></div>
      <div className="w-12 md:w-16 xl:w-20 h-12 md:h-16 xl:h-20 absolute top-8 left-4 md:left-7  xl:top-24 xl:left-10 rounded-lg bg-[#F4DDBC] -z-10"></div>
      {rowsData.map((row, index) => {
        const { title, description2, description, imageSrc, imageAlt } = row;
        const isLTR = index % 2 === 0;

        return (
          <Row
            key={title}
            title={title}
            description2={description2}
            description={description}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            isLTR={isLTR}
          />
        );
      })}
    </section>
  );
};

export default AboutDetails;