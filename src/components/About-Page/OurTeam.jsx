import images from '../../data/images';

const OurTeam = () => {
  return (
    <section className="py-16 bg-[#FAFBFA]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-Heading-3 text-center max-w-lg">فريقنا المميز من المتطوعين هو مصدر قوتنا وحجر الأساس لسفراء النظافة</h2>
      </div>

      {/*TODO: Placeholder Imgs. CHANGE THEM */}
      <div className="pt-24 pb-6 flex justify-center flex-wrap gap-10">
        {[1, 2, 3, 4].map((image, index) => (
          <figure key={index}>
            <img
              className="w-[300px] h-[350px] rounded-lg"
              src={images.murtadhaPeaceSign}
              loading="lazy"
              alt={'Murtadha throwing peace sign'}
            />
            <figcaption className="sr-only">{'Murtadha throwing peace sign'}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
