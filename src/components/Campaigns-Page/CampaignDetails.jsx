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
        <section className="text-center pt-12 pb-6 px-4 lg:py-20 lg:px-40 flex flex-col sm:flex-row gap-20 bg-highlightGrey">
          <div>
            <img 
              className="min-w-[200px] max-w-[274px] rounded-2xl border inline-block border-[#DDE1E6]"
              src={selectedCampaign.img}
              />
          </div>
        
          <div className="text-start max-w-[600px] pt-6 sm:pt-8">
            <h2 className="text-Heading-4 pb-5">{selectedCampaign.name}</h2>
            <p className="text-Body-M text-highlightBlack">{selectedCampaign.description}</p>
            
            <div className="text-Heading-6 flex justify-between pt-10">
              <h6 className="text-primaryGreen text-Subtitile-M"><img src={pin} alt="pin" className="inline-block" /><strong> {selectedCampaign.place}</strong></h6>
              <h6 className="text-highlightBlack text-Subtitile-M"><strong>{selectedCampaign.date}</strong></h6>
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
