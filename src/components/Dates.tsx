import React from 'react';

const Dates = ({ calendar }: any) => {
  const asd = new Date().getDate();

  return (
    <>
      <div className='flex justify-evenly flex-col border-2 border-white'>
        {calendar.map((weeks: any[]) => {
          return (
            <div className='border-2 border-black flex flex-row m-3  '>
              {weeks.map((day): any => {
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
      <div className='bg-blue-800 border-4 p-5 mt-10 border-white rounded-md'>
        <h2 className='text-white font-bold'>{`You have selected ${asd}`}</h2>
        <input className='mt-5' type='text' />
      </div>
    </>
  );
};

export default Dates;
