import React, { useState } from 'react';

const Modal = ({ message, isOpen, onClose }) => {
  const [open, setOpen] = useState(false);
  if (!isOpen) return null;

  return (
    <div>
      <div className='border-4 border-red-900 w-96 h-96 flex flex-col justify-end'>
        {open}
        <button className='border-2 border-white w-20'>X</button>
      </div>
    </div>
  );
};

export default Modal;
