import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/main/footer/index';
import Header from 'components/header/Header';
import ScrollTop from 'components/main/ScrollTop/ScrollTop';

export default function Body({ navigationLinks }) {
  const [showFooter, setShowFooter] = useState(false);

  return (
    <ScrollTop>
      <Header navigationLinks={navigationLinks} />
      <Outlet context={setShowFooter} />
      {showFooter && <Footer />}
    </ScrollTop>
  );
}
