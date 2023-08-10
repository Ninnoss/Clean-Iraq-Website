





import Stats from "../components/Home-Page/Stats";
import SuggestionForm from "../components/Project-Page/EventForm/SuggestionForm";
import PrevEvents from "../components/Project-Page/PrevEvents/PrevEvents";
import Testimonial from "../components/Project-Page/Testimonial/Testimonial";
import tesimonialData from "../data/TestimonialData";
const Projects = () => {
  const testimonialsData = tesimonialData;
  return (
    <>
    <h1 className=' text-center text-[1.25 rem] text-primaryOrange font-bold'>سفراء النظافة بكل مكان</h1>
    <p className='text-center font-bold text-[2.5rem]'>
    بجهودكم وبمشاركتكم راح نحقق الأفضل لبلدنا تعالوا ننظف سوة
    </p>
    <Stats />
    <PrevEvents />
    <Testimonial testimonials={testimonialsData}/>
    <SuggestionForm />

    </>
  )
};

export default Projects;
