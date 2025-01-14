import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Focar no campo de entrada</button>
    </div>
  );
};

export default FocusInput;
