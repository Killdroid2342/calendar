import { useState } from 'react';

const Dates = ({ calendar }: any) => {
  const [date, setDate] = useState();
  const [text, setText] = useState([]);

  const handleSubmit = (event: {
    preventDefault: () => void;
    target: { elements: { item: { value: any } } };
  }) => {
    event.preventDefault();
    setText([...text, event.target.elements.item.value]);
    console.log(text);
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
        <div>
          <div className='bg- border-4 p-5 mt-10 border-red-800 rounded-md flex flex-col items-center'>
            <h2 className='text-red-800 font-bold text-xl p-3'>{`You have selected day: ${date}`}</h2>
            <p className='text-red-800 font-bold'>Add Event Below</p>
            <form onSubmit={handleSubmit}>
              <input
                className='mt-5 p-2 rounded-md border-2 text-center border-black'
                type='text'
                placeholder='Enter Task Here'
              />
              <button className='border-2 border-red-800 rounded-md p-4 text-red-800 font-bold mt-5'>
                Add Task
              </button>
            </form>
          </div>
          <div>
            <p className='text-red-800 font-bold text-lg'>Current Tasks</p>
            <ul className='text-red-800 mt-5'>
              {text.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dates;
