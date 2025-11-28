import { BaggageClaim } from 'lucide-react';
import { NavLink } from 'react-router';
import { Outlet } from 'react-router';

import { SearchBar } from '@components/shared';
import CityList from '@data/destination_list.json';

const About = () => {
  return (
    <div id='Destinations' className='mb-20'>
      <title>Destinations</title>
      <SearchBar />
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {CityList.map((city) => (
          <NavLink
            className='card bg-base-200 row-span-2 grid cursor-pointer grid-rows-subgrid rounded-2xl shadow-2xl select-none'
            to={`${city.name.replaceAll(' ', '').toLowerCase()}`}
            key={city.id}
          >
            <div
              className={`h-60 rounded-t-2xl bg-cover bg-center bg-no-repeat`}
              style={{ backgroundImage: `url('${city.image}')` }}
            ></div>
            <div className='flex justify-between px-10 py-5 text-2xl'>
              <h3>{city.name}</h3>
              <BaggageClaim className='text-neutral-400' />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default About;
