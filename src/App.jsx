import MainLayout from '@layouts/MainLayout';
import About from '@pages/About';
import Contact from '@pages/Contact';
import Destination from '@pages/Destination';
import Home from '@pages/Home';
import { Route, Routes } from 'react-router';

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
