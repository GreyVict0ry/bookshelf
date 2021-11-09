import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderBook from './components/sliderBook';
import SearchArea from './components/searchArea';
import bookService from './services/bookService';
// import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";

let genders = ["Romance", "Aventura", "Action"]

function bookseller(array) {
  let listSliders = [];
  for (let i = 0; i < array.length; i++) {
    listSliders.push(<div>{genders[i]}</div>);
    listSliders.push(<div className="col-12"><SliderBook gender={genders[i]}/></div>);
  }
  return listSliders;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row col-10">
          {/* verificar-> */}
          <a className="col-2" href="#" onClick={testeo}>logo</a>
          <SearchArea className="col-8"/>
          <div className="col-2">user</div>
        </div>
      </header>
      <main className="App-body">
        {bookseller(genders)}
      </main>
    </div>
  );
}

function testeo () {
  
}

export default App;
