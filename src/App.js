import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>Coded by <a href="https://github.com/AyanamiKiki/Dictionary-App" target="_blank" rel="noreferrer">Ayanami Kiki</a></small>
        </footer>
    </div>
    </div>
  );
}

export default App;
