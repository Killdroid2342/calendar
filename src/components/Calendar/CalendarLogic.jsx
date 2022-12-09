import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarLogic() {
  const [date, setDate] = useState(new Date());
  const test = () => {
    console.log(date);
  };
  return (
    <>
      <div className='border-2 border-white rounded-md flex flex-col items-center justify-center text-center p-4'>
        <Calendar
          onChange={setDate}
          value={date}
          className='p-2 border-2 border-red-900'
          onClickDay={test}
        />
        <p className='border-white border-2 p-2 ' onClick={test}>
          Here Is Your Selected Date: {date.toDateString()}
        </p>
      </div>
    </>
  );
}

export default CalendarLogic;
