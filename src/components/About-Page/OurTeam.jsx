import { ourTeam } from '../../data/outTeam';

const OurTeam = () => {
  return (
    <section className="py-16 bg-[#FAFBFA]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-Heading-3 text-center max-w-lg">فريقنا المميز من هو مصدر قوتنا وحجر الأساس لسفراء النظافة</h2>
      </div>

      {/*TODO: Placeholder Imgs. CHANGE THEM */}
      <div className="py-20 px-10 flex justify-center flex-wrap gap-10">
        {ourTeam.map((image, index) => (
          <figure key={index}>
            <img
            className='rounded-lg'
              src={image.img}
              loading="lazy"
              alt={image.alt}
            />
            <figcaption className="sr-only">{'Murtadha throwing peace sign'}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
