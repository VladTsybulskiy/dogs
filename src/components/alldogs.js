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

            {this.props.loadingSidebar&&<p>Loading...</p>}
            {this.props.loadingSidebar===false&&Object.keys(breeds).map(e=>

              <li className="ListBreedsElement" key={e}>

              <Link  onClick={this.ClickToLink} to="/info" >{e}</Link>

            </li>)}
          </ul>





    )

  }
}