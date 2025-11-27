import { Route, Routes } from 'react-router';

import { MainLayout } from '@layouts';
import { About, Contact, Destination, Home, NotFound } from '@pages';

function App() {
  return (
    <>
      <title>app.jsx</title>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='destination' element={<Destination />}>
            <Route path=':slug' element={<Location />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
