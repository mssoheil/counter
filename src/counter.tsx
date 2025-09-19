import { useState } from "react";
import "./counter.css"

export const Counter = () => {
 const [count, setCount] = useState(0);

 function increment() {
  setCount(prev => prev + 1);
 }

 function decrement() {
  if(count > 0) {
    setCount(prev => prev - 1)
  }
 }

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <div>Count: {count}</div>
      <button onClick={increment}>+</button>
    </div>
  );
}
