import Button from '../Button'
import images from '../../data/images'

const JoinTeam = () => {
    return (
      <section className=" p-20 flex gap-14 flex-wrap lg:flex-nowrap justify-center">
        <div className=" pt-6 pb-8 flex flex-col justify-items-start text-start max-w-[50%]">
            <h2 className="text-Heading-2">كون جزء من هذا الفريق</h2>
            <p className="text-Body-L pt-12 pb-12">اكثر من٥٠ حمله في اغلب محافظات العراق شارك بيها اكثر من ١٠ الاف متطوع ونظفنا بيها كيلومترات من الأنهار وجمعنا اكثر من ٧٥ الف كيس زباله انضم النة واترك بصمه جبيره بانتشار ونجاح الحملة مع فريق سفراء النظافة و المتطوعين الابطال الي شتغلو ليل نهار خلف الكواليس بكل صدق وحب لهذا البلد.</p>
            <Button
              type="button"
              role="link"
              aria-label="Join us"
              className="my-5 tracking-wider text-Button-M block mx-auto font-medium">
              انضم الينا
            </Button >
        </div>

        <div>
            <figure>
                <img
                className="w-[575px] h-[345px] rounded-lg"
                src={images.teamSectionMember}
                loading="lazy"
                alt={'Team member photo'}
                />
                <figcaption className="sr-only">{'Team member photo'}</figcaption>
            </figure>
        </div>
      </section>
    );
  };
  
  export default JoinTeam;