import { Outlet } from 'react-router-dom';
import Footer from 'components/main/footer/index';
import Header from 'components/header/Header';

export default function Body({ routes }) {
  return (
    <>
      <Header routes={routes} />
      <Outlet />
      <Footer />
    </>
  );
}
