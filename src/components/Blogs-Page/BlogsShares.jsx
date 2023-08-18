import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';

const BlogsShares = () => {
  return (
    <aside className="bg-white py-10 flex justify-start ms-16  items-center gap-3 ">
      <div className="flex items-center">
        <span className="mx-1">3.5k</span>
        <FaFacebookF />
      </div>
      <div className="flex items-center">
        <span className="mx-1">4.2k</span>
        <BiLogoInstagramAlt />
      </div>
      <div className="flex items-center">
        <span className="mx-1">2.3k</span>
        <FaYoutube />
      </div>
    </aside>
  );
};

export default BlogsShares;
