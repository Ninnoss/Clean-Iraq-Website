import { useState } from 'react';
import Button from '../Button';
import { useTranslation, Trans } from 'react-i18next';

const SuggestionForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: '',
      message: '',
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="relative">
        <h2 className="text-center text-Heading-3 text-[#23262F] mb-10 ">
          <Trans
            i18nKey="projects-page.suggestions-form-section.header"
            components={{ span: <span className="scratch-effect bg-[#FAD7B5]" /> }}
          />
        </h2>
      </div>

      <form
        className="mx-auto w-9/12 sm:w-7/12 md:w-6/12 lg:w-3/12"
        onSubmit={handleSubmit}>
        <fieldset className="mb-8">
          <label
            htmlFor="email"
            className="block mb-3 text-[#777E90]">
            {t('projects-page.suggestions-form-section.input.email')}
          </label>
          <input
            className="form-inputs"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset>
          <label
            htmlFor="message"
            className="block mb-3 text-[#777E90]">
            {t('projects-page.suggestions-form-section.input.message')}
          </label>
          <textarea
            className="form-inputs !h-24 md:!h-44"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            minLength={50}></textarea>
        </fieldset>

        <Button
          role="submit"
          aria-label={t('projects-page.suggestions-form-section.input.submit-button')}
          className="mt-10 px-3 py-1 mx-auto block lg:px-6 tracking-wider lg:py-2 text-Button-M font-medium">
          {t('projects-page.suggestions-form-section.input.submit-button')}
        </Button>
      </form>
    </section>
  );
};

export default SuggestionForm;
