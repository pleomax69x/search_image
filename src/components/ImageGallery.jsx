import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ pics }) => {
  console.log(pics);
  return (
    <ul className="ImageGallery">
      {pics.map((pic) => (
        <ImageGalleryItem data={pic} />
      ))}
      {/* <ImageGallery /> */}
    </ul>
  );
};

export default ImageGallery;
