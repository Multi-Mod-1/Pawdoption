import "./App.css";
import Navbar from "./components/Navbar";
import Router from "./components/Router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Router />
      </header>
    </div>
  );
}

export default App;
