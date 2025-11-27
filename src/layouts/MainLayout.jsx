import { Outlet } from 'react-router';

import { Footer, Header } from '@components';

const MainLayout = () => {
  return (
    <div id='MainLayout' className='flex min-h-screen w-full flex-col'>
      <Header />
      <main className='maxwidth-1200 m-auto w-full flex-1 p-10'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
