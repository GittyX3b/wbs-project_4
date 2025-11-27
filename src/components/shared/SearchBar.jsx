import 'cally';
import { Search } from 'lucide-react';

import { InputDayPicker, InputText } from '@components/shared/';

const SearchBar = () => {
  return (
    <article className='py-10'>
      <div className='bg-base-300 grid grid-cols-5 rounded-2xl p-5 shadow-2xl'>
        <InputText label='Departure' placeholder='Your departure here...' />
        <InputText label='Destination' placeholder='Your destination here...' />
        <InputDayPicker title='Start Date' />
        <InputDayPicker title='End Date' />
        <button className='ml-3 flex cursor-pointer items-center justify-center rounded bg-green-900 text-white shadow-xl active:bg-black active:shadow-xs'>
          <Search size={48} />
        </button>
      </div>
    </article>
  );
};

export default SearchBar;
