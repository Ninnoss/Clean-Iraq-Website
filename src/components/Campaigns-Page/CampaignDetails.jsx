import { useParams } from 'react-router-dom';
import { upcomingCampaigns } from '../../data/upcomingCampaigns';
import pin from '../../assets/Imgs/location.svg';
import JoinUs from './JoinUs';

const CampaignDetails = () => {
  const { campaignName } = useParams();

  // Find the campaign object based on the campaignName
  const selectedCampaign = upcomingCampaigns.find((campaign) => campaign.name === campaignName);

  // Render the details of the selected campaign
  if (selectedCampaign) {
    return (
      <>
        <section className="text-center py-20 px-40 flex gap-20 bg-highlightGrey">
          <div>
            <img 
              className="w-[274px] rounded-2xl border border-[#DDE1E6]"
              src={selectedCampaign.img}
              />
          </div>
        
          <div className="text-start max-w-[600px] pt-8">
            <h2 className="text-Heading-2">{selectedCampaign.name}</h2>
            <p className="text-Body-L text-highlightBlack">{selectedCampaign.description}</p>
            
            <div className="text-Heading-6 flex justify-between pt-10">
              <h6 className="text-primaryGreen"><img src={pin} alt="pin" className="inline-block" /> {selectedCampaign.place}</h6>
              <h6 className="text-highlightBlack">{selectedCampaign.date}</h6>
            </div>
            
          </div>
        </section>

        <JoinUs />
      </>
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
