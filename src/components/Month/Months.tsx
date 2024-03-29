const Months = ({
  monthIndex,
  setMonthIndex,
  allMonths,
  selectedYear,
  setSelectedYear,
}: any) => {
  return (
    <header className='flex justify-evenly m-3'>
      <button
        className='text-white text-lg font-bold'
        onClick={() => {
          setSelectedYear(selectedYear - 1);
        }}
      >
        {'<<'}
      </button>
      <button
        className='text-white text-lg font-bold'
        onClick={() => {
          if (monthIndex == 0) return setMonthIndex(11);
          setMonthIndex(monthIndex - 1);
        }}
      >
        {'<'}
      </button>
      <div className='text-white text-lg font-bold'>
        {allMonths[monthIndex]}: {selectedYear}
      </div>
      <button
        className='text-white text-lg font-bold'
        onClick={() => {
          if (monthIndex == 11) return setMonthIndex(0);
          setMonthIndex(monthIndex + 1);
        }}
      >
        {'>'}
      </button>
      <button
        className='text-white text-lg font-bold'
        onClick={() => {
          setSelectedYear(selectedYear + 1);
        }}
      >
        {'>>'}
      </button>
    </header>
  );
};

export default Months;
