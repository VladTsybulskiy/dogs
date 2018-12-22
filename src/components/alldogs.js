import React from "react"
import { Link } from 'react-router-dom'


export default class AllDogs extends React.Component{

  render(){

    const {breeds}=this.props;

    this.ClickToLink=(e)=>{
    e.preventDefault();
    this.props.getOneBreed(e.target.innerHTML);
    }
    return(


          <ul className="ListBreedsContainer">

            All Breeds

            {Object.keys(breeds).map(e=>

              <li className="ListBreedsElement" key={e}>

              <Link to="/info"  onClick={this.ClickToLink}>{e}</Link>

            </li>)}
          </ul>



    )

  }
}