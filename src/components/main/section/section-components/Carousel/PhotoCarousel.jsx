import {
  Photo,
  CardPhotoContainer,
} from 'components/main/section/section-components/Carousel/styled';
import clsx from 'clsx';
import { slidePhoto } from 'components/main/section/section-components/Carousel/styles';

export default function PhotoCarousel({ alt, src, exit, enter }) {
  const photoAnimationStyles = slidePhoto();

  const animatedPhoto = `${clsx({
    [photoAnimationStyles.photoEntering]: enter,
    [photoAnimationStyles.photoExiting]: exit,
  })}`;

  return (
    <CardPhotoContainer>
      <Photo value={src} className={animatedPhoto} alt={alt} src={src} />
    </CardPhotoContainer>
  );
}
