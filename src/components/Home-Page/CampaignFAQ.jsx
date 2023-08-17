import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CampaignFAQ = () => {
  const { t } = useTranslation();
  const [selectedIdx, setSelectedIdx] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedIdx(selectedIdx === index ? null : index);
  };

  return (
    <section className="py-16">
      <h2 className="text-Heading-2 text-center mb-8">{t('home-page.faq-section.header')}</h2>
      <div className="flex justify-center items-center">
        <div className="md:w-8/12 lg:w-5/12 p-6">
          <div className="space-y-4">
            {t('home-page.faq-section.faq-data', { returnObjects: true }).map((item, index) => (
              <div key={index}>
                <div
                  className="cursor-pointer border border-gray-200 rounded-sm p-3 bg-white transition-all duration-300 ease-in-out"
                  onClick={() => toggleQuestion(index)}>
                  <div>
                    <span className={`transition-transform font-semibold text-xl mx-2`}>{selectedIdx === index ? '-' : '+'}</span>
                    {item.question}
                  </div>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out max-h-0 p-1 ${selectedIdx === index ? 'max-h-screen' : ''}`}>
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
