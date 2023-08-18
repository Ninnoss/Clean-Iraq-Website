/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Modal from '../ContactForm/Modal';

const DesktopMenus = ({ open, setOpen }) => {
  const { t } = useTranslation();

  return (
    <div className="hidden md:block">
      <ul className="flex gap-x-4 lg:gap-x-10 text-Subtitile-M text-highlightBlack">
        <li className="hover:text-primaryGreen">
          <NavLink
            to="/"
            end>
            {t('navigation.home')}
          </NavLink>
        </li>
        <li className="hover:text-primaryGreen">
          <NavLink to="/about">{t('navigation.about')}</NavLink>
        </li>
        <li className="hover:text-primaryGreen">
          <NavLink to="/campaigns">{t('navigation.campaigns')}</NavLink>
        </li>
        <li className="hover:text-primaryGreen">
          <NavLink to="/projects">{t('navigation.projects')}</NavLink>
        </li>
        <li className="hover:text-primaryGreen">
          <NavLink to="/blogs">{t('navigation.blogs')}</NavLink>
        </li>
        <li className="hover:text-primaryGreen">
          <button onClick={() => setOpen(true)}>{t('navigation.contact-us')}</button>
        </li>
      </ul>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default DesktopMenus;
