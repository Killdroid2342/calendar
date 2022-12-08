import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarLogic() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className='border-2 border-white rounded-md flex flex-col items-center justify-center text-center'>
        <Calendar onChange={onChange} value={value} />
      </div>
    </>
  );
}

export default CalendarLogic;
