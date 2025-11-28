// App.jsx
import { Route, Routes } from 'react-router';

import { MainLayout } from '@layouts';
import { About, Contact, Destination, Home, Location, NotFound } from '@pages';

function App() {
  return (
    <>
      <title>app.jsx</title>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='destination' element={<Destination />} />
          <Route path='destination/:slug' element={<Location />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
