import Card from '../Card';
import { upcomingCampaigns } from '../../data/upcomingCampaigns';

const UpcomingCampaigns = () => {
  return (
    <section className="py-8 px-6">
      <header className="text-center pb-16">
        <span className="text-Heading-5 block mb-4  text-primaryOrange">سفراء النظافة بكل مكان</span>
        <p className="text-Heading-3 font-medium py-4">بجهودكم وبمشاركتكم راح نحقق الأفضل لبلدنا تعالوا ننظف سوة</p>
      </header>
      <div className="flex justify-center flex-wrap gap-16">
        {upcomingCampaigns.map((campaign, index) => (
          <Card
            key={index}
            name={campaign.name}
            description={campaign.description}
            img={campaign.img}
            date={campaign.date}
            location={campaign.place}
            imgStyle="rounded-t-lg max-h-[640px] max-w-[640px] w-full"
          />
        ))}
      </div>
    </section>
  );
};

export default UpcomingCampaigns;
