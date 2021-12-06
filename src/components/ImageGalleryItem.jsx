const ImageGalleryItem = ({ data }) => {
  console.log(data.webformatURL);
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItemImage"
        src={data.webformatURL}
        alt={data.tags}
      />
    </li>
  );
};

export default ImageGalleryItem;
