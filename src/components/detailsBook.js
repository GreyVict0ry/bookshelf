import { Link } from "react-router-dom";


//Create the complement who contain the relevant book's information
export function DetailsBook(props){
    return(
        <div>
            <h1>Hola mundo</h1>
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