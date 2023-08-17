import { useState, useEffect } from 'react';
import Card from '../Card';
import images from '../../data/images';
import Slider from './HeadingSlider/Slider';
import { fetchData } from '../../utils/fetchPastEvents';

const PreviousEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const cachedData = sessionStorage.getItem('eventsData');
    if (cachedData) {
      setEvents(JSON.parse(cachedData));
    } else {
      fetchData();
    }
  }, []);

  return (
    <section className="py-10 md:py-16 px-8 mb-10">
      <div className="text-center mb-8 md:mb-16">
        <Slider />
        <p className="text-Heading-3 font-medium py-4">شكراً لكل المشاركين في حملة التنظيف، بفضلكم حققنا تغييراً كبيراً وجعلنا هذه الأماكن نظيفة وجميلة.</p>
      </div>

      <div className="flex justify-center flex-wrap gap-16">
        {events.map((event, index) => (
          <Card
            key={index}
            name={event.Province}
            date={event.Date}
            description={event['Location Description Arabic']}
            img={event.Photos && event.Photos[3] ? event.Photos[3].large.url : `${images.navLogo}`}
            trashBags={event['Number of Trash Bags']}
            volunteers={event['Number of Volunteers']}
          />
        ))}
      </div>
    </section>
  );
};

export default PreviousEvents;
