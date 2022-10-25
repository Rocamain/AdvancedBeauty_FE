import { FlexContainer, Photo } from 'components/models/GridPhoto/styled';
export default function GridPhoto({ photos }) {
  return (
    <FlexContainer>
      {photos.map(({ alternativeText, formats }, index) => {
        return <Photo key={index} src={formats} alt={alternativeText} />;
      })}
    </FlexContainer>
  );
}
