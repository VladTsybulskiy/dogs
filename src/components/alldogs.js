import React from "react"
import { Link } from 'react-router-dom'


export default class AllDogs extends React.Component{


  ClickToLink=(changedBreed)=>{
    changedBreed.preventDefault();
    this.props.getOneBreed(changedBreed.target.innerHTML);
  }
  render(){
    console.log(this.props);
    const {breeds}=this.props;
    return(

          <ul className="ListBreedsContainer">

            All Breeds

            {this.props.loadingSidebar&&<p>Loading...</p>}
            {this.props.loadingSidebar===false&&Object.keys(breeds).map(e=>

              <li className="ListBreedsElement"  onClick={this.ClickToLink} key={e}>

              <Link to={`/${e}`}>{e}</Link>

            </li>)}
          </ul>





    )

  }
}