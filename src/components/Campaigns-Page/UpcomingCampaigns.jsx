import { useTranslation } from 'react-i18next';
import Card from '../Card';
import { upcomingCampaigns } from '../../data/upcomingCampaigns';

const UpcomingCampaigns = () => {
  const { t } = useTranslation();

  // Translate campaigns data before passing them to the Card
  // adjust the campaigns data to preserve the img, but change the text to use the texts form the .json files
  const translatedUpcomingCampaigns = upcomingCampaigns.map((campaign, index) => {
    return {
      ...campaign,
      name: t(`campaigns-page.campaigns-data.${index}.name`),
      description: t(`campaigns-page.campaigns-data.${index}.description`),
      date: t(`campaigns-page.campaigns-data.${index}.date`),
      place: t(`campaigns-page.campaigns-data.${index}.place`),
    };
  });
  return (
    <section className="py-8 pb-36 px-6  relative">
      {/* Square designs */}
      <div className="w-12 md:w-16 xl:w-20 h-16 md:h-24 xl:h-32 absolute top-0 end-0 xl:top-12 rounded-lg  bg-[#bbd1c2] -z-10"></div>
      <div className="w-12 md:w-16 xl:w-20 h-12 md:h-16 xl:h-20 absolute top-8 end-4 md:end-7  xl:top-28 xl:end-10 rounded-lg bg-[#F4DDBC] -z-10"></div>
     
      <header className="flex flex-col items-center pb-16">
        <span className="text-Heading-5 block mb-4  text-primaryOrange">{t('campaigns-page.small-header')}</span>
        <p className="text-Heading-3 !font-normal text-center py-4 md:max-w-[80%]">{t('campaigns-page.header')}</p>
      </header>
      <div className="flex justify-center flex-wrap gap-16">
        {translatedUpcomingCampaigns.map((campaign, index) => (
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
