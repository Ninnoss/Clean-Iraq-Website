import { pastEventsData } from '../../data/pastEventsData';
import Card from '../Card';

const PreviousEvents = () => {
  return (
    <section className="py-10 md:py-16 px-8 mb-10">
      <div className="text-center mb-8 md:mb-16">
        <span className="text-Heading-5 block mb-4  text-primaryOrange">سفراء النظافة بكل مكان</span>
        <p className="text-Heading-3">بجهودكم وبمشاركتكم راح نحقق الأفضل لبلدنا تعالوا ننظف سوة</p>
      </div>

      <div className="flex justify-center flex-wrap gap-16">
        {pastEventsData.map((event, index) => (
          <Card
            key={index}
            name={event.title}
            description={event.content}
            img={event.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default PreviousEvents;
