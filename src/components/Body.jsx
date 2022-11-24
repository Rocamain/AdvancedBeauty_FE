import { Outlet } from 'react-router-dom';
import Footer from 'components/main/footer/index';
import Header from 'components/header/Header';
import ScrollTop from 'components/main/ScrollTop/ScrollTop';

export default function Body({ navigationLinks }) {
  return (
    <ScrollTop>
      <Header navigationLinks={navigationLinks} />
      <Outlet />
      <Footer />
    </ScrollTop>
  );
}
