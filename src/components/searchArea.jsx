import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bookService from '../services/bookService';
import books from '../services/books';

const SearchArea = (props) => {
    return(
        <>
            <form className="row col-7" action="">
                <input className="form-control" onChange={props.handleSearch} type="text" placeholder="search" aria-label="Search" name="txt_search"/>
            </form>
            <div className="row col-1">
                <button type="button" className="btn btn-light" name="btn_search" onClick={testeoSA}>search</button>
            </div>
        </>
    )

}

function testeoSA () {
    console.log(bookService.getSearch("romance"));
  }

export default SearchArea;