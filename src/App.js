
import './App.css';

function App() {

  const item = [
    {titel: "Watch for women",
    description: "VERY NICE WATC",
    price: "1000 nis",
    gender: "woman", 
    brand: "tissot",
    comments:"very good watch"}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
