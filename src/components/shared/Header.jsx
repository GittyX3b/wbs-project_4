import { NavLink } from 'react-router';

import company_logo_xs from '@assets/images/company-logo-xs.png';

const Header = () => {
  return (
    <header className='sticky top-0 z-10 flex w-full justify-center border-b-2 bg-yellow-400 text-green-800 shadow-md'>
      <div className='maxwidth-1200 flex grow items-end justify-between p-5'>
        <div id='header-left' className='flex items-end gap-5'>
          <img src={company_logo_xs} className='' />
          <company className='font-[Gabarito] text-[2.5rem]'>Hip City Trips</company>
        </div>
        <nav id='header-right' className='flex gap-8 text-xl'>
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
