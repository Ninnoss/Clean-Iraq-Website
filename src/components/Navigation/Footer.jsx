import { useState } from 'react';
import Modal from '../Modal';
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import images from "../../data/images";
import { scrollToTop } from '../../utils/scrollToTop';

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className="bg-highlightBlack px-2">
      <div className="mx-auto  w-full max-w-screen-xl p-4 py-6 lg:py-8 flex flex-col gap-y-4 md:flex-row items-center justify-between">
        <div>
          <NavLink to={"/"} end>
            <div className="flex items-center">
              <figure>
                <img
                  className="w-[50px] sm:w-[75px] lg:w-[100px]"
                  src={images.navLogo}
                  alt="Clean Iraq Campaign Logo"
                />
                <figcaption className="sr-only">
                  Clean Iraq Campaign Logo
                </figcaption>
              </figure>
              {/* <span className="text-Heading-6 md:text-Heading-5 text-highlightGrey mx-3 ">
                سفراء النظافة
              </span> */}
            </div>
          </NavLink>
        </div>

        <div>
          <ul className="grid grid-cols-3 lg:grid-cols-6 justify-center gap-4 lg:gap-x-10  text-Subtitile-M text-highlightGrey">
            <li className="hover:text-primaryGreen">
              <NavLink onClick={scrollToTop} to="/" end>
                الرئيسية
              </NavLink>
            </li>
            <li className="hover:text-primaryGreen ">
              <NavLink onClick={scrollToTop} to="/about">
                من نحن
              </NavLink>
            </li>
            <li className="hover:text-primaryGreen">
              <NavLink onClick={scrollToTop} to="/campaigns">
                حملاتنا
              </NavLink>
            </li>
            <li className="hover:text-primaryGreen">
              <NavLink onClick={scrollToTop} to="/projects">
                مبادراتنا
              </NavLink>
            </li>
            <li className="hover:text-primaryGreen">
              <NavLink onClick={scrollToTop} to="/blogs">
                المدونة
              </NavLink>
            </li>
            <li className="hover:text-primaryGreen">
            <button onClick={() => setOpen(true)}>اتصل بنا</button>
            </li>
          </ul>
          <Modal open={open} onClose={() => setOpen(false)} />
        </div>

        <div>
          <div className="flex gap-3 mt-2 text-highlightGrey">
            <a
              href="#"
              className=" hover:scale-110 transition-all duration-200 mx-2"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className=" hover:scale-110 transition-all duration-200 mx-2"
              aria-label="Instagram"
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              className=" hover:scale-110 transition-all duration-200 mx-2"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className=" hover:scale-110 transition-all duration-200 mx-2"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-2 border-gray-200/50 mx-auto w-[80vw]" />
      <small className="text-white block py-4 text-center">
        © 2023 حملة تنضيف العراق™. كل الحقوق محفوظة.
      </small>
    </footer>
  );
};

export default Footer;
