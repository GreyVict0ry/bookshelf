import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookseller from './components/bookseller';
import SearchArea from './components/searchArea';
import bookService from './services/bookService';
import DetailsBook from './components/detailsBook';
import { BrowserRouter as Router, Routes as Switch,  Route,  Link } from "react-router-dom";

let genders = ["Romance", "Aventura", "Action"]

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header row col-12">
            {/* verificar-> */}
            <a className="col-2" href="/" onClick={testeo}>logo</a>
            <SearchArea className="col-8"/>
            <image className="col-2" alt="user"/>
        </header>
        <main className="App-body">
          <Switch>
            <Route path="/" element={<Bookseller key={"BS000001"}
                                                  genderslist={genders}/>}/>
            {/* <Route path="/books/:key" element={<DetailsBook key="1" title="test" author="test" publisher="test" publishedDate="test" categories="test" description="test"/>}/> */}
            <Route path="/books/:key" element={<DetailsBook/>}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

function testeo () {
  
}

export default App;
