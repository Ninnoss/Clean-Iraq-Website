import images from '../../data/images';

const Supporters = () => {
    return (
      <section className=" py-14 px-20 flex  flex-row-reverse justify-center gap-16 bg-[#FAFBFA]">
        <img
            src={images.computiq}
            loading="lazy"
            alt={'computiq logo'}
        />
        <img
            src={images.giz}
            loading="lazy"
            alt={'giz logo'}
        />
        <img
            src={images.earthlink}
            loading="lazy"
            alt={'earthlink logo'}
        />
        <img
            className="pl-12"
            src={images.asiacell}
            loading="lazy"
            alt={'asiacell logo'}
        />
      </section>
    );
  };
  
  export default Supporters;