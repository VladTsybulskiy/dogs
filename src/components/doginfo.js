import React from 'react';
import { connect } from "react-redux";
import {setAllBreeds,changeLoadingImage,getOneBreed,changeImg} from '../actions/actions'

class DogInfo extends React.Component {

  state={
    loading:true,
    image:""
  }

componentDidMount(){
  this.props.changeLoadingImage(true);
  fetch(`https://dog.ceo/api/breed/${this.props.match.params.breed}/images/random`)
    .then(response=>response.json())
    .then(response=> {
      this.props.changeLoadingImage(false);
      return{
        image:response.message
      }
    }
  )
  console.log(this.state.image);
}

// componentWillReceiveProps(nextProps){
//   if(this.props.changeBreed!==nextProps.changeBreed){
//   this.props.changeLoadingImage(true);
//   fetch(`https://dog.ceo/api/breed/${this.props.match.params.breed}/images/random`)
//     .then(response=>response.json())
//     .then(response=> {
//
//         this.props.changeImg(response.message)
//         this.props.changeLoadingImage(false);
//       }
//     )}
// }


static getDerivedStateFromProps(nextProps,prevState) {
  if (nextProps.changeBreed !== prevState.changeBreed) {

   const img=fetch(`https://dog.ceo/api/breed/${nextProps.match.params.breed}/images/random`)
      .then(response => response.json())
      .then(response => {
           return response.message
        }
      )
    return {
      image: img,
      loading:false
    }
  }
      else
        return null;
}

  render(){
    return(
      <div className="OneDogInfo">
      Breed: {this.props.changeBreed}
        {this.props.loadingImage&&<p>Loading...</p>}

        {!this.state.loading&&<img src={this.state.image} alt={this.props.changeBreed}/>}

      </div>

    )
  }
}

const mapStateToProps = store => {
  return {
    loadingImage:store.loadingImage,
    breeds:store.breeds,
    changeBreed:store.changeBreed,
    img:store.img
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLoadingImage:loadingImage=>dispatch(changeLoadingImage(loadingImage)),
    setAllBreeds: data=>dispatch(setAllBreeds(data)),
    getOneBreed:  changeBreed=>dispatch(getOneBreed(changeBreed)),
    changeImg: img=>dispatch(changeImg(img))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogInfo);

