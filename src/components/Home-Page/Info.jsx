import images from '../../data/images';
import Button from '../Button';

const Info = () => {
  return (
    <section className="bg-[#f6f6f6c2] py-16 px-8 relative">
      <div className="flex flex-col md:flex-row gap-14 justify-around items-center">
        <div>
          <h2 className="text-Heading-2 ">بعيد وما تكدر تتواجد ويانه؟</h2>
          <p className="text-Body-S md:text-Body-L max-w-lg mt-8 text-highlightBlack ">
            شارك وية اصدقائك بتنظيف مكان يمنطقتك واستخدم هاشتاك #اليوم_الوطني_للتنظيف , لأن الهدف من الحملة ننظف أكبر عدد من الأماكن بالعراق وننشر الوعي بأهمية
            الحفاظ على النظافة.
          </p>
        </div>
        <div>
          <Button
            type="button"
            role="link"
            aria-label="Join us"
            className="text-Button-L bg-[#EF466F] absolute top-0 right-0  md:top-10 md:right-8 lg:top-10 lg:right-32 rounded-lg hover:bg-[#EF466F]">
            سفراء النظافة
          </Button>
          <figure>
            <img
              className="h-[350px] sm:h-[400px] md:h-[500px] w-[450px] rounded-lg z-10"
              src={images.murtadha}
              alt="Campaign Picture"
            />
            <figcaption className="sr-only">Campaign Picture</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Info;
