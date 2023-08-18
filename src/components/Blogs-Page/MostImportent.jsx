import './blog.css';
import images from '../../data/images';
export default function MostImportent(props) {
  return (
    <>
      <article className="flex flex-col justify-center items-center ">
        {/* this is the image wrapper */}
        <div className="wrapper overflow-hidden flex justify-center items-center rounded-lg max-h-[350px]">
          {/* this is the image it needs to be wrapped in a dev for the zoom effect */}
          <div
            className="test child"
            style={{ backgroundImage: `url(${props.image}` }}></div>
        </div>
        <section className="flex flex-col gap-2">
          <div className="h-[64px]">
            <h3 className="effect relative text-Heading-5 max-w-[350px]">{props.title}</h3>
          </div>

          <div className="flex justify-center items-center gap-5 ">
            <div className="flex order-1 gap-2 ">
              <img
                src={images.share}
                alt="share logo"
                className=" order-1"
              />
              <p className=" text-[#6C757D]">1K مشاركة</p>
            </div>
            <div className="flex gap-4 ">
              <span className=" order-1">
                <img
                  src={images.dot}
                  alt="dor"
                  className=" pt-2"
                />
              </span>
              <p className=" text-[#6C757D]">مايو 28, 2018</p>
            </div>
          </div>
          
          <div className="max-w-[350px] flex flex-col gap-2">
            <p className="text-[#6C757D]">{props.content}</p>
            <div>
              <button className="text-[#548C67] underline">اقرأ المزيد</button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
