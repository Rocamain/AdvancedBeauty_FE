import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './header/Header';

export default function Body(props) {
  console.log('BODDDDDDDDYYYY', props);
  return (
    <>
      <Header {...props} />
      <h1>Body</h1>
      {/* <Outlet /> */}
      <Footer />
    </>
  );
}
