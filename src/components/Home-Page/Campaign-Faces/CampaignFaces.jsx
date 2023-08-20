import { orbits } from '../../../data/orbitsImgs';
import OrbitImage from './OrbitImage';
import { useTranslation } from 'react-i18next';

const CampaignFaces = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col-reverse lg:flex-row justify-evenly items-center px-2 md:px-16">
      <div className="relative flex justify-center items-center scale-[0.55] md:scale-90 xl:scale-100 h-[30rem] md:h-[38rem] lg:h-[42rem] lg:ps-20">
        {/* Orbit 1 */}
        <div className="w-[10rem] h-[10rem] border-2 border-[##EFECEB] rounded-full absolute">
          {orbits[0].map((item, index) => (
            <OrbitImage
              key={index}
              {...item}
            />
          ))}
        </div>

        {/* Orbit 2*/}
        <div className="w-[20rem] h-[20rem] border-2 border-[##EFECEB] rounded-full absolute">
          {orbits[1].map((item, index) => (
            <OrbitImage
              key={index}
              {...item}
            />
          ))}
        </div>

        {/* Orbit 3*/}
        <div className="w-[30rem] h-[30rem] border-2 border-[##EFECEB] rounded-full absolute">
          {orbits[2].map((item, index) => (
            <OrbitImage
              key={index}
              {...item}
            />
          ))}
        </div>

        {/* Sun & Moon */}
        <div className="w-8 h-8 rounded-full bg-[#EBD96B] absolute -top-8 md:top-10 left-52 animate-sun lg:mr-20"></div>
        <div className="w-6 h-6 rounded-full bg-[#EBD96B] absolute top-[500px] right-60 animate-sun lg:mr-20"></div>
        <div className="w-3 h-3 rounded-full bg-[#89807A] absolute -top-8 md:top-36  right-52 animate-moon lg:mr-20"></div>
        <div className="w-3 h-3 rounded-full bg-[#89807A] absolute top-[550px] left-60 animate-moon lg:mr-20"></div>
      </div>

      <div className="max-w-lg relative lg:start-52 xl:start-52 text-center  lg:text-center my-16 lg:mt-0 ">
        <h3 className="text-Heading-3 ">{t('home-page.campaign-faces-section.header')}</h3>
        <p className="text-Body-S md:text-Body-L max-w-lg mt-8 text-highlightBlack ">
          {t('home-page.campaign-faces-section.paragraph.0')}
          <strong>{t('home-page.campaign-faces-section.paragraph.1')}</strong>
          {t('home-page.campaign-faces-section.paragraph.2')}
          {t('home-page.campaign-faces-section.paragraph.3')}
        </p>
      </div>
    </section>
  );
};

export default CampaignFaces;
