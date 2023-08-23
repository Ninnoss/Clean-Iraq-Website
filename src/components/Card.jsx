/* eslint-disable react/prop-types */
import Button from './Button';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';
import { useTranslation } from 'react-i18next';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Card = ({ name, img, description, trashBags, volunteers, date, location, maxHeight =200}) => {
  const { t } = useTranslation();

  return (
    <article className="relative w-72 sm:w-80 bg-white rounded-lg shadow transition-all duration-300 hover:shadow-2xl">
      <figure>
        <img
          className="rounded-t-lg max-h-[220px] w-full"
          // className={`rounded-t-lg max-h-[${maxHeight}px] object-cover w-full`}
          src={img}
          loading="lazy"
          alt={`Image of ${name}`}
        />
      </figure>

      <div className="px-6 text-center">
        <header>
          <h3 className="mt-4 mb-2 text-Heading-6 text-center tracking-tight">{name}</h3>
        </header>

        <span className="text-Body-s block text-highlightBlack">{date}</span>
        <p className={`my-3 text-Body-s text-center line-clamp-3  text-[#777E90]`}>{description}</p>
      </div>

      {date && location && !volunteers && (
        <div className="px-6 text-center">
          <div className="flex justify-center items-center text-Body-s gap-3">
            <HiOutlineLocationMarker color="#548C67" />
            {location}
          </div>

          <Link to={`/campaigns/${t(name)}`}>
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

      {volunteers && trashBags && (
        <div>
          <div className="text-center px-5 pb-3">
            <p className={`my-3 text-Body-s text-center line-clamp-3  text-[#777E90]`}>
              قام <strong className=" text-highlightBlack">{volunteers} متطوع </strong> بالمشاركة بهذهِ الحملة, وقمنا بجمع اكثر من{' '}
              <strong className=" text-highlightBlack">{trashBags} كيس قمامة </strong>
            </p>
            <div className="flex justify-center items-center text-Body-s gap-3">
              <HiOutlineLocationMarker color="#548C67" />
              {t(location)}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Card;
