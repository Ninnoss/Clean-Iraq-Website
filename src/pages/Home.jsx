import CampaignFAQ from "../components/Home-Page/CampaignFAQ";
import CampaignFaces from "../components/Home-Page/Campaign-Faces/CampaignFaces";
import CampaignLocations from "../components/Home-Page/CampaignLocations";
import Hero from "../components/Home-Page/Hero";
import Info from "../components/Home-Page/Info";
import Newsletter from "../components/Home-Page/Newsletter";
import Stats from "../components/Home-Page/Stats/Stats";
import UpcomingEvents from "../components/Home-Page/UpcomingEvents";

const Home = () => {
  return (
    <main>
      <Hero />
      <Info />
      <Stats />
      <UpcomingEvents />
      <CampaignFaces />
      <CampaignLocations />
      <CampaignFAQ />
      <Newsletter />
    </main>
  );
};

export default Home;
