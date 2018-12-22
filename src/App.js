import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

import {BrowserRouter ,Switch,Route} from "react-router-dom"
import {setAllBreeds,getOneBreed,changeImg} from './actions/actions'
import AllDogs from './components/alldogs'
import DogInfo from './components/doginfo'

class App extends Component {

    componentDidMount(){

      fetch("https://dog.ceo/api/breeds/list/all")

            .then(response=>response.json())

            .then( response=>{
               this.props.setAllBreeds(response.message);
            });

    }

  render() {


    return (

        <BrowserRouter>
          <div className="App">
          <Switch>
            <Route exact path="/" render={()=>(
              <AllDogs
              breeds={this.props.breeds}
              getOneBreed={this.props.getOneBreed}
              />
            )}/>

            <Route path="/info" render={()=>(
              <DogInfo
              img={this.props.img}
              changeImg={this.props.changeImg}
              changeBreed={this.props.changeBreed}
              />
            )}/>
          </Switch>
          </div>
        </BrowserRouter>

    );
  }
}

const mapStateToProps = store => {
  return {
    breeds:store.breeds,
    changeBreed:store.changeBreed,
    img:store.img
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAllBreeds: data=>dispatch(setAllBreeds(data)),
    getOneBreed:  changeBreed=>dispatch(getOneBreed(changeBreed)),
    changeImg: img=>dispatch(changeImg(img))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

