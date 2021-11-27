import react, { Component } from "react";
import SliderBook from "./sliderBook";
import 'bootstrap/dist/css/bootstrap.min.css';

export function bookseller(array){
    
    let listSliders = [];
    for (let i = 0; i < array.length; i++) {
      listSliders.push(<div>{array[i]}</div>);
      listSliders.push(<div className="col-12"><SliderBook gender={array[i]}/></div>);
    }
    return listSliders;
}

class Bookseller extends Component{
  render(){
    return(bookseller(this.props.genderslist));
  }
}

export default Bookseller;