import React, { useState } from 'react';

function App() {
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  // all months are HERE
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

  // GETTING ALL THE DATES IN THE MONTH
  function getAllDaysInMonth(year: number, month: number) {
    const date = new Date(year, month);

    const dates = [];

    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  }
  const now = new Date();
  // all days of the current month
  let allTheDays = getAllDaysInMonth(now.getFullYear(), now.getMonth());
  console.log(allTheDays);

  // console.log(currentDate);
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
              </div>
            ))}
          </div>
          {/* dates */}
          <div className='flex justify-evenly border-2 border-white fit-content'>
            <p className='font-bold text-white border-2 border-red-600'>{}</p>
            <p className='font-bold text-white border-2 border-red-600'>2</p>
            <p className='font-bold text-white border-2 border-red-600'>3</p>
            <p className='font-bold text-white border-2 border-red-600'>4</p>
            <p className='font-bold text-white border-2 border-red-600'>5</p>
            <p className='font-bold text-white border-2 border-red-600'>6</p>
            <p className='font-bold text-white border-2 border-red-600'>7</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
