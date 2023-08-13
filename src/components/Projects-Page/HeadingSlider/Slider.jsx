import './Slider.css'

export default function Slider() {
  return (
    <div className="frame css-challenge-day-73 text-center overflow-hidden flex items-center justify-center text-Heading-3 mb-2">
    <div className="center flex-row flex items-center justify-center relative h-[50px] overflow-hidden gap-2">
      <div className="label flex items-center h-[50px] leading-[100%]">نحن</div>
      <div className="title ">
        <div className="name leading-[100%] flex items-center h-[50px] font-bold ml-[10px] text-primaryOrange">نتعاون</div>
        <div className="name leading-[100%] flex items-center h-[50px] font-bold ml-[10px] text-primaryOrange">ننظف</div>
        <div className="name leading-[100%] flex items-center h-[50px] font-bold ml-[10px] text-primaryOrange">نزرع</div>
        <div className="name leading-[100%] flex items-center h-[50px] font-bold ml-[10px] text-primaryOrange">نعيد تدوير</div>
        <div className="name leading-[100%] flex items-center h-[50px] font-bold ml-[10px] text-primaryOrange">نوصل رسالة</div>
      </div>
    </div>
  </div>
  )
}
