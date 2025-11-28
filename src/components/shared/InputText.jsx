import { useState } from 'react';

const InputText = ({ label, placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='form-control w-full'>
      <label className='label' htmlFor='simple-text-input'>
        <span className='label-text font-medium'>{label}</span>
      </label>

      <input
        type='text'
        id='simple-text-input'
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className='input input-bordered w-full'
      />
    </div>
  );
};

export default InputText;
