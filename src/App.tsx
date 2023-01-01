import { useState } from 'react';
import Months from './components/Months';
import Days from './components/Days';

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
  // console.log(calendar);
  // getting the days when click

  return (
    <>
      <div className='flex flex-col items-center justify-center text-center p-4'>
        <h1 className='text-2xl font-bold text-white p-5'>{`You are on ${allMonths[monthIndex]}`}</h1>
        <div className=' mx-auto bg-blue-800 border-4 border-white rounded-md'>
          {/* changing months */}
          <Months
            monthIndex={monthIndex}
            setMonthIndex={setMonthIndex}
            allMonths={allMonths}
          />
          <Days days={days} />
          {/* dates */}
          <div className='flex justify-evenly flex-col border-2 border-white'>
            {calendar.map((weeks: any[]) => {
              return (
                <div className='border-2 border-black flex flex-row m-3  '>
                  {weeks.map((day) => {
                    return (
                      <button
                        onClick={() => {
                          let currentDate = day?.getDate();
                          console.log(currentDate);
                        }}
                        className='border-2 border-red-900 ml-8 p-2 text-white w-20'
                      >
                        {day?.getDate()}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        {/* DAYS SELECTED*/}

        <div className='bg-blue-800 border-4 p-5 mt-10 border-white rounded-md'>
          <h2 className='text-white font-bold'>{`You are on day ${'asd'}`}</h2>
          <input className='mt-5' type='text' />
        </div>
      </div>
    </>
  );
}

export default App;
