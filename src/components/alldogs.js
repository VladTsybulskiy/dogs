import React from 'react'
import { Link } from 'react-router-dom'
import connect from 'react-redux/es/connect/connect'
import {
  changeLoadingSidebar,
  setAllBreeds,
  getOneBreed,
} from '../actions/actions'

export class AllDogs extends React.Component {
  componentDidMount() {
    this.props.changeLoadingSidebar(true)
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())

      .then(response => {
        this.props.changeLoadingSidebar(false)
        this.props.setAllBreeds(response.message)
      })
  }

  ClickToLink = changedBreed => {
    changedBreed.preventDefault()
    this.props.getOneBreed(changedBreed.target.innerHTML)
  }
  render() {
    const { breeds } = this.props
    return (
      <ul className="ListBreedsContainer">
        All Breeds
        {this.props.loadingSidebar && <p>Loading...</p>}
        {this.props.loadingSidebar === false &&
          Object.keys(breeds).map(e => (
            <li
              className="ListBreedsElement"
              onClick={this.ClickToLink}
              key={e}>
              <Link to={`/${e}`}>{e}</Link>
            </li>
          ))}
      </ul>
    )
  }
}

const mapStateToProps = store => {
  return {
    loadingSidebar: store.loadingSidebar,
    breeds: store.breeds,
    changeBreed: store.changeBreed,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLoadingSidebar: loadingSidebar =>
      dispatch(changeLoadingSidebar(loadingSidebar)),
    setAllBreeds: allBreeds => dispatch(setAllBreeds(allBreeds)),
    getOneBreed: oneBreed => dispatch(getOneBreed(oneBreed)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllDogs)
