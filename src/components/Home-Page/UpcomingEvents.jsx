import Card from "../Card";
import { events } from "../../data/events";
import Button from "../Button";

const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-[#FAFBFA]">
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-Heading-2 text-center">حملاتنا </h2>
        <p className="text-center text-Body-S md:text-Body-L max-w-lg mt-8 text-highlightBlack">
          رسالتنا لجميع المؤسسات، الشركات، الدوائر، وسائل الإعلام.. ينضمون ويانه
          ويدعمـــون الحملة حتى نســـاهم سوية بالتغيير بيــــوم يجمـــــــع كلّ
          العراقيين تحت شعار <strong>#اليوم_الوطني_للتنظيف.</strong>
        </p>
      </div>
      <div className="pt-24 pb-6 flex justify-center flex-wrap gap-8">
        {events.map((event) => (
          <Card
            key={event.title}
            name={event.title}
            description={event.description}
            img={event.img}
          />
        ))}
      </div>
      <Button
        type="button"
        role="link"
        aria-label="Join us"
        className="mt-10 px-3 py-1 lg:px-6 tracking-wider lg:py-2 text-Button-M font-medium mx-auto block text-center"
      >
        أنضم الينا
      </Button>
    </section>
  );
};

export default UpcomingEvents;
