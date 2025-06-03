import React, { useState, useRef } from 'react';
import { format, addDays } from 'date-fns';

export const TimeSlotPicker2 = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const dateInputRef = useRef(null);

  const handleInputClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setSelectedDate(dateValue);
    onDateSelect(dateValue); // Send selected date to parent
  };

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="date" className="text-sm font-medium text-gray-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Select a Date
      </label>

      <input
        type="date"
        id="date"
        ref={dateInputRef}
        value={selectedDate}
        onChange={handleDateChange}
        onClick={handleInputClick}
        min={format(addDays(new Date(), 1), 'yyyy-MM-dd')}
        className="px-4 py-1.5 border border-amber-300 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-amber-400 transition"
      />

      {selectedDate && (
        <p className="text-green-600 text-sm mt-1">
          Selected Date: {selectedDate}
        </p>
      )}
    </div>
  );
};
