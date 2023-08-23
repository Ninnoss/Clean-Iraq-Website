/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from '..//ContactForm/Modal';

const MobileNavbar = ({ setToggleMenu, open, setOpen }) => {
  const { t } = useTranslation();

  return (
    <nav
      role="dialog"
      aria-modal="true"
      className="fixed top-0 left-0 w-full h-full bg-highlightGrey flex justify-center items-center slide-bottom z-10">
      <AiOutlineClose
        size={'2.2rem'}
        className="fixed top-5 right-5 text-highlightBlack hover:text-primaryGreen "
        onClick={() => setToggleMenu(false)}
        aria-label={t('navigation.close-menu')}
      />
      <ul
        role="menu"
        className="flex flex-col items-center justify-center space-y-5 text-Subtitile-M text-highlightBlack">
        <li className="hover:text-primaryGreen tracking-wider">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to="/"
            role="menuitem">
            {t('navigation.home')}
          </NavLink>
        </li>
        <li className="hover:text-primaryGreen tracking-wider">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to="/about"
            role="menuitem">
            {t('navigation.about')}
          </NavLink>
        </li>
        <li className="hover:text-primaryGreen tracking-wider">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to="/campaigns"
            role="menuitem">
            {t('navigation.campaigns')}
          </NavLink>
        </li>
        <li className="hover:text-primaryGreen tracking-wider">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to="/projects"
            role="menuitem">
            {t('navigation.projects')}
          </NavLink>
        </li>
        <li className="hover:text-primaryGreen tracking-wider">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to="/map"
            role="menuitem">
            {t('navigation.map')}
          </NavLink>
        </li>
        <li className="hover:text-primaryGreen tracking-wider">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to="/blogs"
            role="menuitem">
            {t('navigation.blogs')}
          </NavLink>
        </li>
        <li className="hover:text-primaryGreen tracking-wider">
          <button onClick={() => setOpen(true)}>{t('navigation.contact-us')}</button>
        </li>
      </ul>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      />
    </nav>
  );
};

export default MobileNavbar;
