/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import Modal from '../ContactForm/Modal';

const DesktopMenus = ({ open, setOpen }) => {
  return (
    <div className="hidden md:block">
      <ul className="flex gap-x-4 lg:gap-x-10 text-Subtitile-M  text-highlightBlack">
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
          <button onClick={() => setOpen(true)}>اتصل بنا</button>
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
