import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FooterContent from 'components/footer/index';
import Header from 'components/header/Header';
import HeadTitle from 'components/main/headTitle/HeadTitle';

export default function Body({ navigationLinks }) {
  const { hash, pathname } = useLocation();
  const [showFooter, setShowFooter] = useState(Boolean(hash));

  useEffect(() => {
    setShowFooter(false);
    if (
      Boolean(hash) ||
      pathname === '/confirmation' ||
      pathname === '/error' ||
      pathname === '/not_found'
    ) {
      setShowFooter(true);
    }
  }, [hash, pathname]);

  return (
    <>
      <HeadTitle navigationLinks={navigationLinks}>
        <Header navigationLinks={navigationLinks} />

        <Outlet
          context={[showFooter, setShowFooter]}
          navigationLinks={navigationLinks}
        />

        <footer> {showFooter && <FooterContent />}</footer>
      </HeadTitle>
    </>
  );
}
