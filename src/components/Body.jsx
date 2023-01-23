import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation, ScrollRestoration } from 'react-router-dom';
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
      pathname === '/error'
    ) {
      setShowFooter(true);
    }
  }, [hash, pathname]);

  return (
    <HeadTitle navigationLinks={navigationLinks}>
      <Header navigationLinks={navigationLinks} />
      <ScrollRestoration />
      <main>
        <Outlet
          context={[showFooter, setShowFooter]}
          navigationLinks={navigationLinks}
        />
      </main>
      <footer>{showFooter && <FooterContent />}</footer>
    </HeadTitle>
  );
}
