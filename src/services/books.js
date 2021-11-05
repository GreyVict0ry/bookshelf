import react, { Component } from "react";
import { ImgBook } from "../components/imgBook";

class books extends Component{
    state = {
        itemsBook: 0
    }

    render(){
        return(
            <div>
                <img
                className="d-block w-100"
                src="https://via.placeholder.com/150x300"
                alt="First slide"
                />
            </div>
        );
    }
}


export default books;
