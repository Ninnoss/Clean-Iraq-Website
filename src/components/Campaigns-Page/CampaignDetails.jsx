import { useParams } from 'react-router-dom';
import { upcomingCampaigns } from '../../data/upcomingCampaigns';
import pin from '../../assets/Imgs/location.svg';
import JoinUs from './JoinUs';
import { useTranslation } from 'react-i18next';
import Button from './../Button';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';

const CampaignDetails = () => {
  const { campaignName } = useParams();
  const { t } = useTranslation();

  // Translate the campaign name to match the translated form
  // const translatedCampaignName = t(`campaigns-page.campaigns-data.${campaignName}.name`);

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
        <section className="text-center pt-12 pb-6 px-4 lg:py-20 lg:px-40 flex flex-col sm:flex-row gap-20 bg-highlightGrey">
          <div>
            <img
              className="min-w-[200px] max-w-[274px] rounded-2xl border inline-block border-[#DDE1E6]"
              src={selectedCampaign.img}
            />
          </div>

          <div className="text-start max-w-[600px] pt-6 sm:pt-8">
            <h2 className="text-Heading-4 pb-5">{selectedCampaign.name}</h2>
            <p className="text-Body-M text-highlightBlack">{selectedCampaign.description}</p>

            <div className="text-Heading-6 flex justify-between pt-10">
              <h6 className="text-primaryGreen text-Subtitile-M">
                <img
                  src={pin}
                  alt="pin"
                  className="inline-block"
                />
                <strong> {selectedCampaign.place}</strong>
              </h6>
              <h6 className="text-highlightBlack text-Subtitile-M">
                <strong>{selectedCampaign.date}</strong>
              </h6>
            </div>
          </div>
        </section>

        <JoinUs />
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

export default CampaignDetails;
