import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Footer from 'components/footer/index';
import Header from 'components/header/Header';
import HeadTitle from 'components/main/headTitle/HeadTitle';

export default function Body({ navigationLinks }) {
  const { hash, pathname } = useLocation();
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    setShowFooter(false);
    if (
      Boolean(hash) ||
      pathname === '/confirmation' ||
      pathname === '/error'
    ) {
      setShowFooter(true);
    }
  }, [hash]);

  return (
    <HeadTitle navigationLinks={navigationLinks}>
      <Header navigationLinks={navigationLinks} />
      <main>
        <Outlet
          context={[showFooter, setShowFooter]}
          navigationLinks={navigationLinks}
        />
      </main>
      {showFooter && <Footer />}
    </HeadTitle>
  );
}
