import React, { useState } from 'react';

function App() {
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());

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

    while (date.getMonth()) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  }
  const now = new Date();
  // all days of the current month
  let allTheDays = getAllDaysInMonth(now.getFullYear(), now.getMonth());
  console.log(allTheDays);

  // getting different days
  let dayOne = allTheDays[0].toString();
  let dayTwo = allTheDays[1].toString();
  let dayThree = allTheDays[2].toString();
  let dayFour = allTheDays[3].toString();
  let dayFive = allTheDays[4].toString();

  console.log(dayOne);

  return (
    <>
      <div className='flex flex-col items-center justify-center text-center p-4'>
        <div className='w-96 h-96 mx-auto bg-blue-800 border-4 border-white rounded-md'>
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

          {/* dates */}
          <div className='flex justify-evenly flex-col border-2 border-white '>
            <div className='m-3 flex flex-row'>
              <div className='font-bold text-white border-2 border-white'>
                {dayOne}
              </div>
              <div className='font-bold text-white border-2 border-white'>
                {dayTwo}
              </div>
            </div>
            <div className='m-3 flex flex-row'>
              <div className='font-bold text-white border-2 border-white'>
                {dayThree}
              </div>
              <div className='font-bold text-white border-2 border-white'>
                {dayFour}
              </div>
            </div>
            <div className='m-3 flex flex-row'>
              <div className='font-bold text-white border-2 border-white'>
                {dayFive}
              </div>
            </div>

            {/* last date */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
