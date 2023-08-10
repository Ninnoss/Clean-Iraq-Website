import { rowsData } from '../../data/aboutPage';
import Row from './Row';

const AboutDetails = () => {
  return (
    <section className="bg-[#ffffff] pt-20 pb-20 md:pb-40 space-y-6">
      {rowsData.map((row, index) => {
        const { title, description2 ,description, imageSrc, imageAlt } = row;
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
