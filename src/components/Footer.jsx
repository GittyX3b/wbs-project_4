import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <footer className='w-full bg-yellow-300 p-5 pb-15 text-center'>
      <nav id='footer-nav' className='flex justify-center gap-5 p-8 text-xs'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/destination' className={({ isActive }) => (isActive ? 'active' : '')}>
          Destinations
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
      </nav>
      <span className='pb-12'>© 2025 HCT Company</span>
    </footer>
  );
};

export default Footer;
