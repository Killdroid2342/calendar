import React from 'react';

const FormDate = ({ handleSubmit, date, setInputValue, items }: any) => {
  return (
    <div>
      <div className='bg- border-4 p-5 mt-10 border-red-800 rounded-md flex flex-col items-center'>
        <h2 className='text-red-800 font-bold text-xl p-3'>{`You have selected day: ${date}`}</h2>
        <p className='text-red-800 font-bold'>Add Event Below</p>
        <form onSubmit={handleSubmit}>
          <input
            className='mt-5 p-2 rounded-md border-2 text-center border-black'
            type='text'
            placeholder='Enter Task Here'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className='border-2 border-red-800 rounded-md p-4 text-red-800 font-bold mt-5'>
            Add Task
          </button>
        </form>
      </div>
      <div className='border-2 border-red-800 rounded-md'>
        <p className='text-red-800 font-bold text-lg'>Current Tasks</p>
        <ul>
          {items.map(
            (
              item: {
                value: any;
              },
              index: undefined
            ) => (
              <li key={index}>{item.value}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default FormDate;
