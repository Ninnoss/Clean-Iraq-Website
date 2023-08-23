import BlogHeader from '../components/Blogs-Page/BlogHeader';
import BlogNews from '../components/Blogs-Page/BlogNews';
import BlogsShares from '../components/Blogs-Page/BlogsShares';
import LatestNews from '../components/Blogs-Page/LatestNews';

const Blogs = () => {
  return (
    <>
      <BlogHeader />
      <BlogsShares />
      <LatestNews />
      <BlogNews />
    </>
  );
};

export default Blogs;
