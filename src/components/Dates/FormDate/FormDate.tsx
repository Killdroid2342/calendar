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
      <div className='p-5 rounded-md flex flex-col items-center'>
        <h2 className='text-white font-bold text-2xl p-3'>{`You have selected day: ${selectedDate}`}</h2>
        <p className='text-white font-bold text-xl mb-5'>Events:</p>
        <div className='flex flex-col'>
          {items.map((item: Item) => {
            return (
              <div key={item.id}>
                <div className='flex flex-row'>
                  <p className='text-2xl pr-4 text-white'>{item.value}</p>
                  <button
                    className='border-2 border-white p-1 rounded-md text-white font-bold'
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <p className='text-white font-bold text-2xl mt-5'>Add Event Below:</p>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <input
            className='mt-5 p-2 rounded-md border-2 text-center text-white font-bold border-white bg-transparent outline-none'
            type='text'
            placeholder='Enter Task Here'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type='submit'
            className='border-2 border-white rounded-md p-4 text-white font-bold mt-5'
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormDate;
