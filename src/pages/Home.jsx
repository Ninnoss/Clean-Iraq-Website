import CampaignFAQ from '../components/Home-Page/CampaignFAQ';
import CampaignFaces from '../components/Home-Page/CampaignFaces';
import CampaignLocations from '../components/Home-Page/CampaignLocations';
import Hero from '../components/Home-Page/Hero';
import Info from '../components/Home-Page/Info';
import Stats from '../components/Home-Page/Stats';
import UpcomingEvents from '../components/Home-Page/UpcomingEvents';

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
    </main>
  );
};

export default Home;
