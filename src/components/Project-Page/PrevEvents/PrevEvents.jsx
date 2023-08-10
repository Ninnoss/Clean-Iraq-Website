import EventCard from "./EventCard";
import images from "../../../data/images";
export default function PrevEvents() {
    const cardData = [
        {
          id: 1,
          imageUrl: images.pic,
          title: 'جسر الائمة ',
          content: 'منطقة الاعظمية، تحت جسر الائمة (من جهة الرصافة) قرب المسناية وفقط نحتاج طاقتكم وحماسكم',
        },
        {
            id: 2,
            imageUrl: images.pic,
            title: 'جسر الائمة ',
            content: 'منطقة الاعظمية، تحت جسر الائمة (من جهة الرصافة) قرب المسناية وفقط نحتاج طاقتكم وحماسكم',
          },
          {
            id: 3,
            imageUrl: images.pic,
            title: 'جسر الائمة ',
            content: 'منطقة الاعظمية، تحت جسر الائمة (من جهة الرصافة) قرب المسناية وفقط نحتاج طاقتكم وحماسكم',
          },
          {
            id: 4,
            imageUrl: images.pic,
            title: 'جسر الائمة ',
            content: 'منطقة الاعظمية، تحت جسر الائمة (من جهة الرصافة) قرب المسناية وفقط نحتاج طاقتكم وحماسكم',
          },
          {
            id: 5,
            imageUrl: images.pic,
            title: 'جسر الائمة ',
            content: 'منطقة الاعظمية، تحت جسر الائمة (من جهة الرصافة) قرب المسناية وفقط نحتاج طاقتكم وحماسكم',
          },
          {
            id: 6,
            imageUrl: images.pic,
            title: 'جسر الائمة ',
            content: 'منطقة الاعظمية، تحت جسر الائمة (من جهة الرصافة) قرب المسناية وفقط نحتاج طاقتكم وحماسكم',
          },
      ];

      return (
        <div className="project-container flex flex-wrap justify-center max-w-[1000px] my-0 mx-auto p-[20px]">
        {cardData.map((card, index) => (
          <EventCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
      )
}
