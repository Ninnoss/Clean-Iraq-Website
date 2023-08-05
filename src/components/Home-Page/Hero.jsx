import images from '../../data/images';
import Button from '../Button';
// import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-36 px-8">
      <div className="flex flex-col-reverse md:flex-row gap-14 justify-around items-center">
        
        <div className="relative">
          {/* <div className="absolute w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 -top-8 left-64 md:-top-12 md:left-[11.5rem] rounded-lg bg-[#bbd1c2] -z-10"></div>
          <div className="absolute w-20 h-20 md:w-36 md:h-36 -top-4 right-10 md:right-4 rounded-lg bg-[#F4DDBC] -z-10"></div> */}

          <figure>
            <img
              className="h-[350px] sm:h-[400px] md:h-[450px] w-[450px] rounded-lg z-10"
              src={images.girlWithTrashCan}
              alt="A girl picking up trash"
            />
            <figcaption className="sr-only">A girl picking up trash</figcaption>
          </figure>
        </div>

        <div>
          <span className="text-Heading-6 md:text-Heading-5 block ">سفراء النظافة</span>
          <h1 className="text-Heading-3 md:text-Heading-1 mb-4">العراق فخور بيكم !</h1>
          <span className="text-Heading-5 md:text-Heading-4 font-normal">كن جزء من التغيير إيجابي, ابدأ بنفسك </span>
          <p className="text-Body-S md:text-Body-L max-w-lg mt-8 text-highlightBlack  ">
            إن كل فردٍ يساهم في هذه الحملة يكون جزءًا من تغيير إيجابي يشمل المجتمع بأكمله. ابدأ بنفسك وكن النموذج الذي يحتذى به، ودع طاقتك الإيجابية تشع بالحماس
            والتحفيز لمن حولك. تذكَّر أن العمل الجماعي يؤدي إلى نتائج مذهلة، والتحديات التي تواجهنا ستبدو هشة بجانب إرادتنا وتصميمنا على تحقيق التغيير.
          </p>
          <Button className="mt-10 px-3 py-1 lg:px-6 tracking-wider lg:py-2 text-Button-M font-medium">أنضم الينا</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
