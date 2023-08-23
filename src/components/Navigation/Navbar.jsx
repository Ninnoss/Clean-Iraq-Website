import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MobileNavbar from './MobileNavbar';
import Button from '../Button';
import images from '../../data/images';
import { HiMenuAlt2 } from 'react-icons/hi';
import { scrollToTop } from '../../utils/scrollToTop';
import DesktopMenus from './DesktopMenus';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation(); 
  const [toggleMenu, setToggleMenu] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="flex justify-between md:justify-around items-center px-4 py-2 border-b-[#DDE1E6] border-[1px] relative">
        <div>
          <NavLink
            to="/"
            end>
            <div className="flex items-center">
              <figure>
                <img
                  className="w-[50px] sm:w-[75px] lg:w-[100px]"
                  src={images.navLogo}
                  alt={t('navigation.home')}
                />
                <figcaption className="sr-only">{t('navigation.home')}</figcaption>
              </figure>
            </div>
          </NavLink>
        </div>

        {/* Mobile Menu */}
        {toggleMenu && (
          <MobileNavbar
            open={open}
            setOpen={setOpen}
            setToggleMenu={setToggleMenu}
          />
        )}

        {/* Desktop Menu */}
        <DesktopMenus
          open={open}
          setOpen={setOpen}
        />

        {/* Hamburger button */}
        <HiMenuAlt2
          className="md:hidden"
          onClick={() => setToggleMenu(true)}
          size={'1.5rem'}
          color="#202020"
          aria-label={t('navigation.join-us-button')}
        />

        <NavLink
          to="/campaigns"
          className="hidden md:block md:me-16">
          <Button
            onClick={scrollToTop}
            type="button"
            role="link"
            aria-label={t('navigation.join-us-button')}
            className="rounded-3xl px-3 py-1 lg:px-4 lg:py-2 text-Button-M font-medium">
            {t('navigation.join-us-button')}
          </Button>
        </NavLink>
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Navbar;
