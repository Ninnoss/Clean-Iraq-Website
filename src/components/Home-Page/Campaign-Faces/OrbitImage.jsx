/* eslint-disable react/prop-types */
const OrbitImage = ({ img, alt, top, left }) => {
  return (
    <figure className="group">
      <img
        className={`w-20 h-20 rounded-full absolute ${top} ${left} duration-300 transition-all group-hover:scale-150`}
        src={img}
        alt={alt}
      />
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
};
export default OrbitImage;
