import React from 'react';



export default class DogInfo extends React.Component {

componentDidMount(){
  this.props.changeLoadingImage(true);
  fetch(`https://dog.ceo/api/breed/${this.props.changeBreed}/images/random`)
    .then(response=>response.json())
    .then(response=> {
      this.props.changeImg(response.message)
      this.props.changeLoadingImage(false);
    }
)}



  render(){


    return(

      <div className="OneDogInfo">
      Breed: {this.props.changeBreed}
        {this.props.loadingImage&&<p>Loading...</p>}

        {this.props.loadingImage===false&&<img src={this.props.img} alt={this.props.changeBreed}/>}

      </div>

    )
  }

}