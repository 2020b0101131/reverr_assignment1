
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
         <h3 className='col-md-4'>{counterLabel}</h3>
         <p className='badge bg-secondary text-wrap w-100'>Value: {value}</p>
         <div className='row'>
         <button className='col' onClick={increase}>Increase</button>
         <button className='col'onClick={decrease}>Decrease</button>
         <button onClick={reset}>Reset</button>
         
      {/* ////////////////////////////////////////////////////////////////////////// */}
      {isEditingStartValue ? (
        <input
          type="number"
          value={startVal}
          onChange={handleStartValueChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <button onClick={handleStartValueClick}>Start Value: {startVal}</button>
      )}
     {/* //////////////////////////////////////////////////////////////////////////// */}
     {isEditingLabel ? (
        <input
          type="text"
          value={counterLabel}
          onChange={handleLabelChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        
        <button onClick={handleLabelClick}>Reset Counter Name</button>
      )}
      </div>
    </div>
  );
};

export default Counter;
