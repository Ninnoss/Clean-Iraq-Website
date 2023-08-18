import { useTranslation } from 'react-i18next';
import JoinUsForm from './JoinUsForm';

const JoinUs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <header className="text-center">
        <h2 className="text-Heading-2 text-primaryOrange">{t('campaigns-page.form-section.header')}</h2>
        <h5 className="text-Heading-5 text-highlightBlack">{t('campaigns-page.form-section.secondary-header')}</h5>
      </header>

      <JoinUsForm />
    </section>
  );
};

export default JoinUs;
