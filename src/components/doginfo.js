import React from 'react';



export default class DogInfo extends React.Component {

componentDidMount(){

  fetch(`https://dog.ceo/api/breed/${this.props.changeBreed}/images/random`)
    .then(response=>response.json())

    .then(response=>
      // this.props.changeImg(response.message)
      console.log(response)
    )
}



  render(){

  console.log(this.props.img);

    return(

      <div className="OneDogInfo">
      Breed: {this.props.changeBreed}

      <img src={this.props.img} alt={this.props.changeBreed}/>

      </div>

    )
  }

}