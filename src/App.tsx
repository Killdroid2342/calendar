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
      <div className='flex flex-col items-center justify-center text-center p-4'>
        <div className='w-96 h-96 mx-auto bg-blue-800 border-4 border-white rounded-md '>
          <header className='flex justify-evenly m-3'>
            <button className='bg-white text-lg font-bold'>{'<<'}</button>
            <button className='bg-white text-lg font-bold'>{'<'}</button>
            <div className='bg-white text-lg font-bold'>
              {allMonths[monthIndex]}
            </div>
            <button className='bg-white text-lg font-bold'>{'>'}</button>
            <button className='bg-white text-lg font-bold'>{'>>'}</button>
          </header>
          {/* MONDAY TO SUN */}
          <div className='flex justify-evenly'>
            {days.map((day) => (
              <div className='m-3'>
                <div className='font-bold text-white'>{day}</div>
                <p className='font-bold text-white'>{currentDate.getDate()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;