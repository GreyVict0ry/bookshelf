import { useParams } from "react-router-dom";
import bookService from "../services/bookService";

//Create the complement who contain the relevant book's information
export function DetailsBook(props){
    let idBook = useParams().idBook;

    // bookService.getById(idBook)
    //     .then(
    //         (data)=>{
    //             this.setState({
    //             books: data
    //             });
    //         }
    //     );

    console.log(idBook);
    return(
        <div>
            <h1>{idBook}</h1>
            <img src=""/>
            <div className="col-10">
                <div>{props.title}</div>
                <div>autor: {props.author}</div>
                <div>editorial: {props.publisher}</div>
                <div>fecha: {props.publishedDate}</div>
                <div>genero: {props.categories}</div>
                <div>descripcion: {props.description}</div>
            </div>
        </div>
    )
}

export default DetailsBook;