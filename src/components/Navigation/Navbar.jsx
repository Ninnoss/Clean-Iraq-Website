import { NavLink } from 'react-router-dom';
import images from '../../data/images';
import Button from '../Button';
import { HiMenuAlt2 } from 'react-icons/hi';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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
              <span className="text-md lg:text-xl text-black font-arabicMedium  md:font-arabicSemibold  mx-3 ">سفراء النظافة</span>
            </div>
          </NavLink>
        </div>

        {/* Mobile Menu */}
        {toggleMenu && <MobileNavbar setToggleMenu={setToggleMenu} />}

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-x-4 lg:gap-x-10  text-lg text-highlightBlack font-arabicMedium">
            <li className="hover:text-primaryGreen">
              <NavLink
                to="/"
                end>
                الرئيسية
              </NavLink>
            </li>
            <li className="hover:text-primaryGreen ">
              <NavLink to="/about">من نحن</NavLink>
            </li>
            <li className="hover:text-primaryGreen ">
              <NavLink to="/campaigns">حملاتنا</NavLink>
            </li>
            <li className="hover:text-primaryGreen ">
              <NavLink to="/projects">مبادراتنا</NavLink>
            </li>
            <li className="hover:text-primaryGreen ">
              <NavLink to="/blogs">المدونة</NavLink>
            </li>
            <li className="hover:text-primaryGreen ">
              <NavLink to="/contact">اتصل بنا</NavLink>
            </li>
          </ul>
        </div>
        <HiMenuAlt2
          className="md:hidden"
          onClick={() => setToggleMenu(true)}
          size={'1.5rem'}
          color="#202020"
          aria-label="Open Menu"
        />
        <Button className="rounded-3xl px-3 py-1 lg:px-4 lg:py-2 font-medium hidden md:block ">أنضم الينا</Button>
      </nav>
    </header>
  );
};

export default Navbar;
