import { Outlet } from 'react-router-dom';
import Footer from 'components/main/footer/index';
import Header from 'components/header/Header';
import ScrollTop from 'components/main/ScrollTop/ScrollTop';

export default function Body({ routes }) {
  return (
    <ScrollTop>
      <Header routes={routes} />
      <Outlet />
      <Footer />
    </ScrollTop>
  );
}
