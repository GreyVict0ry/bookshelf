import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import books from '../services/books';
import bookService from '../services/bookService';
import { ImgBook } from "./imgBook"; 


function SliderBook (){

  let state = {
    book:[]
  }

    bookService.getSearch("romance")
    .then((res)=>{
      state = {book:res};
    });

    

  return(
    <Carousel>
      <Carousel.Item>
        <div className="row col-12">
          {/* verificar ->book es un elemento del arreglo y de hay se tomara la imagen del libro */}
          {state.book.map((book) => 
             <ImgBook key={book.valueOf} infoBook={book}/>
          )}
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row col-12">
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row col-12">
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
          <ImgBook />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}

export default SliderBook;