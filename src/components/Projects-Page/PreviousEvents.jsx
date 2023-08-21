import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchData } from '../../utils/fetchData';
import Card from '../Card';
import CardPlaceholder from '../CardPlaceholder';
import images from '../../data/images';
import Slider from './Slider';

const PreviousEvents = () => {
  const { t } = useTranslation();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData(setEvents);
  }, []);

  return (
    <section className="py-10 md:py-16 px-8 mb-10 relative">
      {/* Square designs */}
      <div className="w-12 md:w-16 xl:w-20 h-16 md:h-24 xl:h-32 absolute top-0 end-0 xl:top-12 rounded-lg  bg-[#bbd1c2] -z-10"></div>
      <div className="w-12 md:w-16 xl:w-20 h-12 md:h-16 xl:h-20 absolute top-8 end-4 md:end-7  xl:top-28 xl:end-10 rounded-lg bg-[#F4DDBC] -z-10"></div>

      <div className="flex flex-col items-center  mb-8 md:mb-16">
        <Slider />
        <p className="text-Heading-4 md:text-Heading-3 !font-normal text-center py-4 md:max-w-[80%]">
          {t('projects-page.previous-events-section.secondary-header')}
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-16">
        {events.length > 0 ? (
          events.map((event, index) => (
            <Card
              key={index}
              name={event.Province}
              date={event.Date}
              img={event.Photos && event.Photos[3] ? event.Photos[3].large.url : `${images.navLogo}`}
              trashBags={event['Number of Trash Bags']}
              volunteers={event['Number of Volunteers']}
              location={event['Location Description Arabic']}
            />
          ))
        ) : (
          <CardPlaceholder />
        )}
      </div>
    </section>
  );
};

export default PreviousEvents;
