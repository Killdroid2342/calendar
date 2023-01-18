import { useState } from 'react';
import FormDate from './FormDate/FormDate';

interface Item {
  value: string;
}

const Dates = ({ calendar }: any) => {
  const [date, setDate] = useState();
  // stacking events
  const [items, setItems] = useState<Item[]>(
    /*JSON.parse(localStorage.getItem('items')) ??*/ []
  );
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setItems([...items, { value: inputValue }]);
    // Storage goes here
  };
  return (
    <>
      <div className='flex justify-evenly flex-col border-2 border-red-800'>
        {calendar.map((weeks: any[]) => {
          return (
            <div className='flex flex-row m-3  '>
              {weeks.map((day) => {
                return (
                  <button
                    onClick={() => {
                      let currentDate = day?.getDate();
                      setDate(currentDate);
                    }}
                    className='border-2 border-red-900 ml-8 p-2 text-red-800 w-20 font-bold'
                  >
                    {day?.getDate()}
                  </button>
                );
              })}
            </div>
          );
        })}
        <FormDate
          handleSubmit={handleSubmit}
          date={date}
          setInputValue={setInputValue}
          items={items}
        />
      </div>
    </>
  );
};

export default Dates;
