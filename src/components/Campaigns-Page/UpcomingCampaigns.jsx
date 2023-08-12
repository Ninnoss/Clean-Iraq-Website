import Card from '../Card';
import { upcomingCampaigns } from '../../data/upcomingCampaigns';

const UpcomingCampaigns = () => {
  return (
    <section className="p-20">
      <header className="text-center pb-16">
        <span className="text-Heading-5 block mb-4  text-primaryOrange">سفراء النظافة بكل مكان</span>
        <p className="text-Heading-3">بجهودكم وبمشاركتكم راح نحقق الأفضل لبلدنا تعالوا ننظف سوة</p>
      </header>
      <div className="flex justify-center flex-wrap gap-16">
        {upcomingCampaigns.map((campaign, index) => (
          <Card
            key={index}
            name={campaign.name}
            description={campaign.description}
            img={campaign.img}
            date={campaign.date}
            place={campaign.place}
          />
        ))}
      </div>
    </section>
  );
};

export default UpcomingCampaigns;
