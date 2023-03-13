import { useLoaderData } from 'react-router-dom';
import { Loading } from 'components/shared/index';
import Section from 'components/main/section/Section';
import SectionMargin from 'components/main/section/SectionMargin.js';

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
            <Section key={index} index={index} sectionData={componentInfo} />
          </SectionMargin>
        );
      })}
    </>
  );
}

export default Main;
