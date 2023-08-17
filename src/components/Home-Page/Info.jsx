import { useState, useEffect } from 'react';
import images from '../../data/images';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player/file';
import { BsFillPlayFill, BsPauseFill, BsVolumeMute, BsVolumeUpFill } from 'react-icons/bs';
import { useTranslation, Trans } from 'react-i18next';

const Info = () => {
  const { t } = useTranslation();
  const [playVideo, setPlayVideo] = useState(false);
  const [muted, setMuted] = useState(true);

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
  const handleMuteToggle = () => {
    setMuted(!muted);
  };

  return (
    <section className="bg-[#f6f6f6c2] py-16 px-8 relative">
      <div className="flex flex-col md:flex-row gap-14 justify-around items-top">
        <div>
          <h2 className="text-Heading-2 ">{t('home-page.info-section.header')}</h2>
          <p className="text-Body-S md:text-Body-L max-w-lg mt-8 text-highlightBlack ">
            <Trans
              i18nKey="home-page.info-section.paragraph"
              components={{ strong: <strong /> }}
            />
          </p>
        </div>
        <div
          ref={ref}
          className="md:h-[360px] relative overlay  rounded-lg overflow-hidden">
          <ReactPlayer
            url={images.video}
            playing={playVideo}
            playsinline={true}
            type="video/mp4"
            loop={true}
            muted={muted}
            width="100%"
            height="100%"
          />
          <div
            className="absolute bottom-4 right-4 cursor-pointer z-10"
            onClick={handleMuteToggle}>
            {muted ? (
              <BsVolumeMute
                color="white"
                size={24}
              />
            ) : (
              <BsVolumeUpFill
                color="white"
                size={24}
              />
            )}
          </div>

          <div
            onClick={handleVideoToggle}
            className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-primaryGreen flex items-center justify-center cursor-pointer">
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
