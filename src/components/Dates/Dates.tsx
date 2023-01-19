import { useState, useEffect } from 'react';
import FormDate from './FormDate/FormDate';

interface Item {
  value: string;
}

const Dates = ({ calendar }: any) => {
  const [date, setDate] = useState();
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('items');
    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setItems([...items, { value: inputValue }]);

    if (inputValue === '') return;
    localStorage.setItem(
      'items',
      JSON.stringify([...items, { value: inputValue }])
    );
    setInputValue('');
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
