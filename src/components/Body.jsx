import { Outlet } from 'react-router-dom';
import Footer from 'components/footer/index';
import Header from 'components/header/Header';
import HeadTitle from 'components/main/headTitle/HeadTitle';

export default function Body({ navigationLinks }) {
  return (
    <>
      <HeadTitle navigationLinks={navigationLinks}>
        <Header navigationLinks={navigationLinks} />
        {/* outlet is the main*/}
        <Outlet navigationLinks={navigationLinks} />
        <Footer />
      </HeadTitle>
    </>
  );
}
