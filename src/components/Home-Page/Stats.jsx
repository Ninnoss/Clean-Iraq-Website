import { useInView } from 'react-intersection-observer';
import Stat from './Stat';
import { stats } from '../../data/stats';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="py-16">
      <h2 className="text-center text-Heading-2">احصائيات</h2>

      <div
        ref={ref}
        className="pt-14 flex flex-row-reverse flex-wrap-reverse justify-center gap-10">
        {stats.map((stat) => (
          <Stat
            key={stat.title}
            title={stat.title}
            number={inView ? stat.number : 0}
            logo={stat.logo}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;