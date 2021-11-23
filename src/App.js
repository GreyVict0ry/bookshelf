import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderBook from './components/sliderBook';
import SearchArea from './components/searchArea';
import bookService from './services/bookService';
import DetailsBook from './components/detailsBook';
import { BrowserRouter as Router, Routes as Switch,  Route,  Link } from "react-router-dom";

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
    <Router>
      <div className="App">
        <header className="App-header row col-10">
            {/* verificar-> */}
            <a className="col-2" href="#" onClick={testeo}>logo</a>
            <SearchArea className="col-8"/>
            <image className="col-2" alt="user"/>
        </header>
        <main className="App-body">
          <Switch>
            <Route path="/" element={bookseller(genders)}/>
            <Route path="/books/:bookId" element={<DetailsBook/>}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

function testeo () {
  
}

export default App;
