import { Outlet } from 'react-router-dom';
import Footer from './main/footer/index';
import Header from './header/Header';

export default function Body({ routes }) {
  return (
    <>
      <Header routes={routes} />
      <Outlet hello={'hello'} />
      <Footer />
    </>
  );
}
