/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from '../Button';
import { useTranslation } from 'react-i18next';

const ContactForm = ({ onClose }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    onClose();
  };

  // const handleInputClick = (e) => {
  //   e.stopPropagation();
  // };

  return (
    <div className="w-[300px]  md:w-[500px]">
      <form
        className="mx-auto mt-10 w-10/12 md:w-8/12 lg:w-9/12"
        onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-1  text-[#777E90]">
            {t('contact-us.name')}
          </label>
          <input
            className="form-inputs h-10 md:h-10"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            // onClick={handleInputClick}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-1 text-[#777E90]">
            {t('contact-us.email')}
          </label>
          <input
            className="form-inputs h-10 md:h-10"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            // onClick={handleInputClick}
            required
          />
        </div>

        <label
          htmlFor="message"
          className="block mb-1 text-[#777E90]">
          {t('contact-us.message')}
        </label>
        <textarea
          className="form-inputs !h-24 md:!h-44"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          // onClick={handleInputClick}
          rows="4"
          required></textarea>

        <Button
          role="submit"
          aria-label={t('contact-us.submit-button')}
          className="mt-10 px-3 py-1 mx-auto block lg:px-6 tracking-wider lg:py-2 text-Button-M font-medium">
          {t('contact-us.submit-button')}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
