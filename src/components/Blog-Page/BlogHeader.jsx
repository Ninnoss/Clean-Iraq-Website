import images from "../../data/images"
import Button from "../Button"
export default function BlogHeader() {
    return (
        <>
        <header className="banner">
          <figure className="banner-img relative overflow-hidden">
            <img src={images.banner} alt="Banner Image" className=" max-w-full h-auto"/>
            <figcaption className="banner-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[56.25rem]">
              <h1 className=" text-Heading-3 my-5 mx-0">تأثير حملات التنظيف على البيئة المائية والحفاظ على الأنهار والبحيرات</h1>
              <p className=" text-[1.2rem] mb-5">يلا سجّلوا ويانه بحملة البصرة يوم الجمعة في شارع كورنيش التي نومة! يلا سجلوا</p>
              <Button
                  type="button"
                  role="link"
                  aria-label="Join us"
                  className="mt-10 px-3 py-1 tracking-wider lg:py-2 text-Button-M font-medium w-40">
                اقرأ المزيد  
                </Button>
            </figcaption>
          </figure>
        </header>
        <aside className=" bg-white h-[6.125rem] relative">
        <ul className="flex gap-10 absolute top-[35%] right-[5%]">
            
            <li className="flex justify-between order-3">
                <div className=" flex gap-2 justify-center items-center">
                <img src={images.facebookLogo} alt="facebook logo" className=" order-1"/>
                <span className=" text-xs">3.7 M</span>
                </div>
            </li>
            <li className="flex justify-between order-2">
                <div className=" flex gap-2 justify-center items-center">
                <img src={images.instagramLogo} alt="facebook logo" className=" order-1"/>
                <span className=" text-xs">2.4 M</span>
                </div>
            </li>
            <li className="flex justify-between order-1">
                <div className=" flex gap-2 justify-center items-center">
                <img src={images.youtubeLogo} alt="facebook logo" className=" order-1"/>
                <span className=" text-xs">2.4 M</span>
                </div>
            </li>
        </ul>
        </aside>
        </>
      )
}
