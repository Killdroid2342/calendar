import { useState, useEffect } from 'react';
import FormDate from './FormDate/FormDate';
import { v4 as uuidv4 } from 'uuid';
export interface Item {
  id: string;
  value: string;
  date: string;
}

const Dates = ({
  calendar,
  selectedDate,
  selectedYear,
  monthIndex,
  setSelectedDate,
}: any) => {
  const [items, setItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const taskListRaw = localStorage.getItem('items');
    if (taskListRaw) {
      const taskList = JSON.parse(taskListRaw);
      const filteredTasks = taskList.filter((task: Item) => {
        return task.date === `${selectedDate}/${monthIndex}/${selectedYear}`;
      });
      setItems(filteredTasks);
    }
  }, [selectedDate, monthIndex, selectedYear]);
  console.log('RENDER');
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: uuidv4(),
        value: inputValue,
        date: `${selectedDate}/${monthIndex}/${selectedYear}`,
      },
    ]);

    if (inputValue === '') return;
    localStorage.setItem(
      'items',
      JSON.stringify([
        ...items,
        {
          id: uuidv4(),
          value: inputValue,
          date: `${selectedDate}/${monthIndex}/${selectedYear}`,
        },
      ])
    );
    setInputValue('');
  };
  return (
    <>
      <div className='flex justify-evenly flex-col border-2 border-red-800'>
        {calendar.map((weeks: any[]) => {
          return (
            <div className='flex flex-row m-3  '>
              {weeks.map((day, i) => {
                return (
                  <button
                    onClick={() => {
                      let currentDate = day?.getDate();
                      setSelectedDate(currentDate);
                    }}
                    key={i}
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
          selectedDate={selectedDate}
          setInputValue={setInputValue}
          items={items}
        />
      </div>
    </>
  );
};

export default Dates;
