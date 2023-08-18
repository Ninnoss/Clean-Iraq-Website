/* eslint-disable react/prop-types */
import pin from '../assets/Imgs/location.svg';
import Button from './Button';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';
import { useTranslation } from 'react-i18next';

const Card = ({ name, img, description, trashBags, volunteers, date, location, imgStyle = 'rounded-t-lg max-h-[200px] w-full' }) => {
  const { t } = useTranslation();

  return (
    <article className="relative w-72 sm:w-80 bg-white rounded-lg shadow transition-all duration-300 hover:shadow-2xl ">
      <figure>
        <img
          className={imgStyle}
          src={img}
          loading="lazy"
          alt={`Image of ${name}`}
        />
        <figcaption className="sr-only">{name}</figcaption>
      </figure>

      <div className="px-6">
        <header>
          <h3 className="my-4 text-Heading-4 text-center tracking-tight">{t(name)}</h3>
        </header>
        <p className={`mb-3 text-Body-S text-center ${date && location ? 'h-28 md:h-20' : ''}  text-[#777E90]`}>{t(description)}</p>
      </div>

      {date && location && (
        <div className="flex justify-between items-center p-5 date-place">
          <span className="text-Body-M block text-highlightBlack">{date}</span>
          <div className="flex items-center gap-3">
            <img
              src={pin}
              alt="pin"
            />
            {t(location)}
          </div>
        </div>
      )}

      <h3 className="mt-4 text-Heading-6 text-center tracking-tight">{name}</h3>

      {date && location && (
        <div className="px-6 text-center">
          <span className="text-Body-s block text-highlightBlack">{date}</span>
          <p className={`my-3 text-Body-s text-center line-clamp-3  text-[#777E90]`}>{description}</p>
          <div className="flex justify-center text-Body-s gap-3">
            <img
              src={pin}
              alt="pin"
            />
            {t(location)}
          </div>
          <Link to={`/campaigns/${name}`}>
            <Button
              onClick={scrollToTop}
              type="button"
              role="link"
              aria-label={t('card.join-campaign-button')}
              className="my-5 tracking-wider text-Button-M block mx-auto font-medium">
              {t('card.join-campaign-button')}
            </Button>
          </Link>
        </div>
      )}

      {date && trashBags && volunteers && description && (
        <div>
          <div className="text-Body-M px-5 pb-3">
            <span>
              {t('card.date')}
              {date}
            </span>
            <br />
            <span>
              {t('card.volunteers')}
              {volunteers}
            </span>
            <br />
            <span>
              {t('card.trash bags')}
              {trashBags}
            </span>
          </div>

          <div className="text-center px-5 pb-3">
            <div className="flex justify-center text-Body-s gap-3">
              <img
                src={pin}
                alt="pin"
              />
              {t(description)}
            </div>
            <div className="flex justify-center gap-4 py-3">
              <div className="flex-grow flex-col items-center bg-[#F1F5F3] rounded-xl ">
                <h1 className="text-Subtitile-M">
                  {' '}
                  <strong>{volunteers}</strong>{' '}
                </h1>
                <p className="text-Body-XS">{t('card.volunteer')}</p>
              </div>
              <div className="flex-grow flex-col items-center bg-[#F1F5F3] rounded-xl ">
                <h1 className="text-Subtitile-M">
                  {' '}
                  <strong>{trashBags}</strong>{' '}
                </h1>
                <p className="text-Body-S">{t('card.trash-bag')}</p>
              </div>
            </div>
            <span className="text-Body-XS block text-[#777E90]">{date}</span>
          </div>
        </div>
      )}
    </article>
  );
};

export default Card;
