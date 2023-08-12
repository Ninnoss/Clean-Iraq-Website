/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from '../Modal';
const MobileNavbar = ({ setToggleMenu }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      role="dialog"
      aria-modal="true"
      className="fixed top-0 left-0 w-full h-full bg-highlightGrey flex justify-center items-center slide-bottom z-10">
      <AiOutlineClose
        size={'2.5rem'}
        className="fixed top-5 right-5 text-highlightBlack hover:text-primaryGreen "
        onClick={() => setToggleMenu(false)}
        aria-label="Close Menu"
      />
      <ul
        role="menu"
        className="flex flex-col items-center justify-center space-y-5 text-Subtitile-M text-highlightBlack">
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
        <button onClick={() => setOpen(true)}>اتصل بنا</button>
        </li>
      </ul>
      <Modal open={open} onClose={() => setOpen(false)} />
    </nav>
  );
};

export default MobileNavbar;
