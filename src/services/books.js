import react, { Component } from "react";
import { Link } from "react-router-dom";
import { ImgBook } from "../components/imgBook";

class books extends Component{
    render(){
        return(
            <div className="col-1">
                <Link to={"/books/" + this.props.idBook}>
                    <img
                    className="d-block w-100 "
                    // verificar->
                    onClick={() => {console.log('ima clicking MATE');}}
                    src={this.props.thumbnail}
                    alt={this.props.title}
                    />
                </Link>
            </div>
        );
    }
}


export default books;
