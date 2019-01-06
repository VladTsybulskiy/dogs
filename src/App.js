import React, { Component } from 'react'
import './App.css'

import { BrowserRouter, Route } from 'react-router-dom'
import AllDogs from './components/alldogs'
import DogInfo from './components/doginfo'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AllDogs />

          <Route path={'/:breed'} component={DogInfo} />
        </div>
      </BrowserRouter>
    )
  }
}
