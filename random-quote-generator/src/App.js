//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // fetch a random quote when the component mounts
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <h3>The Project Plan</h3>
      <ul>
        <li>Fetch and display a random quote from the Quotable API.</li>
        <li>Include a button to fetch a new quote.</li>
        <li>Explore handling asynchronous data fetching in React.</li>
      </ul>
      <p></p>
      <p></p>
      <p></p>
      <blockquote>"{quote}"</blockquote>
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
}

export default App;
