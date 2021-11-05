import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderBook from './components/sliderBook';
import SearchArea from './components/searchArea';
import bookService from './services/bookService';
// import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row col-12">
          <a className="col-2" href="#" onClick={testeo}>logo</a>
          <SearchArea className="col-8"/>
          <div className="col-2">user</div>
        </div>
      </header>
      <main className="App-body">
        <div>Favorits</div>
        <div className="col-12">
          <SliderBook />
        </div>
        <div>Gender</div>
        <div className="col-12">
          <SliderBook />
        </div>
      </main>
    </div>
  );
}

function testeo () {
  console.log(bookService.getAll());
}

export default App;
