//import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";

function App() {
  // create state to manage the count
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      {/* Display the current count */}
      <h1>Counter App</h1>
      <p id="count">Count: {count}</p>

      {/* Add buttons to increment & decrement */}
      <button onClick={increment}>Increment</button>
      <p></p>
      <p></p>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
