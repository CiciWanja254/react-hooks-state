import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);
  const [ value, setValue ] = useState(null);

  function increment() {
    console.log(typeof count);
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function handleChange(value) {
    setValue(Number(value));
  }

  function handleSet() {
    setCount(Number(value));
  }

  function handleReset() {
    setCount(0);
  }

  return (<div>
      <h1>
        Count: {count}
      </h1>
      <button onClick={increment}>Add</button>
      <br/>
      <button onClick={decrement}>Remove</button>
      <br/>
      <input type={"number"} value={value} onChange={(event) => handleChange(event.target.value) } />
      <button onClick={handleSet}>Set</button>
      <br/>
      <button onClick={handleReset}>Reset</button>

    </div>    
  );
        
}

export default Counter;
