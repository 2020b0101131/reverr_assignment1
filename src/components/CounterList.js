import React, { useState } from 'react';
import Counter from './Counter.js';


const CounterList = () => {
    const [counters, setCounters] = useState([{ label: 'Counter 1', startValue: 0 }]);
  
    const addCounter = () => {
      const newCounter = {
        label: `Counter ${counters.length + 1}`,
        startValue: 0,
      };
      setCounters([...counters, newCounter]);
    };
  
    const removeCounter = (index) => {
      const updatedCounters = counters.filter((_, i) => i !== index);
      setCounters(updatedCounters);
    };
  
    return (
      <div className='container w-25 border border-2 '>
       <div>
        {counters.map((counter, index) => (
          <div className='row'key={index}>
            <Counter label={counter.label} startValue={counter.startValue} />
            <button className='bg-danger' onClick={() => removeCounter(index)}>Remove Counter</button>
          </div>
        ))}
         <div className='row'>
        <button className='bg-success'onClick={addCounter}>Add Counter</button>
        </div>
        </div>
      </div>
    );
  };

export default CounterList;