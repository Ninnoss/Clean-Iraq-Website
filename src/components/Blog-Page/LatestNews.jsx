import './blog.css'
import images from "../../data/images"

export default function LatestNews() {
  return (
    <article className=" bg-highlightGrey h-[235px] relative flex">
        <h2 className="lightgreen text-Heading-5 absolute top-[8%] right-[3%]">اخر المقالات</h2>
       <section className="flex items-center w-full mr-[5%]">
      <figure className=" flex justify-center items-center gap-3">
        <div className='parent overflow-hidden rounded-lg'>
        <img
          src={images.latest1}
          alt={"latest news"}
          loading="lazy"
          className='child h-full w-full object-cover '
        />
        </div>
        <figcaption className=' w-[300px]'>
            <div className=" flex flex-col gap-1 flex-wrap w-[65%] pt-2">
            <h4 className=" effect relative font-bold text-[16px]">أهمية حملات التنظيف في الحفاظ على البيئة والصحة</h4>
            <p className=" text-sm text-[#020202] pt-1">يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التي نومة! يلا سجلو ...</p>
            </div>
        </figcaption>
     </figure>
      <figure className=" flex justify-center items-center gap-3">
        <div className='parent overflow-hidden rounded-lg'>
        <img
          src={images.latest1}
          alt={"latest news"}
          loading="lazy"
          className='child h-full w-full object-cover '
        />
        </div>
        <figcaption className=' w-[300px]'>
            <div className=" flex flex-col gap-1 flex-wrap w-[65%] pt-2">
            <h4 className=" effect relative font-bold text-[16px]">أهمية حملات التنظيف في الحفاظ على البيئة والصحة</h4>
            <p className=" text-sm text-[#020202] pt-1">يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التي نومة! يلا سجلو ...</p>
            </div>
        </figcaption>
     </figure>
      <figure className=" flex justify-center items-center gap-3">
        <div className='parent overflow-hidden rounded-lg'>
        <img
          src={images.latest1}
          alt={"latest news"}
          loading="lazy"
          className='child h-full w-full object-cover '
        />
        </div>
        <figcaption className=' w-[300px]'>
            <div className=" flex flex-col gap-1 flex-wrap w-[65%] pt-2">
            <h4 className=" effect relative font-bold text-[16px]">أهمية حملات التنظيف في الحفاظ على البيئة والصحة</h4>
            <p className=" text-sm text-[#020202] pt-1">يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التي نومة! يلا سجلو ...</p>
            </div>
        </figcaption>
     </figure>

        </section>
    </article>
  )
}
