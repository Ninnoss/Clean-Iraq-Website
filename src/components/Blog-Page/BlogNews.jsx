import MostImportent from './MostImportent';
import { blogData } from '../../data/blog';

export default function BlogNews() {
  return (
    <section className="py-8 px-6">
      <div className="flex justify-center flex-wrap gap-16">
        {blogData.map((blog, index) => (
          <MostImportent
            key={index}
            image={blog.image}
            title={blog.title}
            content={blog.content}
          />
        ))}
      </div>
    </section>
  );
}
