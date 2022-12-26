import React, { useState } from 'react';

type Week = (Date | undefined)[];
type Weeks = Week[];

const getFirstWeek = (year: number, month: number): Weeks => {
  const daysInMonth = new Date(year, month + 1, 0);
  let tempWeek: Week = new Array(7).fill(undefined);
  let weeks: Weeks = [];
  const calendarDays = new Array(daysInMonth.getDate()).fill(undefined);
  calendarDays.forEach((_, i) => {
    let date = new Date(year, month, i + 1);
    // console.log(date);
    if (date.getDay() == 6) {
      tempWeek[date.getDay()] = date;
      weeks.push(tempWeek);
      tempWeek = new Array(7).fill(undefined);
      return;
    }
    tempWeek[date.getDay()] = date;
    // console.log(date);
    console.log(tempWeek[1]);
  });
  weeks.push(tempWeek);
  return weeks;
};

function App() {
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());

  // days
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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
  const now = new Date();

  // I WANT THE FIRST WEEK
  const calendar = getFirstWeek(now.getFullYear(), monthIndex);

  // getting the days when click

  return (
    <>
      <div className='flex flex-col items-center justify-center text-center p-4'>
        <div className=' mx-auto bg-blue-800 border-4 border-white rounded-md overflow-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-white '>
          <header className='flex justify-evenly m-3'>
            <button className='bg-white text-lg font-bold'>{'<<'}</button>
            <button
              className='bg-white text-lg font-bold'
              onClick={() => {
                if (monthIndex == 0) return setMonthIndex(11);
                setMonthIndex(monthIndex - 1);
              }}
            >
              {'<'}
            </button>
            <div className='bg-white text-lg font-bold'>
              {allMonths[monthIndex]}
            </div>
            <button
              className='bg-white text-lg font-bold'
              onClick={() => {
                if (monthIndex == 11) return setMonthIndex(0);
                setMonthIndex(monthIndex + 1);
              }}
            >
              {'>'}
            </button>
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
          <div className='flex justify-evenly flex-col border-2 border-white'>
            {calendar.map((weeks) => {
              return (
                <div className='border-2 border-black flex flex-row m-3  '>
                  {weeks.map((day) => {
                    return (
                      <button className='border-2 border-red-900 ml-8 p-2 text-white w-20'>
                        {day?.getDate()}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
