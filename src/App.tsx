import React from 'react';

function App() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  console.log(currentDate);
  return (
    <>
      <div className='border-2 border-white rounded-md flex flex-col items-center justify-center text-center p-4'>
        {/* <Calendar onChange={setDate} value={date} className onClickDay={test} /> */}
        <div className='w-96 h-96 mx-auto bg-slate-400'>
          <header className='flex justify-evenly m-3'>
            <div className='bg-red-200 text-lg font-bold'>{'<<'}</div>
            <div className='bg-red-200 text-lg font-bold'>{'<'}</div>
            <div className='bg-red-200 text-lg font-bold'>
              {'December 2022'}
            </div>
            <div className='bg-red-200 text-lg font-bold'>{'>'}</div>
            <div className='bg-red-200 text-lg font-bold'>{'>>'}</div>
          </header>
          {/* MONDAY TO SUN */}
          <div className='flex justify-evenly'>
            {days.map((day) => (
              <div className='m-3'>
                <div className='font-bold'>{day}</div>
                <p className='font-bold'>{currentDate.getDate() - 5}</p>
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
