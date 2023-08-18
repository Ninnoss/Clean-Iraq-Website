import CampaignsMap from './CampaingsMap';
import { useTranslation } from 'react-i18next';

const CampaignLocations = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f6f6f6c2] py-16">
      <div className="text-center flex-col items-center md:w-[35rem] mx-auto ">
        <h6 className="text-[#777E90] text-Heading-6 ">{t('home-page.map-section.little-header')}</h6>
        <h2 className="text-Heading-3 md:text-Heading-1 text-highlightBlack tracking-wide">
          {t('home-page.map-section.header.0')} <br /> <span className="text-primaryGreen">{t('home-page.map-section.header.1')}</span>{' '}
          {t('home-page.map-section.header.2')}
        </h2>
        <p className="text-Body-L text-[#777E90] mt-12 p-4 ">{t('home-page.map-section.paragraph')}</p>
      </div>
      <CampaignsMap />
    </section>
  );
};

export default CampaignLocations;
