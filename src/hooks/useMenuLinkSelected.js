import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const pathBuilder = (path) => {
  const isNestedPath = Boolean(path.lastIndexOf('/'));
  if (isNestedPath) {
    const splitPath = path.split('/');
    splitPath.shift();
    return { mainLink: `/${splitPath[0]}`, dropLink: `/${splitPath[1]}` };
  } else {
    return { mainLink: path, dropLink: null };
  }
};

export default function useMenuLinkSelected() {
  const { pathname, hash } = useLocation();

  const fullPath = pathname + hash;

  const [selectedLink, setSelectedLink] = useState(() => pathBuilder(fullPath));

  return { selectedLink, setSelectedLink, pathBuilder };
}
