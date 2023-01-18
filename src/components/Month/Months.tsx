const Months = ({ monthIndex, setMonthIndex, allMonths }: any) => {
  return (
    <header className='flex justify-evenly m-3'>
      <button
        className='text-red-800 text-lg font-bold'
        onClick={() => {
          if (monthIndex == 0) return setMonthIndex(11);
          setMonthIndex(monthIndex - 1);
        }}
      >
        {'<<'}
      </button>
      <button
        className='text-red-800 text-lg font-bold'
        onClick={() => {
          if (monthIndex == 0) return setMonthIndex(11);
          setMonthIndex(monthIndex - 1);
        }}
      >
        {'<'}
      </button>
      <div className='text-red-800 text-lg font-bold'>
        {allMonths[monthIndex]}
      </div>
      <button
        className='text-red-800 text-lg font-bold'
        onClick={() => {
          if (monthIndex == 11) return setMonthIndex(0);
          setMonthIndex(monthIndex + 1);
        }}
      >
        {'>'}
      </button>
      <button
        className='text-red-800 text-lg font-bold'
        onClick={() => {
          if (monthIndex == 11) return setMonthIndex(0);
          setMonthIndex(monthIndex + 1);
        }}
      >
        {'>>'}
      </button>
    </header>
  );
};

export default Months;
