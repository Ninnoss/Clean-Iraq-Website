import CampaignsMap from './CampaingsMap';

const CampaignLocations = () => {
  return (
    <section className="bg-[#f6f6f6c2] py-16">
      <div className="text-center flex-col items-center md:w-[35rem] mx-auto ">
        <h6 className="text-[#777E90] text-Heading-6 ">سفراء النظافة</h6>
        <h2 className="text-Heading-3 md:text-Heading-1 text-highlightBlack tracking-wide">
          حملاتنة بكل مكان بالعراق <br /> <span className="text-primaryGreen">شتنتظر!</span> انضـــم وكون جزء من هذا التغيير
        </h2>
        <p className="text-Body-L text-[#777E90] mt-12 p-4 ">
          اغلب النفايات الي راح نجمعها راح نساهم بأعاده تدويرها! الي هيه:
          <br /> الزجاج البلاستك الالمنيوم اول خطوات إعادة التدوير هيه فرز النفايات
        </p>
      </div>
      <CampaignsMap />
    </section>
  );
};

export default CampaignLocations;
