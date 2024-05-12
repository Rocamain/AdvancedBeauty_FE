import { useLoaderData } from 'react-router-dom';
import { Loading } from 'components/shared';
import SectionMargin from 'components/main/section/SectionMargin';
import Section from 'components/main/section/Section';

function Main() {
  const { components } = useLoaderData();

  if (!components) {
    return <Loading />;
  }

  return (
    <>
      {components.map((componentInfo, index) => {
        return (
          <SectionMargin key={index} section={componentInfo}>
            <Section sectionData={componentInfo} />
          </SectionMargin>
        );
      })}
    </>
  );
}

export default Main;
