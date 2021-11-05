import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import books from '../services/books';
import bookService from '../services/bookService';
import { ImgBook } from "./imgBook"; 


class SliderBook extends Component{

  state= {
    books:[]
  }

  searchBooks = () => {
    bookService.getSearch("romance")
      .then(
        (data)=>{
          this.setState({
            books: data
          });
        }
      );
    console.log(bookService.getSearch("romance"));
    console.log(this.state);
  }

  render(){
    return(
      <Carousel>
        <Carousel.Item>
          <div className="row col-12">
            {this.state.books.map(
              (book)=>{
                return <books/>
              }
            )}
          </div>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row col-12">
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row col-12">
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
            <div className="col-1">
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="Second slide"
              />
            </div>
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  
    )
  }
}

export default SliderBook;