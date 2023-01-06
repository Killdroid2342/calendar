import React from 'react';

const Dates = ({ calendar }: any) => {
  const testingh = calendar.day?.getDate();
  console.log(testingh);
  return (
    <>
      <div className='flex justify-evenly flex-col border-2 border-white'>
        {calendar.map((weeks: any[]) => {
          return (
            <div className='border-2 border-black flex flex-row m-3  '>
              {weeks.map((day) => {
                return (
                  <button
                    onClick={() => {
                      // console.log(testingh);
                      let currentDate = day?.getDate();
                      console.log(day);
                      console.log(currentDate);
                      // console.log(day?.getDate());
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
        <div className='bg-blue-800 border-4 p-5 mt-10 border-white rounded-md'>
          <h2 className='text-white font-bold text-xl p-3'>{`You have selected ${'testingh'}`}</h2>
          <p className='text-white font-bold'>Add Event Below</p>
          <input
            className='mt-5 p-2 rounded-md border-2 border-black '
            type='text'
          />
        </div>
      </div>
    </>
  );
};

export default Dates;
