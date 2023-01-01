import React from 'react';

const Days = ({ days }: any) => {
  return (
    <div className='flex justify-evenly'>
      {days.map(
        (
          day:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined
        ) => (
          <div className='m-3'>
            <div className='font-bold text-white'>{day}</div>
          </div>
        )
      )}
    </div>
  );
};

export default Days;
