import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Books from '../services/books';
import bookService from '../services/bookService';
import { ImgBook } from "./imgBook"; 


class SliderBook extends Component{

  constructor(){
    super();
    this.state= {
      books:[]
    }
    this.shelfSize = 12
  }

  componentDidMount() {
    bookService.getSearch(this.props.gender)
      .then(
        (data)=>{
          this.setState({
            books: data
          });
        }
      );
  }

  createCarouselItem(){
    let shelf = [];
    let lenghBooks = this.state.books.length
    let heightBookShelf = Math.ceil( lenghBooks/this.shelfSize);
    for (let j = 0; j < heightBookShelf; j++) {
      let booksInShelf = [];
      let bookInHand = j * this.shelfSize
      for (let i = 0; i < this.shelfSize || i < ((bookInHand)-lenghBooks) ; i++) {
        booksInShelf.push(<Books key={this.state.books[i+(bookInHand)].id} 
                                 title={this.state.books[i+(bookInHand)].volumeInfo.title} 
                                 thumbnail={this.state.books[i+(bookInHand)].volumeInfo.imageLinks.smallThumbnail}/>)
      }
      shelf.push(<Carousel.Item><div className="row col-12">{booksInShelf}</div></Carousel.Item>); 
      
    }
      return shelf
  }

  render(){
    return(
      <Carousel className="" interval={null} >
        {this.createCarouselItem()}
      </Carousel>
    )
  }
}

export default SliderBook;