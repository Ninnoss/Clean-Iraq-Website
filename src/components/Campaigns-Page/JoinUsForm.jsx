import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button';

const JoinUsForm = () => {
  const { t } = useTranslation();
  const governorateOptions = t('campaigns-page.form-section.governorate.options', { returnObjects: true });

  const initialFormData = {
    name: '',
    age: '',
    number: '',
    sex: '',
    telegramId: '',
    occupation: '',
    governorate: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
    setFormData(initialFormData); // Clear the form fields
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-9/12 sm:w-7/12 md:w-6/12 lg:w-4/12  text-Body-L">
      <div className="w-full py-2">
        <label htmlFor="name">{t('campaigns-page.form-section.name.label')}</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={t('campaigns-page.form-section.name.placeholder')}
          value={formData.name}
          onChange={handleChange}
          className="form-inputs"
          required="true"
        />
      </div>

      <div className="w-full py-2">
        <label htmlFor="age">{t('campaigns-page.form-section.age.label')}</label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder={t('campaigns-page.form-section.age.placeholder')}
          min={10}
          value={formData.age}
          onChange={handleChange}
          className="form-inputs"
          required="true"
        />
      </div>

      <div className="w-full py-2">
        <label htmlFor="number">{t('campaigns-page.form-section.phone.label')}</label>
        <input
          type="number"
          id="number"
          name="number"
          placeholder={t('campaigns-page.form-section.phone.placeholder')}
          value={formData.number}
          onChange={handleChange}
          className="form-inputs"
          required="true"
        />
      </div>

      <div className="w-full py-2">
        <label htmlFor="sex">{t('campaigns-page.form-section.sex.label')}</label>
        <div>
          <label className="ml-3">
            <input
              className="ml-2"
              style={{ accentColor: '#ce8116' }}
              type="radio"
              value="male"
              id="sex"
              name="sex"
              checked={formData.sex === 'male'}
              onChange={handleChange}
              required="true"
            />
            {t('campaigns-page.form-section.sex.options.0')}
          </label>
          <label className="mr-3">
            <input
              className="ml-2"
              style={{ accentColor: '#ce8116' }}
              type="radio"
              value="female"
              id="sex"
              name="sex"
              checked={formData.sex === 'female'}
              onChange={handleChange}
              required="true"
            />
            {t('campaigns-page.form-section.sex.options.1')}
          </label>
        </div>
      </div>

      <div className="w-full py-2">
        <label htmlFor="telegram-id">{t('campaigns-page.form-section.telegram.label')}</label>
        <input
          type="text"
          id="telegram-id"
          name="telegramId"
          placeholder={t('campaigns-page.form-section.telegram.placeholder')}
          value={formData.telegramId}
          onChange={handleChange}
          className="form-inputs"
          required="true"
        />
      </div>

      <div className="w-full py-2">
        <label htmlFor="occupation">{t('campaigns-page.form-section.occupation.label')}</label>
        <select
          value={formData.occupation}
          onChange={handleChange}
          name="occupation"
          id="occupation"
          className="form-inputs">
          <option value="">{t('campaigns-page.form-section.occupation.options.0')}</option>
          <option value="student">{t('campaigns-page.form-section.occupation.options.1')}</option>
          <option value="free-businees">{t('campaigns-page.form-section.occupation.options.2')}</option>
          <option value="employee">{t('campaigns-page.form-section.occupation.options.3')}</option>
        </select>
      </div>

      <div className="w-full py-2">
        <label htmlFor="governorate">{t('campaigns-page.form-section.governorate.label')}</label>
        <p className="text-Body-S">{t('campaigns-page.form-section.governorate.note')}</p>
        <select
          id="governorate"
          name="governorate"
          value={formData.governorate}
          onChange={handleChange}
          className="form-inputs">
          <option value="">{t('campaigns-page.form-section.governorate.options.0')}</option>
          {governorateOptions.map((city, index) => (
            <option
              key={index}
              value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full text-center py-6">
        <p className="py-2 text-Subtitile-M font-bold">{t('campaigns-page.form-section.important-note')}</p>
        <p className="py-2 text-Subtitile-M">{t('campaigns-page.form-section.note')}</p>
      </div>

      <Button
        role="link"
        aria-label={t('campaigns-page.form-section.join-us-button')}
        className="mt-10 block mx-auto px-3 py-1 lg:px-6 tracking-wider lg:py-2 text-Button-M font-medium">
        {t('campaigns-page.form-section.join-us-button')}
      </Button>
    </form>
  );
};

export default JoinUsForm;
