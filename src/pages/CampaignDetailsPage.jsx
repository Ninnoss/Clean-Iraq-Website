import { useParams } from 'react-router-dom';
import { upcomingCampaigns } from '../data/upcomingCampaigns';
import JoinUs from '../components/Campaigns-Page/JoinUs';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';
import CampaignDetails from '../components/Campaigns-Page/CampaignDetails';

const CampaignDetailsPage = () => {
  const { campaignName } = useParams();
  const { t } = useTranslation();

  const translatedUpcomingCampaigns = upcomingCampaigns.map((campaign, index) => {
    return {
      ...campaign,
      name: t(`campaigns-page.campaigns-data.${index}.name`),
      description: t(`campaigns-page.campaigns-data.${index}.description`),
      date: t(`campaigns-page.campaigns-data.${index}.date`),
      place: t(`campaigns-page.campaigns-data.${index}.place`),
    };
  });

  // Find the campaign object based on the campaignName
  const selectedCampaign = translatedUpcomingCampaigns.find((campaign) => campaign.name === campaignName);

  if (selectedCampaign) {
    return (
      <>
        <CampaignDetails
          img={selectedCampaign.img}
          name={selectedCampaign.name}
          description={selectedCampaign.description}
          place={selectedCampaign.place}
          date={selectedCampaign.date}
        />

        <section className="relative ">
          <JoinUs />
          {/* Square designs*/}
          <div className="w-12 md:w-16 xl:w-20 h-16 md:h-24 absolute bottom-[1rem] end-[2rem] rounded-lg bg-[#bbd1c2]"></div>
          <div className="w-12 md:w-16 h-12 md:h-16 absolute bottom-0 end-0 rounded-lg bg-[#F4DDBC]"></div>
        </section>
      </>
    );
  } else {
    return (
      <section className="h-[40rem] text-center py-4">
        <div>{t('card.campaign-not-found')}</div>
        <Link to={`/campaigns/`}>
          <Button
            onClick={scrollToTop}
            type="button"
            role="link"
            aria-label={t('card.join-campaign-button')}
            className="my-5 tracking-wider text-Button-M block mx-auto font-medium">
            {t('card.go-back-button')}
          </Button>
        </Link>
      </section>
    );
  }
};

export default CampaignDetailsPage;
