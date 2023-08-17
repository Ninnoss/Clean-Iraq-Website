import { useTranslation } from 'react-i18next';
import Card from '../Card';
import { upcomingCampaigns } from '../../data/upcomingCampaigns';

const UpcomingCampaigns = () => {
  const { t } = useTranslation();

  return (
    <section className="py-8 px-6 bg-highlightGrey">
      <header className="text-center pb-16">
        <span className="text-Heading-5 block mb-4  text-primaryOrange">{t('campaigns-page.small-header')}</span>
        <p className="text-Heading-3 font-medium py-4">{t('campaigns-page.header')}</p>
      </header>
      <div className="flex justify-center flex-wrap gap-16">
        {upcomingCampaigns.map((campaign, index) => (
          <Card
            key={index}
            name={t(campaign.name)}
            description={t(campaign.description)}
            img={campaign.img}
            date={campaign.date}
            location={t(campaign.place)}
            imgStyle="rounded-t-lg max-h-[640px] max-w-[640px] w-full"
          />
        ))}
      </div>
    </section>
  );
};

export default UpcomingCampaigns;
