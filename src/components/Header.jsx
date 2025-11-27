import { NavLink } from 'react-router';

import company_logo_xs from '@assets/images/company-logo-xs.png';

const Header = () => {
  return (
    <header className='sticky top-0 z-10 flex w-full justify-center border-b border-zinc-400 bg-yellow-400 text-green-800 shadow-md'>
      <div className='maxwidth-1200 flex grow items-end justify-between p-5'>
        <NavLink to='/' id='header-left' className='flex items-end gap-5'>
          <img src={company_logo_xs} className='' />
          <span className='company-name text-[2.5rem]'>Hip City Trips</span>
        </NavLink>
        <nav id='header-right' className='hidden gap-8 text-xl md:flex'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/destination' className={({ isActive }) => (isActive ? 'active' : '')}>
            Destinations
          </NavLink>
          <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
