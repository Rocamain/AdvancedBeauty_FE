import { Outlet } from 'react-router-dom';

//  page and layout imports

import Footer from '../components/main/Footer';
import Header from '../components/main/Header';

export default function Body() {
  return (
    <div>
      <Header />
      <h1>Body</h1>
      <Outlet />
      <Footer />
    </div>
  );
}
