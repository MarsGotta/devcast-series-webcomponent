import { useEffect } from "react";
import logo from "./logo.svg";
import "@devcast/mars-button/mars-button.js";
import "./App.css";

function App() {
  useEffect(() => {
    import("@devcast/mars-button/mars-button.js");
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <mars-button>Hola soy un webComponent!</mars-button>
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
