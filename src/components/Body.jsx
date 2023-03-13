import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import Footer from 'components/footer/index';
import Header from 'components/header/Header';
import HeadTitle from 'components/main/headTitle/HeadTitle';
import useScrollTo from 'hooks/useScrollTo.js';

export default function Body({ navigationLinks }) {
  const { hash } = useLocation();
  const { fromRef } = useScrollTo({ hash });
  return (
    <HeadTitle navigationLinks={navigationLinks}>
      <Header navigationLinks={navigationLinks} />
      <ScrollRestoration />
      <main ref={fromRef}>
        <Outlet navigationLinks={navigationLinks} />
      </main>
      <Footer />
    </HeadTitle>
  );
}
