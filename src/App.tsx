import React, { useState } from 'react';

function App() {
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  let allMonths = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dec = allMonths[currentDate.getMonth()];

  console.log(currentDate);
  return (
    <>
      <div className='border-2 border-white rounded-md flex flex-col items-center justify-center text-center p-4'>
        <div className='w-96 h-96 mx-auto bg-slate-400'>
          <header className='flex justify-evenly m-3'>
            <button className='bg-red-200 text-lg font-bold'>{'<<'}</button>
            <button className='bg-red-200 text-lg font-bold'>{'<'}</button>
            <div className='bg-red-200 text-lg font-bold'>
              {allMonths[monthIndex]}
            </div>
            <button className='bg-red-200 text-lg font-bold'>{'>'}</button>
            <button className='bg-red-200 text-lg font-bold'>{'>>'}</button>
          </header>
          {/* MONDAY TO SUN */}
          <div className='flex justify-evenly'>
            {days.map((day) => (
              <div className='m-3'>
                <div className='font-bold'>{day}</div>
                <p className='font-bold'>{currentDate.getDate()}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <p className='border-white npmborder-2 p-2 ' onClick={test}>
          Here Is Your Selected Date: {date.toDateString()}
        </p> */}
      </div>
    </>
  );
}

export default App;
