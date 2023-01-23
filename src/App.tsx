import { useState } from 'react';
import Months from './components/Month/Months';
import Days from './components/Days/Days';
import Dates from './components/Dates/Dates';

type Week = (Date | undefined)[];
type Weeks = Week[];

const getFirstWeek = (year: number, month: number): Weeks => {
  const daysInMonth = new Date(year, month + 1, 0);
  let tempWeek: Week = new Array(7).fill(undefined);
  let weeks: Weeks = [];
  const calendarDays = new Array(daysInMonth.getDate()).fill(undefined);
  calendarDays.forEach((_, i) => {
    let date = new Date(year, month, i + 1);
    // console.log(date);
    if (date.getDay() == 6) {
      tempWeek[date.getDay()] = date;
      weeks.push(tempWeek);
      tempWeek = new Array(7).fill(undefined);
      return;
    }
    tempWeek[date.getDay()] = date;
  });
  weeks.push(tempWeek);
  return weeks;
};

// days
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// all months are HERE
let allMonths = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function App() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());

  const calendar = getFirstWeek(selectedYear, monthIndex);
  console.log('DATE: ', { selectedDate, monthIndex, selectedYear });
  return (
    <>
      <div className='flex flex-col items-center justify-center text-center p-4'>
        <div className='mx-auto bg-white border-4 border-red-800 rounded-md'>
          <Months
            monthIndex={monthIndex}
            setMonthIndex={setMonthIndex}
            allMonths={allMonths}
          />
          <Days days={days} />
          <Dates
            getFirstWeek={getFirstWeek}
            calendar={calendar}
            selectedDate={selectedDate}
            selectedYear={selectedYear}
            monthIndex={monthIndex}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
