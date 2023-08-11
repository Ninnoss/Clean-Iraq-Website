import { useState } from "react";
import { faqData } from "../../data/faqData";

const CampaignFAQ = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedIdx(selectedIdx === index ? null : index);
  };

  return (
    <section className="py-16">
      <h2 className="text-Heading-2 text-center mb-8">الأسئلة الشائعة</h2>
      <div className="flex justify-center items-center">
        <div className="md:w-8/12 lg:w-6/12 p-6">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index}>
                <div
                  className="cursor-pointer border border-gray-200 rounded-sm p-3 bg-white transition-all duration-300 ease-in-out transform "
                  onClick={() => toggleQuestion(index)}
                >
                  <div>
                    <span
                      className={`transition-transform  font-semibold text-xl ml-4 transform ${
                        selectedIdx === index ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                    {item.question}
                  </div>
                </div>
                <div
                  className={`faq-answer overflow-hidden transition-all duration-300 ease-in-out max-h-0 ${
                    selectedIdx === index ? "max-h-screen" : ""
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignFAQ;
