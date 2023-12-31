import { useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import Button from '../Button';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail('');
  };

  return (
    <section className="bg-lightPeach py-14 px-4 ">
      <div className="text-center mb-10">
        <h3 className="text-Heading-3 ">{t('home-page.newsletter-section.header')}</h3>
        <p className="text-highlightBlack text-Body-L mt-10 ">{t('home-page.newsletter-section.paragraph')}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-6 md:flex-row justify-center items-center">
        <div className="flex bg-white rounded-full shadow-md">
          <label
            htmlFor="newsletter"
            className="p-3">
            <MdOutlineEmail
              size={25}
              color="grey"
            />
          </label>
          <input
            className="rounded-full p-3 focus:outline-none "
            id="newsletter"
            name="email"
            type="email"
            placeholder={t('home-page.newsletter-section.input-placeholder')}
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <Button
          aria-label={t('home-page.newsletter-section.subscribe-button')}
          className="mx-6 px-3 py-1 lg:px-6 tracking-wider lg:py-2 text-Button-M font-medium">
          {t('home-page.newsletter-section.subscribe-button')}
        </Button>
      </form>
    </section>
  );
};

export default Newsletter;
