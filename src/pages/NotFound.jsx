import Button from '../components/Button';
import images from '../data/images';

const NotFound = () => {
  return (
    <section className="flex flex-col py-8 px-6 sm:py-36 sm:px-32 sm:flex-row gap-32 items-center">
      <div className="absolute right-[-20px] bottom-[-310px] z-[-999]">
        <img 
            src={images.lines}
            className="w-[1865px]" />
      </div>
      <div className="absolute top-[120px] left-[1282px]">
        <div className="absolute bg-primaryGreen w-[67px] h-[64px] rounded opacity-40"></div>
        <div className="absolute bg-[#F4DDBC] w-[42px] h-[40px] rounded left-[-85px] bottom-[-72px]"></div>
      </div>
      <div>
      <h2 className="text-Heading-2 text-[#1A2E35]">عذراً ...</h2>
      <p className="text-[#1A2E35] text-3xl font-medium">الصفحة غير موجودة</p>
      <p className="text-Body-L text-[#1A2E35DE] mt-[23px] mb-[73px]">اسف بشأن ذلك! يرجى زيارة صفحتنا الرئيسية للوصول إلى المكان الذي تريد الذهاب إليه.</p>
      <Button>الرجوع الى الصفحة الرئيسية</Button>
      </div>

      <div>
        <figure>
          <img
            src={images.error}
            loading="lazy"
            alt="image of Page not Found 404"
          />
          <figcaption className="sr-only">Page not Found 404</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default NotFound;
