import React, { useState } from 'react';

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
  // getting different days

  let dayOne = allTheDays[0].getDate();
  let dayTwo = allTheDays[1].getDate();
  let dayThree = allTheDays[2].getDate();
  let dayFour = allTheDays[3].getDate();
  let dayFive = allTheDays[4].getDate();
  let daySix = allTheDays[5].getDate();
  let daySev = allTheDays[6].getDate();
  let dayEig = allTheDays[7].getDate();
  let dayNin = allTheDays[8].getDate();
  let dayTen = allTheDays[9].getDate();
  let dayEle = allTheDays[10].getDate();
  let dayTwe = allTheDays[11].getDate();
  let dayThir = allTheDays[12].getDate();
  let dayFourt = allTheDays[13].getDate();
  let dayFift = allTheDays[14].getDate();
  let daySixt = allTheDays[15].getDate();
  let daySevent = allTheDays[16].getDate();
  let dayEight = allTheDays[17].getDate();
  let dayNinet = allTheDays[18].getDate();
  let dayTwen = allTheDays[19].getDate();
  let dayTwent1 = allTheDays[20].getDate();
  let dayTwent2 = allTheDays[21].getDate();
  let dayTwent3 = allTheDays[22].getDate();
  let dayTwent4 = allTheDays[23].getDate();
  let dayTwent5 = allTheDays[24].getDate();
  let dayTwent6 = allTheDays[25].getDate();
  let dayTwent7 = allTheDays[26].getDate();
  let dayTwent8 = allTheDays[27].getDate();
  let dayTwent9 = allTheDays[28].getDate();
  let dayThirt = allTheDays[29].getDate();
  let dayThirt1 = allTheDays[30].getDate();
  // new test
  return (
    <>
      <div className='flex flex-col items-center justify-center text-center p-4'>
        <div className='h-96 mx-auto bg-blue-800 border-4 border-white rounded-md overflow-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-white '>
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
          <div className='flex justify-evenly flex-col border-2 border-white'>
            <div className='border-2 border-black flex flex-row m-3  '>
              <p className='border-2 border-red-900 ml-8 p-2 text-white w-20'></p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'></p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'></p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'></p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayOne}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayTwo}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayThree}
              </p>
            </div>
            <div className='border-2 border-black flex flex-row m-3  '>
              <p className='border-2 border-red-900 ml-8 p-2 text-white w-20'>
                {dayFour}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayFive}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {daySix}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {daySev}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayEig}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayNin}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayTen}
              </p>
            </div>
            <div className='border-2 border-black flex flex-row m-3  '>
              <p className='border-2 border-red-900 ml-8 p-2 text-white w-20'>
                {dayEle}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayTwe}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayThir}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayFourt}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayFift}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {daySixt}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {daySevent}
              </p>
            </div>
            <div className='border-2 border-black flex flex-row m-3  '>
              <p className='border-2 border-red-900 ml-8 p-2 text-white w-20'>
                {dayEight}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayNinet}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayTwen}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayTwent1}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayTwent2}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayTwent3}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayTwent4}
              </p>
            </div>
            <div className='border-2 border-black flex flex-row m-3  '>
              <p className='border-2 border-red-900 ml-8 p-2 text-white w-20'>
                {dayTwent5}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayTwent6}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayTwent7}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayTwent8}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayTwent9}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayThirt}
              </p>
              <p className='border-2 border-red-900 ml-16 p-2 text-white w-20'>
                {dayThirt1}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
