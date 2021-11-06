import react, { Component } from "react";
import { ImgBook } from "../components/imgBook";

class books extends Component{
    render(){
        return(
            <div className="col-1">
                <img
                className="d-block w-100"
                // verificar->
                onClick={() => {console.log('ima clicking MATE');}}
                src={this.props.thumbnail}
                alt={this.props.title}
                />
            </div>
        );
    }
}


export default books;
