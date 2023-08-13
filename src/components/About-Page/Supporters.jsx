import images from '../../data/images';

const Supporters = () => {
  return (
    <section className="py-10 md:py-14 px-4 md:px-20 flex flex-col md:flex-row justify-center md:gap-16 bg-[#FAFBFA]">
      <figure>
        <img
          src={images.computiq}
          loading="lazy"
          alt={'computiq logo'}
        />
        <figcaption className="sr-only">computiq logo</figcaption>
      </figure>

      <figure>
        <img
          src={images.giz}
          loading="lazy"
          alt={'giz logo'}
        />
        <figcaption className="sr-only">giz logo</figcaption>
      </figure>

      <figure>
        <img
          src={images.earthlink}
          loading="lazy"
          alt={'earthlink logo'}
        />
        <figcaption className="sr-only">earthlink logo</figcaption>
      </figure>

      <figure className="md:pl-12">
        <img
          src={images.asiacell}
          loading="lazy"
          alt={'asiacell logo'}
        />
        <figcaption className="sr-only">asiacell logo</figcaption>
      </figure>
    </section>
  );
};

export default Supporters;
