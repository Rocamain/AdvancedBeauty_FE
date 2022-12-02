import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const PATHS = {
  '/': 'Home',
  '/Error': 'Oops!',
  '/Contact': 'Contact',
  '/Confirmation': 'Confirmation',
  '/About-us': 'About us',
  '/About-us/': 'About us',
  '/Services-and-Fares': 'Services and Fares',
  '/Services-and-Fares/': 'Services and Fares',
  '/Services-and-Fares/Fares': 'Our Fares',
  '/Services-and-Fares/Promotions': 'Promotions',
  '/Services-and-Fares/Promotions/': 'Promotions',
  '/Services-and-Fares/Services-in-Palma-de-Majorca': 'Palma de Majorca',
  '/Services-and-Fares/Services-in-Palma-de-Majorca/': 'Palma de Majorca',
  "/Services-and-Fares/Services-in-L'Illa-Diagonal": "L'Illa Diagonal",
  "/Services-and-Fares/Services-in-L'Illa-Diagonal/": "L'Illa Diagonal",
  '/Services-and-Fares/Services-in-Turo-Park/': 'Turo Park',
  '/Services-and-Fares/Services-in-Turo-Park': 'Turo Park',
};

export default function ScrollTop({ children }) {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  useEffect(() => {
    if (navigationType === 'PUSH' && !Boolean(hash)) {
      window.scrollTo({
        top: 0,
      });
    }
    if (pathname) {
      document.title = `2U - ${
        PATHS[pathname] ? PATHS[pathname] : 'Not found'
      }`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, navigationType]);

  return <>{children} </>;
}
