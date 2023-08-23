import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import images from '../../data/images';
import { scrollToTop } from '../../utils/scrollToTop';
import { useTranslation } from 'react-i18next';
import Modal from '../ContactForm/Modal';

const Footer = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <footer className="bg-highlightBlack px-2">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex flex-col gap-y-4 md:flex-row items-center justify-between">
        <div>
          <NavLink
            to={'/'}
            end>
            <div className="flex items-center">
              <figure>
                <img
                  className="w-[50px] sm:w-[75px] lg:w-[100px]"
                  src={images.navLogo}
                  alt="Clean Iraq Campaign Logo"
                />
                <figcaption className="sr-only">Clean Iraq Campaign Logo</figcaption>
              </figure>
            </div>
          </NavLink>
        </div>

        <div>
          <ul className="grid grid-cols-3 lg:grid-cols-7 justify-center gap-4 lg:gap-x-10 text-Subtitile-M text-highlightGrey">
            <li className="hover:text-primaryGreen">
              <NavLink
                onClick={scrollToTop}
                to="/"
                end>
                {t('navigation.home')}
              </NavLink>
            </li>
            <li className="hover:text-primaryGreen">
              <NavLink
                onClick={scrollToTop}
                to="/about">
                {t('navigation.about')}
              </NavLink>
            </li>
            <li className="hover:text-primaryGreen">
              <NavLink
                onClick={scrollToTop}
                to="/campaigns">
                {t('navigation.campaigns')}
              </NavLink>
            </li>
            <li className="hover:text-primaryGreen">
              <NavLink
                onClick={scrollToTop}
                to="/projects">
                {t('navigation.projects')}
              </NavLink>
            </li>
            <li className="hover:text-primaryGreen">
              <NavLink
                onClick={scrollToTop}
                to="/map">
                {t('navigation.map')}
              </NavLink>
            </li>
            <li className="hover:text-primaryGreen">
              <NavLink
                onClick={scrollToTop}
                to="/blogs">
                {t('navigation.blogs')}
              </NavLink>
            </li>
            <li className="hover:text-primaryGreen">
              <button className='relative start-16 lg:start-0' onClick={() => setOpen(true)}>{t('navigation.contact-us')}</button>
            </li>
          </ul>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
          />
        </div>

        <div>
          <div className="flex gap-3 mt-2 text-highlightGrey">
            <a
              href="https://www.instagram.com/clean.iraq/"
              className="hover:scale-110 transition-all duration-200 mx-2"
              aria-label="Instagram">
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/clean.iraq/"
              className="hover:scale-110 transition-all duration-200 mx-2"
              aria-label="Facebook">
              <FaFacebook />
            </a>
            <a
              href="https://youtu.be/nvzqgJXEdkk"
              className="hover:scale-110 transition-all duration-200 mx-2"
              aria-label="Instagram">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-2 border-gray-200/50 mx-auto w-[80vw]" />
      <small className="text-white block py-4 text-center"> {t('navigation.copyright')}</small>
    </footer>
  );
};

export default Footer;
