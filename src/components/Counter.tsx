import React, { useState, FunctionComponent } from "react";
interface CounterProps {
  /** Initial counter value */
  initialValue?: number;
}

export const Counter: FunctionComponent<CounterProps> = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter => counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter => counter - 1)}>Decrement</button>
    </div>
  );
};
