import useFetchData from '../hooks/useFetchData';
import * as Models from '../components/models/index';

function ComponentSelector({ name }) {
  const path = name.toLowerCase();

  const { error, loading, data } = useFetchData(path);

  const renderModelComponents = (components) => {
    const componentsKey = Object.keys(components);

    const models = componentsKey.map((component, index) => {
      let Model = Models[component[0].toUpperCase() + component.slice(1)];
      return <Model key={index} path={path} />;
    });
    return models;
  };

  return <main> hello</main>;
}

export default ComponentSelector;
