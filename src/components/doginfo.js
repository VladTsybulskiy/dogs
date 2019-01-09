import React from 'react'
import { connect } from 'react-redux'
import {
  setAllBreeds,
  changeLoadingImage,
  getOneBreed,
  changeImg,
} from '../actions/actions'

class DogInfo extends React.Component {
  componentDidMount() {
    this.props.changeLoadingImage(true)
    fetch(
      `https://dog.ceo/api/breed/${this.props.match.params.breed}/images/random`
    )
      .then(response => response.json())
      .then(response => {
        this.props.changeLoadingImage(false)
        this.props.changeImg(response.message)
      })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.changeBreed !== this.props.changeBreed) {
      fetch(
        `https://dog.ceo/api/breed/${
          this.props.match.params.breed
        }/images/random`
      )
        .then(response => response.json())
        .then(response => {
          this.props.changeLoadingImage(false)
          this.props.changeImg(response.message)
        })
    }
  }

  render() {
    return (
      <div className="OneDogInfo">
        Breed: {this.props.changeBreed}
        {this.props.loadingImage && <p>Loading...</p>}
        {!this.props.loadingImage && (
          <img src={this.props.img} alt={this.props.changeBreed} />
        )}
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    loadingImage: store.loadingImage,
    breeds: store.breeds,
    changeBreed: store.changeBreed,
    img: store.img,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLoadingImage: loadingImage =>
      dispatch(changeLoadingImage(loadingImage)),
    setAllBreeds: data => dispatch(setAllBreeds(data)),
    getOneBreed: changeBreed => dispatch(getOneBreed(changeBreed)),
    changeImg: img => dispatch(changeImg(img)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogInfo)
