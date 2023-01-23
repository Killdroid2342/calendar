import { useState, useEffect } from 'react';
import FormDate from './FormDate/FormDate';
import { v4 as uuidv4 } from 'uuid'; // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
export interface Item {
  id: string;
  value: string;
  date: string;
}

const Dates = ({
  calendar,
  selectedDate, // date
  selectedYear, // year
  monthIndex, // month
  setSelectedDate,
}: any) => {
  const [items, setItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // JSON value of list
    const taskListRaw = localStorage.getItem('items');
    // if exists carry on with logic
    if (taskListRaw) {
      const taskList = JSON.parse(taskListRaw);
      const temp = [];
      // TASK 1. Loop over taskList and console log each items
      for (let i = 0; i < taskList.length; i++) {
        console.log(taskList[i]);
        // TASK 2. Try to check if the date matches the selected date for each item
        if (
          taskList[i].date === selectedDate &&
          taskList[i].month === monthIndex &&
          taskList[i].year === selectedYear
        ) {
          // TASK 3. If they do match push/append that task in a temp array.

          temp.push(taskList[i]);
        }
      }
      // TASK 4. Instead of setting taskList to items state set temp instead with appended values.
      setItems(taskList);
      // console.log(taskList);

      //ONLY SET ITEMS THAT IS MAPPED TO CURREENT DATE i.e JSON.parse(data).date === currentDate?
    }
    //since it doesnt exist and the date has changed, reset item
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
