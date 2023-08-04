/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const MobileNavbar = ({ setToggleMenu }) => {
  return (
    <nav
      role="dialog"
      aria-modal="true"
      className="fixed top-0 left-0 w-full h-full bg-highlightGrey flex justify-center items-center slide-bottom z-10  ">
      <AiOutlineClose
        size={'2.5rem'}
        className="fixed top-5 right-5 text-highlightBlack hover:text-primaryGreen "
        onClick={() => setToggleMenu(false)}
        aria-label="Close Menu"
      />
      <ul
        role="menu"
        className="flex flex-col items-center justify-center  space-y-5 text-2xl md:text-3xl  text-highlightBlack font-arabicMedium ">
        <li className="hover:text-primaryGreen tracking-wider">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to={'/'}
            role="menuitem">
            الرئيسية
          </NavLink>
        </li>
        <li className="hover:text-primaryGreen tracking-wider">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to={'/about'}
            role="menuitem">
            من نحن
          </NavLink>
        </li>
        <li className="hover:text-primaryGreen tracking-wider">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to={'/campagins'}
            role="menuitem">
            حملاتنا
          </NavLink>
        </li>
        <li className="hover:text-primaryGreen tracking-wider">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to={'/projects'}
            role="menuitem">
            مبادراتنا
          </NavLink>
        </li>
        <li className="hover:text-primaryGreen tracking-wider">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to="/blogs"
            role="menuitem">
            المدونة
          </NavLink>
        </li>
        <li className="hover:text-primaryGreen tracking-wider">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to={'/contact'}
            role="menuitem">
            اتصل بنا
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
