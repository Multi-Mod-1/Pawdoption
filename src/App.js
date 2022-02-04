import "./App.css";
import Navbar from "./components/Navbar";
import Router from "./components/Router";

function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Gothic A1' rel='stylesheet'></link>
      <header className="App-header">
        <Navbar />
        <Router />
      </header>
    </div>
  );
}

export default App;
