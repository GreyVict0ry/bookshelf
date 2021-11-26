import { Link } from "react-router-dom";


//Create the complement who contain the relevant book's information
export function DetailsBook(){
    return(
        <div>
            <h1>Hola mundo</h1>
            <img src=""/>
            <div className="col-10">
                <div>{this.props.title}</div>
                <div>autor: {this.props.author}</div>
                <div>editorial: {this.props.publisher}</div>
                <div>fecha: {this.props.publishedDate}</div>
                <div>genero: {this.props.categories}</div>
                <div>descripcion: {this.props.description}</div>
            </div>
        </div>
    )
}

export default DetailsBook;