import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect } from 'react';

const App = () => {

  const testConnection = useCallback(async () => {
    await fetch("http://localhost:3333", {
      method: 'GET',
    }).then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err.message);
     });
  }, []);

  useEffect(() => {
    testConnection();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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

export default App;
