import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titleFormatter = (pathname) => {
  const pathArray = pathname.split('/');
  const paths = pathArray.filter((path) => path !== '');
  const pathArrayLength = paths.length - 1;
  let title = paths[pathArrayLength];

  if (title) {
    title = title.replaceAll('-', ' ');
    title = title[0].toUpperCase() + title.slice(1);
  }
  return title ? title : 'Home';
};

export default function HeadTitle({ children, navigationLinks }) {
  const { pathname } = useLocation();
  const title = titleFormatter(pathname);

  useEffect(() => {
    if (pathname) {
      document.title = `AB - ${title}`;
    }
  }, [pathname, title]);

  return <>{children} </>;
}
