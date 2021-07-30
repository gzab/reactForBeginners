import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css'

function App() {
    const message = "Hello!";
    const [count, setCount] = useState(0)
    const handleClickEvent = (event) => {
      /* handle the event */
    }

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          message === 'Hello!' ? 'The message was "Hello!"' : message
        }
        <WelcomeMessage> Here is some message :) </WelcomeMessage>
        <Counter setCount={setCount} />
        <button onClick={handleClickEvent}>Click here</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
}

function WelcomeMessage({children}) {
  return <p>{children}!</p>
}

function Counter ({setCount}) {
    return (
      <div>
        <p>You clicked 1 times</p>
        <button onClick={() => setCount(1)}>Click me</button>
      </div>
    )
}

export default App;
