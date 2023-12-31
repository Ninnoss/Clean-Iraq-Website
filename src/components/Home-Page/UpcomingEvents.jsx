import Card from '../Card';
import Button from '../Button';
import { upcomingCampaigns } from '../../data/upcomingCampaigns';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';
import { useTranslation } from 'react-i18next';

const UpcomingEvents = () => {
  const { t } = useTranslation();
  const first3Campaigns = upcomingCampaigns.slice(0, 3);

  // Translate campaigns data before passing them to the Card
  // adjust the campaigns data to preserve the img, but change the text to use the texts form the .json files
  const translatedUpcomingEvents = first3Campaigns.map((campaign, index) => {
    return {
      ...campaign,
      name: t(`campaigns-page.campaigns-data.${index}.name`),
      description: t(`campaigns-page.campaigns-data.${index}.description`),
      date: t(`campaigns-page.campaigns-data.${index}.date`),
      place: t(`campaigns-page.campaigns-data.${index}.place`),
    };
  });

  return (
    <section className="py-16 bg-[#FAFBFA]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-Heading-2 text-center">{t('home-page.upcoming-events-section.header')}</h2>
        <p className="text-center text-Body-S md:text-Body-L max-w-lg mt-8 text-highlightBlack">
          {t('home-page.upcoming-events-section.paragraph')}
          <strong>{t('home-page.upcoming-events-section.hashtag')}</strong>
        </p>
      </div>
      <div className="pt-24 pb-6 flex justify-center flex-wrap gap-8">
        {translatedUpcomingEvents.map((campaign, index) => (
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
          aria-label={t('home-page.upcoming-events-section.see-more-button')}
          className="my-5 tracking-wider text-Button-M block mx-auto font-medium">
          {t('home-page.upcoming-events-section.see-more-button')}
        </Button>
      </Link>
    </section>
  );
};

export default UpcomingEvents;
