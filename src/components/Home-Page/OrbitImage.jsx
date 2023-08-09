/* eslint-disable react/prop-types */
const OrbitImage = ({ img, alt, top, left }) => {
  return (
    <figure>
      <img
        className={`w-20 h-20 rounded-full absolute ${top} ${left}`}
        src={img}
        alt={alt}
      />
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
};
export default OrbitImage;
