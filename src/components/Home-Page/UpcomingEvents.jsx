import Card from '../Card';
import Button from '../Button';
import { upcomingCampaigns } from '../../data/upcomingCampaigns';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';

const UpcomingEvents = () => {
  // Slice the array to get the first 3 elements
  const first3Campaigns = upcomingCampaigns.slice(0, 3);
  return (
    <section className="py-16 bg-[#FAFBFA]">
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-Heading-2 text-center">حملاتنا </h2>
        <p className="text-center text-Body-S md:text-Body-L max-w-lg mt-8 text-highlightBlack">
          رسالتنا لجميع المؤسسات، الشركات، الدوائر، وسائل الإعلام.. ينضمون ويانه ويدعمـــون الحملة حتى نســـاهم سوية بالتغيير بيــــوم يجمـــــــع كلّ العراقيين
          تحت شعار <strong>#اليوم_الوطني_للتنظيف.</strong>
        </p>
      </div>
      <div className="pt-24 pb-6 flex justify-center flex-wrap gap-8">
        {first3Campaigns.map((campaign, index) => (
          <Card
            key={index}
            name={campaign.name}
            description={campaign.description}
            img={campaign.img}
          />
        ))}
      </div>

      <Link to={`/campaigns`}>
        <Button
          onClick={scrollToTop}
          type="button"
          role="link"
          aria-label="See More"
          className="my-5 tracking-wider text-Button-M block mx-auto font-medium">
          شاهد المزيد
        </Button>
      </Link>
    </section>
  );
};

export default UpcomingEvents;
