
import React, { useState } from 'react';

const Counter = ({ label, startValue }) => {
  const [value, setValue] = useState(startValue);
  const [isEditingLabel, setIsEditingLabel] = useState(false);
  const [isEditingStartValue, setIsEditingStartValue] = useState(false);
  const [counterLabel, setCounterLabel] = useState(label);
  const [startVal, setStartVal] = useState(startValue);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  const reset = () => {
    setValue(startVal);
  };

  const handleLabelClick = () => {
    setIsEditingLabel(true);
  };

  const handleStartValueClick = () => {
    setIsEditingStartValue(true);
  };

  const handleLabelChange = (e) => {
    setCounterLabel(e.target.value);
  };

  const handleStartValueChange = (e) => {
    setStartVal(parseInt(e.target.value) || 0);
  };

  const handleInputBlur = () => {
    setIsEditingLabel(false);
    setIsEditingStartValue(false);
  };

  return (
    <div className='container border'>
         <h3 className='text-center'>{counterLabel}</h3>
         <p className='badge bg-secondary text-wrap w-100 h-25 fs-1'>Value: {value}</p>
         <div className=''>
         <button className='col w-50' onClick={increase}>Increase</button>
         <button className='col w-50'onClick={decrease}>Decrease</button>
         <div className=''>
      {/* ////////////////////////////////////////////////////////////////////////// */}
      {isEditingStartValue ? (
        <input className='w-75'
          type="number"
          value={startVal}
          onChange={handleStartValueChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <button className='col w-75 border-end-0'onClick={handleStartValueClick}>Start Value: {startVal}</button>
      )}
      <button className='col w-25' onClick={reset}>Reset</button>
      </div>
     {/* //////////////////////////////////////////////////////////////////////////// */}
     
     {isEditingLabel ? (
        <input className='w-100'
          type="text"
          value={counterLabel}
          onChange={handleLabelChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        
        <button className='col w-100 mb-3'onClick={handleLabelClick}>Reset Counter Name</button>
      )}
     
      </div>
    </div>
  );
};

export default Counter;
