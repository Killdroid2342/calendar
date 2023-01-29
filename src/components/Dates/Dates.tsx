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
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (inputValue === '') return;
    setItems([
      ...items,
      {
        id: uuidv4(),
        value: inputValue,
        date: `${selectedDate}/${monthIndex}/${selectedYear}`,
      },
    ]);
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
  const handleDelete = (id: string) => {
    setItems(items.filter((item: Item) => item.id !== id));
    localStorage.setItem(
      'items',
      JSON.stringify(items.filter((item: Item) => item.id !== id))
    );
  };
  return (
    <>
      <div className='flex justify-evenly flex-col'>
        {calendar.map((weeks: any[], index: any) => {
          return (
            <div key={index} className='flex flex-row m-3  '>
              {weeks.map((day, i) => {
                return (
                  <button
                    onClick={() => {
                      let currentDate = day?.getDate();
                      setSelectedDate(currentDate);
                    }}
                    key={i}
                    className='border-2 border-white ml-8 p-2 text-white w-20 font-bold rounded-2xl'
                  >
                    {day?.getDate()}
                  </button>
                );
              })}
            </div>
          );
        })}
        {selectedDate ? (
          <FormDate
            handleSubmit={handleSubmit}
            selectedDate={selectedDate}
            setInputValue={setInputValue}
            items={items}
            handleDelete={handleDelete}
          />
        ) : (
          <div className='text-center font-bold text-white text-2xl p-20'>
            No date selected
          </div>
        )}
      </div>
    </>
  );
};

export default Dates;
