import images from "../../data/images";
// import Button from '../Button';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player/file';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const Info = () => {
   const [playVideo, setPlayVideo] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    setPlayVideo(inView);
  }, [inView]);

  const handleVideoToggle = () => {
    setPlayVideo(!playVideo);
  };
  return (
    <section className="bg-[#f6f6f6c2] py-16 px-8 relative">
      <div className="flex flex-col md:flex-row gap-14 justify-around items-center">
        <div>
          <h2 className="text-Heading-2 ">بعيد وما تكدر تتواجد ويانه؟</h2>
          <p className="text-Body-S md:text-Body-L max-w-lg mt-8 text-highlightBlack ">
            شارك وية اصدقائك بتنظيف مكان يمنطقتك واستخدم هاشتاك{" "}
            <strong>#اليوم_الوطني_للتنظيف</strong> لأن الهدف من الحملة ننظف أكبر
            عدد من الأماكن بالعراق وننشر الوعي بأهمية الحفاظ على النظافة.
          </p>
        </div>
      <div ref={ref} className="h-[350px] sm:h-[400px] md:h-[500px]  relative overlay  rounded-lg overflow-hidden">
      <ReactPlayer
        url={images.video}
        playing={playVideo}
        type="video/mp4"
        loop={true}
        muted={true}
        width="100%"
        height="100%"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-12 h-12 rounded-full border-2 border-primaryGreen flex items-center justify-center cursor-pointer"
          onClick={handleVideoToggle}>
          {playVideo ? (
            <BsPauseFill
              color="#fff"
              fontSize={30}
            />
          ) : (
            <BsFillPlayFill
              color="#fff"
              fontSize={30}
            />
          )}
        </div>
      </div>
    </div>

    </div>
    </section>
  );
};

export default Info;