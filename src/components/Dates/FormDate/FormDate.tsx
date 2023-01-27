import { Item } from '../Dates';

interface TProps {
  handleSubmit: any;
  handleDelete: any;
  selectedDate: number;
  setInputValue: any;
  items: Item[];
}

const FormDate = ({
  handleSubmit,
  selectedDate,
  handleDelete,
  setInputValue,
  items,
}: TProps) => {
  return (
    <div>
      <div className='bg- border-4 p-5 mt-10 border-red-800 rounded-md flex flex-col items-center'>
        <h2 className='text-red-800 font-bold text-xl p-3'>{`You have selected day: ${selectedDate}`}</h2>
        <p className='text-red-800 font-bold'>Events:</p>
        <div className='flex flex-col'>
          {items.map((item: Item) => {
            return (
              <div key={item.id}>
                <div className='flex flex-row'>
                  <p className='text-2xl'>{item.value}</p>
                  <button
                    className='border-2 border-red-900 p-1 rounded-md text-red-800 font-bold'
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <p className='text-red-800 font-bold'>Add Event Below</p>
        <form onSubmit={handleSubmit}>
          <input
            className='mt-5 p-2 rounded-md border-2 text-center border-black'
            type='text'
            placeholder='Enter Task Here'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type='submit'
            className='border-2 border-red-800 rounded-md p-4 text-red-800 font-bold mt-5'
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormDate;
