import { orbits } from '../../data/orbits';
import OrbitImage from './OrbitImage';

const CampaignFaces = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-evenly items-center px-2 md:px-16">
      <div className="relative flex justify-center items-center scale-[0.55] md:scale-90 xl:scale-100 h-[30rem] md:h-[38rem] lg:h-[42rem]  xl:animate-test">
        {/* Orbit 1 */}
        <div className="w-[10rem] h-[10rem] border-2 border-[##EFECEB] rounded-full absolute animate-orbit1">
          {orbits[0].map((item) => (
            <OrbitImage
              key={item.alt}
              {...item}
            />
          ))}
        </div>

        {/* Orbit 2*/}
        <div className="w-[20rem] h-[20rem] border-2 border-[##EFECEB] rounded-full absolute animate-orbit2">
          {orbits[1].map((item) => (
            <OrbitImage
              key={item.alt}
              {...item}
            />
          ))}
        </div>

        {/* Orbit 3*/}
        <div className="w-[30rem] h-[30rem] border-2 border-[##EFECEB] rounded-full absolute animate-orbit3">
          {orbits[2].map((item) => (
            <OrbitImage
              key={item.alt}
              {...item}
            />
          ))}
        </div>

        {/* Sun & Moon */}
        <div className="w-8 h-8 rounded-full bg-[#EBD96B] absolute -top-8 md:top-10 left-52 animate-sun"></div>
        <div className="w-6 h-6 rounded-full bg-[#EBD96B] absolute top-[500px] right-60 animate-sun"></div>
        <div className="w-3 h-3 rounded-full bg-[#89807A] absolute -top-8 md:top-36  right-52 animate-moon"></div>
        <div className="w-3 h-3 rounded-full bg-[#89807A] absolute top-[550px] left-60 animate-moon"></div>
      </div>

      <div className="max-w-sm relative lg:right-52 xl:right-72 text-center lg:text-right my-16 lg:mt-0 ">
        <h3 className="text-Heading-3">كن أحد وجوه الحملة ، شارك وأضف لمستك ومساهمتك لبلدك</h3>
      </div>
    </section>
  );
};

export default CampaignFaces;
