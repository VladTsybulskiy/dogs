import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

import {BrowserRouter ,Switch,Route} from "react-router-dom"
import {changeLoadingSidebar,changeLoadingImage,setAllBreeds,getOneBreed,changeImg} from './actions/actions'
import AllDogs from './components/alldogs'
import DogInfo from './components/doginfo'

 class App extends Component {
  
    componentDidMount(){
      this.props.changeLoadingSidebar(true);
      fetch("https://dog.ceo/api/breeds/list/all")

            .then(response=>response.json())

            .then( response=>{
              this.props.changeLoadingSidebar(false);
              this.props.setAllBreeds(response.message);
            });

    }

  render() {


    return (

        <BrowserRouter>

          <div className="App">

            <AllDogs
              loadingSidebar={this.props.loadingSidebar}
              breeds={this.props.breeds}
              getOneBreed={this.props.getOneBreed}
              />

            <Switch>
            <Route  path={`/:${this.props.changeBreed}`} render={()=>(
              <DogInfo
              changeLoadingImage={this.props.changeLoadingImage}
              loadingImage={this.props.loadingImage}
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
    loadingSidebar:store.loadingSidebar,
    loadingImage:store.loadingImage,
    breeds:store.breeds,
    changeBreed:store.changeBreed,
    img:store.img
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLoadingImage:loadingImage=>dispatch(changeLoadingImage(loadingImage)),
    changeLoadingSidebar:loadingSidebar=>dispatch(changeLoadingSidebar(loadingSidebar)),
    setAllBreeds: data=>dispatch(setAllBreeds(data)),
    getOneBreed:  changeBreed=>dispatch(getOneBreed(changeBreed)),
    changeImg: img=>dispatch(changeImg(img))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

