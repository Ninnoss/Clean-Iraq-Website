/* eslint-disable react/prop-types */
import pin from '../assets/Imgs/location.svg';
import Button from './Button';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';
import { useTranslation } from 'react-i18next';

const Card = ({ name, img, description, trashBags, volunteers, date, location, imgStyle = 'rounded-t-lg max-h-[200px] w-full' }) => {
  const { t } = useTranslation();

  return (
    <article className="relative w-72 sm:w-80 bg-white border border-gray-200 rounded-lg shadow transition-all duration-300 hover:shadow-lg hover:bg-[whitesmoke]">
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
        <header className="">
          <h3 className="my-4 text-Heading-4 text-center tracking-tight">{t(name)}</h3>
        </header>
        <p className={`mb-3 text-Body-S text-center ${date && location ? 'h-28 md:h-20' : ''}  text-[#777E90]`}>{t(description)}</p>
      </div>

      {date && location && (
        <>
          <div className="flex justify-between items-center p-5 date-place">
            <span className="text-Body-M block text-highlightBlack">{date}</span>
            <div className="flex items-center gap-3">
              <img
                src={pin}
                alt="pin"
              />{' '}
              {t(location)}
            </div>
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
        </>
      )}
      {date && trashBags && volunteers && (
        <>
          <div className="text-Body-M px-5 pb-3">
            <span>
              {t('card.date')}
              {date}
            </span>{' '}
            <br />
            <span>
              {t('card.volunteers')}
              {volunteers}
            </span>{' '}
            <br />
            <span>
              {t('card.trash bags')}
              {trashBags}
            </span>
          </div>
        </>
      )}
    </article>
  );
};

export default Card;
