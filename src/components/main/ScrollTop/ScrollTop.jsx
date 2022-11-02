import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const PATHS = {
  '/': 'Home',
  '/Contact': 'Contact',
  '/About-us': 'About-us',
  '/Services-and-Fares': 'Services-and-Fare',
  '/Services-and-Fares/Fares': 'Fares',
  '/Services-and-Fares/Promotions': 'Promotions',
  '/Services-and-Fares/Services-in-Palma-de-Majorca': 'Palma de Majorca',
  "/Services-and-Fares/Services-in-L'Illa-Diagonal": "L'Illa Diagonal",
  '/Services-and-Fares/Services-in-Turo-Park': 'Turo Park',
};

export default function ScrollTop({ children }) {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  useEffect(() => {
    if (navigationType === 'PUSH' && !Boolean(hash)) {
      console.log('navLink');
      window.scrollTo({
        top: 0,
      });
    }
    if (pathname) {
      document.title = '2U - ' + PATHS[pathname];
    }
  }, [pathname, navigationType]);

  return <>{children} </>;
}
