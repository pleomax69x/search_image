const ImageGalleryItem = ({ data, showModal }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={() => showModal(data.largeImageURL)}
        className="ImageGalleryItemImage"
        src={data.webformatURL}
        alt={data.tags}
      />
    </li>
  );
};

export default ImageGalleryItem;
