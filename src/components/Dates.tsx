import { useState } from 'react';

const Dates = ({ calendar }: any) => {
  const [date, setDate] = useState();
  const [text, setText] = useState('');

  const type = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

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
                      let currentDate = day?.getDate();
                      setDate(currentDate);
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
        <div>
          <div className='bg-blue-800 border-4 p-5 mt-10 border-white rounded-md flex flex-col items-center'>
            <h2 className='text-white font-bold text-xl p-3'>{`You have selected day: ${date}`}</h2>
            <p className='text-white font-bold'>Add Event Below</p>
            <input
              className='mt-5  p-2 rounded-md border-2 border-black '
              type='text'
              onChange={(e) => type(e)}
              placeholder='Enter Text Here'
            />
            <button className='border-2 border-white rounded-md p-4 text-white font-bold mt-5'>
              Add Task
            </button>
          </div>
          <div>
            <p className='text-white font-bold text-lg'>Current Tasks</p>
            <p className='text-white mt-5'>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dates;
