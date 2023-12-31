import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { fetchData } from '../../../utils/fetchData';
import Stat from './Stat';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData);
  }, []);

  const stats = useMemo(
    () => [
      {
        title: 'campaign',
        number: (data) => data.length,
        logo: 'campaigns',
      },
      {
        title: 'places',
        number: (data) => data.length,
        logo: 'places',
      },
      {
        title: 'volunteers',
        number: (data) => data.reduce((total, event) => total + (event['Number of Volunteers'] || 0), 0),
        logo: 'volunteers',
      },
      {
        title: 'trash-bags',
        number: (data) => data.reduce((total, event) => total + (event['Number of Trash Bags'] || 0), 0),
        logo: 'trashBags',
      },
    ],
    []
  );

  return (
    <section className="py-16">
      <h2 className="text-center text-Heading-2">{t('home-page.stats-section.header')}</h2>

      <div
        ref={ref}
        className="pt-14 flex flex-row-reverse flex-wrap-reverse justify-center gap-10">
        {stats.map((stat) => (
          <Stat
            key={stat.title}
            title={t(`home-page.stats-section.${stat.title}`)}
            number={inView && data.length > 0 ? stat.number(data) : 0}
            logo={stat.logo}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
