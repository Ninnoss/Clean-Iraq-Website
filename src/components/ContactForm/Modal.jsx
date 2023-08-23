/* eslint-disable react/prop-types */
import { AiOutlineClose } from 'react-icons/ai';
import ContactForm from '../ContactForm/ContactForm';
import { useTranslation } from 'react-i18next';
// import { useRef } from 'react';
// import useOutsideClick from '../../hooks/useOutsideClick';

const Modal = ({ open, onClose }) => {
  const { t } = useTranslation();
  
  // const modalRef = useRef(null);
  // useOutsideClick(modalRef, onClose);

  return (
    <div className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${open ? 'visible bg-black/20' : 'invisible'}`}>
      <div
        // ref={modalRef}
        role="dialog"
        aria-labelledby="modal-title"
        className={`bg-white rounded-xl shadow p-6 transition-all ${open ? ' scale-100 opacity-100' : 'opacity-0'}`}>
        <h1
          id="modal-title"
          className="text-[#191C1A] text-Heading-5 absolute top-2 start-2 p-2">
          {t('contact-us.header')}
        </h1>
        <button
          onClick={onClose}
          className="absolute top-2 end-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-200 hover:text-gray-600">
          <AiOutlineClose size={30} />
        </button>
        <ContactForm onClose={onClose} />
      </div>
    </div>
  );
};

export default Modal;
