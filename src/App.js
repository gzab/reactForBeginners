import logo from './logo.svg';
import './App.css';

function App() {
    const message = "Hello!";
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
        <WelcomeMessage />
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

function WelcomeMessage() {
  return <p>Welcome!</p>
}

export default App;
