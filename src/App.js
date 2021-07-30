import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import ReactDOM from 'react-dom'

function App() {
    const message = "Hello!";
    const [count, setCount] = useState(0)

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
        <WelcomeMessage myprop={'Welcome to the component props!!!'}/>
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
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

function WelcomeMessage({myprop}) {
  return <p>{myprop}!</p>
}

// function CountState () {
//   const Counter = () => {
//     const [count, setCount] = useState(0)
//
//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>Click me</button>
//       </div>
//     )
//   }
//
//   ReactDOM.render(<Counter />, document.getElementById('app'))
// }

export default App;
