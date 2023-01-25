import { Item } from '../Dates';

interface TProps {
  handleSubmit: any;
  selectedDate: number;
  setInputValue: any;
  items: Item[];
}

const FormDate = ({
  handleSubmit,
  selectedDate,
  setInputValue,
  items,
}: TProps) => {
  return (
    <div>
      <div className='bg- border-4 p-5 mt-10 border-red-800 rounded-md flex flex-col items-center'>
        <h2 className='text-red-800 font-bold text-xl p-3'>{`You have selected day: ${selectedDate}`}</h2>
        <p className='text-red-800 font-bold'>Add Event Below</p>
        <form onSubmit={handleSubmit}>
          <input
            className='mt-5 p-2 rounded-md border-2 text-center border-black'
            type='text'
            placeholder='Enter Task Here'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className='border-2 border-red-800 rounded-md p-4 text-red-800 font-bold mt-5'>
            Add Task
          </button>
        </form>
      </div>
      <div className='border-2 border-red-800 rounded-md'>
        <p className='text-red-800 font-bold text-lg'>Current Tasks</p>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.value}
              {item.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormDate;
