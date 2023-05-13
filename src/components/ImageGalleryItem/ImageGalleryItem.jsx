import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ tags,
  smallImage,
  largeImage,
  openModal, }) => (
  <GalleryItem onClick={() => openModal({ largeUrl: largeImage, targetAlt: tags })}>
    <GalleryItemImg
    src={smallImage}
        alt={tags}
        loading="lazy"
        width={480}
        height={260}
    />
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;