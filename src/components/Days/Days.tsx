const Days = ({ days }: any) => {
  return (
    <div className='flex justify-evenly'>
      {days.map((day: any, index: any) => (
        <div className='m-3' key={index}>
          <div className='font-bold text-red-800'>{day}</div>
        </div>
      ))}
    </div>
  );
};

export default Days;
