import { useParams } from 'react-router-dom';
import { upcomingCampaigns } from '../../data/upcomingCampaigns';

const CampaignDetails = () => {
  const { campaignName } = useParams();

  // Find the campaign object based on the campaignName
  const selectedCampaign = upcomingCampaigns.find((campaign) => campaign.name === campaignName);

  // Render the details of the selected campaign
  if (selectedCampaign) {
    return (
      <section className="h-[40rem] text-center py-4">
        <h2>{selectedCampaign.name}</h2>
        <p>{selectedCampaign.description}</p>
        <p>Date: {selectedCampaign.date}</p>
        <p>Location: {selectedCampaign.place}</p>
        {/* <img src={selectedCampaign.img} /> */}
      </section>
    );
  } else {
    return (
      <section className="h-[40rem] text-center py-4">
        <div>Campaign not found.</div>
      </section>
    );
  }
};

export default CampaignDetails;
