import { format, startOfToday } from 'date-fns';
// <-- Import startOfToday
import { useEffect, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const INPUT_FORMAT = 'PPP';
const today = startOfToday(); // <-- Get the start of the current day

const InputDayPicker = ({ label }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [inputValue, setInputValue] = useState(format(new Date(), INPUT_FORMAT));
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const pickerRef = useRef(null);

  // You can remove this useEffect now since all logic is in the handler (Fix 1 from previous response)
  // I've removed the redundant useEffect below for cleaner code:

  // const handleDateSelect is now responsible for ALL updates
  const handleDateSelect = (date) => {
    if (date) {
      setSelectedDate(date);
      setInputValue(format(date, INPUT_FORMAT));
      setIsPickerVisible(false);
    }
  };

  const handleInputFocus = () => {
    setIsPickerVisible(true);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsPickerVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [pickerRef]);

  return (
    <div ref={pickerRef} className='form-control relative flex w-full flex-col'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>

      <input
        type='text'
        placeholder='Date'
        value={inputValue}
        onFocus={handleInputFocus}
        onChange={() => {}}
        readOnly
        className='input input-bordered w-full cursor-pointer' // Added input-bordered for DaisyUI look
      />

      {isPickerVisible && (
        <div className='bg-base-100 rounded-box absolute top-full left-0 z-10 mt-2 shadow-xl'>
          <DayPicker
            mode='single'
            selected={selectedDate}
            onSelect={handleDateSelect}
            // --- The Key Change: Disables all dates before 'today' ---
            disabled={{ before: today }}
            // --- Optional: Highlight Today's Date ---
            modifiers={{ today: today }}
            // --------------------------------------------------------
            className='p-4'
          />
        </div>
      )}
    </div>
  );
};
export default InputDayPicker;
