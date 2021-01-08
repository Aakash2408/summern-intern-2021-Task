import logo from './logo.svg';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import './App.css';

function App() {
  return (
    <div className="App">
       <Header text={"The Shoppies"} />
      <main className="container parent" data-test="component-app">
       
          <Banner text={"You have nominated five movies!"} />
       
        </main>
    </div>
  );
}

export default App;
