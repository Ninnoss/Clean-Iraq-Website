import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchData } from '../../utils/fetchData';
import Card from '../Card';
import CardPlaceholder from '../CardPlaceholder';
import images from '../../data/images';
import Slider from './HeadingSlider/Slider';

const PreviousEvents = () => {
  const { t } = useTranslation();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData(setEvents);
  }, []);

  return (
    <section className="py-10 md:py-16 px-8 mb-10">
      <div className="text-center mb-8 md:mb-16">
        <Slider />
        <p className="text-Heading-3 font-medium py-4">{t('projects-page.previous-events-section.secondary-header')}</p>
      </div>

      <div className="flex justify-center flex-wrap gap-16">
        {events.map((event, index) => (
          <>
            {events.length > 0 ? (
              <Card
                key={index}
                name={event.Province}
                date={event.Date}
                img={event.Photos && event.Photos[3] ? event.Photos[3].large.url : `${images.navLogo}`}
                trashBags={event['Number of Trash Bags']}
                volunteers={event['Number of Volunteers']}
                location={event['Location Description Arabic']}
              />
            ) : (
              <CardPlaceholder />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default PreviousEvents;
