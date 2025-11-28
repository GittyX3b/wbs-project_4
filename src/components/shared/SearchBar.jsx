import 'cally';
import { Search } from 'lucide-react';

import { InputDayPicker, InputText } from '@components/shared/';

const SearchBar = () => {
  return (
    <article className='py-10'>
      <div className='bg-base-300 grid grid-cols-1 gap-3 rounded-2xl p-5 shadow-2xl sm:grid-cols-2 lg:grid-cols-5 lg:gap-0'>
        <InputText label='Departure' placeholder='Your departure here...' />
        <InputText label='Destination' placeholder='Your destination here...' />
        <InputDayPicker label='Start Date' />
        <InputDayPicker label='End Date' />
        <button className='col-span-full mt-5 flex cursor-pointer items-center justify-center rounded bg-green-900 p-2 text-white shadow-xl active:bg-black active:shadow-xs lg:col-span-1 lg:mt-0 lg:ml-3'>
          <Search size={48} />
        </button>
      </div>
    </article>
  );
};

export default SearchBar;
