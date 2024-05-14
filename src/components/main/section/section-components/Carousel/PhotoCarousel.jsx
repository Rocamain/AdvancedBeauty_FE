import {
  Photo,
  CardPhotoContainer,
} from 'components/main/section/section-components/Carousel/styled/';

export default function PhotoCarousel({ alt, src, animation }) {
  return (
    <CardPhotoContainer>
      <Photo
        value={src}
        // enter={enter}
        // exit={exit}
        animation={animation}
        alt={alt}
        src={src}
      />
    </CardPhotoContainer>
  );
}
