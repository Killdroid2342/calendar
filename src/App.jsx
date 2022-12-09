import React from 'react';
import CalendarLogic from './components/Calendar/CalendarLogic';
import CalendarModal from './components/CalendarModal/CalendarModal';

function App() {
  document.title = 'Calendar';
  return (
    <>
      <CalendarLogic />
      <CalendarModal />
    </>
  );
}

export default App;
