import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import Button from '../Button';
import images from '../../data/images';
import { HiMenuAlt2 } from 'react-icons/hi';
import { scrollToTop } from '../../utils/scrollToTop';
import DesktopMenus from './DesktopMenus';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="flex justify-between md:justify-around items-center px-4 py-2 border-b-[#DDE1E6] border-[1px]">
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
              {/* <span className="text-Heading-6 md:text-Heading-5 text-black font-medium mx-3 ">
                سفراء النظافة
              </span> */}
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
          aria-label="Open Menu"
        />

        <NavLink
          to={`/campaigns`}
          className={`hidden md:block `}>
          <Button
            onClick={scrollToTop}
            type="button"
            role="link"
            aria-label="Join us"
            className="rounded-3xl px-3 py-1 lg:px-4 lg:py-2 text-Button-M font-medium">
            أنضم الينا
          </Button>
        </NavLink>
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Navbar;
