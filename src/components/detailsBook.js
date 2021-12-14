import { Component } from "react";
import { useParams } from "react-router-dom";
import bookService from "../services/bookService";

//Create the complement who contain the relevant book's information
class DetailsBook extends Component{
    constructor(){
        super();
        this.state= {
          books:[]
        }
        this.idBook = this.props.match.params.idBook;

      }
    
    componentDidMount() {
        bookService.getSearch(this.props.match.params.idBook)
            .then(
                (data)=>{
                    this.setState({
                    books: data
                });
            }
        );
    }

    render(){
        return(
            <div>
                <h1>{this.idBook}</h1>
                {/* <img src=""/> */}
                <div className="col-10">
                    <div>{this.state.books[0].volumeInfo.title}</div>
                    <div>autor: {this.state.books[0].volumeInfo.authors}</div>
                    <div>editorial: {this.state.books[0].volumeInfo.publisher}</div>
                    <div>año: {this.state.books[0].volumeInfo.publishedDate}</div>
                    <div>descripcion: {this.state.books[0].volumeInfo.description}</div>
                </div>
            </div>
        )
    }
}

export default DetailsBook;